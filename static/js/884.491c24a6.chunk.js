"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{884:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),i=n.n(c),s=n(791),u=n(689),o=n(87),p=n(427),d=n(184);t.default=function(){var e,t=(0,u.UO)().movieId,n=(0,s.useState)({}),c=(0,a.Z)(n,2),f=c[0],h=c[1];return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.DF)(t);case 3:n=e.sent,h(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),(0,d.jsxs)("div",{children:[(0,d.jsx)(o.rU,{to:"/",children:"\u041d\u0430\u0437\u0430\u0434"}),(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(f.poster_path),alt:f.title})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:f.title}),(0,d.jsxs)("p",{children:["User rating: ",f.vote_average]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:f.overview}),(0,d.jsx)("h2",{children:"Genres"}),(0,d.jsx)("p",{children:null===(e=f.genres)||void 0===e?void 0:e.map((function(e){return e.name})).join(", ")})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Additional information"}),(0,d.jsx)(o.rU,{to:"/movies/".concat(t,"/cast"),children:"Cast"}),(0,d.jsx)(o.rU,{to:"/movies/".concat(t,"/reviews"),children:"Reviews"}),(0,d.jsx)(u.j3,{})]})]})}},427:function(e,t,n){n.d(t,{DF:function(){return p},K$:function(){return l},_I:function(){return f},a8:function(){return u}});var r=n(861),a=n(757),c=n.n(a),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="c97607d6a7ff13e25d14023836e4d703";function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day?language=en-US&api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"?language=en-US&api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?language=en-US&api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews?language=en-US&api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=884.491c24a6.chunk.js.map