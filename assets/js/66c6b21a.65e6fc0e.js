(self.webpackChunk_equinor_mad_platform_docs=self.webpackChunk_equinor_mad_platform_docs||[]).push([[3138],{7710:(e,o,n)=>{var s={"./Accordion.json":[8219,8219],"./AccordionItem.json":[700,700],"./Autocomplete.Multiselect.json":[6676,6676],"./Autocomplete.json":[9055,9055],"./Button.Group.json":[250,250],"./Button.Icon.json":[7890,7890],"./Button.Toggle.json":[5851,5851],"./Button.json":[9907,9907],"./Cell.Button.json":[7243,7243],"./Cell.Navigation.json":[585,585],"./Cell.Switch.json":[3355,3355],"./Cell.json":[7951,7951],"./CellGroup.json":[666,666],"./CellSwipeItem.json":[7888,7888],"./Chip.json":[5677,5677],"./CircularProgress.json":[3829,3829],"./Dialog.json":[6631,6631],"./DialogActions.json":[6806,6806],"./DialogCustomContent.json":[3429,3429],"./DialogHeader.json":[733,6762],"./DialogServiceProvider.json":[3831,3831],"./DisabledPressable.json":[4378,4378],"./DotProgress.json":[6333,6333],"./EDSProvider.json":[6750,6750],"./EnvironmentProvider.json":[1693,1693],"./ErrorBoundary.json":[9281,9281],"./ErrorBoundaryScreen.json":[5213,5213],"./Icon.json":[2758,2758],"./Input.json":[2885,2885],"./Label.json":[7387,7387],"./LinearProgress.json":[7493,7493],"./Menu.json":[1932,1932],"./MenuItem.json":[3587,3587],"./Paper.json":[4903,4903],"./PopInContainer.json":[7500,7500],"./Popover.json":[6556,6556],"./Portal.Host.json":[567,567],"./Portal.json":[4365,4365],"./PortalProvider.json":[2688,2688],"./PressableHighlight.json":[5534,5534],"./Progress.Item.json":[4225,4225],"./Progress.json":[1116,1116],"./ProgressExpandButton.json":[4352,4352],"./ProgressExpandableSection.json":[7931,7931],"./ProgressItemStatus.json":[857,857],"./ProgressStatusLine.json":[332,332],"./ProgressTaskItem.json":[1870,1870],"./Radio.json":[7674,7674],"./RootModal.json":[1720,1720],"./Scrim.json":[8263,8263],"./ScrimProvider.json":[1146,1146],"./Search.json":[1891,1891],"./Select.Multi.json":[4856,4856],"./Select.json":[6659,6659],"./SpacerHorizontal.json":[607,607],"./SpacerVertical.json":[981,981],"./SwipeableWithContext.json":[3482,3482],"./Switch.Small.json":[3234,3234],"./Switch.json":[3,3],"./Tab.json":[4318,4318],"./Tabs.json":[2803,2803],"./TabsRow.json":[965,965],"./TextField.json":[7128,7128],"./Typography.json":[6938,6938],"./__plugin.json":[7074,7074]};function t(e){if(!n.o(s,e))return Promise.resolve().then((()=>{var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}));var o=s[e],t=o[0];return n.e(o[1]).then((()=>n.t(t,19)))}t.keys=()=>Object.keys(s),t.id=7710,e.exports=t},3055:(e,o,n)=>{"use strict";n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=n(1085),t=n(1184),r=n(6762);const i={},a=void 0,l={id:"components/api/data-display/Menu",title:"Menu",description:"",source:"@site/docs/components/api/1-data-display/Menu.mdx",sourceDirName:"components/api/1-data-display",slug:"/components/api/data-display/Menu",permalink:"/mad/docs/components/api/data-display/Menu",draft:!1,unlisted:!1,editUrl:"https://github.com/equinor/mad/tree/main/apps/docs/shared/docs/components/api/1-data-display/Menu.mdx",tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"Chip",permalink:"/mad/docs/components/api/data-display/Chip"},next:{title:"Popover",permalink:"/mad/docs/components/api/data-display/Popover"}},c={},d=[];function j(e){return(0,s.jsx)(r.q,{componentName:"Menu"})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(j,{...e})}):j()}},6762:(e,o,n)=>{"use strict";n.d(o,{q:()=>r});var s=n(4041);var t=n(1085);const r=e=>{let{componentName:o}=e;const r=(e=>{const[o,t]=(0,s.useState)(null);return(0,s.useEffect)((()=>{let o=!1;return n(7710)(`./${e}.json`).then((e=>{o||(o=!0,t(e.default))})).catch(console.error),()=>{o=!0}}),[e]),o})(o);return r?(0,t.jsxs)("table",{style:{width:"100%"},children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Type"}),(0,t.jsx)("th",{children:"Default Value"}),(0,t.jsx)("th",{children:"Required"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsx)("tbody",{children:Object.keys(r).map((e=>(0,t.jsxs)("tr",{style:{height:100,overflow:"hidden",textOverflow:"ellipsis"},children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:e})}),(0,t.jsx)("td",{style:{width:"20%"},children:(0,t.jsx)("p",{children:r[e].type?.name})}),(0,t.jsx)("td",{children:r[e].defaultValue&&(0,t.jsx)("code",{children:r[e].defaultValue.value})}),(0,t.jsx)("td",{children:r[e].required?"Yes":"No"}),(0,t.jsx)("td",{children:r[e].description})]},e)))})]}):null}},1184:(e,o,n)=>{"use strict";n.d(o,{R:()=>i,x:()=>a});var s=n(4041);const t={},r=s.createContext(t);function i(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);