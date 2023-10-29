"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[8728],{15749:function(e,n,t){t(72791);var r=t(80184);n.Z=function(e){var n=e.children;return(0,r.jsx)("div",{className:"scrollbar",children:n})}},75949:function(e,n,t){t.d(n,{Z:function(){return D}});var r=t(29439),a=t(72791),o=t(39230),s=t(99220),l=t(38646),i=t(28782),c=t(27949),u=t(28282),d=t(31363),h=t(11632),f=t(37762),m=t(76308),p=t(66360),x=t(41900),b=t.n(x),j=t(67179),g=t.n(j),v=t(75193),y=t.n(v),k=t(98442),Z=t(80184),N=function(e){var n=e.id,t=e.data,r=e.colors,s=e.stack,l=(0,o.$G)().t,i=(0,m.Fg)(),c=i.nightModeEnabled,u=i.graphTheming;return(0,a.useEffect)((function(){var e=function(e){var n=r[e%r.length];return c?(0,p.Xf)(n):n};b()(g()),y()(g()),g().setOptions({lang:{noData:l("html.label.noDataToDisplay")}}),g().setOptions(u);var a,o={},i=[],d=(0,f.Z)(t||[]);try{for(d.s();!(a=d.n()).done;){var h=a.value;i.push(h.date);var m,x=(0,f.Z)(h.joinAddresses);try{for(x.s();!(m=x.n()).done;){var j=m.value;o[j.joinAddress]||(o[j.joinAddress]=[]),o[j.joinAddress].push([h.date,j.count])}}catch(N){x.e(N)}finally{x.f()}}}catch(N){d.e(N)}finally{d.f()}var v=i,Z=Object.entries(o).map((function(n,t){var a=n[0];return"plugin.generic.unknown"===a&&(a=l("plugin.generic.unknown")),t>=r.length?{name:a,data:n[1]}:{name:a,data:n[1],color:e(t)}}));g().stockChart(n,{chart:{noData:l("html.label.noDataToDisplay"),type:"column"},rangeSelector:{selected:3,buttons:k.AA},xAxis:{categories:v,tickmarkPlacement:"on",title:{enabled:!1},ordinal:!1},yAxis:{softMax:2,softMin:0},title:{text:""},plotOptions:{column:{stacking:s?"normal":void 0,lineWidth:1}},legend:{enabled:!0},series:Z})}),[t,r,u,n,l,c,s]),(0,Z.jsx)("div",{className:"chart-area",style:{height:"450px"},id:n,children:(0,Z.jsx)("span",{className:"loader"})})},M=t(74421),D=function(e){var n=e.identifier,t=(0,o.$G)().t,f=(0,a.useState)(!0),m=(0,r.Z)(f,2),p=m[0],x=m[1],b=(0,s.m)(l.L0,[n]),j=b.data,g=b.loadingError;return g?(0,Z.jsx)(i.NY,{error:g}):j?(0,Z.jsxs)(u.Z,{children:[(0,Z.jsxs)(u.Z.Header,{children:[(0,Z.jsxs)("h6",{className:"col-black",style:{width:"100%"},children:[(0,Z.jsx)(d.G,{icon:h.Ma4,className:"col-amber"})," ",t("html.label.joinAddresses")]}),(0,Z.jsx)(M.Z,{value:p,onValueChange:x,color:"amber",children:t("html.label.stacked")})]}),(0,Z.jsx)(N,{id:"join-address-graph",data:null===j||void 0===j?void 0:j.join_addresses_by_date,colors:null===j||void 0===j?void 0:j.colors,stack:p})]}):(0,Z.jsx)(c.ym,{})}},42924:function(e,n,t){t(72791);var r=t(39230),a=t(99220),o=t(38646),s=t(28782),l=t(27949),i=t(28282),c=t(31363),u=t(11632),d=t(55236),h=t(80184);n.Z=function(e){var n=e.identifier,t=(0,r.$G)().t,f=(0,a.m)(o.Y7,[n]),m=f.data,p=f.loadingError;return p?(0,h.jsx)(s.NY,{error:p}):m?(0,h.jsxs)(i.Z,{id:"join-address-groups",children:[(0,h.jsx)(i.Z.Header,{children:(0,h.jsxs)("h6",{className:"col-black",style:{width:"100%"},children:[(0,h.jsx)(c.G,{icon:u.$40,className:"col-amber"})," ",t("html.label.latestJoinAddresses")]})}),(0,h.jsx)(d.Z,{groups:m.slices,colors:m.colors})]}):(0,h.jsx)(l.ym,{})}},55236:function(e,n,t){t.d(n,{Z:function(){return A}});var r=t(29439),a=t(72791),o=t(39230),s=t(76308),l=t(66360),i=t(15749),c=t(80184),u=function(e){var n=e.group,t=e.color,r=(0,o.$G)().t;return(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{style:{color:t},children:r(n.name)}),(0,c.jsx)("td",{children:n.y})]})},d=function(e){var n=e.groups,t=e.colors,r=(0,o.$G)().t,a=(0,s.Fg)().nightModeEnabled;function d(e){if(n[e].color)return a?(0,l.Xf)(n[e].color):n[e].color;var r=e%t.length;return a?(0,l.Xf)(t[r]):t[r]}return(0,c.jsx)(i.Z,{children:(0,c.jsx)("table",{className:"table mb-0"+(a?" table-dark":""),children:(0,c.jsx)("tbody",{children:n.length?n.map((function(e,n){return(0,c.jsx)(u,{group:e,color:d(n)},e.name)})):(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:r("generic.noData")}),(0,c.jsx)("td",{children:"-"}),(0,c.jsx)("td",{children:"-"}),(0,c.jsx)("td",{children:"-"})]})})})})},h=t(75193),f=t.n(h),m=t(29718),p=t.n(m),x=function(e){var n=e.id,t=e.groups,r=e.colors,i=e.name,u=(0,o.$G)().t,d=(0,s.Fg)(),h=d.nightModeEnabled,m=d.graphTheming;return(0,a.useEffect)((function(){var e=t.map((function(e){return{name:u(e.name),y:e.y}})),a={name:i,colorByPoint:!0,colors:function(){var e=r||t.map((function(e){return e.color}));return h?e.map((function(e){return(0,l.Xf)(e)})):e}(),data:e};f()(p()),p().setOptions(m),p().chart(n,{chart:{noData:u("html.label.noDataToDisplay"),backgroundColor:"transparent",plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:""},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!0}},tooltip:{formatter:function(){return"<b>"+this.point.name+":</b> "+this.y}},series:[a]})}),[n,r,t,i,m,h,u]),(0,c.jsx)("div",{className:"chart-area",id:n})},b=t(31363),j=t(11632),g=t(89743),v=t(2677),y=function(e){var n=e.id,t=e.groups,r=e.colors,i=e.horizontal,u=e.name,d=(0,o.$G)().t,h=(0,s.Fg)(),m=h.nightModeEnabled,x=h.graphTheming;return(0,a.useEffect)((function(){var e=t.map((function(e){return e.y})),a=t.map((function(e){return d(e.name)})),o={name:u,colorByPoint:!0,data:e,colors:function(){var e=r||t.map((function(e){return e.color}));return m?e.map((function(e){return(0,l.Xf)(e)})):e}()};f()(p()),p().setOptions(x),p().chart(n,{chart:{noData:d("html.label.noDataToDisplay"),type:i?"bar":"column"},title:{text:""},xAxis:{categories:a,title:{text:""}},yAxis:{min:0,title:{text:"",align:"high"},labels:{overflow:"justify"}},legend:{enabled:!1},plotOptions:{bar:{dataLabels:{enabled:!0}}},series:[o]})}),[n,t,r,i,u,x,m,d]),(0,c.jsx)("div",{id:n,className:"chart-area"})},k=t(79330),Z=t(28782),N="bar",M="column",D="pie",w="table",C=function(e){var n=e.option,t=e.groups,r=e.colors,a=e.name;switch(n){case w:return(0,c.jsx)(d,{groups:t,colors:r});case D:return(0,c.jsx)(x,{id:"group-pie-"+new Date,groups:t,colors:r,name:a});case N:return(0,c.jsx)(y,{id:"group-bar-"+new Date,groups:t,colors:r,name:a,horizontal:!0});default:return(0,c.jsx)(y,{id:"group-bar-"+new Date,groups:t,colors:r,name:a})}},E=function(e){var n=e.onClick,t=e.icon;return(0,c.jsx)("button",{className:"btn float-end visualizer-button",onClick:n,children:(0,c.jsx)(b.G,{icon:t,className:"col-gray"})})},A=function(e){var n=e.groups,t=e.colors,o=e.name,s=e.horizontal,l=(0,a.useState)(n.length>1?M:w),i=(0,r.Z)(l,2),u=i[0],d=i[1],h=(0,a.useCallback)((function(){return d(D)}),[d]),f=(0,a.useCallback)((function(){return d(w)}),[d]),m=(0,a.useCallback)((function(){return d(s?N:M)}),[d,s]),p=(0,a.useCallback)((function(e){return(0,c.jsx)(Z.ci,{error:e})}),[]);return(0,c.jsxs)(g.Z,{children:[(0,c.jsxs)(v.Z,{md:12,style:{height:"0",zIndex:100,position:"absolute",width:"100%",right:"0",top:"0.5rem"},children:[(0,c.jsx)(E,{icon:j.D37,onClick:h}),(0,c.jsx)(E,{icon:j.B3e,onClick:f}),(0,c.jsx)(E,{icon:s?j.gee:j.Ma4,onClick:m})]}),(0,c.jsx)(v.Z,{md:12,children:(0,c.jsx)(k.Z,{fallbackFunction:p,children:(0,c.jsx)(C,{option:u,groups:n,colors:t,name:o})})})]})}},74421:function(e,n,t){var r=t(29439),a=t(72791),o=t(80184);n.Z=function(e){var n=e.children,t=e.value,s=e.onValueChange,l=e.color,i=e.inline,c=(0,a.useState)((new Date).getTime()),u="checkbox-"+(0,r.Z)(c,1)[0];return(0,o.jsxs)("div",{className:"form-check form-switch",style:i?{display:"inline-block"}:{},children:[(0,o.jsx)("input",{id:u,type:"checkbox",className:"form-check-input bg-"+l,role:"switch",onChange:function(){s(!t)},checked:t}),(0,o.jsx)("label",{className:"form-check-label",htmlFor:u,children:n})]})}},2936:function(e,n,t){var r=t(74165),a=t(15861),o=t(29439),s=t(72791),l=t(89743),i=t(33778),c=t(80184);n.Z=function(e){var n=e.id,t=e.className,u=e.children,d=(0,s.useState)([]),h=(0,o.Z)(d,2),f=h[0],m=h[1],p=(0,s.useState)([]),x=(0,o.Z)(p,2),b=x[0],j=x[1],g=(0,i.C)(),v=g.onRender,y=g.onUnmount,k=g.context,Z=(0,s.useCallback)((0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v){e.next=2;break}return e.abrupt("return");case 2:return e.t0=m,e.next=5,v(n,"beforeElement",k);case 5:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=j,e.next=10,v(n,"afterElement",k);case 10:e.t3=e.sent,(0,e.t2)(e.t3);case 12:case"end":return e.stop()}}),e)}))),[m,j,n,v,k]);return(0,s.useEffect)((function(){return Z(),function(){y&&(m([]),j([]),y(n,"beforeElement"),y(n,"afterElement"))}}),[m,j,n,y,Z]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:f.join("")}}),(0,c.jsx)(l.Z,{id:n,className:t?"extendable "+t:"extendable",children:u}),(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:b.join("")}})]})}},27949:function(e,n,t){t.d(n,{aC:function(){return s},ym:function(){return o}});t(72791);var r=t(28282),a=t(80184),o=function(){return(0,a.jsxs)(r.Z,{className:"loading",children:[(0,a.jsx)(r.Z.Header,{children:(0,a.jsx)("h6",{className:"col-black",children:"..."})}),(0,a.jsx)(s,{})]})},s=function(e){var n=e.style;return(0,a.jsx)("div",{className:"chart-area loading",style:n,children:(0,a.jsx)(l,{})})},l=function(){return(0,a.jsx)("span",{className:"loader"})};n.ZP=l},98442:function(e,n,t){t.d(n,{AA:function(){return r},ET:function(){return o},Md:function(){return a},px:function(){return s}});var r=[{type:"hour",count:12,text:"12h"},{type:"hour",count:24,text:"24h"},{type:"day",count:7,text:"7d"},{type:"month",count:1,text:"30d"},{type:"all",text:"All"}],a={twoDecimals:{valueDecimals:2},zeroDecimals:{valueDecimals:0}},o=function(e){var n=[],t=[],r=[],a=[],o=[],s=[],l=[];return new Promise((function(i){var c=0,u=e.length;!function d(){for(var h=Math.min(c+1e3,u);c<h;c++){var f=e[c],m=f[0];n[c]=[m,f[1]],t[c]=[m,f[2]],r[c]=[m,f[3]],a[c]=[m,f[4]],o[c]=[m,f[5]],s[c]=[m,f[6]],l[c]=[m,f[7]]}c>=u?i({playersOnline:n,tps:t,cpu:r,ram:a,entities:o,chunks:s,disk:l}):setTimeout(d,10)}()}))},s={PLAYERS_ONLINE:{labels:{formatter:function(){return this.value+" P"}},softMin:0,softMax:2},TPS:{opposite:!0,labels:{formatter:function(){return this.value+" TPS"}},softMin:0,softMax:20},CPU:{opposite:!0,labels:{formatter:function(){return this.value+"%"}},softMin:0,softMax:100},RAM_OR_DISK:{labels:{formatter:function(){return this.value+" MB"}},softMin:0},ENTITIES:{opposite:!0,labels:{formatter:function(){return this.value+" E"}},softMin:0,softMax:2},CHUNKS:{labels:{formatter:function(){return this.value+" C"}},softMin:0}}}}]);
//# sourceMappingURL=8728.cb4a69c6.chunk.js.map
