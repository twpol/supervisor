/*! For license information please see 59de3129.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[554],{30554:function(e,t,r){r.r(t);r(44577);var n,o,i,a,s,c,u,l=r(37500),h=r(63550),d=r(47181),p=r(83447),f=(r(98762),r(9381),r(81545),r(90806),r(66255),r(22814)),m=r(41682),v=r(60538),y=r(26765),b=r(11654),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=document.createElement("a");r.target="_blank",r.href=e,r.download=t,document.body.appendChild(r),r.dispatchEvent(new MouseEvent("click")),document.body.removeChild(r)},k=(r(94758),r(63864)),w=r(32594);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function x(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function E(){E=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var i=t&&t.prototype instanceof d?t:d,a=Object.create(i.prototype),s=new A(o||[]);return n(a,"_invoke",{value:w(e,r,s)}),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var h={};function d(){}function p(){}function f(){}var m={};c(m,i,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==t&&r.call(y,i)&&(m=y);var b=f.prototype=d.prototype=Object.create(m);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function o(n,i,a,s){var c=l(e[n],e,i);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_(h)&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){o("next",e,a,s)}),(function(e){o("throw",e,a,s)})):t.resolve(h).then((function(e){u.value=e,a(u)}),(function(e){return o("throw",e,a,s)}))}s(c.arg)}var i;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return i=i?i.then(n,n):n()}})}function w(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=x(a,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function L(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=f,n(b,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:p,configurable:!0}),p.displayName=c(f,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,s,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},g(k.prototype),c(k.prototype,a,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(b),c(b,s,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function P(e,t,r,n,o,i,a){try{var s=e[i](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,o)}function O(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){P(i,n,o,a,s,"next",e)}function s(e){P(i,n,o,a,s,"throw",e)}a(void 0)}))}}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=D(e);if(t){var o=D(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return j(this,r)}}function j(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function z(){z=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var o=t.placement;if(t.kind===n&&("static"===o||"prototype"===o)){var i="static"===o?e:r;this.defineClassElement(i,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!B(e))return r.push(e);var t=this.decorateElement(e,o);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var i=this.decorateConstructor(r,t);return n.push.apply(n,i.finishers),i.finishers=n,i},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],o=e.decorators,i=o.length-1;i>=0;i--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,o[i])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var u=c.extras;if(u){for(var l=0;l<u.length;l++)this.addElementPlacement(u[l],t);r.push.apply(r,u)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var o=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[n])(o)||o);if(void 0!==i.finisher&&r.push(i.finisher),void 0!==i.elements){e=i.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?G(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=M(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:r,placement:n,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:F(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=F(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function R(e){var t,r=M(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function I(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function B(e){return e.decorators&&e.decorators.length}function N(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function F(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function M(e){var t=function(e,t){if("object"!==_(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===_(t)?t:String(t)}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}!function(e,t,r,n){var o=z();if(n)for(var i=0;i<n.length;i++)o=n[i](o);var a=t((function(e){o.initializeInstanceElements(e,s.elements)}),r),s=o.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},n=0;n<e.length;n++){var o,i=e[n];if("method"===i.kind&&(o=t.find(r)))if(N(i.descriptor)||N(o.descriptor)){if(B(i)||B(o))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");o.descriptor=i.descriptor}else{if(B(i)){if(B(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");o.decorators=i.decorators}I(i,o)}else t.push(i)}return t}(a.d.map(R)),e);o.initializeClassElements(a.F,s.elements),o.runClassFinishers(a.F,s.finishers)}([(0,h.Mo)("dialog-hassio-backup")],(function(e,t){var r,_,P,j,D,z,R=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(a,t);var r,n,o,i=S(a);function a(){var t;L(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),e(T(t)),t}return r=a,n&&A(r.prototype,n),o&&A(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r}(t);return{F:R,d:[{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_backup",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_dialogParams",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_restoringBackup",value:function(){return!1}},{kind:"field",decorators:[(0,h.IO)("supervisor-backup-content")],key:"_backupContent",value:void 0},{kind:"method",key:"showDialog",value:(z=O(E().mark((function e(t){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v._P)(this.hass,t.slug);case 2:this._backup=e.sent,this._dialogParams=t,this._restoringBackup=!1;case 5:case"end":return e.stop()}}),e,this)}))),function(e){return z.apply(this,arguments)})},{kind:"method",key:"closeDialog",value:function(){this._backup=void 0,this._dialogParams=void 0,this._restoringBackup=!1,this._error=void 0,(0,d.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var e,t,r;return this._dialogParams&&this._backup?(0,l.dy)(o||(o=x(["\n      <ha-dialog\n        open\n        scrimClickAction\n        @closed=","\n        .heading=",'\n      >\n        <div slot="heading">\n          <ha-header-bar>\n            <span slot="title">',"</span>\n            <ha-icon-button\n              .label=","\n              .path=",'\n              slot="actionItems"\n              dialogAction="cancel"\n            ></ha-icon-button>\n          </ha-header-bar>\n        </div>\n        ',"\n        ","\n\n        <mwc-button\n          .disabled=",'\n          slot="secondaryAction"\n          @click=',"\n        >\n          Restore\n        </mwc-button>\n\n        ","\n      </ha-dialog>\n    "])),this.closeDialog,this._backup.name,this._backup.name,(null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.close"))||"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",this._restoringBackup?(0,l.dy)(i||(i=x([" <ha-circular-progress active></ha-circular-progress>"]))):(0,l.dy)(a||(a=x(["<supervisor-backup-content\n              .hass=","\n              .supervisor=","\n              .backup=","\n              .onboarding=","\n              .localize=","\n              dialogInitialFocus\n            >\n            </supervisor-backup-content>"])),this.hass,this._dialogParams.supervisor,this._backup,this._dialogParams.onboarding||!1,this._dialogParams.localize),this._error?(0,l.dy)(s||(s=x(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):"",this._restoringBackup,this._restoreClicked,this._dialogParams.onboarding?"":(0,l.dy)(c||(c=x(['<ha-button-menu\n              fixed\n              slot="primaryAction"\n              @action=',"\n              @closed=","\n            >\n              <ha-icon-button\n                .label=","\n                .path=",'\n                slot="trigger"\n              ></ha-icon-button>\n              <mwc-list-item\n                >','</mwc-list-item\n              >\n              <mwc-list-item class="error"\n                >',"</mwc-list-item\n              >\n            </ha-button-menu>"])),this._handleMenuAction,w.U,this.hass.localize("ui.common.menu")||"Menu","M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",null===(t=this._dialogParams.supervisor)||void 0===t?void 0:t.localize("backup.download_backup"),null===(r=this._dialogParams.supervisor)||void 0===r?void 0:r.localize("backup.delete_backup_title"))):(0,l.dy)(n||(n=x([""])))}},{kind:"get",static:!0,key:"styles",value:function(){return[b.Qx,b.yu,(0,l.iv)(u||(u=x(["\n        ha-circular-progress {\n          display: block;\n          text-align: center;\n        }\n        ha-header-bar {\n          --mdc-theme-on-primary: var(--primary-text-color);\n          --mdc-theme-primary: var(--mdc-theme-surface);\n          flex-shrink: 0;\n          display: block;\n        }\n        ha-icon-button {\n          color: var(--secondary-text-color);\n        }\n      "])))]}},{kind:"method",key:"_handleMenuAction",value:function(e){switch(e.detail.index){case 0:this._downloadClicked();break;case 1:this._deleteClicked()}}},{kind:"method",key:"_restoreClicked",value:(D=O(E().mark((function e(){var t;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this._backupContent.backupDetails(),this._restoringBackup=!0,"full"!==this._backupContent.backupType){e.next=7;break}return e.next=5,this._fullRestoreClicked(t);case 5:e.next=9;break;case 7:return e.next=9,this._partialRestoreClicked(t);case 9:this._restoringBackup=!1;case 10:case"end":return e.stop()}}),e,this)}))),function(){return D.apply(this,arguments)})},{kind:"method",key:"_partialRestoreClicked",value:(j=O(E().mark((function e(t){var r,n,o,i;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(null===(r=this._dialogParams)||void 0===r?void 0:r.supervisor)||"running"===(null===(n=this._dialogParams)||void 0===n?void 0:n.supervisor.info.state)){e.next=4;break}return e.next=3,(0,y.Ys)(this,{title:"Could not restore backup",text:"Restoring a backup is not possible right now because the system is in ".concat(null===(i=this._dialogParams)||void 0===i?void 0:i.supervisor.info.state," state.")});case 3:return e.abrupt("return");case 4:return e.next=6,(0,y.g7)(this,{title:"Are you sure you want partially to restore this backup?",confirmText:"restore",dismissText:"cancel"});case 6:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:if(null!==(o=this._dialogParams)&&void 0!==o&&o.onboarding){e.next=20;break}return e.prev=9,e.next=12,this.hass.callApi("POST","hassio/".concat((0,k.I)(this.hass.config.version,2021,9)?"backups":"snapshots","/").concat(this._backup.slug,"/restore/partial"),t);case 12:this.closeDialog(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),this._error=e.t0.body.message;case 18:e.next=24;break;case 20:return(0,d.B)(this,"restoring"),e.next=23,fetch("/api/hassio/backups/".concat(this._backup.slug,"/restore/partial"),{method:"POST",body:JSON.stringify(t)});case 23:this.closeDialog();case 24:case"end":return e.stop()}}),e,this,[[9,15]])}))),function(e){return j.apply(this,arguments)})},{kind:"method",key:"_fullRestoreClicked",value:(P=O(E().mark((function e(t){var r,n,o,i,a=this;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(null===(r=this._dialogParams)||void 0===r?void 0:r.supervisor)||"running"===(null===(n=this._dialogParams)||void 0===n?void 0:n.supervisor.info.state)){e.next=4;break}return e.next=3,(0,y.Ys)(this,{title:"Could not restore backup",text:"Restoring a backup is not possible right now because the system is in ".concat(null===(i=this._dialogParams)||void 0===i?void 0:i.supervisor.info.state," state.")});case 3:return e.abrupt("return");case 4:return e.next=6,(0,y.g7)(this,{title:"Are you sure you want to wipe your system and restore this backup?",confirmText:"restore",dismissText:"cancel"});case 6:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:null!==(o=this._dialogParams)&&void 0!==o&&o.onboarding?((0,d.B)(this,"restoring"),fetch("/api/hassio/backups/".concat(this._backup.slug,"/restore/full"),{method:"POST",body:JSON.stringify(t)}),this.closeDialog()):this.hass.callApi("POST","hassio/".concat((0,k.I)(this.hass.config.version,2021,9)?"backups":"snapshots","/").concat(this._backup.slug,"/restore/full"),t).then((function(){a.closeDialog()}),(function(e){a._error=e.body.message}));case 9:case"end":return e.stop()}}),e,this)}))),function(e){return P.apply(this,arguments)})},{kind:"method",key:"_deleteClicked",value:(_=O(E().mark((function e(){var t=this;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.g7)(this,{title:"Are you sure you want to delete this backup?",confirmText:"delete",dismissText:"cancel"});case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:this.hass.callApi((0,k.I)(this.hass.config.version,2021,9)?"DELETE":"POST","hassio/".concat((0,k.I)(this.hass.config.version,2021,9)?"backups/".concat(this._backup.slug):"snapshots/".concat(this._backup.slug,"/remove"))).then((function(){t._dialogParams.onDelete&&t._dialogParams.onDelete(),t.closeDialog()}),(function(e){t._error=e.body.message}));case 5:case"end":return e.stop()}}),e,this)}))),function(){return _.apply(this,arguments)})},{kind:"method",key:"_downloadClicked",value:(r=O(E().mark((function e(){var t;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.iI)(this.hass,"/api/hassio/".concat((0,k.I)(this.hass.config.version,2021,9)?"backups":"snapshots","/").concat(this._backup.slug,"/download"));case 3:t=e.sent,e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(0),e.next=10,(0,y.Ys)(this,{text:(0,m.js)(e.t0)});case 10:return e.abrupt("return");case 11:if(!window.location.href.includes("ui.nabu.casa")){e.next=17;break}return e.next=14,(0,y.g7)(this,{title:"Potential slow download",text:"Downloading backups over the Nabu Casa URL will take some time, it is recomended to use your local URL instead, do you want to continue?",confirmText:"continue",dismissText:"cancel"});case 14:if(e.sent){e.next=17;break}return e.abrupt("return");case 17:g(t.path,"home_assistant_backup_".concat((0,p.l)(this._computeName),".tar"));case 18:case"end":return e.stop()}}),e,this,[[0,6]])}))),function(){return r.apply(this,arguments)})},{kind:"get",key:"_computeName",value:function(){return this._backup?this._backup.name||this._backup.slug:"Unnamed backup"}}]}}),l.oi)},83447:function(e,t,r){r.d(t,{l:function(){return n}});var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_",r="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;",n="aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz".concat(t).concat(t).concat(t).concat(t).concat(t).concat(t),o=new RegExp(r.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,t).replace(o,(function(e){return n.charAt(r.indexOf(e))})).replace(/&/g,"".concat(t,"and").concat(t)).replace(/[^\w-]+/g,"").replace(/-/g,t).replace(new RegExp("(".concat(t,")\\1+"),"g"),"$1").replace(new RegExp("^".concat(t,"+")),"").replace(new RegExp("".concat(t,"+$")),"")}},22814:function(e,t,r){r.d(t,{iI:function(){return n}});"".concat(location.protocol,"//").concat(location.host);var n=function(e,t){return e.callWS({type:"auth/sign_path",path:t})}}}]);