"use strict";(self.webpackChunk_equinor_mad_platform_docs=self.webpackChunk_equinor_mad_platform_docs||[]).push([[1749],{8650:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>s,contentTitle:()=>d,default:()=>l,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var n=o(1085),a=o(1184);const t={sidebar_label:"Add ErrorBoundary (optional)",description:"Learn how to add ErrorBoundary to your app!"},d="Add ErrorBoundary (optional)",i={id:"mad-core/migration-guide/add-ErrorBoundary",title:"Add ErrorBoundary (optional)",description:"Learn how to add ErrorBoundary to your app!",source:"@site/docs/mad-core/migration-guide/6-add-ErrorBoundary.md",sourceDirName:"mad-core/migration-guide",slug:"/mad-core/migration-guide/add-ErrorBoundary",permalink:"/mad/docs/mad-core/migration-guide/add-ErrorBoundary",draft:!1,unlisted:!1,editUrl:"https://github.com/equinor/mad/tree/main/apps/docs/shared/docs/mad-core/migration-guide/6-add-ErrorBoundary.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Add ErrorBoundary (optional)",description:"Learn how to add ErrorBoundary to your app!"},sidebar:"coreSidebar",previous:{title:"Implement a way to access the settings screen",permalink:"/mad/docs/mad-core/migration-guide/implement-a-way-to-access-the-settings-screen"},next:{title:"Implement useLanguage",permalink:"/mad/docs/mad-core/migration-guide/implement-useLanguage"}},s={},c=[];function u(e){const r={code:"code",em:"em",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h1,{id:"add-errorboundary-optional",children:["Add ",(0,n.jsx)(r.code,{children:"ErrorBoundary"})," (optional)"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"@equinor/mad-core"})," provides an ",(0,n.jsx)(r.code,{children:"ErrorBoundary"})," component that automatically logs crashes to\nApplication Insights. It gives the user a more user-friendly crash behaviour, and gives you\ninformation about why the app crashes."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"note: The error boundary might not catch native code related crashes. It should almost always catch\njavascript-related crashes, though."})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"ErrorBoundary"})," should be as far up your stack as possible, in ",(0,n.jsx)(r.code,{children:"App.tsx"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:'export default function App() {\n    const isLoadingComplete = useCachedResources();\n    const colorScheme = useColorScheme();\n\n    if (!isLoadingComplete) {\n        return null;\n    }\n    return (\n        <ErrorBoundary>\n            <QueryClientProvider client={queryClient}>\n                <SpeakUpSessionProvider>\n                    <EDSProvider colorScheme="light" density="tablet">\n                        <SafeAreaProvider>\n                            <Navigation colorScheme={colorScheme} />\n                            <StatusBar style="dark" />\n                        </SafeAreaProvider>\n                    </EDSProvider>\n                </SpeakUpSessionProvider>\n            </QueryClientProvider>\n        </ErrorBoundary>\n    );\n}\n'})})]})}function l(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1184:(e,r,o)=>{o.d(r,{R:()=>d,x:()=>i});var n=o(4041);const a={},t=n.createContext(a);function d(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);