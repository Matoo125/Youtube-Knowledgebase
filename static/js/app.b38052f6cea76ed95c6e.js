webpackJsonp([1],[,,,,,,,,,,,function(t,e,a){"use strict";var s=a(2),i=a(59),n=a(52),o=a.n(n),l=a(51),c=a.n(l),r=a(50),d=a.n(r);s.a.use(i.a),e.a=new i.a({routes:[{path:"/:id?",name:"Channels",component:o.a},{path:"/channel/:id",name:"Channel",component:c.a},{path:"/channels/add",name:"AddChannel",component:d.a}]})},function(t,e,a){"use strict";var s=a(2),i=a(61),n=a(3),o=a.n(n);s.a.use(i.a);var l=new i.a.Store({state:{categories:null},mutations:{SET_CATEGORIES:function(t,e){t.categories=e}},actions:{loadCategories:function(t){o.a.get("http://youtube-knowledgebase.6f.sk/app/index.php?url=categories/list").then(function(e){console.log(e),t.commit("SET_CATEGORIES",e.data.categories)}).catch(function(t){console.log(t)})}}});e.a=l},function(t,e){},,function(t,e,a){a(41);var s=a(1)(a(34),a(54),null,null);t.exports=s.exports},,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2),i=a(15),n=a.n(i),o=a(11),l=a(12),c=a(14),r=a.n(c),d=a(13);a.n(d);s.a.config.productionTip=!1,s.a.use(r.a,{timeout:5e3});var u=new s.a;s.a.prototype.$bus=u,new s.a({el:"#app",router:o.a,store:l.a,template:"<App/>",components:{App:n.a}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(53),i=a.n(s);e.default={name:"app",components:{Navigation:i.a},mounted:function(){null===this.$store.state.categories&&this.$store.dispatch("loadCategories")}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(3),i=a.n(s);e.default={name:"AddChannel",data:function(){return{name:"",id:"",info:null,selectedCategories:[]}},computed:{categories:function(){return this.$store.state.categories}},methods:{add:function(){this.id?this.getChannelInfo():this.getId()},getId:function(){var t=this;i.a.get("https://www.googleapis.com/youtube/v3/channels",{params:{key:"AIzaSyB-rHXLjy6DQXZn3irtKEgl9-hpjjU2LFg",part:"id",forUsername:this.name}}).then(function(e){console.log(e.data.items[0].id),t.id=e.data.items[0].id,t.getChannelInfo()}).catch(function(t){console.log(t)})},getChannelInfo:function(){var t=this;console.log("getting channel info ..."),i.a.get("https://www.googleapis.com/youtube/v3/channels",{params:{key:"AIzaSyB-rHXLjy6DQXZn3irtKEgl9-hpjjU2LFg",part:"snippet",id:this.id,fields:"items(snippet,id)"}}).then(function(e){t.info=e.data.items[0].snippet}).catch(function(t){console.log(t)})},addToDatabase:function(){var t=this;i.a.post("http://youtube-knowledgebase.6f.sk/app/index.php?url=channels/add",{y_id:this.id,title:this.info.title,description:this.info.description,published_at:this.info.publishedAt,thumbnail:this.info.thumbnails.high.url,categories:this.selectedCategories}).then(function(e){console.log(e),"SUCCESS"===e.data.status&&(t.$toaster.success("Channel has been added. "),t.info="",t.name="",t.id=null,t.selectedCategories=[])}).catch(function(t){console.log(t)})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Channel",data:function(){return{loading:!1,videoId:null,videos:null,uploads_id:null,modalActive:null,player:null,error:null}},created:function(){this.fetchUploadsId()},mounted:function(){var t=this;setTimeout(function(){return t.fetchUploadsPlaylist()},400)},methods:{fetchUploadsId:function(){var t=this;this.error=this.videos=null,this.loading=!0,axios.get("https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id="+this.$route.params.id+"&key=AIzaSyB-rHXLjy6DQXZn3irtKEgl9-hpjjU2LFg&fields=items/contentDetails/relatedPlaylists/uploads").then(function(e){return t.uploads_id=e.data.items[0].contentDetails.relatedPlaylists.uploads})},fetchUploadsPlaylist:function(){var t=this;axios.get("https://www.googleapis.com/youtube/v3/playlistItems",{params:{part:"snippet",playlistId:this.uploads_id,maxResults:24,key:"AIzaSyB-rHXLjy6DQXZn3irtKEgl9-hpjjU2LFg"}}).then(function(e){t.videos=e.data.items,t.loading=!1}).catch(function(t){return console.log(t)})},play:function(t){this.player&&(this.player.destroy(),console.log("destroyed")),document.querySelector("#player").setAttribute("data-video-id",t.currentTarget.id),this.player=plyr.setup(document.querySelector("#player"))[0],this.modalActive=!0},close:function(){this.modalActive=!1}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(3),i=a.n(s);e.default={name:"Channels",data:function(){return{channels:[]}},mounted:function(){var t,e=this;t=this.$route.params.id?"channels/listByCategory/"+this.$route.params.id:"channels/list",i.a.get("http://youtube-knowledgebase.6f.sk/app/index.php?url="+t).then(function(t){console.log(t),e.channels=t.data.channels}).catch(function(t){console.log(t)})}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Navigation",data:function(){return{}},computed:{categories:function(){return this.$store.state.categories}}}},,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,function(t,e,a){a(45);var s=a(1)(a(35),a(58),null,null);t.exports=s.exports},function(t,e,a){a(44);var s=a(1)(a(36),a(57),null,null);t.exports=s.exports},function(t,e,a){a(42);var s=a(1)(a(37),a(55),null,null);t.exports=s.exports},function(t,e,a){a(43);var s=a(1)(a(38),a(56),null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navigation"),t._v(" "),a("router-view",{key:t.$route.fullPath})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"columns is-multiline is-mobile is-centered"},t._l(t.channels,function(e){return a("div",{staticClass:"column is-3-desktop is-4-tablet is-6-mobile channel"},[a("router-link",{attrs:{to:{name:"Channel",params:{id:e.y_id}}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image is-1by1"},[a("img",{attrs:{src:e.thumbnail,alt:"Image"}})])]),t._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[t._v(t._s(e.title))])])])])])])],1)}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"nav has-shadow"},[a("div",{staticClass:"container"},[a("div",{staticClass:"nav-left"},[a("router-link",{staticClass:"nav-item",attrs:{to:{name:"Channels"}}},[a("h2",[t._v("Youtube Knowledgebase")])])],1),t._v(" "),a("div",{staticClass:"nav-right nav-menu"},t._l(t.categories,function(e){return a("router-link",{key:e.id,staticClass:"nav-item",attrs:{to:{name:"Channels",params:{id:e.id}}}},[t._v("\n        "+t._s(e.title)+"\n      ")])}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[a("i",{staticClass:"fa fa-spinner fa-spin fa-4x"})]),t._v(" "),a("transition",{attrs:{name:"modal","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.modalActive,expression:"modalActive"}],staticClass:"modal animated is-active"},[a("div",{staticClass:"modal-background",on:{click:t.close}}),t._v(" "),a("div",{staticClass:"modal-content animated ",class:[t.modalActive?"":"zoomOut"]},[a("div",{attrs:{id:"player","data-type":"youtube","data-video-id":""}})]),t._v(" "),a("button",{staticClass:"modal-close",on:{click:t.close}})])]),t._v(" "),a("div",{staticClass:"columns is-multiline"},t._l(t.videos,function(e){return a("div",{staticClass:"column is-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image is-4by2"},[a("img",{attrs:{src:e.snippet.thumbnails.high.url,alt:"",id:e.snippet.resourceId.videoId},on:{click:function(e){t.play(e)}}})])]),t._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[a("p",[t._v(t._s(e.snippet.title))])])]),t._v(" "),t._m(0,!0)])])}))],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"card-footer"},[a("a",{staticClass:"card-footer-item"},[t._v("Watchlist")]),t._v(" "),a("a",{staticClass:"card-footer-item"},[t._v("Like")]),t._v(" "),a("a",{staticClass:"card-footer-item"},[t._v("Saw")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.info?t._e():a("div",[t._m(0),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"field is-horizontal"},[t._m(1),t._v(" "),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input is-large",attrs:{type:"text",placeholder:"Large sized input"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"field is-horizontal"},[t._m(2),t._v(" "),a("div",{staticClass:"field-body"},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"input is-large",attrs:{type:"text",placeholder:"Large sized input"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"has-text-centered"},[a("p",[t._v("Add one of those two. We need channel id, but if tou just know the channel name from url, we can find the id for you")]),t._v(" "),a("br"),t._v(" "),a("a",{staticClass:"button is-primary is-large",on:{click:function(e){t.add()}}},[t._v("Go")])])]),t._v(" "),t.info?a("div",[a("h2",{staticClass:"title is-2"},[t._v("Is this what you are looking for?")]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-content columns"},[a("div",{staticClass:"column is-one-quarter"},[a("figure",{staticClass:"image is-4by4",staticStyle:{"max-width":"240px"}},[a("img",{attrs:{src:t.info.thumbnails.high.url,alt:"Image"}})])]),t._v(" "),a("div",{staticClass:"column is-three-querters"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[t._v(t._s(t.info.title))])])]),t._v(" "),a("div",{staticClass:"content"},[t._v("\n            "+t._s(t.info.description)+"\n            "),a("br"),t._v(" "),a("small",{staticClass:"is-pulled-right"},[t._v(t._s(t.info.publishedAt))]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"columns is-multiline",staticStyle:{display:"inline-block"}},t._l(t.categories,function(e){return a("div",{staticClass:"field column",staticStyle:{display:"inline-block"}},[a("p",{staticClass:"control"},[a("label",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedCategories,expression:"selectedCategories"}],attrs:{type:"checkbox"},domProps:{value:e.id,checked:Array.isArray(t.selectedCategories)?t._i(t.selectedCategories,e.id)>-1:t.selectedCategories},on:{__c:function(a){var s=t.selectedCategories,i=a.target,n=!!i.checked;if(Array.isArray(s)){var o=e.id,l=t._i(s,o);n?l<0&&(t.selectedCategories=s.concat(o)):l>-1&&(t.selectedCategories=s.slice(0,l).concat(s.slice(l+1)))}else t.selectedCategories=n}}}),t._v("\n                    "+t._s(e.title)+"\n                  ")])])])}))])])]),t._v(" "),a("footer",{staticClass:"card-footer"},[a("p",{staticClass:"card-footer-item"},[a("button",{staticClass:"button is-success",on:{click:t.addToDatabase}},[t._v("\n            Yes Add To Database\n          ")])]),t._v(" "),a("p",{staticClass:"card-footer-item"},[a("span",[a("button",{staticClass:"button is-danger",on:{click:function(e){t.info=null}}},[t._v("\n              No Try Again\n            ")])])])])])]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"has-text-centered"},[a("h1",{staticClass:"title is-1"},[t._v("Add New Channel")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-large"},[a("label",{staticClass:"label"},[t._v("Channel Name")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field-label is-large"},[a("label",{staticClass:"label"},[t._v("Channel ID")])])}]}}],[33]);
//# sourceMappingURL=app.b38052f6cea76ed95c6e.js.map