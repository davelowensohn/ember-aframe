"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment","aframe","npm:aframe-animation-component","npm:aframe-event-set-component","npm:aframe-layout-component"],function(e,t,n,r,a,o,i,s,l){var u=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,u=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:n.default}),(0,r.default)(u,a.default.modulePrefix),e.default=u}),define("dummy/components/a-back-button",["exports","ember-a-frame/components/a-entity","ember-awesome-macros"],function(e,t,n){function r(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var a=r(["value: ","; width: 4; color: black; align: center"],["value: ","; width: 4; color: black; align: center"]),o=t.default.extend({classNames:["link"],attributeBindings:["a-text:text"],geometry:"primitive: plane; height: 1; width: 1",material:"shader: flat",visible:(0,n.toString)((0,n.not)("shouldHide")),"a-text":(0,n.tag)(a,"text")});o.reopenClass({positionalParams:["text"]}),e.default=o}),define("dummy/components/a-box",["exports","ember-a-frame/components/a-box"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-camera",["exports","ember-a-frame/components/a-camera"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-cylinder",["exports","ember-a-frame/components/a-cylinder"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-entity",["exports","ember-a-frame/components/a-entity"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-link",["exports","ember-a-frame/components/a-entity","ember-awesome-macros"],function(e,t,n){function r(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var a=r(["shader: flat; src: ",""],["shader: flat; src: ",""]);e.default=t.default.extend({classNames:["link"],attributeBindings:["event-set__1","event-set__2","event-set__3","event-set__4"],geometry:"primitive: plane; height: 1; width: 1",material:(0,n.tag)(a,"thumb"),sound:"on: click; src: #click-sound","event-set__1":"_event: mousedown; scale: 1 1 1","event-set__2":"_event: mouseup; scale: 1.2 1.2 1","event-set__3":"_event: mouseenter; scale: 1.2 1.2 1","event-set__4":"_event: mouseleave; scale: 1 1 1"})}),define("dummy/components/a-plane",["exports","ember-a-frame/components/a-plane"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-scene",["exports","ember-a-frame/components/a-scene"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-sky",["exports","ember-a-frame/components/a-sky","ember-a-frame/macros/stringify-component","ember-macro-helpers/raw","ember-concurrency","ember-component-inbound-actions/inbound-actions"],function(e,t,n,r,a,o){e.default=t.default.extend(o.default,{attributeBindings:["animation__fade"],animation__fade:(0,n.default)("animation",{property:(0,r.default)("material.color"),startEvents:(0,r.default)("set-image-fade"),dir:(0,r.default)("alternate"),dur:"dur",from:(0,r.default)("#FFF"),to:(0,r.default)("#000")}),changeMaterialTask:(0,a.task)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.timeout)(this.get("dur"));case 2:this.sendAction("changeMaterial",t);case 3:case"end":return e.stop()}},e,this)})),actions:{startChangingMaterial:function(e){this.element.emit("set-image-fade"),this.get("changeMaterialTask").perform(e)}}})}),define("dummy/components/a-sphere",["exports","ember-a-frame/components/a-sphere"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/my-camera",["exports","ember-a-frame/components/a-camera","ember-awesome-macros","ember-concurrency","ember-a-frame/utils/stringify-coordinates"],function(e,t,n,r,a){function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var i=o([""," "," 0"],[""," "," 0"]),s=o([""," "," ",""],[""," "," ",""]);e.default=t.default.extend({rotation:(0,n.tag)(i,"rotX","rotY"),position:(0,n.tag)(s,"posX",(0,n.sum)("posY","posYOffset"),"posZ"),initialPosYOffset:0,posYOffset:0,stringify:function(){return(0,a.default)(this.element.getAttribute("position")).trim()},onLoaded:Ember.on("loaded",function(){this.set("_originalPosition",this.stringify()),this.set("initialPosYOffset",this.element.getAttribute("position").y)}),cameraMoveFastTask:(0,r.task)(regeneratorRuntime.mark(function e(){var t,n,a,o,i,s,l,u,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.timeout)(10);case 2:t=this.element,n=t.getAttribute("rotation"),a=n.x,o=n.y,i=t.getAttribute("position"),s=i.x,l=i.y,u=i.z,m={rotX:a,rotY:o,posX:s,posY:l,posZ:u},this.sendAction("cameraMoveFast",m),this.set("params",m),this.get("cameraMoveFastTask").perform();case 14:case"end":return e.stop()}},e,this)})).on("loaded"),cameraMoveSlowTask:(0,r.task)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.timeout)(1e3);case 2:this.get("_originalPosition")!==this.stringify()&&this.set("posYOffset",this.get("initialPosYOffset")),t=this.get("params"),t.posY-=this.get("initialPosYOffset"),this.sendAction("cameraMoveSlow",t),this.get("cameraMoveSlowTask").perform();case 7:case"end":return e.stop()}},e,this)})).on("loaded")})}),define("dummy/components/other-person",["exports","ember-a-frame/components/a-entity","ember-a-frame/macros/stringify-coordinates","ember-computed"],function(e,t,n,r){e.default=t.default.extend({params:{rotX:0,rotY:0,posX:0,posY:0,posZ:0},_rotX:(0,r.readOnly)("params.rotX"),_rotY:(0,r.readOnly)("params.rotY"),_posX:(0,r.readOnly)("params.posX"),_posY:(0,r.readOnly)("params.posY"),_posZ:(0,r.readOnly)("params.posZ"),rotation:(0,n.default)({x:"_rotX",y:"_rotY",z:0}),position:(0,n.default)({x:"_posX",y:"_posY",z:"_posZ"}),modelRotation:(0,n.default)({x:0,y:181,z:0}),modelPosition:(0,n.default)({x:-.25,y:-.75,z:.75})})}),define("dummy/controllers/360-image-gallery",["exports","ember-controller"],function(e,t){e.default=t.default.extend({dur:300,actions:{changeMaterial:function(e){this.transitionToRoute("360-image-gallery."+e.substr(1))}}})}),define("dummy/controllers/application",["exports","ember-controller","ember-service/inject","ember-computed","ember-metal/observer","ember-macro-helpers/raw","ember-awesome-macros"],function(e,t,n,r,a,o,i){e.default=t.default.extend({people:(0,n.default)(),queryParams:["rotX","rotY","posX","posY","posZ"],rotX:0,rotY:0,posX:0,posY:0,posZ:0,shouldHideBackButton:(0,i.eq)("currentRouteName",(0,o.default)("index")),otherPeople:(0,r.readOnly)("people.otherPeople"),updateRoute:(0,a.default)("currentRouteName",function(){this.get("people").updateRoute(this.get("currentRouteName"))}),actions:{updateQueryParams:function(e){this.setProperties(e)},sendData:function(e){this.get("people").updateLocation(e)}}})}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment"],function(e,t,n){function r(){return a}e.appVersion=r;var a=n.default.APP.version;e.default=t.default.Helper.helper(r)}),define("dummy/helpers/cancel-all",["exports","ember","ember-concurrency/-helpers"],function(e,t,n){function r(e){var r=e[0];return r&&"function"==typeof r.cancelAll||t.default.assert("The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed "+r,!1),(0,n.taskHelperClosure)("cancelAll",e)}e.cancelHelper=r,e.default=t.default.Helper.helper(r)}),define("dummy/helpers/parse-coordinates",["exports","ember-a-frame/helpers/parse-coordinates"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"parseCoordinates",{enumerable:!0,get:function(){return t.parseCoordinates}})}),define("dummy/helpers/perform",["exports","ember","ember-concurrency/-helpers"],function(e,t,n){function r(e,t){return(0,n.taskHelperClosure)("perform",e,t)}e.performHelper=r,e.default=t.default.Helper.helper(r)}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/send",["exports","ember-component-inbound-actions/helpers/send"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/helpers/stringify-component",["exports","ember-a-frame/helpers/stringify-component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"stringifyComponent",{enumerable:!0,get:function(){return t.stringifyComponent}})}),define("dummy/helpers/stringify-coordinates",["exports","ember-a-frame/helpers/stringify-coordinates"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"stringifyCoordinates",{enumerable:!0,get:function(){return t.stringifyCoordinates}})}),define("dummy/helpers/stringify",["exports","ember-a-frame/helpers/stringify"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return t.stringify}})}),define("dummy/helpers/task",["exports","ember"],function(e,t){function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e){return Array.isArray(e)?e:Array.from(e)}function a(e){var t=r(e),a=t[0],o=t.slice(1);return a._curry.apply(a,n(o))}e.default=t.default.Helper.helper(a)}),define("dummy/helpers/transition-to",["exports","ember-transition-helper/helpers/transition-to"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"transitionTo",{enumerable:!0,get:function(){return t.transitionTo}})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){var r=n.default.APP,a=r.name,o=r.version;e.default={name:"App Version",initialize:(0,t.default)(a,o)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("dummy/initializers/ember-concurrency",["exports","ember-concurrency"],function(e,t){e.default={name:"ember-concurrency",initialize:function(){}}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function r(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var r;if("undefined"!=typeof window)r=window;else if("undefined"!=typeof global)r=global;else{if("undefined"==typeof self)return;r=self}var a,o=n.default.exportApplicationGlobal;a="string"==typeof o?o:t.default.String.classify(n.default.modulePrefix),r[a]||(r[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[a]}}))}}e.initialize=r,e.default={name:"export-application-global",initialize:r}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("dummy/instance-initializers/connect-socket",["exports"],function(e){function t(e){function t(e){o.updateRoute()}function n(e){}function r(e){var t=JSON.parse(e.data),n=t.id,r=o.get("otherPeople"),a=r.findBy("id",n);switch(t.type){case"move":a.set("params",t.data);break;case"join":r.pushObject(Ember.Object.create({id:n}));break;case"left":r.removeObject(a)}}function a(e){}var o=e.lookup("service:people"),i=new WebSocket("wss://ember-a-frame-server.herokuapp.com/");i.onopen=function(e){t(e)},i.onclose=function(e){n(e)},i.onmessage=function(e){r(e)},i.onerror=function(e){a(e)},o.set("ws",i)}e.initialize=t,e.default={name:"connect-socket",initialize:t}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/macros/parse-coordinates",["exports","ember-a-frame/macros/parse-coordinates"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/macros/stringify-component",["exports","ember-a-frame/macros/stringify-component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/macros/stringify-coordinates",["exports","ember-a-frame/macros/stringify-coordinates"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/macros/stringify",["exports","ember-a-frame/macros/stringify"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var r=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});r.map(function(){this.route("hello-world"),this.route("360-image-gallery",function(){this.route("city"),this.route("cubes"),this.route("sechelt")})}),e.default=r}),define("dummy/routes/360-image-gallery",["exports","ember-route","ember-runloop"],function(e,t,n){e.default=t.default.extend({actions:{updateSrc:function(e){var t=this;(0,n.scheduleOnce)("afterRender",function(){t.controller.set("skySrc",e)})}}})}),define("dummy/routes/360-image-gallery/-base",["exports","ember-route"],function(e,t){e.default=t.default.extend({beforeModel:function(e){e.send("updateSrc",this.get("updateSrc"))}})}),define("dummy/routes/360-image-gallery/city",["exports","dummy/routes/360-image-gallery/-base"],function(e,t){e.default=t.default.extend({updateSrc:"#city"})}),define("dummy/routes/360-image-gallery/cubes",["exports","dummy/routes/360-image-gallery/-base"],function(e,t){e.default=t.default.extend({updateSrc:"#cubes"})}),define("dummy/routes/360-image-gallery/index",["exports","ember-route"],function(e,t){e.default=t.default.extend({beforeModel:function(){this.transitionTo("360-image-gallery.city")}})}),define("dummy/routes/360-image-gallery/sechelt",["exports","dummy/routes/360-image-gallery/-base"],function(e,t){e.default=t.default.extend({updateSrc:"#sechelt"})}),define("dummy/routes/application",["exports","ember-route","ember-service/inject"],function(e,t,n){e.default=t.default.extend({people:(0,n.default)(),queryParams:{rotX:{replace:!0},rotY:{replace:!0},posX:{replace:!0},posY:{replace:!0},posZ:{replace:!0}},actions:{didTransition:function(){}}})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/people",["exports","ember","ember-concurrency"],function(e,t,n){e.default=t.default.Service.extend(t.default.Evented,{otherPeople:t.default.A(),updateLocation:function(e){this.send({type:"move",data:e})},updateRoute:function(e){if(e)this.set("myRoute",e),this.get("otherPeople").clear();else if(e=this.get("myRoute"),!e)return;this.send({type:"route",data:e})},send:function(e){var t=this.get("ws");t.readyState===WebSocket.OPEN&&t.send(JSON.stringify(e))},updateRouteTask:(0,n.task)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.timeout)(5e3);case 2:this.updateRoute(),this.get("updateRouteTask").perform();case 4:case"end":return e.stop()}},e,this)})).on("init")})}),define("dummy/templates/360-image-gallery",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"8hDFttDq",block:'{"statements":[["open-element","a-assets",[]],["flush-element"],["text","\\n  "],["open-element","audio",[]],["static-attr","id","click-sound"],["static-attr","src","https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"],["flush-element"],["close-element"],["text","\\n\\n  "],["comment"," Images. "],["text","\\n  "],["open-element","img",[]],["static-attr","id","city"],["static-attr","src","/city.jpg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","city-thumb"],["static-attr","src","/city.jpg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","cubes"],["static-attr","src","/cubes.jpg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","cubes-thumb"],["static-attr","src","/cubes.jpg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","sechelt"],["static-attr","src","/sechelt.jpg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","sechelt-thumb"],["static-attr","src","/sechelt.jpg"],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["comment"," 360-degree image. "],["text","\\n"],["append",["helper",["a-sky"],null,[["id","radius","src","dur","actionReceiver","changeMaterial"],["image-360","10",["get",["skySrc"]],["get",["dur"]],["get",["sky"]],"changeMaterial"]]],false],["text","\\n\\n"],["comment"," Link we will build. "],["text","\\n"],["open-element","a-entity",[]],["static-attr","layout","type: line; margin: 1.5"],["static-attr","position","-1.5 1.5 -4"],["flush-element"],["text","\\n  "],["append",["helper",["a-link"],null,[["thumb","src","dur","click"],["#cubes-thumb","#cubes",["get",["dur"]],["helper",["send"],[["get",["sky"]],"startChangingMaterial","#cubes"],null]]]],false],["text","\\n  "],["append",["helper",["a-link"],null,[["thumb","src","dur","click"],["#city-thumb","#city",["get",["dur"]],["helper",["send"],[["get",["sky"]],"startChangingMaterial","#city"],null]]]],false],["text","\\n  "],["append",["helper",["a-link"],null,[["thumb","src","dur","click"],["#sechelt-thumb","#sechelt",["get",["dur"]],["helper",["send"],[["get",["sky"]],"startChangingMaterial","#sechelt"],null]]]],false],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/360-image-gallery.hbs"}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"JH+yxIfC",block:'{"statements":[["open-element","a-scene",[]],["flush-element"],["text","\\n  "],["open-element","a-assets",[]],["flush-element"],["text","\\n    "],["open-element","a-asset-item",[]],["static-attr","id","headObj"],["static-attr","src","/tex.obj"],["flush-element"],["close-element"],["text","\\n    "],["open-element","a-asset-item",[]],["static-attr","id","headMtl"],["static-attr","src","/tex.mtl"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["append",["unknown",["outlet"]],false],["text","\\n\\n  "],["open-element","a-entity",[]],["static-attr","position","-1.5 3 -4"],["flush-element"],["text","\\n    "],["open-element","a-entity",[]],["static-attr","layout","\\n        type: line;\\n        margin: 1.5\\n      "],["static-attr","position","0 .25 0"],["static-attr","animation__hover","\\n        property: position;\\n        dir: alternate;\\n        loop: true;\\n        easing: easeInOutSine;\\n        to: 0 -.25 0\\n      "],["flush-element"],["text","\\n      "],["append",["helper",["a-back-button"],["Home"],[["shouldHide","click"],[["get",["shouldHideBackButton"]],["helper",["transition-to"],["index"],null]]]],false],["text","\\n      "],["append",["helper",["a-back-button"],["Hello World"],[["click"],[["helper",["transition-to"],["hello-world"],null]]]],false],["text","\\n      "],["append",["helper",["a-back-button"],["360 Image Gallery"],[["click"],[["helper",["transition-to"],["360-image-gallery"],null]]]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n"],["block",["each"],[["get",["otherPeople"]]],null,0],["text","\\n  "],["append",["helper",["my-camera"],null,[["rotX","rotY","posX","posY","posZ","cameraMoveSlow","cameraMoveFast"],[["get",["rotX"]],["get",["rotY"]],["get",["posX"]],["get",["posY"]],["get",["posZ"]],["helper",["action"],[["get",[null]],"updateQueryParams"],null],["helper",["action"],[["get",[null]],"sendData"],null]]]],false],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["append",["helper",["other-person"],null,[["obj","mtl","params"],["#headObj","#headMtl",["get",["person","params"]]]]],false],["text","\\n"]],"locals":["person"]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/components/my-camera",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"vkCt8tkS",block:'{"statements":[["open-element","a-cursor",[]],["static-attr","animation__click","property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"],["static-attr","animation__fusing","property: scale; startEvents: fusing; pauseEvents: mouseleave; from: 1 1 1; to: 0.1 0.1 0.1; dur: 1500"],["static-attr","event-set__1","_event: mouseenter; color: springgreen"],["static-attr","event-set__2","_event: mouseleave; color: black"],["static-attr","raycaster","objects: .link"],["flush-element"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/my-camera.hbs"}})}),define("dummy/templates/components/other-person",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"SXVxVDS1",block:'{"statements":[["open-element","a-entity",[]],["dynamic-attr","obj-model",["concat",["obj: ",["unknown",["obj"]],"; mtl: ",["unknown",["mtl"]]]]],["dynamic-attr","rotation",["unknown",["modelRotation"]],null],["dynamic-attr","position",["unknown",["modelPosition"]],null],["flush-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/other-person.hbs"}})}),define("dummy/templates/hello-world",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"Q6On34hI",block:'{"statements":[["append",["helper",["a-box"],null,[["position","rotation","color"],["-1 0.5 -3","0 45 0","#4CC3D9"]]],false],["text","\\n"],["append",["helper",["a-sphere"],null,[["position","radius","color"],["0 1.25 -5","1.25","#EF2D5E"]]],false],["text","\\n"],["append",["helper",["a-cylinder"],null,[["position","radius","height","color"],["1 0.75 -3","0.5","1.5","#FFC65D"]]],false],["text","\\n"],["append",["helper",["a-plane"],null,[["position","rotation","width","height","color"],["0 0 -4","-90 0 0","4","4","#7BC8A4"]]],false],["text","\\n"],["append",["helper",["a-sky"],null,[["color"],["#ECECEC"]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/hello-world.hbs"}})}),define("dummy/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"G68WG6XG",block:'{"statements":[["append",["helper",["a-sky"],null,[["color"],["#444"]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/utils/parse-coordinates",["exports","ember-a-frame/utils/parse-coordinates"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/utils/stringify-component",["exports","ember-a-frame/utils/stringify-component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/utils/stringify-coordinates",["exports","ember-a-frame/utils/stringify-coordinates"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/utils/stringify",["exports","ember-a-frame/utils/stringify"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/config/environment",["ember"],function(e){try{var t=document.querySelector('meta[name="dummy/config/environment"]').getAttribute("content"),n=JSON.parse(unescape(t)),r={default:n};return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(e){throw new Error('Could not read config from meta tag with name "dummy/config/environment".')}}),runningTests||require("dummy/app").default.create({name:"ember-a-frame",version:"0.0.2+fcaa9260"});