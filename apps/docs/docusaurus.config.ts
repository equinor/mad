import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type { Options as DocGenOption } from "docusaurus-plugin-react-docgen-typescript";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "MAD Platform",
    tagline: "For all your mobile needs",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://equinor.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/mad/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "equinor", // Usually your GitHub org/user name.
    projectName: "mad", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/equinor/mad/tree/main/apps/docs/shared",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/mad-social-card.png",
        navbar: {
            title: "MAD",
            logo: {
                alt: "the mad logo",
                src: "img/mad-head-light.svg",
                srcDark: "img/mad-head-dark.svg",
            },
            items: [
                {
                    type: "dropdown",
                    position: "left",
                    label: "Packages",
                    items: [
                        {
                            type: "docSidebar",
                            sidebarId: "coreSidebar",
                            label: "MAD Core",
                        },
                        {
                            type: "docSidebar",
                            sidebarId: "componentsSidebar",
                            label: "Components",
                        },
                    ],
                },
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "Docusaurus tutorial",
                },
                {
                    href: "https://github.com/equinor/mad",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Tutorial",
                            to: "/docs/docusaurus/intro",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/equinor/mad",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Equinor. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,

    plugins: [
        [
            "docusaurus-plugin-react-docgen-typescript",
            {
                src: ["../../packages/components/src/components/**/*.tsx"],
                parserOptions: {
                    propFilter: (prop, component) => {
                        return !prop.parent;
                    },
                },
            } as DocGenOption,
        ],
    ],
};

export default config;
