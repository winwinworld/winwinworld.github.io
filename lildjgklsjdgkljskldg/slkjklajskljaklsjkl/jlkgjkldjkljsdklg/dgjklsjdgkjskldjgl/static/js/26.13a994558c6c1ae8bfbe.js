webpackJsonp([26],{"7wzz":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px","label-position":"top"}},[o("el-form-item",{attrs:{prop:"p",label:"订单的数量",rules:{required:!0,message:"p不能为空"}}},[o("el-input",{attrs:{placeholder:e.placeholder,type:"number"},model:{value:e.form.p,callback:function(t){e.$set(e.form,"p",t)},expression:"form.p"}},[o("template",{slot:"append"},[e._v("%")])],2)],1),e._v(" "),o("el-form-item",{staticClass:"bottomButton"},[o("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]};var n=o("VU/8")({data:function(){return{placeholder:"",form:{p:""}}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.Global.counterRecommendState.methods.awardProp().call(function(t,o){if(!t){var r=e.web3.utils.fromWei(o,"szabo");e.placeholder=100*r}})},submit:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.Global.counterRecommend.methods.SetAwardProp(e.web3.utils.toWei(""+e.form.p/100,"szabo")).send({from:e.address}).on("transactionHash",function(t){e.$refs.form.resetFields(),e.$notify({title:"成功",message:"交易已发送",type:"success"})}).on("error",function(t){e.$notify.error({title:"错误",message:"交易失败"})}).on("receipt",function(t){e.init(),e.$notify({title:"成功",message:"设置成功",type:"success"})})})}}},r,!1,function(e){o("SqrK")},null,null);t.default=n.exports},SqrK:function(e,t){}});