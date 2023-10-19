"use strict";(self["webpackChunkbigtree_book_system"]=self["webpackChunkbigtree_book_system"]||[]).push([[33],{2033:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var l=function(){var e=this,t=e._self._c;return t("div",[t("main-header",{attrs:{title:e.title}}),t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix"},[e.tableTitle.radio?t("div",{staticClass:"radio",on:{change:e.radioSearch}},e._l(e.tableTitle.radio,(function(a,l){return t("el-radio",{key:l,attrs:{label:l},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v(e._s(a))])})),1):e._e(),e.tableTitle.search.showData?t("el-date-picker",{staticStyle:{width:"300px"},attrs:{type:"daterange","range-separator":"~","start-placeholder":"请选择日期","end-placeholder":"请选择日期",size:"medium"},on:{change:e.dateChange},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[t("i",{staticClass:"el-icon-s-order"})]):e._e(),e.tableTitle.search.showDepartment?t("el-cascader",{attrs:{options:e.options,placeholder:"请选择科室",size:"medium"},on:{change:e.departmentChange},model:{value:e.department,callback:function(t){e.department=t},expression:"department"}}):e._e(),t("el-input",{attrs:{placeholder:"请输入医生/病人姓名",size:"medium"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.search}},[e._v("搜索")])],1),t("el-table",{ref:"multipleTable",attrs:{data:e.tableData.BookingRegister,"tooltip-effect":"dark",size:"medium","header-cell-style":{"text-align":"center","font-size":"12px","font-weight":"normal"},"cell-style":{"text-align":"center"},fit:!1},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"50"}}),t("el-table-column",{attrs:{prop:"name",label:"患者姓名",width:"65"}}),t("el-table-column",{attrs:{prop:"card-id",label:"就诊卡号",width:"105"}}),t("el-table-column",{attrs:{prop:"user-id",label:"身份证号",width:"170"}}),t("el-table-column",{attrs:{prop:"tel",label:"手机号码",width:"115"}}),t("el-table-column",{attrs:{prop:"department",label:"挂号科室",width:"100"}}),t("el-table-column",{attrs:{prop:"type",label:"挂号类型",width:"70"}}),t("el-table-column",{attrs:{prop:"fee",label:"挂号费",width:"70"}}),t("el-table-column",{attrs:{label:"挂号状态",width:"70"},scopedSlots:e._u([{key:"default",fn:function({row:a}){return[t("span",{staticStyle:{color:"#2ed477"}},[e._v(e._s(a.state))])]}}])}),t("el-table-column",{attrs:{prop:"date",label:"就诊日期",width:"110"}}),t("el-table-column",{attrs:{prop:"time",label:"候诊时间",width:""}}),t("el-table-column",{attrs:{prop:"booking-time",label:"预约时间",width:"160"}}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function({row:l}){return[t("img",{attrs:{src:a(2200)},on:{click:function(t){return e.goDetail(l)}}})]}}])})],1),t("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,30,40,50],"page-size":10,layout:"->,total,  prev, pager, next,sizes, jumper,slot",total:e.tableData.totalCount,"prev-text":"上一页","next-text":"下一页"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},[t("el-button",[e._v("确定")])],1)],1)],1)},i=[],n=(a(7658),{name:"BookingRegister",data(){return{title:{text:"预约挂号",showButtons:!0},tableTitle:{radio:["全部","待就诊","已就诊","已取消"],search:{showData:!0,showDepartment:!0}},tableData:{},radio:"1",date:[],department:[],options:[{value:"inner",label:"内科",children:[{value:"digest",label:"消化内科"},{value:"blood",label:"血液内科"},{value:"rheumatism",label:"风湿免疫内科"},{value:"kidney",label:"肾内科"}]},{value:"outer",label:"外科",children:[{value:"digest",label:"消化外科"},{value:"blood",label:"血液外科"},{value:"rheumatism",label:"风湿免疫外科"},{value:"kidney",label:"肾外科"}]}],name:"",pageSize:10,currentPage:1}},mounted(){this.getData()},methods:{async getData(e){let t=await this.$api.getBookingRegisterData({pageSize:e||this.pageSize,currentSize:this.currentPage});200==t.code&&(this.tableData=t.data)},radioSearch(){this.$message({message:"抱歉，没有模拟对应接口",type:"warning"})},dateChange(e){this.date=e,console.log(e)},departmentChange(e){this.department=e,console.log(e)},getName(e){this.name=e,console.log(e)},search(){this.$message({message:"抱歉，没有模拟对应接口",type:"warning"})},handleSelectionChange(e){console.log(e)},handleSizeChange(e){this.getData(e)},handleCurrentChange(e){this.$message({message:"使用了随机数据模拟切换页面",type:"warning"}),this.currentPage=e,this.getChangeData({pageSize:this.pageSize,currentPage:this.currentPage})},async getChangeData(){let e=await this.$api.getPreOrNextData({pageSize:this.pageSize,currentSize:this.currentPage});200==e.code&&(this.tableData=e.data)},goDetail(e){this.$router.push({name:"detail",params:{id:e["card-id"],title:this.title.text}})}}}),r=n,s=a(1001),o=(0,s.Z)(r,l,i,!1,null,"56989e65",null),c=o.exports},2200:function(e,t,a){e.exports=a.p+"static/img/u5660.774c1fa3.svg"}}]);