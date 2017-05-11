"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment","aframe","npm:aframe-animation-component","npm:aframe-event-set-component","npm:aframe-layout-component"],function(e,t,n,a,o,r,l,s,i){var m=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,m=t.default.Application.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:n.default}),(0,a.default)(m,o.default.modulePrefix),e.default=m}),define("dummy/components/a-back-button",["exports","ember-a-frame/components/a-entity","ember-evented/on","ember-macro-helpers/computed","ember-a-frame/utils/parse-coordinates","ember-a-frame/utils/stringify-coordinates","ember-a-frame/utils/stringify-component","ember-a-frame/mixins/a-attribute-observer","ember-awesome-macros"],function(e,t,n,a,o,r,l,s,i){var m=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["value: ","; width: 4; color: black; align: center"],["value: ","; width: 4; color: black; align: center"]),u=t.default.extend(s.default,{classNames:["link"],attributeBindings:["a-text:text"],attributesToObserve:{position:{}},onDidInsertElement:(0,n.default)("didInsertElement",function(){}),onWillDestroyElement:(0,n.default)("willDestroyElement",function(){}),geometry:"primitive: plane; height: 1; width: 1",material:"shader: flat",visible:(0,i.toString)((0,i.not)("shouldHide")),"a-text":(0,i.tag)(m,"text")});u.reopenClass({positionalParams:["text"]}),e.default=u}),define("dummy/components/a-entity",["exports","ember-a-frame/components/a-entity"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-link",["exports","ember-a-frame/components/a-entity","ember-awesome-macros"],function(e,t,n){var a=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["shader: flat; src: ",""],["shader: flat; src: ",""]);e.default=t.default.extend({classNames:["link"],attributeBindings:["event-set__1","event-set__2","event-set__3","event-set__4"],geometry:"primitive: plane; height: 1; width: 1",material:(0,n.tag)(a,"thumb"),sound:"on: click; src: #click-sound","event-set__1":"_event: mousedown; scale: 1 1 1","event-set__2":"_event: mouseup; scale: 1.2 1.2 1","event-set__3":"_event: mouseenter; scale: 1.2 1.2 1","event-set__4":"_event: mouseleave; scale: 1 1 1"})}),define("dummy/components/a-scene",["exports","ember-a-frame/components/a-scene"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/a-sky",["exports","ember-a-frame/components/a-sky","ember-a-frame/macros/stringify-component","ember-macro-helpers/raw","ember-concurrency","ember-component-inbound-actions/inbound-actions"],function(e,t,n,a,o,r){e.default=t.default.extend(r.default,{attributeBindings:["animation__fade"],animation__fade:(0,n.default)("animation",{property:(0,a.default)("material.color"),startEvents:(0,a.default)("set-image-fade"),dir:(0,a.default)("alternate"),dur:"dur",from:(0,a.default)("#FFF"),to:(0,a.default)("#000")}),changeMaterialTask:(0,o.task)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.timeout)(this.get("dur"));case 2:this.sendAction("changeMaterial",t);case 3:case"end":return e.stop()}},e,this)})),actions:{startChangingMaterial:function(e){this.element.emit("set-image-fade"),this.get("changeMaterialTask").perform(e)}}})}),define("dummy/components/default-attributes",["exports","ember-component","ember-a-frame/utils/attributes"],function(e,t,n){e.default=t.default.extend({defaultAttributes:n.defaultAttributes})}),define("dummy/components/default-components",["exports","ember-component","ember-a-frame/utils/components"],function(e,t,n){e.default=t.default.extend({defaultComponents:n.defaultComponents})}),define("dummy/components/my-camera",["exports","ember-a-frame/components/a-camera","ember-awesome-macros","ember-concurrency","ember-a-frame/utils/stringify-coordinates"],function(e,t,n,a,o){function r(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var l=r([""," "," 0"],[""," "," 0"]),s=r([""," "," ",""],[""," "," ",""]);e.default=t.default.extend({rotation:(0,n.tag)(l,"rotX","rotY"),position:(0,n.tag)(s,"posX",(0,n.sum)("posY","posYOffset"),"posZ"),initialPosYOffset:0,posYOffset:0,stringify:function(){return(0,o.default)(this.element.getAttribute("position")).trim()},onLoaded:Ember.on("loaded",function(){this.set("_originalPosition",this.stringify()),this.set("initialPosYOffset",this.element.getAttribute("position").y)}),cameraMoveFastTask:(0,a.task)(regeneratorRuntime.mark(function e(){var t,n,o,r,l,s,i,m,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.timeout)(10);case 2:t=this.element,n=t.getAttribute("rotation"),o=n.x,r=n.y,l=t.getAttribute("position"),s=l.x,i=l.y,m=l.z,u={rotX:o,rotY:r,posX:s,posY:i,posZ:m},this.sendAction("cameraMoveFast",u),this.set("params",u),this.get("cameraMoveFastTask").perform();case 14:case"end":return e.stop()}},e,this)})).on("loaded"),cameraMoveSlowTask:(0,a.task)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.timeout)(1e3);case 2:this.get("_originalPosition")!==this.stringify()&&this.set("posYOffset",this.get("initialPosYOffset")),t=this.get("params"),t.posY-=this.get("initialPosYOffset"),this.sendAction("cameraMoveSlow",t),this.get("cameraMoveSlowTask").perform();case 7:case"end":return e.stop()}},e,this)})).on("loaded")})}),define("dummy/components/other-person",["exports","ember-a-frame/components/a-entity","ember-a-frame/macros/stringify-component","ember-a-frame/macros/stringify-coordinates","ember-computed"],function(e,t,n,a,o){e.default=t.default.extend({params:{rotX:0,rotY:0,posX:0,posY:0,posZ:0},_rotX:(0,o.readOnly)("params.rotX"),_rotY:(0,o.readOnly)("params.rotY"),_posX:(0,o.readOnly)("params.posX"),_posY:(0,o.readOnly)("params.posY"),_posZ:(0,o.readOnly)("params.posZ"),objModel:(0,n.default)("obj-model",{obj:"obj",mtl:"mtl"}),rotation:(0,a.default)({x:"_rotX",y:"_rotY",z:0}),position:(0,a.default)({x:"_posX",y:"_posY",z:"_posZ"}),modelRotation:(0,a.default)({x:0,y:181,z:0}),modelPosition:(0,a.default)({x:-.25,y:-.75,z:.75})})}),define("dummy/components/toggle-list-body",["exports","ember-component"],function(e,t){e.default=t.default.extend({})}),define("dummy/components/toggle-list-header",["exports","ember-component"],function(e,t){e.default=t.default.extend({actions:{toggle:function(e){this.sendAction("toggle",!e)}}})}),define("dummy/components/toggle-list",["exports","ember-component"],function(e,t){e.default=t.default.extend({})}),define("dummy/controllers/list",["exports","ember-controller"],function(e,t){e.default=t.default.extend({})}),define("dummy/controllers/vr",["exports","ember-controller","ember-service/inject","ember-controller/inject","ember-computed","ember-evented/on","ember-metal/observer","ember-metal/get","ember-macro-helpers/raw","ember-awesome-macros","dummy/config/environment"],function(e,t,n,a,o,r,l,s,i,m,u){var d=u.default.rootURL;e.default=t.default.extend({people:(0,n.default)(),application:(0,a.default)(),queryParams:["rotX","rotY","posX","posY","posZ"],rotX:0,rotY:0,posX:0,posY:0,posZ:0,rootURL:d,currentRouteName:(0,o.readOnly)("application.currentRouteName"),shouldHideBackButton:(0,m.eq)("currentRouteName",(0,i.default)("vr.index")),otherPeople:(0,o.readOnly)("people.otherPeople"),updateRoute:(0,r.default)("init",(0,l.default)("currentRouteName",function(){var e=(0,s.default)(this,"currentRouteName");e&&(0,s.default)(this,"people").updateRoute(e)})),actions:{updateQueryParams:function(e){this.setProperties(e)},sendData:function(e){(0,s.default)(this,"people").updateLocation(e)}}})}),define("dummy/controllers/vr/360-image-gallery",["exports","ember-controller"],function(e,t){e.default=t.default.extend({dur:300,actions:{changeMaterial:function(e){this.transitionToRoute("vr.360-image-gallery."+e.substr(1))}}})}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n,a){function o(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t.hideSha?r.match(a.versionRegExp)[0]:t.hideVersion?r.match(a.shaRegExp)[0]:r}e.appVersion=o;var r=n.default.APP.version;e.default=t.default.Helper.helper(o)}),define("dummy/helpers/cancel-all",["exports","ember","ember-concurrency/-helpers"],function(e,t,n){function a(e){var a=e[0];return a&&"function"==typeof a.cancelAll||t.default.assert("The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed "+a,!1),(0,n.taskHelperClosure)("cancelAll",e)}e.cancelHelper=a,e.default=t.default.Helper.helper(a)}),define("dummy/helpers/parse-coordinates",["exports","ember-a-frame/helpers/parse-coordinates"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"parseCoordinates",{enumerable:!0,get:function(){return t.parseCoordinates}})}),define("dummy/helpers/perform",["exports","ember","ember-concurrency/-helpers"],function(e,t,n){function a(e,t){return(0,n.taskHelperClosure)("perform",e,t)}e.performHelper=a,e.default=t.default.Helper.helper(a)}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/send",["exports","ember-component-inbound-actions/helpers/send"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/helpers/stringify-component",["exports","ember-a-frame/helpers/stringify-component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"stringifyComponent",{enumerable:!0,get:function(){return t.stringifyComponent}})}),define("dummy/helpers/stringify-coordinates",["exports","ember-a-frame/helpers/stringify-coordinates"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"stringifyCoordinates",{enumerable:!0,get:function(){return t.stringifyCoordinates}})}),define("dummy/helpers/stringify",["exports","ember-a-frame/helpers/stringify"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return t.stringify}})}),define("dummy/helpers/task",["exports","ember"],function(e,t){function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e){return Array.isArray(e)?e:Array.from(e)}function o(e){var t=a(e),o=t[0],r=t.slice(1);return o._curry.apply(o,n(r))}e.default=t.default.Helper.helper(o)}),define("dummy/helpers/transition-to",["exports","ember-transition-helper/helpers/transition-to"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"transitionTo",{enumerable:!0,get:function(){return t.transitionTo}})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){var a=n.default.APP,o=a.name,r=a.version;e.default={name:"App Version",initialize:(0,t.default)(o,r)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("dummy/initializers/ember-concurrency",["exports","ember-concurrency"],function(e,t){e.default={name:"ember-concurrency",initialize:function(){}}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var a;if("undefined"!=typeof window)a=window;else if("undefined"!=typeof global)a=global;else{if("undefined"==typeof self)return;a=self}var o,r=n.default.exportApplicationGlobal;o="string"==typeof r?r:t.default.String.classify(n.default.modulePrefix),a[o]||(a[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[o]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("dummy/initializers/register-components",["exports","ember-a-frame/initializers/register-components"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/macros/parse-coordinates",["exports","ember-a-frame/macros/parse-coordinates"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/macros/stringify-component",["exports","ember-a-frame/macros/stringify-component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/macros/stringify-coordinates",["exports","ember-a-frame/macros/stringify-coordinates"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/macros/stringify",["exports","ember-a-frame/macros/stringify"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});a.map(function(){this.route("vr",function(){this.route("hello-world"),this.route("360-image-gallery",function(){this.route("city"),this.route("cubes"),this.route("sechelt")})}),this.route("list")}),e.default=a}),define("dummy/routes/application",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/routes/index",["exports","ember-route"],function(e,t){e.default=t.default.extend({})}),define("dummy/routes/list",["exports","ember-route","ember-object","ember-metal/get","ember-a-frame/utils/components","ember-a-frame/utils/attributes"],function(e,t,n,a,o,r){e.default=t.default.extend({setupController:function(e){this._super.apply(this,arguments);var t=Object.keys(requirejs._eak_seen).filter(function(e){return 0===e.indexOf("ember-a-frame/components/a-")});e.set("components",t.map(function(e){var t=requirejs(e).default,l=t.create({renderer:{}}),s=(0,a.default)(l,"attributeBindings"),i=s.filter(function(e){return!o.defaultComponents.includes(e)&&!r.defaultAttributes.includes(e)});return n.default.create({tagName:e.substr("ember-a-frame/components/".length),nonDefaultAttributeBindings:i,shouldHideToggle:!i.length})}))}})}),define("dummy/routes/vr",["exports","ember-route"],function(e,t){e.default=t.default.extend({queryParams:{rotX:{replace:!0},rotY:{replace:!0},posX:{replace:!0},posY:{replace:!0},posZ:{replace:!0}}})}),define("dummy/routes/vr/360-image-gallery",["exports","ember-route","ember-runloop"],function(e,t,n){e.default=t.default.extend({actions:{updateSrc:function(e){var t=this;(0,n.scheduleOnce)("afterRender",function(){t.controller.set("skySrc",e)})}}})}),define("dummy/routes/vr/360-image-gallery/-base",["exports","ember-route"],function(e,t){e.default=t.default.extend({beforeModel:function(e){e.send("updateSrc",this.get("updateSrc"))}})}),define("dummy/routes/vr/360-image-gallery/city",["exports","dummy/routes/vr/360-image-gallery/-base"],function(e,t){e.default=t.default.extend({updateSrc:"#city"})}),define("dummy/routes/vr/360-image-gallery/cubes",["exports","dummy/routes/vr/360-image-gallery/-base"],function(e,t){e.default=t.default.extend({updateSrc:"#cubes"})}),define("dummy/routes/vr/360-image-gallery/index",["exports","ember-route"],function(e,t){e.default=t.default.extend({beforeModel:function(){this.transitionTo("vr.360-image-gallery.city")}})}),define("dummy/routes/vr/360-image-gallery/sechelt",["exports","dummy/routes/vr/360-image-gallery/-base"],function(e,t){e.default=t.default.extend({updateSrc:"#sechelt"})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/people",["exports","ember","ember-concurrency"],function(e,t,n){e.default=t.default.Service.extend(t.default.Evented,{otherPeople:t.default.A(),setUpSocket:function(){function e(e){var n=JSON.parse(e.data),o=n.id,r=a.get("otherPeople"),l=r.findBy("id",o);switch(n.type){case"move":l.set("params",n.data);break;case"join":r.pushObject(t.default.Object.create({id:o}));break;case"left":r.removeObject(l)}}var n=new WebSocket("wss://ember-a-frame-server.herokuapp.com/");n.onclose=function(e){},n.onmessage=function(t){e(t)},n.onerror=function(e){};var a=this;return a.set("ws",n),new t.default.RSVP.Promise(function(e){function t(t){a.get("updateRouteTask").perform(),e(n)}n.onopen=function(e){t(e)}})},updateLocation:function(e){this.send({type:"move",data:e})},updateRoute:function(e){if(e){if(this.get("otherPeople").clear(),0!==e.indexOf("vr.")){var t=this.get("ws");return t&&(t.close(),this.set("ws",null)),this.get("updateRouteTask").cancelAll(),void this.set("myRoute",null)}this.set("myRoute",e)}else if(!(e=this.get("myRoute")))return;this.send({type:"route",data:e})},send:function(e){var n=void 0,a=this.get("ws");n=a?t.default.RSVP.resolve(a):this.setUpSocket(),n.then(function(t){t.readyState===WebSocket.OPEN&&t.send(JSON.stringify(e))})},updateRouteTask:(0,n.task)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.timeout)(5e3);case 2:this.updateRoute(),this.get("updateRouteTask").perform();case 4:case"end":return e.stop()}},e,this)}))})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"2jynzPnX",block:'{"statements":[["append",["unknown",["outlet"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/components/default-attributes",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"Q5iIQLad",block:'{"statements":[["block",["toggle-list"],null,null,3]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","li",[]],["flush-element"],["text","\\n          "],["append",["get",["attribute"]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":["attribute"]},{"statements":[["text","    "],["open-element","ul",[]],["flush-element"],["text","\\n"],["block",["each"],[["get",["defaultAttributes"]]],null,0],["text","    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      Default A-Frame Attributes (Ember Bound Attributes)\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","h2",[]],["flush-element"],["text","\\n"],["block",["components","header"],null,null,2],["text","  "],["close-element"],["text","\\n"],["block",["components","body"],null,null,1]],"locals":["components"]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/default-attributes.hbs"}})}),define("dummy/templates/components/default-components",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"3shpItFG",block:'{"statements":[["block",["toggle-list"],null,null,3]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","li",[]],["flush-element"],["text","\\n          "],["append",["get",["component"]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":["component"]},{"statements":[["text","    "],["open-element","ul",[]],["flush-element"],["text","\\n"],["block",["each"],[["get",["defaultComponents"]]],null,0],["text","    "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      Default A-Frame Components (Ember Bound Attributes)\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","h2",[]],["flush-element"],["text","\\n"],["block",["components","header"],null,null,2],["text","  "],["close-element"],["text","\\n"],["block",["components","body"],null,null,1]],"locals":["components"]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/default-components.hbs"}})}),define("dummy/templates/components/my-camera",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"vkCt8tkS",block:'{"statements":[["open-element","a-cursor",[]],["static-attr","animation__click","property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"],["static-attr","animation__fusing","property: scale; startEvents: fusing; pauseEvents: mouseleave; from: 1 1 1; to: 0.1 0.1 0.1; dur: 1500"],["static-attr","event-set__1","_event: mouseenter; color: springgreen"],["static-attr","event-set__2","_event: mouseleave; color: black"],["static-attr","raycaster","objects: .link"],["flush-element"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/my-camera.hbs"}})}),define("dummy/templates/components/other-person",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"kRbkE20d",block:'{"statements":[["append",["helper",["a-entity"],null,[["obj-model","rotation","position"],[["get",["objModel"]],["get",["modelRotation"]],["get",["modelPosition"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/other-person.hbs"}})}),define("dummy/templates/components/toggle-list-body",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"UntG5nSO",block:'{"statements":[["block",["if"],[["get",["isExpanded"]]],null,0]],"locals":[],"named":[],"yields":["default"],"blocks":[{"statements":[["text","  "],["yield","default"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/toggle-list-body.hbs"}})}),define("dummy/templates/components/toggle-list-header",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"EyaOq2sO",block:'{"statements":[["block",["unless"],[["get",["shouldHideToggle"]]],null,2],["yield","default"]],"locals":[],"named":[],"yields":["default"],"blocks":[{"statements":[["text","      ⊞\\n"]],"locals":[]},{"statements":[["text","      ⊟\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","span",[]],["static-attr","class","pointer"],["modifier",["action"],[["get",[null]],"toggle",["get",["isExpanded"]]]],["flush-element"],["text","\\n"],["block",["if"],[["get",["isExpanded"]]],null,1,0],["text","  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/toggle-list-header.hbs"}})}),define("dummy/templates/components/toggle-list",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"Z6yTlcLy",block:'{"statements":[["yield","default",[["helper",["hash"],null,[["header","body"],[["helper",["component"],["toggle-list-header"],[["shouldHideToggle","isExpanded","toggle"],[["get",["shouldHideToggle"]],["get",["isExpanded"]],["helper",["action"],[["get",[null]],["helper",["mut"],[["get",["isExpanded"]]],null]],null]]]],["helper",["component"],["toggle-list-body"],[["isExpanded"],[["get",["isExpanded"]]]]]]]],["helper",["component"],["toggle-list-body"],[["isExpanded"],[["get",["isExpanded"]]]]]]]],"locals":[],"named":[],"yields":["default"],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/toggle-list.hbs"}})}),define("dummy/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"D2Z09AV7",block:'{"statements":[["open-element","div",[]],["flush-element"],["text","\\n  "],["block",["link-to"],["vr"],null,1],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["flush-element"],["text","\\n  "],["block",["link-to"],["list"],null,0],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","Component list"]],"locals":[]},{"statements":[["text","Enter VR"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/templates/list",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"5rfHt/t7",block:'{"statements":[["open-element","div",[]],["flush-element"],["text","\\n  "],["block",["link-to"],["index"],null,8],["text","\\n"],["close-element"],["text","\\n\\n"],["append",["unknown",["default-attributes"]],false],["text","\\n"],["append",["unknown",["default-components"]],false],["text","\\n\\n"],["block",["toggle-list"],null,null,7]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","              "],["open-element","li",[]],["flush-element"],["text","\\n                "],["append",["get",["attribute"]],false],["text","\\n              "],["close-element"],["text","\\n"]],"locals":["attribute"]},{"statements":[["text","          "],["open-element","div",[]],["flush-element"],["text","\\n            Non-default attributes\\n          "],["close-element"],["text","\\n          "],["open-element","ul",[]],["flush-element"],["text","\\n"],["block",["each"],[["get",["component","nonDefaultAttributeBindings"]]],null,0],["text","          "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","          "],["append",["unknown",["component","tagName"]],false],["text","\\n"]],"locals":[]},{"statements":[["block",["components","header"],null,null,2],["block",["components","body"],null,null,1]],"locals":["components"]},{"statements":[["block",["toggle-list"],null,[["shouldHideToggle"],[["get",["component","shouldHideToggle"]]]],3]],"locals":["component"]},{"statements":[["block",["each"],[["get",["components"]]],null,4]],"locals":[]},{"statements":[["text","      A-Frame primitives (Ember Components)\\n"]],"locals":[]},{"statements":[["text","  "],["open-element","h2",[]],["flush-element"],["text","\\n"],["block",["_components","header"],null,null,6],["text","  "],["close-element"],["text","\\n"],["block",["_components","body"],null,null,5]],"locals":["_components"]},{"statements":[["text","go back"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/list.hbs"}})}),define("dummy/templates/vr",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"5KtNFqnI",block:'{"statements":[["open-element","a-scene",[]],["flush-element"],["text","\\n  "],["open-element","a-assets",[]],["flush-element"],["text","\\n    "],["open-element","a-asset-item",[]],["static-attr","id","headObj"],["dynamic-attr","src",["concat",[["unknown",["rootURL"]],"tex.obj"]]],["flush-element"],["close-element"],["text","\\n    "],["open-element","a-asset-item",[]],["static-attr","id","headMtl"],["dynamic-attr","src",["concat",[["unknown",["rootURL"]],"tex.mtl"]]],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["append",["unknown",["outlet"]],false],["text","\\n\\n"],["block",["a-entity"],null,[["position"],["-1.5 3 -4"]],1],["text","\\n"],["block",["each"],[["get",["otherPeople"]]],null,0],["text","\\n  "],["append",["helper",["my-camera"],null,[["rotX","rotY","posX","posY","posZ","cameraMoveSlow","cameraMoveFast"],[["get",["rotX"]],["get",["rotY"]],["get",["posX"]],["get",["posY"]],["get",["posZ"]],["helper",["action"],[["get",[null]],"updateQueryParams"],null],["helper",["action"],[["get",[null]],"sendData"],null]]]],false],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["append",["helper",["other-person"],null,[["obj","mtl","params"],["#headObj","#headMtl",["get",["person","params"]]]]],false],["text","\\n"]],"locals":["person"]},{"statements":[["text","    "],["append",["helper",["a-back-button"],["Exit VR"],[["position","click"],["1.5 1.5 0",["helper",["transition-to"],["index"],null]]]],false],["text","\\n    "],["open-element","a-entity",[]],["static-attr","layout","\\n        type: line;\\n        margin: 1.5\\n      "],["static-attr","position","0 .25 0"],["static-attr","animation__hover","\\n        property: position;\\n        dir: alternate;\\n        loop: true;\\n        easing: easeInOutSine;\\n        to: 0 -.25 0\\n      "],["flush-element"],["text","\\n      "],["append",["helper",["a-back-button"],["Home"],[["shouldHide","click"],[["get",["shouldHideBackButton"]],["helper",["transition-to"],["vr"],null]]]],false],["text","\\n      "],["append",["helper",["a-back-button"],["Hello World"],[["click"],[["helper",["transition-to"],["vr.hello-world"],null]]]],false],["text","\\n      "],["append",["helper",["a-back-button"],["360 Image Gallery"],[["click"],[["helper",["transition-to"],["vr.360-image-gallery"],null]]]],false],["text","\\n    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/vr.hbs"}})}),define("dummy/templates/vr/360-image-gallery",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"PHXOiky8",
block:'{"statements":[["open-element","a-assets",[]],["flush-element"],["text","\\n  "],["open-element","audio",[]],["static-attr","id","click-sound"],["static-attr","src","https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"],["flush-element"],["close-element"],["text","\\n\\n  "],["comment"," Images. "],["text","\\n  "],["open-element","img",[]],["static-attr","id","city"],["static-attr","src","/city.jpg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","city-thumb"],["static-attr","src","/city.jpg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","cubes"],["static-attr","src","/cubes.jpg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","cubes-thumb"],["static-attr","src","/cubes.jpg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","sechelt"],["static-attr","src","/sechelt.jpg"],["flush-element"],["close-element"],["text","\\n  "],["open-element","img",[]],["static-attr","id","sechelt-thumb"],["static-attr","src","/sechelt.jpg"],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n\\n"],["comment"," 360-degree image. "],["text","\\n"],["append",["helper",["a-sky"],null,[["id","radius","src","dur","actionReceiver","changeMaterial"],["image-360","10",["get",["skySrc"]],["get",["dur"]],["get",["sky"]],"changeMaterial"]]],false],["text","\\n\\n"],["comment"," Link we will build. "],["text","\\n"],["open-element","a-entity",[]],["static-attr","layout","type: line; margin: 1.5"],["static-attr","position","-1.5 1.5 -4"],["flush-element"],["text","\\n  "],["append",["helper",["a-link"],null,[["thumb","src","dur","click"],["#cubes-thumb","#cubes",["get",["dur"]],["helper",["send"],[["get",["sky"]],"startChangingMaterial","#cubes"],null]]]],false],["text","\\n  "],["append",["helper",["a-link"],null,[["thumb","src","dur","click"],["#city-thumb","#city",["get",["dur"]],["helper",["send"],[["get",["sky"]],"startChangingMaterial","#city"],null]]]],false],["text","\\n  "],["append",["helper",["a-link"],null,[["thumb","src","dur","click"],["#sechelt-thumb","#sechelt",["get",["dur"]],["helper",["send"],[["get",["sky"]],"startChangingMaterial","#sechelt"],null]]]],false],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/vr/360-image-gallery.hbs"}})}),define("dummy/templates/vr/hello-world",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"YCWfkIzO",block:'{"statements":[["append",["helper",["a-box"],null,[["position","rotation","color"],["-1 0.5 -3","0 45 0","#4CC3D9"]]],false],["text","\\n"],["append",["helper",["a-sphere"],null,[["position","radius","color"],["0 1.25 -5","1.25","#EF2D5E"]]],false],["text","\\n"],["append",["helper",["a-cylinder"],null,[["position","radius","height","color"],["1 0.75 -3","0.5","1.5","#FFC65D"]]],false],["text","\\n"],["append",["helper",["a-plane"],null,[["position","rotation","width","height","color"],["0 0 -4","-90 0 0","4","4","#7BC8A4"]]],false],["text","\\n"],["append",["helper",["a-sky"],null,[["color"],["#ECECEC"]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/vr/hello-world.hbs"}})}),define("dummy/templates/vr/index",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"B5JX4JJM",block:'{"statements":[["append",["helper",["a-sky"],null,[["color"],["#444"]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/vr/index.hbs"}})}),define("dummy/utils/components",["exports","ember-a-frame/utils/components"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/utils/parse-coordinates",["exports","ember-a-frame/utils/parse-coordinates"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/utils/stringify-component",["exports","ember-a-frame/utils/stringify-component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/utils/stringify-coordinates",["exports","ember-a-frame/utils/stringify-coordinates"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/utils/stringify",["exports","ember-a-frame/utils/stringify"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/config/environment",["ember"],function(e){try{var t=document.querySelector('meta[name="dummy/config/environment"]').getAttribute("content"),n=JSON.parse(unescape(t)),a={default:n};return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(e){throw new Error('Could not read config from meta tag with name "dummy/config/environment".')}}),runningTests||require("dummy/app").default.create({name:"ember-a-frame",version:"0.0.2+dc2ae6ce"});