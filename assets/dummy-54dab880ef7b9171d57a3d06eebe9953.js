"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a,r){var i=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,i=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:n.default}),(0,a.default)(i,r.default.modulePrefix),e.default=i}),define("dummy/components/a-back-button",["exports","ember-a-frame/components/a-entity","ember-concurrency","ember-animejs","ember-macro-helpers/computed","ember-a-frame/utils/to-a-str","ember-a-frame/mixins/a-attribute-observer","ember-macro-helpers/raw","ember-awesome-macros"],function(e,t,n,a,r,i,l,o,s){var m=Ember.RSVP.defer().promise,u=AFRAME.components.position.schema.stringify;e.default=t.default.extend({attributeBindings:[],attributesToObserve:{position:{action:"hover"}},geometry:"primitive: plane; height: 1; width: 1",material:"shader: flat",visible:(0,s.toString)((0,s.not)("shouldHide")),hover:(0,n.task)(regeneratorRuntime.mark(function e(t){var n,r,i,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this,t.y-=.25,r=u(t),t.y+=.5,i=u(t),l=(0,a.default)({targets:{position:r},position:i,duration:500,direction:"alternate",easing:"easeInOutSine",update:function(){var e=this;Ember.run(function(){n.set("position",e.targets.position)})},loop:!0}),e.prev=6,e.next=9,m;case 9:return e.prev=9,l.pause(),e.finish(9);case 12:case"end":return e.stop()}},e,this,[[6,,9,12]])})).drop(),actions:{hover:function(e){this.get("hover").perform(e)}}})}),define("dummy/components/a-box",["exports","ember-a-frame/components/a-box"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-cylinder",["exports","ember-a-frame/components/a-cylinder"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-entity",["exports","ember-a-frame/components/a-entity"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-link",["exports","ember-a-frame/components/a-entity","ember-awesome-macros"],function(e,t,n){function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var r=a(["shader: flat; src: ",""],["shader: flat; src: ",""]);e.default=t.default.extend({classNames:["link"],attributeBindings:["event-set__1","event-set__2","event-set__3","event-set__4"],geometry:"primitive: plane; height: 1; width: 1",material:(0,n.tag)(r,"thumb"),sound:"on: click; src: #click-sound","event-set__1":"_event: mousedown; scale: 1 1 1","event-set__2":"_event: mouseup; scale: 1.2 1.2 1","event-set__3":"_event: mouseenter; scale: 1.2 1.2 1","event-set__4":"_event: mouseleave; scale: 1 1 1"})}),define("dummy/components/a-plane",["exports","ember-a-frame/components/a-plane"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-scene",["exports","ember-a-frame/components/a-scene"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-sky",["exports","ember-a-frame/components/a-sky","ember-a-frame/macros/to-a-str","ember-macro-helpers/raw","ember-concurrency","ember-component-inbound-actions/inbound-actions"],function(e,t,n,a,r,i){e.default=t.default.extend(i.default,{attributeBindings:["animation__fade"],animation__fade:(0,n.default)({property:(0,a.default)("material.color"),startEvents:(0,a.default)("set-image-fade"),dir:(0,a.default)("alternate"),dur:"dur",from:(0,a.default)("#FFF"),to:(0,a.default)("#000")}),changeMaterialTask:(0,r.task)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.timeout)(this.get("dur"));case 2:this.sendAction("changeMaterial",t);case 3:case"end":return e.stop()}},e,this)})),actions:{startChangingMaterial:function(e){this.element.emit("set-image-fade"),this.get("changeMaterialTask").perform(e)}}})}),define("dummy/components/a-sphere",["exports","ember-a-frame/components/a-sphere"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/360-image-gallery",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({dur:300,actions:{changeMaterial:function(e){this.transitionToRoute("360-image-gallery."+e.substr(1))}}})}),define("dummy/controllers/application",["exports","ember","ember-macro-helpers/raw","ember-awesome-macros"],function(e,t,n,a){e.default=t.default.Controller.extend({queryParams:["rotX","rotY"],rotX:0,rotY:0,shouldHideBackButton:(0,a.eq)("currentRouteName",(0,n.default)("index"))})}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){return r}e.appVersion=a;var r=n.default.APP.version;e.default=t.default.Helper.helper(a)}),define("dummy/helpers/cancel-all",["exports","ember","ember-concurrency/-helpers"],function(e,t,n){function a(e){var a=e[0];return a&&"function"==typeof a.cancelAll||t.default.assert("The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed "+a,!1),(0,n.taskHelperClosure)("cancelAll",e)}e.cancelHelper=a,e.default=t.default.Helper.helper(a)}),define("dummy/helpers/emit",["exports","ember-a-frame/helpers/emit"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"emit",{enumerable:!0,get:function(){return t.emit}})}),define("dummy/helpers/perform",["exports","ember","ember-concurrency/-helpers"],function(e,t,n){function a(e,t){return(0,n.taskHelperClosure)("perform",e,t)}e.performHelper=a,e.default=t.default.Helper.helper(a)}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/helpers/task",["exports","ember"],function(e,t){function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e){return Array.isArray(e)?e:Array.from(e)}function r(e){var t=a(e),r=t[0],i=t.slice(1);return r._curry.apply(r,n(i))}e.default=t.default.Helper.helper(r)}),define("dummy/helpers/to-a-str",["exports","ember-a-frame/helpers/to-a-str"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"toAStr",{enumerable:!0,get:function(){return t.toAStr}})}),define("dummy/helpers/transition-to",["exports","ember-transition-helper/helpers/transition-to"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"transitionTo",{enumerable:!0,get:function(){return t.transitionTo}})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){var a=n.default.APP,r=a.name,i=a.version;e.default={name:"App Version",initialize:(0,t.default)(r,i)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("dummy/initializers/ember-concurrency",["exports","ember-concurrency"],function(e,t){e.default={name:"ember-concurrency",initialize:function(){}}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var a;if("undefined"!=typeof window)a=window;else if("undefined"!=typeof global)a=global;else{if("undefined"==typeof self)return;a=self}var r,i=n.default.exportApplicationGlobal;r="string"==typeof i?i:t.default.String.classify(n.default.modulePrefix),a[r]||(a[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[r]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/macros/to-a-str",["exports","ember-a-frame/macros/to-a-str"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});a.map(function(){this.route("hello-world"),this.route("360-image-gallery",function(){this.route("city"),this.route("cubes"),this.route("sechelt")})}),e.default=a}),define("dummy/routes/360-image-gallery",["exports","ember"],function(e,t){e.default=t.default.Route.extend({actions:{updateSrc:function(e){var n=this;t.default.run.scheduleOnce("afterRender",function(){n.controller.set("skySrc",e)})}}})}),define("dummy/routes/360-image-gallery/city",["exports","ember"],function(e,t){e.default=t.default.Route.extend({beforeModel:function(e){e.send("updateSrc","#city")}})}),define("dummy/routes/360-image-gallery/cubes",["exports","ember"],function(e,t){e.default=t.default.Route.extend({beforeModel:function(e){e.send("updateSrc","#cubes")}})}),define("dummy/routes/360-image-gallery/index",["exports","ember"],function(e,t){e.default=t.default.Route.extend({beforeModel:function(){this.transitionTo("360-image-gallery.city")}})}),define("dummy/routes/360-image-gallery/sechelt",["exports","ember"],function(e,t){e.default=t.default.Route.extend({beforeModel:function(e){e.send("updateSrc","#sechelt")}})}),define("dummy/routes/application",["exports","ember","ember-concurrency"],function(e,t,n){e.default=t.default.Route.extend({queryParams:{rotX:{replace:!0},rotY:{replace:!0}},updateQueryParams:(0,n.task)(regeneratorRuntime.mark(function e(){var t,a,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.timeout)(1e3);case 2:t=document.querySelector("[camera]").getAttribute("rotation"),a=t.x,r=t.y,this.controller.setProperties({rotX:a,rotY:r}),this.get("updateQueryParams").perform();case 7:case"end":return e.stop()}},e,this)})).on("activate").cancelOn("deactivate")})}),define("dummy/routes/hello-world",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/360-image-gallery",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"E/pk5wTv",block:'{"statements":[["open-element","a-assets",[]],["flush-element"],["text","\\n  "],["open-element","audio",[]],["static-attr","id","click-sound"],["static-attr","src","https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"],["flush-element"],["close-element"],["text","\\n\\n  "],["comment"," Images. "],["text","\\n  "],["open-element","img",[]],["static-attr","id","city"],["static-attr","src","http://handwovenmusic.com/files/pano1.JPG"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","city-thumb"],["static-attr","src","http://handwovenmusic.com/files/pano1.JPG"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","cubes"],["static-attr","src","http://handwovenmusic.com/files/pano2.JPG"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","cubes-thumb"],["static-attr","src","http://handwovenmusic.com/files/pano2.JPG"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","sechelt"],["static-attr","src","http://handwovenmusic.com/files/pano3.JPG"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","sechelt-thumb"],["static-attr","src","http://handwovenmusic.com/files/pano3.JPG"],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["comment"," 360-degree image. "],["text","\\n"],["append",["helper",["a-sky"],null,[["id","radius","src","dur","actionReceiver","changeMaterial"],["image-360","10",["get",["skySrc"]],["get",["dur"]],["get",["sky"]],"changeMaterial"]]],false],["text","\\n\\n"],["comment"," Link we will build. "],["text","\\n"],["open-element","a-entity",[]],["static-attr","layout","layout: line; margin: 1.5"],["static-attr","position","-1.5 1.5 -4"],["flush-element"],["text","\\n  "],["append",["helper",["a-link"],null,[["thumb","src","dur","click"],["#cubes-thumb","#cubes",["get",["dur"]],["helper",["emit"],[["get",["sky"]],"startChangingMaterial","#cubes"],null]]]],false],["text","\\n  "],["append",["helper",["a-link"],null,[["thumb","src","dur","click"],["#city-thumb","#city",["get",["dur"]],["helper",["emit"],[["get",["sky"]],"startChangingMaterial","#city"],null]]]],false],["text","\\n  "],["append",["helper",["a-link"],null,[["thumb","src","dur","click"],["#sechelt-thumb","#sechelt",["get",["dur"]],["helper",["emit"],[["get",["sky"]],"startChangingMaterial","#sechelt"],null]]]],false],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/360-image-gallery.hbs"}})}),define("dummy/templates/360-image-gallery/city",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"UvTki2F0",block:'{"statements":[["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/360-image-gallery/city.hbs"}})}),define("dummy/templates/360-image-gallery/cubes",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"SWtbRujv",block:'{"statements":[["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/360-image-gallery/cubes.hbs"}})}),define("dummy/templates/360-image-gallery/index",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"awJbI5+I",block:'{"statements":[["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/360-image-gallery/index.hbs"}})}),define("dummy/templates/360-image-gallery/sechelt",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"p3WcFhRm",block:'{"statements":[["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/360-image-gallery/sechelt.hbs"}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"gibqxHrR",block:'{"statements":[["open-element","a-scene",[]],["flush-element"],["text","\\n  "],["append",["unknown",["outlet"]],false],["text","\\n\\n  "],["open-element","a-entity",[]],["static-attr","layout","layout: line; margin: 1.5"],["static-attr","position","-1.5 3.25 -4"],["static-attr","animation__hover","property: position; dir: alternate; loop: true; easing: easeInOutSine; to: -1.5 2.75 -4"],["flush-element"],["text","\\n    "],["append",["helper",["a-back-button"],null,[["class","text","shouldHide","click"],["link","Home",["get",["shouldHideBackButton"]],["helper",["transition-to"],["index"],null]]]],false],["text","\\n    "],["append",["helper",["a-back-button"],null,[["class","text","click"],["link","Hello World",["helper",["transition-to"],["hello-world"],null]]]],false],["text","\\n    "],["append",["helper",["a-back-button"],null,[["class","text","click"],["link","360 Image Gallery",["helper",["transition-to"],["360-image-gallery"],null]]]],false],["text","\\n  "],["close-element"],["text","\\n\\n  "],["comment"," Camera + Cursor. "],["text","\\n  "],["open-element","a-entity",[]],["static-attr","camera",""],["static-attr","look-controls",""],["dynamic-attr","rotation",["concat",[["unknown",["rotX"]]," ",["unknown",["rotY"]]," 0"]]],["flush-element"],["text","\\n    "],["open-element","a-cursor",[]],["static-attr","id","cursor"],["static-attr","animation__click","property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"],["static-attr","animation__fusing","property: fusing; startEvents: fusing; from: 1 1 1; to: 0.1 0.1 0.1; dur: 1500"],["static-attr","event-set__1","_event: mouseenter; color: springgreen"],["static-attr","event-set__2","_event: mouseleave; color: black"],["static-attr","raycaster","objects: .link"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/components/a-back-button",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"ncwwPzRG",block:'{"statements":[["open-element","a-text",[]],["dynamic-attr","value",["unknown",["text"]],null],["static-attr","color","black"],["static-attr","position","-.5 0 0"],["flush-element"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/a-back-button.hbs"}})}),define("dummy/templates/components/a-link",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"Z+viZvp5",block:'{"statements":[["yield","default"]],"locals":[],"named":[],"yields":["default"],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/a-link.hbs"}})}),define("dummy/templates/components/a-sky",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"cuo9r7d/",block:'{"statements":[["yield","default"]],"locals":[],"named":[],"yields":["default"],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/a-sky.hbs"}})}),define("dummy/templates/hello-world",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"Q6On34hI",block:'{"statements":[["append",["helper",["a-box"],null,[["position","rotation","color"],["-1 0.5 -3","0 45 0","#4CC3D9"]]],false],["text","\\n"],["append",["helper",["a-sphere"],null,[["position","radius","color"],["0 1.25 -5","1.25","#EF2D5E"]]],false],["text","\\n"],["append",["helper",["a-cylinder"],null,[["position","radius","height","color"],["1 0.75 -3","0.5","1.5","#FFC65D"]]],false],["text","\\n"],["append",["helper",["a-plane"],null,[["position","rotation","width","height","color"],["0 0 -4","-90 0 0","4","4","#7BC8A4"]]],false],["text","\\n"],["append",["helper",["a-sky"],null,[["color"],["#ECECEC"]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/hello-world.hbs"}})}),define("dummy/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"G68WG6XG",block:'{"statements":[["append",["helper",["a-sky"],null,[["color"],["#444"]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/utils/to-a-str",["exports","ember-a-frame/utils/to-a-str"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),r=JSON.parse(unescape(a)),i={default:r};return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-a-frame",version:"0.0.1+2ecbd335"});