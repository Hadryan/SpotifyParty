(this.webpackJsonpspotifypartyfront=this.webpackJsonpspotifypartyfront||[]).push([[0],{47:function(e,t,a){e.exports=a(60)},52:function(e,t,a){},53:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(15),s=a.n(c),r=(a(52),a(16)),l=a(17),i=a(23),u=a(22),m=a(68),h=a(69),d=a(66),g=a(67),f=a(44),p=a(43),E=(a(53),window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e}),{}));window.location.hash="";var v=E,y=a(29),b=["user-read-currently-playing","user-read-playback-state","user-modify-playback-state","user-read-email"],k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={loggedIn:!1,token:null,email:null,username:null},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){console.log("URI","http://localhost:3000/");var e=v.access_token;e?(console.log("token is: ",e),this.props.getAccessToken(e),this.getAccountInfo(e),this.setState({loggedIn:!0})):this.setState({loggedIn:!1})}},{key:"getAccountInfo",value:function(e){var t=this;y.ajax({url:"https://api.spotify.com/v1/me",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e)},success:function(e){t.setState({username:e.display_name}),console.log(t.state.email)}})}},{key:"render",value:function(){return o.a.createElement(m.a,{className:"topheader",bg:"light",expand:"lg"},o.a.createElement(m.a.Brand,{className:"brandLogo",href:"/"},"Spotify Party"),o.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(h.a,{className:"mr-auto"},o.a.createElement(h.a.Link,{href:"#home"},"Home"),o.a.createElement(h.a.Link,{href:"#link"},"Link")),!1===this.state.loggedIn?o.a.createElement(h.a,{className:"ml-auto logintag"},o.a.createElement(h.a.Link,{href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("9b55888e2f574f1eb277efbe3a229459","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(b.join("%20"),"&response_type=token&show_dialog=true")},"Login with Spotify")):o.a.createElement(h.a,{className:"ml-auto"},o.a.createElement(d.a,{className:"myaccountTag",title:"My Account",id:"basic-nav-dropdown"},o.a.createElement(d.a.Item,{href:"#"},"Hello, ",this.state.username),o.a.createElement(d.a.Item,{href:"#"},"Preferences"),o.a.createElement(d.a.Divider,null),o.a.createElement(d.a.Item,{href:"#"},"Log out"))),o.a.createElement(g.a,{inline:!0,className:"searchButton"},o.a.createElement(f.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),o.a.createElement(p.a,{variant:"outline-success"},"Search"))))}}]),a}(o.a.Component),N=(a(58),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this)).getMusicInfo=function(e){y.ajax({url:"https://api.spotify.com/v1/me/player",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e)},success:function(e){void 0!==e&&n.setState({item:e.item,refreshToggled:!1})}})},n.state={loggedIn:!0,item:null,authToken:e.token,refreshToggled:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){void 0!==this.props.token&&this.getMusicInfo(this.props.token)}},{key:"componentDidUpdate",value:function(){this.state.refreshToggled&&(console.log("Refreshed"),this.getMusicInfo(this.state.authToken))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"row"},o.a.createElement("div",{id:"mygroups",className:"col-2 border"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("h2",null,"My groups"))),o.a.createElement("div",{className:"col-7"},o.a.createElement("div",{className:"row nowplaying border"},null===this.state.item?o.a.createElement("h2",null,"Now Playing: [Nothing is playing]"):o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("h2",null,"Now Playing: ",this.state.item.name),o.a.createElement("h4",null,"Artist: ",this.state.item.artists[0].name),o.a.createElement("h4",null,"Album: ",this.state.item.album.name),o.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.setState({refreshToggled:!0})}},"Refresh")),o.a.createElement("div",{className:"col"},o.a.createElement("img",{src:"".concat(this.state.item.album.images[1].url),alt:"Cover"})))),o.a.createElement("div",{className:"row nextup border"},o.a.createElement("h2",null,"Next up:"))),o.a.createElement("div",{id:"chat",className:"col-3 border"},o.a.createElement("h2",null,"Chat")))}}]),a}(o.a.Component)),w=(a(59),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).getAccessToken=function(t){e.setState({access_token:t})},e.getLoginState=function(t){!0===t?e.setState({loggedIn:!0}):e.setState({loggedIn:!1})},e.state={access_token:null,itemPlaying:"HEHEH",loggedIn:!1},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},(this.state.access_token,o.a.createElement(k,{getAccessToken:this.getAccessToken})),null==this.state.access_token?o.a.createElement("div",null,o.a.createElement(N,null)):o.a.createElement(N,{token:this.state.access_token}))}}]),a}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.0ea37b26.chunk.js.map