/**
 * BottleJS v1.0.1 - 2015-10-05
 * A powerful dependency injection micro container
 *
 * Copyright (c) 2015 Stephen Young
 * Licensed MIT
 */

(function(a){"use strict";var b=0,c=Array.prototype.slice,d=[],e=function(a,b){return a.concat(b)},f=function(a,b,c){var d=a[b];return d||(d=a[b]={}),c&&!d[c]&&(d[c]=[]),c?d[c]:d},g=function(a,b,c){return f(d,b,c).map(h.bind(null,a)).reduce(e,f(a,b,c)).concat(f(a,b,"__global__"))},h=function(a,b){return f(a,b.id,b.fullname)},i=function(a,b){return a[b]},j=function(a){return a.split(".").reduce(i,this)},k=function(a,b,c,d){"function"==typeof c&&(d=c,c="__global__"),f(a,b,c).push(d)},l=function(a,b){var c=a.split(".");return a=c.pop(),m.call(c.reduce(I,this.container),a,b),this},m=function(a,b){Object.defineProperty(this,a,{configurable:!1,enumerable:!0,value:b,writable:!1})},n=[],o=function(a,b){return k(n,this.id,a,b),this},p=[],q=function(a){return k(p,this.id,a),this},r=function(a){return(a||[]).map(j,this.container)},s=function(a,b){return B.call(this,a,function(){this.$get=b})},t=[],u=function(a,b,c,d){var e=g(t,a,b),f={configurable:!0,enumerable:!0};return e.length?f.get=function(){var a=0,b=function(){e[a]&&e[a++](c,b)};return b(),c}:(f.value=c,f.writable=!0),Object.defineProperty(d,b,f),d[b]},v=function(a,b){return k(t,this.id,a,b),this},w={},x=function(a){var b;return a?(b=w[a],b||(w[a]=b=new K,b.constant("BOTTLE_NAME",a)),b):new K},y=[],z=[],A=function(a,b){return b(a)},B=function(a,b){var c,d,e,g,h;return g=this.id,d=f(z,g),d[a]?void 0:(d[a]=!0,c=a.split("."),e=c.shift(),h=c.length?D:C,h.call(this,e,b,a,c))},C=function(b,c){var d,e,f,h;return h=this.id,f=this.container,d=b+"Provider",e=Object.create(null),e[d]={configurable:!0,enumerable:!0,get:function(){var a=new c;return delete f[d],f[d]=a,a}},e[b]={configurable:!0,enumerable:!0,get:function(){var c,e=f[d];return e&&(delete f[d],delete f[b],c=g(n,h,b).reduce(A,e.$get(f))),c===a?c:u(h,b,c,f)}},Object.defineProperties(f,e),this},D=function(a,b,c,e){var g,h,i,j;return j=this.id,h=f(y,j),g=h[a],g||(this.container[a]=(g=h[a]=K.pop()).container),i=e.join("."),g.provider(i,b),k(d,g.id,i,{fullname:c,id:j}),this},E=function(a){return this[a.$type||"service"].apply(this,[a.$name,a].concat(a.$inject||[]))},F=function(a){return f(p,this.id,"__global__").forEach(function(b){b(a)}),this},G=function(a,b){var d=arguments.length>2?c.call(arguments,2):null,e=this;return s.call(this,a,function(){return d&&(d=d.map(j,e.container),d.unshift(b),b=b.bind.apply(b,d)),new b})},H=function(a,b){var c;return c=a.split("."),a=c.pop(),J.call(c.reduce(I,this.container),a,b),this},I=function(a,b){var c={};return J.call(a,b,c),c},J=function(a,b){Object.defineProperty(this,a,{configurable:!0,enumerable:!0,value:b,writable:!0})},K=function M(a){return this instanceof M?(this.id=b++,void(this.container={$register:E.bind(this)})):M.pop(a)};K.prototype={constant:l,decorator:o,defer:q,digest:r,factory:s,middleware:v,provider:B,register:E,resolve:F,service:G,value:H},K.pop=x;var L={"function":!0,object:!0};!function(a){var b=L[typeof exports]&&exports&&!exports.nodeType&&exports,c=L[typeof module]&&module&&!module.nodeType&&module,d=c&&c.exports===b&&b,e=L[typeof global]&&global;!e||e.global!==e&&e.window!==e||(a=e),"function"==typeof define&&"object"==typeof define.amd&&define.amd?(a.Bottle=K,define(function(){return K})):b&&c?d?(c.exports=K).Bottle=K:b.Bottle=K:a.Bottle=K}(L[typeof window]&&window||this)}).call(this);
//# sourceMappingURL=bottle.min.js.map
