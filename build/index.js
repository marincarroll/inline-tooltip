!function(){"use strict";var t,e={896:function(){var t=window.wp.element,e=window.wp.richText,o=window.wp.blockEditor,n=window.wp.components,r=window.wp.i18n;const i="mctooltip/tooltip";(0,e.registerFormatType)(i,{title:(0,r.__)("Tooltip","mctooltip"),tagName:"span",className:"mctooltip",edit:l=>{const{isActive:a,onChange:C,value:c}=l,p=(0,t.createElement)("svg",null,(0,t.createElement)("path",{d:"M19.7187642,3.5 C20.6800125,3.5 21.4628244,4.26117182 21.4987144,5.21295275 L21.5,5.28125356 L21.5,15.9687749 C21.5,16.9300328 20.7395427,17.7128525 19.7871137,17.7487429 L19.7187642,17.7500285 L15.2974996,17.7500285 L12.503192,22.2209274 C12.3948358,22.3946087 12.2048374,22.5 12,22.5 C11.8122324,22.5 11.6369352,22.411434 11.5255597,22.2629016 L11.496808,22.2209274 L8.70250038,17.7500285 L4.28123575,17.7500285 C3.32071125,17.7500285 2.53720927,16.9895636 2.5012868,16.0371251 L2.5,15.9687749 L2.5,5.28125356 C2.5,4.32071946 3.2611642,3.53720964 4.21293562,3.50128681 L4.28123575,3.5 L19.7187642,3.5 Z M19.7186123,4.68750238 L4.28123575,4.68750238 C3.96880587,4.68750238 3.71279821,4.92849696 3.68912499,5.23483477 L3.6873385,5.28125356 L3.6873385,15.9687749 C3.6873385,16.2812079 3.92833068,16.5370803 4.23466543,16.5607406 L4.28108375,16.5625261 L9.03104575,16.5625261 C9.21881333,16.5625261 9.39411054,16.6510921 9.50548607,16.7996245 L9.53423773,16.8415987 L11.999848,20.7863866 L14.4654583,16.8415987 C14.5647847,16.6823909 14.7327134,16.5805656 14.9177887,16.5647003 L14.9686503,16.5625261 L19.7186123,16.5625261 C20.0310421,16.5625261 20.2869119,16.3215315 20.310572,16.0151937 L20.3123575,15.9687749 L20.3123575,5.28125356 C20.3123575,4.96882056 20.0713653,4.71294821 19.7650306,4.68928788 L19.7186123,4.68750238 Z M11.5177409,9.17517115 C11.978136,9.17517115 12.3336997,9.28728138 12.5821933,9.51015262 C12.8315664,9.73348123 12.9569325,10.0237901 12.9569325,10.3797644 L12.9552803,10.4452856 L12.9552803,10.4452856 L12.9504076,10.5320751 L12.9504076,10.5320751 L12.9373348,10.7025055 C12.935511,10.7241428 12.9335662,10.7466839 12.9315029,10.7701321 C12.9172269,10.9184172 12.8929576,11.0575551 12.8609797,11.1868608 L12.8355865,11.2819859 L12.3582315,12.9738728 C12.3198645,13.1100973 12.2841745,13.2659768 12.253392,13.440608 C12.2226096,13.6143475 12.2083336,13.7461058 12.2083336,13.8358809 C12.2083336,14.0605359 12.256961,14.2128423 12.3582315,14.2950241 C12.4581635,14.3763117 12.6321479,14.4169561 12.8788599,14.4169561 C12.9076346,14.4169561 12.9390582,14.4073254 12.97189,14.3943309 L13.0390634,14.3657138 C13.118765,14.3314273 13.2016297,14.3015736 13.2718952,14.355766 C13.4802333,14.5178884 13.267875,14.8711872 12.8663656,15.059665 C12.5179491,15.2239588 12.088333,15.3360656 11.7876463,15.3360656 C11.3245673,15.3360656 10.929305,15.1248113 10.6718917,14.8970234 C10.4149238,14.6696815 10.2868852,14.3820481 10.2868852,14.033666 C10.2868852,13.8974415 10.2958072,13.7589874 10.3149907,13.6169544 C10.3314074,13.503328 10.3543915,13.3785567 10.383943,13.2417214 L10.4073381,13.1368185 L10.8869201,11.4382999 C10.9306412,11.276166 10.9649927,11.1211783 10.9944366,10.9760239 C11.0225432,10.8313154 11.0390497,10.6968746 11.0390497,10.5776181 C11.0390497,10.3601094 10.9930993,10.2091453 10.9034278,10.1242834 C10.8137517,10.0389745 10.6451122,9.99609701 10.3930552,9.99609701 C10.2690368,9.99609701 10.1450184,9.50836892 10.7040092,9.31184158 C10.9890837,9.21268834 11.2616638,9.17517115 11.5177409,9.17517115 Z M12.5759347,6.30327869 C12.8891158,6.30327869 13.1567964,6.4086886 13.3794105,6.61771329 C13.6020292,6.82719534 13.7131148,7.07865155 13.7131148,7.37343114 C13.7131148,7.66866808 13.6020247,7.92012429 13.3794105,8.12781121 C13.156785,8.33505677 12.8891158,8.43912433 12.5759347,8.43912433 C12.2636445,8.43912433 11.9937368,8.33505219 11.7697865,8.12781121 C11.54717,7.92011286 11.4343006,7.66865665 11.4343006,7.37343114 C11.4343006,7.07864012 11.5471723,6.82718391 11.7697865,6.61771329 C11.9937368,6.40868632 12.2636445,6.30327869 12.5759347,6.30327869 Z"})),[u,L]=(0,t.useState)(!1),[s,m]=(0,t.useState)();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.RichTextToolbarButton,{icon:p,title:(0,r.__)("Tooltip","mctooltip"),onClick:()=>{a?C((0,e.removeFormat)(c,i)):L(!0)},isActive:a}),u&&(0,t.createElement)(n.Modal,{title:(0,r.__)("Tooltip Content","mctooltip"),onRequestClose:()=>L(!1)},(0,t.createElement)(n.TextControl,{value:s,onChange:t=>m(t),placeholder:(0,r.__)("Enter content....","mctooltip")}),(0,t.createElement)(n.Button,{variant:"primary",disabled:!s,text:(0,r.__)("Apply","mctooltip"),onClick:()=>{C((0,e.applyFormat)(c,{type:i,attributes:{title:s,"aria-label":s,"aria-role":"tooltip"}})),L(!1)}})))}})}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var i=o[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,t=[],n.O=function(e,o,r,i){if(!o){var l=1/0;for(p=0;p<t.length;p++){o=t[p][0],r=t[p][1],i=t[p][2];for(var a=!0,C=0;C<o.length;C++)(!1&i||l>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[C])}))?o.splice(C--,1):(a=!1,i<l&&(l=i));if(a){t.splice(p--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var p=t.length;p>0&&t[p-1][2]>i;p--)t[p]=t[p-1];t[p]=[o,r,i]},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={826:0,431:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,l=o[0],a=o[1],C=o[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(C)var p=C(n)}for(e&&e(o);c<l.length;c++)i=l[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(p)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var r=n.O(void 0,[431],(function(){return n(896)}));r=n.O(r)}();