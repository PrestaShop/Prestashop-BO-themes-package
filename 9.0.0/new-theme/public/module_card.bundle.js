(()=>{"use strict";var t={9567:t=>{t.exports=window.jQuery}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};(()=>{n.r(o);var t=n(9567),e=Object.defineProperty,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,a=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,l=(t,e)=>{for(var n in e||(e={}))r.call(e,n)&&a(t,n,e[n]);if(i)for(var n of i(e))s.call(e,n)&&a(t,n,e[n]);return t};
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */
class c{constructor(t){const e=l({id:"confirm-modal",closable:!1},t);this.buildModalContainer(e)}buildModalContainer(t){this.container=document.createElement("div"),this.container.classList.add("modal","fade"),this.container.id=t.id,this.dialog=document.createElement("div"),this.dialog.classList.add("modal-dialog"),t.dialogStyle&&Object.keys(t.dialogStyle).forEach((e=>{this.dialog.style[e]=t.dialogStyle[e]})),this.content=document.createElement("div"),this.content.classList.add("modal-content"),this.message=document.createElement("p"),this.message.classList.add("modal-message"),this.header=document.createElement("div"),this.header.classList.add("modal-header"),t.modalTitle&&(this.title=document.createElement("h4"),this.title.classList.add("modal-title"),this.title.innerHTML=t.modalTitle),this.closeIcon=document.createElement("button"),this.closeIcon.classList.add("close"),this.closeIcon.setAttribute("type","button"),this.closeIcon.dataset.dismiss="modal",this.closeIcon.innerHTML="×",this.body=document.createElement("div"),this.body.classList.add("modal-body","text-left","font-weight-normal"),this.title&&this.header.appendChild(this.title),this.header.appendChild(this.closeIcon),this.content.append(this.header,this.body),this.body.appendChild(this.message),this.dialog.appendChild(this.content),this.container.appendChild(this.dialog)}}class d{constructor(t){const e=l({id:"confirm-modal",closable:!1,dialogStyle:{}},t);this.initContainer(e)}initContainer(e){this.modal||(this.modal=new c(e)),this.$modal=t(this.modal.container);const{id:n,closable:o}=e;this.$modal.modal({backdrop:!!o||"static",keyboard:void 0===o||o,show:!1}),this.$modal.on("hidden.bs.modal",(()=>{const t=document.querySelector(`#${n}`);t&&t.remove(),e.closeCallback&&e.closeCallback()})),document.body.appendChild(this.modal.container)}setTitle(t){return this.modal.title||(this.modal.title=document.createElement("h4"),this.modal.title.classList.add("modal-title"),this.modal.closeIcon?this.modal.header.insertBefore(this.modal.title,this.modal.closeIcon):this.modal.header.appendChild(this.modal.title)),this.modal.title.innerHTML=t,this}render(t){return this.modal.message.innerHTML=t,this}show(){return this.$modal.modal("show"),this}hide(){return this.$modal.modal("hide"),this.$modal.on("shown.bs.modal",(()=>{this.$modal.modal("hide"),this.$modal.off("shown.bs.modal")})),this}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */
function u(t){return void 0===t}var h=Object.defineProperty,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,b=(t,e,n)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */
class v extends c{constructor(t){super(t)}buildModalContainer(t){super.buildModalContainer(t),this.message.classList.add("confirm-message"),this.message.innerHTML=t.confirmMessage,this.footer=document.createElement("div"),this.footer.classList.add("modal-footer"),this.closeButton=document.createElement("button"),this.closeButton.setAttribute("type","button"),this.closeButton.classList.add("btn","btn-outline-secondary","btn-lg"),this.closeButton.dataset.dismiss="modal",this.closeButton.innerHTML=t.closeButtonLabel,this.confirmButton=document.createElement("button"),this.confirmButton.setAttribute("type","button"),this.confirmButton.classList.add("btn",t.confirmButtonClass,"btn-lg","btn-confirm-submit"),this.confirmButton.dataset.dismiss="modal",this.confirmButton.innerHTML=t.confirmButtonLabel,this.footer.append(this.closeButton,...t.customButtons,this.confirmButton),this.content.append(this.footer)}}class _ extends d{constructor(t,e,n){var o;let i;i=u(t.confirmCallback)?u(e)?()=>{console.error("No confirm callback provided for ConfirmModal component.")}:e:t.confirmCallback;super(((t,e)=>{for(var n in e||(e={}))f.call(e,n)&&b(t,n,e[n]);if(m)for(var n of m(e))p.call(e,n)&&b(t,n,e[n]);return t})({id:"confirm-modal",confirmMessage:"Are you sure?",closeButtonLabel:"Close",confirmButtonLabel:"Accept",confirmButtonClass:"btn-primary",customButtons:[],closable:!1,modalTitle:t.confirmTitle,dialogStyle:{},confirmCallback:i,closeCallback:null!=(o=t.closeCallback)?o:n},t))}initContainer(t){this.modal=new v(t),this.modal.confirmButton.addEventListener("click",t.confirmCallback),super.initContainer(t)}}var g=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,o){return t[0]===e&&(n=o,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),o=this.__entries__[n];return o&&o[1]},e.prototype.set=function(e,n){var o=t(this.__entries__,e);~o?this.__entries__[o][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,o=t(n,e);~o&&n.splice(o,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,o=this.__entries__;n<o.length;n++){var i=o[n];t.call(e,i[1],i[0])}},e}()}(),y="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,w=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),E="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(w):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var M=["top","right","bottom","left","width","height","size","weight"],A="undefined"!=typeof MutationObserver,L=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,o=!1,i=0;function r(){n&&(n=!1,t()),o&&a()}function s(){E(r)}function a(){var t=Date.now();if(n){if(t-i<2)return;o=!0}else n=!0,o=!1,setTimeout(s,e);i=t}return a}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){y&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),A?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){y&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;M.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),O=function(t,e){for(var n=0,o=Object.keys(e);n<o.length;n++){var i=o[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},k=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||w},S=I(0,0,0,0);function T(t){return parseFloat(t)||0}function C(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+T(t["border-"+n+"-width"])}),0)}function P(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return S;var o=k(t).getComputedStyle(t),i=function(t){for(var e={},n=0,o=["top","right","bottom","left"];n<o.length;n++){var i=o[n],r=t["padding-"+i];e[i]=T(r)}return e}(o),r=i.left+i.right,s=i.top+i.bottom,a=T(o.width),l=T(o.height);if("border-box"===o.boxSizing&&(Math.round(a+r)!==e&&(a-=C(o,"left","right")+r),Math.round(l+s)!==n&&(l-=C(o,"top","bottom")+s)),!function(t){return t===k(t).document.documentElement}(t)){var c=Math.round(a+r)-e,d=Math.round(l+s)-n;1!==Math.abs(c)&&(a-=c),1!==Math.abs(d)&&(l-=d)}return I(i.left,i.top,a,l)}var j="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof k(t).SVGGraphicsElement}:function(t){return t instanceof k(t).SVGElement&&"function"==typeof t.getBBox};function B(t){return y?j(t)?function(t){var e=t.getBBox();return I(0,0,e.width,e.height)}(t):P(t):S}function I(t,e,n,o){return{x:t,y:e,width:n,height:o}}var $=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=I(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=B(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),x=function(t,e){var n,o,i,r,s,a,l,c=(o=(n=e).x,i=n.y,r=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(a.prototype),O(l,{x:o,y:i,width:r,height:s,top:i,right:o+r,bottom:s+i,left:o}),l);O(this,{target:t,contentRect:c})},q=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new g,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof k(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new $(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof k(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new x(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),R="undefined"!=typeof WeakMap?new WeakMap:new g,D=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=L.getInstance(),o=new q(e,n,this);R.set(this,o)};["observe","unobserve","disconnect"].forEach((function(t){D.prototype[t]=function(){var e;return(e=R.get(this))[t].apply(e,arguments)}}));void 0!==w.ResizeObserver&&w.ResizeObserver;const U=class extends Event{constructor(t,e={}){super(U.parentWindowEvent),this.eventName=t,this.eventParameters=e}get name(){return this.eventName}get parameters(){return this.eventParameters}};U.parentWindowEvent="IframeClientEvent";Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */const H=_,z={moduleItemList:t=>`div.module-item-list[data-tech-name='${t}']`,moduleItem:t=>`.module-item[data-tech-name='${t}']`},N=t=>`#${t}`;var W=n(9567);
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */const F=z,{$:G}=window;class V{constructor(){this.pendingRequest=!1,this.moduleActionMenuLinkSelector="button.module_action_menu_",this.moduleActionMenuInstallLinkSelector="button.module_action_menu_install",this.moduleActionMenuEnableLinkSelector="button.module_action_menu_enable",this.moduleActionMenuUninstallLinkSelector="button.module_action_menu_uninstall",this.moduleActionMenuDisableLinkSelector="button.module_action_menu_disable",this.moduleActionMenuResetLinkSelector="button.module_action_menu_reset",this.moduleActionMenuUpdateLinkSelector="button.module_action_menu_upgrade",this.moduleActionMenuDeleteLinkSelector="button.module_action_menu_delete",this.moduleItemListSelector=".module-item-list",this.moduleItemActionsSelector=".module-actions",this.moduleActionModalDisableLinkSelector="a.module_action_modal_disable",this.moduleActionModalResetLinkSelector="a.module_action_modal_reset",this.moduleActionModalUninstallLinkSelector="a.module_action_modal_uninstall",this.forceDeletionOption="#force_deletion",this.eventEmitter=window.prestashop.component.EventEmitter,this.initActionButtons()}initActionButtons(){const t=this;G(document).on("click",this.forceDeletionOption,(function(){const e=G(t.moduleActionModalUninstallLinkSelector,G(F.moduleItemList(G(this).attr("data-tech-name"))));!0===G(this).prop("checked")?e.attr("data-deletion","true"):e.removeAttr("data-deletion")})),G(document).on("click",this.moduleActionMenuInstallLinkSelector,(function(){return t.dispatchPreEvent("install",this)&&t.confirmAction("install",this)&&t.requestToController("install",G(this))})),G(document).on("click",this.moduleActionMenuEnableLinkSelector,(function(){return t.dispatchPreEvent("enable",this)&&t.confirmAction("enable",this)&&t.requestToController("enable",G(this))})),G(document).on("click",this.moduleActionMenuUninstallLinkSelector,(function(){return t.dispatchPreEvent("uninstall",this)&&t.confirmAction("uninstall",this)&&t.requestToController("uninstall",G(this))})),G(document).on("click",this.moduleActionMenuDeleteLinkSelector,(function(){return t.dispatchPreEvent("delete",this)&&t.confirmAction("delete",this)&&t.requestToController("delete",G(this))})),G(document).on("click",this.moduleActionMenuDisableLinkSelector,(function(){return t.dispatchPreEvent("disable",this)&&t.confirmAction("disable",this)&&t.requestToController("disable",G(this))})),G(document).on("click",this.moduleActionMenuResetLinkSelector,(function(){return t.dispatchPreEvent("reset",this)&&t.confirmAction("reset",this)&&t.requestToController("reset",G(this))})),G(document).on("click",this.moduleActionMenuUpdateLinkSelector,(function(e){e.preventDefault();const n=G(`#${G(this).data("confirm_modal")}`),o=window.isShopMaintenance;if(1===n.length)return t.dispatchPreEvent("update",this)&&t.confirmAction("update",this)&&t.requestToController("update",G(this));{const e=document.createElement("a");e.classList.add("btn","btn-primary","btn-lg"),e.setAttribute("href",window.moduleURLs.maintenancePage),e.innerHTML=window.moduleTranslations.moduleModalUpdateMaintenance;new H({id:"confirm-module-update-modal",confirmTitle:window.moduleTranslations.singleModuleModalUpdateTitle,closeButtonLabel:window.moduleTranslations.moduleModalUpdateCancel,confirmButtonLabel:o?window.moduleTranslations.moduleModalUpdateUpgrade:window.moduleTranslations.upgradeAnywayButtonText,confirmButtonClass:o?"btn-primary":"btn-secondary",confirmMessage:o?"":window.moduleTranslations.moduleModalUpdateConfirmMessage,closable:!0,customButtons:o?[]:[e]},(()=>t.dispatchPreEvent("update",this)&&t.confirmAction("update",this)&&t.requestToController("update",G(this)))).show()}return!1})),G(document).on("click",this.moduleActionModalDisableLinkSelector,(function(){return t.requestToController("disable",G(t.moduleActionMenuDisableLinkSelector,G(F.moduleItemList(G(this).attr("data-tech-name")))))})),G(document).on("click",this.moduleActionModalResetLinkSelector,(function(){return t.requestToController("reset",G(t.moduleActionMenuResetLinkSelector,G(F.moduleItemList(G(this).attr("data-tech-name")))))})),G(document).on("click",this.moduleActionModalUninstallLinkSelector,(e=>{G(e.target).parents(".modal").on("hidden.bs.modal",(()=>t.requestToController("uninstall",G(t.moduleActionMenuUninstallLinkSelector,G(F.moduleItemList(G(e.target).attr("data-tech-name")))),G(e.target).attr("data-deletion"))))}))}confirmAction(t,e){const n=G(N(G(e).data("confirm_modal")));return 1!==n.length||(n.first().modal("show"),!1)}dispatchPreEvent(t,e){const n=W.Event("module_card_action_event");return G(e).trigger(n,[t]),!1===n.isPropagationStopped()&&!1===n.isImmediatePropagationStopped()&&!1!==n.result}hasPendingRequest(){return this.pendingRequest}requestToController(t,e,n=!1,o=(()=>!0)){if(this.pendingRequest)return G.growl.warning({message:window.translate_javascripts["An action is already in progress. Please wait for it to finish."]}),!1;this.pendingRequest=!0;let i=e.closest(this.moduleItemActionsSelector);const r=e.closest("form"),s=G('<button class="btn-primary-reverse onclick unbind spinner "></button>'),a=`//${window.location.host}${r.attr("action")}`,l=r.serializeArray();let c=!1;return"true"!==n&&!0!==n||l.push({name:"actionParams[deletion]",value:"true"}),G.ajax({url:a,dataType:"json",method:"POST",data:l,beforeSend(){i.hide(),i.after(s)}}).done((e=>{if(void 0===e)return void G.growl.error({message:"No answer received from server",fixed:!0});if(void 0!==e.status&&!1===e.status)return void G.growl.error({message:e.msg,fixed:!0});const o=Object.keys(e)[0];if(!1===e[o].status)return void G.growl.error({message:e[o].msg,fixed:!0});if(G.growl({message:e[o].msg,duration:6e3}),!0===e[o].refresh_needed)return void(c=!0);const r=this.moduleItemListSelector.replace(".","");let s=null;"delete"!==t||e[o].has_download_url?"uninstall"===t?(s=i.closest(`.${r}`),s.attr("data-installed","0"),s.attr("data-active","0"),"true"!==n&&!0!==n||e[o].has_download_url?this.eventEmitter.emit("Module Uninstalled",s):this.eventEmitter.emit("Module Delete",s)):"disable"===t?(s=i.closest(`.${r}`),s.addClass(`${r}-isNotActive`),s.attr("data-active","0"),this.eventEmitter.emit("Module Disabled",s)):"enable"===t?(s=i.closest(`.${r}`),s.removeClass(`${r}-isNotActive`),s.attr("data-active","1"),this.eventEmitter.emit("Module Enabled",s)):"install"===t?(s=i.closest(`.${r}`),s.attr("data-installed","1"),s.attr("data-active","1"),s.removeClass(`${r}-isNotActive`),this.eventEmitter.emit("Module Installed",s)):"update"!==t&&"upgrade"!==t||(s=i.closest(`.${r}`),this.eventEmitter.emit("Module Upgraded",s)):(s=i.closest(`.${r}`),this.eventEmitter.emit("Module Delete",s)),i=G(e[o].action_menu_html).replaceAll(i),i.hide()})).fail((()=>{const e=i.closest("module-item-list").data("techName");G.growl.error({message:`Could not perform action ${t} for module ${e}`,fixed:!0})})).always((()=>{c?document.location.reload():(i.fadeIn(),s.remove(),this.pendingRequest=!1,o&&o())})),!1}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */
const{$:Q}=window;Q((()=>{new V}))})(),window.module_card=o})();