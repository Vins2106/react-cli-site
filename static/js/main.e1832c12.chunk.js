(this["webpackJsonpreact-default"]=this["webpackJsonpreact-default"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(8),a=n.n(r),s=(n(16),n(11)),i=n(4),u=(n.p,n(17),n(0)),l=function(e){var t=e.message,n=e.settings;return Object(u.jsxs)("span",{className:"txt ".concat(n.color," ").concat(t.margin?"txt-margin":""),children:[t.echo?"@react-cli-site/v1.0.0 >\u2800":"",t.content]})},m=n(7),f=n.n(m),h=n(9),g=n(2),d=n(10),j=[{name:"echo",run:function(e,t,n,c,o){if(!e[1])return o({content:"required a option[on, off] or text",user:!1,echo:!1,margin:!0});"on"===e[1]?(n(Object(g.a)(Object(g.a)({},t),{},{echo:!0})),o({content:"echo now is 'on'",user:!1,echo:!1,margin:!0})):"off"===e[1]?(n(Object(g.a)(Object(g.a)({},t),{},{echo:!1})),o({content:"echo now is 'off'",user:!1,echo:!1,margin:!0})):o({content:e.slice(1).join(" "),user:!1,echo:!1,margin:!0})}},{name:"color",run:function(e,t,n,c,o){var r=e[1],a=["a","b","c","d"];if(!r)return o({content:"required a colors[".concat(a.join(", "),"]"),user:!1,echo:!1,margin:!0});var s=a.find((function(e){return e==r}));if(!s)return o({content:"not a color name. [".concat(a.join(", "),"]")});n(Object(g.a)(Object(g.a)({},t),{},{color:s})),o({content:"color changed to '".concat(s,"'"),user:!1,echo:!1,margin:!0})}},{name:"redirect",aliases:["rd"],run:function(e,t,n,c,o,r,a){var s=e.slice(1).join(" ");if(!s)return o({content:"required url/link",user:!1,echo:!1,margin:!0});a.open(s,"_blank"),o({content:"redirecting to ".concat(s),user:!1,echo:!1,margin:!0})}},{name:"clear",aliases:["cls"],run:function(e,t,n,c,o,r,a){r([])}},{name:"tree",run:function(){var e=Object(h.a)(f.a.mark((function e(t,n,c,o,r,a,s){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r({content:"This website is cannot show you the file tree because: out of memory",user:!1,echo:!1,margin:!0});case 1:case"end":return e.stop()}}),e)})));return function(t,n,c,o,r,a,s){return e.apply(this,arguments)}}()},{name:"repeat",run:function(e,t,n,c,o,r,a){var s=e.slice(1).join(" ");if(!s)return o({content:"required text",user:!1,echo:!1,margin:!0});n(Object(g.a)(Object(g.a)({},t),{},{disableInput:!0,disableEffect:!0}));var i=5,u=[];function l(e){r([].concat(u,[e])),u.push(e)}l({content:"Repeat will start in ".concat(i),user:!1,echo:!1}),i--;var m=setInterval((function(){l({content:"Repeat will start in ".concat(i),user:!1,echo:!1}),i--}),1e3);setTimeout((function(){var e=!0;clearInterval(m),setInterval((function(){if(e)return l({content:s,user:!1,echo:!1}),e=!1;l({content:s,user:!1,echo:!1})}),10)}),1e3*i+1e3)}},{name:"help",aliases:["h"],run:function(e,t,n,c,o,r,a){o({content:"\n".concat(j.map((function(e){return"".concat(e.name)})).join(", "),"\n"),user:!1,echo:!1,margin:!0})}},{name:"username",aliases:["user"],run:function(e,t,n,c,o,r,a){var s=e.slice(1).join(" ");if(!s)return o({content:t.username,user:!1,echo:!1,margin:!0});n(Object(g.a)(Object(g.a)({},t),{},{username:s})),o({content:"your username changed to ".concat(s),user:!1,echo:!1,margin:!0})}},{name:"save-ts",aliases:["sts"],run:function(e,t,n,c,o,r,a){var s=new Blob([c.map((function(e){return e.content})).join("\n")],{type:"text/plain"});Object(d.saveAs)(s,"RCS.transcript.txt"),o({content:"Transcript has been exported",user:!1,echo:!1,margin:!0})}},{name:"refresh",aliases:["rf"],run:function(e,t,n,c,o,r,a){a.location.reload(),o({content:"refreshing page...",user:!1,echo:!1,margin:!0})}}],b=j,p=function(e){var t=e.txt,n=e.setTxt,c=e.settings,o=e.setSettings,r=e.messages,a=e.addMessage,s=e.setMessages;var i=function(e){if(e&&e.preventDefault(),(i=t)&&!/^\s*$/.test(i)){var i;a({content:t,user:!0,echo:c.echo});var u=t.split(/ +/g),l=u[0],m=b.find((function(e){return e.name.toLowerCase()==l.toLowerCase()}));return m?(m.run(u,c,o,r,a,s,window),n("")):(a({content:"'".concat(l,"' is not a command. try to typing 'help'"),user:!1,echo:!1,margin:!0}),n(""))}};return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:i,className:"form",id:"form",children:[Object(u.jsx)("span",{className:"txt ".concat(c.color," echo"),children:c.echo?"@react-cli-site/v1.0.0 >\u2800":""}),Object(u.jsx)("input",{name:"message",id:"input",onChange:function(e){document.getElementById("form");if(e.target.value.endsWith("\n"))return i(null);n(e.target.value),e.target.style.height="",e.target.style.height=e.target.scrollHeight+"px"},autoComplete:"off",value:t,className:"input ".concat(c.color)})]})})};var v=function(){var e=Object(c.useRef)(),t=Object(c.useState)([{content:"React cli site [v1.0.0]",echo:!1,user:!1},{content:"(C) Vins 2106. All rights reserved.",echo:!1,user:!1,margin:!0}]),n=Object(i.a)(t,2),o=n[0],r=n[1],a=Object(c.useState)(""),m=Object(i.a)(a,2),f=m[0],h=m[1],g=JSON.parse(localStorage.getItem("settings"))||{color:"a",username:"RCS@User",echo:!0},d=Object(c.useState)({color:g.color,username:g.username,echo:g.echo}),j=Object(i.a)(d,2),b=j[0],v=j[1],O=Object(c.useState)({type:!1,display:"block"}),x=Object(i.a)(O,2),S=x[0],w=x[1];return Object(c.useEffect)((function(){var t=document.getElementById("input");t&&t.focus(),localStorage.setItem("settings",JSON.stringify({color:b.color,username:b.username,echo:b.echo})),console.log("[SETTINGS]: updated!"),e.current.scrollIntoView({behavior:"smooth"})}),[b,o]),Object(u.jsx)("div",{className:"app",onClick:function(){document.getElementById("input").focus()},children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"messages",id:"messages",children:o.map((function(e){return Object(u.jsx)(l,{message:e,settings:b})}))}),b.disableInput?"":Object(u.jsx)(p,{txt:f,setTxt:h,settings:b,setSettings:v,processing:S,setProcessing:w,messages:o,addMessage:function(e){r([].concat(Object(s.a)(o),[{content:f,user:!0,echo:b.echo},e]))},setMessages:r}),Object(u.jsx)("span",{ref:e})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),O()}},[[21,1,2]]]);
//# sourceMappingURL=main.e1832c12.chunk.js.map