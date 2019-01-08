(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(99)},42:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},45:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(33),o=a.n(s),c=(a(42),a(11)),i=a(12),l=a(15),u=a(13),h=a(16),m=(a(44),a(45),a(34)),p=a.n(m),g=a(14),v=a(35),f=a.n(v),d=new URLSearchParams(window.location.search),b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onDateChange=function(t){e.setState({date:t}),e.onSubmit(),d.set("start",e.state.date[0].getTime()+"000000"),d.set("end",e.state.date[1].getTime()+"000000")},e.state={loading:!1,searchText:d.has("query")?d.get("query"):"",searchRegex:d.has("regex")?d.get("regex"):"",searchServer:Object({NODE_ENV:"production",PUBLIC_URL:""}).API||d.has("api")?d.get("api"):"http://127.0.0.1:3100",searchLimit:d.has("limit")?d.get("limit"):"",date:[new Date,new Date],streams:[],labels:[],values:[]},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"parseQuery",value:function(e){var t=/(?:^|\s){[^{]*}/g,a=e.match(t),n="",r=e;return a&&(n=a[0].trim(),r=e.replace(t,"").trim()),{query:n,regexp:r}}},{key:"getLabels",value:function(){var e=this,t=this.state.searchServer,a="".concat(t,"/api/prom/label");Object(g.a)(a).then(function(e){return e.json()}).then(function(t){return e.setState({labels:t.values})}).catch(function(e){console.log(e)})}},{key:"getLabelValues",value:function(e){var t=this,a=this.state.searchServer,n="".concat(a,"/api/prom/label/").concat(e,"/values");Object(g.a)(n).then(function(e){return e.json()}).then(function(e){return t.setState({values:e.values})}).catch(function(e){console.log(e)})}},{key:"onChangeHandle",value:function(e){this.setState({searchText:e.target.value}),d.set("query",e.target.value)}},{key:"onChangeServer",value:function(e){e.preventDefault(),this.getLabels(),this.setState({searchServer:e.target.value}),d.set("api",e.target.value)}},{key:"onSubmit",value:function(e){var t=this;e&&e.preventDefault();var a=this.state.searchText,n=this.state.searchServer,r=this.state.searchLimit,s=this.state.date,o=this.parseQuery(a);o.regexp&&this.setState({searchRegex:o.regexp});var c="&start="+s[0].getTime()+"000000&end="+s[1].getTime()+"000000",i="".concat(n,"/api/prom/query?query=").concat(o.query,"&regexp=").concat(o.regexp,"&limit=").concat(r)+c;Object(g.a)(i).then(function(e){return e.json()}).then(function(e){return t.setState({streams:e.streams})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t={paddingTop:"10px",display:"flex",justifyContent:"center",backgroundColor:"#808080",padding:"10px"};this.loading;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{margin:"auto",fontSize:"18px",width:"100%",backgroundColor:"#c9c9c9",display:"flex",flexDirection:"column"}},r.a.createElement("div",{style:{float:"left",position:"absolute",marginLeft:"10px",fontWeight:"bold"}},"Loki-Peek"),r.a.createElement(p.a,{onChange:this.onDateChange,onSubmit:function(t){return e.onSubmit(t)},value:this.state.date}),r.a.createElement("div",null,r.a.createElement("div",{className:"float",style:{width:"20%"}},r.a.createElement("form",{style:t,onSubmit:function(e){return!0}},r.a.createElement("label",{htmlFor:"searchServer"},"Server "),r.a.createElement("input",{type:"text",id:"searchServer",value:this.state.searchServer,onChange:function(t){return e.onChangeServer(t)},className:"searchForm formField"}))),r.a.createElement("div",{className:"float",style:{width:"80%"}},r.a.createElement("form",{style:t,onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("label",{htmlFor:"searchTextForm"},"Search "),r.a.createElement("input",{type:"text",id:"searchTextForm",onChange:function(t){return e.onChangeHandle(t)},value:this.state.searchText,className:"searchForm formField"}),r.a.createElement("button",null,"Search")))),r.a.createElement(y,{streams:this.state.streams,regex:this.state.searchRegex})))}}]),t}(n.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"logs-rows"},this.streams)}},{key:"streams",get:function(){try{var e=this.props.regex;return this.props.streams.map(function(t){return t.entries.map(function(t){return r.a.createElement(x,{ts:t.ts,line:t.line,regex:e})})})}catch(t){return r.a.createElement(x,{ts:"",line:"No Results",regex:this.props.regex})}}}]),t}(r.a.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"logs-row"},r.a.createElement("div",{class:"logs-row__level logs-row__level--info"}),r.a.createElement("div",{class:"logs-row__time",title:"{this.props.ts}"},this.props.ts),r.a.createElement("div",{class:"logs-row__message"},r.a.createElement("span",null,r.a.createElement("span",{class:""}," ",r.a.createElement(f.a,{search:this.props.regex},this.props.line)))))}}]),t}(r.a.Component),E=b;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,2,1]]]);
//# sourceMappingURL=main.30feb640.chunk.js.map