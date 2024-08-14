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
 */const o="#attribute_shop_association",n="#attribute_attribute_group",r=".js-attribute-type-color-form-row",l=".js-attribute-type-texture-form-row",{$:a}=window;a((()=>{window.prestashop.component.initComponents(["TranslatableInput","TranslatableField"]),new window.prestashop.component.ChoiceTree(o).enableAutoCheckChildren()})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(n),t=document.querySelector(r),o=document.querySelector(l),a=null==e?void 0:e.value,i=e=>{if(t&&o){const n="2"===e?"flex":"none";t.style.display=n,o.style.display=n}};a&&i(a),null==e||e.addEventListener("change",(()=>{const t=null==e?void 0:e.value;t&&i(t)}))})),window.attribute_form=t})();