(window["webpackJsonpsong-features-app"]=window["webpackJsonpsong-features-app"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=(a(9),a(1)),s="https://song-explorer-api.herokuapp.com";function i(e){var t=Object(n.useState)(!0),a=Object(o.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)({}),w=Object(o.a)(i,2),N=w[0],F=w[1];return Object(n.useEffect)(function(){fetch(s+"/tracks/features?id="+e.id).then(function(e){return e.json()}).then(function(e){F(e),c(!1)}).catch(function(e){return console.log(e)})},[e.id]),r.a.createElement("div",{className:"song-features"},l?r.a.createElement("h2",null,"LOADING"):r.a.createElement("div",{className:"song-features-detail"},r.a.createElement("table",{className:"striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Song Attributes"),r.a.createElement("th",null))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Key Signature"),r.a.createElement("td",null,v(N.features.key,N.features.mode))),r.a.createElement("tr",null,r.a.createElement("td",null,"Time Signature"),r.a.createElement("td",null,h(N.features.time_signature))),r.a.createElement("tr",null,r.a.createElement("td",null,"Tempo"),r.a.createElement("td",null,y(N.features.tempo))),r.a.createElement("tr",null,r.a.createElement("td",null,"Length"),r.a.createElement("td",null,m(N.features.duration_ms))))),r.a.createElement("table",{className:"striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Song Features"),r.a.createElement("th",null))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Positivity"),r.a.createElement("td",null,k(N.features.valence))),r.a.createElement("tr",null,r.a.createElement("td",null,"Energy"),r.a.createElement("td",null,f(N.features.energy))),r.a.createElement("tr",null,r.a.createElement("td",null,"Danceability"),r.a.createElement("td",null,d(N.features.danceability))),r.a.createElement("tr",null,r.a.createElement("td",null,"Acousticness"),r.a.createElement("td",null,u(N.features.acousticness))),r.a.createElement("tr",null,r.a.createElement("td",null,"Instrumentalness"),r.a.createElement("td",null,E(N.features.instrumentalness))),r.a.createElement("tr",null,r.a.createElement("td",null,"Liveness"),r.a.createElement("td",null,p(N.features.liveness))),r.a.createElement("tr",null,r.a.createElement("td",null,"Spoken-word"),r.a.createElement("td",null,g(N.features.speechiness))),r.a.createElement("tr",null,r.a.createElement("td",null,"Loudness"),r.a.createElement("td",null,b(N.features.loudness)))))))}var u=function(e){if("undefined"===typeof e||null===e)return"No acousticness score available :(";var t=parseFloat((100*e).toFixed(1));return"".concat(t,"% confidence the song is acoustic")},d=function(e){if("undefined"===typeof e||null===e)return"No danceability score avaiable :(";var t=parseFloat((100*e).toFixed(1));return t<25?"Not danceable: ".concat(t,"% on the danceability scale"):t>=25&&t<50?"Slightly dancy: ".concat(t,"% on the danceability scale"):t>=50&&t<75?"Moderately dancy: ".concat(t,"% on the danceability scale"):t>=75?"Dancy af! ".concat(t,"% on the danceability scale"):"No danceability score avaiable :("},m=function(e){if("undefined"===typeof e||null===e)return"No duration avaiable :(";var t=e/1e3,a=Math.floor(t/60),n=Math.round(t-60*a);return"".concat(a," minutes, ").concat(n," seconds")},f=function(e){if("undefined"===typeof e||null===e)return"No energy score available :(";var t=parseFloat((100*e).toFixed(1));return t<25?"Chill af: ".concat(t,"% on the energy scale"):t>=25&&t<50?"Fairly mellow: ".concat(t,"% on the energy scale"):t>=50&&t<75?"Pretty energetic: ".concat(t,"% on the energy scale"):t>=75?"In yo face! ".concat(t,"% on the energy scale"):"No energy score avaiable :("},E=function(e){if("undefined"===typeof e||null===e)return"No instrumentalness score available :(";var t=parseFloat((100*e).toFixed(1));return"".concat(t,"% confidence the song is instrumental (no vocals)")},v=function(e,t){var a="",n="";if(a="undefined"===typeof t||null===t?"":1===t?"Major":"minor","undefined"===typeof e||null===e)n="";else switch(e){case 0:n="C";break;case 1:n="C# (or D\u266d)";break;case 2:n="D";break;case 3:n="D# (or E\u266d)";break;case 4:n="E";break;case 5:n="F";break;case 6:n="F# (or G\u266d)";break;case 7:n="G";break;case 8:n="G# (or A\u266d)";break;case 9:n="A";break;case 10:n="A# (or B\u266d)";break;case 11:n="B";break;default:n=""}return""===a&&""===n?"No key data available :(":"".concat(n," ").concat(a)},p=function(e){if("undefined"===typeof e||null===e)return"No liveness score available :(";var t=parseFloat((100*e).toFixed(1));return"".concat(t,"% confidence the song is performed live")},b=function(e){if("undefined"===typeof e||null===e)return"No loudness data available :(";var t=parseFloat(e.toFixed(1));return t<-30?"A hushed whisper, averaging ".concat(t,"db"):t>=-30&&t<-20?"Fairly quiet, averaging ".concat(t,"db"):t>=-20&&t<-10?"Moderately loud, averaging ".concat(t,"db"):t>=-10?"Hot track! averaging ".concat(t,"db"):"No loudness score avaiable :("},g=function(e){if("undefined"===typeof e||null===e)return"No spoken-word score available :(";var t=parseFloat((100*e).toFixed(1));return t<33.3?"".concat(t,"% spoken-word score - likely little to no spoken words"):t>=33.3&&t<66.6?"".concat(t,"% spoken-word score - a mix of music and spoken words"):t>=66.6?"".concat(t,"% spoken-word score - mostly spoken words"):"No spoken-word score avaiable :("},y=function(e){if("undefined"===typeof e||null===e)return"No tempo available :(";var t=parseFloat(e.toFixed(1));return"".concat(t," bpm")},h=function(e){return"undefined"===typeof e||null===e?"No time signature available :(":"".concat(e)},k=function(e){if("undefined"===typeof e||null===e)return"No positivity score avaiable :(";var t=parseFloat((100*e).toFixed(1));return t<25?"Dark: ".concat(t,"% on the positivity scale"):t>=25&&t<50?"Moody: ".concat(t,"% on the positivity scale"):t>=50&&t<75?"Pretty upbeat: ".concat(t,"% on the positivity scale"):t>=75?"Happy! ".concat(t,"% on the positivity scale"):"No positivity score avaiable :("};function w(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)(function(){c(!1)},[e.track]),r.a.createElement("div",{className:"song"},r.a.createElement("h5",{id:"song-title"},e.track.name),r.a.createElement("h6",{id:"song-artist"},N(e.track.artist)),r.a.createElement("img",{src:e.track.image.url,alt:e.track.name}),r.a.createElement("div",{className:"song-actions"},r.a.createElement("button",{id:l?"active":"inactive",className:"waves-effect waves-light btn-large show-features-button",onClick:function(){c(!l)}},"Song Features"),r.a.createElement("a",{id:"listen-on-spotify",target:"_blank",rel:"noopener noreferrer",href:e.track.urls.spotify})),"undefined"!==typeof e.track.lyrics_url?r.a.createElement("a",{href:e.track.lyrics_url},"See the Lyrics"):null,l?r.a.createElement(i,{id:e.track.id}):null)}var N=function(e){for(var t="",a=0;a<e.length;a++)a===e.length-1?t+=e[a].name:t+=e[a].name+" & ";return t};function F(e){return r.a.createElement("div",{className:"song-results"},e.songResults.tracks.map(function(e,t){return r.a.createElement(w,{key:t,track:e})}))}function j(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)({}),i=Object(o.a)(c,2),u=i[0],d=i[1],m=Object(n.useState)("song"),f=Object(o.a)(m,2),E=f[0],v=f[1],p=Object(n.useState)("/tracks/search?track="),b=Object(o.a)(p,2),g=b[0],y=b[1];return r.a.createElement("div",{className:"search"},r.a.createElement("button",{id:"song"===E?"active":"inactive",className:"waves-effect waves-light btn-large song-search-button",onClick:function(){v("song"),y("/tracks/search?track=")}},"Song"),r.a.createElement("button",{id:"lyrics"===E?"active":"inactive",className:"waves-effect waves-light btn-large lyrics-search-button",onClick:function(){v("lyrics"),y("/tracks/lyrics?lyrics=")}},"Lyrics"),r.a.createElement("form",{id:"search-form",className:"col s12",onSubmit:function(e){e.preventDefault(),fetch(s+g+a).then(function(e){return e.json()}).then(function(e){return d(e)}).catch(function(e){return console.log(e)})}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"song",type:"text",value:a,onChange:function(e){l(e.target.value)},placeholder:"song"===E?"Song or Artist":"Lyrics from a song"}))),r.a.createElement("input",{id:"search-button",className:"waves-effect waves-light btn-large",type:"submit",value:"Search"})),"undefined"!==typeof u.tracks&&u.tracks.length>0?r.a.createElement(F,{songResults:u}):r.a.createElement("div",{className:"response-message"},"undefined"!==typeof u.message?r.a.createElement("p",null,u.message):null))}a(10),a(11);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(function(){return Object(n.useEffect)(function(){fetch(s+"/wakes").then(function(e){return e.json()}).then(function(e){return console.log(e.response)}).catch(function(e){return console.log(e)})},[]),r.a.createElement("div",{className:"container main"},r.a.createElement("div",{className:"powered"},r.a.createElement("p",{id:"powered-by"},"Powered by"),r.a.createElement("div",{id:"spotify-logo"}),r.a.createElement("div",{id:"genius-logo"})),r.a.createElement("h1",null,"Song Explorer"),r.a.createElement("h6",null,"Search by song or lyrics and discover song-data like key, tempo, danceability, energy, and more"),r.a.createElement(j,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.346ab40e.chunk.js.map