webpackJsonp([22],{SCjl:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px","label-position":"top"}},[o("el-form-item",{attrs:{prop:"count",label:"最终奖励的地址数量",rules:{required:!0,message:"count不能为空"}}},[o("el-input",{attrs:{placeholder:t.placeholder,type:"number"},model:{value:t.form.count,callback:function(e){t.$set(t.form,"count",e)},expression:"form.count"}},[o("template",{slot:"append"},[t._v("个")])],2)],1),t._v(" "),o("el-form-item",{staticClass:"bottomButton"},[o("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]};var r=o("VU/8")({data:function(){return{placeholder:"",form:{count:""}}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.Global.assertPoolAwardsState.methods.luckyDoyTotalCount().call(function(e,o){e||(t.placeholder=o)})},submit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.Global.assertPoolAwards.methods.SetLuckyDoyTotalCount(t.form.count).send({from:t.address}).on("transactionHash",function(e){t.$refs.form.resetFields(),t.$notify({title:"成功",message:"交易已发送",type:"success"})}).on("error",function(e){t.$notify.error({title:"错误",message:"交易失败"})}).on("receipt",function(e){t.init(),t.$notify({title:"成功",message:"设置成功",type:"success"})})})}}},n,!1,function(t){o("vrOq")},null,null);e.default=r.exports},vrOq:function(t,e){}});