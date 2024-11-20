"use strict";(self.webpackChunk_equinor_mad_platform_docs=self.webpackChunk_equinor_mad_platform_docs||[]).push([[6194],{1756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"mad-core/migration-guide/implement-a-way-to-access-the-settings-screen","title":"Implement a way to access the settings screen","description":"Learn how to implement a way to access the settings screen!","source":"@site/docs/mad-core/migration-guide/5-implement-a-way-to-access-the-settings-screen.md","sourceDirName":"mad-core/migration-guide","slug":"/mad-core/migration-guide/implement-a-way-to-access-the-settings-screen","permalink":"/mad/docs/mad-core/migration-guide/implement-a-way-to-access-the-settings-screen","draft":false,"unlisted":false,"editUrl":"https://github.com/equinor/mad/tree/main/apps/docs/shared/docs/mad-core/migration-guide/5-implement-a-way-to-access-the-settings-screen.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_label":"Implement a way to access the settings screen","description":"Learn how to implement a way to access the settings screen!"},"sidebar":"coreSidebar","previous":{"title":"Replace react-navigation imports","permalink":"/mad/docs/mad-core/migration-guide/replace-navigation-imports"},"next":{"title":"Add ErrorBoundary (optional)","permalink":"/mad/docs/mad-core/migration-guide/add-ErrorBoundary"}}');var o=n(1085),a=n(1184);const i={sidebar_label:"Implement a way to access the settings screen",description:"Learn how to implement a way to access the settings screen!"},r="Implement a way to access the settings screen",c={},m=[];function d(e){const t={code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"implement-a-way-to-access-the-settings-screen",children:"Implement a way to access the settings screen"})}),"\n",(0,o.jsxs)(t.p,{children:["How the user navigates to settings, is up to the app itself. One common approach is to add a button\nin your main screen's ",(0,o.jsx)(t.code,{children:"headerRight"})," position."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import React from "react";\nimport { Button } from "@equinor/mad-components";\nimport { useCoreStackNavigation } from "@equinor/mad-core";\nimport { View } from "react-native";\n\nexport type GoToSettingsButtonProps = { marginRight?: number };\n\nexport function GoToSettingsButton({ marginRight }: GoToSettingsButtonProps) {\n    const navigation = useCoreStackNavigation();\n    return (\n        <View style={{ marginRight }}>\n            <Button.Icon\n                name="cog-outline"\n                variant="ghost"\n                onPress={() => navigation.navigate("Settings")}\n            />\n        </View>\n    );\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Results:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Results",src:n(9420).A+"",width:"773",height:"78"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},9420:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/settings-button-example-91f18f3015cb15b040654a9c0d24d67f.png"},1184:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(4041);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);