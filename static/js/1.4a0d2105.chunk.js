(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{36:function(e,t,a){},38:function(e,t,a){"use strict";var n=a(3),r=a.n(n),l=a(8),c=a(9),s=a(11),o=a(10),i=a(12),u=a(2),m=a.n(u),p=a(0),d=a.n(p),f=a(39),v=a(5),E=a.n(v),y=a(13),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function N(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var b=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},_=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,l=Array(r),c=0;c<r;c++)l[c]=arguments[c];return a=n=N(this,e.call.apply(e,[this].concat(l))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!b(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,l=a.to;r?t.replace(l):t.push(l)}},N(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);E()(this.context.router,"You should not use <Link> outside a <Router>"),E()(void 0!==t,'You must specify the "to" property');var r=this.context.router.history,l="string"===typeof t?Object(y.b)(t,null,null,r.location):t,c=r.createHref(l);return m.a.createElement("a",h({},n,{onClick:this.handleClick,href:c,ref:a}))},t}(m.a.Component);_.propTypes={onClick:d.a.func,target:d.a.string,replace:d.a.bool,to:d.a.oneOfType([d.a.string,d.a.object]).isRequired,innerRef:d.a.oneOfType([d.a.string,d.a.func])},_.defaultProps={replace:!1},_.contextTypes={router:d.a.shape({history:d.a.shape({push:d.a.func.isRequired,replace:d.a.func.isRequired,createHref:d.a.func.isRequired}).isRequired}).isRequired};var g=_,w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var O=function(e){var t=e.to,a=e.exact,n=e.strict,r=e.location,l=e.activeClassName,c=e.className,s=e.activeStyle,o=e.style,i=e.isActive,u=e["aria-current"],p=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),d="object"===("undefined"===typeof t?"undefined":C(t))?t.pathname:t,v=d&&d.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1");return m.a.createElement(f.a,{path:v,exact:a,strict:n,location:r,children:function(e){var a=e.location,n=e.match,r=!!(i?i(n,a):n);return m.a.createElement(g,w({to:t,className:r?[c,l].filter(function(e){return e}).join(" "):c,style:r?w({},o,s):o,"aria-current":r&&u||null},p))}})};O.propTypes={to:g.propTypes.to,exact:d.a.bool,strict:d.a.bool,location:d.a.object,activeClassName:d.a.string,className:d.a.string,activeStyle:d.a.object,style:d.a.object,isActive:d.a.func,"aria-current":d.a.oneOf(["page","step","location","date","time","true"])},O.defaultProps={activeClassName:"active","aria-current":"page"};var j=O,S=(a(36),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showMenu;return r.a.createElement("div",{className:"nav ".concat(t&&"show")},r.a.createElement("header",null,r.a.createElement("button",{type:"button",onClick:function(){return e.setState({showMenu:!0})},className:"burger"},"Menu")),r.a.createElement("p",{className:"logo"},"Courgette"),r.a.createElement("div",{className:"overlay",onClick:function(){return e.setState({showMenu:!1})}},r.a.createElement("div",{className:"overlay-inner"})),r.a.createElement("div",{className:"main-nav"},r.a.createElement("button",{type:"button",className:"close-btn",onClick:function(){return e.setState({showMenu:!1})}},"Close"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(j,{to:"/",activeClassName:"selected",exact:!0},"Overview")),r.a.createElement("li",null,r.a.createElement(j,{to:"/getting-started",activeClassName:"selected"},"Getting Started")),r.a.createElement("li",null,r.a.createElement(j,{to:"/faqs",activeClassName:"selected"},"FAQs")),r.a.createElement("li",null,r.a.createElement(j,{to:"/api",activeClassName:"selected"},"API")),r.a.createElement("li",null,r.a.createElement(j,{to:"/bdd",activeClassName:"selected"},"BDD - User Stories")))))}}]),t}(n.Component)),k=function(){return r.a.createElement("div",{className:"footer"})};t.a=function(e){var t=e.children,a=e.className;return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{className:a||"main-container"},t),r.a.createElement(k,null))}},40:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),l=(a(40),a(38));t.default=function(){return r.a.createElement(l.a,{className:"home"},r.a.createElement("div",null,r.a.createElement("section",{className:"hero"},"Bringing sanity to ",r.a.createElement("br",null)," UI test automation with selenium"),r.a.createElement("section",{className:"usps"},r.a.createElement("div",{className:"usps__inner"},r.a.createElement("div",{className:"usp"},r.a.createElement("div",{className:"usp__icon"}),r.a.createElement("div",{className:"usp__desc"},r.a.createElement("h2",{className:"usp__title"},"Gherkin Syntax"),r.a.createElement("p",null,"Automate Given When Then scenarios without writing any code"))),r.a.createElement("div",{className:"usp"},r.a.createElement("div",{className:"usp__icon"}),r.a.createElement("div",{className:"usp__desc"},r.a.createElement("h2",{className:"usp__title"},"Snippets / Live Templates"),r.a.createElement("p",null,"Installed straight to your favourite IDE* to enable quick and accurately writing of scenarios"))),r.a.createElement("div",{className:"usp"},r.a.createElement("div",{className:"usp__icon"}),r.a.createElement("div",{className:"usp__desc"},r.a.createElement("h2",{className:"usp__title"},"Screenshots"),r.a.createElement("p",null,"Taken on test failure to help debugging or taken on demand with image viewer"))),r.a.createElement("div",{className:"usp"},r.a.createElement("div",{className:"usp__icon"}),r.a.createElement("div",{className:"usp__desc"},r.a.createElement("h2",{className:"usp__title"},"Reporting"),r.a.createElement("p",null,"HTML and CLI reports for step definition usage, passes / failures"))),r.a.createElement("div",{className:"usp"},r.a.createElement("div",{className:"usp__icon"}),r.a.createElement("div",{className:"usp__desc"},r.a.createElement("h2",{className:"usp__title"},"Any platform"),r.a.createElement("p",null,"Runs on Windows, Mac and Linux"))),r.a.createElement("div",{className:"usp"},r.a.createElement("div",{className:"usp__icon"}),r.a.createElement("div",{className:"usp__desc"},r.a.createElement("h2",{className:"usp__title"},"Page / Component Objects"),r.a.createElement("p",null,"YAML-based Page and Component Objects aid in scaling up your test suite"))),r.a.createElement("div",{className:"usp"},r.a.createElement("div",{className:"usp__icon"}),r.a.createElement("div",{className:"usp__desc"},r.a.createElement("h2",{className:"usp__title"},"Selenium Grid"),r.a.createElement("p",null,"Easy integration with Sauce Labs & Browser Stack")))),r.a.createElement("small",null,"* snippets support the following IDEs: Intellij, Webstorm, Sublime Text, Textmate, Atom, VSCode")),r.a.createElement("section",{className:"testimonials"},r.a.createElement("div",{className:"testimonial"},r.a.createElement("blockquote",null,r.a.createElement("q",null,"it comes with batteries included to some extent so you can get up and running quickly"),r.a.createElement("p",null,"Dan North (creator of BDD)"))),r.a.createElement("div",{className:"testimonial"},r.a.createElement("blockquote",null,r.a.createElement("q",null,"I instantly get it, it\u2019s like a DSL that everyone can read and understand"),r.a.createElement("p",null,"Anonymous, Capital One")))),r.a.createElement("section",{className:"customers"},r.a.createElement("h2",null,"Companies using Courgette"),r.a.createElement("div",{className:"customer"},"Capital One"),r.a.createElement("div",{className:"customer"},"Swoop"),r.a.createElement("div",{className:"customer"},"Linklaters"),r.a.createElement("div",{className:"customer"},"Amazon"),r.a.createElement("div",{className:"customer"},"lastminute.com"))))}}}]);
//# sourceMappingURL=1.4a0d2105.chunk.js.map