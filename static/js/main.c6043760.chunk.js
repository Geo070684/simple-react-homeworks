(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,a,t){e.exports={firstWrapper:"Affairs_firstWrapper__3XoAO",wrapper:"Affairs_wrapper__2cE9_",button:"Affairs_button__3NRqI",filterButton:"Affairs_filterButton__3JOLi",active:"Affairs_active__3GrTz",low:"Affairs_low__2oDxA",high:"Affairs_high__1A7X9",middle:"Affairs_middle__yGX5s"}},function(e,a,t){e.exports={wrapper:"Message_wrapper__fNLwo",item:"Message_item__3mDuV",itemAvatar:"Message_itemAvatar__2hMeZ",itemImage:"Message_itemImage__XR8nt",itemDialog:"Message_itemDialog__3HgYW",itemName:"Message_itemName__28aUY",itemPost:"Message_itemPost__i9rTI",itemTime:"Message_itemTime__9PnWR"}},function(e,a,t){e.exports={error:"Greeting_error__3Ca5R",wrapper:"Greeting_wrapper__2G4Hc",button:"Greeting_button__2IWTs",firstWrapper:"Greeting_firstWrapper__1jOu6",totalUsers:"Greeting_totalUsers__2sGy2",input:"Greeting_input__2Wqx0"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2dk_m",errorInput:"SuperInputText_errorInput__2bcOz",error:"SuperInputText_error__gXt1A",span:"SuperInputText_span__14UfQ",wrapperForInput:"SuperInputText_wrapperForInput__2dRBm"}},function(e,a,t){e.exports={blue:"HW4_blue__XumWj",column:"HW4_column__2ggNI",testSpanError:"HW4_testSpanError__3msTH",checkboxBig:"HW4_checkboxBig__3HMe4"}},,,function(e,a,t){e.exports={default:"SuperButton_default__3Wz73",red:"SuperButton_red__1A_L1",button:"SuperButton_button__3E8v5",wrapperButton:"SuperButton_wrapperButton__1e1vB"}},,function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3GUKD",spanClassName:"SuperCheckbox_spanClassName__1m6Lm",label:"SuperCheckbox_label__1D4GZ"}},,,function(e,a,t){e.exports={App:"App_App__3bP4o"}},,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(13),c=t.n(l),s=(t(21),t(14)),o=t.n(s),i=t(3),m=t.n(i);var u=function(e){return n.a.createElement("div",{className:m.a.wrapper},n.a.createElement("div",{className:m.a.item},n.a.createElement("div",{className:m.a.itemAvatar},n.a.createElement("img",{src:e.avatar,className:m.a.itemImage,alt:"img"})),n.a.createElement("div",{className:m.a.itemDialog},n.a.createElement("div",{className:m.a.itemName},e.name),n.a.createElement("div",{className:m.a.itemPost},e.message),n.a.createElement("div",{className:m.a.itemTime}," ",e.time))))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Anna",d="How are you?",f="22:00";var h=function(){return n.a.createElement("div",null,n.a.createElement("hr",null),n.a.createElement(u,{avatar:p,name:_,message:d,time:f}),n.a.createElement("hr",null),n.a.createElement("hr",null))},E=t(1),b=t(2),g=t.n(b);var v=function(e){var a=g.a[e.priority];return n.a.createElement("div",{className:g.a.wrapper},n.a.createElement("span",{className:g.a.span},e.id),n.a.createElement("span",null,e.affair),n.a.createElement("span",{className:a},e.priority+" "),n.a.createElement("button",{className:g.a.button,onClick:function(){return e.deleteAffairCallback(e.id)}},"X"))};var N=function(e){var a=e.data.map((function(a,t){return n.a.createElement(v,{key:a._id,id:a._id,affair:a.name,priority:a.priority,deleteAffairCallback:function(){return e.deleteAffairCallback(a._id)}})})),t=function(a){return function(){return e.setFilter(a)}},r=function(a){return g.a.filterButton+" "+(e.filter===a?" "+g.a.active:"")};return n.a.createElement("div",{className:g.a.firstWrapper},a,n.a.createElement("div",{className:g.a.buttonWrapper},n.a.createElement("button",{className:r("all"),onClick:t("all")},"All"),n.a.createElement("button",{className:r("high"),onClick:t("high")},"High"),n.a.createElement("button",{className:r("middle"),onClick:t("middle")},"Middle"),n.a.createElement("button",{className:r("low"),onClick:t("low")},"Low")))},k=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var C=function(){var e=Object(r.useState)(k),a=Object(E.a)(e,2),t=a[0],l=a[1],c=Object(r.useState)("all"),s=Object(E.a)(c,2),o=s[0],i=s[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,o);return n.a.createElement("div",null,n.a.createElement("hr",null),"homeworks 2",n.a.createElement(N,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:o}),n.a.createElement("hr",null),n.a.createElement("hr",null))},w=t(15),x=t(4),y=t.n(x),A=function(e){var a=e.name,t=e.setNameCallback,r=e.addUser,l=e.error,c=e.totalUsers,s=e.onKeyDownTask,o=l?y.a.input+" "+y.a.error:y.a.input;return n.a.createElement("div",{className:y.a.firstWrapper},n.a.createElement("div",{className:y.a.wrapper},n.a.createElement("input",{placeholder:l,value:a,onBlur:t,onChange:t,onKeyDown:s,className:o}),n.a.createElement("button",{onClick:r,className:y.a.button},"add"),n.a.createElement("div",{className:y.a.totalUsers},c)))},O=function(e){var a=e.users,t=e.addUserCallback,l=Object(r.useState)(""),c=Object(E.a)(l,2),s=c[0],o=c[1],i=Object(r.useState)(""),m=Object(E.a)(i,2),u=m[0],p=m[1],_=function(){s.length?(alert("Hello ".concat(s,"!")),t(s)):(p("Please add name"),alert("Please add name")),o("")},d=a.length;return n.a.createElement(A,{name:s,setNameCallback:function(e){var a=e.currentTarget.value.trim();a?(o(a),u&&p("")):p("Please add name")},onKeyDownTask:function(e){"Enter"===e.key&&_()},addUser:_,error:u,totalUsers:d})},S=t(24);var j=function(){var e=Object(r.useState)([]),a=Object(E.a)(e,2),t=a[0],l=a[1];return n.a.createElement("div",null,n.a.createElement("hr",null),"homeworks 3",n.a.createElement(O,{users:t,addUserCallback:function(e){var a={_id:Object(S.a)(),name:e},r=Object(w.a)(t);r.push(a),l(r)}}),n.a.createElement("hr",null),n.a.createElement("hr",null))},I=t(7),T=t(5),W=t.n(T),B=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],M=function(e){e.type;var a=e.onChange,t=e.onChangeText,r=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=(e.spanClassName,Object(I.a)(e,B)),i=c?W.a.error+" "+W.a.span:W.a.span,m=c?"".concat(W.a.errorInput," ").concat(s||" "):"".concat(W.a.superInput," ").concat(s||" ");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:W.a.wrapperForInput},n.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),l&&"Enter"===e.key&&l()},className:m},o)),c&&n.a.createElement("span",{className:i},c)))},G=t(6),H=t.n(G),P=t(9),U=t.n(P),D=["red","className"],X=function(e){var a=e.red,t=(e.className,Object(I.a)(e,D));console.log("button",t);var r="".concat(a?U.a.red:U.a.default," ").concat(U.a.button);return n.a.createElement("div",{className:U.a.wrapperButton},n.a.createElement("button",Object.assign({className:r},t)))},F=t(11),K=t.n(F),R=["type","onChange","onChangeChecked","className","spanClassName","children"],L=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,r=e.className,l=(e.spanClassName,e.children),c=Object(I.a)(e,R),s="".concat(K.a.checkbox," ").concat(r||"");return console.log("checkbox rest",c),n.a.createElement("label",{className:K.a.label},n.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:s},c)),l&&n.a.createElement("span",{className:K.a.spanClassName},l))};var J=function(){var e=Object(r.useState)(""),a=Object(E.a)(e,2),t=a[0],l=a[1],c=" "!==t&&t?"":"Error. You need to change it",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(t),l(" "))},o=Object(r.useState)(!1),i=Object(E.a)(o,2),m=i[0],u=i[1];return n.a.createElement("div",null,n.a.createElement("hr",null),"homeworks 4",n.a.createElement("div",{className:H.a.column},n.a.createElement(M,{value:t,onChangeText:l,onEnter:s,error:c,spanClassName:H.a.testSpanError,className:H.a.blue}),n.a.createElement(M,{className:H.a.blue}),n.a.createElement(X,null,"default"),n.a.createElement(X,{red:!0,onClick:s},"delete "),n.a.createElement(X,{disabled:!0},"disabled"),n.a.createElement(L,{checked:m,onChangeChecked:u,className:H.a.checkboxBig},"My checkbox "),n.a.createElement(L,{checked:m,onChange:function(e){return u(e.currentTarget.checked)},className:H.a.checkboxBig},"My new checkbox  ")),n.a.createElement("hr",null),n.a.createElement("hr",null))};var Y=function(){return n.a.createElement("div",{className:o.a.App},n.a.createElement("div",null,"react homeworks:"),n.a.createElement(h,null),n.a.createElement(C,null),n.a.createElement(j,null),n.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.c6043760.chunk.js.map