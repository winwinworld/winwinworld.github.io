webpackJsonp([10],{DF0h:function(e,t){},ziH6:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px","label-position":"top"}},[r("el-form-item",{attrs:{prop:"depth",label:"最大上限",rules:{required:!0,message:"depth不能为空"}}},[r("el-input",{attrs:{placeholder:e.placeholder,type:"number"},model:{value:e.form.depth,callback:function(t){e.$set(e.form,"depth",t)},expression:"form.depth"}},[r("template",{slot:"append"},[e._v("层")])],2)],1),e._v(" "),r("el-form-item",{staticClass:"bottomButton"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]};var n=r("VU/8")({data:function(){return{placeholder:"",form:{depth:""}}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.Global.counterManagerState.methods.dlvDepthMaxLimit().call(function(t,r){t||(e.placeholder=r)})},submit:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.Global.counterManager.methods.SetDLevelSearchDepth(e.form.depth).send({from:e.address}).on("transactionHash",function(t){e.$refs.form.resetFields(),e.$notify({title:"成功",message:"交易已发送",type:"success"})}).on("error",function(t){e.$notify.error({title:"错误",message:"交易失败"})}).on("receipt",function(t){e.init(),e.$notify({title:"成功",message:"设置成功",type:"success"})})})}}},o,!1,function(e){r("DF0h")},null,null);t.default=n.exports}});