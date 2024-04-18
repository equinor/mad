(self.webpackChunk_equinor_mad_platform_docs=self.webpackChunk_equinor_mad_platform_docs||[]).push([[7498],{7710:(o,n,e)=>{var t={"./Accordion.json":[8219,8219],"./AccordionItem.json":[700,700],"./Autocomplete.Multiselect.json":[6676,6676],"./Autocomplete.json":[9055,9055],"./Button.Group.json":[250,250],"./Button.Icon.json":[7890,7890],"./Button.Toggle.json":[5851,5851],"./Button.json":[9907,9907],"./Cell.Button.json":[7243,7243],"./Cell.Navigation.json":[585,585],"./Cell.Switch.json":[3355,3355],"./Cell.json":[7951,7951],"./CellGroup.json":[666,666],"./CellSwipeItem.json":[7888,7888],"./Chip.json":[5677,5677],"./CircularProgress.json":[6210,3829],"./Dialog.json":[6631,6631],"./DialogActions.json":[6806,6806],"./DialogCustomContent.json":[3429,3429],"./DialogHeader.json":[6762,6762],"./DialogServiceProvider.json":[3831,3831],"./DisabledPressable.json":[4378,4378],"./DotProgress.json":[6333,6333],"./EDSProvider.json":[6750,6750],"./EnvironmentProvider.json":[1693,1693],"./ErrorBoundary.json":[9281,1662],"./ErrorBoundaryScreen.json":[5213,5213],"./Icon.json":[2758,2758],"./Input.json":[2885,2885],"./Label.json":[7387,7387],"./LinearProgress.json":[7493,7493],"./Menu.json":[1932,1932],"./MenuItem.json":[3587,3587],"./Paper.json":[4903,4903],"./PopInContainer.json":[7500,7500],"./Popover.json":[6556,6556],"./Portal.Host.json":[567,567],"./Portal.json":[4365,4365],"./PortalProvider.json":[2688,2688],"./PressableHighlight.json":[5534,5534],"./Progress.Item.json":[4225,4225],"./Progress.json":[1116,1116],"./ProgressExpandButton.json":[4352,4352],"./ProgressExpandableSection.json":[7931,7931],"./ProgressItemStatus.json":[857,857],"./ProgressStatusLine.json":[332,332],"./ProgressTaskItem.json":[1870,1870],"./Radio.json":[7674,7674],"./RootModal.json":[1720,1720],"./Scrim.json":[8263,8263],"./ScrimProvider.json":[1146,1146],"./Search.json":[1891,1891],"./Select.Multi.json":[4856,4856],"./Select.json":[6659,6659],"./SpacerHorizontal.json":[607,607],"./SpacerVertical.json":[981,981],"./SwipeableWithContext.json":[3482,3482],"./Switch.Small.json":[3234,3234],"./Switch.json":[3,3],"./Tab.json":[4318,4318],"./Tabs.json":[2803,2803],"./TabsRow.json":[965,965],"./TextField.json":[7128,7128],"./Typography.json":[6938,6938],"./plugin-route-context-module-100.json":[7907,7907]};function s(o){if(!e.o(t,o))return Promise.resolve().then((()=>{var n=new Error("Cannot find module '"+o+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=t[o],s=n[0];return e.e(n[1]).then((()=>e.t(s,19)))}s.keys=()=>Object.keys(t),s.id=7710,o.exports=s},9217:(o,n,e)=>{"use strict";e.d(n,{q:()=>r});var t=e(4041);var s=e(1085);const r=o=>{let{componentName:n}=o;const r=(o=>{const[n,s]=(0,t.useState)(null);return(0,t.useEffect)((()=>{let n=!1;return e(7710)(`./${o}.json`).then((o=>{n||(n=!0,s(o.default))})).catch(console.error),()=>{n=!0}}),[o]),n})(n);return r?(0,s.jsxs)("table",{style:{width:"100%"},children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Type"}),(0,s.jsx)("th",{children:"Default Value"}),(0,s.jsx)("th",{children:"Required"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsx)("tbody",{children:Object.keys(r).map((o=>(0,s.jsxs)("tr",{style:{height:100,overflow:"hidden",textOverflow:"ellipsis"},children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:o})}),(0,s.jsx)("td",{style:{width:"20%"},children:(0,s.jsx)("p",{children:r[o].type?.name})}),(0,s.jsx)("td",{children:r[o].defaultValue&&(0,s.jsx)("code",{children:r[o].defaultValue.value})}),(0,s.jsx)("td",{children:r[o].required?"Yes":"No"}),(0,s.jsx)("td",{children:r[o].description})]},o)))})]}):null}},2297:(o,n,e)=>{"use strict";e.r(n),e.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=e(1085),s=e(1184),r=e(9217);const i={},c=void 0,l={id:"components/api/inputs/Button",title:"Button",description:"Icon Button",source:"@site/docs/components/api/2-inputs/Button.mdx",sourceDirName:"components/api/2-inputs",slug:"/components/api/inputs/Button",permalink:"/mad/docs/components/api/inputs/Button",draft:!1,unlisted:!1,editUrl:"https://github.com/equinor/mad/tree/main/apps/docs/shared/docs/components/api/2-inputs/Button.mdx",tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"Autocomplete",permalink:"/mad/docs/components/api/inputs/Autocomplete"},next:{title:"Input",permalink:"/mad/docs/components/api/inputs/Input"}},a={},u=[{value:"Icon Button",id:"icon-button",level:2}];function d(o){const n={h2:"h2",...(0,s.R)(),...o.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.q,{componentName:"Button"}),"\n",(0,t.jsx)(n.h2,{id:"icon-button",children:"Icon Button"}),"\n",(0,t.jsx)(r.q,{componentName:"Button.Icon"})]})}function j(o={}){const{wrapper:n}={...(0,s.R)(),...o.components};return n?(0,t.jsx)(n,{...o,children:(0,t.jsx)(d,{...o})}):d(o)}},1184:(o,n,e)=>{"use strict";e.d(n,{R:()=>i,x:()=>c});var t=e(4041);const s={},r=t.createContext(s);function i(o){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof o?o(n):{...n,...o}}),[n,o])}function c(o){let n;return n=o.disableParentContext?"function"==typeof o.components?o.components(s):o.components||s:i(o.components),t.createElement(r.Provider,{value:n},o.children)}}}]);