"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{134:function(e,t,n){n.r(t);var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(791),i=n(689),o=n(87),p=n(427),f=n(184);t.default=function(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),n=t[0],u=t[1],l=(0,s.useState)([]),h=(0,a.Z)(l,2),d=h[0],v=h[1],g=(0,s.useState)(null),m=(0,a.Z)(g,2),x=m[0],y=m[1],k=(0,i.TH)(),w=function(){var e=(0,r.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,(0,p.gZ)(n);case 4:r=e.sent,v(r.results),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Error fetching search results:",e.t0),y(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return x?(0,f.jsx)("div",{children:"Not Found"}):(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Movies"}),(0,f.jsxs)("form",{onSubmit:w,children:[(0,f.jsx)("input",{type:"text",value:n,onChange:function(e){u(e.target.value)},placeholder:"Search for a movie..."}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),(0,f.jsx)("ul",{children:d.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"/movies/".concat(e.id),state:{from:k},children:e.title})},e.id)}))})]})}},427:function(e,t,n){n.d(t,{DF:function(){return p},K$:function(){return d},_I:function(){return l},a8:function(){return i},gZ:function(){return g}});var r=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="c97607d6a7ff13e25d14023836e4d703";function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?language=en-US&api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?language=en-US&api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?language=en-US&api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?language=en-US&api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1&api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=134.2892b084.chunk.js.map