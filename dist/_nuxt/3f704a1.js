(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(n,t,o){"use strict";function e(){var n=navigator.userAgent||navigator.vendor||window.opera;return/windows phone/i.test(n)?"Windows Phone":/android/i.test(n)?"Android":/iPad|iPhone|iPod/.test(n)&&!window.MSStream?"iOS":"unknown"}o.d(t,"a",(function(){return e}))},124:function(n,t,o){"use strict";o(37),o(38),o(96),o(83);var e=o(1),r=o(168),c=o(169),l={"ru-ru":r,"en-us":c};e.a.filter("localize",(function(n){var t="en",o="RU",e=window.navigator?window.navigator.language||window.navigator.systemLanguage||window.navigator.userLanguage:t+"-"+o,r=e.search("-")>0?e.substring(0,e.search("-")).toLowerCase():e.toLowerCase(),c=e.search("-")>0?e.substring(e.search("-")+1,e.length).toLowerCase():o,d="".concat(r,"-").concat(c);return l[d]?l[d][n]||"[Localize error] key: ".concat(n," not found"):(console.warn("default language: en-US"),l["en-us"][n]||"[Localize error] key: ".concat(n," not found"))}))},168:function(n){n.exports=JSON.parse('{"totalAmount":"Общая сумма"}')},169:function(n){n.exports=JSON.parse('{"totalAmount":"Total amount"}')},172:function(n,t,o){"use strict";var e={name:"LayoutEmpty"},r=o(23),component=Object(r.a)(e,(function(){var n=this.$createElement,t=this._self._c||n;return t("main",{staticClass:"main"},[t("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},173:function(n,t,o){"use strict";var e={name:"guest"},r=o(23),component=Object(r.a)(e,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("main",{staticClass:"main"},[t("Nuxt")],1)])}),[],!1,null,"634db0ac",null);t.a=component.exports},174:function(n,t,o){o(175),n.exports=o(176)},224:function(n,t,o){var content=o(225);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,o(67).default)("a065c860",content,!0,{sourceMap:!1})},225:function(n,t,o){var e=o(66)(!1);e.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap);"]),e.push([n.i,'body,html{margin:0;padding:0;font-family:"Montserrat",sans-serif}.container{margin:0 auto}',""]),n.exports=e}},[[174,6,1,7]]]);