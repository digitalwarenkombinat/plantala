"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[925],{3901:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7462),a=r(5987),i=r(7294),o=(r(5697),r(6010)),c=r(4670),s=(0,r(5209).Z)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var l=i.forwardRef((function(e,t){var r=e.alt,c=e.children,l=e.classes,u=e.className,m=e.component,d=void 0===m?"div":m,f=e.imgProps,p=e.sizes,h=e.src,y=e.srcSet,g=e.variant,v=void 0===g?"circular":g,b=(0,a.Z)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),S=null,Z=function(e){var t=e.src,r=e.srcSet,n=i.useState(!1),a=n[0],o=n[1];return i.useEffect((function(){if(t||r){o(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=r,n.onload=function(){e&&o("loaded")},n.onerror=function(){e&&o("error")},function(){e=!1}}}),[t,r]),a}({src:h,srcSet:y}),x=h||y,j=x&&"error"!==Z;return S=j?i.createElement("img",(0,n.Z)({alt:r,src:h,srcSet:y,sizes:p,className:l.img},f)):null!=c?c:x&&r?r[0]:i.createElement(s,{className:l.fallback}),i.createElement(d,(0,n.Z)({className:(0,o.Z)(l.root,l.system,l[v],u,!j&&l.colorDefault),ref:t},b),S)})),u=(0,c.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(l)},7925:function(e,t,r){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(t),r.d(t,{default:function(){return d}});var i=r(2809),o=r(3901),c=r(1749),s=r(1120),l=r(8743),u=r(5893),m=(0,s.Z)((function(e){return{avatarList:(0,i.Z)({padding:e.spacing(2)},e.breakpoints.up("md"),{paddingLeft:"25%",paddingRight:"25%"}),avatar:{cursor:"initial"},emptyAvatar:{opacity:"0.8",borderColor:e.palette.primary.main,cursor:"initial"}}}));function d(){var e=m(),t=(0,l.ZP)(),r=t.getSelectedElements,n=t.mediaPath,i=Math.max(0,l.zJ-r().length);return(0,u.jsx)(c.Z,{item:!0,xs:12,className:e.avatarList,children:(0,u.jsxs)(c.Z,{container:!0,justifyContent:"space-evenly",children:[r().map((function(t){return(0,u.jsx)(c.Z,{item:!0,children:(0,u.jsx)(o.Z,{alt:t.name,src:"".concat("","/images/").concat(n).concat(t.source).concat(l.Li),className:e.avatar},t.name)},t.name)})),a(Array(i).keys()).map((function(t){return(0,u.jsx)(c.Z,{item:!0,children:(0,u.jsx)(o.Z,{src:"".concat("","/images/plants/empty.svg"),className:e.emptyAvatar,alt:"Empty element"})},t)}))]})})}}}]);