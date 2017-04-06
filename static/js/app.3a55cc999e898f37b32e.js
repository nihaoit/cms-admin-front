webpackJsonp([13,11],{0:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var o=n(4),u=a(o),i=n(67),r=a(i),l=n(8),s=a(l),c=n(464),f=a(c),d=n(287),p=a(d),h=n(339),m=a(h),g=n(282),v=a(g),b=n(437),y=a(b);n(273),n(272),n(248),n(247),n(249);var x=n(440),_=a(x),$=n(436),M=a($);s.default.use(p.default),s.default.use(m.default),s.default.use(v.default);var k=!0,w="";k?(s.default.http.options.root="http://api.diamondfsd.com",s.default.config.devtools=!1,s.default.config.silent=!0,w="http://file.diamondfsd.com/upload"):(s.default.http.options.root="http://api.diamondfsd.com",w="http://localhost:22222/upload"),s.default.http.options.emulateJSON=!0,s.default.globalOptions={uploadUrl:w},(0,r.default)(M.default).forEach(function(t){s.default.filter(t,M.default[t])}),s.default.mixin({computed:{mix_headers:function(){return{Authorization:_.default.state.token}}},methods:{$post:function(t,e,n){return this.$http.post(t,e,(0,u.default)({headers:this.mix_headers},n))},$put:function(t,e,n){return this.$http.put(t,e,(0,u.default)({headers:this.mix_headers},n))},$get:function(t,e,n){return this.$http.get(t+"?"+this.$serialize(e),(0,u.default)({headers:this.mix_headers},n))},$delete:function(t,e,n){return this.$http.delete(t+"?"+this.$serialize(e),(0,u.default)({headers:this.mix_headers},n))},$serialize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="";return(0,r.default)(t).forEach(function(n){var a=t[n];null!==a&&void 0!==a&&""!==a&&(e+=n+"="+a+"&")}),e.substr(0,e.length-1)}}});var O=new m.default({routes:y.default});O.beforeEach(function(t,e,n){if(0===t.matched.length)O.replace({name:"no-page",params:{message:t.path}}),n();else if(t.meta.authorization!==!1&&_.default.state.login===!1){var a=p.default.Loading.service({text:"loading"});_.default.dispatch("login").then(function(t){a.close(),n()}).catch(function(){O.replace({name:"login",query:{redirect:t.fullPath}}),a.close()})}else n()});var E={0:"Cannot connect to server",404:"request does not exist",500:"server exception"};s.default.http.interceptors.push(function(t,e){e(function(t){if(t.ok){var e=t.data;if(!e)return t;e.success===!1?(p.default.Message.error(e.msg),t.ok=!1):e.success&&(t.data=e.data)}else{var n=t.status;switch(n){case 401:p.default.Message.error("login expired, please re-login"),O.replace({name:"login",query:{redirect:R.$route.fullPath}});break;case 402:O.replace({name:"init"});break;default:p.default.Message.error(E[n]||t.body)}}})});var R=new s.default({el:"#app",router:O,store:_.default,template:"<App/>",components:{App:f.default}});R.$get("user/need-init")},216:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var o=n(67),u=a(o);e.dateFormat=function(t,e){var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};return/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),(0,u.default)(n).forEach(function(t){new RegExp("("+t+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[t]:("00"+n[t]).substr((""+n[t]).length)))}),e}},247:function(t,e){},248:function(t,e){},249:function(t,e){},260:function(t,e){},272:function(t,e){},273:function(t,e){},436:function(t,e,n){"use strict";var a=n(216);e.datetime=function(t){if(t){var e=new Date(t);t=(0,a.dateFormat)(e,"yyyy-MM-dd hh:mm")}return t},e.html2text=function(t){return t&&(t=t.replace(/<[^>]*>/g,"")),t},e.substr=function(t,e,n){return t&&(t=t.substr(e,n)),t},e.maxlength=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t&&t.length>e&&(t=t.substr(0,e),n&&(t+="...")),t},e.number=function(t){return parseInt(t)};var o={1:"正常",0:"已删除"};e.state=function(t){return o[t]}},437:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={authorization:!1};e.default=[{path:"/login",name:"login",meta:a,component:function(t){return n.e(9,function(e){var n=[e(477)];t.apply(null,n)}.bind(this))}},{path:"/init",name:"init",meta:a,component:function(t){return n.e(7,function(e){var n=[e(485)];t.apply(null,n)}.bind(this))}},{path:"/no-page/:message",name:"no-page",title:"404 no found",meta:a,component:function(t){return n.e(10,function(e){var n=[e(478)];t.apply(null,n)}.bind(this))}},{path:"/",name:"index",component:function(t){return n.e(4,function(e){var n=[e(476)];t.apply(null,n)}.bind(this))},children:[{path:"article",name:"article",component:function(t){return n.e(3,function(e){var n=[e(467)];t.apply(null,n)}.bind(this))}},{path:"catalog",name:"catalog",component:function(t){return n.e(5,function(e){var n=[e(469)];t.apply(null,n)}.bind(this))}},{path:"tag",name:"tag",component:function(t){return n.e(6,function(e){var n=[e(483)];t.apply(null,n)}.bind(this))}},{path:"pageview",name:"pageview",component:function(t){return n.e(0,function(e){var n=[e(479)];t.apply(null,n)}.bind(this))}},{path:"setting",name:"setting",component:function(t){return n.e(8,function(e){var n=[e(481)];t.apply(null,n)}.bind(this))}},{path:"comment",name:"comment",component:function(t){return n.e(2,function(e){var n=[e(471)];t.apply(null,n)}.bind(this))}},{path:"email-config",name:"email-config",component:function(t){return n.e(1,function(e){var n=[e(473)];t.apply(null,n)}.bind(this))}}]}]},440:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(433),u=a(o),i=n(8),r=a(i),l=n(337),s=a(l);r.default.use(s.default);var c=window.localStorage;e.default=new s.default.Store({state:{user:{},login:!1,token:""},mutations:{LOGIN:function(t,e){var n=e.user,a=e.token;t.user=n,t.login=!0,t.token=a,c.setItem("token",a)},LOGOUT:function(t){t.login=!1,t.token="",c.clear()}},actions:{logout:function(t){var e=t.commit,n=t.state;if(e("LOGOUT"),n.token)return r.default.http.get("user/logout/"+n.token).then(function(t,e){console.log(t,e)})},login:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.getItem("token");return new u.default(function(t,a){n?r.default.http.get("user/"+n).then(function(a){var o=a.data,u=o;e("LOGIN",{user:u,token:n}),t(u)}).catch(function(t){a(t)}):a("no token")})}}})},441:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},464:function(t,e,n){var a,o;n(260),a=n(441);var u=n(495);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=u.render,o.staticRenderFns=u.staticRenderFns,t.exports=a},495:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},508:function(t,e){}});