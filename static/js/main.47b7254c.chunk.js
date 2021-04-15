(this["webpackJsonpreact-hooks-practice-pokemon-searcher"]=this["webpackJsonpreact-hooks-practice-pokemon-searcher"]||[]).push([[0],{123:function(e,t,c){},155:function(e,t,c){},156:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(0),s=c(49),r=c.n(s),o=c(130),i=c(53),j=c(170);var l=function(e){var t=e.pokemon,c=Object(a.useState)(!0),s=Object(i.a)(c,2),r=s[0],o=s[1],l=t.name,h=t.hp,d=t.sprites;return Object(n.jsx)(j.a,{children:Object(n.jsxs)("div",{onClick:function(){o((function(e){return!e}))},children:[Object(n.jsx)("div",{className:"image",children:Object(n.jsx)("img",{src:r?d.front:d.back,alt:l})}),Object(n.jsx)("div",{className:"content",children:Object(n.jsx)("div",{className:"header",children:l})}),Object(n.jsx)("div",{className:"extra content",children:Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"icon heartbeat red"}),h]})})]})})};var h=function(e){var t=e.pokemon.map((function(e){return Object(n.jsx)(l,{pokemon:e},e.id)}));return Object(n.jsx)(j.a.Group,{itemsPerRow:6,children:t})},d=c(97),b=c(114),m=c(169);var p=function(e){var t=e.onAddPokemon,c=Object(a.useState)({name:"",hp:"",frontUrl:"",backUrl:""}),s=Object(i.a)(c,2),r=s[0],o=s[1];function j(e){o(Object(b.a)(Object(b.a)({},r),{},Object(d.a)({},e.target.name,e.target.value)))}return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Add a Pokemon!"}),Object(n.jsxs)(m.a,{onSubmit:function(){var e={name:r.name,hp:r.hp,sprites:{front:r.frontUrl,back:r.backUrl}};fetch("https://pokemondb01.herokuapp.com/pokemon",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then(t)},children:[Object(n.jsxs)(m.a.Group,{widths:"equal",children:[Object(n.jsx)(m.a.Input,{fluid:!0,label:"Name",placeholder:"Name",name:"name",value:r.name,onChange:j}),Object(n.jsx)(m.a.Input,{fluid:!0,label:"hp",placeholder:"hp",name:"hp",value:r.hp,onChange:j}),Object(n.jsx)(m.a.Input,{fluid:!0,label:"Front Image URL",placeholder:"url",name:"frontUrl",value:r.frontUrl,onChange:j}),Object(n.jsx)(m.a.Input,{fluid:!0,label:"Back Image URL",placeholder:"url",name:"backUrl",value:r.backUrl,onChange:j})]}),Object(n.jsx)(m.a.Button,{children:"Submit"})]})]})};var O=function(e){var t=e.searchTerm,c=e.onChangeSearch;return Object(n.jsx)("div",{className:"ui search",children:Object(n.jsxs)("div",{className:"ui icon input",children:[Object(n.jsx)("input",{className:"prompt",value:t,onChange:function(e){c(e.target.value)}}),Object(n.jsx)("i",{className:"search icon"})]})})},u=c(168),x=c(64);c(123);var f=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(""),j=Object(i.a)(r,2),l=j[0],d=j[1];Object(a.useEffect)((function(){fetch("https://pokemondb01.herokuapp.com/pokemon").then((function(e){return e.json()})).then(s)}),[]);var b=c.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return Object(n.jsxs)(u.a,{children:[Object(n.jsx)("a",{href:"https://jaimeportfolio.herokuapp.com/",children:Object(n.jsx)("div",{className:"btn",children:Object(n.jsx)("p",{className:"p",children:"X"})})}),Object(n.jsx)(x.b,{to:"/",children:Object(n.jsx)("div",{className:"btn2",children:Object(n.jsx)("p",{children:"X"})})}),Object(n.jsx)("h1",{children:"Pokemon Searcher"}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"* Data may take a few seconds to fetch *"}),Object(n.jsx)(p,{onAddPokemon:function(e){s([].concat(Object(o.a)(c),[e]))}}),Object(n.jsx)("br",{}),Object(n.jsx)(O,{searchTerm:l,onChangeSearch:d}),Object(n.jsx)("br",{}),Object(n.jsx)(h,{pokemon:b})]})},k=c.p+"static/media/pokemongif.6f226267.gif";var v=function(){return Object(n.jsxs)("div",{className:"intro",children:[Object(n.jsx)("a",{href:"https://jaimeportfolio.herokuapp.com/",children:Object(n.jsx)("div",{className:"btn",children:Object(n.jsx)("p",{className:"p",children:"X"})})}),Object(n.jsxs)("div",{className:"intro__left",children:[Object(n.jsx)("img",{className:"gif",src:k,alt:""}),Object(n.jsx)("h1",{className:"h1title demo",children:"DEMO"})]}),Object(n.jsxs)("div",{className:"intro__right",children:[Object(n.jsx)("h1",{className:"h1title",children:"Pokemon Searcher"}),Object(n.jsx)("h2",{className:"h1title",children:"Project Goals:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Create an index displaying Pokemon 'cards'"}),Object(n.jsx)("li",{children:"Render each Pokemon name, sprite, and hp in a card"}),Object(n.jsx)("li",{children:"When clicked, the card should toggle between displaying the front and back sprites"}),Object(n.jsx)("li",{children:"Allow users to search a Pokemon by its name in order to narrow down the cards shown on the page"}),Object(n.jsx)("li",{children:"Wire up the form to add Pokemon."}),Object(n.jsx)("li",{children:"When a new Pokemon is added, it should show on the page without having to refresh."})]}),Object(n.jsx)("h2",{className:"h1title",children:"Project Requirements:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Components using state and props"}),Object(n.jsx)("li",{children:"Re-renders based on client-side events"}),Object(n.jsx)("li",{children:"Can both get data from, and post data to the json server/database"})]}),Object(n.jsx)(x.b,{to:"/app",children:Object(n.jsx)("button",{className:"introbutton",children:"View Final Product"})}),Object(n.jsx)("a",{href:"https://github.com/jaimedavid01/react-hooks-practice-pokemon-searcher",children:Object(n.jsx)("button",{className:"introbutton",children:"View Code"})})]})]})},g=c(10);var N=function(){return Object(n.jsx)(x.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(g.c,{children:[Object(n.jsx)(g.a,{path:"/app",children:Object(n.jsx)(f,{})}),Object(n.jsx)(g.a,{path:"/",children:Object(n.jsx)(v,{})})]})})})};c(154),c(155);r.a.render(Object(n.jsx)(N,{}),document.getElementById("root"))}},[[156,1,2]]]);
//# sourceMappingURL=main.47b7254c.chunk.js.map