"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[237],{4703:function(t,a,e){e.r(a),e.d(a,{default:function(){return l}});var n=e(1749),i=e(1120),r=e(7294),c=e(8743),o=c.ZP.getState().imageMultiplier;function s(t){var a=t.amount,e=void 0===a?4+2*t.order:a,n=t.rotation,i=void 0===n?0:n,r=t.scale,c=void 0===r?1:r,s=t.size,u=void 0===s?100*o:s;return{amount:e,distance:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,a=arguments.length>1?arguments[1]:void 0;return t*a*o}(t.distance,t.order),rotation:i,step:Math.ceil(360/e),scale:c,size:u}}function u(t,a){for(var e=c.ZP.getState().mediaPath,n=c.ZP.getState().colorMode,i=s(a),r=i.amount,u=i.distance,d=i.rotation,f=i.step,l=i.scale,h=i.size,v=n?c.Li:c.Pr,m=function(n){var i=function(t,a,e,n){var i=a/(e/2)*Math.PI;return{imageX:n*Math.cos(i)+t.canvas.width*o/2,imageY:n*Math.sin(i)+t.canvas.height*o/2}}(t,n,r,u),c=i.imageX,s=i.imageY,m=function(t,a,e){return a+e*t*Math.PI/180}(n,d,f),g=new Image;g.onload=function(){t.setTransform(l,0,0,l,c,s),t.rotate(m),t.drawImage(g,-h/2,-h/2,h,h)},g.src="".concat("/plantala","/images/").concat(e).concat(a.source).concat(v)},g=0;g<r;g++)m(g)}var d=e(5893),f=(0,i.Z)((function(){return{mandala:{width:"100%",height:"100%",maxWidth:"fit-content","@media print":{maxWidth:"80vw"}}}})),l=function(){var t=f(),a=function(){var t=(0,r.useRef)(null),a=(0,c.ZP)(),e=a.colorMode,n=a.getSelectedElements,i=a.imageMultiplier,o=a.media;return(0,r.useEffect)((function(){if(o.length>0&&t.current){var a=t.current.getContext("2d");a&&(a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,a.canvas.width*i,a.canvas.height*i),n().forEach((function(t){return u(a,t)})))}}),[e,n,i,o]),{canvasRef:t}}().canvasRef;return(0,d.jsx)(n.Z,{container:!0,justifyContent:"center",item:!0,xs:12,children:(0,d.jsx)("canvas",{ref:a,className:t.mandala,id:"plantalaCanvas",width:"800",height:"800"})})}}}]);