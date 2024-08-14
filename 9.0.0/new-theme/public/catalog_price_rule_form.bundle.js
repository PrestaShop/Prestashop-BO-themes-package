(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t);
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
class r{constructor(e,t){this.currencySymbolSelect=e,this.selectCurrency=document.querySelector(this.currencySymbolSelect),this.callbackChange=t,this.selectCurrency?this.init():console.error(`Could not find ${this.currencySymbolSelect}`)}init(){const e=document.querySelector(this.currencySymbolSelect);e&&(this.callbackChange(this.getSymbol()),e.addEventListener("change",(()=>this.callbackChange(this.getSymbol()))))}getSymbol(){var e,t;if(!this.selectCurrency)return"";const r=null!=(e=this.selectCurrency.dataset.defaultCurrencySymbol)?e:"",c=this.selectCurrency.item(this.selectCurrency.selectedIndex);return r||c||console.error("Could not find appropriate data attributes"),c&&null!=(t=c.getAttribute("symbol"))?t:r}}
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
const{$:c}=window;class n{constructor(e,t,n,o){this.reductionTypeSelector=e,this.$reductionTypeSelect=c(e),this.$taxInclusionInputs=c(t),this.currencySelect=n,this.reductionValueSymbolSelector=o,this.currencySymbolUpdater=new r(this.currencySelect,(e=>{""!==e&&this.updateSymbol(e)})),this.handle(),this.$reductionTypeSelect.on("change",(()=>this.handle()))}handle(){"percentage"===this.$reductionTypeSelect.val()?this.$taxInclusionInputs.fadeOut():this.$taxInclusionInputs.fadeIn(),this.updateSymbol(this.currencySymbolUpdater.getSymbol())}updateSymbol(e){const t=document.querySelector(this.reductionTypeSelector);if(t){for(let r=0;r<t.options.length;r+=1){const c=t.options[r];"amount"===c.value&&(c.innerHTML=e)}const r=t.options[t.selectedIndex].value,c=document.querySelectorAll(this.reductionValueSymbolSelector);if(0===c.length)return;c.forEach((t=>{t.innerHTML="amount"===r?e:"%"}))}}}
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
const{$:o}=window;class l{constructor(e,t){this.$sourceSelector=o(e),this.$targetSelector=o(t),this.handle(),this.$sourceSelector.on("change",(()=>this.handle()))}handle(){const e=this.$sourceSelector.is(":checked");this.$targetSelector.prop("disabled",e)}}
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
 */const i="#catalog_price_rule_leave_initial_price",u="#catalog_price_rule_price",s="#catalog_price_rule_id_currency",a="#catalog_price_rule_reduction_type",d=".price-reduction-value .input-group .input-group-append .input-group-text, .price-reduction-value .input-group .input-group-prepend .input-group-text",h=".js-include-tax-row",{$:p}=window;p((()=>{new l(i,u),new n(a,h,s,d)})),window.catalog_price_rule_form=t})();