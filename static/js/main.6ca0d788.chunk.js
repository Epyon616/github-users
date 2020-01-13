(this["webpackJsonpgithub-users"]=this["webpackJsonpgithub-users"]||[]).push([[0],{23:function(e,t,a){e.exports=a(37)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),s=a.n(c),l=a(20),o=a(5),i=(a(28),a(29),a(30),a(8)),u=a(9),m=a(11),h=a(10),f=a(12);var v=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},r.a.createElement("span",{className:"navbar-brand"},"Github Users"),r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{href:"/github-users/",className:"nav-link"},"Home"))))};var p=function(e){var t=e.user;return r.a.createElement("div",{className:"col-sm-12 col-md-3 mb-4"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top",src:t.avatar_url,alt:t.login}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.login),r.a.createElement("a",{href:"/github-users/user/".concat(t.login),className:"btn btn-primary"},"View"))))};var d=function(e){var t=e.users;return r.a.createElement("div",{className:"row col-12"},t.map((function(e){return r.a.createElement(p,{user:e,key:e.id})})),0===t.length?"There are no results for this term, please try again.":"")};var E=function(e){var t=e.searchTerm,a=e.handleKeyPress,n=e.handleClick,c=e.handleClear;return r.a.createElement("form",{className:"form-inline col-12 mx-2 mb-5"},r.a.createElement("input",{className:"form-control col-sm-12 col-md-9",type:"text",placeholder:"Search users","aria-label":"Search users",value:t,onChange:a}),r.a.createElement("input",{type:"submit",className:"btn btn-primary col-md-1 ml-2 my-2",value:"Search","aria-label":"Search",onClick:n}),r.a.createElement("input",{type:"button",className:"btn col-md-1 ml-2 my-2",value:"Clear","aria-label":"Clear",onClick:c}))},b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={allUsers:[],searchTerm:"",filteredUsers:[]},a.fetchUsers=function(){return fetch("https://api.github.com/users").then((function(e){return e.json()})).catch((function(e){return console.error("There was a problem fetching Users data: ",e)}))},a.handleKeyPress=function(e){a.setState({searchTerm:e.target.value})},a.handleClick=function(e){e.preventDefault();var t=a.state.allUsers.filter((function(e){return e.login.includes(a.state.searchTerm)}));a.setState({filteredUsers:t})},a.handleClear=function(e){e.preventDefault(),a.setState({searchTerm:""}),a.setState({filteredUsers:a.state.allUsers})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchUsers().then((function(t){return e.setState({allUsers:t,filteredUsers:t})}))}},{key:"render",value:function(){var e=this.state,t=e.filteredUsers,a=e.searchTerm;return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement("main",{className:"container container-fluid mt-5"},r.a.createElement(E,{searchTerm:a,handleKeyPress:this.handleKeyPress,handleClick:this.handleClick,handleClear:this.handleClear}),r.a.createElement(d,{users:t})))}}]),t}(n.Component),g=a(19),y=a.n(g);var N=function(e){var t=e.activity;return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,y()(new Date(t.created_at)).format("D MMM YYYY"),":"),r.a.createElement("p",null,function(){var e,a=t.repo,n=t.payload;switch(t.type){case"CreateEvent":e="Created ".concat(n.ref_type," ").concat(n.ref," on ").concat(a.name);break;case"DeleteEvent":e="Deleted ".concat(n.ref_type," ").concat(n.ref," from ").concat(a.name);break;case"ForkEvent":e="Forked ".concat(a.name);break;case"IssuesEvent":e="".concat(n.action," issue #").concat(n.issue.number," on ").concat(a.name);break;case"IssueCommentEvent":e="".concat(n.action," comment on issue #").concat(n.issue.number," on ").concat(a.name);break;case"PublicEvent":e="Made repository ".concat(a.name," public");break;case"PushEvent":e="Pushed to ".concat(a.name);break;case"PullRequestEvent":case"PullRequestReviewEvent":e="".concat(n.action," pull request #").concat(n.number," on ").concat(a.name);break;case"ReleaseEvent":e="".concat(n.action," release on ").concat(a.name);break;case"WatchEvent":e="".concat(n.action," watching ").concat(a.name);break;default:e=t.type}return e}()))};var k=function(e){var t=e.activities;return r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement(N,{activity:e})})),0===t.length?"No activity information available":"")};var w=function(e){var t=e.repo;return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("a",{href:t.html_url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h4",null,t.name)),r.a.createElement("p",null,t.description),r.a.createElement("div",{class:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("strong",null,"Watchers: ")," ",t.watchers_count),r.a.createElement("div",{className:"col-6"},r.a.createElement("strong",null,"Starred: ")," ",t.stargazers_count)))};var C=function(e){var t=e.repositories;return r.a.createElement("ul",{className:"list-group"},t.map((function(e){return r.a.createElement(w,{repo:e})})),0===t.length?"No repository information available":"")},D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={userId:a.props.match.params.id,userData:{},userRepositories:[],userActivities:[]},a.fetchUserData=function(){var e="https://api.github.com/users/".concat(a.state.userId);return fetch(e).then((function(e){return e.json()})).catch((function(e){return console.error("There was a problem fetching User information: ",e)}))},a.fetchRepositoryData=function(){var e="https://api.github.com/users/".concat(a.state.userId,"/repos");return fetch(e).then((function(e){return e.json()})).catch((function(e){return console.error("There was a problem fetching repository information: ",e)}))},a.fetchActivityData=function(){var e="https://api.github.com/users/".concat(a.state.userId,"/events");return fetch(e).then((function(e){return e.json()})).catch((function(e){return console.error("There was a problem fetching Activity information: ",e)}))},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchUserData().then((function(t){return e.setState({userData:t})})),this.fetchRepositoryData().then((function(t){return e.setState({userRepositories:t})})),this.fetchActivityData().then((function(t){return e.setState({userActivities:t})}))}},{key:"render",value:function(){var e=this.state,t=e.userData,a=e.userActivities,n=e.userRepositories;return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 text-left offset-1 my-4"},r.a.createElement("a",{href:"/github-users/"},"Back to homepage"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"jumbotron col-10 offset-1"},r.a.createElement("img",{src:t.avatar_url,alt:t.login,className:"img-fluid col-sm-12 col-md-2 float-left"}),r.a.createElement("h1",null,t.name," (",t.login,")"),r.a.createElement("h3",null,t.location),r.a.createElement("p",null,t.bio))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5 col-sm-12 offset-1"},r.a.createElement("h4",null,"Repositories"),r.a.createElement(C,{repositories:n})),r.a.createElement("div",{className:"col-md-5 col-sm-12"},r.a.createElement("h4",null,"Recent Activity"),r.a.createElement(k,{activities:a})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(l.a,{basename:"/github-users"},r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{exact:!0,path:"/github-users/",component:b}),r.a.createElement(o.a,{path:"github-users/user/:id",component:D}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.6ca0d788.chunk.js.map