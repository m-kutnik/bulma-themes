(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"/0O8":function(t,e,s){"use strict";var a=s("/FO3"),n=s.n(a);n.a},"/FO3":function(t,e,s){},"80uJ":function(t,e,s){"use strict";var a=s("cN6/"),n=s.n(a);n.a},"8a/i":function(t,e,s){"use strict";var a=s("9dxv"),n=s.n(a);n.a},"9dxv":function(t,e,s){},SD1K:function(t,e,s){},UGAC:function(t,e,s){"use strict";var a=s("svdW"),n=s.n(a);n.a},VLIV:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"generator"},[s("div",{staticClass:"generator-settings",attrs:{"data-simplebar":""}},[s("tabs",[s("tab",{attrs:{selected:!0,name:"Theme Color",icon:"fas fa-adjust"}},[s("generator-theme-color")],1),s("tab",{attrs:{name:"Colors",icon:"fas fa-palette"}},[s("generator-colors")],1),s("tab",{attrs:{name:"Custom Colors",icon:"fas fa-paint-brush"}},[s("generator-custom-colors")],1),s("tab",{attrs:{name:"Appearance",icon:"fas fa-ruler-combined"}},[s("generator-appearance")],1),s("tab",{attrs:{name:"Advanced",icon:"fas fa-cogs"}},[s("generator-advanced")],1),s("tab",{attrs:{name:"Save/Export",icon:"fas fa-save"}},[s("generator-export")],1)],1)],1),s("div",{staticClass:"preview"},[t._m(0),s("div",{staticClass:"preview-content",attrs:{"data-simplebar":""}},[s("preview",{attrs:{source:t.$store.state.themeGenerator}})],1)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"preview-bar"},[s("i",{staticClass:"fas fa-angle-up is-size-3"}),s("span",{staticClass:"is-size-6"},[t._v("Preview")])])}],o=(s("VRzm"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"title"},[t._v("Custom Colors")]),s("h2",{staticClass:"subtitle"},[t._v('Create your color palette. Just provide your color name and click "Add"')]),s("h2",{staticClass:"subtitle"},[t._v('Get access to your colors by "is-(name)" CSS class')]),s("br"),s("div",{staticClass:"color-add has-text-centered"},[s("div",{staticClass:"field has-addons"},[s("div",{staticClass:"control is-expanded"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",placeholder:"Color name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),s("div",{staticClass:"control"},[s("button",{staticClass:"button is-primary",attrs:{type:"submit"},on:{click:function(e){t.pushCustomColor()}}},[t._v("Add")])])])]),s("br"),s("br"),t._l(t.customColors,function(e,a){return s("div",{key:a,staticClass:"column has-text-centered color"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("h3",{staticClass:"title is-capitalized"},[t._v(t._s(a)+" color")])]),s("div",{staticClass:"column has-text-left-desktop"},[s("color-picker",{attrs:{color:e,index:a,type:t.type,event:t.event},on:{"update:event":function(e){t.event=e}}})],1)])])})],2)}),i=[],r=(s("f3/d"),{data:function(){return{name:"",type:"customColors",event:""}},computed:{customColors:function(){return this.$store.state.themeGenerator.customColors}},methods:{updateColor:function(){this.$forceUpdate},pushCustomColor:function(){this.name&&(this.$store.dispatch("SET_COLOR",{type:"customColors",index:this.name.toLowerCase(),color:"#333"}),this.name="")}}}),c=r,l=(s("jmwS"),s("KHd+")),u=Object(l["a"])(c,o,i,!1,null,"045138bd",null),d=u.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"title"},[t._v("Appearance")]),s("h2",{staticClass:"subtitle"},[t._v("Select main theme color")]),s("br"),s("br"),s("br"),s("div",{staticClass:"column has-text-centered color"},[s("div",{staticClass:"columns"},[t._m(0),s("div",{staticClass:"column has-text-left-desktop"},[s("input",{staticClass:"input",attrs:{id:"radius",type:"number",name:"radius"},domProps:{value:t.borderRadius},on:{input:t.changeBorderRadius}})])])])])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column"},[s("h3",{staticClass:"title is-capitalized"},[t._v("Border Radius")])])}],v={computed:{borderRadius:function(){return this.$store.state.themeGenerator.appearance.borderRadius}},methods:{changeBorderRadius:function(t){this.$store.dispatch("SET_RADIUS",t.target.value)}}},p=v,f=(s("UGAC"),Object(l["a"])(p,m,h,!1,null,"4ed6f50f",null)),C=f.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"title"},[t._v("Theme Color")]),s("h2",{staticClass:"subtitle"},[t._v("Select main theme color")]),s("section",{staticClass:"generator-container"},[s("div",{staticClass:"input-group light",on:{click:function(e){t.changeTheme("light")}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.themeColor,expression:"themeColor"}],attrs:{id:"light",name:"theme",type:"radio",value:"light"},domProps:{checked:t._q(t.themeColor,"light")},on:{change:function(e){t.themeColor="light"}}}),t._m(0)]),s("div",{staticClass:"input-group dark",on:{click:function(e){t.changeTheme("dark")}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.themeColor,expression:"themeColor"}],attrs:{id:"dark",name:"theme",type:"radio",value:"dark"},domProps:{checked:t._q(t.themeColor,"dark")},on:{change:function(e){t.themeColor="dark"}}}),t._m(1)])])])},b=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"light"}},[s("h2",{staticClass:"is-size-3"},[t._v("Light Theme")]),s("p",[t._v("Standard, light theme, default in Bulma. The best choice in most cases.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{attrs:{for:"dark"}},[s("h2",{staticClass:"is-size-3"},[t._v("Dark Theme")]),s("p",[t._v("Elegant, dark theme. "),s("i",[t._v("(Dark theme inverts Bulma's Shades Map)")])])])}],g={created:function(){this.themeColor=this.$store.state.themeGenerator.theme},methods:{changeTheme:function(t){this.$store.dispatch("SET_THEME",t)}}},y=g,x=(s("/0O8"),Object(l["a"])(y,_,b,!1,null,"3403769e",null)),S=x.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"title"},[t._v("Advanced Settings")]),s("h2",{staticClass:"subtitle"},[t._v("Be careful when changing these settings")]),s("br"),s("br"),s("br"),s("div",{staticClass:"column has-text-centered color"},[s("div",{staticClass:"columns"},[t._m(0),s("div",{staticClass:"column has-text-left-desktop"},[s("input",{staticClass:"input",attrs:{id:"font",type:"text",name:"font",placeholder:"Your Font Family"},domProps:{value:t.fontFamily},on:{input:t.changeFontFamily}})])])]),s("div",{staticClass:"column has-text-centered color"},[s("div",{staticClass:"columns"},[t._m(1),s("div",{staticClass:"column has-text-left-desktop"},[s("textarea",{staticClass:"textarea",attrs:{placeholder:"Your CSS"},domProps:{value:t.customCSS},on:{input:t.changeCustomCSS}})])])])])},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column"},[s("h3",{staticClass:"title is-capitalized"},[t._v("Font Family")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column"},[s("h3",{staticClass:"title is-capitalized"},[t._v("Custom CSS")])])}],k=s("9/5/"),$=s.n(k),T={computed:{fontFamily:function(){return this.$store.state.themeGenerator.adv.fontFamily},customCSS:function(){return this.$store.state.themeGenerator.adv.customCSS}},methods:{changeFontFamily:function(t){this.dispatchMutation("SET_FONTFAMILY",t.target.value,this)},changeCustomCSS:function(t){this.dispatchMutation("SET_CUSTOMCSS",t.target.value,this)},dispatchMutation:$()(function(t,e,s){s.$store.dispatch(t,e)},500)}},G=T,F=(s("mmb9"),Object(l["a"])(G,w,E,!1,null,"17e04a6f",null)),O=F.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"title"},[t._v("Export")]),s("h2",{staticClass:"subtitle"},[t._v("Here you can export your Theme/Settings")]),s("br"),s("br"),s("br"),s("div",{staticClass:"column has-text-centered color"},[s("div",{staticClass:"columns"},[t._m(0),s("div",{staticClass:"column"},[s("button",{staticClass:"button is-primary is-outlined",on:{click:function(e){t.download("settings.json",t.theme)}}},[t._v("Export")])])]),s("div",{staticClass:"columns"},[t._m(1),s("div",{staticClass:"column"},[s("button",{staticClass:"button is-primary",on:{click:t.generate}},[t._v("Download")])])])])])},A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column"},[s("h3",{staticClass:"title is-capitalized"},[t._v("Export Settings")]),s("h3",{staticClass:"subtitle"},[t._v("Export your settings.json")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column"},[s("h3",{staticClass:"title is-capitalized"},[t._v("Download theme")]),s("h3",{staticClass:"subtitle"},[t._v("Generate your Bulma theme")])])}],z={computed:{theme:function(){return JSON.stringify(this.$store.state.themeGenerator)}},methods:{generate:function(t){var e=this;t.target.disabled=!0,t.target.classList.add("is-loading"),window.fetch("https://us-central1-bulmagenerator.cloudfunctions.net/generate",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:this.theme}).then(function(t){return t.text()}).then(function(t){return e.download("style.css",t)}).then(function(){t.target.disabled=!1,t.target.classList.remove("is-loading")}).catch(function(t){return console.log(t)})},download:function(t,e){var s=document.createElement("a");s.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),s.setAttribute("download",t),s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s)}}},R=z,M=(s("iFok"),Object(l["a"])(R,j,A,!1,null,"f2f739d6",null)),P=M.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"title"},[t._v("Colors")]),s("h2",{staticClass:"subtitle"},[t._v("Modify default colors")]),s("br"),s("br"),s("br"),t._l(t.colors,function(e,a){return s("div",{key:a,staticClass:"column has-text-centered color"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("h3",{staticClass:"title is-capitalized"},[t._v(t._s(a)+" color")])]),s("div",{staticClass:"column has-text-left-desktop"},[s("color-picker",{attrs:{color:e,index:a,type:t.type}})],1)])])})],2)},D=[],L={data:function(){return{type:"colors"}},computed:{colors:function(){return this.$store.state.themeGenerator.colors}}},N=L,U=(s("80uJ"),Object(l["a"])(N,B,D,!1,null,"72dfde48",null)),J=U.exports,q={name:"Generator",components:{GeneratorCustomColors:d,GeneratorAppearance:C,GeneratorThemeColor:S,GeneratorAdvanced:O,GeneratorExport:P,GeneratorColors:J},data:function(){return{previewStatus:!1}},created:function(){window.onbeforeunload=function(){return"Are you sure you want to close the window? Unsaved changes will be lost"}},destroyed:function(){window.onbeforeunload=null}},I=q,H=(s("8a/i"),Object(l["a"])(I,a,n,!1,null,"0b937360",null));e["default"]=H.exports},XEq2:function(t,e,s){},"cN6/":function(t,e,s){},iFok:function(t,e,s){"use strict";var a=s("XEq2"),n=s.n(a);n.a},jmwS:function(t,e,s){"use strict";var a=s("zE+j"),n=s.n(a);n.a},mmb9:function(t,e,s){"use strict";var a=s("SD1K"),n=s.n(a);n.a},svdW:function(t,e,s){},"zE+j":function(t,e,s){}}]);
//# sourceMappingURL=0.60e824d5.js.map