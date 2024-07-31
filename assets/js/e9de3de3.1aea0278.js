(self.webpackChunk_equinor_mad_platform_docs=self.webpackChunk_equinor_mad_platform_docs||[]).push([[7573],{7710:(n,e,o)=>{var t={"./Accordion.json":[8219,8219],"./AccordionItem.json":[700,700],"./Autocomplete.Multiselect.json":[6676,6676],"./Autocomplete.json":[9055,9055],"./Button.Group.json":[250,250],"./Button.Icon.json":[7890,7890],"./Button.Toggle.json":[5851,5851],"./Button.json":[9907,9907],"./Cell.Button.json":[7243,7243],"./Cell.Navigation.json":[585,585],"./Cell.Switch.json":[3355,3355],"./Cell.json":[7951,7951],"./CellGroup.json":[666,666],"./CellSwipeItem.json":[7888,7888],"./Chip.json":[5677,5677],"./CircularProgress.json":[3829,3829],"./Dialog.json":[6631,6631],"./DialogActions.json":[6806,6806],"./DialogCustomContent.json":[3429,3429],"./DialogHeader.json":[733,6762],"./DialogServiceProvider.json":[3831,3831],"./DisabledPressable.json":[4378,4378],"./DotProgress.json":[6333,6333],"./EDSProvider.json":[6750,6750],"./EnvironmentProvider.json":[1693,1693],"./ErrorBoundary.json":[9281,9281],"./ErrorBoundaryScreen.json":[5213,5213],"./Icon.json":[2758,2758],"./Input.json":[2885,2885],"./Label.json":[7387,7387],"./LinearProgress.json":[7493,7493],"./Menu.json":[1932,1932],"./MenuItem.json":[3587,3587],"./Paper.json":[4903,4903],"./PopInContainer.json":[7500,7500],"./Popover.json":[6556,6556],"./Portal.Host.json":[567,567],"./Portal.json":[4365,4365],"./PortalProvider.json":[2688,2688],"./PressableHighlight.json":[5534,5534],"./Progress.Item.json":[4225,4225],"./Progress.json":[1116,1116],"./ProgressExpandButton.json":[4352,4352],"./ProgressExpandableSection.json":[7931,7931],"./ProgressItemStatus.json":[857,857],"./ProgressStatusLine.json":[332,332],"./ProgressTaskItem.json":[1870,1870],"./Radio.json":[7674,7674],"./RootModal.json":[1720,1720],"./Scrim.json":[8263,8263],"./ScrimProvider.json":[1146,1146],"./Search.json":[1891,1891],"./Select.Multi.json":[4856,4856],"./Select.json":[6659,6659],"./SpacerHorizontal.json":[607,607],"./SpacerVertical.json":[981,981],"./SwipeableWithContext.json":[3482,3482],"./Switch.Small.json":[3234,3234],"./Switch.json":[3,3],"./Tab.json":[4318,4318],"./Tabs.json":[2803,2803],"./TabsRow.json":[965,965],"./TextField.json":[7128,7128],"./Typography.json":[6938,6938],"./__plugin.json":[7074,7074]};function s(n){if(!o.o(t,n))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=t[n],s=e[0];return o.e(e[1]).then((()=>o.t(s,19)))}s.keys=()=>Object.keys(t),s.id=7710,n.exports=s},3755:(n,e,o)=>{"use strict";o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var t=o(1085),s=o(1184),r=o(6762);const i={},c=void 0,a={id:"components/api/inputs/Input",title:"Input",description:"",source:"@site/docs/components/api/2-inputs/Input.mdx",sourceDirName:"components/api/2-inputs",slug:"/components/api/inputs/Input",permalink:"/mad/docs/components/api/inputs/Input",draft:!1,unlisted:!1,editUrl:"https://github.com/equinor/mad/tree/main/apps/docs/shared/docs/components/api/2-inputs/Input.mdx",tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"Button",permalink:"/mad/docs/components/api/inputs/Button"},next:{title:"Search",permalink:"/mad/docs/components/api/inputs/Search"}},l={},u=[];function d(n){return(0,t.jsx)(r.q,{componentName:"Input"})}function j(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d()}},6762:(n,e,o)=>{"use strict";o.d(e,{q:()=>r});var t=o(4041);var s=o(1085);const r=n=>{let{componentName:e}=n;const r=(n=>{const[e,s]=(0,t.useState)(null);return(0,t.useEffect)((()=>{let e=!1;return o(7710)(`./${n}.json`).then((n=>{e||(e=!0,s(n.default))})).catch(console.error),()=>{e=!0}}),[n]),e})(e);return r?(0,s.jsxs)("table",{style:{width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Type"}),(0,s.jsx)("th",{children:"Default Value"}),(0,s.jsx)("th",{children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:Object.keys(r).map((n=>(0,s.jsxs)("tr",{style:{height:100,overflow:"hidden",textOverflow:"ellipsis"},children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:n})}),(0,s.jsx)("td",{style:{width:"20%"},children:(0,s.jsx)("p",{children:r[n].type?.name})}),(0,s.jsx)("td",{children:r[n].defaultValue&&(0,s.jsx)("code",{children:r[n].defaultValue.value})}),(0,s.jsx)("td",{children:r[n].required?"Yes":"No"}),(0,s.jsx)("td",{children:r[n].description})]},n)))})]}):null}},1184:(n,e,o)=>{"use strict";o.d(e,{R:()=>i,x:()=>c});var t=o(4041);const s={},r=t.createContext(s);function i(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);