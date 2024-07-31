"use strict";(self.webpackChunk_equinor_mad_platform_docs=self.webpackChunk_equinor_mad_platform_docs||[]).push([[1973],{2521:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var s=t(1085),i=t(1184);const n={sidebar_label:"API",description:"More detailed information about how to use the package!"},r="API",c={id:"mad-toast/api",title:"API",description:"More detailed information about how to use the package!",source:"@site/docs/mad-toast/3-api.md",sourceDirName:"mad-toast",slug:"/mad-toast/api",permalink:"/mad/docs/mad-toast/api",draft:!1,unlisted:!1,editUrl:"https://github.com/equinor/mad/tree/main/apps/docs/shared/docs/mad-toast/3-api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"API",description:"More detailed information about how to use the package!"},sidebar:"toastSidebar",previous:{title:"Getting started",permalink:"/mad/docs/mad-toast/getting-started"}},o={},l=[{value:"ToastEmitter",id:"toastemitter",level:4},{value:"addToast",id:"addtoast",level:4}];function h(e){const d={code:"code",h1:"h1",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.h1,{id:"api",children:"API"}),"\n",(0,s.jsx)(d.h4,{id:"toastemitter",children:"ToastEmitter"}),"\n",(0,s.jsxs)(d.p,{children:["The following set of ",(0,s.jsx)(d.code,{children:"props"})," can be passed to the ",(0,s.jsx)(d.code,{children:"ToastEmitter"})," component instance to specify\ncertain ",(0,s.jsx)(d.strong,{children:"defaults for all Toasts that are shown"}),":"]}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"prop"}),(0,s.jsx)(d.th,{children:"description"}),(0,s.jsx)(d.th,{children:"type"}),(0,s.jsx)(d.th,{children:"default value"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"position"})}),(0,s.jsx)(d.td,{children:"Default Toast position"}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"top"})," or ",(0,s.jsx)(d.code,{children:"bottom"})]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"top"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"visibilityTime"})}),(0,s.jsxs)(d.td,{children:["Number of milliseconds after which Toast automatically hides. Has effect only in conjunction with ",(0,s.jsx)(d.code,{children:"autoHide"})," prop set to ",(0,s.jsx)(d.code,{children:"true"})]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"4000"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"autoHide"})}),(0,s.jsxs)(d.td,{children:["When ",(0,s.jsx)(d.code,{children:"true"}),", the visible Toast automatically hides after a certain number of milliseconds, specified by the ",(0,s.jsx)(d.code,{children:"visibilityTime"})," prop"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"true"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"topOffset"})}),(0,s.jsxs)(d.td,{children:["Offset from the top of the screen (in px). Has effect only when ",(0,s.jsx)(d.code,{children:"position"})," is ",(0,s.jsx)(d.code,{children:"top"})]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"40"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bottomOffset"})}),(0,s.jsxs)(d.td,{children:["Offset from the bottom of the screen (in px). Has effect only when ",(0,s.jsx)(d.code,{children:"position"})," is ",(0,s.jsx)(d.code,{children:"bottom"})]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"40"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"keyboardOffset"})}),(0,s.jsxs)(d.td,{children:["Offset from the Keyboard (in px). Has effect only when ",(0,s.jsx)(d.code,{children:"position"})," is ",(0,s.jsx)(d.code,{children:"bottom"})," and Keyboard is visible (iOS only)"]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"10"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"onShow"})}),(0,s.jsx)(d.td,{children:"Called when any Toast is shown"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"() => void"})}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"onHide"})}),(0,s.jsx)(d.td,{children:"Called when any Toast hides"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"() => void"})}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"onPress"})}),(0,s.jsx)(d.td,{children:"Called on any Toast press"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"() => void"})}),(0,s.jsx)(d.td,{})]})]})]}),"\n",(0,s.jsx)(d.h4,{id:"addtoast",children:"addToast"}),"\n",(0,s.jsxs)(d.p,{children:["The complete set of ",(0,s.jsx)(d.strong,{children:"options"})," is described below:"]}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"option"}),(0,s.jsx)(d.th,{children:"description"}),(0,s.jsx)(d.th,{children:"type"}),(0,s.jsx)(d.th,{children:"required"}),(0,s.jsx)(d.th,{children:"default value"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"type"})}),(0,s.jsxs)(d.td,{children:["Toast type. available values: ",(0,s.jsx)(d.code,{children:"success"}),", ",(0,s.jsx)(d.code,{children:"error"}),", ",(0,s.jsx)(d.code,{children:"info"}),", ",(0,s.jsx)(d.code,{children:"warning"}),"."]}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"yes"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"text"})}),(0,s.jsx)(d.td,{children:"Text to display in the toast"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:"yes"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"duration"})}),(0,s.jsx)(d.td,{children:"Number of milliseconds after which Toast automatically hides."}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"number"})}),(0,s.jsx)(d.td,{children:"no"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"4000"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"onPress"})}),(0,s.jsx)(d.td,{children:"Called on Toast press"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"(hide: () => void) => void"})}),(0,s.jsx)(d.td,{children:"no\xa0"}),(0,s.jsx)(d.td,{})]})]})]})]})}function a(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1184:(e,d,t)=>{t.d(d,{R:()=>r,x:()=>c});var s=t(4041);const i={},n=s.createContext(i);function r(e){const d=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:d},e.children)}}}]);