"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{884:function(e,n,t){t.r(n);var r=t(861),a=t(439),c=t(757),i=t.n(c),s=t(791),u=t(689),o=t(87),p=t(427),f=t(184);n.default=function(){var e,n=(0,u.UO)().movieId,t=(0,s.useState)({}),c=(0,a.Z)(t,2),l=c[0],d=c[1];return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.DF)(n);case 3:t=e.sent,d(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),(0,f.jsxs)("div",{children:[(0,f.jsx)(o.rU,{to:"/",children:"\u041d\u0430\u0437\u0430\u0434"}),(0,f.jsx)("div",{children:(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(l.poster_path),alt:l.title})}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:l.title}),(0,f.jsxs)("p",{children:["User rating: ",l.vote_average]}),(0,f.jsx)("h2",{children:"Overview"}),(0,f.jsx)("p",{children:l.overview}),(0,f.jsx)("h2",{children:"Genres"}),(0,f.jsx)("p",{children:null===(e=l.genres)||void 0===e?void 0:e.map((function(e){return e.name})).join(", ")})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Additional information"}),(0,f.jsx)(o.rU,{to:"/movies/".concat(n,"/cast"),children:"Cast"}),(0,f.jsx)(o.rU,{to:"/movies/".concat(n,"/reviews"),children:"Reviews"}),(0,f.jsx)(u.j3,{})]})]})}},427:function(e,n,t){t.d(n,{DF:function(){return p},K$:function(){return h},_I:function(){return l},a8:function(){return u},gZ:function(){return x}});var r=t(861),a=t(757),c=t.n(a),i=t(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="c97607d6a7ff13e25d14023836e4d703";function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day?language=en-US&api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"?language=en-US&api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"/credits?language=en-US&api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(n,"/reviews?language=en-US&api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1&api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=884.db7acb85.chunk.js.map