(this["webpackJsonpdrawing-board"]=this["webpackJsonpdrawing-board"]||[]).push([[0],{1:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var a={PEN:"pen",COLOR_PICKER:"color picker",ERASER:"eraser",HIGHLIGHER:"highlighter",CLEAR:"clear"},c=[1,3,5]},11:function(e,t,n){e.exports={canvas:"CanvasBoard_canvas__2FNkR",highlighterCanvas:"CanvasBoard_highlighterCanvas__25sLo",hide:"CanvasBoard_hide__1vutl",zIndex1:"CanvasBoard_zIndex1__3PFzr"}},12:function(e,t,n){e.exports={container:"StrokeWidthPicker_container__2ftFI",itemWrapper:"StrokeWidthPicker_itemWrapper__3HtM2",active:"StrokeWidthPicker_active__32ssn",item:"StrokeWidthPicker_item__2uMHx"}},25:function(e,t,n){},27:function(e,t,n){e.exports=n(64)},5:function(e,t,n){e.exports={container:"ColorPicker_container__2Qg69",colorLine:"ColorPicker_colorLine__M5iOw",colorLineItem:"ColorPicker_colorLineItem__2zn0q",selected:"ColorPicker_selected__1Z3BX",colorBox:"ColorPicker_colorBox__3PkPY",colorBoxItem:"ColorPicker_colorBoxItem__12vQ9",selectedColor:"ColorPicker_selectedColor__1GqsG"}},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"UPDATE_COLOR",(function(){return f})),n.d(a,"TOGGLE_MENU_ITEM",(function(){return O})),n.d(a,"UPDATE_STROKE_WIDTH",(function(){return C}));var c=n(0),o=n.n(c),r=n(14),i=n.n(r),l=n(2),u=n(3),s=n(7),d=n(8),_=n(4),h=n.n(_),E=n(1),m=n(11),b=n.n(m),v=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),a=Object(c.useState)(500),r=Object(d.a)(a,2),i=r[0],_=r[1],m=Object(c.useState)(500),v=Object(d.a)(m,2),f=v[0],O=v[1],C=Object(c.useState)([0,0]),k=Object(d.a)(C,2),p=k[0],j=k[1],I=Object(c.useState)(!1),g=Object(d.a)(I,2),w=g[0],N=g[1],H=Object(c.useState)(!1),S=Object(d.a)(H,2),T=S[0],R=S[1],P=Object(c.useState)(!1),A=Object(d.a)(P,2),L=A[0],G=A[1],M=Object(l.c)((function(e){return e.menu.color})),y=M.hue,D=M.saturation,W=M.lightness,B=Object(l.c)((function(e){return e.menu.selectedMenuItem})),x=Object(l.c)((function(e){return e.menu.selectedStrokeWidth}));Object(c.useLayoutEffect)((function(){if(_(window.innerHeight),O(window.innerWidth),null===t||void 0===t?void 0:t.current){var e=t.current;window.__DB_CANVAS_ELEMENT=e,e.getContext&&(window.__DB_CANVAS_PEN_CONTEXT_2D=e.getContext("2d"))}if(null===n||void 0===n?void 0:n.current){var a=n.current;window.__DB_CANVAS_HIGHLIGHTER_ELEMENT=a,a.getContext&&(window.__DB_CANVAS_HIGHLIGHTER_CONTEXT_2D=a.getContext("2d"))}return function(){delete window.__DB_CANVAS_PEN_CONTEXT_2D,delete window.__DB_CANVAS_HIGHLIGHTER_CONTEXT_2D,delete window.__DB_CANVAS_ELEMENT}}),[]),Object(c.useLayoutEffect)((function(){if(B===E.a.CLEAR){var e=U(),t=V();e.clearRect(0,0,e.canvas.width,e.canvas.height),t.clearRect(0,0,t.canvas.width,t.canvas.height)}}),[B]);var U=function(){var e;return null!==(e=window.__DB_CANVAS_PEN_CONTEXT_2D)&&void 0!==e?e:{}},V=function(){var e;return null!==(e=window.__DB_CANVAS_HIGHLIGHTER_CONTEXT_2D)&&void 0!==e?e:{}},z=function(){R(!0),U().clearRect(p[0]-20,p[1]-20,40,40)},X=function(e){switch(j([e.clientX,e.clientY]),B){case E.a.PEN:w&&function(){var e=U();e.lineTo.apply(e,Object(s.a)(p)),e.stroke()}();break;case E.a.ERASER:T&&z();break;case E.a.HIGHLIGHER:L&&function(){var e=V();e.lineTo.apply(e,Object(s.a)(p)),e.stroke()}()}},F=function(e){switch(B){case E.a.PEN:!function(){N(!0);var e=U(),t=V();t.clearRect(0,0,t.canvas.width,t.canvas.height),e.strokeStyle="hsl(".concat(y," ").concat(D,"% ").concat(W,"%)"),e.lineWidth=x,e.lineCap="round",e.beginPath(),e.moveTo.apply(e,Object(s.a)(p))}();break;case E.a.ERASER:z();break;case E.a.HIGHLIGHER:!function(){G(!0);var e=V();e.strokeStyle="hsl(".concat(y," ").concat(D,"% ").concat(W,"%)"),e.lineWidth=5,e.lineCap="round",e.beginPath(),e.moveTo.apply(e,Object(s.a)(p))}()}},K=function(e){switch(B){case E.a.PEN:N(!1),U().closePath();break;case E.a.ERASER:R(!1);break;case E.a.HIGHLIGHER:G(!1),V().closePath()}};return o.a.createElement(o.a.Fragment,null,o.a.createElement("canvas",{className:h()(b.a.canvas,Object(u.a)({},b.a.zIndex1,B!==E.a.HIGHLIGHER)),ref:t,height:i,width:f,onMouseMove:X,onMouseDown:F,onMouseUp:K},"Canvas is not supported in this browser!"),o.a.createElement("canvas",{className:h()(b.a.highlighterCanvas,Object(u.a)({},b.a.zIndex1,B===E.a.HIGHLIGHER)),ref:n,height:window.innerHeight,width:window.innerWidth,onMouseMove:X,onMouseDown:F,onMouseUp:K},"Canvas is not supported in this browser!"))},f="UPDATE_COLOR",O="TOGGLE_MENU_ITEM",C="UPDATE_STROKE_WIDTH",k=n(22),p=n.n(k);var j=function(e){var t={};return Object.values(e).forEach((function(e){t[p()(e)]=function(t){return{type:e,payload:t}}})),t}(a),I=n(5),g=n.n(I),w=Object(c.memo)((function(e){for(var t=e.hue,n=e.saturation,a=e.lightness,c=e.onUpdateHsl,r=[],i=function(e){for(var i=function(i){r.push(o.a.createElement("div",{key:"color-box-item-".concat(e,"-").concat(i),className:h()(g.a.colorBoxItem,Object(u.a)({},g.a.selected,e===n&&i===a)),style:{backgroundColor:"hsl(".concat(t,", ").concat(e,"%, ").concat(i,"%)")},onClick:function(){return function(e,n){c({hue:t,saturation:e,lightness:n})}(e,i)}}))},l=0;l<=100;l++)i(l)},l=100;l>=0;l--)i(l);return o.a.createElement("div",{className:g.a.colorBox},r)})),N=function(e){for(var t=e.hue,n=e.saturation,a=e.lightness,c=e.onUpdateHsl,r=[],i=function(e){r.push(o.a.createElement("div",{key:"color-line-item-".concat(e),className:h()(g.a.colorLineItem,Object(u.a)({},g.a.selected,t===e)),style:{backgroundColor:"hsl(".concat(e,", 100%, 50%)")},onClick:function(){return c({hue:e,saturation:n,lightness:a})}}))},l=0;l<360;l++)i(l);return o.a.createElement("div",{className:g.a.colorLine},r)},H=Object(c.memo)((function(e){var t=e.selectedColor,n=e.onColorUpdate;return o.a.createElement("div",{className:g.a.container},o.a.createElement(N,Object.assign({},t,{onUpdateHsl:n})),o.a.createElement(w,Object.assign({},t,{onUpdateHsl:n})))})),S=n(12),T=n.n(S),R=Object(c.memo)((function(e){var t=e.selectedColor,n=e.onStrokeWidthItemClick,a=e.selectedStrokeWidth;return o.a.createElement("div",{className:T.a.container},E.b.map((function(e){return o.a.createElement("div",{key:"stroke-width-item-".concat(e),className:h()(T.a.itemWrapper,Object(u.a)({},T.a.active,e===a)),onClick:function(){return n(e)}},o.a.createElement("div",{className:h()(T.a.item),style:{background:"hsl(".concat(t.hue," ").concat(t.saturation,"% ").concat(t.lightness,"%)"),height:e}}))})))})),P=n(25),A=n.n(P),L=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,68))})),G=function(e){var t=Object(l.b)(),n=Object(l.c)((function(e){return e.menu.color})),a=Object(l.c)((function(e){return e.menu.selectedMenuItem})),r=Object(l.c)((function(e){return e.menu.selectedStrokeWidth})),i=Object(c.useCallback)((function(e){return t(j.updateColor(e))}),[t]),u=Object(c.useCallback)((function(e){return t(j.toggleMenuItem(e))}),[t]),s=Object(c.useCallback)((function(e){return t(j.updateStrokeWidth(e))}),[t]);return o.a.createElement("div",{className:A.a.container},o.a.createElement(L,{selectedMenuItem:a,onMenuItemClick:u}),a===E.a.COLOR_PICKER&&o.a.createElement(H,{onColorUpdate:i,selectedColor:n}),a===E.a.PEN&&o.a.createElement(R,{selectedColor:n,onStrokeWidthItemClick:s,selectedStrokeWidth:r}))},M=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,67))}));var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c.Suspense,{fallback:"loading..."},o.a.createElement(M,null),o.a.createElement(v,null),o.a.createElement(G,null)))},D=n(6),W=n(9),B={init:!1},x={color:{hue:0,saturation:100,lightness:50},selectedMenuItem:"",selectedStrokeWidth:E.b[0]};var U,V=Object(D.c)({canvas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0,n=t.type;t.payload;switch(n){case"CANVAS_INIT":return Object(W.a)({},e,{init:!0});default:return e}},menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case f:return Object(W.a)({},e,{color:a});case O:return Object(W.a)({},e,{selectedMenuItem:a});case C:return Object(W.a)({},e,{selectedStrokeWidth:a});default:return e}}}),z=Object(D.d)(V,(U=[],D.a.apply(void 0,Object(s.a)(U))));n(63);i.a.render(o.a.createElement(l.a,{store:z},o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null))),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.3da4f6e8.chunk.js.map