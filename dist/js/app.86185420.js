(function(t){function n(n){for(var a,c,i=n[0],u=n[1],l=n[2],f=0,d=[];f<i.length;f++)c=i[f],r[c]&&d.push(r[c][0]),r[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);s&&s(n);while(d.length)d.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],a=!0,i=1;i<e.length;i++){var u=e[i];0!==r[u]&&(a=!1)}a&&(o.splice(n--,1),t=c(c.s=e[0]))}return t}var a={},r={app:0},o=[];function c(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=a,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)c.d(e,a,function(n){return t[n]}.bind(null,a));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var s=u;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var a=e("64a9"),r=e.n(a);r.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Config",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},o=[],c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-container",{staticClass:"text-left"},[e("b-row",[e("b-col",{attrs:{sm:"8"}},[e("b-card",{staticClass:"text-left",attrs:{header:"测试选项"}},[e("b-form-group",t._l(t.configItem,function(n,a){return e("b-form-checkbox",{key:a,attrs:{value:"1","unchecked-value":"0"},model:{value:t.factory[n.name].activated,callback:function(e){t.$set(t.factory[n.name],"activated",e)},expression:"factory[item.name].activated"}},[t._v("\n\t\t\t\t\t\t"+t._s(n.value)+"\n\t\t\t\t\t\t"),e("br"),t._l(t.factory[n.name],function(a,r,o){return"1"===t.factory[n.name].activated?e("b-row",{key:o},["activated"!==r?e("b-col",{attrs:{sm:"3"}},[e("label",[t._v(t._s(r))])]):t._e(),"activated"!==r?e("b-col",{attrs:{sm:"9"}},[e("b-form-input",{attrs:{type:t.text},model:{value:t.factory[n.name][r],callback:function(e){t.$set(t.factory[n.name],r,e)},expression:"factory[item.name][key]"}})],1):t._e()],1):t._e()})],2)}),1),e("b-button",{staticClass:"m-1",attrs:{variant:"primary"},on:{click:t.input}},[t._v("导入")]),e("b-button",{staticClass:"m-1",attrs:{type:"submit",variant:"primary"},on:{click:t.download}},[t._v("下载")]),e("b-button",{staticClass:"m-1",attrs:{type:"reset",variant:"danger"},on:{click:t.onReset}},[t._v("重置")])],1)],1),e("b-col",{attrs:{sm:"4"}},[e("b-card",{staticClass:"text-left h-100",attrs:{header:"配置结果"}},[e("pre",{staticClass:"m-0"},[t._v(t._s(t.output))])])],1)],1)],1)},i=[],u=(e("4f37"),e("6b54"),e("87b3"),e("34ef"),e("a481"),{data:function(){return{show:!0,configItem:[{name:"LAN",value:"有线网口"},{name:"WIFI",value:"2.4G信号"},{name:"WIFI2",value:"5G信号"},{name:"BT",value:"蓝牙"},{name:"INTERNET",value:"联网激活"},{name:"SD",value:"SD卡"},{name:"USB",value:"U盘"},{name:"HDMI",value:"HDMI接口"},{name:"CHNL",value:"左右声道"},{name:"LED",value:"LED灯"},{name:"REST",value:"重置"},{name:"CVBS",value:"CVBS接口"}],change:{},factoryStr:"[LAN]\nactivated=1\n\n[WIFI]\nactivated=1\nwifi_ap=qmorn_2.4G\npassword=qmorn2018\nconnect=1\ndb_start=-0\ndb_end=-120\n\n[WIFI2]\nactivated=1\nwifi_ap=qmorn_5G\npassword=qmorn2018\nconnect=1\ndb_start=-0\ndb_end=-120\n\n[BT]\nactivated=1\nbt_name=\n\n[INTERNET]\nactivated=1\n\n[SD]\nactivated=1\n\n[USB]\nactivated=1\nconnect=2\n\n[HDMI]\nactivated=0\n\n[CHNL]\nactivated=0\n\n[LED]\nactivated=0\n\n[REST]\nactivated=0\n\n[CVBS]\nactivated=0",factory:{}}},created:function(){this.creatini()},mounted:function(){},methods:{download:function(){var t=this.entry(),n=document.createElement("a");document.body.appendChild(n),n.style="display: none";var e=new Blob([t]),a=window.URL.createObjectURL(e);n.href=a,n.download="Factory_Test.bin",n.click(),window.URL.revokeObjectURL(a)},input:function(){},onReset:function(){this.creatini()},creatini:function(){var t=e("6343");this.factory=t.decode(this.factoryStr)},entry:function(){var t,n,e,a,r,o=this.output.replace(/(\n)/g,"\r\n"),c=this.stringToBytes(o),i=new Uint8Array(256),u=new Uint8Array(256),l=[124,78,3,4,85,5,9,7,45,44,123,56,23,13,23,17];for(e=0,n=0;n<256;n++)i[n]=n,e&=15,u[n]=l[e],e++;for(e=0,n=0;n<256;n++)e=(e+i[n]+u[n])%256&255,t=i[n],i[n]=i[e],i[e]=t;for(n=e=0,r=0;r<c.length;r++)n=(n+1)%256&255,e=(e+i[n])%256&255,t=i[n],i[n]=i[e],i[e]=t,a=(i[n]+i[e]%256)%256&255,c[r]=255&(c[r]^i[a]);for(var s=this.stringToBytes("SIGN"),f=this.intToByte4(c.length),d=s.concat(f).concat(c).concat([1,1,1,1]),v=new Uint8Array(d.length),p=0;p<d.length;p++)v[p]=d[p];return v},stringToBytes:function(t){var n,e,a=[];console.log(t.length);for(var r=0;r<t.length;r++){n=t.charCodeAt(r),e=[];do{e.push(255&n),n>>=8}while(n);a=a.concat(e.reverse())}return a},Bytes2Str:function(t){for(var n="",e=0;e<t.length;e++){var a=t[e].toString(16);1==a.length&&(a="0"+a),n+=a}return n},intToByte4:function(t){var n=[];return n[0]=255&t,n[1]=t>>8&255,n[2]=t>>16&255,n[3]=t>>24&255,n}},computed:{output:function(){var t=e("6343");return t.encode(this.factory).trim()}}}),l=u,s=e("2877"),f=Object(s["a"])(l,c,i,!1,null,null,null),d=f.exports,v={name:"app",components:{Config:d}},p=v,m=(e("034f"),Object(s["a"])(p,r,o,!1,null,null,null)),b=m.exports,y=e("5f5b"),h=e("b1e0");e("f9e3"),e("2dd8");a["default"].config.productionTip=!1,a["default"].use(y["a"]),a["default"].use(h["a"]),new a["default"]({render:function(t){return t(b)}}).$mount("#app")},"64a9":function(t,n,e){}});
//# sourceMappingURL=app.86185420.js.map