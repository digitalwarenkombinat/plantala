"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[561],{3901:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(7462),n=r(5987),c=r(7294),o=(r(5697),r(6010)),i=r(4670),s=(0,r(5209).Z)(c.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var l=c.forwardRef((function(e,t){var r=e.alt,i=e.children,l=e.classes,u=e.className,m=e.component,f=void 0===m?"div":m,d=e.imgProps,p=e.sizes,y=e.src,h=e.srcSet,v=e.variant,g=void 0===v?"circular":v,b=(0,n.Z)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),S=null,Z=function(e){var t=e.src,r=e.srcSet,a=c.useState(!1),n=a[0],o=a[1];return c.useEffect((function(){if(t||r){o(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=r,a.onload=function(){e&&o("loaded")},a.onerror=function(){e&&o("error")},function(){e=!1}}}),[t,r]),n}({src:y,srcSet:h}),j=y||h,x=j&&"error"!==Z;return S=x?c.createElement("img",(0,a.Z)({alt:r,src:y,srcSet:h,sizes:p,className:l.img},d)):null!=i?i:j&&r?r[0]:c.createElement(s,{className:l.fallback}),c.createElement(f,(0,a.Z)({className:(0,o.Z)(l.root,l.system,l[g],u,!x&&l.colorDefault),ref:t},b),S)})),u=(0,i.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(l)},7561:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var a=r(5893);function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function c(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=r(3901),i=r(1749),s=r(1120),l=r(8743),u=(0,s.Z)((function(e){return{avatarList:{padding:e.spacing(4,2)},avatar:{cursor:"initial"},emptyAvatar:{opacity:"0.8",borderColor:e.palette.primary.main,cursor:"initial"}}}));function m(){var e=u(),t=(0,l.ZP)(),r=t.getSelectedElements,n=t.mediaPath,s=Math.max(0,l.zJ-r().length);return(0,a.jsx)(i.Z,{item:!0,xs:12,className:e.avatarList,children:(0,a.jsxs)(i.Z,{container:!0,justifyContent:"space-evenly",children:[r().map((function(t){return(0,a.jsx)(i.Z,{item:!0,children:(0,a.jsx)(o.Z,{alt:t.name,src:"".concat("/plantala","/images/").concat(n).concat(t.source).concat(l.Li),className:e.avatar},t.name)},t.name)})),c(Array(s).keys()).map((function(t){return(0,a.jsx)(i.Z,{item:!0,children:(0,a.jsx)(o.Z,{src:"".concat("/plantala","/images/").concat(n,"empty.svg"),className:e.emptyAvatar,alt:"Empty element"})},t)}))]})})}}}]);