webpackJsonp([2,8],{8:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={created:function(){this.autoload!==!1&&this.loadPage()},data:function(){return{url:this.$route.name,pageData:{},editData:{},editDialog:!1,listLoading:!1,saveLoading:!1,saveOptions:{}}},computed:{tableData:function(){return this.pageData.data}},methods:{loadPage:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pageData.pageSize||10,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.pageData.currentPage||1;this.listLoading=!0,this.get(this.url,{pageSize:e,currentPage:a}).then(function(e){var a=e.data;t.pageData=a}).finally(function(){t.listLoading=!1})},sizeChange:function(t){this.pageData.pageSize=t,this.loadPage()},pageChange:function(t){this.pageData.currentPage=t,this.loadPage()},remove:function(t){var e=this;return this.$confirm(this.deleteMsg||"确定要删除该条记录吗?","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(function(){return e.delete(e.url,{id:t}).then(function(){e.$message.success("删除成功")})}).then(function(){return e.loadPage()}).catch(function(){})},edit:function(t){var e=this;t?(this.listLoading=!0,this.get(this.url+"/"+t).then(function(t){var a=t.data;e.editData=a,e.editDialog=!0}).finally(function(){e.listLoading=!1})):(this.editData={},this.editDialog=!0)},save:function(t){var e=this,a=this.url;t.id&&(a+="/"+t.id),this.saveLoading=!0,this.post(a,t,this.saveOptions).then(function(){e.editDialog=!1,e.loadPage()}).finally(function(){e.saveLoading=!1})}}}},82:function(t,e,a){e=t.exports=a(3)(),e.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",file:"list.vue",sourceRoot:"webpack://"}])},83:function(t,e,a){e=t.exports=a(3)(),e.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",file:"edit.vue",sourceRoot:"webpack://"}])},103:function(t,e,a){var n=a(82);"string"==typeof n&&(n=[[t.id,n,""]]);a(4)(n,{});n.locals&&(t.exports=n.locals)},104:function(t,e,a){var n=a(83);"string"==typeof n&&(n=[[t.id,n,""]]);a(4)(n,{});n.locals&&(t.exports=n.locals)},232:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(10),o=n(i);e.default={props:["data"],data:function(){return{from:(0,o.default)({name:""},this.data),rules:{name:{required:!0}}}},methods:{saveAction:function(){this.$emit("save",this.from)}}}},233:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a(8),o=n(i),s=a(249),r=n(s);e.default={mixins:[o.default],components:{edit:r.default}}},249:function(t,e,a){var n,i;a(104),n=a(232);var o=a(256);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=n},250:function(t,e,a){var n,i;a(103),n=a(233);var o=a(255);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,t.exports=n},255:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"actions"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.edit()}}},[t._v("新增")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.pageData.data,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"名称"}}),a("el-table-column",{attrs:{prop:"articleCount",label:"文章数量"}}),a("el-table-column",{attrs:{context:t._self,label:"操作"},inlineTemplate:{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.edit(t.row.id)}}},[t._v("编辑")]),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){t.remove(t.row.id)}}},[t._v("删除")])],1)},staticRenderFns:[]}})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{layout:"prev, pager, next",total:t.pageData.total,"page-size":t.pageData.pageSize},on:{"current-change":t.pageChange}})],1),t.editDialog?a("el-dialog",{directives:[{name:"model",rawName:"v-model",value:t.editDialog,expression:"editDialog"}],attrs:{title:"新增"},domProps:{value:t.editDialog},on:{input:function(e){t.editDialog=e}}},[a("edit",{directives:[{name:"loading",rawName:"v-loading",value:t.saveLoading,expression:"saveLoading"}],attrs:{data:t.editData},on:{save:t.save,cancel:function(e){t.editDialog=!1}}})],1):t._e()],1)},staticRenderFns:[]}},256:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{ref:"form",attrs:{"label-position":"top",rules:t.rules,model:t.from}},[a("el-form-item",{attrs:{label:"标签名称",prop:"name"}},[a("el-input",{directives:[{name:"model",rawName:"v-model",value:t.from.name,expression:"from.name"}],attrs:{size:"large"},domProps:{value:t.from.name},on:{input:function(e){t.from.name=e}}})],1),a("el-form-item",{staticClass:"el-dialog__footer"},[a("el-button",{attrs:{type:"default"},on:{click:function(e){t.$emit("cancel")}}},[t._v("取消")]),a("el-button",{attrs:{"native-type":"submit",type:"primary"},on:{click:function(e){e.preventDefault(),t.saveAction(e)}}},[t._v("保存")])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=2.761ac417f41eb5a90132.js.map