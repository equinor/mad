"use strict";(self.webpackChunk_equinor_mad_platform_docs=self.webpackChunk_equinor_mad_platform_docs||[]).push([[8730],{6571:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(1085),r=t(1184);const i={sidebar_label:"Experimental features",description:"Learn how to use experimental features!"},a="Using experimental features (optional)",s={id:"mad-core/migration-guide/using-experimental-features",title:"Using experimental features (optional)",description:"Learn how to use experimental features!",source:"@site/docs/mad-core/migration-guide/11-using-experimental-features.md",sourceDirName:"mad-core/migration-guide",slug:"/mad-core/migration-guide/using-experimental-features",permalink:"/mad/docs/mad-core/migration-guide/using-experimental-features",draft:!1,unlisted:!1,editUrl:"https://github.com/equinor/mad/tree/main/apps/docs/shared/docs/mad-core/migration-guide/11-using-experimental-features.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_label:"Experimental features",description:"Learn how to use experimental features!"},sidebar:"coreSidebar",previous:{title:"Use addToast",permalink:"/mad/docs/mad-core/migration-guide/use-addToast"}},d={},c=[];function u(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"using-experimental-features-optional",children:"Using experimental features (optional)"}),"\n",(0,o.jsx)(n.p,{children:"Some functionalities that are implemented but not mature enough for widespread use will be made\navailable as an experimental option for developers to test out."}),"\n",(0,o.jsx)(n.p,{children:"Currently the only experimental feature is switching from react-native-msal to expo-auth-session for\nauthentication handling."}),"\n",(0,o.jsxs)(n.p,{children:["To use this experimental feature, you have to install ",(0,o.jsx)(n.code,{children:"expo-auth-session"})," and ",(0,o.jsx)(n.code,{children:"expo-crypto"})," in your\nproject."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"npm i expo-auth-session expo-crypto\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"yarn add expo-auth-session expo-crypto\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Next, add this to your ",(0,o.jsx)(n.code,{children:"mad.config.ts"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"experimental: {\n    useExpoAuthSession: true;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"mad-core"})," package should handle most of the authentication logic for you. If there are certain\nusages in your app that use any ",(0,o.jsx)(n.code,{children:"mad-auth"})," functions directly, you can import these functions\ndirectly as normal, as long as you have the ",(0,o.jsx)(n.code,{children:"useExpoAuthSession"})," flag in your ",(0,o.jsx)(n.code,{children:"mad.config.ts"})," file.\nIf you want to learn more about this feature please check out the ",(0,o.jsx)(n.code,{children:"README.md"})," in\n",(0,o.jsx)(n.code,{children:"mad-auth/Expo-AuthSession"})]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1184:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(4041);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);