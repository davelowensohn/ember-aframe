"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,r,a,n){var l=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,l=t.default.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:r.default}),(0,a.default)(l,n.default.modulePrefix),e.default=l}),define("dummy/components/a-back-button",["exports","ember-a-frame/components/a-entity","ember-concurrency","ember-animejs","ember-macro-helpers/computed","ember-a-frame/utils/to-a-str","ember-a-frame/mixins/a-attribute-observer","ember-macro-helpers/raw","ember-awesome-macros"],function(e,t,r,a,n,l,o,i,s){function u(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var m=u(["value: ","; width: 4; color: black; align: center"],["value: ","; width: 4; color: black; align: center"]),d=Ember.RSVP.defer().promise,p=AFRAME.components.position.schema.stringify;e.default=t.default.extend({attributeBindings:["a-text:text"],attributesToObserve:{position:{action:"hover"}},geometry:"primitive: plane; height: 1; width: 1",material:"shader: flat",visible:(0,s.toString)((0,s.not)("shouldHide")),"a-text":(0,s.tag)(m,"text"),hover:(0,r.task)(regeneratorRuntime.mark(function e(t){var r,n,l,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this,t.y-=.25,n=p(t),t.y+=.5,l=p(t),o=(0,a.default)({targets:{position:n},position:l,duration:500,direction:"alternate",easing:"easeInOutSine",update:function(){var e=this;Ember.run(function(){r.set("position",e.targets.position)})},loop:!0}),e.prev=6,e.next=9,d;case 9:return e.prev=9,o.pause(),e.finish(9);case 12:case"end":return e.stop()}},e,this,[[6,,9,12]])})).drop(),actions:{hover:function(e){this.get("hover").perform(e)}}})}),define("dummy/components/a-box",["exports","ember-a-frame/components/a-box"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-camera",["exports","ember-a-frame/components/a-camera"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-cylinder",["exports","ember-a-frame/components/a-cylinder"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-entity",["exports","ember-a-frame/components/a-entity"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-link",["exports","ember-a-frame/components/a-entity","ember-awesome-macros"],function(e,t,r){function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var n=a(["shader: flat; src: ",""],["shader: flat; src: ",""]);e.default=t.default.extend({classNames:["link"],attributeBindings:["event-set__1","event-set__2","event-set__3","event-set__4"],geometry:"primitive: plane; height: 1; width: 1",material:(0,r.tag)(n,"thumb"),sound:"on: click; src: #click-sound","event-set__1":"_event: mousedown; scale: 1 1 1","event-set__2":"_event: mouseup; scale: 1.2 1.2 1","event-set__3":"_event: mouseenter; scale: 1.2 1.2 1","event-set__4":"_event: mouseleave; scale: 1 1 1"})}),define("dummy/components/a-plane",["exports","ember-a-frame/components/a-plane"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-scene",["exports","ember-a-frame/components/a-scene"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-sky",["exports","ember-a-frame/components/a-sky","ember-a-frame/macros/to-a-str","ember-macro-helpers/raw","ember-concurrency","ember-component-inbound-actions/inbound-actions"],function(e,t,r,a,n,l){e.default=t.default.extend(l.default,{attributeBindings:["animation__fade"],animation__fade:(0,r.default)({property:(0,a.default)("material.color"),startEvents:(0,a.default)("set-image-fade"),dir:(0,a.default)("alternate"),dur:"dur",from:(0,a.default)("#FFF"),to:(0,a.default)("#000")}),changeMaterialTask:(0,n.task)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.timeout)(this.get("dur"));case 2:this.sendAction("changeMaterial",t);case 3:case"end":return e.stop()}},e,this)})),actions:{startChangingMaterial:function(e){this.element.emit("set-image-fade"),this.get("changeMaterialTask").perform(e)}}})}),define("dummy/components/a-sphere",["exports","ember-a-frame/components/a-sphere"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/my-camera",["exports","ember-a-frame/components/a-camera","ember-awesome-macros","ember-concurrency"],function(e,t,r,a){function n(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var l=n([""," "," 0"],[""," "," 0"]),o=n([""," "," ",""],[""," "," ",""]);e.default=t.default.extend({rotation:(0,r.tag)(l,"rotX","rotY"),position:(0,r.tag)(o,"posX",(0,r.sum)("posY","posYOffset"),"posZ"),initialPosYOffset:0,posYOffset:0,stringify:function(){return AFRAME.components.position.schema.stringify(this.element.getAttribute("position")).trim()},onLoaded:Ember.on("loaded",function(){this.set("_originalPosition",this.stringify()),this.set("initialPosYOffset",this.element.getAttribute("position").y)}),cameraMoveFastTask:(0,a.task)(regeneratorRuntime.mark(function e(){var t,r,n,l,o,i,s,u,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.timeout)(10);case 2:t=this.element,r=t.getAttribute("rotation"),n=r.x,l=r.y,o=t.getAttribute("position"),i=o.x,s=o.y,u=o.z,this.get("_originalPosition")!==this.stringify()&&this.set("posYOffset",this.get("initialPosYOffset")),s-=this.get("initialPosYOffset"),m={rotX:n,rotY:l,posX:i,posY:s,posZ:u},this.set("params",m),this.sendAction("cameraMoveFast",m),this.get("cameraMoveFastTask").perform();case 16:case"end":return e.stop()}},e,this)})).on("loaded"),cameraMoveSlowTask:(0,a.task)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.timeout)(1e3);case 2:this.sendAction("cameraMoveSlow",this.get("params")),this.get("cameraMoveSlowTask").perform();case 4:case"end":return e.stop()}},e,this)})).on("loaded")})}),define("dummy/controllers/360-image-gallery",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({dur:300,actions:{changeMaterial:function(e){this.transitionToRoute("360-image-gallery."+e.substr(1))}}})}),define("dummy/controllers/application",["exports","ember","ember-macro-helpers/raw","ember-awesome-macros"],function(e,t,r,a){var n=3,l=.25,o=n+l,i=n-l;e.default=t.default.Controller.extend({people:t.default.inject.service(),queryParams:["rotX","rotY","posX","posY","posZ"],rotX:0,rotY:0,posX:0,posY:0,posZ:0,linksHoverTop:o,linksHoverBottom:i,shouldHideBackButton:(0,a.eq)("currentRouteName",(0,r.default)("index")),otherPeople:t.default.computed.readOnly("people.otherPeople"),updateRoute:t.default.observer("currentRouteName",function(){this.get("people").updateRoute(this.get("currentRouteName"))}),actions:{updateQueryParams:function(e){this.setProperties(e)},sendData:function(e){this.get("people").updateLocation(e)}}})}),define("dummy/helpers/and",["exports","ember","ember-truth-helpers/helpers/and"],function(e,t,r){var a=null;t.default.Helper?a=t.default.Helper.helper(r.andHelper):t.default.HTMLBars.makeBoundHelper&&(a=t.default.HTMLBars.makeBoundHelper(r.andHelper)),e.default=a}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment"],function(e,t,r){function a(){return n}e.appVersion=a;var n=r.default.APP.version;e.default=t.default.Helper.helper(a)}),define("dummy/helpers/cancel-all",["exports","ember","ember-concurrency/-helpers"],function(e,t,r){function a(e){var a=e[0];return a&&"function"==typeof a.cancelAll||t.default.assert("The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed "+a,!1),(0,r.taskHelperClosure)("cancelAll",e)}e.cancelHelper=a,e.default=t.default.Helper.helper(a)}),define("dummy/helpers/emit",["exports","ember-a-frame/helpers/emit"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"emit",{enumerable:!0,get:function(){return t.emit}})}),define("dummy/helpers/eq",["exports","ember","ember-truth-helpers/helpers/equal"],function(e,t,r){var a=null;t.default.Helper?a=t.default.Helper.helper(r.equalHelper):t.default.HTMLBars.makeBoundHelper&&(a=t.default.HTMLBars.makeBoundHelper(r.equalHelper)),e.default=a}),define("dummy/helpers/gt",["exports","ember","ember-truth-helpers/helpers/gt"],function(e,t,r){var a=null;t.default.Helper?a=t.default.Helper.helper(r.gtHelper):t.default.HTMLBars.makeBoundHelper&&(a=t.default.HTMLBars.makeBoundHelper(r.gtHelper)),e.default=a}),define("dummy/helpers/gte",["exports","ember","ember-truth-helpers/helpers/gte"],function(e,t,r){var a=null;t.default.Helper?a=t.default.Helper.helper(r.gteHelper):t.default.HTMLBars.makeBoundHelper&&(a=t.default.HTMLBars.makeBoundHelper(r.gteHelper)),e.default=a}),define("dummy/helpers/is-array",["exports","ember","ember-truth-helpers/helpers/is-array"],function(e,t,r){var a=null;t.default.Helper?a=t.default.Helper.helper(r.isArrayHelper):t.default.HTMLBars.makeBoundHelper&&(a=t.default.HTMLBars.makeBoundHelper(r.isArrayHelper)),e.default=a}),define("dummy/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return t.isEqual}})}),define("dummy/helpers/lt",["exports","ember","ember-truth-helpers/helpers/lt"],function(e,t,r){var a=null;t.default.Helper?a=t.default.Helper.helper(r.ltHelper):t.default.HTMLBars.makeBoundHelper&&(a=t.default.HTMLBars.makeBoundHelper(r.ltHelper)),e.default=a}),define("dummy/helpers/lte",["exports","ember","ember-truth-helpers/helpers/lte"],function(e,t,r){var a=null;t.default.Helper?a=t.default.Helper.helper(r.lteHelper):t.default.HTMLBars.makeBoundHelper&&(a=t.default.HTMLBars.makeBoundHelper(r.lteHelper)),e.default=a}),define("dummy/helpers/not-eq",["exports","ember","ember-truth-helpers/helpers/not-equal"],function(e,t,r){var a=null;t.default.Helper?a=t.default.Helper.helper(r.notEqualHelper):t.default.HTMLBars.makeBoundHelper&&(a=t.default.HTMLBars.makeBoundHelper(r.notEqualHelper)),e.default=a}),define("dummy/helpers/not",["exports","ember","ember-truth-helpers/helpers/not"],function(e,t,r){var a=null;t.default.Helper?a=t.default.Helper.helper(r.notHelper):t.default.HTMLBars.makeBoundHelper&&(a=t.default.HTMLBars.makeBoundHelper(r.notHelper)),e.default=a}),define("dummy/helpers/or",["exports","ember","ember-truth-helpers/helpers/or"],function(e,t,r){var a=null;t.default.Helper?a=t.default.Helper.helper(r.orHelper):t.default.HTMLBars.makeBoundHelper&&(a=t.default.HTMLBars.makeBoundHelper(r.orHelper)),e.default=a}),define("dummy/helpers/perform",["exports","ember","ember-concurrency/-helpers"],function(e,t,r){function a(e,t){return(0,r.taskHelperClosure)("perform",e,t)}e.performHelper=a,e.default=t.default.Helper.helper(a)}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/helpers/task",["exports","ember"],function(e,t){function r(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function a(e){return Array.isArray(e)?e:Array.from(e)}function n(e){var t=a(e),n=t[0],l=t.slice(1);return n._curry.apply(n,r(l))}e.default=t.default.Helper.helper(n)}),define("dummy/helpers/to-a-str",["exports","ember-a-frame/helpers/to-a-str"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"toAStr",{enumerable:!0,get:function(){return t.toAStr}})}),define("dummy/helpers/transition-to",["exports","ember-transition-helper/helpers/transition-to"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"transitionTo",{enumerable:!0,get:function(){return t.transitionTo}})}),define("dummy/helpers/xor",["exports","ember","ember-truth-helpers/helpers/xor"],function(e,t,r){var a=null;t.default.Helper?a=t.default.Helper.helper(r.xorHelper):t.default.HTMLBars.makeBoundHelper&&(a=t.default.HTMLBars.makeBoundHelper(r.xorHelper)),e.default=a}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,r){var a=r.default.APP,n=a.name,l=a.version;e.default={name:"App Version",initialize:(0,t.default)(n,l)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("dummy/initializers/ember-concurrency",["exports","ember-concurrency"],function(e,t){e.default={name:"ember-concurrency",initialize:function(){}}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,r){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,r){function a(){var e=arguments[1]||arguments[0];if(r.default.exportApplicationGlobal!==!1){var a;if("undefined"!=typeof window)a=window;else if("undefined"!=typeof global)a=global;else{if("undefined"==typeof self)return;a=self}var n,l=r.default.exportApplicationGlobal;n="string"==typeof l?l:t.default.String.classify(r.default.modulePrefix),a[n]||(a[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[n]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("dummy/initializers/truth-helpers",["exports","ember","ember-truth-helpers/utils/register-helper","ember-truth-helpers/helpers/and","ember-truth-helpers/helpers/or","ember-truth-helpers/helpers/equal","ember-truth-helpers/helpers/not","ember-truth-helpers/helpers/is-array","ember-truth-helpers/helpers/not-equal","ember-truth-helpers/helpers/gt","ember-truth-helpers/helpers/gte","ember-truth-helpers/helpers/lt","ember-truth-helpers/helpers/lte"],function(e,t,r,a,n,l,o,i,s,u,m,d,p){function c(){t.default.Helper||((0,r.registerHelper)("and",a.andHelper),(0,r.registerHelper)("or",n.orHelper),(0,r.registerHelper)("eq",l.equalHelper),(0,r.registerHelper)("not",o.notHelper),(0,r.registerHelper)("is-array",i.isArrayHelper),(0,r.registerHelper)("not-eq",s.notEqualHelper),(0,r.registerHelper)("gt",u.gtHelper),(0,r.registerHelper)("gte",m.gteHelper),(0,r.registerHelper)("lt",d.ltHelper),(0,r.registerHelper)("lte",p.lteHelper))}e.initialize=c,e.default={name:"truth-helpers",initialize:c}}),define("dummy/instance-initializers/connect-socket",["exports"],function(e){function t(e){function t(e){i.send(JSON.stringify({type:"connected"})),l.updateRoute()}function r(e){}function a(e){var t=e.data.substr(0,36),r=JSON.parse(e.data.substr(37)),a=l.get("otherPeople");switch(r.type){case"id":a.pushObject(Ember.Object.create({id:t})),l.updateRoute();break;case"move":a.findBy("id",t).set("params",r.data);break;case"route":a.findBy("id",t).set("route",r.data);break;case"left":a.removeObject(l.get("otherPeople").findBy("id",t))}}function n(e){}var l=e.lookup("service:people"),o="wss://ember-a-frame-server.herokuapp.com/",i=new WebSocket(o);i.onopen=function(e){t(e)},i.onclose=function(e){r(e)},i.onmessage=function(e){a(e)},i.onerror=function(e){n(e)},l.set("ws",i)}e.initialize=t,e.default={name:"connect-socket",initialize:t}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/macros/to-a-str",["exports","ember-a-frame/macros/to-a-str"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,r){var a=t.default.Router.extend({location:r.default.locationType,rootURL:r.default.rootURL});a.map(function(){this.route("hello-world"),this.route("360-image-gallery",function(){this.route("city"),this.route("cubes"),this.route("sechelt")})}),e.default=a}),define("dummy/routes/360-image-gallery",["exports","ember"],function(e,t){e.default=t.default.Route.extend({actions:{updateSrc:function(e){var r=this;t.default.run.scheduleOnce("afterRender",function(){r.controller.set("skySrc",e)})}}})}),define("dummy/routes/360-image-gallery/city",["exports","ember"],function(e,t){e.default=t.default.Route.extend({beforeModel:function(e){e.send("updateSrc","#city")}})}),define("dummy/routes/360-image-gallery/cubes",["exports","ember"],function(e,t){e.default=t.default.Route.extend({beforeModel:function(e){e.send("updateSrc","#cubes")}})}),define("dummy/routes/360-image-gallery/index",["exports","ember"],function(e,t){e.default=t.default.Route.extend({beforeModel:function(){this.transitionTo("360-image-gallery.city")}})}),define("dummy/routes/360-image-gallery/sechelt",["exports","ember"],function(e,t){e.default=t.default.Route.extend({beforeModel:function(e){e.send("updateSrc","#sechelt")}})}),define("dummy/routes/application",["exports","ember"],function(e,t){e.default=t.default.Route.extend({people:t.default.inject.service(),queryParams:{rotX:{replace:!0},rotY:{replace:!0},posX:{replace:!0},posY:{replace:!0},posZ:{replace:!0}},actions:{didTransition:function(){}}})}),define("dummy/routes/hello-world",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/people",["exports","ember"],function(e,t){e.default=t.default.Service.extend(t.default.Evented,{otherPeople:t.default.A(),updateLocation:function(e){this.get("ws").readyState===WebSocket.OPEN&&this.get("ws").send(JSON.stringify({type:"move",data:e}))},updateRoute:function(e){e?this.set("myRoute",e):e=this.get("myRoute"),this.get("ws").readyState===WebSocket.OPEN&&this.get("ws").send(JSON.stringify({type:"route",data:e}))}})}),define("dummy/templates/360-image-gallery",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"ZbV/jQ/M",block:'{"statements":[["open-element","a-assets",[]],["flush-element"],["text","\\n  "],["open-element","audio",[]],["static-attr","id","click-sound"],["static-attr","src","https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"],["flush-element"],["close-element"],["text","\\n\\n  "],["comment"," Images. "],["text","\\n  "],["open-element","img",[]],["static-attr","id","city"],["static-attr","src","/city.jpg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","city-thumb"],["static-attr","src","/city.jpg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","cubes"],["static-attr","src","/cubes.jpg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","cubes-thumb"],["static-attr","src","/cubes.jpg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","sechelt"],["static-attr","src","/sechelt.jpg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","sechelt-thumb"],["static-attr","src","/sechelt.jpg"],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["comment"," 360-degree image. "],["text","\\n"],["append",["helper",["a-sky"],null,[["id","radius","src","dur","actionReceiver","changeMaterial"],["image-360","10",["get",["skySrc"]],["get",["dur"]],["get",["sky"]],"changeMaterial"]]],false],["text","\\n\\n"],["comment"," Link we will build. "],["text","\\n"],["open-element","a-entity",[]],["static-attr","layout","type: line; margin: 1.5"],["static-attr","position","-1.5 1.5 -4"],["flush-element"],["text","\\n  "],["append",["helper",["a-link"],null,[["thumb","src","dur","click"],["#cubes-thumb","#cubes",["get",["dur"]],["helper",["emit"],[["get",["sky"]],"startChangingMaterial","#cubes"],null]]]],false],["text","\\n  "],["append",["helper",["a-link"],null,[["thumb","src","dur","click"],["#city-thumb","#city",["get",["dur"]],["helper",["emit"],[["get",["sky"]],"startChangingMaterial","#city"],null]]]],false],["text","\\n  "],["append",["helper",["a-link"],null,[["thumb","src","dur","click"],["#sechelt-thumb","#sechelt",["get",["dur"]],["helper",["emit"],[["get",["sky"]],"startChangingMaterial","#sechelt"],null]]]],false],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/360-image-gallery.hbs"}})}),define("dummy/templates/360-image-gallery/city",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"UvTki2F0",block:'{"statements":[["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/360-image-gallery/city.hbs"}})}),define("dummy/templates/360-image-gallery/cubes",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"SWtbRujv",block:'{"statements":[["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/360-image-gallery/cubes.hbs"}})}),define("dummy/templates/360-image-gallery/index",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"awJbI5+I",block:'{"statements":[["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/360-image-gallery/index.hbs"}})}),define("dummy/templates/360-image-gallery/sechelt",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"p3WcFhRm",block:'{"statements":[["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/360-image-gallery/sechelt.hbs"}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"+dNgGL1j",block:'{"statements":[["open-element","a-scene",[]],["flush-element"],["text","\\n  "],["append",["unknown",["outlet"]],false],["text","\\n\\n  "],["open-element","a-entity",[]],["static-attr","layout","type: line; margin: 1.5"],["dynamic-attr","position",["concat",["-1.5 ",["unknown",["linksHoverTop"]]," -4"]]],["dynamic-attr","animation__hover",["concat",["property: position; dir: alternate; loop: true; easing: easeInOutSine; to: -1.5 ",["unknown",["linksHoverBottom"]]," -4"]]],["flush-element"],["text","\\n    "],["append",["helper",["a-back-button"],null,[["class","text","shouldHide","click"],["link","Home",["get",["shouldHideBackButton"]],["helper",["transition-to"],["index"],null]]]],false],["text","\\n    "],["append",["helper",["a-back-button"],null,[["class","text","click"],["link","Hello World",["helper",["transition-to"],["hello-world"],null]]]],false],["text","\\n    "],["append",["helper",["a-back-button"],null,[["class","text","click"],["link","360 Image Gallery",["helper",["transition-to"],["360-image-gallery"],null]]]],false],["text","\\n  "],["close-element"],["text","\\n\\n"],["block",["each"],[["get",["otherPeople"]]],null,2],["text","\\n  "],["append",["helper",["my-camera"],null,[["rotX","rotY","posX","posY","posZ","cameraMoveSlow","cameraMoveFast"],[["get",["rotX"]],["get",["rotY"]],["get",["posX"]],["get",["posY"]],["get",["posZ"]],["helper",["action"],[["get",[null]],"updateQueryParams"],null],["helper",["action"],[["get",[null]],"sendData"],null]]]],false],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","          "],["open-element","a-box",[]],["dynamic-attr","rotation",["concat",[["unknown",["p","rotX"]]," ",["unknown",["p","rotY"]]," 0"]]],["dynamic-attr","position",["concat",[["unknown",["p","posX"]]," ",["unknown",["p","posY"]]," ",["unknown",["p","posZ"]]]]],["flush-element"],["text","\\n          "],["close-element"],["text","\\n"]],"locals":["p"]},{"statements":[["block",["with"],[["get",["person","params"]]],null,0]],"locals":[]},{"statements":[["block",["if"],[["helper",["eq"],[["get",["person","route"]],["get",["currentRouteName"]]],null]],null,1]],"locals":["person"]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/components/a-back-button",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"dTWj60OJ",block:'{"statements":[],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/a-back-button.hbs"}})}),define("dummy/templates/components/a-link",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"Z+viZvp5",block:'{"statements":[["yield","default"]],"locals":[],"named":[],"yields":["default"],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/a-link.hbs"}})}),define("dummy/templates/components/a-sky",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"cuo9r7d/",block:'{"statements":[["yield","default"]],"locals":[],"named":[],"yields":["default"],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/a-sky.hbs"}})}),define("dummy/templates/components/my-camera",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"vkCt8tkS",block:'{"statements":[["open-element","a-cursor",[]],["static-attr","animation__click","property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"],["static-attr","animation__fusing","property: scale; startEvents: fusing; pauseEvents: mouseleave; from: 1 1 1; to: 0.1 0.1 0.1; dur: 1500"],["static-attr","event-set__1","_event: mouseenter; color: springgreen"],["static-attr","event-set__2","_event: mouseleave; color: black"],["static-attr","raycaster","objects: .link"],["flush-element"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/my-camera.hbs"}})}),define("dummy/templates/hello-world",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"Q6On34hI",block:'{"statements":[["append",["helper",["a-box"],null,[["position","rotation","color"],["-1 0.5 -3","0 45 0","#4CC3D9"]]],false],["text","\\n"],["append",["helper",["a-sphere"],null,[["position","radius","color"],["0 1.25 -5","1.25","#EF2D5E"]]],false],["text","\\n"],["append",["helper",["a-cylinder"],null,[["position","radius","height","color"],["1 0.75 -3","0.5","1.5","#FFC65D"]]],false],["text","\\n"],["append",["helper",["a-plane"],null,[["position","rotation","width","height","color"],["0 0 -4","-90 0 0","4","4","#7BC8A4"]]],false],["text","\\n"],["append",["helper",["a-sky"],null,[["color"],["#ECECEC"]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/hello-world.hbs"}})}),define("dummy/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"G68WG6XG",block:'{"statements":[["append",["helper",["a-sky"],null,[["color"],["#444"]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/utils/to-a-str",["exports","ember-a-frame/utils/to-a-str"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var r=t+"/config/environment",a=document.querySelector('meta[name="'+r+'"]').getAttribute("content"),n=JSON.parse(unescape(a)),l={default:n};return Object.defineProperty(l,"__esModule",{value:!0}),l}catch(e){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-a-frame",version:"0.0.1+b9cad099"});