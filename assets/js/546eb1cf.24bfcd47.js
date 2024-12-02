"use strict";(self.webpackChunk_equinor_mad_platform_docs=self.webpackChunk_equinor_mad_platform_docs||[]).push([[6591],{5916:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"mad-core/migration-guide/create-a-config","title":"Create a config","description":"Learn how to create a config!","source":"@site/docs/mad-core/migration-guide/2-create-a-config.md","sourceDirName":"mad-core/migration-guide","slug":"/mad-core/migration-guide/create-a-config","permalink":"/mad/docs/mad-core/migration-guide/create-a-config","draft":false,"unlisted":false,"editUrl":"https://github.com/equinor/mad/tree/main/apps/docs/shared/docs/mad-core/migration-guide/2-create-a-config.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_label":"Create a config","description":"Learn how to create a config!"},"sidebar":"coreSidebar","previous":{"title":"Installation","permalink":"/mad/docs/mad-core/migration-guide/installation"},"next":{"title":"Use createStackCoreNavigator/createNativeStackCoreNavigator","permalink":"/mad/docs/mad-core/migration-guide/use-createCoreStackNavigator"}}');var r=i(1085),s=i(1184);const d={sidebar_label:"Create a config",description:"Learn how to create a config!"},c="Create a config",o={},a=[{value:"Language config",id:"language-config",level:6},{value:"Authentication config",id:"authentication-config",level:6},{value:"Login config",id:"login-config",level:6},{value:"Application Insights config",id:"application-insights-config",level:6},{value:"About config",id:"about-config",level:6}];function l(e){const n={a:"a",code:"code",h1:"h1",h6:"h6",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"create-a-config",children:"Create a config"})}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:"mad.config.ts"})," file (name of the file can be anything, but we have used this naming\nconvention when developing this package). Use the ",(0,r.jsx)(n.code,{children:"MadConfig"})," type from ",(0,r.jsx)(n.code,{children:"@equinor/mad-core"})," for type\nsafety:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { MadConfig } from "@equinor/mad-core";\nimport Splash from "./assets/images/splash.png";\nimport { getBuildNumber, getAppSpecificEndpoints } from "./settings";\nimport { RootStackParamList } from "./types/navigation";\n\nexport const config: MadConfig<RootStackParamList> = {\n    navigateToMainRouteFn: navigation => navigation.navigate("Root"),\n    appVersion: "1.0.0",\n    servicePortalName: "Chronicles",\n    currentEnvironment: "prod",\n    language: {\n        supportedLanguages: [\n            { code: "en", name: "English" },\n            { code: "nb", name: "Norwegian" },\n            { code: "pt", name: "Portuguese" },\n        ],\n        skipOnboarding: false,\n    },\n    authentication: {\n        redirectUri: "msauth.com.equinor.mad.chronicles://auth",\n        redirectUriWeb: "http://localhost:8081",\n        clientId: "49222fe1-4e0a-4310-9e81-1a2c3eb9b2ed",\n        scopes: ["0a429637-3fe1-4452-bd95-c87923ba340b/user_impersonation"],\n    },\n    login: {\n        splash: Splash,\n    },\n    applicationInsights: {\n        instrumentationKey: "f1859360-4aa2-425f-b494-2d7320de6832",\n        longTermLog: { instrumentationKey: "e91835aa-bcc2-41dd-a79d-352f0df23e1b" },\n    },\n    serviceNow: "SERVICE_NOW_CONFIGURATION_ITEM",\n    about: {\n        endpoints: getAppSpecificEndpoints(),\n        buildNumber: getBuildNumber(),\n    },\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can also set environment specific values for each field. The config supports ",(0,r.jsx)(n.code,{children:"dev"}),", ",(0,r.jsx)(n.code,{children:"test"}),",\n",(0,r.jsx)(n.code,{children:"qa"}),", ",(0,r.jsx)(n.code,{children:"prod"}),". The correct values will be picked based on ",(0,r.jsx)(n.code,{children:"currentEnvironment"}),". Example from\n",(0,r.jsx)(n.code,{children:"Chronicles"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { MadConfig } from "@equinor/mad-core";\nimport Splash from "./assets/images/splash.png";\nimport { getBuildNumber } from "./settings";\nimport { RootStackParamList } from "./types/navigation";\n\nexport const config: MadConfig<RootStackParamList> = {\n    navigateToMainRouteFn: navigation => navigation.navigate("Root"),\n    appVersion: "1.0.0",\n    servicePortalName: "Chronicles",\n    currentEnvironment: "prod",\n    serviceNow: "MAD",\n    language: {\n        supportedLanguages: [\n            { code: "en", name: "English" },\n            { code: "nb", name: "Norwegian" },\n            { code: "pt", name: "Portuguese" },\n        ],\n        skipOnboarding: false,\n    },\n    authentication: {\n        prod: {\n            redirectUri: "msauth.com.equinor.mad.chronicles://auth",\n            redirectUriWeb: "http://localhost:8081",\n            clientId: "49222fe1-4e0a-4310-9e81-1a2c3eb9b2ed",\n            scopes: ["0a429637-3fe1-4452-bd95-c87923ba340b/user_impersonation"],\n        },\n        test: {\n            redirectUri: "msauth.com.equinor.mad.chronicles://auth",\n            redirectUriWeb: "http://localhost:8081",\n            clientId: "49222fe1-4e0a-4310-9e81-1a2c3eb9b2ed",\n            scopes: ["830a7388-cd89-4e25-a631-bd615bf225a4/user_impersonation"],\n        },\n    },\n    login: {\n        splash: Splash,\n    },\n    applicationInsights: {\n        instrumentationKey: "f1859360-4aa2-425f-b494-2d7320de6832",\n        longTermLog: { instrumentationKey: "e91835aa-bcc2-41dd-a79d-352f0df23e1b" },\n    },\n    about: {\n        endpoints: [],\n        buildNumber: getBuildNumber(),\n    },\n};\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"key"}),(0,r.jsx)(n.th,{children:"required?"}),(0,r.jsx)(n.th,{children:"explanation"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"appVersion"})}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"Your app's current version. Used to figure out whether the app should display what's new, and which release notes version to fetch"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"navigateToMainFn"})}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsxs)(n.td,{children:["a function ",(0,r.jsx)(n.code,{children:"@equinor/mad-core"})," will use when navigating to your app's main route. To make this function type safe, make sure to provide a ",(0,r.jsx)(n.code,{children:"ParamList"})," as a generic argument to the ",(0,r.jsx)(n.code,{children:"MadConfig"})," type"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"servicePortalName"})}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"The name of the app in the service portal. Used to figure out which release notes and service messages to fetch"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"currentEnvironment"})}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"The environment of the app. Used to display environment banner, and to select the correct service message and release notes endpoint. Also used to pick correct values from config"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"language"})}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsxs)(n.td,{children:["language config. See ",(0,r.jsx)(n.a,{href:"#language-config",children:"language"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"authentication"})}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsxs)(n.td,{children:["authentication config. See ",(0,r.jsx)(n.a,{href:"#authentication-config",children:"authentication"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"login"})}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsxs)(n.td,{children:["login screen config. See ",(0,r.jsx)(n.a,{href:"#login-config",children:"login"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"applicationInsights"})}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsxs)(n.td,{children:["application insights config. See ",(0,r.jsx)(n.a,{href:"#application-insights-config",children:"application insights"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"serviceNow"})}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"Configuration item in Service Now. Used for create incident screen. If not provided, we won't add create incident screen to the stack"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"about"})}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsxs)(n.td,{children:["about screen config. If not provided, we won't add about screen to the stack. See ",(0,r.jsx)(n.a,{href:"#about-config",children:"about"})]})]})]})]}),"\n",(0,r.jsx)(n.h6,{id:"language-config",children:"Language config"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"key"}),(0,r.jsx)(n.th,{children:"required?"}),(0,r.jsx)(n.th,{children:"explanation"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"supportedLanguages"})}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsxs)(n.td,{children:["an array of supported languages. The language object should contain ",(0,r.jsx)(n.code,{children:"code"})," and ",(0,r.jsx)(n.code,{children:"name"}),". ",(0,r.jsx)(n.code,{children:"mad-core"})," supports Norwegian (",(0,r.jsx)(n.code,{children:"no"}),", ",(0,r.jsx)(n.code,{children:"nb"}),"), english (",(0,r.jsx)(n.code,{children:"en"}),") and Portuguese (",(0,r.jsx)(n.code,{children:"pt"}),"). If you use any other languages, the common screens will be in english. If you need more language support, create an issue!"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"defaultLanguageCode"})}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsxs)(n.td,{children:["The default language of the app. This is the language the app will use if the user has not selected a language. If default language is not provided, the app will use the first language in the ",(0,r.jsx)(n.code,{children:"supportedLanguages"})," array"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"skipOnboarding"})}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"Set this to true if you don't want to force the user to set their preferred language the first time they start the app"})]})]})]}),"\n",(0,r.jsx)(n.h6,{id:"authentication-config",children:"Authentication config"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"key"}),(0,r.jsx)(n.th,{children:"required?"}),(0,r.jsx)(n.th,{children:"explanation"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"clientId"})}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"The application's client id"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"redirectUri"})}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"The application's redirect uri"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"redirectUriWeb"})}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"The application's redirect uri for web. This is required if your app has web support."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"scopes"})}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"an array of scopes to use when logging in"})]})]})]}),"\n",(0,r.jsx)(n.h6,{id:"login-config",children:"Login config"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"key"}),(0,r.jsx)(n.th,{children:"required?"}),(0,r.jsx)(n.th,{children:"explanation"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"splash"})}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsxs)(n.td,{children:["The splash screen of the application. Will be used as a background for the login screen. For best results, set ",(0,r.jsx)(n.code,{children:"resizeMode"})," to ",(0,r.jsx)(n.code,{children:'"cover"'}),", and ",(0,r.jsx)(n.code,{children:"backgroundColor"})," to your splash screen's background color in ",(0,r.jsx)(n.code,{children:"app.json"}),". ",(0,r.jsx)(n.code,{children:"@equinor/mad-core"})," will use resize mode ",(0,r.jsx)(n.code,{children:"cover"})," on iOS, and ",(0,r.jsx)(n.code,{children:"contain"})," on web."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"backgroundColor"})}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"Background color for the login screen. Should be identical to the splash screen's background color. We have a common design for login screens across our apps, with a default background color. If your login screen for some reason uses different colors, use this property to change the background color."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"addScreenManually"})}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsxs)(n.td,{children:["Set this to true if you want to add the login screen manually to the stack, just like you do with SettingsScreen. This way you can access LoginScreen's props: ",(0,r.jsx)(n.code,{children:"onAuthenticationSuccessful"})," and ",(0,r.jsx)(n.code,{children:"onAuthenticationFailed"}),". When adding ",(0,r.jsx)(n.code,{children:"LoginScreen"})," to the stack, use ",(0,r.jsx)(n.code,{children:"getDefaultScreenOptionsForLoginScreen"})," to use the same options as we do when adding the screen automatically."]})]})]})]}),"\n",(0,r.jsx)(n.h6,{id:"application-insights-config",children:"Application Insights config"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"key"}),(0,r.jsx)(n.th,{children:"required?"}),(0,r.jsx)(n.th,{children:"explanation"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"instrumentationKey"})," or ",(0,r.jsx)(n.code,{children:"connectionString"})]}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"used to connect to the right resource in Azure"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"longTermLog"})}),(0,r.jsx)(n.td,{children:"false"}),(0,r.jsxs)(n.td,{children:["used to define long term log config. It should contain ",(0,r.jsx)(n.code,{children:"instrumentationKey"})," or ",(0,r.jsx)(n.code,{children:"connectionString"})]})]})]})]}),"\n",(0,r.jsx)(n.h6,{id:"about-config",children:"About config"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"key"}),(0,r.jsx)(n.th,{children:"required?"}),(0,r.jsx)(n.th,{children:"explanation"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"endpoints"})}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsxs)(n.td,{children:["The endpoints used by the application. The endpoints used by ",(0,r.jsx)(n.code,{children:"mad-core"})," is added automatically. Will be displayed at the about-screen"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"buildNumber"})}),(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"The build number of the application. Will be displayed at the about-screen"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1184:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var t=i(4041);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);