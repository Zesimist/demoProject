(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),c=t.n(r),s=(t(13),t(1));t(15);function i(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:""},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:""},"About"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode"))))))}function o(e){var a=Object(n.useState)("Enter your Text here"),t=Object(s.a)(a,2),r=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",id:"statement"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat blanditiis provident ducimus distinctio unde, in excepturi aliquam ipsam dicta delectus, vero quam odit esse possimus illum libero dolorum nisi adipisci similique exercitationem ratione impedit, iure voluptas est. Culpa vitae eum facilis odio beatae magnam eligendi qui alias laborum quo, aut quas quis quae architecto vel eius nobis rem amet earum. Assumenda excepturi vero deleniti amet natus, accusantium qui. Nobis, voluptates illo! Amet earum sed inventore ullam error laborum perspiciatis esse accusantium magnam quas consequuntur aperiam vitae dolorem reiciendis quia possimus reprehenderit fugit laudantium placeat, explicabo molestias fugiat. Ratione, impedit vel.")),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"myBox",className:"form-label"},"What can I do for you"),l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){c(e.target.value)},id:"myBox",rows:"8"})),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var a=r.toUpperCase();c(a),e.showAlert("converted to Upper case","success")}},"Uppper Casse"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var a=r.split(/[ ]+/);c(a.join(" ")),e.showAlert("Extra space has been removed","success")}},"remove extra space"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var a=r.toLowerCase();c(a),e.showAlert("converted to Lower case","success")}},"Lower Casse"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){}},"compare"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var a=document.getElementById("myBox");a.select(),navigator.clipboard.writeText(a.value),e.showAlert("Text has been copied","success")}},"copy")),l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Summary"),l.a.createElement("p",null,r.split(" ").length," words and ",r.length," characters"),l.a.createElement("p",null,r)))}function m(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)),": ",e.alert.msg,l.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"}))}var u=function(){var e=Object(n.useState)("light"),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(null),u=Object(s.a)(c,2),d=u[0],b=u[1],p=function(e,a){b({msg:e,type:a}),setTimeout(function(){return b(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{title:"TestTing",mode:t,toggleMode:function(){"dark"===t?(r("light"),p("Light mode has been enabled","success")):(r("dark"),p("dark mode has been enabled","success"))}}),l.a.createElement(m,{alert:d}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(o,{showAlert:p,heading:"Enter the text to Analyze"})))},d=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,19)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,a,t){e.exports=t(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.25f29234.chunk.js.map