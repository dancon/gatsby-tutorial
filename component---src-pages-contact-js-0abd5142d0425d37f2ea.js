(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(152),i=n(162),u=(n(166),n(168)),l=n.n(u),s=function(e){return r.a.createElement("li",{className:l.a.navLink},r.a.createElement(o.Link,{to:e.to},e.children))},c=function(e){var t=e.children;return r.a.createElement("div",{className:l.a.layout},r.a.createElement("header",{className:l.a.navBar},r.a.createElement(o.Link,{to:"/",className:l.a.linkHome},r.a.createElement("h3",{className:l.a.link},"MySweetSite")),r.a.createElement("ul",{className:l.a.navList},r.a.createElement(s,{to:"/"},"Home"),r.a.createElement(s,{to:"/about/"},"About"),r.a.createElement(s,{to:"/contact/"},"Contact"))),t)};t.default=function(){return r.a.createElement(c,null,r.a.createElement(o.Link,{to:"/"},"Home"),r.a.createElement(i.a,{content:"Contact"}),r.a.createElement("p",null,"Sent us a message."),r.a.createElement("h1",null,"I'd love to talk! Email me at the address below"),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:me@example.com"},"me@example.com")))}},150:function(e,t,n){"use strict";var a=n(35);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(160)),o=a(n(161)),i=a(n(7)),u=a(n(50)),l=a(n(51)),s=a(n(4)),c=a(n(0)),d=n(15),f=n(152);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:s.default.string,activeStyle:s.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,l.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,u=t.onClick,l=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=p(n);return c.default.createElement(d.Link,(0,o.default)({to:v,state:s,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:s,replace:m})),!0}},h))},t}(c.default.Component);h.propTypes=(0,o.default)({},m,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},151:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(150),l=n.n(u);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var s=n(151),c=n.n(s);n.d(t,"PageRenderer",function(){return c.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(48),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},160:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},161:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},162:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("h1",null,e.content)}},166:function(e,t,n){"use strict";n(167)("link",function(e){return function(t){return e(this,"a","href",t)}})},167:function(e,t,n){var a=n(6),r=n(16),o=n(25),i=/"/g,u=function(e,t,n,a){var r=String(o(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),u+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(u),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},168:function(e,t,n){e.exports={layout:"index-module--layout--3GZSg",navBar:"index-module--nav-bar--2Umwf",navLink:"index-module--nav-link--jR7Qe",linkHome:"index-module--link-home--3pSbn",link:"index-module--link--1VIfR",navList:"index-module--nav-list--1uNyB"}}}]);
//# sourceMappingURL=component---src-pages-contact-js-0abd5142d0425d37f2ea.js.map