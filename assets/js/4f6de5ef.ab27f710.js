(self.webpackChunk_equinor_mad_platform_docs=self.webpackChunk_equinor_mad_platform_docs||[]).push([[6368],{7710:(e,o,s)=>{var r={"./Accordion.json":[8219,8219],"./AccordionItem.json":[700,700],"./Autocomplete.Multiselect.json":[6676,6676],"./Autocomplete.json":[9055,9055],"./Button.Group.json":[250,250],"./Button.Icon.json":[7890,7890],"./Button.Toggle.json":[5851,5851],"./Button.json":[9907,9907],"./Cell.Button.json":[7243,7243],"./Cell.Navigation.json":[585,585],"./Cell.Switch.json":[3355,3355],"./Cell.json":[7951,7951],"./CellGroup.json":[666,666],"./CellSwipeItem.json":[7888,7888],"./Chip.json":[5677,5677],"./CircularProgress.json":[6210,3829],"./Dialog.json":[6631,6631],"./DialogActions.json":[6806,6806],"./DialogCustomContent.json":[3429,3429],"./DialogHeader.json":[6762,6762],"./DialogServiceProvider.json":[3831,3831],"./DisabledPressable.json":[4378,4378],"./DotProgress.json":[6333,6333],"./EDSProvider.json":[6750,6750],"./EnvironmentProvider.json":[1693,1693],"./ErrorBoundary.json":[9281,1662],"./ErrorBoundaryScreen.json":[5213,5213],"./Icon.json":[2758,2758],"./Input.json":[2885,2885],"./Label.json":[7387,7387],"./LinearProgress.json":[7493,7493],"./Menu.json":[1932,1932],"./MenuItem.json":[3587,3587],"./Paper.json":[4903,4903],"./PopInContainer.json":[7500,7500],"./Popover.json":[6556,6556],"./Portal.Host.json":[567,567],"./Portal.json":[4365,4365],"./PortalProvider.json":[2688,2688],"./PressableHighlight.json":[5534,5534],"./Progress.Item.json":[4225,4225],"./Progress.json":[1116,1116],"./ProgressExpandButton.json":[4352,4352],"./ProgressExpandableSection.json":[7931,7931],"./ProgressItemStatus.json":[857,857],"./ProgressStatusLine.json":[332,332],"./ProgressTaskItem.json":[1870,1870],"./Radio.json":[7674,7674],"./RootModal.json":[1720,1720],"./Scrim.json":[8263,8263],"./ScrimProvider.json":[1146,1146],"./Search.json":[1891,1891],"./SelectMenu.Multiselect.json":[6935,6935],"./SelectMenu.json":[1004,1004],"./SpacerHorizontal.json":[607,607],"./SpacerVertical.json":[981,981],"./Switch.Small.json":[3234,3234],"./Switch.json":[3,3],"./Tab.json":[4318,4318],"./Tabs.json":[2803,2803],"./TabsRow.json":[965,965],"./TextField.json":[7128,7128],"./Typography.json":[6938,6938],"./plugin-route-context-module-100.json":[7907,7907]};function n(e){if(!s.o(r,e))return Promise.resolve().then((()=>{var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}));var o=r[e],n=o[0];return s.e(o[1]).then((()=>s.t(n,19)))}n.keys=()=>Object.keys(r),n.id=7710,e.exports=n},9217:(e,o,s)=>{"use strict";s.d(o,{q:()=>t});var r=s(4041);var n=s(1085);const t=e=>{let{componentName:o}=e;const t=(e=>{const[o,n]=(0,r.useState)(null);return(0,r.useEffect)((()=>{let o=!1;return s(7710)(`./${e}.json`).then((e=>{o||(o=!0,n(e.default))})).catch(console.error),()=>{o=!0}}),[e]),o})(o);return t?(0,n.jsxs)("table",{style:{width:"100%"},children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Type"}),(0,n.jsx)("th",{children:"Default Value"}),(0,n.jsx)("th",{children:"Required"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsx)("tbody",{children:Object.keys(t).map((e=>(0,n.jsxs)("tr",{style:{height:100,overflow:"hidden",textOverflow:"ellipsis"},children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:e})}),(0,n.jsx)("td",{style:{width:"20%"},children:(0,n.jsx)("p",{children:t[e].type?.name})}),(0,n.jsx)("td",{children:t[e].defaultValue&&(0,n.jsx)("code",{children:t[e].defaultValue.value})}),(0,n.jsx)("td",{children:t[e].required?"Yes":"No"}),(0,n.jsx)("td",{children:t[e].description})]},e)))})]}):null}},7555:(e,o,s)=>{"use strict";s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=s(1085),n=s(1184),t=s(9217);const i={title:"Circular progress"},c=void 0,a={id:"components/api/feedback/progress-indicator/CircularProgress",title:"Circular progress",description:"",source:"@site/docs/components/api/4-feedback/progress-indicator/CircularProgress.mdx",sourceDirName:"components/api/4-feedback/progress-indicator",slug:"/components/api/feedback/progress-indicator/CircularProgress",permalink:"/mad/docs/components/api/feedback/progress-indicator/CircularProgress",draft:!1,unlisted:!1,editUrl:"https://github.com/equinor/mad/tree/main/apps/docs/shared/docs/components/api/4-feedback/progress-indicator/CircularProgress.mdx",tags:[],version:"current",frontMatter:{title:"Circular progress"},sidebar:"componentsSidebar",previous:{title:"Progress indicators",permalink:"/mad/docs/components/api/feedback/progress-indicators"},next:{title:"Dot progress",permalink:"/mad/docs/components/api/feedback/progress-indicator/DotProgress"}},l={},d=[];function j(e){return(0,r.jsx)(t.q,{componentName:"CircularProgress"})}function u(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(j,{...e})}):j()}},1184:(e,o,s)=>{"use strict";s.d(o,{R:()=>i,x:()=>c});var r=s(4041);const n={},t=r.createContext(n);function i(e){const o=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);