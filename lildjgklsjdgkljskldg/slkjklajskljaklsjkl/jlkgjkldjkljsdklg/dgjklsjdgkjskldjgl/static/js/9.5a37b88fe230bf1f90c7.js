webpackJsonp([9],{G9qJ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("//Fk"),s=a.n(o),l={data:function(){return{pool:0,placeholder:"",form:{address:""},tableData:[{name:"权益基金",prop:"0%",amount:0,address:"无"},{name:"夺宝池",prop:"0%",amount:0,address:"无"},{name:"探索基金",prop:"0%",amount:0,address:"无"},{name:"幸运池",prop:"0%",amount:0,address:"无"}]}},mounted:function(){this.init()},methods:{init:function(){var t=this;s.a.all([this.Global.assertPoolState.methods.matchings(1).call(),this.Global.assertPoolState.methods.matchings(2).call(),this.Global.assertPoolState.methods.matchings(3).call(),this.Global.assertPoolState.methods.matchings(4).call(),this.Global.assertPoolState.methods.availTotalAmouns(1).call(),this.Global.assertPoolState.methods.availTotalAmouns(2).call(),this.Global.assertPoolState.methods.availTotalAmouns(3).call(),this.Global.assertPoolState.methods.availTotalAmouns(4).call(),this.Global.assertPoolState.methods.operators(1).call(),this.Global.assertPoolState.methods.operators(2).call(),this.Global.assertPoolState.methods.operators(3).call(),this.Global.assertPoolState.methods.operators(4).call()]).then(function(e){e.forEach(function(e,a){if(a<4){var o=t.web3.utils.fromWei(e,"szabo");t.tableData[a].prop=100*o+"%"}else a<8?t.tableData[a-4].amount=t.web3.utils.fromWei(e,"ether"):t.tableData[a-8].address=Number(e)>0?e:"无"})})},rowClick:function(t){this.placeholder=t.address,this.$refs.table.setCurrentRow(t),this.pool=this.tableData.findIndex(function(e){return e.name===t.name})+1},submit:function(t){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.Global.assertPool.methods.OWNER_SetOperator(e.form.address,e.pool).send({from:e.address}).on("transactionHash",function(t){e.$refs.form.resetFields(),e.$notify({title:"成功",message:"交易已发送",type:"success"})}).on("error",function(t){e.$notify.error({title:"错误",message:"交易失败"})}).on("receipt",function(t){e.init(),e.$notify({title:"成功",message:"设置成功",type:"success"})})})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{ref:"table",attrs:{border:"","highlight-current-row":"",data:t.tableData},on:{"row-click":t.rowClick}},[a("el-table-column",{attrs:{prop:"name",label:"名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"prop",label:"比例"}}),t._v(" "),a("el-table-column",{attrs:{width:"100",prop:"amount",label:"数量(USD)"}}),t._v(" "),a("el-table-column",{attrs:{width:"360",prop:"address",label:"当前已授权地址"}})],1),t._v(" "),a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px","label-position":"top"}},[a("el-form-item",{attrs:{prop:"address",label:"授权地址",rules:{required:!0,message:"value不能为空"}}},[a("el-input",{attrs:{type:"text",placeholder:t.placeholder},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),t._v(" "),a("el-form-item",{staticClass:"bottomButton"},[a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(l,r,!1,function(t){a("PhcQ")},"data-v-824ea70c",null);e.default=n.exports},PhcQ:function(t,e){}});