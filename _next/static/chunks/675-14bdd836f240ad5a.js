(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{8045:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(o.push(n.value),!e||o.length!==e);a=!0);}catch(u){c=!0,i=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}e.default=function(t){var e=t.src,r=t.sizes,n=t.unoptimized,a=void 0!==n&&n,c=t.priority,u=void 0!==c&&c,d=t.loading,m=t.lazyRoot,b=void 0===m?null:m,v=t.lazyBoundary,w=void 0===v?"200px":v,A=t.className,S=t.quality,O=t.width,j=t.height,E=t.objectFit,I=t.objectPosition,_=t.onLoadingComplete,P=t.loader,R=void 0===P?x:P,D=t.placeholder,L=void 0===D?"empty":D,M=t.blurDataURL,q=function(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}(t,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),C=l.useRef(null),N=q,W=r?"responsive":"intrinsic";"layout"in N&&(N.layout&&(W=N.layout),delete N.layout);var U="";if(function(t){return"object"===typeof t&&(h(t)||function(t){return void 0!==t.src}(t))}(e)){var B=h(e)?e.default:e;if(!B.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(B)));if(M=M||B.blurDataURL,U=B.src,(!W||"fill"!==W)&&(j=j||B.height,O=O||B.width,!B.height||!B.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(B)))}e="string"===typeof e?e:U;var T=z(O),H=z(j),F=z(S),V=!u&&("lazy"===d||"undefined"===typeof d);(e.startsWith("data:")||e.startsWith("blob:"))&&(a=!0,V=!1);y.has(e)&&(V=!1);0;var J,$=o(f.useIntersection({rootRef:b,rootMargin:w,disabled:!V}),2),G=$[0],Q=$[1],K=!V||Q,X={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Y={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Z=!1,tt={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:E,objectPosition:I},et="blur"===L?{filter:"blur(20px)",backgroundSize:E||"cover",backgroundImage:'url("'.concat(M,'")'),backgroundPosition:I||"0% 0%"}:{};if("fill"===W)X.display="block",X.position="absolute",X.top=0,X.left=0,X.bottom=0,X.right=0;else if("undefined"!==typeof T&&"undefined"!==typeof H){var rt=H/T,nt=isNaN(rt)?"100%":"".concat(100*rt,"%");"responsive"===W?(X.display="block",X.position="relative",Z=!0,Y.paddingTop=nt):"intrinsic"===W?(X.display="inline-block",X.position="relative",X.maxWidth="100%",Z=!0,Y.maxWidth="100%",J="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(T,"%27%20height=%27").concat(H,"%27/%3e")):"fixed"===W&&(X.display="inline-block",X.position="relative",X.width=T,X.height=H)}else 0;var it={src:p,srcSet:void 0,sizes:void 0};K&&(it=k({src:e,unoptimized:a,layout:W,width:T,quality:F,sizes:r,loader:R}));var ot=e;0;var at;0;var ct=(i(at={},"imagesrcset",it.srcSet),i(at,"imagesizes",it.sizes),at),ut=l.default.useLayoutEffect,lt=l.useRef(_);return l.useEffect((function(){lt.current=_}),[_]),ut((function(){G(C.current)}),[G]),l.useEffect((function(){!function(t,e,r,n,i){var o=function(){var r=t.current;r&&(r.src!==p&&("decode"in r?r.decode():Promise.resolve()).catch((function(){})).then((function(){if(t.current&&(y.add(e),"blur"===n&&(r.style.filter="",r.style.backgroundSize="",r.style.backgroundImage="",r.style.backgroundPosition=""),i.current)){var o=r.naturalWidth,a=r.naturalHeight;i.current({naturalWidth:o,naturalHeight:a})}})))};t.current&&(t.current.complete?o():t.current.onload=o)}(C,ot,0,L,lt)}),[ot,W,L,K]),l.default.createElement("span",{style:X},Z?l.default.createElement("span",{style:Y},J?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:J}):null):null,l.default.createElement("img",Object.assign({},N,it,{decoding:"async","data-nimg":W,className:A,ref:C,style:g({},tt,et)})),V&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},N,k({src:e,unoptimized:a,layout:W,width:T,quality:F,sizes:r,loader:R}),{decoding:"async","data-nimg":W,style:tt,className:A,loading:d||"lazy"}))),u?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+it.src+it.srcSet+it.sizes,rel:"preload",as:"image",href:it.srcSet?void 0:it.src},ct))):null)};var u,l=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};n.get||n.set?Object.defineProperty(e,r,n):e[r]=t[r]}return e.default=t,e}(r(1720)),s=(u=r(5443))&&u.__esModule?u:{default:u},d=r(5809),f=r(7190);function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function g(t){for(var e=arguments,r=function(r){var n=null!=e[r]?e[r]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){m(t,e,n[e])}))},n=1;n<arguments.length;n++)r(n);return t}var y=new Set,p=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var b=new Map([["default",function(t){var e=t.root,r=t.src,n=t.width,i=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}],["imgix",function(t){var e=t.root,r=t.src,n=t.width,i=t.quality,o=new URL("".concat(e).concat(E(r))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(t){var e=t.root,r=t.src,n=t.width,i=t.quality,o=["f_auto","c_limit","w_"+n,"q_"+(i||"auto")].join(",")+"/";return"".concat(e).concat(o).concat(E(r))}],["akamai",function(t){var e=t.root,r=t.src,n=t.width;return"".concat(e).concat(E(r),"?imwidth=").concat(n)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function h(t){return void 0!==t.default}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom"}||d.imageConfigDefault,w=v.deviceSizes,A=v.imageSizes,S=v.loader,O=v.path,j=(v.domains,a(w).concat(a(A)));function k(t){var e=t.src,r=t.unoptimized,n=t.layout,i=t.width,o=t.quality,c=t.sizes,u=t.loader;if(r)return{src:e,srcSet:void 0,sizes:void 0};var l=function(t,e,r){if(r&&("fill"===e||"responsive"===e)){for(var n,i=/(^|\s)(1?\d?\d)vw/g,o=[];n=i.exec(r);n)o.push(parseInt(n[2]));if(o.length){var c,u=.01*(c=Math).min.apply(c,a(o));return{widths:j.filter((function(t){return t>=w[0]*u})),kind:"w"}}return{widths:j,kind:"w"}}return"number"!==typeof t||"fill"===e||"responsive"===e?{widths:w,kind:"w"}:{widths:a(new Set([t,2*t].map((function(t){return j.find((function(e){return e>=t}))||j[j.length-1]})))),kind:"x"}}(i,n,c),s=l.widths,d=l.kind,f=s.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:s.map((function(t,r){return"".concat(u({src:e,quality:o,width:t})," ").concat("w"===d?t:r+1).concat(d)})).join(", "),src:u({src:e,quality:o,width:s[f]})}}function z(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function x(t){var e=b.get(S);if(e)return e(g({root:O},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(S))}function E(t){return"/"===t[0]?t.slice(1):t}w.sort((function(t,e){return t-e})),j.sort((function(t,e){return t-e}))},7190:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(o.push(n.value),!e||o.length!==e);a=!0);}catch(u){c=!0,i=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootRef,r=t.rootMargin,n=t.disabled||!c,l=o.useRef(),s=i(o.useState(!1),2),d=s[0],f=s[1],m=i(o.useState(e?e.current:null),2),g=m[0],y=m[1],p=o.useCallback((function(t){l.current&&(l.current(),l.current=void 0),n||d||t&&t.tagName&&(l.current=function(t,e,r){var n=function(t){var e=t.rootMargin||"",r=u.get(e);if(r)return r;var n=new Map,i=new IntersectionObserver((function(t){t.forEach((function(t){var e=n.get(t.target),r=t.isIntersecting||t.intersectionRatio>0;e&&r&&e(r)}))}),t);return u.set(e,r={id:e,observer:i,elements:n}),r}(r),i=n.id,o=n.observer,a=n.elements;return a.set(t,e),o.observe(t),function(){a.delete(t),o.unobserve(t),0===a.size&&(o.disconnect(),u.delete(i))}}(t,(function(t){return t&&f(t)}),{root:g,rootMargin:r}))}),[n,g,r,d]);return o.useEffect((function(){if(!c&&!d){var t=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(t)}}}),[d]),o.useEffect((function(){e&&y(e.current)}),[e]),[p,d]};var o=r(1720),a=r(9311),c="undefined"!==typeof IntersectionObserver;var u=new Map},5809:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(t,e,r){t.exports=r(8045)}}]);