"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[237],{4703:function(t,a,e){e.r(a),e.d(a,{default:function(){return f}});var n=e(2809),i=e(1749),r=e(1120),c=e(7294),o=e(8743),s=o.ZP.getState().imageMultiplier;function u(t){var a=t.amount,e=void 0===a?4+2*t.order:a,n=t.rotation,i=void 0===n?0:n,r=t.scale,c=void 0===r?1:r,o=t.size,u=void 0===o?100*s:o;return{amount:e,distance:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,a=arguments.length>1?arguments[1]:void 0;return t*a*s}(t.distance,t.order),rotation:i,step:Math.ceil(360/e),scale:c,size:u}}function d(t,a){for(var e=o.ZP.getState().mediaPath,n=o.ZP.getState().colorMode,i=u(a),r=i.amount,c=i.distance,d=i.rotation,h=i.step,l=i.scale,f=i.size,m=n?o.Li:o.Pr,v=function(n){var i=function(t,a,e,n){var i=a/(e/2)*Math.PI;return{imageX:n*Math.cos(i)+t.canvas.width*s/2,imageY:n*Math.sin(i)+t.canvas.height*s/2}}(t,n,r,c),o=i.imageX,u=i.imageY,v=function(t,a,e){return a+e*t*Math.PI/180}(n,d,h),g=new Image;g.onload=function(){t.setTransform(l,0,0,l,o,u),t.rotate(v),t.drawImage(g,-f/2,-f/2,f,f)},g.src="".concat("/plantala","/images/").concat(e).concat(a.source).concat(m)},g=0;g<r;g++)v(g)}var h=e(5893),l=(0,r.Z)((function(t){var a;return{mandala:(a={width:"100%",height:"100%",maxWidth:"350px"},(0,n.Z)(a,t.breakpoints.up("sm"),{maxWidth:"600px"}),(0,n.Z)(a,t.breakpoints.up("md"),{maxWidth:"700px"}),(0,n.Z)(a,"@media print",{maxWidth:"80vw"}),a)}})),f=function(){var t=l(),a=function(){var t=(0,c.useRef)(null),a=(0,o.ZP)(),e=a.colorMode,n=a.getSelectedElements,i=a.imageMultiplier,r=a.media;return(0,c.useEffect)((function(){if(r.length>0&&t.current){var a=t.current.getContext("2d");a&&(a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,a.canvas.width*i,a.canvas.height*i),n().forEach((function(t){return d(a,t)})))}}),[e,n,i,r]),{canvasRef:t}}().canvasRef;return(0,h.jsx)(i.Z,{container:!0,justifyContent:"center",item:!0,xs:12,children:(0,h.jsx)("canvas",{ref:a,className:t.mandala,id:"plantalaCanvas",width:"800",height:"800"})})}}}]);