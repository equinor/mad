ARG NODE_VERSION=18.18.0

# Alpine image
FROM node:${NODE_VERSION}-alpine AS alpine
RUN apk update
RUN apk add --no-cache libc6-compat git openssh bash

# Setup yarn and turbo on the alpine base
FROM alpine as base
RUN yarn global add turbo
RUN yarn config set store-dir ~/.yarn-store

# Prune projects
FROM base AS pruner
ARG PROJECT=@equinor/mad-chronicles

WORKDIR /app
COPY . .
RUN turbo prune --scope=${PROJECT} --docker

# Build the project
FROM base AS builder
ARG PROJECT=@equinor/mad-chronicles
ARG TARGET_ENVIRONMENTS=test
WORKDIR /app

# Copy lockfile and package.json's of isolated subworkspace
COPY --from=pruner /app/out/yarn.lock ./yarn.lock
COPY --from=pruner /app/out/json/ .

# First install the dependencies (as they change less often)
RUN yarn install --network-concurrency 1 --frozen-lockfile

# Copy source code of isolated subworkspace
COPY --from=pruner /app/out/full/ .
RUN turbo build
RUN turbo use:${TARGET_ENVIRONMENTS} --filter=${PROJECT}
RUN turbo docker --filter=${PROJECT}
RUN rm -rf ./**/*/src

# ---- Prod ----

FROM nginxinc/nginx-unprivileged:alpine
ARG PROJECT=chronicles
USER 0
WORKDIR /app/apps/${PROJECT}
COPY --from=builder /app/apps/${PROJECT}/dist /app

RUN echo "server { \
        add_header Strict-Transport-Security \"max-age=31536000; includeSubDomains\"; \
        add_header X-Frame-Options \"SAMEORIGIN\"; \
        add_header X-Content-Type-Options \"nosniff\";  \
        add_header Referrer-Policy \"strict-origin-when-cross-origin\"; \
        add_header Content-Security-Policy \"default-src https: data: blob: 'self'; connect-src 'self' https://*.radix.equinor.com/ https://login.microsoftonline.com/ https://dc.services.visualstudio.com/; style-src 'unsafe-inline'; media-src 'self' https://*.radix.equinor.com/ https://*.blob.core.windows.net/; img-src 'self' blob: data: \"; \
        add_header Permissions-Policy \" camera=(), microphone=(), payment=(), usb=() \"; \
        listen 3000; \
        root /app; \
        index index.html; \
        server_name _; \
        location /config/ { try_files \$uri \$uri/ /app-config.js; } \
        location / {  \
          index  index.html index.htm; \
          try_files \$uri \$uri/ /index.html;  \
        } \
     }" \
    > /etc/nginx/conf.d/default.conf
RUN cat /etc/nginx/conf.d/default.conf

RUN touch /app/app-config.js
RUN chown -R nginx /app/app-config.js \
    && chown -R nginx /etc/nginx/conf.d \
    && chown -R nginx /app

# Add a new group "radix-non-root-group" with group id 1001
RUN addgroup -S -g 1001 radix-non-root-group

# Add a new user "radix-non-root-user" with user id 1001 and include in group
RUN adduser -S -u 1001 -G radix-non-root-group radix-non-root-user

USER 1001
CMD ["/bin/sh", "-c", "nginx -g \"daemon off;\""]