(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o);
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
 */const t=".js-form-submit-btn",{$:n}=window;class i{constructor(){n(document).on("click",t,(e=>{e.preventDefault();const o=n(e.target);if(o.data("form-confirm-message")&&!1===window.confirm(o.data("form-confirm-message")))return;let t="POST",i=null;if(o.data("method")){const e=o.data("method"),r=["GET","POST"].includes(e);t=r?e:"POST",r||(i=n("<input>",{type:"_hidden",name:"_method",value:e}))}const r=n("<form>",{action:o.data("form-submit-url"),method:t});i&&r.append(i),o.data("form-csrf-token")&&r.append(n("<input>",{type:"_hidden",name:"_csrf_token",value:o.data("form-csrf-token")})),r.appendTo("body").submit()}))}}
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
 */const r="#supplier_id_country",a="#supplier_id_state",s=".js-supplier-state",p="#supplier_dni",d='label[for="supplier_dni"]',{$:l}=window;l((()=>{new window.prestashop.component.ChoiceTree("#supplier_shop_association").enableAutoCheckChildren(),new window.prestashop.component.CountryStateSelectionToggler(r,a,s),new window.prestashop.component.CountryDniRequiredToggler(r,p,d),window.prestashop.component.initComponents(["TinyMCEEditor","TranslatableInput","TranslatableField"]),new window.prestashop.component.TaggableField({tokenFieldSelector:"input.js-taggable-field",options:{createTokensOnBlur:!0}}),new i})),window.supplier_form=o})();