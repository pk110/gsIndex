webpackJsonp([16],{HjIm:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("aO2o");var o=i("/MtV"),a={data:function(){return{totalPriceChoose:0,pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,i=new Date;i.setTime(i.getTime()-6048e5),t.$emit("pick",[i,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,i=new Date;i.setTime(i.getTime()-2592e6),t.$emit("pick",[i,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,i=new Date;i.setTime(i.getTime()-7776e6),t.$emit("pick",[i,e])}}]},fluxSearchTime:"",listSeven:[]}},mounted:function(){this.listSeven=[{orderPriceSum:38.94,orderCount:1,orderDate:"08-15"},{orderPriceSum:56.29,orderCount:3,orderDate:"08-16"},{orderPriceSum:59.61,orderCount:3,orderDate:"08-17"},{orderPriceSum:49.45,orderCount:2,orderDate:"08-18"},{orderPriceSum:0,orderCount:0,orderDate:"08-19"},{orderPriceSum:55.01,orderCount:3,orderDate:"08-20"},{orderPriceSum:0,orderCount:0,orderDate:"08-21"}],this.drawLineNub()},methods:{drawLineNub:function(){for(var t=[],e=0;e<this.listSeven.length;e++)t.push(this.listSeven[e].orderDate);for(var i=[],a=0;a<this.listSeven.length;a++)i.push(this.listSeven[a].orderPriceSum);for(var l=[],s=0;s<this.listSeven.length;s++)l.push(this.listSeven[s].orderCount);this.$stamp(null,t),this.$stamp(null,i),this.$stamp(null,l),o.init(document.getElementById("flux_myLineNub")).setOption({baseOption:{tooltip:{trigger:"axis"},legend:{data:["总金额","总订单"]},toolbox:{show:!0,feature:{magicType:{show:!0,type:["stack","tiled"]},saveAsImage:{show:!0}}},xAxis:{name:"过去七天",type:"category",boundaryGap:!1,data:t},yAxis:{name:"订单量",type:"value"},series:[{name:"下单转化率",type:"line",smooth:!0,color:"#60c101",data:l},{name:"付款转化率",type:"line",smooth:!0,color:"#9076ff",data:i},{name:"全店转化率",type:"line",smooth:!0,color:"#ffc600",data:i}]},media:[{query:{maxWidth:1150,minWidth:1100},option:{legend:{orient:"horizontal",left:200,itemGap:5},grid:{left:"10%",top:80,right:250,bottom:100},xAxis:{nameLocation:"end",nameGap:10,splitNumber:5,splitLine:{show:!0}},timeline:{orient:"horizontal",inverse:!1,left:"20%",right:"20%",bottom:10,height:40},series:[{center:["50%","50%"]}]}}]})},timeFluxSearch:function(){this.$stamp(null,this.fluxSearchTime)}},computed:{},components:{},created:function(){}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._v(" "),i("div",{staticStyle:{"max-width":"1300px","min-width":"1200px","margin-top":"10px","background-color":"#ffffff","padding-bottom":"20px"}},[i("div",{staticClass:"flux_title"},[t._v("交易概况")]),t._v(" "),i("div",{staticClass:"flux_search_left_date"},[i("el-radio-group",{staticClass:"flux_totalPriceChoose",model:{value:t.totalPriceChoose,callback:function(e){t.totalPriceChoose=e},expression:"totalPriceChoose"}},[i("el-radio-button",{attrs:{label:"0"}},[t._v("昨日")]),t._v(" "),i("el-radio-button",{attrs:{label:"1"}},[t._v("7日")]),t._v(" "),i("el-radio-button",{attrs:{label:"2"}},[t._v("30日")]),t._v(" "),i("el-radio-button",{attrs:{label:"3"}},[t._v("90日")])],1),t._v(" "),i("el-date-picker",{staticClass:"fluxTime",attrs:{type:"daterange",align:"right",size:"small","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions2},on:{change:t.timeFluxSearch},model:{value:t.fluxSearchTime,callback:function(e){t.fluxSearchTime=e},expression:"fluxSearchTime"}})],1),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flux_storeNub"},[i("ul",{staticStyle:{display:"flex"}},[i("li",[i("div",{staticClass:"flux_storeNub_title",staticStyle:{"background-color":"#ed6f00"}},[t._v("访客数")]),t._v(" "),i("span",{staticStyle:{"font-size":"20px",color:"#ed6f00"}},[t._v("1477 次")]),t._v(" "),i("div",{staticStyle:{"padding-bottom":"10px"}},[t._v("昨日同时段\n          "),i("span",{staticStyle:{"margin-left":"15px",color:"#8BC34A!important"}},[i("i",{staticClass:"el-icon-upload2",staticStyle:{"font-size":"23px","padding-right":"10px"}}),t._v("\n          214.10次")])])]),t._v(" "),i("li",[i("div",{staticClass:"flux_storeNub_title",staticStyle:{"background-color":"#9076ff"}},[t._v("下单数 (单)")]),t._v(" "),i("span",{staticStyle:{"font-size":"20px",color:"#9076ff"}},[t._v("122 单")]),t._v(" "),i("div",{staticStyle:{"padding-bottom":"10px"}},[t._v("昨日同时段\n          "),i("span",{staticStyle:{"margin-left":"15px",color:"#8BC34A!important"}},[i("i",{staticClass:"el-icon-upload2",staticStyle:{"font-size":"23px","padding-right":"10px"}}),t._v("\n          9单")])])]),t._v(" "),i("li",[i("div",{staticClass:"flux_storeNub_title",staticStyle:{"background-color":"#ffc600"}},[t._v("有效订单数 (单)")]),t._v(" "),i("span",{staticStyle:{"font-size":"20px",color:"#ffc600"}},[t._v("115 单")]),t._v(" "),i("div",{staticStyle:{"padding-bottom":"10px"}},[t._v("昨日同时段\n          "),i("span",{staticStyle:{"margin-left":"15px",color:"#E51C23!important"}},[i("i",{staticClass:"el-icon-download",staticStyle:{"font-size":"23px"}}),t._v("\n          9单")])])]),t._v(" "),i("li",[i("div",{staticClass:"flux_storeNub_title",staticStyle:{"background-color":"#494949"}},[t._v("付款金额")]),t._v(" "),i("span",{staticStyle:{"font-size":"20px",color:"#494949"}},[t._v("105.50 元")]),t._v(" "),i("div",{staticStyle:{"padding-bottom":"10px"}},[t._v("昨日同时段\n          "),i("span",{staticStyle:{"margin-left":"15px",color:"#E51C23!important"}},[i("i",{staticClass:"el-icon-download",staticStyle:{"font-size":"23px"}}),t._v("\n          9元")])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flux_search"},[i("div",{staticClass:"flux_search_left"},[i("div",{staticClass:"flux_people"},[i("div",[i("p",{staticStyle:{color:"#000000"}},[t._v("访客数")]),t._v(" "),i("p",{staticStyle:{"font-size":"21px",color:"#ed6f00"}},[t._v("1477 次")])]),t._v(" "),i("div",[i("p",{staticStyle:{color:"#000000"}},[t._v("下单订单数")]),t._v(" "),i("p",{staticStyle:{"font-size":"18px",color:"#ed6f00"}},[t._v("1477 单")])]),t._v(" "),i("div",[i("p",{staticStyle:{color:"#000000"}},[t._v("下单金额 (元)")]),t._v(" "),i("p",{staticStyle:{"font-size":"18px",color:"#ed6f00"}},[t._v("1477 元")])]),t._v(" "),i("div",{staticStyle:{"padding-right":"15px"}},[i("p",{staticStyle:{color:"#000000"}},[t._v("客单价 (元)")]),t._v(" "),i("p",{staticStyle:{"font-size":"18px",color:"#ed6f00"}},[t._v("1477 元")])])]),t._v(" "),i("div",{staticClass:"flux_people",staticStyle:{"border-bottom-width":"0"}},[i("div",[i("p",{staticStyle:{color:"#000000"}},[t._v("下单人数")]),t._v(" "),i("p",{staticStyle:{"font-size":"18px",color:"#ed6f00"}},[t._v("1477 次")])]),t._v(" "),i("div",[i("p",{staticStyle:{color:"#000000"}},[t._v("有效订单数")]),t._v(" "),i("p",{staticStyle:{"font-size":"18px",color:"#ed6f00"}},[t._v("1477 单")])]),t._v(" "),i("div",[i("p",{staticStyle:{color:"#000000"}},[t._v("有效金额 (元)")]),t._v(" "),i("p",{staticStyle:{"font-size":"18px",color:"#ed6f00"}},[t._v("1477 元")])]),t._v(" "),i("div",[i("p",{staticStyle:{color:"#000000"}},[t._v("真实客单价 (元)")]),t._v(" "),i("p",{staticStyle:{"font-size":"18px",color:"#ed6f00"}},[t._v("1477 元")])])])]),t._v(" "),i("div",{staticClass:"flux_search_right"},[i("span",{staticStyle:{top:"34px",left:"145px"}},[t._v("20%")]),t._v(" "),i("span",{staticStyle:{top:"34px",left:"374px"}},[t._v("50%")]),t._v(" "),i("span",{staticStyle:{top:"146px",left:"259px"}},[t._v("60%")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flux_echart"},[e("div",{staticClass:"flux_myLine",attrs:{id:"flux_myLineNub"}}),this._v(" "),e("div",{staticClass:"flux_totalPrice_line_bottom"},[e("span",{staticClass:"flux_totalPrice_line_bottom_inline",staticStyle:{color:"#696969"}},[e("i",{staticStyle:{"background-color":"#60c101"}}),this._v("下单转化率")]),this._v(" "),e("span",{staticClass:"flux_totalPrice_line_bottom_inline",staticStyle:{color:"#696969"}},[e("i",{staticStyle:{"background-color":"#9076ff"}}),this._v("付款转化率")]),this._v(" "),e("span",{staticClass:"flux_totalPrice_line_bottom_inline",staticStyle:{color:"#696969"}},[e("i",{staticStyle:{"background-color":"#ffc600"}}),this._v("全店转化率")])])])}]};var s=i("C7Lr")(a,l,!1,function(t){i("eWuF")},null,null);e.default=s.exports},eWuF:function(t,e){}});
//# sourceMappingURL=16.a95b6d9ec69684de53bf.js.map