"use strict"
define("quickstart/app",["exports","quickstart/resolver","ember-load-initializers","quickstart/config/environment"],function(e,t,i,a){Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default});(0,i.default)(r,a.default.modulePrefix),e.default=r}),define("quickstart/helpers/app-version",["exports","quickstart/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r
var a=t.default.APP.version
function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return t.hideSha?a.match(i.versionRegExp)[0]:t.hideVersion?a.match(i.shaRegExp)[0]:a}e.default=Ember.Helper.helper(r)}),define("quickstart/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("quickstart/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("quickstart/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","quickstart/config/environment"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0})
var a=void 0,r=void 0
i.default.APP&&(a=i.default.APP.name,r=i.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(a,r)}}),define("quickstart/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("quickstart/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("quickstart/initializers/export-application-global",["exports","quickstart/config/environment"],function(e,t){function i(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var i
if("undefined"!=typeof window)i=window
else if("undefined"!=typeof global)i=global
else{if("undefined"==typeof self)return
i=self}var a,r=t.default.exportApplicationGlobal
a="string"==typeof r?r:Ember.String.classify(t.default.modulePrefix),i[a]||(i[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete i[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=i,e.default={name:"export-application-global",initialize:i}}),define("quickstart/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("quickstart/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("quickstart/router",["exports","quickstart/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var i=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
i.map(function(){this.route("scientists")}),e.default=i}),define("quickstart/routes/scientists",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("quickstart/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("quickstart/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"GukVYCcM",block:'{"symbols":[],"statements":[[6,"h1"],[7],[0,"People"],[8],[0,"\\n"],[1,[18,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"quickstart/templates/application.hbs"}})}),define("quickstart/templates/scientists",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"hD+rHte1",block:'{"symbols":[],"statements":[[6,"h2"],[7],[0,"Scientists"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"quickstart/templates/scientists.hbs"}})}),define("quickstart/config/environment",[],function(){try{var e="quickstart/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),i={default:JSON.parse(unescape(t))}
return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("quickstart/app").default.create({name:"quickstart",version:"0.0.0+34fb38aa"})
