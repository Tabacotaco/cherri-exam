(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48cec480"],{"293a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chat"},[a("nav",{staticClass:"header-chat navbar navbar-expand-sm shadow-sm"},[a("span",{staticClass:"navbar-brand mr-auto"},[a("img",{staticClass:"mr-1 friend-img rounded-circle",attrs:{src:t.EmptyImg}}),t._v("\n      "+t._s(t.friend.name)+"\n    ")]),a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-target":"#"+t.navbarID,"data-toggle":"collapse","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:t.navbarID}},[a("form",{staticClass:"control-btns form-inline ml-auto"},[a("button",{directives:[{name:"bs-collapse",rawName:"v-bs-collapse",value:{id:t.searchID,isToggle:!0},expression:"{ id: searchID, isToggle: true }"}],staticClass:"btn rounded-circle mr-2",class:{"btn-light border":t.searchOn,"btn-link border-0":!t.searchOn},attrs:{type:"button"}},[a("img",{staticClass:"rounded-circle",attrs:{src:t.SearchBtn}})]),a("div",{ref:"dropdown",staticClass:"dropdown"},[a("button",{staticClass:"btn rounded-circle",class:{"btn-light border":t.noteOn,"btn-link border-0":!t.noteOn},attrs:{type:"button",id:t.noteID,"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("img",{staticClass:"rounded-circle",attrs:{src:t.NoteBtn}})]),a("NotePopover",{attrs:{"aria-labelledby":t.noteID}})],1)])])]),a("div",{directives:[{name:"bs-collapse",rawName:"v-bs-collapse",value:{id:t.searchID,isExpanded:t.searchOn},expression:"{ id: searchID, isExpanded: searchOn }"}],staticClass:"modal-header p-0"},[a("div",{staticClass:"container mt-1"},[a("div",{staticClass:"row"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.params,expression:"params"}],staticClass:"col form-control mr-auto",attrs:{type:"text",placeholder:t.$t("PLACEHOLDER_SEARCH")},domProps:{value:t.params},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doSearch()},input:function(e){e.target.composing||(t.params=e.target.value)}}}),a("span",{staticClass:"col form-control text-right result text-secondary"},[t._v("\n          "+t._s(t.$t("SEARCH_RESULT",{count:t.searchResults.length}))+"\n        ")]),a("button",{staticClass:"close-search-btn btn p-0 rounded-circle mr-1",attrs:{type:"button"},on:{click:function(e){return t.doCloseSearch()}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])]),a("div",{staticClass:"modal-body d-flex align-items-end"},[a("div",{staticClass:"container"},t._l(t.messages,function(e,s){return a("div",{key:s,staticClass:"row",class:{"justify-content-end":t.userID===e.sender,"justify-content-start":t.userID!==e.sender}},[a("div",{staticClass:"col",class:{"text-right":t.userID===e.sender,"text-left":t.userID!==e.sender}},[a("span",{ref:"msg-"+s,refInFor:!0,staticClass:"rounded-pill py-2 px-3",class:{"self-content":t.userID===e.sender}},[t._v("\n            "+t._s(e.content)+"\n          ")])])])}),0)]),a("div",{staticClass:"modal-footer"},[a("span",{staticClass:"text-secondary mr-auto"},[t._v(t._s(t.$t("PLACEHOLDER_MESSAGE")))]),a("button",{staticClass:"btn btn-link border-0 note-btn",attrs:{type:"button"}},[a("img",{staticClass:"rounded-circle",attrs:{src:t.SentBtn}})])])])},n=[],r=a("9ab4"),o=a("60a3"),i=a("c64e"),c=a.n(i),l=a("1157"),d=a.n(l),A=a("fff5"),u=function(){return{bind:function(t,e,a){var s=e.expression,n=e.value,r=n.id,o=n.isToggle,i=void 0!==o&&o,c=n.isExpanded,l=void 0!==c&&c;if(i)d()(t).attr({"data-toggle":"collapse","data-target":"#"+r,"aria-expanded":!0===l,"aria-controls":r});else{var A=(s.replace("{","").replace("}","").split(",").filter(function(t){return t.trim().indexOf("isExpanded")>=0})[0]||"").replace("isExpanded:","").trim();d()(t).attr({id:r}).addClass(["collapse",!0===l?"show":""]).on("show.bs.collapse",function(){return a.context[A]=!0}).on("hidden.bs.collapse",function(){return a.context[A]=!1})}}}}(),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"note-popover dropdown-menu dropdown-menu-right p-0"},[a("div",{staticClass:"arrow"}),a("ul",{staticClass:"list-group border-0 px-1"},[a("li",{staticClass:"list-group-item"},[a("textarea",{staticClass:"form-control",attrs:{rows:"3"}}),a("button",{staticClass:"btn btn-block add-btn mt-2",attrs:{type:"button"}},[t._v("\n        "+t._s(t.$t("ADD_MESSAGE"))+"\n      ")])]),t._m(0),t._m(1)])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"list-group-item"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header px-2 pt-2 pb-0"},[a("strong",{staticClass:"mr-auto"},[t._v("2019/07/15")]),a("small",[t._v("13:45")]),a("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"card-body p-2"},[t._v("\n          備忘訊息 1\n        ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"list-group-item"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header px-2 pt-2 pb-0"},[a("strong",{staticClass:"mr-auto"},[t._v("2019/07/13")]),a("small",[t._v("14:45")]),a("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"card-body p-2"},[t._v("\n          備忘訊息 2\n        ")])])])}],b=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r["b"](e,t),e=r["a"]([Object(o["a"])({})],e),e}(o["c"]),m=b,f=m,v=(a("5618"),a("2877")),C=Object(v["a"])(f,p,g,!1,null,null,null),h=C.exports,w=a("6f06"),B=a.n(w),y=a("6111"),I=a.n(y),E=a("a22a"),Q=a.n(E),k=a("c9e5"),H=a.n(k),x=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.navbarID=c()(),e.searchID=c()(),e.noteID=c()(),e.searchOn=!1,e.noteOn=!1,e.params="",e.searchResults=[],e}return r["b"](e,t),Object.defineProperty(e.prototype,"state",{get:function(){return A["a"].state.ExamData},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"userID",{get:function(){return this.state.id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"friend",{get:function(){var t=this;return this.state.friends.filter(function(e){var a=e.id;return a===t.id})[0]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"messages",{get:function(){return this.friend.messages},enumerable:!0,configurable:!0}),e.prototype.mounted=function(){var t=this;d()(this.$refs.dropdown).on("show.bs.dropdown",function(){return t.noteOn=!0}).on("hidden.bs.dropdown",function(){return t.noteOn=!1})},e.prototype.doCloseSearch=function(){d()("#"+this.searchID).collapse("hide")},e.prototype.doSearch=function(){var t=this;if(window.getSelection){var e=window.getSelection();e&&(e.removeAllRanges(),this.searchResults=this.messages.filter(function(a,s){if(a.content.indexOf(t.params)<0)return!1;var n=d()(t.$refs["msg-"+s])[0],r=document.createRange();return r.selectNodeContents(n),e.addRange(r),!0}))}else console.warn("Could not select text in node: Unsupported browser.")},r["a"]([Object(o["b"])()],e.prototype,"id",void 0),e=r["a"]([Object(o["a"])({inject:{EmptyImg:{default:function(){return B.a}},SearchBtn:{default:function(){return I.a}},NoteBtn:{default:function(){return Q.a}},SentBtn:{default:function(){return H.a}}},directives:{BsCollapse:u},components:{NotePopover:h}})],e),e}(o["c"]),S=x,D=S,O=(a("9c66"),Object(v["a"])(D,s,n,!1,null,null,null));e["default"]=O.exports},5618:function(t,e,a){"use strict";var s=a("afe1"),n=a.n(s);n.a},6111:function(t,e){t.exports="data:image/png;base64,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"},"9c66":function(t,e,a){"use strict";var s=a("af61"),n=a.n(s);n.a},a22a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAZ1JREFUeAHtmUFuwjAQRcdWpV4i9Bz0CkXdVIJjoNCDtBHHoFJ3cAUOUl+Cjd1YsKDmQy0lcl3Nz4qMnXzPm2E8ckR4kQAJkAAJkAAJkAAJkAAJkAAJkAAJaCNgkMOz7msTJMzRWAmbEbvYts1HCS1bQqRmDQKoOTol1qY+A+4QZWvNm/emSBFC+vdW9shOGwmQAAmMTQB2gs9rN/VeJmOL5b4vFsHPZePO57+sXXPw8nhui7+HdoxwF/A+vP5lK3zwdtH79mMXis4H8ZsUQH8PgwjmQZP6PoAAYF4oMqrPAFgEt+0kFiEVl/oMIAAVeX7DSfUZALuop86tjISLtvMGyF+Hgpj9rm3e04nxADa1oftg+tY8hGk6ZiTv3OKaPtwFovNjt8In0hcAsnVC6vrxPvf5a/rq/wIEgBNLjxXWgFgwYHUcwCW+Ez2eXcRGKIJYH1krtM06N0fnAbv2YVCsWAMqDHbRJTEDiuKuUIwZUGFQii6JGVAUd4Vi6jMAtsIVBkri57LTF6Mal8c1kQAJkAAJkAAJkAAJ/DsC3+0LVfV7tttKAAAAAElFTkSuQmCC"},af61:function(t,e,a){},afe1:function(t,e,a){},c9e5:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABCtJREFUeAHtWktPE1EUvmda0wprXlISma5dmODjNxQ10URU/oALgbUrH3FvaKuhdekbqi6U8BdUJHHhH4CW8HJpEKTtHM8tNIHhzG2nnZlOy7Apc5/nfPf7zrn3zggR/AUIBAgECAQIBAgECJxUBIBzfDSZfyoQ/oRC0eznyZ41rk2nlGmcIyigDwU+KBk7y6PThbdXU6uXuXadUMYyIJEsvBGI4yYHlwRoqe6BwdncGOyZ6tr2kWWAhTcjAo2X22urBWLF4xvZ3wMW7dqqmAUASAPWXmCvlMfu7s5KJ8iDdVQ6Rk7esQbhWM0SCEh2nYnNtZs8WAYcc692wQgB9urveiHfbvLgAQBgmVELB0RRyR5SHjKQtkP2YB0dTa6+QzRu13K4rnqAHxRTUn6VB8+AujyrsxHiBT/LgwWAVp9lRp0us83M8kg8K1xiG3pcyDqamM6/JztuuW6LD+TBMsB1x6sTHJLHlWThUSs2VywAlANYZlTtdvpXysNAfFjNHl7Kg3WUToOzZNSY047aGs8jebAMsGWoW41N8kg83+p3YyoeAGxsI+SGgVV5iNJuXm6unJYHL4Hpwhzl7ptuOOTEmLRRXaQlSp3uj+WaPXuwDKAJfgqAX0LAthMGOz0GIl40DHwtzx4yezQjD5YBhw2+Nr3ZZ4SLujBQp4l1gUInYHQE+SsG6eKk5hiHx3PlfxBFSlxzGBLphYmh73bmaMr4yRRGlmF9GI1yBRgEAkgIna4TDoDCbjvGONHWrjyaAqCWwa1kD8WIDWJF1ghHMgv3ejesbHUVAKtJZblX7CEH9yie5WTQnJ8aWjTb1DIAzIaYn6/PbPQWy6W4k7GHkwebBczGtOoZDHo7QfmYwiw6YQMNAmgc3ea3jAFSAivhtbNYNnSUGUaIODnpfAClDEF+50RIpLgM4SoAksalYokyAuq0mHEvUyhpfpP4k8VTkRnXguCRVSyLuF/SIAGdrvcKriYDqqtIUoz7eSMkaR4CSH+Zin2zEy9YAOjQcZ8GGd+nrPebmXodkDSnXJ+pletV44W5Sgq65+kUdo6r80VZ9a5goPkXMSwA5LwjacdRsOR+H+GDpkHKLs1VdrAAqDp4XVeN5pFoNPPpbs+60/P7FwCiOQW2dJfLr+P9BYBLNFexhgUAQKOMZ6j6OVrnNs1VxrIAqDo4WucRzVU2ew9AC2huHwASgKpTI3UVmgvtRSQamXEjmjdik+zjBQMqH1e5Hc39BcABzSEM6fmJ2NdGjfOiH8uAygVEQyKALbp1yfqN5iogWQBUHSzq2vYbwsYBkDQX2kegmxa/09xi0SrFLAB0RlakgX2ah7RIphO+I2YBsEBsSdO09LAYnE1PwT+LNm1XrAagQ2iuWhUWALoO2KTzwJNOobkKgKAuQCBAIEAgQCBAIEDg5CLwHxchAlJ6QpV3AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=chunk-48cec480-legacy.2eb1999a.js.map