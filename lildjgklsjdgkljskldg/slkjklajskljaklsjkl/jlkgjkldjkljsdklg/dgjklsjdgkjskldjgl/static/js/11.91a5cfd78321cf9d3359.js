webpackJsonp([11],{"+lVV":function(e,t){},hty4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px","label-position":"top"}},[r("el-form-item",{attrs:{prop:"dl",label:"等级",rules:{required:!0,message:"dl不能为空"}}},[r("el-select",{attrs:{placeholder:"--请选择--"},on:{change:e.selectOption},model:{value:e.form.dl,callback:function(t){e.$set(e.form,"dl",t)},expression:"form.dl"}},e._l(6,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:t}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{prop:"p",label:"比例",rules:{required:!0,message:"p不能为空"}}},[r("el-input",{attrs:{placeholder:e.placeholder,type:"number"},model:{value:e.form.p,callback:function(t){e.$set(e.form,"p",t)},expression:"form.p"}},[r("template",{slot:"append"},[e._v("%")])],2)],1),e._v(" "),r("el-form-item",{staticClass:"bottomButton"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]};var l=r("VU/8")({data:function(){return{placeholder:"请先选择等级",form:{dl:"",p:""}}},methods:{selectOption:function(e){var t=this;this.Global.counterManagerState.methods.dlevelAwarProp(e).call(function(e,r){if(!e){var o=t.web3.utils.fromWei(r,"szabo");t.placeholder=100*o}})},submit:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.Global.counterManager.methods.SetDLevelAwardProp(e.form.dl,e.web3.utils.toWei(""+e.form.p/100,"szabo")).send({from:e.address}).on("transactionHash",function(t){e.$refs.form.resetFields(),e.placeholder="请先选择等级",e.$notify({title:"成功",message:"交易已发送",type:"success"})}).on("error",function(t){e.$notify.error({title:"错误",message:"交易失败"})}).on("receipt",function(t){e.$notify({title:"成功",message:"设置成功",type:"success"})})})}}},o,!1,function(e){r("+lVV")},null,null);t.default=l.exports}});