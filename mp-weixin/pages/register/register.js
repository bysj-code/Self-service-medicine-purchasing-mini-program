(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"1be5":function(e,r,n){},4417:function(e,r,n){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var t=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,r,n,t,a,u,i){try{var o=e[u](i),s=o.value}catch(l){return void n(l)}o.done?r(s):Promise.resolve(s).then(t,a)}function i(e){return function(){var r=this,n=arguments;return new Promise((function(t,a){var i=e.apply(r,n);function o(e){u(i,t,a,o,s,"next",e)}function s(e){u(i,t,a,o,s,"throw",e)}o(void 0)}))}}var o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var r=this;return i(t.default.mark((function n(){var a;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:[],a=e.getStorageSync("loginTable"),r.tableName=a,"yonghu"==r.tableName&&(r.yonghuxingbieOptions="男,女".split(","),r.ruleForm.xingbie=r.yonghuxingbieOptions[0]),r.styleChange();case 5:case"end":return n.stop()}}),n)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return i(t.default.mark((function r(){return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.ruleForm.zhanghao||"yonghu"!=e.tableName){r.next=3;break}return e.$utils.msg("账号不能为空"),r.abrupt("return");case 3:if(e.ruleForm.mima||"yonghu"!=e.tableName){r.next=6;break}return e.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if("yonghu"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){r.next=9;break}return e.$utils.msg("两次密码输入不一致"),r.abrupt("return");case 9:if(e.ruleForm.xingming||"yonghu"!=e.tableName){r.next=12;break}return e.$utils.msg("姓名不能为空"),r.abrupt("return");case 12:if(e.ruleForm.shenfenzheng||"yonghu"!=e.tableName){r.next=15;break}return e.$utils.msg("身份证不能为空"),r.abrupt("return");case 15:if("yonghu"!=e.tableName||!e.ruleForm.shenfenzheng||e.$validate.checkIdCard(e.ruleForm.shenfenzheng)){r.next=18;break}return e.$utils.msg("身份证应输入身份证格式"),r.abrupt("return");case 18:if("yonghu"!=e.tableName||!e.ruleForm.shoujihaoma||e.$validate.isMobile(e.ruleForm.shoujihaoma)){r.next=21;break}return e.$utils.msg("手机号码应输入手机格式"),r.abrupt("return");case 21:if("yonghu"!=e.tableName||!e.ruleForm.money||e.$validate.isNumber(e.ruleForm.money)){r.next=24;break}return e.$utils.msg("余额应输入数字"),r.abrupt("return");case 24:if(e.ruleForm.shangjiazhanghao||"shangjia"!=e.tableName){r.next=27;break}return e.$utils.msg("商家账号不能为空"),r.abrupt("return");case 27:if(e.ruleForm.mima||"shangjia"!=e.tableName){r.next=30;break}return e.$utils.msg("密码不能为空"),r.abrupt("return");case 30:if("shangjia"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){r.next=33;break}return e.$utils.msg("两次密码输入不一致"),r.abrupt("return");case 33:if(e.ruleForm.shangjiamingcheng||"shangjia"!=e.tableName){r.next=36;break}return e.$utils.msg("商家名称不能为空"),r.abrupt("return");case 36:if("shangjia"!=e.tableName||!e.ruleForm.shenfenzheng||e.$validate.checkIdCard(e.ruleForm.shenfenzheng)){r.next=39;break}return e.$utils.msg("身份证应输入身份证格式"),r.abrupt("return");case 39:if("shangjia"!=e.tableName||!e.ruleForm.lianxishouji||e.$validate.isMobile(e.ruleForm.lianxishouji)){r.next=42;break}return e.$utils.msg("联系手机应输入手机格式"),r.abrupt("return");case 42:if("shangjia"!=e.tableName||!e.ruleForm.money||e.$validate.isNumber(e.ruleForm.money)){r.next=45;break}return e.$utils.msg("余额应输入数字"),r.abrupt("return");case 45:return r.next=47,e.$api.register("".concat(e.tableName),e.ruleForm,e.emailcode);case 47:e.$utils.msgBack("注册成功");case 49:case"end":return r.stop()}}),r)})))()}}};r.default=o}).call(this,n("543d")["default"])},"573f":function(e,r,n){"use strict";(function(e){n("7cd5");t(n("66fd"));var r=t(n("ff55"));function t(e){return e&&e.__esModule?e:{default:e}}e(r.default)}).call(this,n("543d")["createPage"])},"86e0":function(e,r,n){"use strict";var t=n("1be5"),a=n.n(t);a.a},ac7e:function(e,r,n){"use strict";var t=n("f538"),a=n.n(t);a.a},b2d1:function(e,r,n){"use strict";var t;n.d(r,"b",(function(){return a})),n.d(r,"c",(function(){return u})),n.d(r,"a",(function(){return t}));var a=function(){var e=this,r=e.$createElement;e._self._c},u=[]},cde5:function(e,r,n){"use strict";n.r(r);var t=n("4417"),a=n.n(t);for(var u in t)"default"!==u&&function(e){n.d(r,e,(function(){return t[e]}))}(u);r["default"]=a.a},f538:function(e,r,n){},ff55:function(e,r,n){"use strict";n.r(r);var t=n("b2d1"),a=n("cde5");for(var u in a)"default"!==u&&function(e){n.d(r,e,(function(){return a[e]}))}(u);n("86e0"),n("ac7e");var i,o=n("f0c5"),s=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"4ec33ae0",null,!1,t["a"],i);r["default"]=s.exports}},[["573f","common/runtime","common/vendor"]]]);