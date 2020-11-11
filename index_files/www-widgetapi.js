(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function t(a,b){if(b)a:{for(var c=fa,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&da(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;da(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ja(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la;
if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},oa={};try{oa.__proto__=na;ma=oa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ra=la;
function x(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
function sa(){this.l=!1;this.h=null;this.o=void 0;this.g=1;this.i=this.j=0;this.v=this.f=null}
function ta(a){if(a.l)throw new TypeError("Generator is already running");a.l=!0}
sa.prototype.m=function(a){this.o=a};
function ua(a,b){a.f={la:b,X:!0};a.g=a.j||a.i}
sa.prototype["return"]=function(a){this.f={"return":a};this.g=this.i};
function va(a,b){a.g=5;return{value:b}}
sa.prototype.S=function(a){this.g=a};
function wa(a){a.j=2;a.i=3}
function Aa(a){a.j=0;a.f=null}
function Ba(a){a.v=[a.f];a.j=0;a.i=0}
function Da(a){var b=a.v.splice(0)[0];(b=a.f=a.f||b)?b.X?a.g=a.j||a.i:void 0!=b.S&&a.i<b.S?(a.g=b.S,a.f=null):a.g=a.i:a.g=4}
function Ea(a){this.f=new sa;this.g=a}
function Fa(a,b){ta(a.f);var c=a.f.h;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.f.h,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.l=!1,e;var f=e.value}catch(g){return a.f.h=null,ua(a.f,g),Ha(a)}a.f.h=null;d.call(a.f,f);return Ha(a)}
function Ha(a){for(;a.f.g;)try{var b=a.g(a.f);if(b)return a.f.l=!1,{value:b.value,done:!1}}catch(c){a.f.o=void 0,ua(a.f,c)}a.f.l=!1;if(a.f.f){b=a.f.f;a.f.f=null;if(b.X)throw b.la;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){ta(a.f);a.f.h?b=Ga(a,a.f.h.next,b,a.f.m):(a.f.m(b),b=Ha(a));return b};
this["throw"]=function(b){ta(a.f);a.f.h?b=Ga(a,a.f.h["throw"],b,a.f.m):(ua(a.f,b),b=Ha(a));return b};
this["return"]=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a,b){var c=new Ia(new Ea(b));ra&&a.prototype&&ra(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:ra?function(b,c){try{return ra(b,c),!0}catch(d){return!1}}:null});
t("Object.setPrototypeOf",function(a){return a||ra});
function y(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)y(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ka});
t("Promise",function(a){function b(g){this.f=0;this.h=void 0;this.g=[];this.m=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=fa.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.ga),reject:g(this.j)}};
b.prototype.ga=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ia(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.xa(g):this.l(g)}};
b.prototype.xa=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.ja(h,g):this.l(g)};
b.prototype.j=function(g){this.o(2,g)};
b.prototype.l=function(g){this.o(1,g)};
b.prototype.o=function(g,h){if(0!=this.f)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.f);this.f=g;this.h=h;2===this.f&&this.ha();this.v()};
b.prototype.ha=function(){var g=this;e(function(){if(g.G()){var h=fa.console;"undefined"!==typeof h&&h.error(g.h)}},1)};
b.prototype.G=function(){if(this.m)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.h;return k(g)};
b.prototype.v=function(){if(null!=this.g){for(var g=0;g<this.g.length;++g)f.g(this.g[g]);this.g=null}};
var f=new c;b.prototype.ia=function(g){var h=this.i();g.J(h.resolve,h.reject)};
b.prototype.ja=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(v){try{l(r(v))}catch(w){m(w)}}:q}
var l,m,n=new b(function(r,q){l=r;m=q});
this.J(k(g,l),k(h,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.J=function(g,h){function k(){switch(l.f){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.f);}}
var l=this;null==this.g?f.g(k):this.g.push(k);this.m=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).J(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(w){r[v]=w;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).J(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)y(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!y(k,g)){var l=new c;da(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!y(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&y(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&y(k,g)&&y(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&y(k,g)&&y(k[g],this.f)?delete k[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ha(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&y(h.g,l))for(var n=0;n<m.length;n++){var r=m[n];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:m,index:n,s:r}}return{id:l,list:m,index:-1,s:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.s?l.s.value=k:(l.s={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.s),this.f.previous.next=l.s,this.f.previous=l.s,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.s&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.s.previous.next=h.s.next,h.s.next.previous=h.s.previous,h.s.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).s};
e.prototype.get=function(h){return(h=d(this,h).s)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var z=this||self;function A(a,b){for(var c=a.split("."),d=b||z,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Na(){}
function Ra(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function B(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ya(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ya=Va:Ya=Xa;return Ya.apply(null,arguments)}
function Za(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function C(a,b){var c=a.split("."),d=z;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function D(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ma=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function bb(a){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
D(bb,Error);bb.prototype.name="CustomError";var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},db=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function eb(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function fb(a,b){var c=cb(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function gb(a){return Array.prototype.concat.apply([],arguments)}
function hb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ra(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function jb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function lb(a){var b=rb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function sb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function tb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tb(a[c]);return b}
var ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ub.length;f++)c=ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var wb;var xb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},yb=/&/g,zb=/</g,Ab=/>/g,Bb=/"/g,Cb=/'/g,Db=/\x00/g,Eb=/[\x00&<>"']/;
function Fb(a,b){return a<b?-1:a>b?1:0}
;var G;a:{var Gb=z.navigator;if(Gb){var Hb=Gb.userAgent;if(Hb){G=Hb;break a}}G=""}function H(a){return-1!=G.indexOf(a)}
;function Ib(){}
;function Jb(a){Jb[" "](a);return a}
Jb[" "]=Na;var Kb=H("Opera"),Lb=H("Trident")||H("MSIE"),Mb=H("Edge"),Nb=H("Gecko")&&!(-1!=G.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),Ob=-1!=G.toLowerCase().indexOf("webkit")&&!H("Edge");function Pb(){var a=z.document;return a?a.documentMode:void 0}
var Qb;a:{var Rb="",Sb=function(){var a=G;if(Nb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Mb)return/Edge\/([\d\.]+)/.exec(a);if(Lb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ob)return/WebKit\/(\S+)/.exec(a);if(Kb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Sb&&(Rb=Sb?Sb[1]:"");if(Lb){var Tb=Pb();if(null!=Tb&&Tb>parseFloat(Rb)){Qb=String(Tb);break a}}Qb=Rb}var Ub=Qb,Vb={},Wb;if(z.document&&Lb){var Xb=Pb();Wb=Xb?Xb:parseInt(Ub,10)||void 0}else Wb=void 0;var fc=Wb;var gc=H("Firefox")||H("FxiOS"),hc=H("iPhone")&&!H("iPod")&&!H("iPad")||H("iPod"),ic=H("iPad");var jc={},kc=null;var I=window;function lc(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=mc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,nc[c])c=nc[c];else{c=String(c);if(!nc[c]){var f=/function\s+([^\(]+)/m.exec(c);nc[c]=f?f[1]:"[Anonymous]"}c=nc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function mc(a,b){b||(b={});b[oc(a)]=!0;var c=a.stack||"",d=a.Na;d&&!b[oc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=mc(d,b));return c}
function oc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var nc={};function pc(a){this.f=a||{cookie:""}}
p=pc.prototype;p.isEnabled=function(){return navigator.cookieEnabled};
p.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Va;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Y}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.f.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=xb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Y:0,path:b,domain:c});return d};
p.isEmpty=function(){return!this.f.cookie};
p.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=xb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var qc=new pc("undefined"==typeof document?null:document);function rc(a,b){this.width=a;this.height=b}
p=rc.prototype;p.clone=function(){return new rc(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.isEmpty=function(){return!(this.width*this.height)};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function sc(a,b){var c,d;var e=document;e=b||e;if(e.querySelectorAll&&e.querySelector&&a)return e.querySelectorAll(a?"."+a:"");if(a&&e.getElementsByClassName){var f=e.getElementsByClassName(a);return f}f=e.getElementsByTagName("*");if(a){var g={};for(c=d=0;e=f[c];c++){var h=e.className,k;if(k="function"==typeof h.split)k=0<=cb(h.split(/\s+/),a);k&&(g[d++]=e)}g.length=d;return g}return f}
function tc(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function uc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var vc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function wc(a){return a?decodeURI(a):a}
function J(a){return wc(a.match(vc)[3]||null)}
function xc(a){var b=a.match(vc);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function yc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)yc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function zc(a){var b=[],c;for(c in a)yc(c,a[c],b);return b.join("&")}
var Ac=/#|$/;function Bc(a){var b=Cc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Dc(){var a=[];Bc(function(b){a.push(b)});
return a}
var Cc={za:"allow-forms",Aa:"allow-modals",Ba:"allow-orientation-lock",Ca:"allow-pointer-lock",Da:"allow-popups",Ea:"allow-popups-to-escape-sandbox",Fa:"allow-presentation",Ga:"allow-same-origin",Ha:"allow-scripts",Ia:"allow-top-navigation",Ja:"allow-top-navigation-by-user-activation"},Ec=jb(function(){return Dc()});
function Fc(){var a=tc(),b={};F(Ec(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Gc(){this.h=this.h;this.i=this.i}
Gc.prototype.h=!1;Gc.prototype.dispose=function(){this.h||(this.h=!0,this.H())};
Gc.prototype.H=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var Hc={};function Ic(){}
function Jc(a,b){if(b!==Hc)throw Error("Bad secret");this.f=a}
x(Jc,Ic);Jc.prototype.toString=function(){return this.f};new Jc("about:blank",Hc);new Jc("about:invalid#zTSz",Hc);var Kc=(new Date).getTime();function Lc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Mc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,q=0;64>q;q+=4)r[q/4]=n[q]<<24|n[q+1]<<16|n[q+2]<<8|n[q+3];for(q=16;80>q;q++)n=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],w=e[2],E=e[3],Wa=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var ia=E^v&(w^E);var Ca=1518500249}else ia=v^w^E,Ca=1859775393;else 60>q?(ia=v&w|E&(v|w),Ca=2400959708):(ia=v^w^E,Ca=3395469782);ia=((n<<5|n>>>27)&4294967295)+ia+Wa+Ca+r[q]&4294967295;Wa=E;E=w;w=(v<<30|v>>>2)&4294967295;v=n;n=ia}e[0]=e[0]+n&4294967295;e[1]=e[1]+
v&4294967295;e[2]=e[2]+w&4294967295;e[3]=e[3]+E&4294967295;e[4]=e[4]+Wa&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var q=[],v=0,w=n.length;v<w;++v)q.push(n.charCodeAt(v));n=q}r||(r=n.length);q=0;if(0==l)for(;q+64<r;)b(n.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[l++]=n[q++],m++,64==l)for(l=0,b(f);q+64<r;)b(n.slice(q,q+64)),q+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var v=24;0<=v;v-=8)n[r++]=e[q]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ka:function(){for(var n=d(),r="",q=0;q<n.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(n[q]/16))+"0123456789ABCDEF".charAt(n[q]%16);return r}}}
;function Nc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],F(d,function(h){e.push(h)}),Oc(e.join(" "));
var f=[],g=[];F(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(h){e.push(h)});
a=Oc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Oc(a){var b=Mc();b.update(a);return b.ka().toLowerCase()}
;function Pc(a){var b=Lc(String(z.location.href)),c;(c=z.__SAPISID||z.__APISID||z.__OVERRIDE_SID)?c=!0:(c=new pc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?z.__SAPISID:z.__APISID,c||(c=new pc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(z.location.href);return d&&c&&b?[b,Nc(Lc(d),
c,a||null)].join(" "):null}return null}
;function Qc(){this.g=[];this.f=-1}
Qc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Qc.prototype.get=function(a){return!!this.g[a]};
function Rc(a){-1==a.f&&(a.f=db(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Sc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Sc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Tc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Uc(a){z.setTimeout(function(){throw a;},0)}
var Vc;function Wc(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var e=tc();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ya(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.W;c.W=null;e()}};
return function(e){d.next={W:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function Xc(){this.g=this.f=null}
var Zc=new Sc(function(){return new Yc},function(a){a.reset()});
Xc.prototype.add=function(a,b){var c=Zc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Xc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Yc(){this.next=this.scope=this.f=null}
Yc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Yc.prototype.reset=function(){this.next=this.scope=this.f=null};function $c(a,b){ad||bd();cd||(ad(),cd=!0);dd.add(a,b)}
var ad;function bd(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);ad=function(){a.then(ed)}}else ad=function(){var b=ed;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&!H("Edge")&&z.Window.prototype.setImmediate==z.setImmediate?(Vc||(Vc=Wc()),Vc(b)):z.setImmediate(b)}}
var cd=!1,dd=new Xc;function ed(){for(var a;a=dd.remove();){try{a.f.call(a.scope)}catch(b){Uc(b)}Tc(Zc,a)}cd=!1}
;function fd(){this.g=-1}
;function gd(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
D(gd,fd);gd.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function hd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
gd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)hd(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){hd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){hd(this,e);f=0;break}}this.h=f;this.j+=b}};
gd.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;hd(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var id="StopIteration"in z?z.StopIteration:{message:"StopIteration",stack:""};function jd(){}
jd.prototype.next=function(){throw id;};
jd.prototype.B=function(){return this};
function Ed(a){if(a instanceof jd)return a;if("function"==typeof a.B)return a.B(!1);if(Ra(a)){var b=0,c=new jd;c.next=function(){for(;;){if(b>=a.length)throw id;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Fd(a,b){if(Ra(a))try{F(a,b,void 0)}catch(c){if(c!==id)throw c;}else{a=Ed(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==id)throw c;}}}
function Gd(a){if(Ra(a))return hb(a);a=Ed(a);var b=[];Fd(a,function(c){b.push(c)});
return b}
;function Hd(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Hd)for(c=Id(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Id(a){Jd(a);return a.f.concat()}
p=Hd.prototype;p.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Kd;Jd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Kd(a,b){return a===b}
p.isEmpty=function(){return 0==this.g};
p.clear=function(){this.h={};this.i=this.g=this.f.length=0};
p.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&Jd(this),!0):!1};
function Jd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
p.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
p.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
p.forEach=function(a,b){for(var c=Id(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
p.clone=function(){return new Hd(this)};
p.B=function(a){Jd(this);var b=0,c=this.i,d=this,e=new jd;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw id;var f=d.f[b++];return a?f:d.h[f]};
return e};var Ld=!Lb||9<=Number(fc),Md;
if(Md=Lb){var Nd;if(Object.prototype.hasOwnProperty.call(Vb,"9"))Nd=Vb["9"];else{for(var Od=0,Pd=xb(String(Ub)).split("."),Qd=xb("9").split("."),Rd=Math.max(Pd.length,Qd.length),Sd=0;0==Od&&Sd<Rd;Sd++){var Td=Pd[Sd]||"",Ud=Qd[Sd]||"";do{var Vd=/(\d*)(\D*)(.*)/.exec(Td)||["","","",""],Wd=/(\d*)(\D*)(.*)/.exec(Ud)||["","","",""];if(0==Vd[0].length&&0==Wd[0].length)break;Od=Fb(0==Vd[1].length?0:parseInt(Vd[1],10),0==Wd[1].length?0:parseInt(Wd[1],10))||Fb(0==Vd[2].length,0==Wd[2].length)||Fb(Vd[2],Wd[2]);
Td=Vd[3];Ud=Wd[3]}while(0==Od)}Nd=Vb["9"]=0<=Od}Md=!Nd}var Xd=Md,Yd=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{z.addEventListener("test",Na,b),z.removeEventListener("test",Na,b)}catch(c){}return a}();function Zd(a,b){this.type=a;this.f=this.target=b;this.defaultPrevented=this.g=!1}
Zd.prototype.stopPropagation=function(){this.g=!0};
Zd.prototype.preventDefault=function(){this.defaultPrevented=!0};function $d(a,b){Zd.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
D($d,Zd);var ae={2:"touch",3:"pen",4:"mouse"};
$d.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;var e=a.relatedTarget;if(e){if(Nb){a:{try{Jb(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ae[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&this.preventDefault()};
$d.prototype.stopPropagation=function(){$d.A.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
$d.prototype.preventDefault=function(){$d.A.preventDefault.call(this);var a=this.h;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Xd)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var be="closure_listenable_"+(1E6*Math.random()|0),ce=0;function de(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.L=e;this.key=++ce;this.F=this.I=!1}
function ee(a){a.F=!0;a.listener=null;a.f=null;a.src=null;a.L=null}
;function fe(a){this.src=a;this.listeners={};this.f=0}
fe.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=ge(a,b,d,e);-1<g?(b=a[g],c||(b.I=!1)):(b=new de(b,this.src,f,!!d,e),b.I=c,a.push(b));return b};
fe.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ge(e,b,c,d);return-1<b?(ee(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function he(a,b){var c=b.type;c in a.listeners&&fb(a.listeners[c],b)&&(ee(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function ge(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.F&&f.listener==b&&f.capture==!!c&&f.L==d)return e}return-1}
;var ie="closure_lm_"+(1E6*Math.random()|0),je={},ke=0;function le(a,b,c,d,e){if(d&&d.once)me(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)le(a,b[f],c,d,e);else c=ne(c),a&&a[be]?a.f.add(String(b),c,!1,B(d)?!!d.capture:!!d,e):oe(a,b,c,!1,d,e)}
function oe(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=B(e)?!!e.capture:!!e,h=pe(a);h||(a[ie]=h=new fe(a));c=h.add(b,c,d,g,f);if(!c.f){d=qe();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)Yd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(re(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ke++}}
function qe(){var a=se,b=Ld?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function me(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)me(a,b[f],c,d,e);else c=ne(c),a&&a[be]?a.f.add(String(b),c,!0,B(d)?!!d.capture:!!d,e):oe(a,b,c,!0,d,e)}
function te(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)te(a,b[f],c,d,e);else(d=B(d)?!!d.capture:!!d,c=ne(c),a&&a[be])?a.f.remove(String(b),c,d,e):a&&(a=pe(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ge(b,c,d,e)),(c=-1<a?b[a]:null)&&ue(c))}
function ue(a){if("number"!==typeof a&&a&&!a.F){var b=a.src;if(b&&b[be])he(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(re(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ke--;(c=pe(b))?(he(c,a),0==c.f&&(c.src=null,b[ie]=null)):ee(a)}}}
function re(a){return a in je?je[a]:je[a]="on"+a}
function ve(a,b,c,d){var e=!0;if(a=pe(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.F&&(f=we(f,d),e=e&&!1!==f)}return e}
function we(a,b){var c=a.listener,d=a.L||a.src;a.I&&ue(a);return c.call(d,b)}
function se(a,b){if(a.F)return!0;if(!Ld){var c=b||A("window.event"),d=new $d(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.f;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.g&&0<=g;g--){d.f=c[g];var h=ve(c[g],f,!0,d);e=e&&h}for(g=0;!d.g&&g<c.length;g++)d.f=c[g],h=ve(c[g],f,!1,d),e=e&&h}return e}return we(a,new $d(b,this))}
function pe(a){a=a[ie];return a instanceof fe?a:null}
var xe="__closure_events_fn_"+(1E9*Math.random()>>>0);function ne(a){if("function"===typeof a)return a;a[xe]||(a[xe]=function(b){return a.handleEvent(b)});
return a[xe]}
;function K(){Gc.call(this);this.f=new fe(this);this.l=this;this.j=null}
D(K,Gc);K.prototype[be]=!0;K.prototype.addEventListener=function(a,b,c,d){le(this,a,b,c,d)};
K.prototype.removeEventListener=function(a,b,c,d){te(this,a,b,c,d)};
K.prototype.dispatchEvent=function(a){var b=this.j;if(b){var c=[];for(var d=1;b;b=b.j)c.push(b),++d}b=this.l;d=a.type||a;if("string"===typeof a)a=new Zd(a,b);else if(a instanceof Zd)a.target=a.target||b;else{var e=a;a=new Zd(d,b);vb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.g&&0<=f;f--){var g=a.f=c[f];e=ye(g,d,!0,a)&&e}a.g||(g=a.f=b,e=ye(g,d,!0,a)&&e,a.g||(e=ye(g,d,!1,a)&&e));if(c)for(f=0;!a.g&&f<c.length;f++)g=a.f=c[f],e=ye(g,d,!1,a)&&e;return e};
K.prototype.H=function(){K.A.H.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ee(d[e]);delete a.listeners[c];a.f--}}this.j=null};
function ye(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.F&&g.capture==c){var h=g.listener,k=g.L||g.src;g.I&&he(a.f,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;var ze=z.JSON.stringify;function L(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=Na)try{var b=this;a.call(void 0,function(c){Ae(b,2,c)},function(c){Ae(b,3,c)})}catch(c){Ae(this,3,c)}}
function Be(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Be.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Ce=new Sc(function(){return new Be},function(a){a.reset()});
function De(a,b,c){var d=Ce.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Ee(a,b,c){Fe(a,b,c,null)||$c(Za(b,a))}
function Ge(a){return new L(function(b,c){var d=a.length,e=[];if(d)for(var f=function(l,m){d--;e[l]=m;0==d&&b(e)},g=function(l){c(l)},h=0,k;h<a.length;h++)k=a[h],Ee(k,Za(f,h),g);
else b(e)})}
L.prototype.then=function(a,b,c){return He(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
L.prototype.$goog_Thenable=!0;function Ie(a,b){return He(a,null,b,void 0)}
L.prototype.cancel=function(a){if(0==this.f){var b=new Je(a);$c(function(){Ke(this,b)},this)}};
function Ke(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Ke(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Le(c),Me(c,e,3,b)))}a.h=null}else Ae(a,3,b)}
function Ne(a,b){a.g||2!=a.f&&3!=a.f||Oe(a);a.i?a.i.next=b:a.g=b;a.i=b}
function He(a,b,c,d){var e=De(null,null,null);e.f=new L(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Je?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;Ne(a,e);return e.f}
L.prototype.v=function(a){this.f=0;Ae(this,2,a)};
L.prototype.G=function(a){this.f=0;Ae(this,3,a)};
function Ae(a,b,c){0==a.f&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.f=1,Fe(c,a.v,a.G,a)||(a.m=c,a.f=b,a.h=null,Oe(a),3!=b||c instanceof Je||Pe(a,c)))}
function Fe(a,b,c,d){if(a instanceof L)return Ne(a,De(b||Na,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(B(a))try{var f=a.then;if("function"===typeof f)return Qe(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function Qe(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Oe(a){a.l||(a.l=!0,$c(a.o,a))}
function Le(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
L.prototype.o=function(){for(var a;a=Le(this);)Me(this,a,this.f,this.m);this.l=!1};
function Me(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Re(b,c,d);else try{b.h?b.g.call(b.context):Re(b,c,d)}catch(e){Se.call(null,e)}Tc(Ce,b)}
function Re(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Pe(a,b){a.j=!0;$c(function(){a.j&&Se.call(null,b)})}
var Se=Uc;function Je(a){bb.call(this,a)}
D(Je,bb);Je.prototype.name="cancel";function M(a){Gc.call(this);this.m=1;this.j=[];this.l=0;this.f=[];this.g={};this.o=!!a}
D(M,Gc);p=M.prototype;p.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.m;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.m=e+3;d.push(e);return e};
function Te(a,b,c){var d=Ue;if(a=d.g[a]){var e=d.f;(a=eb(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.O(a)}}
p.O=function(a){var b=this.f[a];if(b){var c=this.g[b];0!=this.l?(this.j.push(a),this.f[a+1]=Na):(c&&fb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
p.K=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var g=c[e];Ve(this.f[g+1],this.f[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.O(c)}}return 0!=e}return!1};
function Ve(a,b,c){$c(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.g[a];b&&(F(b,this.O,this),delete this.g[a])}else this.f.length=0,this.g={}};
p.H=function(){M.A.H.call(this);this.clear();this.j.length=0};function We(a){this.f=a}
We.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,ze(b))};
We.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
We.prototype.remove=function(a){this.f.remove(a)};function Xe(a){this.f=a}
D(Xe,We);function Ye(a){this.data=a}
function Ze(a){return void 0===a||a instanceof Ye?a:new Ye(a)}
Xe.prototype.set=function(a,b){Xe.A.set.call(this,a,Ze(b))};
Xe.prototype.g=function(a){a=Xe.A.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Xe.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function $e(a){this.f=a}
D($e,Xe);$e.prototype.set=function(a,b,c){if(b=Ze(b)){if(c){if(c<Date.now()){$e.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}$e.A.set.call(this,a,b)};
$e.prototype.g=function(a){var b=$e.A.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())$e.prototype.remove.call(this,a);else return b}};function af(){}
;function bf(){}
D(bf,af);bf.prototype.clear=function(){var a=Gd(this.B(!0)),b=this;F(a,function(c){b.remove(c)})};function cf(a){this.f=a}
D(cf,bf);p=cf.prototype;p.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
p.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){this.f.removeItem(a)};
p.B=function(a){var b=0,c=this.f,d=new jd;d.next=function(){if(b>=c.length)throw id;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
p.clear=function(){this.f.clear()};
p.key=function(a){return this.f.key(a)};function df(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
D(df,cf);function ef(a,b){this.g=a;this.f=null;if(Lb&&!(9<=Number(fc))){ff||(ff=new Hd);this.f=ff.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),ff.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
D(ef,bf);var gf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ff=null;function hf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return gf[b]})}
p=ef.prototype;p.isAvailable=function(){return!!this.f};
p.set=function(a,b){this.f.setAttribute(hf(a),b);jf(this)};
p.get=function(a){a=this.f.getAttribute(hf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){this.f.removeAttribute(hf(a));jf(this)};
p.B=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new jd;d.next=function(){if(b>=c.length)throw id;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
p.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);jf(this)};
function jf(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function kf(a,b){this.g=a;this.f=b+"::"}
D(kf,bf);kf.prototype.set=function(a,b){this.g.set(this.f+a,b)};
kf.prototype.get=function(a){return this.g.get(this.f+a)};
kf.prototype.remove=function(a){this.g.remove(this.f+a)};
kf.prototype.B=function(a){var b=this.g.B(!0),c=this,d=new jd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var lf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};C("yt.config_",lf);function mf(a){var b=arguments;1<b.length?lf[b[0]]=b[1]:1===b.length&&Object.assign(lf,b[0])}
function O(a,b){return a in lf?lf[a]:b}
;var nf=[];function of(a){nf.forEach(function(b){return b(a)})}
function pf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){qf(b),of(b)}}:a}
function qf(a){var b=A("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),mf("ERRORS",b))}
function rf(a){var b=A("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),mf("ERRORS",b))}
;var sf=0;C("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++sf});var tf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function uf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in tf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
uf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
uf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
uf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var rb=z.ytEventsEventsListeners||{};C("ytEventsEventsListeners",rb);var vf=z.ytEventsEventsCounter||{count:0};C("ytEventsEventsCounter",vf);
function wf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return lb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=B(e[4])&&B(d)&&sb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function xf(a){a&&("string"==typeof a&&(a=[a]),F(a,function(b){if(b in rb){var c=rb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?yf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete rb[b]}}))}
var yf=jb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function zf(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=wf(a,b,c,d);if(!e){e=++vf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new uf(h);if(!uc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new uf(h);
h.currentTarget=a;return c.call(a,h)};
g=pf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),yf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);rb[e]=[a,b,c,g,d]}}}
;function Af(a,b){"function"===typeof a&&(a=pf(a));return window.setTimeout(a,b)}
function Bf(a){"function"===typeof a&&(a=pf(a));return window.setInterval(a,250)}
;var Cf={q:!0,search_query:!0};function Df(a){var b=[];kb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];F(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Ef(a){"?"==a.charAt(0)&&(a=a.substr(1));for(var b=a.split("&"),c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=decodeURIComponent((f[0]||"").replace(/\+/g," ")),h=decodeURIComponent((f[1]||"").replace(/\+/g," "));g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(k){Cf.hasOwnProperty(f[0])||(k.args=[{key:f[0],value:f[1],query:a}],qf(k))}}return c}
function Ff(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ef(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=zc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;var Gf={};function Hf(a){return Gf[a]||(Gf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var If={},Jf=[],Ue=new M,Kf={};function Lf(){for(var a=u(Jf),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Mf(a,b){b||(b=document);var c=hb(b.getElementsByTagName("yt:"+a));var d="yt-"+a;var e=b||document;d=e.querySelectorAll&&e.querySelector?e.querySelectorAll("."+d):sc(d,b);d=hb(d);return gb(c,d)}
function Q(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Hf(b)]:a.getAttribute("data-"+b):null;return c}
function Nf(a,b){Ue.K.apply(Ue,arguments)}
;function Of(a){this.g=a||{};this.h=this.f=!1;a=document.getElementById("www-widgetapi-script");if(this.f=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function R(a,b){for(var c=[a.g,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function Pf(a,b,c){Qf||(Qf={},zf(window,"message",Ya(a.i,a)));Qf[c]=b}
Of.prototype.i=function(a){if(a.origin==R(this,"host")||a.origin==R(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.h=!0;this.f||0!=a.origin.indexOf("https:")||(this.f=!0);if(a=Qf[b.id])a.o=!0,a.o&&(F(a.m,a.V,a),a.m.length=0),a.ea(b)}};
var Qf=null;function S(a){a=vg(a);return"string"===typeof a&&"false"===a?!1:!!a}
function wg(a,b){var c=vg(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function vg(a){var b=O("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
;function xg(){}
function yg(a){var b=5E3;isNaN(b)&&(b=void 0);var c=A("yt.scheduler.instance.addJob");c?c(a,0,b):void 0===b?a():Af(a,b||0)}
;function zg(){}
x(zg,xg);zg.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
zg.f=void 0;zg.g=function(){zg.f||(zg.f=new zg)};
zg.g();var Ag=z.ytPubsubPubsubInstance||new M,Bg=z.ytPubsubPubsubSubscribedKeys||{},Cg=z.ytPubsubPubsubTopicToKeys||{},Dg=z.ytPubsubPubsubIsSynchronous||{};M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.O;M.prototype.publish=M.prototype.K;M.prototype.clear=M.prototype.clear;C("ytPubsubPubsubInstance",Ag);C("ytPubsubPubsubTopicToKeys",Cg);C("ytPubsubPubsubIsSynchronous",Dg);C("ytPubsubPubsubSubscribedKeys",Bg);var T=window,V=T.ytcsi&&T.ytcsi.now?T.ytcsi.now:T.performance&&T.performance.timing&&T.performance.now&&T.performance.timing.navigationStart?function(){return T.performance.timing.navigationStart+T.performance.now()}:function(){return(new Date).getTime()};var Eg=wg("initial_gel_batch_timeout",1E3),Fg=Math.pow(2,16)-1,Gg=null,Hg=0,Ig=void 0,Jg=0,Kg=0,Lg=0,Mg=!0,Ng=z.ytLoggingTransportGELQueue_||new Map;C("ytLoggingTransportGELQueue_",Ng);var Og=z.ytLoggingTransportTokensToCttTargetIds_||{};C("ytLoggingTransportTokensToCttTargetIds_",Og);function Pg(a){a=void 0===a?!1:a;return new L(function(b){window.clearTimeout(Jg);window.clearTimeout(Kg);Kg=0;Ig&&Ig.isReady()?(Qg(b,a),Ng.clear()):(Rg(),b())})}
function Rg(){S("web_gel_timeout_cap")&&!Kg&&(Kg=Af(Pg,6E4));window.clearTimeout(Jg);var a=O("LOGGING_BATCH_TIMEOUT",wg("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Mg&&(a=Eg);Jg=Af(Pg,a)}
function Qg(a,b){var c=Ig;b=void 0===b?!1:b;for(var d=Math.round(V()),e=Ng.size,f=u(Ng),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=tb({context:Sg(c.f||Tg())});h.events=k;(k=Og[g])&&Ug(h,g,k);delete Og[g];Vg(h,d);Wg(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();Hg=Math.round(V()-d)},
onError:function(){e--;e||a()},
ya:b});Mg=!1}}
function Vg(a,b){a.requestTimeMs=String(b);S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=O("EVENT_ID",void 0);if(c){var d=O("BATCH_CLIENT_COUNTER",void 0)||0;!d&&S("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Fg/2));d++;d>Fg&&(d=1);mf("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Gg&&Hg&&S("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Gg,roundtripMs:String(Hg)});Gg=c;Hg=0}}
function Ug(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Xg=z.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",Xg);function Yg(a){var b=Zg;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;b=Object.assign($g(b),ah(b));b.ca_type="image";a&&(b.bid=a);return b}
function $g(a){var b={};b.dt=Kc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?I:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!I.navigator&&"unknown"!==typeof I.navigator.javaEnabled&&!!I.navigator.javaEnabled&&I.navigator.javaEnabled();I.screen&&(b.u_h=I.screen.height,b.u_w=I.screen.width,b.u_ah=I.screen.availHeight,b.u_aw=I.screen.availWidth,b.u_cd=I.screen.colorDepth);
I.navigator&&I.navigator.plugins&&(b.u_nplug=I.navigator.plugins.length);I.navigator&&I.navigator.mimeTypes&&(b.u_nmime=I.navigator.mimeTypes.length);return b}
function ah(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(n){}try{var e=b.outerWidth;var f=b.outerHeight}catch(n){}try{var g=b.innerWidth;var h=b.innerHeight}catch(n){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new rc(l.clientWidth,l.clientHeight)).round()}catch(n){m=new rc(-12245933,-12245933)}k=m;m={};l=new Qc;z.SVGElement&&
z.document.createElementNS&&l.set(0);c=Fc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);z.crypto&&z.crypto.subtle&&l.set(3);z.TextDecoder&&z.TextEncoder&&l.set(4);l=Rc(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!I.WebGLRenderingContext,m}
var Zg=new function(){var a=window.document;this.f=window;this.g=a};
C("yt.ads_.signals_.getAdSignalsString",function(a){return Df(Yg(a))});var bh="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function ch(){if(!bh)return null;var a=bh();return"open"in a?a:null}
;var dh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},eh="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
fh=!1;
function gh(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(vc)[1]||null,e=J(a);d&&e?(d=c,c=a.match(vc),d=d.match(vc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?J(c)==e&&(Number(c.match(vc)[4]||null)||null)==(Number(a.match(vc)[4]||null)||null):!0;d=S("web_ajax_ignore_global_headers_if_set");for(var f in dh)e=O(dh[f]),!e||!c&&J(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!J(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!J(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!J(a))b["X-YouTube-Ad-Signals"]=Df(Yg(void 0));return b}
function hh(a){var b=window.location.search,c=J(a),d=wc(a.match(vc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Ef(b),f={};F(eh,function(g){e[g]&&(f[g]=e[g])});
return Ff(a,f||{},!1)}
function ih(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=jh(a,b);var d=kh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||z;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.T&&b.T.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.ba&&0<b.timeout&&(f=Af(function(){e||(e=!0,window.clearTimeout(f),b.ba.call(b.context||z))},b.timeout))}else lh(a,b)}
function lh(a,b){var c=b.format||"JSON";a=jh(a,b);var d=kh(a,b),e=!1,f=mh(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=nh(a,c,k,b.Oa);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||
{};n=b.context||z;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.T&&b.T.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.M&&0<b.timeout){var g=b.M;var h=Af(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||z,f))},b.timeout)}}
function jh(a,b){b.Sa&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=O("XSRF_FIELD_NAME",void 0),d=b.wa;d&&(d[c]&&delete d[c],a=Ff(a,d||{},!0));return a}
function kh(a,b){var c=O("XSRF_FIELD_NAME",void 0),d=O("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.u,g=O("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Ra||J(a)&&!b.withCredentials&&J(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.u&&b.u[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Ef(e),vb(e,f),e=b.da&&"JSON"==b.da?JSON.stringify(e):zc(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!fh&&c&&"POST"!=b.method&&
(fh=!0,qf(Error("AJAX request with postData should use POST")));return e}
function nh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,rf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?oh(a):null)e={},F(a.getElementsByTagName("*"),function(g){e[g.tagName]=ph(g)})}d&&qh(e);
return e}
function qh(a){if(B(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===wb){var e=null;var f=z.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(g){z.console&&z.console.error(g.message)}wb=e}else wb=e}(e=wb)&&e.createHTML(d);a[c]=new Ib}else qh(a[b])}}
function oh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ph(a){var b="";F(a.childNodes,function(c){b+=c.nodeValue});
return b}
function mh(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&pf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ch();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;S("debug_forward_web_query_parameters")&&(a=hh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=gh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function rh(){for(var a={},b=u(Object.entries(Ef(O("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function sh(){return"INNERTUBE_API_KEY"in lf&&"INNERTUBE_API_VERSION"in lf}
function Tg(){return{innertubeApiKey:O("INNERTUBE_API_KEY",void 0),innertubeApiVersion:O("INNERTUBE_API_VERSION",void 0),ma:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),na:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),pa:O("INNERTUBE_CONTEXT_HL",void 0),oa:O("INNERTUBE_CONTEXT_GL",void 0),qa:O("INNERTUBE_HOST_OVERRIDE",void 0)||"",sa:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ra:!!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:O("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Sg(a){var b={client:{hl:a.pa,gl:a.oa,clientName:a.na,clientVersion:a.innertubeContextClientVersion,configInfo:a.ma}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=O("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=O("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=O("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&S("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);O("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});b.client=Object.assign(b.client,rh());return b}
function th(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.La||O("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().Ka:b=Pc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=O("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return d}
;function uh(a){a=Object.assign({},a);delete a.Authorization;var b=Pc();if(b){var c=new gd;c.update(O("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ra(b);void 0===c&&(c=0);if(!kc){kc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));jc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===kc[k]&&(kc[k]=h)}}}c=jc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function vh(){var a=new df;(a=a.isAvailable()?new kf(a,"yt.innertube"):null)||(a=new ef("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new $e(a):null;this.g=document.domain||window.location.hostname}
vh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ze(b))}catch(f){return}else e=escape(b);b=this.g;qc.set(""+a,e,{Y:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
vh.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=qc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
vh.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;qc.remove(""+a,"/",void 0===b?"youtube.com":b)};var wh;function xh(){wh||(wh=new vh);return wh}
function yh(a,b,c,d){if(d)return null;d=xh().get("nextId",!0)||1;var e=xh().get("requests",!0)||{};e[d]={method:a,request:b,authState:uh(c),requestTime:Math.round(V())};xh().set("nextId",d+1,86400,!0);xh().set("requests",e,86400,!0);return d}
function zh(a){var b=xh().get("requests",!0)||{};delete b[a];xh().set("requests",b,86400,!0)}
function Ah(a){var b=xh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(V())-d.requestTime)){var e=d.authState,f=uh(th(!1));sb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),Wg(a,d.method,e,{}));delete b[c]}}xh().set("requests",b,86400,!0)}}
;new K;var Bh=[],Ch=!1;function Dh(a,b){Ch||(Bh.push({type:"EVENT",eventType:a,payload:b}),10<Bh.length&&Bh.shift())}
;function Eh(a){if(!a)throw Error();throw a;}
function Fh(a){return a}
function W(a){var b=this;this.g=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.g(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
W.all=function(a){return new W(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={D:0};f.D<a.length;f={D:f.D},++f.D)Gh(W.resolve(a[f.D]).then(function(g){return function(h){d[g.D]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
W.resolve=function(a){return new W(function(b,c){a instanceof W?a.then(b,c):b(a)})};
W.reject=function(a){return new W(function(b,c){c(a)})};
W.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Fh,e=null!==b&&void 0!==b?b:Eh;return new W(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){Hh(c,c,d,f,g)}),c.onRejected.push(function(){Ih(c,c,e,f,g)})):"FULFILLED"===c.state.status?Hh(c,c,d,f,g):"REJECTED"===c.state.status&&Ih(c,c,e,f,g)})};
function Gh(a,b){a.then(void 0,b)}
function Hh(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof W?Jh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ih(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof W?Jh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Jh(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof W?Jh(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Kh(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Lh(a){return new L(function(b,c){Kh(a,b,c)})}
function X(a){return new W(function(b,c){Kh(a,b,c)})}
;function Mh(a,b){return new W(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Nh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ja(u(c)))}
x(Nh,Error);var Oh={},Ph=(Oh.AUTH_INVALID="No user identifier specified.",Oh.EXPLICIT_ABORT="Transaction was explicitly aborted.",Oh.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Oh.MISSING_OBJECT_STORE="Object store not created.",Oh.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Oh.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Oh.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Oh);
function Qh(a,b,c){b=void 0===b?{}:b;c=void 0===c?Ph[a]:c;Nh.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,Qh.prototype);Ch||(Bh.push({type:"ERROR",payload:this}),10<Bh.length&&Bh.shift())}
x(Qh,Nh);function Rh(a,b,c){Qh.call(this,"UNKNOWN_ABORT",{objectStoreNames:a,dbName:b,mode:c});Object.setPrototypeOf(this,Rh.prototype)}
x(Rh,Qh);function Sh(a){Qh.call(this,"MISSING_OBJECT_STORE",{Ta:a},Ph.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Sh.prototype)}
x(Sh,Qh);function Th(a,b){this.f=a;this.options=b;this.transactionCount=0;this.h=V();this.g=!1}
p=Th.prototype;p.add=function(a,b,c){return Uh(this,[a],"readwrite",function(d){return Vh(d,a).add(b,c)})};
p.clear=function(a){return Uh(this,[a],"readwrite",function(b){return Vh(b,a).clear()})};
p.close=function(){var a;this.f.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return Uh(this,[a],"readonly",function(c){return Vh(c,a).count(b)})};
p["delete"]=function(a,b){return Uh(this,[a],"readwrite",function(c){return Vh(c,a)["delete"](b)})};
p.get=function(a,b){return Uh(this,[a],"readwrite",function(c){return Vh(c,a).get(b)})};
function Wh(a,b){return Uh(a,["databases"],"readwrite",function(c){c=Vh(c,"databases");return X(c.f.put(b,void 0))})}
function Uh(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;var e=a.f.transaction(b,c);e=new Xh(e);d=Yh(e,d);Zh(a,d,b.join(),c);return d}
function Zh(a,b,c,d){var e=V();Ie(b.then(function(){$h(a,!0,c,V()-e)}),function(f){var g=V(),h=a.f.name,k=a.transactionCount,l;
"QuotaExceededError"===f.name?l=new Qh("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:h,mode:d}):"UnknownError"===f.name&&(l=new Qh("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:h,mode:d}));l&&Dh("QUOTA_EXCEEDED",{dbName:h,objectStoreNames:c,transactionCount:k,transactionMode:d});f instanceof Rh&&(Dh("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,transactionDuration:g-e,transactionCount:a.transactionCount,dbDuration:g-a.h}),a.g=!0);$h(a,!1,c,g-e)})}
function $h(a,b,c,d){Dh("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.g,duration:d,isSuccessful:b})}
function ai(a){this.f=a}
p=ai.prototype;p.add=function(a,b){return X(this.f.add(a,b))};
p.clear=function(){return X(this.f.clear()).then(function(){})};
p.count=function(a){return X(this.f.count(a))};
function bi(a,b){return ci(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
p["delete"]=function(a){return a instanceof IDBKeyRange?bi(this,a):X(this.f["delete"](a))};
p.get=function(a){return X(this.f.get(a))};
p.index=function(a){return new di(this.f.index(a))};
p.getName=function(){return this.f.name};
function ci(a,b,c){a=a.f.openCursor(b.query,b.direction);return ei(a).then(function(d){return Mh(d,c)})}
function Xh(a){var b=this;this.f=a;this.g=new Map;this.aborted=!1;this.done=new L(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;if(e)d(e);else if(!b.aborted){e=Rh;for(var f=b.f.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e(g.join(),b.f.db.name,b.f.mode);d(e)}})})}
function Yh(a,b){var c=new L(function(d,e){Gh(b(a).then(function(f){a.commit();d(f)}),e)});
return Ge([c,a.done]).then(function(d){return u(d).next().value})}
Xh.prototype.abort=function(){this.f.abort();this.aborted=!0;throw new Qh("EXPLICIT_ABORT");};
Xh.prototype.commit=function(){var a=this.f;a.commit&&!this.aborted&&a.commit()};
function Vh(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new ai(c),a.g.set(c,d));return d}
function di(a){this.f=a}
di.prototype.count=function(a){return X(this.f.count(a))};
di.prototype.get=function(a){return X(this.f.get(a))};
di.prototype.getKey=function(a){return X(this.f.getKey(a))};
function fi(a,b){this.request=a;this.cursor=b}
function ei(a){return X(a).then(function(b){return null===b?null:new fi(a,b)})}
p=fi.prototype;p.advance=function(a){this.cursor.advance(a);return ei(this.request)};
p["continue"]=function(a){this.cursor["continue"](a);return ei(this.request)};
p["delete"]=function(){return X(this.cursor["delete"]()).then(function(){})};
p.getKey=function(){return this.cursor.key};
p.update=function(a){return X(this.cursor.update(a))};function gi(a,b,c){function d(){m||(m=new Th(e.result,{closed:l}));return m}
var e=self.indexedDB.open(a,b),f=c.blocked,g=c.blocking,h=c.va,k=c.upgrade,l=c.closed,m;k&&e.addEventListener("upgradeneeded",function(n){if(null===n.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===e.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var r=d(),q=new Xh(e.transaction);k(r,n.oldVersion,n.newVersion,q)});
f&&e.addEventListener("blocked",function(){f()});
return Lh(e).then(function(n){g&&n.addEventListener("versionchange",function(){g(d())});
n.addEventListener("close",function(){Dh("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:n.version});h&&h()});
return d()})}
function hi(a,b,c){c=void 0===c?{}:c;return gi(a,b,c)}
function ii(a,b){b=void 0===b?{}:b;var c=self.indexedDB.deleteDatabase(a),d=b.blocked;d&&c.addEventListener("blocked",function(){d()});
return Lh(c).then(function(){})}
;var ji=hc||ic;function ki(){var a=/WebKit\/([0-9]+)/.exec(G);return!!(a&&600<=parseInt(a[1],10))}
function li(){var a=/WebKit\/([0-9]+)/.exec(G);return!!(a&&602<=parseInt(a[1],10))}
;function mi(a,b){for(var c=u(Object.keys(b.ua)),d=c.next();!d.done;d=c.next())if(d=d.value,!a.f.objectStoreNames.contains(d))return d}
function ni(a){this.name="YtIdbMeta";this.options=a;this.g=!1}
function oi(a,b,c){c=void 0===c?{}:c;return hi(a,b,c)}
ni.prototype["delete"]=function(a){a=void 0===a?{}:a;return ii(this.name,a)};
ni.prototype.open=function(){var a=this;if(!this.f){var b,c=function(){a.f===b&&(a.f=void 0)},d={blocking:function(f){f.close()},
closed:c,va:c,upgrade:this.options.upgrade},e=function(){return Ie(oi(a.name,a.options.version,d).then(function(f){if(gc){var g=mi(f,a.options);if(void 0!==g){if(gc&&!a.g)return a.g=!0,a["delete"]().then(function(){return e()});
throw new Sh(g);}}return f}),function(f){if(f instanceof DOMException?"VersionError"===f.name:"DOMError"in self&&f instanceof DOMError?"VersionError"===f.name:f instanceof Object&&"message"in f&&"An attempt was made to open a database using a lower version than the existing version."===f.message)return oi(a.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0}));
c();throw f;})};
this.f=b=e()}return this.f};var pi=new ni({ua:{databases:!0},upgrade:function(a,b){1>b&&a.f.createObjectStore("databases",{keyPath:"actualName"})}});
function qi(){var a={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return pi.open().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn||a.clearDataOnAuthChange!==c.clearDataOnAuthChange:1)return Wh(b,a)})})}
function ri(){return pi.open().then(function(a){return a["delete"]("databases","yt-idb-test-do-not-use")})}
;var si,ti,ui=["getAll","getAllKeys","getKey","openKeyCursor"],vi=["getAll","getAllKeys","getKey","openKeyCursor"];
function wi(){return ab(this,function b(){var c,d;return Ja(b,function(e){switch(e.g){case 1:if(ji&&ki()&&!li()&&!S("ytidb_allow_on_ios_safari_v8_and_v9")||Mb)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(f){return e["return"](!1)}if(S("ytidb_new_supported_check_with_delete"))return e["return"](new Promise(function(f){Ie(ri().then(function(){f(!0)}),function(){f(!1)})}));
if(S("ytidb_new_supported_check_with_add_and_delete"))return e["return"](new Promise(function(f){Ie(qi().then(function(){return ri()}).then(function(){f(!0)}),function(){f(!1)})}));
wa(e);return va(e,Ie(hi("yt-idb-test-do-not-use"),function(){}));
case 5:if(d=e.o,!d)return e["return"](!1);case 3:Ba(e);if(d)try{d.close()}catch(f){}Da(e);break;case 2:return Aa(e),e["return"](!1);case 4:return"IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype?e["return"](!0):e["return"](!1)}})})}
function xi(){if(void 0!==si)return si;var a=V();Ch=!0;return si=new L(function(b){wi().then(function(c){Ch=!1;Dh("IS_SUPPORTED_COMPLETED",{duration:V()-a,isSupported:c});b(c)})})}
function yi(){return void 0!==ti?ti:ti=xi().then(function(a){Ch=!0;if(!a)return!1;var b=u(ui);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=u(vi);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){Ch=!1;
return a})}
;function zi(){K.call(this);this.g=Ai();Bi(this);Ci(this)}
x(zi,K);function Ai(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Ci(a){window.addEventListener("online",function(){a.g=!0;a.o&&a.o()})}
function Bi(a){window.addEventListener("offline",function(){a.g=!1;a.m&&a.m()})}
;function Di(a,b){b=void 0===b?{}:b;Ei().then(function(){zi.f||(zi.f=new zi);zi.f.g!==Ai()&&qf(Error("NetworkStatusManager isOnline does not match window status"));lh(a,b)})}
function Fi(a,b){b=void 0===b?{}:b;Ei().then(function(){lh(a,b)})}
function Ei(){return ab(this,function b(){return Ja(b,function(c){return S("networkless_logging")?(2===wg("networkless_ytidb_version")&&yi().then(function(d){return d}),c["return"](xi())):c["return"](!1)})})}
;function Gi(a){var b=this;this.f=null;a?this.f=a:sh()&&(this.f=Tg());yg(function(){Ah(b)})}
Gi.prototype.isReady=function(){!this.f&&sh()&&(this.f=Tg());return!!this.f};
function Wg(a,b,c,d){!O("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&rf(new Nh("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new Nh("innertube xhrclient not ready",b,c,d);qf(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",u:c,da:"JSON",M:function(){d.M()},
ba:d.M,onSuccess:function(n,r){if(d.onSuccess)d.onSuccess(r)},
aa:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,r){if(d.onError)d.onError(r)},
Ua:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.qa)&&(g=e);var h=a.f.sa||!1,k=th(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.ra&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var m=Ff(""+g+e,l||{},!0);Ei().then(function(n){if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(S("networkless_gel")&&!n||!S("networkless_gel"))var r=yh(b,
c,k,h);if(r){var q=f.onSuccess,v=f.aa;f.onSuccess=function(w,E){zh(r);q(w,E)};
c.aa=function(w,E){zh(r);v(w,E)}}}try{S("use_fetch_for_op_xhr")?ih(m,f):S("networkless_gel")&&d.retry?(f.method="POST",!d.ya&&S("nwl_send_fast_on_unload")?Fi(m,f):Di(m,f)):(f.method="POST",f.u||(f.u={}),lh(m,f))}catch(w){if("InvalidAccessError"==w.name)r&&(zh(r),r=0),rf(Error("An extension is blocking network request."));
else throw w;}r&&yg(function(){Ah(a)})})}
;var Hi=[{Z:function(a){return"Cannot read property '"+a.key+"'"},
U:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Z:function(a){return"Cannot call '"+a.key+"'"},
U:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function Ii(){this.f=[];this.g=[]}
var Ji;var Ki=new M;var Li=new Set,Mi=0,Ni=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Oi(a,b,c,d){c+="."+a;a=Pi(b);d[c]=a;return c.length+a.length}
function Pi(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;function Y(a,b,c){this.l=this.f=this.g=null;this.j=Sa(this);this.h=0;this.o=!1;this.m=[];this.i=null;this.v=c;this.G={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?xc(a.src):"https://www.youtube.com"),this.g=new Of(b),c||(b=Qi(this,a),this.l=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.f=a,this.f.id||(this.f.id="widget"+Sa(this.f)),If[this.f.id]=this,window.postMessage){this.i=new M;Ri(this);b=R(this.g,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in Kf)Si(this,e)}}
p=Y.prototype;p.setSize=function(a,b){this.f.width=a;this.f.height=b;return this};
p.ta=function(){return this.f};
p.ea=function(a){this.N(a.event,a)};
p.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.i.subscribe(a,c);Ti(this,a);return this};
function Si(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.v==c[0]&&Ti(a,d)}}
p.destroy=function(){this.f.id&&(If[this.f.id]=null);var a=this.i;a&&"function"==typeof a.dispose&&a.dispose();if(this.l){a=this.f;var b=a.parentNode;b&&b.replaceChild(this.l,a)}else(a=this.f)&&a.parentNode&&a.parentNode.removeChild(a);Qf&&(Qf[this.j]=null);this.g=null;a=this.f;for(var c in rb)rb[c][0]==a&&xf(c);this.l=this.f=null};
p.P=function(){return{}};
function Ui(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.o?a.V(b):a.m.push(b)}
p.N=function(a,b){if(!this.i.h){var c={target:this,data:b};this.i.K(a,c);Nf(this.v+"."+a,c)}};
function Qi(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var g=d[e].value;null!=g&&""!=g&&"null"!=g&&c.setAttribute(d[e].name,g)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+R(a.g,"title"));(d=R(a.g,"width"))&&c.setAttribute("width",d);(d=R(a.g,"height"))&&c.setAttribute("height",d);var h=
a.P();h.enablejsapi=window.postMessage?1:0;window.location.host&&(h.origin=window.location.protocol+"//"+window.location.host);h.widgetid=a.j;window.location.href&&F(["debugjs","debugcss"],function(k){var l=window.location.href;var m=l.search(Ac);b:{var n=0;for(var r=k.length;0<=(n=l.indexOf(k,n))&&n<m;){var q=l.charCodeAt(n-1);if(38==q||63==q)if(q=l.charCodeAt(n+r),!q||61==q||38==q||35==q)break b;n+=r+1}n=-1}if(0>n)l=null;else{r=l.indexOf("&",n);if(0>r||r>m)r=m;n+=k.length+1;l=decodeURIComponent(l.substr(n,
r-n).replace(/\+/g," "))}null!==l&&(h[k]=l)});
c.src=R(a.g,"host")+a.R()+"?"+zc(h);return c}
p.ca=function(){this.f&&this.f.contentWindow?this.V({event:"listening"}):window.clearInterval(this.h)};
function Ri(a){Pf(a.g,a,a.j);a.h=Bf(Ya(a.ca,a));zf(a.f,"load",Ya(function(){window.clearInterval(this.h);this.h=Bf(Ya(this.ca,this))},a))}
function Ti(a,b){a.G[b]||(a.G[b]=!0,Ui(a,"addEventListener",[b]))}
p.V=function(a){a.id=this.j;a.channel="widget";var b=ze(a),c=this.g,d=xc(this.f.src||"");var e=0==d.indexOf("https:")?[d]:c.f?[d.replace("http:","https:")]:c.h?[d]:[d,d.replace("http:","https:")];if(this.f.contentWindow)for(var f=0;f<e.length;f++)try{this.f.contentWindow.postMessage(b,e[f])}catch(Oa){if(Oa.name&&"SyntaxError"==Oa.name){if(!(Oa.message&&0<Oa.message.indexOf("target origin ''"))){var g=void 0,h=void 0,k=Oa;h=void 0===h?{}:h;h.name=O("INNERTUBE_CONTEXT_CLIENT_NAME",1);h.version=O("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var l=h||{},m="WARNING";m=void 0===m?"ERROR":m;g=void 0===g?!1:g;if(k){if(S("console_log_js_exceptions")){var n=k,r=[];r.push("Name: "+n.name);r.push("Message: "+n.message);n.hasOwnProperty("params")&&r.push("Error Params: "+JSON.stringify(n.params));r.push("File name: "+n.fileName);r.push("Stacktrace: "+n.stack);window.console.log(r.join("\n"),n)}if((window&&window.yterr||g)&&!(5<=Mi)&&0!==k.sampleWeight){var q=void 0,v=k,w=l,E=lc(v),Wa=E.message||"Unknown Error",ia=E.name||"UnknownError",
Ca=E.lineNumber||"Not available",$i=E.fileName||"Not available",aj=E.stack||v.f||"Not available";if(v.hasOwnProperty("args")&&v.args&&v.args.length)for(var pa=0,Yb=0;Yb<v.args.length;Yb++){var P=v.args[Yb],xa="params."+Yb;pa+=xa.length;if(P)if(Array.isArray(P)){for(var bj=w,kd=pa,mb=0;mb<P.length&&!(P[mb]&&(kd+=Oi(mb,P[mb],xa,bj),500<kd));mb++);pa=kd}else if("object"===typeof P){var Zb=void 0,cj=w,ld=pa;for(Zb in P)if(P[Zb]&&(ld+=Oi(Zb,P[Zb],xa,cj),500<ld))break;pa=ld}else w[xa]=Pi(P),pa+=w[xa].length;
else w[xa]=Pi(P),pa+=w[xa].length;if(500<=pa)break}else if(v.hasOwnProperty("params")&&v.params){var $b=v.params;if("object"===typeof v.params){var Rf=0;for(q in $b)if($b[q]){var Sf="params."+q,Tf=Pi($b[q]);w[Sf]=Tf;Rf+=Sf.length+Tf.length;if(500<Rf)break}}else w.params=Pi($b)}navigator.vendor&&!w.hasOwnProperty("vendor")&&(w.vendor=navigator.vendor);var md={message:Wa,name:ia,lineNumber:Ca,fileName:$i,stack:aj,params:w},Uf=Number(v.columnNumber);isNaN(Uf)||(md.lineNumber=md.lineNumber+":"+Uf);for(var ba,
ya=md,Vf=u(Hi),nd=Vf.next();!nd.done;nd=Vf.next()){var od=nd.value;if(od.U[ya.name])for(var Wf=u(od.U[ya.name]),pd=Wf.next();!pd.done;pd=Wf.next()){var Xf=pd.value,ac=ya.message.match(Xf.regexp);if(ac){ya.params["error.original"]=ac[0];for(var qd=Xf.groups,Yf={},Pa=0;Pa<qd.length;Pa++)Yf[qd[Pa]]=ac[Pa+1],ya.params["error."+qd[Pa]]=ac[Pa+1];ya.message=od.Z(Yf);break}}}ba=ya;window.yterr&&"function"===typeof window.yterr&&window.yterr(ba);if(!(Li.has(ba.message)||0<=ba.stack.indexOf("/YouTubeCenter.js")||
0<=ba.stack.indexOf("/mytube.js"))){Ki.K("handleError",ba);if(S("kevlar_gel_error_routing")){var bc=void 0,Zf=m,N=ba;a:{for(var $f=u(Ni),rd=$f.next();!rd.done;rd=$f.next()){var ag=G;if(ag&&0<=ag.toLowerCase().indexOf(rd.value.toLowerCase())){var bg=!0;break a}}bg=!1}if(!bg){var nb={stackTrace:N.stack};N.fileName&&(nb.filename=N.fileName);var ca=N.lineNumber&&N.lineNumber.split?N.lineNumber.split(":"):[];0!==ca.length&&(1!==ca.length||isNaN(Number(ca[0]))?2!==ca.length||isNaN(Number(ca[0]))||isNaN(Number(ca[1]))||
(nb.lineNumber=Number(ca[0]),nb.columnNumber=Number(ca[1])):nb.lineNumber=Number(ca[0]));Ji||(Ji=new Ii);var cc=Ji;var dj=N.message,ej=N.name;a:{for(var cg=u(cc.g),sd=cg.next();!sd.done;sd=cg.next()){var dg=sd.value;if(N.message&&N.message.match(dg.f)){var td=dg.weight;break a}}for(var eg=u(cc.f),ud=eg.next();!ud.done;ud=eg.next()){var fg=ud.value;if(fg.f(N)){td=fg.weight;break a}}td=1}var vd={level:"ERROR_LEVEL_UNKNOWN",message:dj,errorClassName:ej,sampleWeight:td};"ERROR"===Zf?vd.level="ERROR_LEVEL_ERROR":
"WARNING"===Zf&&(vd.level="ERROR_LEVEL_WARNNING");var fj={isObfuscated:!0,browserStackInfo:nb},Qa={pageUrl:window.location.href};O("FEXP_EXPERIMENTS")&&(Qa.experimentIds=O("FEXP_EXPERIMENTS"));Qa.kvPairs=[{key:"client.params.errorServiceSignature",value:"msg="+cc.g.length+"&cb="+cc.f.length}];var wd=N.params;if(wd)for(var gg=u(Object.keys(wd)),xd=gg.next();!xd.done;xd=gg.next()){var hg=xd.value;Qa.kvPairs.push({key:"client."+hg,value:String(wd[hg])})}var ig=O("SERVER_NAME",void 0),jg=O("SERVER_VERSION",
void 0);ig&&jg&&(Qa.kvPairs.push({key:"server.name",value:ig}),Qa.kvPairs.push({key:"server.version",value:jg}));var gj={errorMetadata:Qa,stackTrace:fj,logMessage:vd};bc=void 0===bc?{}:bc;var kg=Gi;O("ytLoggingEventsDefaultDisabled",!1)&&Gi==Gi&&(kg=null);var hj=kg,U=bc;U=void 0===U?{}:U;var ob={};ob.eventTimeMs=Math.round(U.timestamp||V());ob.clientError=gj;var ij=String;if(U.timestamp)var lg=-1;else{var mg=A("_lact",window);lg=null==mg?-1:Math.max(Date.now()-mg,0)}ob.context={lastActivityMs:ij(lg)};
if(S("log_sequence_info_on_gel_web")&&U.fa){var jj=ob.context,pb=U.fa;Xg[pb]=pb in Xg?Xg[pb]+1:0;jj.sequence={index:Xg[pb],groupKey:pb};U.Qa&&delete Xg[U.fa]}var kj=ob,dc=U.Pa,ng=hj,yd="";if(dc){var ec=dc,zd={};ec.videoId?zd.videoId=ec.videoId:ec.playlistId&&(zd.playlistId=ec.playlistId);Og[dc.token]=zd;yd=dc.token}var Ad=Ng.get(yd)||[];Ng.set(yd,Ad);Ad.push(kj);ng&&(Ig=new ng);var lj=wg("web_logging_max_batch")||100,og=V();Ad.length>=lj?Pg(!0):10<=og-Lg&&(Rg(),Lg=og);Pg()}}if(!S("suppress_error_204_logging")){var Bd,
za=ba,qb=za.params||{},qa={wa:{a:"logerror",t:"jserror",type:za.name,msg:za.message.substr(0,250),line:za.lineNumber,level:m,"client.name":qb.name},u:{url:O("PAGE_NAME",window.location.href),file:za.fileName},method:"POST"};qb.version&&(qa["client.version"]=qb.version);if(qa.u){za.stack&&(qa.u.stack=za.stack);for(var pg=u(Object.keys(qb)),Cd=pg.next();!Cd.done;Cd=pg.next()){var qg=Cd.value;qa.u["client."+qg]=qb[qg]}if(Bd=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var rg=u(Object.keys(Bd)),
Dd=rg.next();!Dd.done;Dd=rg.next()){var sg=Dd.value;qa.u[sg]=Bd[sg]}var tg=O("SERVER_NAME",void 0),ug=O("SERVER_VERSION",void 0);tg&&ug&&(qa.u["server.name"]=tg,qa.u["server.version"]=ug)}lh(O("ECATCHER_REPORT_HOST","")+"/error_204",qa)}Li.add(ba.message);Mi++}}}}}else throw Oa;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Vi(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Wi(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"player");this.C={};this.playerInfo={}}
x(Z,Y);p=Z.prototype;p.R=function(){return"/embed/"+R(this.g,"videoId")};
p.P=function(){var a=R(this.g,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=R(this.g,"embedConfig")){if(B(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
p.ea=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(B(a))for(var c in a)this.C[c]=a[c];break;case "infoDelivery":Xi(this,a);break;case "initialDelivery":window.clearInterval(this.h);this.playerInfo={};this.C={};Yi(this,a.apiInterface);Xi(this,a);break;default:this.N(b,a)}};
function Xi(a,b){if(B(b))for(var c in b)a.playerInfo[c]=b[c]}
function Yi(a,b){F(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Vi(c)?this[c]=function(){this.playerInfo={};
this.C={};Ui(this,c,arguments);return this}:Wi(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Ui(this,c,arguments);
return this})},a)}
p.getVideoEmbedCode=function(){var a=parseInt(R(this.g,"width"),10),b=parseInt(R(this.g,"height"),10),c=R(this.g,"host")+this.R();Eb.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(yb,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(zb,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(Ab,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(Bb,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(Cb,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(Db,"&#0;")));return'<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
p.getOptions=function(a){return this.C.namespaces?a?this.C[a].options||[]:this.C.namespaces||[]:[]};
p.getOption=function(a,b){if(this.C.namespaces&&a&&b)return this.C[a][b]};
function Zi(a){if("iframe"!=a.tagName.toLowerCase()){var b=Q(a,"videoid");b&&(b={videoId:b,width:Q(a,"width"),height:Q(a,"height")},new Z(a,b))}}
;function mj(a,b){var c={title:"Thumbnail",videoId:"",width:120,height:68};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"thumbnail")}
x(mj,Y);mj.prototype.R=function(){return"/embed/"+R(this.g,"videoId")};
mj.prototype.P=function(){return{player:0,thumb_width:R(this.g,"thumbWidth"),thumb_height:R(this.g,"thumbHeight"),thumb_align:R(this.g,"thumbAlign")}};
mj.prototype.N=function(a,b){Y.prototype.N.call(this,a,b?b.info:void 0)};
function nj(a){if("iframe"!=a.tagName.toLowerCase()){var b=Q(a,"videoid");if(b){b={videoId:b,events:{},width:Q(a,"width"),height:Q(a,"height"),thumbWidth:Q(a,"thumb-width"),thumbHeight:Q(a,"thumb-height"),thumbAlign:Q(a,"thumb-align")};var c=Q(a,"onclick");c&&(b.events.onClick=c);new mj(a,b)}}}
;C("YT.PlayerState.UNSTARTED",-1);C("YT.PlayerState.ENDED",0);C("YT.PlayerState.PLAYING",1);C("YT.PlayerState.PAUSED",2);C("YT.PlayerState.BUFFERING",3);C("YT.PlayerState.CUED",5);C("YT.get",function(a){return If[a]});
C("YT.scan",Lf);C("YT.subscribe",function(a,b,c){Ue.subscribe(a,b,c);Kf[a]=!0;for(var d in If)Si(If[d],a)});
C("YT.unsubscribe",function(a,b,c){Te(a,b,c)});
C("YT.Player",Z);C("YT.Thumbnail",mj);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.ta;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;Jf.push(function(a){a=Mf("player",a);F(a,Zi)});
Jf.push(function(){var a=Mf("thumbnail");F(a,nj)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Lf();var oj=z.onYTReady;oj&&oj();var pj=z.onYouTubeIframeAPIReady;pj&&pj();var qj=z.onYouTubePlayerAPIReady;qj&&qj();}).call(this);
