(this["webpackJsonpdrawing-board"]=this["webpackJsonpdrawing-board"]||[]).push([[0],{1:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var a={PEN:"pen",COLOR_PICKER:"color picker",ERASER:"eraser",HIGHLIGHER:"highlighter",CLEAR:"clear"},c=[1,3,5]},11:function(e,t,n){e.exports={canvas:"CanvasBoard_canvas__2FNkR",highlighterCanvas:"CanvasBoard_highlighterCanvas__25sLo",hide:"CanvasBoard_hide__1vutl",zIndex1:"CanvasBoard_zIndex1__3PFzr"}},12:function(e,t,n){e.exports={container:"StrokeWidthPicker_container__2ftFI",itemWrapper:"StrokeWidthPicker_itemWrapper__3HtM2",active:"StrokeWidthPicker_active__32ssn",item:"StrokeWidthPicker_item__2uMHx"}},25:function(e,t,n){},26:function(e,t,n){e.exports={container:"Header_container__7iTTy"}},28:function(e,t,n){e.exports=n(65)},5:function(e,t,n){e.exports={container:"ColorPicker_container__2Qg69",hide:"ColorPicker_hide__13WzM",colorLine:"ColorPicker_colorLine__M5iOw",colorLineItem:"ColorPicker_colorLineItem__2zn0q",selected:"ColorPicker_selected__1Z3BX",colorBox:"ColorPicker_colorBox__3PkPY",colorBoxItem:"ColorPicker_colorBoxItem__12vQ9",selectedColor:"ColorPicker_selectedColor__1GqsG"}},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"UPDATE_COLOR",(function(){return f})),n.d(a,"TOGGLE_MENU_ITEM",(function(){return O})),n.d(a,"UPDATE_STROKE_WIDTH",(function(){return C}));var c=n(0),o=n.n(c),r=n(14),i=n.n(r),l=n(2),s=n(3),u=n(7),d=n(8),_=n(4),h=n.n(_),m=n(1),E=n(11),b=n.n(E),v=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),a=Object(c.useState)(500),r=Object(d.a)(a,2),i=r[0],_=r[1],E=Object(c.useState)(500),v=Object(d.a)(E,2),f=v[0],O=v[1],C=Object(c.useState)([0,0]),k=Object(d.a)(C,2),p=k[0],g=k[1],j=Object(c.useState)(!1),I=Object(d.a)(j,2),w=I[0],N=I[1],H=Object(c.useState)(!1),S=Object(d.a)(H,2),T=S[0],R=S[1],P=Object(c.useState)(!1),A=Object(d.a)(P,2),L=A[0],M=A[1],G=Object(l.c)((function(e){return e.menu.color})),y=G.hue,D=G.saturation,W=G.lightness,x=Object(l.c)((function(e){return e.menu.selectedMenuItem})),B=Object(l.c)((function(e){return e.menu.selectedStrokeWidth}));Object(c.useLayoutEffect)((function(){if(_(window.innerHeight),O(window.innerWidth),null===t||void 0===t?void 0:t.current){var e=t.current;window.__DB_CANVAS_ELEMENT=e,e.getContext&&(window.__DB_CANVAS_PEN_CONTEXT_2D=e.getContext("2d"))}if(null===n||void 0===n?void 0:n.current){var a=n.current;window.__DB_CANVAS_HIGHLIGHTER_ELEMENT=a,a.getContext&&(window.__DB_CANVAS_HIGHLIGHTER_CONTEXT_2D=a.getContext("2d"))}return function(){delete window.__DB_CANVAS_PEN_CONTEXT_2D,delete window.__DB_CANVAS_HIGHLIGHTER_CONTEXT_2D,delete window.__DB_CANVAS_ELEMENT}}),[]),Object(c.useLayoutEffect)((function(){if(x===m.a.CLEAR){var e=U(),t=V();e.clearRect(0,0,e.canvas.width,e.canvas.height),t.clearRect(0,0,t.canvas.width,t.canvas.height)}}),[x]);var U=function(){var e;return null!==(e=window.__DB_CANVAS_PEN_CONTEXT_2D)&&void 0!==e?e:{}},V=function(){var e;return null!==(e=window.__DB_CANVAS_HIGHLIGHTER_CONTEXT_2D)&&void 0!==e?e:{}},z=function(){R(!0),U().clearRect(p[0]-20,p[1]-20,40,40)},X=function(e){switch(g([e.clientX,e.clientY]),x){case m.a.PEN:w&&function(){var e=U();e.lineTo.apply(e,Object(u.a)(p)),e.stroke()}();break;case m.a.ERASER:T&&z();break;case m.a.HIGHLIGHER:L&&function(){var e=V();e.lineTo.apply(e,Object(u.a)(p)),e.stroke()}()}},F=function(e){switch(x){case m.a.PEN:!function(){N(!0);var e=U(),t=V();t.clearRect(0,0,t.canvas.width,t.canvas.height),e.strokeStyle="hsl(".concat(y," ").concat(D,"% ").concat(W,"%)"),e.lineWidth=B,e.lineCap="round",e.beginPath(),e.moveTo.apply(e,Object(u.a)(p))}();break;case m.a.ERASER:z();break;case m.a.HIGHLIGHER:!function(){M(!0);var e=V();e.strokeStyle="hsl(".concat(y," ").concat(D,"% ").concat(W,"%)"),e.lineWidth=5,e.lineCap="round",e.beginPath(),e.moveTo.apply(e,Object(u.a)(p))}()}},K=function(e){switch(x){case m.a.PEN:N(!1),U().closePath();break;case m.a.ERASER:R(!1);break;case m.a.HIGHLIGHER:M(!1),V().closePath()}};return o.a.createElement(o.a.Fragment,null,o.a.createElement("canvas",{className:h()(b.a.canvas,Object(s.a)({},b.a.zIndex1,x!==m.a.HIGHLIGHER)),ref:t,height:i,width:f,onMouseMove:X,onMouseDown:F,onMouseUp:K},"Canvas is not supported in this browser!"),o.a.createElement("canvas",{className:h()(b.a.highlighterCanvas,Object(s.a)({},b.a.zIndex1,x===m.a.HIGHLIGHER)),ref:n,height:window.innerHeight,width:window.innerWidth,onMouseMove:X,onMouseDown:F,onMouseUp:K},"Canvas is not supported in this browser!"))},f="UPDATE_COLOR",O="TOGGLE_MENU_ITEM",C="UPDATE_STROKE_WIDTH",k=n(22),p=n.n(k);var g=function(e){var t={};return Object.values(e).forEach((function(e){t[p()(e)]=function(t){return{type:e,payload:t}}})),t}(a),j=n(5),I=n.n(j),w=Object(c.memo)((function(e){for(var t=e.hue,n=e.saturation,a=e.lightness,c=e.onUpdateHsl,r=[],i=100;i>=0;i--)for(var l=0;l<=100;l++)r.push(o.a.createElement("div",{key:"color-box-item-".concat(i,"-").concat(l),className:h()(I.a.colorBoxItem,Object(s.a)({},I.a.selected,i===n&&l===a)),style:{backgroundColor:"hsl(".concat(t,", ").concat(i,"%, ").concat(l,"%)")},"data-saturation":i,"data-lightness":l}));return o.a.createElement("div",{onClick:function(e){if(e.target.className.includes("colorBoxItem")){var o=e.target.dataset,r=o.saturation,i=void 0===r?n:r,l=o.lightness,s=void 0===l?a:l;c({hue:t,saturation:Number(i),lightness:Number(s)})}e.stopPropagation()},className:I.a.colorBox},r)})),N=function(e){for(var t=e.hue,n=e.saturation,a=e.lightness,c=e.onUpdateHsl,r=[],i=function(e){r.push(o.a.createElement("div",{key:"color-line-item-".concat(e),className:h()(I.a.colorLineItem,Object(s.a)({},I.a.selected,t===e)),style:{backgroundColor:"hsl(".concat(e,", 100%, 50%)")},onClick:function(){return c({hue:e,saturation:n,lightness:a})}}))},l=0;l<360;l++)i(l);return o.a.createElement("div",{className:I.a.colorLine},r)},H=Object(c.memo)((function(e){var t=e.selectedColor,n=e.onColorUpdate,a=e.hide;return o.a.createElement("div",{className:h()(I.a.container,Object(s.a)({},I.a.hide,a))},o.a.createElement(N,Object.assign({},t,{onUpdateHsl:n})),o.a.createElement(w,Object.assign({},t,{onUpdateHsl:n})))})),S=n(12),T=n.n(S),R=Object(c.memo)((function(e){var t=e.selectedColor,n=e.onStrokeWidthItemClick,a=e.selectedStrokeWidth;return o.a.createElement("div",{className:T.a.container},m.b.map((function(e){return o.a.createElement("div",{key:"stroke-width-item-".concat(e),className:h()(T.a.itemWrapper,Object(s.a)({},T.a.active,e===a)),onClick:function(){return n(e)}},o.a.createElement("div",{className:h()(T.a.item),style:{background:"hsl(".concat(t.hue," ").concat(t.saturation,"% ").concat(t.lightness,"%)"),height:e}}))})))})),P=n(25),A=n.n(P),L=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,67))})),M=function(e){var t=Object(l.b)(),n=Object(l.c)((function(e){return e.menu.color})),a=Object(l.c)((function(e){return e.menu.selectedMenuItem})),r=Object(l.c)((function(e){return e.menu.selectedStrokeWidth})),i=Object(c.useCallback)((function(e){return t(g.updateColor(e))}),[t]),s=Object(c.useCallback)((function(e){return t(g.toggleMenuItem(e))}),[t]),u=Object(c.useCallback)((function(e){return t(g.updateStrokeWidth(e))}),[t]);return o.a.createElement("div",{className:A.a.container},o.a.createElement(L,{selectedMenuItem:a,onMenuItemClick:s}),o.a.createElement(H,{hide:a!==m.a.COLOR_PICKER,onColorUpdate:i,selectedColor:n}),a===m.a.PEN&&o.a.createElement(R,{selectedColor:n,onStrokeWidthItemClick:u,selectedStrokeWidth:r}))},G=n(26),y=n.n(G),D=Object(c.memo)((function(){return o.a.createElement("div",{className:y.a.container,contentEditable:!0},"drawing board")}));var W=function(){var e=Object(l.c)((function(e){return e.menu.color})),t=e.hue,n=e.saturation,a=e.lightness;return o.a.createElement("div",{style:{"--selectedColor":"hsl(".concat(t," ").concat(n,"% ").concat(a,"%)"),"--hue":t,"--saturation":"".concat(n,"%"),"--lightness":"".concat(a,"%")}},o.a.createElement(c.Suspense,{fallback:"loading..."},o.a.createElement(D,null),o.a.createElement(v,null),o.a.createElement(M,null)))},x=n(6),B=n(9),U={init:!1},V={color:{hue:5,saturation:10,lightness:20},selectedMenuItem:"",selectedStrokeWidth:m.b[0]};var z,X=Object(x.c)({canvas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,n=t.type;t.payload;switch(n){case"CANVAS_INIT":return Object(B.a)({},e,{init:!0});default:return e}},menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case f:return Object(B.a)({},e,{color:a});case O:return Object(B.a)({},e,{selectedMenuItem:a});case C:return Object(B.a)({},e,{selectedStrokeWidth:a});default:return e}}}),F=Object(x.d)(X,(z=[],x.a.apply(void 0,Object(u.a)(z))));n(64);i.a.render(o.a.createElement(l.a,{store:F},o.a.createElement(o.a.StrictMode,null,o.a.createElement(W,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.308dd7a7.chunk.js.map