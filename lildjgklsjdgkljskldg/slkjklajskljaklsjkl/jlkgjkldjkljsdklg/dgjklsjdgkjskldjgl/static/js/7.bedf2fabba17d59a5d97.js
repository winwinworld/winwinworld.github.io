webpackJsonp([7],{D4gh:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px","label-position":"top"}},[o("el-form-item",{attrs:{prop:"n",label:"名次",rules:{required:!0,message:"n不能为空"}}},[o("el-select",{attrs:{placeholder:"--请选择--"},on:{change:e.selectOption},model:{value:e.form.n,callback:function(t){e.$set(e.form,"n",t)},expression:"form.n"}},e._l(300,function(e,t){return o("el-option",{key:t,attrs:{label:e,value:t}})}),1)],1),e._v(" "),o("el-form-item",{attrs:{prop:"p",label:"奖励倍数",rules:{required:!0,message:"p不能为空"}}},[o("el-input",{attrs:{placeholder:e.placeholder,type:"number"},model:{value:e.form.p,callback:function(t){e.$set(e.form,"p",t)},expression:"form.p"}},[o("template",{slot:"append"},[e._v("%")])],2)],1),e._v(" "),o("el-form-item",{staticClass:"bottomButton"},[o("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]};var l=o("VU/8")({data:function(){return{placeholder:"请先选择名次",form:{n:"",p:""}}},methods:{selectOption:function(e){var t=this;this.Global.assertPoolAwardsState.methods.specialPropMaxlimitMapping(e).call(function(e,o){if(!e){var r=t.web3.utils.fromWei(o,"szabo");t.placeholder=100*r}})},submit:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.Global.assertPoolAwards.methods.SetSpecialPropMaxLimit(e.form.n,e.web3.utils.toWei(""+e.form.p/100,"szabo")).send({from:e.address}).on("transactionHash",function(t){e.$refs.form.resetFields(),e.placeholder="请先选择名次",e.$notify({title:"成功",message:"交易已发送",type:"success"})}).on("error",function(t){e.$notify.error({title:"错误",message:"交易失败"})}).on("receipt",function(t){e.$notify({title:"成功",message:"设置成功",type:"success"})})})}}},r,!1,function(e){o("O9NM")},null,null);t.default=l.exports},O9NM:function(e,t){}});