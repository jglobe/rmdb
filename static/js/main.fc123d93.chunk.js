(this.webpackJsonprick_and_morty_bd=this.webpackJsonprick_and_morty_bd||[]).push([[0],{37:function(e,t,a){e.exports=a(76)},46:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),i=a(11),s=a(12),u=a(16),o=a(34),p={characters:{list:[],paginator:{prevPageUrl:null,nextPageUrl:null,currentPage:null,pageCount:null}},locations:{list:[],paginator:{prevPageUrl:null,nextPageUrl:null,currentPage:null,pageCount:null}},episodes:{list:[],paginator:{prevPageUrl:null,nextPageUrl:null,currentPage:null,pageCount:null}}};var m=Object(u.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CHARACTERS":return Object(s.a)(Object(s.a)({},e),{},{characters:{list:t.payload.characters,paginator:t.payload.paginator}});case"SET_LOCATIONS":return Object(s.a)(Object(s.a)({},e),{},{locations:{list:t.payload.locations,paginator:t.payload.paginator}});case"SET_EPISODES":return Object(s.a)(Object(s.a)({},e),{},{episodes:{list:t.payload.episodes,paginator:t.payload.paginator}});default:return e}}),Object(u.a)(o.a)),f=a(5),d=a(3),g=(a(46),[{path:"/rmdb/characters",title:"Characters"},{path:"/rmdb/episodes",title:"Episodes"},{path:"/rmdb/locations",title:"Locations"}]);var E=function(){return r.a.createElement("div",{className:"navigation"},g.map((function(e){return r.a.createElement(f.c,{key:e.path,to:e.path,className:"navigation__link",activeClassName:"navigation__link_active"},e.title)})))};a(48);var v=function(){return r.a.createElement("div",{className:"header"},r.a.createElement(f.b,{className:"header__link",to:"/rmdb/"},"Rick & Morty DB"),r.a.createElement(E,null))};a(49);var h=function(){return r.a.createElement("div",{className:"background"},r.a.createElement("h1",null,"\u201cI turned myself into a pickle, Morty! I\u2019m Pickle Ri-i-i-ick!\u201d"))},b=a(1),N=a.n(b),P=a(4),y=a(35),x=a(36),O=a.n(x),_="https://rickandmortyapi.com/api/",j=new function e(){var t=this;Object(y.a)(this,e),this.instance=O.a.create({baseURL:_}),this.getCharactersInfoByPage=function(){var e=Object(P.a)(N.a.mark((function e(a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instance.get("character/?page=".concat(a));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getCharacter=function(){var e=Object(P.a)(N.a.mark((function e(a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instance.get("character/".concat(a));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getLocationsInfoByPage=function(){var e=Object(P.a)(N.a.mark((function e(a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instance.get("location/?page=".concat(a));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getLocation=function(){var e=Object(P.a)(N.a.mark((function e(a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instance.get("location/".concat(a));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getEpisodesInfoByPage=function(){var e=Object(P.a)(N.a.mark((function e(a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instance.get("episode/?page=".concat(a));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getEpisode=function(){var e=Object(P.a)(N.a.mark((function e(a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.instance.get("episode/".concat(a));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getEpisodeName=function(){var e=Object(P.a)(N.a.mark((function e(a){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.instance.defaults.baseURL="",e.next=3,t.instance.get(a);case 3:return n=e.sent,t.instance.defaults.baseURL=_,e.abrupt("return",n.data.name);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){var t=Object(P.a)(N.a.mark((function t(a){var n,r,c,l;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=1,e&&(r=e.split("="),n=Number(r[r.length-1])),t.next=4,j.getCharactersInfoByPage(n);case 4:return c=t.sent,l=c.results,t.next=8,Promise.all(l.map(function(){var e=Object(P.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getEpisodeName(t.episode[0]);case 2:a=e.sent,t.firstEpisodeName=a;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 8:a({type:"SET_CHARACTERS",payload:{characters:l,paginator:{prevPageUrl:c.info.prev,nextPageUrl:c.info.next,pageCount:c.info.pages,currentPage:n}}});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}a(68);var w=function(e){var t=e.character,a="statusCircle";return"Alive"===t.status?a+=" alive":"Dead"===t.status&&(a+=" dead"),r.a.createElement("div",{className:"character"},r.a.createElement("div",{className:"imgBlock"},r.a.createElement("img",{src:t.image,alt:t.name})),r.a.createElement("div",{className:"textBlock"},r.a.createElement("p",{className:"name"},r.a.createElement(f.b,{to:"/rmdb/character/".concat(t.id)},t.name)),r.a.createElement("p",{className:"status"},r.a.createElement("span",{className:a}),r.a.createElement("span",{className:"statusText"},t.status),r.a.createElement("span",null,"-"),r.a.createElement("span",{className:"species"},t.species)),r.a.createElement("div",{className:"locationBlock"},r.a.createElement("p",{className:"title"},"Last known location:"),r.a.createElement("p",{className:"location"},t.location.name)),r.a.createElement("div",{className:"firstSeenBlock"},r.a.createElement("p",{className:"title"},"First seen in:"),r.a.createElement("p",{className:"firstEpisode"},t.firstEpisodeName))))},C=(a(69),function(){return r.a.createElement("div",{className:"spinner"})});a(70);var U=function(e){var t=e.currentPage,a=e.pageCount,n=e.onNextPage,c=e.onPrevPage;return r.a.createElement("div",{className:"paginator"},r.a.createElement("button",{disabled:1===t,onClick:c},"Back"),r.a.createElement("span",null,t),r.a.createElement("button",{disabled:t===a,onClick:n},"Next"))};a(71);var S=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.characters}));return r.a.useEffect((function(){e(k())}),[e]),t.list.length?r.a.createElement("div",{className:"page"},r.a.createElement("h1",{className:"page__title"},"Characters"),r.a.createElement("div",{className:"page__content"},r.a.createElement("ul",null,t.list.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(w,{character:e}))}))),r.a.createElement(U,{currentPage:t.paginator.currentPage,pageCount:t.paginator.pageCount,onPrevPage:function(){e(k(t.paginator.prevPageUrl))},onNextPage:function(){e(k(t.paginator.nextPageUrl))}}))):r.a.createElement(C,null)},B=a(14),I=function(){var e=Object(d.f)().id,t=Object(n.useState)(null),a=Object(B.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(P.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getCharacter(t);case 2:a=e.sent,l(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}(e)}),[e]),c?r.a.createElement("div",{className:"page"},r.a.createElement("h1",{className:"page__title"},c.name),r.a.createElement("div",{className:"page__content"},r.a.createElement("div",null,r.a.createElement("img",{src:c.image,alt:c.name})),r.a.createElement("div",null,"Status: ",c.status),r.a.createElement("div",null,"Species: ",c.species),r.a.createElement("div",null,"Type: ",c.type),r.a.createElement("div",null,"Gender: ",c.gender),r.a.createElement("div",null,"Origin: ",r.a.createElement("a",{href:c.origin.url},c.origin.name)),r.a.createElement("div",null,"Created: ",c.created))):r.a.createElement(C,null)};function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){var t=Object(P.a)(N.a.mark((function t(a){var n,r,c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=1,e&&(r=e.split("="),n=Number(r[r.length-1])),t.next=4,j.getEpisodesInfoByPage(n);case 4:c=t.sent,a({type:"SET_EPISODES",payload:{episodes:c.results,paginator:{prevPageUrl:c.info.prev,nextPageUrl:c.info.next,pageCount:c.info.pages,currentPage:n}}});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}a(72);var T=function(e){var t=e.episode;return r.a.createElement("div",{className:"Episode"},r.a.createElement(f.b,{to:"/rmdb/episode/".concat(t.id)},t.name))};var R=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.episodes}));return r.a.useEffect((function(){e(L())}),[e]),t.list.length?r.a.createElement("div",{className:"page"},r.a.createElement("h1",{className:"page__title"},"Episodes"),r.a.createElement("div",{className:"page__content"},r.a.createElement("ul",null,t.list.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(T,{episode:e}))}))),r.a.createElement(U,{currentPage:t.paginator.currentPage,pageCount:t.paginator.pageCount,onNextPage:function(){e(L(t.paginator.nextPageUrl))},onPrevPage:function(){e(L(t.paginator.prevPageUrl))}}))):r.a.createElement(C,null)},A=function(){var e=Object(d.f)().id,t=Object(n.useState)(null),a=Object(B.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(P.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getEpisode(t);case 2:a=e.sent,l(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}(e)}),[e]),c?r.a.createElement("div",{className:"page"},r.a.createElement("h1",{className:"page__title"},c.name),r.a.createElement("div",{className:"page__content"},r.a.createElement("div",null,"Episode number: ",c.id),r.a.createElement("div",null,c.episode),r.a.createElement("div",null,"Air date: ",c.air_date),r.a.createElement("div",null,"Created: ",c.created))):r.a.createElement(C,null)};function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){var t=Object(P.a)(N.a.mark((function t(a){var n,r,c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=1,e&&(r=e.split("="),n=Number(r[r.length-1])),t.next=4,j.getLocationsInfoByPage(n);case 4:c=t.sent,a({type:"SET_LOCATIONS",payload:{locations:c.results,paginator:{prevPageUrl:c.info.prev,nextPageUrl:c.info.next,pageCount:c.info.pages,currentPage:n}}});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}a(73);var F=function(e){var t=e.location;return r.a.createElement("div",{className:"Location"},r.a.createElement(f.b,{to:"/rmdb/location/".concat(t.id)},t.name))};var G=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.locations}));return r.a.useEffect((function(){e(D())}),[e]),t.list.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page"},r.a.createElement("h1",{className:"page__title"},"Locations"),r.a.createElement("div",{className:"page__content"},r.a.createElement("ul",null,t.list.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(F,{location:e}))}))),r.a.createElement(U,{currentPage:t.paginator.currentPage,pageCount:t.paginator.pageCount,onNextPage:function(){e(D(t.paginator.nextPageUrl))},onPrevPage:function(){e(D(t.paginator.prevPageUrl))}})))):r.a.createElement(C,null)},H=function(){var e=Object(d.f)().id,t=Object(n.useState)(null),a=Object(B.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(P.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getLocation(t);case 2:a=e.sent,l(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}(e)}),[e]),c?r.a.createElement("div",{className:"page"},r.a.createElement("h1",{className:"page__title"},c.name),r.a.createElement("div",{className:"page__content"},r.a.createElement("div",null,"Type: ",c.type),r.a.createElement("div",null,"Dimension: ",c.dimension),r.a.createElement("div",null,"Created: ",c.created))):r.a.createElement(C,null)};a(74);var J=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("a",{className:"footer__link",href:"https://github.com/jglobe/rmdb"},"View on Github"))},M=(a(75),function(){return r.a.createElement(f.a,null,r.a.createElement(v,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/rmdb"},r.a.createElement(h,null)),r.a.createElement(d.a,{path:"/rmdb/characters"},r.a.createElement(S,null)),r.a.createElement(d.a,{path:"/rmdb/character/:id"},r.a.createElement(I,null)),r.a.createElement(d.a,{path:"/rmdb/episodes"},r.a.createElement(R,null)),r.a.createElement(d.a,{path:"/rmdb/episode/:id"},r.a.createElement(A,null)),r.a.createElement(d.a,{path:"/rmdb/locations"},r.a.createElement(G,null)),r.a.createElement(d.a,{path:"/rmdb/location/:id"},r.a.createElement(H,null))),r.a.createElement(J,null))});l.a.render(r.a.createElement(i.a,{store:m},r.a.createElement(M,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.fc123d93.chunk.js.map