!function(t){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n){t.exports=function(t,n,e,o,i,a){var r,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(r=t,s=t.default);var u,f="function"==typeof s?s.options:s;if(n&&(f.render=n.render,f.staticRenderFns=n.staticRenderFns,f._compiled=!0),e&&(f.functional=!0),i&&(f._scopeId=i),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=u):o&&(u=o),u){var l=f.functional,d=l?f.render:f.beforeCreate;l?(f._injectStyles=u,f.render=function(t,n){return u.call(n),d(t,n)}):f.beforeCreate=d?[].concat(d,u):[u]}return{esModule:r,exports:s,options:f}}},function(t,n,e){e(2),t.exports=e(17)},function(t,n,e){Nova.booting(function(t,n,o){t.component("notification-link",e(3)),t.component("notification-item",e(6)),t.component("notifications-dropdown",e(9))})},function(t,n,e){var o=e(0)(e(4),e(5),!1,null,null,null);t.exports=o.exports},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{external:{type:Boolean,default:!1},href:{type:String},classList:{type:Array}}}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.external?e("a",{class:t.classList,attrs:{href:t.href,target:"_blank"},on:{click:function(n){return t.$emit("click")}}},[t._t("default")],2):e("router-link",{class:t.classList,attrs:{to:t.href},nativeOn:{click:function(n){return t.$emit("click")}}},[t._t("default")],2)],1)},staticRenderFns:[]}},function(t,n,e){var o=e(0)(e(7),e(8),!1,null,null,null);t.exports=o.exports},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{notification:{type:Object}},filters:{fromNow:function(t){return new moment(t).fromNow()}},methods:{markAsRead:function(){axios.patch("/nova-vendor/nova-notifications/"+this.notification.id).then(function(t){t.data.notification.read_at&&Nova.$emit("notification-read",{notification:t.data.notification})})},formatRouterLink:function(t){return t.data.route?{name:t.data.route.name,params:t.data.route.params}:t.data.external?t.data.url||"#":{path:t.data.url||"#"}}}}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"block no-underline text-90 hover:bg-30 p-3 notification-item"},[e("div",{staticClass:"flex justify-between"},[e("notification-link",{attrs:{href:t.formatRouterLink(t.notification),external:t.notification.data.external,classList:["no-underline","text-black","flex-1"]},nativeOn:{click:function(n){return t.markAsRead()}}},[t._t("content",[e("h4",{staticClass:"no-underline dim text-primary font-bold pb-2"},[t._v(t._s(t.notification.data.title))]),t._v(" "),t.notification.data.subtitle?e("p",{staticClass:"pb-2 font-normal"},[t._v("\n                    "+t._s(t.notification.data.subtitle)+"\n                ")]):t._e(),t._v(" "),e("p",{staticClass:"font-normal text-sm"},[t._v("\n                    "+t._s(t._f("fromNow")(t.notification.data.created_at))+"\n                ")])])],2),t._v(" "),null===t.notification.read_at?e("button",{staticClass:"btn",on:{click:function(n){return t.markAsRead()}}},[t._t("action",[t._v("\n                "+t._s(t.__("mark read"))+"\n            ")])],2):t._e()],1)])},staticRenderFns:[]}},function(t,n,e){var o=e(0)(e(15),e(16),!1,function(t){e(10)},"data-v-0b1172c6",null);t.exports=o.exports},function(t,n,e){var o=e(11);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(13)("e93b6128",o,!0,{})},function(t,n,e){(t.exports=e(12)(!1)).push([t.i,"#max-height[data-v-0b1172c6]{max-height:30rem}.bg-light-gray[data-v-0b1172c6]{background-color:#eee}.bg-light-gray[data-v-0b1172c6]:hover{background-color:#fefefe}",""])},function(t,n){t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var i=(r=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),a=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[e].concat(a).concat([i]).join("\n")}var r;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(o[a]=!0)}for(i=0;i<t.length;i++){var r=t[i];"number"==typeof r[0]&&o[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="("+r[2]+") and ("+e+")"),n.push(r))}},n}},function(t,n,e){var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=e(14),a={},r=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,f=function(){},l=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t){for(var n=0;n<t.length;n++){var e=t[n],o=a[e.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](e.parts[i]);for(;i<e.parts.length;i++)o.parts.push(_(e.parts[i]));o.parts.length>e.parts.length&&(o.parts.length=e.parts.length)}else{var r=[];for(i=0;i<e.parts.length;i++)r.push(_(e.parts[i]));a[e.id]={id:e.id,refs:1,parts:r}}}}function h(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function _(t){var n,e,o=document.querySelector("style["+d+'~="'+t.id+'"]');if(o){if(u)return f;o.parentNode.removeChild(o)}if(p){var i=c++;o=s||(s=h()),n=x.bind(null,o,i,!1),e=x.bind(null,o,i,!0)}else o=h(),n=function(t,n){var e=n.css,o=n.media,i=n.sourceMap;o&&t.setAttribute("media",o);l.ssrId&&t.setAttribute(d,n.id);i&&(e+="\n/*# sourceURL="+i.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,o),e=function(){o.parentNode.removeChild(o)};return n(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;n(t=o)}else e()}}t.exports=function(t,n,e,o){u=e,l=o||{};var r=i(t,n);return v(r),function(n){for(var e=[],o=0;o<r.length;o++){var s=r[o];(c=a[s.id]).refs--,e.push(c)}n?v(r=i(t,n)):r=[];for(o=0;o<e.length;o++){var c;if(0===(c=e[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete a[c.id]}}}};var m,g=(m=[],function(t,n){return m[t]=n,m.filter(Boolean).join("\n")});function x(t,n,e,o){var i=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=g(n,i);else{var a=document.createTextNode(i),r=t.childNodes;r[n]&&t.removeChild(r[n]),r.length?t.insertBefore(a,r[n]):t.appendChild(a)}}},function(t,n){t.exports=function(t,n){for(var e=[],o={},i=0;i<n.length;i++){var a=n[i],r=a[0],s={id:t+":"+i,css:a[1],media:a[2],sourceMap:a[3]};o[r]?o[r].parts.push(s):e.push(o[r]={id:r,parts:[s]})}return e}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{count:0,notifications:[],isLoading:!0,sound:Nova.config.default_sound}},mounted:function(){var t=this;t.loadNotifications(function(n){Echo.private(Nova.config.user_model_namespace+"."+n.data.user_id).notification(t.notificationReceived)}),Nova.$on("notification-read",function(n){t.notifications[n.notification.id]=n.notification,t.count--})},methods:{loadNotifications:function(t){var n=this;axios.get("/nova-vendor/nova-notifications/unread").then(function(e){n.isLoading=!1,n.count=e.data.count,n.notifications=e.data.notifications,t&&t(e)})},playSound:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.sound;Nova.config.play_sound&&new Audio(t).play()},notificationReceived:function(t){var n=this;n.loadNotifications();var e="info";-1!==["success","info","error"].indexOf(t.level)&&(e=t.level);var o={text:n.__("Mark as Read"),onClick:function(e,o){n.$refs["notification-"+t.id][0].markAsRead(),o.goAway(0)}},i={text:n.__("Cancel"),onClick:function(t,n){n.goAway(0)}},a=[];t.show_mark_as_read&&a.push(o),t.show_cancel&&a.push(i),!(!t.display_toasted&&!Nova.config.toasted_enabled)&&n.$toasted.show(t.title,{type:e,keepOnHover:!0,icon:t.icon||null,iconPack:"custom-class",action:a}),t.play_sound&&this.playSound(t.sound)},markAllAsRead:function(){var t=this;axios.patch("/nova-vendor/nova-notifications").then(function(){t.notifications=[],t.count=0})}}}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("dropdown",{staticClass:"ml-auto h-9 flex items-center dropdown-right"},[e("dropdown-trigger",{staticClass:"h-9 flex items-center"},[e("span",{staticClass:"relative"},[e("svg",{staticClass:"ml-2 text-90 w-8",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"#455b61", d:"M15 19a3 3 0 0 1-6 0H4a1 1 0 0 1 0-2h1v-6a7 7 0 0 1 4.02-6.34 3 3 0 0 1 5.96 0A7 7 0 0 1 19 11v6h1a1 1 0 0 1 0 2h-5zm-4 0a1 1 0 0 0 2 0h-2zm0-12.9A5 5 0 0 0 7 11v6h10v-6a5 5 0 0 0-4-4.9V5a1 1 0 0 0-2 0v1.1z"}})]),t._v(" "),t.count>0?e("span",{staticClass:"absolute -mt-4 -mr-1 text-xs bg-danger text-danger-light text-sm font-bold px-1 shadow-lg rounded-lg right-0 bottom-0"},[t.count<9?e("span",[t._v(t._s(t.count))]):e("span",[t._v("9+")])]):t._e()])]),t._v(" "),e("dropdown-menu",{attrs:{slot:"menu",width:"600",direction:"rtl"},slot:"menu"},[e("loading-view",{attrs:{loading:t.isLoading}},[e("div",{staticClass:"flex justify-between bg-40 text-90 p-4 notification-dropdown-header"},[e("h3",[t._v(t._s(t.__("Notifications")))]),t._v(" "),0!==t.count?e("button",{staticClass:"btn",on:{click:function(n){return t.markAllAsRead()}}},[t._v("\n                    "+t._s(t.__("mark all as read"))+"\n                ")]):t._e()]),t._v(" "),0===t.count?e("p",{staticClass:"block p-3"},[t._v("\n                "+t._s(t.__("No new notifications"))+"\n            ")]):e("scroll-wrap",{attrs:{height:"350"}},[t._t("default",t._l(t.notifications,function(t){return e("notification-item",{key:t.id,ref:"notification-"+t.id,refInFor:!0,attrs:{notification:t}})}))],2)],1)],1)],1)},staticRenderFns:[]}},function(t,n){}]);