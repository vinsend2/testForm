(function(e){function t(t){for(var r,o,a=t[0],u=t[1],c=t[2],s=0,v=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(v.length)v.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(r=!1)}r&&(l.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},i={app:0},l=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-1020e80c":"dd5d4aa7","chunk-174620fe":"c37ee606"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-1020e80c":1,"chunk-174620fe":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1020e80c":"d1acfc17","chunk-174620fe":"89a83714"}[e]+".css",i=u.p+r,l=document.getElementsByTagName("link"),a=0;a<l.length;a++){var c=l[a],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===i))return t()}var v=document.getElementsByTagName("style");for(a=0;a<v.length;a++){c=v[a],s=c.getAttribute("data-href");if(s===r||s===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=r,delete o[e],p.parentNode.removeChild(p),n(l)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var l=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=l);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=a(e);var v=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;v.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",v.name="ChunkLoadError",v.type=r,v.request=o,n[1](v)}i[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var v=0;v<c.length;v++)t(c[v]);var p=s;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";n("2dad")},"2dad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"/form"}},[e._v("New client")]),n("router-link",{attrs:{to:"/simon-say"}},[e._v("Simon Says")])],1),n("router-view")],1)},i=[],l=(n("5c0b"),n("2877")),a={},u=Object(l["a"])(a,o,i,!1,null,null,null),c=u.exports,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("div",{staticClass:"home__content-block"},[r("h1",[e._v("Test task Junior FrontDev")]),r("span",{staticClass:"home__text-block"},[r("p",[e._v(" Тестовое задание включает два подзадания, которые позволят вам продемонстрировать ваши навыки. ")]),r("ol",[r("li",[e._v("Сверстать форму создания Клиента")])]),r("p",[r("strong",[e._v("Используемые технологии:")])]),r("ul",[r("li",[e._v("Vue.js")]),r("li",[e._v("Vuelidate")]),r("li",[e._v("Sass")])]),r("p",[r("strong",[e._v("Атрибуты формы:")])]),r("ul",[r("li",[e._v("Фамилия*")]),r("li",[e._v("Имя*")]),r("li",[e._v("Отчество")]),r("li",[e._v("Дата рождения*")]),r("li",[e._v("Номер телефона* (11 цифр. Начинается с 7)")]),r("li",[e._v("Пол")]),r("li",[e._v(" Группа клиентов*. (Мультиселектор). Значения: [VIP, Проблемные, ОМС] ")]),r("li",[e._v(" Лечащий врач. (Cелектор). Значения: [Иванов, Захаров, Чернышева] ")]),r("li",[e._v("Не отправлять СМС. (Чекбокс)")])]),r("p",[r("strong",[e._v("Адрес:")])]),r("ul",[r("li",[e._v("Индекс")]),r("li",[e._v("Страна")]),r("li",[e._v("Область")]),r("li",[e._v("Город*")]),r("li",[e._v("Улица")]),r("li",[e._v("Дом")])]),r("p",[r("strong",[e._v("Паспорт:")])]),r("ul",[r("li",[e._v(" Тип документа*. (Cелектор). Значения: [Паспорт, Свидетельство о рождении, Вод. удостоверение] ")]),r("li",[e._v("Серия")]),r("li",[e._v("Номер")]),r("li",[e._v("Кем выдан")]),r("li",[e._v("Дата выдачи* *"),r("em",[e._v("Поле обязательное для заполнения.")])])]),r("p",[r("strong",[e._v("Описание задания:")])]),r("ul",[r("li",[e._v("Дизайн и внешний вид формы вы выбираете самостоятельно.")]),r("li",[e._v(" Использовать какие-либо сторонние (CSS/JS/Vue/Etc) библиотеки, кроме указанных в задании не разрашается ")]),r("li",[e._v(" Необходимо осуществлять валидацию данных формы и выводить ошибки пользователю при их наличии. Место выведения, формат и текст вы определяете самостоятельно. ")]),r("li",[e._v(" При отсутствии ошибок, необходимо показать сообщение о том, что новый клиент успешно создан. ")]),r("li",[e._v("Форма должна быть адаптивной.")]),r("li",[e._v("Обратите особое внимание на UI/UX и визуальный вид формы.")])]),r("ol",{attrs:{start:"2"}},[r("li",[e._v("Написать игру Simon The Game")])]),r("p",[r("strong",[e._v("Используемые технологии:")]),e._v(" Vue.js")]),r("p",[r("strong",[e._v("Правила игры")])]),r("ul",[r("li",[e._v(" Игровое поле состоят из 4 квадратов / кнопок, каждый из которых производит определенный тон и «загорается» при нажатии. ")]),r("li",[e._v(" Раунд в игре состоит из устройства, освещающего одну или несколько кнопок в случайном порядке. После чего игрок должен воспроизвести этот порядок, нажимая кнопки. ")]),r("li",[e._v(" Если игрок успешно воспроизводит последовательность, то они переходят к следующему раунду. ")]),r("li",[e._v(" Если игрок не воспроизводит последовательность, то игра окончена (уведомление должно отображаться для пользователя). ")]),r("li",[e._v(" С каждым раундом количество кнопок (последовательность) увеличивается. ")])]),r("p",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Simon_(game)"}},[e._v("Дополнительная информация об игре")]),r("a",{attrs:{href:"http://www.kellyking.me/projects/simon/"}},[e._v("Пример игры в действии")])]),r("p",[r("strong",[e._v("Функциональность")])]),r("ul",[r("li",[e._v(" При воспроизведении последовательности кнопки / квадрат должны «загореться». ")]),r("li",[e._v(" Каждая кнопка / квадрат должны издавать уникальный звук во время игры - вы можете использовать те же аудиофайлы, которые используются для этой версии игры Simon ")])]),r("p",[r("strong",[e._v("Должно быть 3 уровня сложности - легкий, нормальный и сложный")])]),r("ul",[r("li",[e._v(" Легкий: время между каждой кнопкой в последовательности должно быть 1,5 сек ")]),r("li",[e._v(" Средний: время между каждой кнопкой в последовательности должно быть 1,0 сек. ")]),r("li",[e._v(" Сложный: время между каждой кнопкой в последовательности должно быть 0,4 сек. ")])]),r("p",[r("strong",[e._v("Дизайн")]),e._v(" Время на это задание должно быть потрачено на функциональность, а не на дизайн, поэтому, пожалуйста, следуйте основному дизайну игры. ")]),r("p",[e._v("Результаты")]),r("ol",[r("li",[e._v(" Два завершенных проекта следует выложить на GitHub и задеплоить на GitHub Pages. ")]),r("li",[e._v(" Результатом выполнения будут четыре ссылки, которые нужно отправить нам. ")]),r("li",[e._v("В обоих задачах Vue.config.devtools должен быть равен true.")])])])])])}],f={name:"Home"},_=f,d=(n("21bb"),Object(l["a"])(_,v,p,!1,null,null,null)),m=d.exports;r["a"].use(s["a"]);var h=[{path:"/",name:"Home",component:m},{path:"/form",name:"About",component:function(){return n.e("chunk-174620fe").then(n.bind(null,"c109"))}},{path:"/simon-say",name:"Simon Say",component:function(){return n.e("chunk-1020e80c").then(n.bind(null,"4899"))}}],g=new s["a"]({mode:"history",base:"/",routes:h}),b=g,y=n("1dce"),k=n.n(y);r["a"].use(k.a),r["a"].config.productionTip=!1,r["a"].config.devtools=!0,new r["a"]({router:b,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.944ea275.js.map