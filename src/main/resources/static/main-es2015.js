(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar> \n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart-item/cart-item.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart-item/cart-item.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"padding-top: 10px;\">\n    <div class=\"row\">\n        <div class=\"[ col-xs-12 col-sm-12 col-sm-12 ]\">\n            <ul class=\"event-list\">\n                <li>\n                    <time datetime=\"2014-07-20 2000\">\n                        <span class=\"day\">Dijital Servis</span>\n                    </time>\n\n                    <img class=\"imgSize\"\n                        src=\"https://s.turkcell.com.tr/SiteAssets/Bireysel/Kampanya/render/gorseller/her-yone-1000-dakika-kampanyasi/her-yone-1000-dakika-kampanyasi_287x215.png\"\n                        alt=\"Resim\">\n                    <div class=\"info\">\n                        <h2 class=\"title\">{{childPackage.name}}</h2>\n                        <p class=\"desc\">{{childPackage.description}}</p>\n                    </div>\n                    <div class=\"social\">\n                        <ul>\n                            <li style=\"padding: 5px 0px 3px;padding-left:23%;padding-right:23%;font-size: 9px;\"><button class=\"buttonStyle\" (click)=\"deletePackageFromCheckout(childPackage)\">Değiştir</button></li>\n                            <li style=\"padding: 5px 0px 3px;font-weight: 900;font-size: 9px;padding-right:23%;\">Aylık Ödenecek Tutar</li>\n                            <li style=\"padding: 5px 0px 3px;color: #4aa9f8;padding-right:23%;font-size: 11px;\"><span style=\"font-weight: 900;color: #5e8ec6;font-size: 21px;\">{{childPackage.amount}}</span>&nbsp;TL/Ay Kdv Dahil</li>\n                        </ul>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/package-card/package-card.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/package-card/package-card.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <div class=\"card-columns\">\n                <div class=\"card\" style=\"width: 18rem;\">\n                    <img class=\"card-img-top\"\n                        src=\"https://s.turkcell.com.tr/SiteAssets/Bireysel/Kampanya/render/gorseller/her-yone-1000-dakika-kampanyasi/her-yone-1000-dakika-kampanyasi_287x215.png\"\n                        alt=\"İmage\">\n                    <div class=\"card-body\">\n                        <div class=\"container\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <a href=\"#\" class=\"btn btn-primary cardAttributes\">Paket Al</a>\n                                </div>\n                            </div>\n                        </div>\n                        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of\n                            the\n                            card's content.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/total-chart-price/total-chart-price.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/total-chart-price/total-chart-price.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container card shadow bg-white rounded\" style=\"padding-right: 0px;padding-left: 0px;\" *ngIf=\"show\">\n    <div class=\"row\">\n        <div class=\"textBackgroundColor col-md-2\">\n            <label for=\"\" class=\"textPosition\">TOPLAM TUTAR</label>\n        </div>\n\n        <div class=\"col-md-10\">\n            <div class=\"col-md-12\">\n                <div>\n                    <label>FATURAYA YANSIYACAK TUTAR</label>\n                </div>\n                <div>\n                    <label>{{totalAmount}} &nbsp; TL/AY</label>\n                    <button class=\"cardAttributes\" (click)=\"openDocumentDialog(documentDialog)\">İşlemi Yap</button>\n                </div>\n                <div class=\"offset-md-2\">\n                    <label style=\"font-size: x-small;\">KDV DAHİL</label>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #documentDialog let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" style=\"color:#8ec7ea\">Müşteri Teyidi</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"custom-control custom-radio\">\n            <input type=\"radio\" id=\"customRadio1\" name=\"customRadio\" class=\"custom-control-input\">\n            <label class=\"custom-control-label\" for=\"customRadio1\">SMS ile Teyit</label>\n        </div>\n        <div class=\"custom-control custom-radio\">\n            <input type=\"radio\" id=\"customRadio2\" name=\"customRadio\" class=\"custom-control-input\">\n            <label class=\"custom-control-label\" for=\"customRadio2\">Evrak ile Teyit&nbsp;&nbsp;<button type=\"button\"\n                    class=\"btn btn-warning btn-sm\">Yazdır</button></label>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"openContractText(contractText)\">Tamam</button>\n    </div>\n</ng-template>\n\n<ng-template #contractText let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" style=\"color:#8ec7ea\">Müşteri Teyidi</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div id=\"accordion\" class=\"accordion\">\n            <div class=\"card\">\n                <div class=\"card-header collapsed\" style=\"color:#9bccea\" data-toggle=\"collapse\" href=\"#collapseOne\">\n                    <a class=\"card-title\">&nbsp;Sözleşme Bilgileri</a>\n                </div>\n\n                <div id=\"collapseOne\" class=\"collapse collapsed\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                    <div class=\"card-body\">\n                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\n                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt\n                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin\n                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes\n                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard\n                        of them accusamus labore sustainable VHS.\n                    </div>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header collapsed\" style=\"color:#9bccea\" data-toggle=\"collapse\" href=\"#collapseTwo\">\n                    <a class=\"card-title\">&nbsp;Teklif Detayı Bilgileri</a>\n                </div>\n                <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n                    <div class=\"card-body\">\n                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\n                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt\n                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin\n                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes\n                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard\n                        of them accusamus labore sustainable VHS.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"orderStatus(lastCall)\">Tamam</button>\n    </div>\n</ng-template>\n\n<ng-template #lastCall let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Bilgi</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into\n            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of\n            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like\n            Aldus PageMaker including versions of Lorem Ipsum.</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"purchaseOrder(successOrder, failOrder)\">Tamam</button>\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Vazgeç</button>\n    </div>\n</ng-template>\n\n<ng-template #successOrder let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">İşlem Sonucu</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <p>İşlem başarıyla gerçekleşti.&hellip;</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"refreshPage()\">Tamam</button>\n    </div>\n</ng-template>\n\n<ng-template #failOrder let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">İşlem Sonucu</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <p>İşlem başarısız.&hellip;</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"refreshPage()\">Çıkış</button>\n    </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout-page/checkout-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout-page/checkout-page.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let package of packages\">\n    <app-cart-item [childPackage]=\"package\"></app-cart-item>\n</div>\n<div style= \"margin-top:10px\">\n    <app-total-chart-price></app-total-chart-price>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navbar/navbar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navbar/navbar.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"topFooter\">\n\n    <div  class=\"container\" style=\"padding:0px;margin:0 auto;height: 800%;\">\n        <a class=\"\" id=\"textColor\" href=\"/user\">\n            <img class=\"logo\" src=\"https://s.turkcell.com.tr/static_lib/assetsv2/common/images/content/turkcell-logo.png\">\n        </a>\n    </div>\n</div>\n    <div class=\"container\" style=\"margin-top: 15px;background-color: #324d67; height: 50px;\">\n        <div class=\"row justify-content-center \" style=\"padding-top:8px;\">\n            <div class=\"col-3 col-sm-3 col-md-3 col-lg-2 col-xl-2\">\n                <a class=\"\" id=\"textColor\" href=\"/user\">ANASAYFA</a>\n            </div>\n            <div class=\"col-3 col-sm-3 col-md-3  col-lg-2 col-xl-2\">\n                <a class=\"\" id=\"textColor\" href=\"/package\">SEÇİMLER</a>\n            </div>\n            <div class=\"col-4 col-sm-3 col-md-3  col-lg-2 col-xl-2\">\n                <a class=\"\" id=\"textColor\" href=\"/checkout\">SEPETİM</a>\n            <button type=\"button\" class=\"btn btn-circle \"><i class=\"fas fa-shopping-cart text-white cart\"><span class=\"badge badge-pill badge-warning\">{{checkoutLength}}</span></i></button>\n            </div>\n\n    </div>\n        \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/package-page/package-page.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/package-page/package-page.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\" margin-top: 20px;\">\n        <mdb-carousel [isControls]=\"false\" class=\"carousel-multi-item multi-animation\" [type]=\"'carousel-multi-item'\"\n                [animation]=\"'slide'\">\n                <mdb-carousel-item *ngFor=\"let item of slides; let i = index\">\n                        <div class=\"col-md-4\" [ngClass]=\"{'d-none d-md-block': cardIndex !== 0}\"\n                                *ngFor=\"let card of item; let cardIndex = index\">\n                                <mdb-card class=\"my-1 cevir\">\n                                        <div class=\"content\">\n                                                <div class=\"front\">\n                                                        <div style=\"min-height: 46%;\">\n                                                                <mdb-card-img [src]=\"card.img\" alt=\"Card image cap\">\n                                                                </mdb-card-img>\n                                                        </div>\n                                                        <div style=\"padding:10px;\">\n                                                                <mdb-card-body>\n                                                                        <mdb-card-title>\n                                                                                <h4>{{card.name}}</h4>\n                                                                        </mdb-card-title>\n                                                                        <p>{{card.description}}</p>\n                                                                </mdb-card-body>\n                                                        </div>\n\n                                                </div>\n                                                <div class=\"back\">\n                                                        <div class=\"container\">\n                                                                <div class=\"row  pieceInfo\">\n                                                                        <div\n                                                                                style=\"margin: 0 auto;padding-bottom: 5px;\">\n\n                                                                                {{card.amount}} TL/Ay\n\n                                                                        </div>\n\n                                                                </div>\n\n                                                                <div class=\"row justify-content-center \">\n                                                                        <div\n                                                                                class=\"col-6 col-sm-6 col-md-6 col-xl-6 col-lg-6\">\n\n                                                                                <button (click)=\"addToCheckout(card)\"\n                                                                                        id=\"{{card.name}}\"\n                                                                                        style=\"width: 100%; height: 30px;\"\n                                                                                        name=\"checkout\"\n                                                                                        class=\"btn btn-info btn-sm\"><i\n                                                                                                class=\"fas fa-shopping-cart\"></i></button>\n                                                                        </div>\n\n                                                                </div>\n\n                                                        </div>\n\n\n\n                                                </div>\n                                        </div>\n                                </mdb-card>\n                        </div>\n                </mdb-carousel-item>\n        </mdb-carousel>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found-page/page-not-found-page.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found-page/page-not-found-page.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>page-not-found-page works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-page/user-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-page/user-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top:50px\">\n    <div class=\"row justify-content-center\">\n        <div class=\"well well-lg\">\n            <div class=\"row align-self-center  justify-content-center\">\n                <div class=\"col-6\">\n                    <div class=\"input-group\">\n                        <input #phone type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\"\n                            placeholder=\"5325320000  \"> <span style=\"position: absolute;padding-top: 10px;margin-left: -1px;margin-left: 86%\" class=\"fa  fa-search form-control-feedback\"></span>\n\n                \n                      \n                    </div>\n                </div>\n                <div class=\"col-6\">\n                    <a href=\"/package\" type=\"submit\" class=\"btn btn-primary showPackage\"\n                        (click)=\"packageSearch(phone.value)\">Paketleri Görüntüle</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/user-page/user-page.component */ "./src/app/pages/user-page/user-page.component.ts");
/* harmony import */ var _pages_package_page_package_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/package-page/package-page.component */ "./src/app/pages/package-page/package-page.component.ts");
/* harmony import */ var _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/checkout-page/checkout-page.component */ "./src/app/pages/checkout-page/checkout-page.component.ts");
/* harmony import */ var _pages_page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-not-found-page/page-not-found-page.component */ "./src/app/pages/page-not-found-page/page-not-found-page.component.ts");







const routes = [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'user', component: _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPageComponent"] },
    { path: 'package', component: _pages_package_page_package_page_component__WEBPACK_IMPORTED_MODULE_4__["PackagePageComponent"] },
    { path: 'checkout', component: _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageComponent"] },
    { path: '**', component: _pages_page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundPageComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponents = [_pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPageComponent"], _pages_package_page_package_page_component__WEBPACK_IMPORTED_MODULE_4__["PackagePageComponent"], _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageComponent"], _pages_page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundPageComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ttech-go';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: setupLocalStorageFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupLocalStorageFactory", function() { return setupLocalStorageFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/user-page/user-page.component */ "./src/app/pages/user-page/user-page.component.ts");
/* harmony import */ var _pages_package_page_package_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/package-page/package-page.component */ "./src/app/pages/package-page/package-page.component.ts");
/* harmony import */ var _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/checkout-page/checkout-page.component */ "./src/app/pages/checkout-page/checkout-page.component.ts");
/* harmony import */ var _pages_page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-not-found-page/page-not-found-page.component */ "./src/app/pages/page-not-found-page/page-not-found-page.component.ts");
/* harmony import */ var _pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/navbar/navbar.component */ "./src/app/pages/navbar/navbar.component.ts");
/* harmony import */ var _app_services_checkout_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/services/checkout-data.service */ "./src/app/services/checkout-data.service.ts");
/* harmony import */ var _components_package_card_package_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/package-card/package-card.component */ "./src/app/components/package-card/package-card.component.ts");
/* harmony import */ var _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cart-item/cart-item.component */ "./src/app/components/cart-item/cart-item.component.ts");
/* harmony import */ var _components_total_chart_price_total_chart_price_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/total-chart-price/total-chart-price.component */ "./src/app/components/total-chart-price/total-chart-price.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");

















function setupLocalStorageFactory(checkoutDataService) {
    if (localStorage.getItem('checkout') !== null) {
        checkoutDataService.changeMessage(JSON.parse(localStorage.getItem('checkout')));
    }
    return () => { };
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_6__["UserPageComponent"],
            _pages_package_page_package_page_component__WEBPACK_IMPORTED_MODULE_7__["PackagePageComponent"],
            _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutPageComponent"],
            _pages_page_not_found_page_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundPageComponent"],
            _pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
            _components_package_card_package_card_component__WEBPACK_IMPORTED_MODULE_12__["PackageCardComponent"],
            _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_13__["CartItemComponent"],
            _components_total_chart_price_total_chart_price_component__WEBPACK_IMPORTED_MODULE_14__["TotalChartPriceComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_16__["MDBBootstrapModule"].forRoot()
        ],
        providers: [_app_services_checkout_data_service__WEBPACK_IMPORTED_MODULE_11__["CheckoutDataService"],
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                useFactory: setupLocalStorageFactory,
                deps: [_app_services_checkout_data_service__WEBPACK_IMPORTED_MODULE_11__["CheckoutDataService"]],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/cart-item/cart-item.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/cart-item/cart-item.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Crete+Round&display=swap');\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNyZXRlK1JvdW5kJmRpc3BsYXk9c3dhcCcpO1xuIl19 */");

/***/ }),

/***/ "./src/app/components/cart-item/cart-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/cart-item/cart-item.component.ts ***!
  \*************************************************************/
/*! exports provided: CartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemComponent", function() { return CartItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_checkout_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/checkout-data.service */ "./src/app/services/checkout-data.service.ts");



let CartItemComponent = class CartItemComponent {
    constructor(checkoutDataService) {
        this.checkoutDataService = checkoutDataService;
    }
    ngOnInit() {
        this.checkoutDataService.currentMessage.subscribe(message => this.checkout = message);
    }
    deletePackageFromCheckout(paket) {
        this.checkout.packages.forEach((item, index) => {
            if (item === paket)
                this.checkout.packages.splice(index, 1);
            this.checkoutDataService.changeMessage(this.checkout);
        });
    }
};
CartItemComponent.ctorParameters = () => [
    { type: src_app_services_checkout_data_service__WEBPACK_IMPORTED_MODULE_2__["CheckoutDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CartItemComponent.prototype, "childPackage", void 0);
CartItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart-item/cart-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart-item.component.css */ "./src/app/components/cart-item/cart-item.component.css")).default]
    })
], CartItemComponent);



/***/ }),

/***/ "./src/app/components/package-card/package-card.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/package-card/package-card.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFja2FnZS1jYXJkL3BhY2thZ2UtY2FyZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/package-card/package-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/package-card/package-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: PackageCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageCardComponent", function() { return PackageCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PackageCardComponent = class PackageCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
PackageCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-package-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./package-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/package-card/package-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./package-card.component.css */ "./src/app/components/package-card/package-card.component.css")).default]
    })
], PackageCardComponent);



/***/ }),

/***/ "./src/app/components/total-chart-price/total-chart-price.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/total-chart-price/total-chart-price.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cardAttributes{\n    float: right;\n    color: rgb(3, 11, 53);\n    background-color:#ffc107;\n    border: #ffc107;\n    border-radius: 20px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3RhbC1jaGFydC1wcmljZS90b3RhbC1jaGFydC1wcmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG90YWwtY2hhcnQtcHJpY2UvdG90YWwtY2hhcnQtcHJpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkQXR0cmlidXRlc3tcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6IHJnYigzLCAxMSwgNTMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmYzEwNztcbiAgICBib3JkZXI6ICNmZmMxMDc7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/components/total-chart-price/total-chart-price.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/total-chart-price/total-chart-price.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TotalChartPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalChartPriceComponent", function() { return TotalChartPriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_checkout_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/checkout-data.service */ "./src/app/services/checkout-data.service.ts");
/* harmony import */ var src_app_services_package_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/package-page.service */ "./src/app/services/package-page.service.ts");
/* harmony import */ var _services_total_chart_price_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/total-chart-price.service */ "./src/app/services/total-chart-price.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let TotalChartPriceComponent = class TotalChartPriceComponent {
    constructor(checkoutDataService, packagePageService, totalChartPrice, modalService) {
        this.checkoutDataService = checkoutDataService;
        this.packagePageService = packagePageService;
        this.totalChartPrice = totalChartPrice;
        this.modalService = modalService;
        this.packages = [];
        this.totalAmount = 0;
        this.requestData = {
            subscriber: {},
            packages: []
        };
        this.show = false;
    }
    ngOnInit() {
        this.checkoutDataService.currentMessage.subscribe(message => {
            this.checkout = message;
            if (this.checkout == null) {
                this.show = false;
            }
            else if (this.checkout.packages.length == 0) {
                this.show = false;
            }
            else {
                this.show = true;
                this.getProducts();
            }
        });
    }
    calculateTotalAmountAndPackages() {
        this.products.data.packages.forEach((serviceElement) => {
            this.checkout.packages.forEach((checkoutElement) => {
                if (serviceElement.id === checkoutElement.id) {
                    this.totalAmount += serviceElement.amount;
                    this.packages.push(serviceElement);
                }
            });
        });
    }
    getProducts() {
        this.packagePageService.getProduct(localStorage.getItem("phoneNumber")).subscribe(data => {
            this.products = data;
        }, (err) => console.error(err), () => {
            this.totalAmount = 0;
            this.packages = [];
            this.calculateTotalAmountAndPackages();
        });
    }
    purchaseOrder(successOrder, failOrder) {
        this.requestData.subscriber = this.products.data.subscriber;
        this.requestData.packages = this.packages;
        this.totalChartPrice.postCheckout(this.requestData).subscribe((response) => {
            if (response.returnCode == 0) {
                console.log(response.returnMsg);
                this.phoneNumber = localStorage.getItem("phoneNumber");
                localStorage.clear();
                localStorage.setItem("phoneNumber", this.phoneNumber);
                this.orderStatus(successOrder);
            }
            else {
                this.orderStatus(failOrder);
            }
        });
    }
    openDocumentDialog(content) {
        this.modalService.open(content, { size: 'sm' });
    }
    openContractText(content) {
        this.modalService.dismissAll();
        this.modalService.open(content, { size: 'xl' });
    }
    orderStatus(content) {
        this.modalService.dismissAll();
        this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    }
    refreshPage() {
        this.modalService.dismissAll();
        window.location.reload();
    }
};
TotalChartPriceComponent.ctorParameters = () => [
    { type: src_app_services_checkout_data_service__WEBPACK_IMPORTED_MODULE_2__["CheckoutDataService"] },
    { type: src_app_services_package_page_service__WEBPACK_IMPORTED_MODULE_3__["PackagePageService"] },
    { type: _services_total_chart_price_service__WEBPACK_IMPORTED_MODULE_4__["TotalChartPriceService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }
];
TotalChartPriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-total-chart-price',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./total-chart-price.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/total-chart-price/total-chart-price.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./total-chart-price.component.css */ "./src/app/components/total-chart-price/total-chart-price.component.css")).default]
    })
], TotalChartPriceComponent);



/***/ }),

/***/ "./src/app/pages/checkout-page/checkout-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/checkout-page/checkout-page.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0LXBhZ2UvY2hlY2tvdXQtcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/checkout-page/checkout-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/checkout-page/checkout-page.component.ts ***!
  \****************************************************************/
/*! exports provided: CheckoutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageComponent", function() { return CheckoutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_checkout_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/checkout-data.service */ "./src/app/services/checkout-data.service.ts");



let CheckoutPageComponent = class CheckoutPageComponent {
    constructor(checkoutDataService) {
        this.checkoutDataService = checkoutDataService;
    }
    ngOnInit() {
        this.checkoutDataService.currentMessage.subscribe(message => this.checkout = message);
        if (this.checkout != null)
            this.packages = this.checkout.packages;
    }
};
CheckoutPageComponent.ctorParameters = () => [
    { type: src_app_services_checkout_data_service__WEBPACK_IMPORTED_MODULE_2__["CheckoutDataService"] }
];
CheckoutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout-page/checkout-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout-page.component.css */ "./src/app/pages/checkout-page/checkout-page.component.css")).default]
    })
], CheckoutPageComponent);



/***/ }),

/***/ "./src/app/pages/navbar/navbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/navbar/navbar.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/navbar/navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/navbar/navbar.component.ts ***!
  \**************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_checkout_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/checkout-data.service */ "./src/app/services/checkout-data.service.ts");



let NavbarComponent = class NavbarComponent {
    constructor(checkoutDataService) {
        this.checkoutDataService = checkoutDataService;
        this.checkoutLength = 0;
    }
    ngOnInit() {
        this.checkoutDataService.currentMessage.subscribe(message => {
            this.checkout = message;
            if (this.checkout != null) {
                this.checkoutLength = this.checkout.packages.length;
            }
        });
    }
};
NavbarComponent.ctorParameters = () => [
    { type: src_app_services_checkout_data_service__WEBPACK_IMPORTED_MODULE_2__["CheckoutDataService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/pages/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/pages/package-page/package-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/package-page/package-page.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import 'https://fonts.googleapis.com/css?family=Lily+Script+One';\nbody {\n  background: #eee;\n  font-family: 'Lily Script One';\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFja2FnZS1wYWdlL3BhY2thZ2UtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlFQUFpRTtBQUNqRTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWNrYWdlLXBhZ2UvcGFja2FnZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGlseStTY3JpcHQrT25lJztcbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBmb250LWZhbWlseTogJ0xpbHkgU2NyaXB0IE9uZSc7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/package-page/package-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/package-page/package-page.component.ts ***!
  \**************************************************************/
/*! exports provided: PackagePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagePageComponent", function() { return PackagePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_package_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/package-page.service */ "./src/app/services/package-page.service.ts");
/* harmony import */ var src_app_services_checkout_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/checkout-data.service */ "./src/app/services/checkout-data.service.ts");




let PackagePageComponent = class PackagePageComponent {
    constructor(packagePageService, checkoutDataService) {
        this.packagePageService = packagePageService;
        this.checkoutDataService = checkoutDataService;
        this.slides = [[]];
        this.checkout = {
            packages: []
        };
    }
    chunk(arr, chunkSize) {
        let R = [];
        for (let i = 0, len = arr.length; i < len; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    }
    ngOnInit() {
        this.checkoutDataService.currentMessage.subscribe(message => this.checkout = message);
        if (this.checkout === null) {
            this.checkout = {
                packages: []
            };
        }
        this.phoneNumber = localStorage.getItem("phoneNumber");
        this.packagePageService.getProduct(this.phoneNumber).subscribe(data => {
            this.products = data;
            this.packages = this.products.data.packages;
            this.yedekPaket = this.products.data.packages;
            for (let i = 0; i < this.yedekPaket.length; i++) {
                this.yedekPaket[i]["img"] = this.randomImgUrl(this.yedekPaket[i].name);
            }
            // product sayisinin 3ün kati olmadığı durumlarda (ornegin 8) 
            // genis ekranda 3 3 2 product gorunecektir. daha efektif bir goruntu sağlamak adina 
            // card sayisi 3 e tamamlandi.fazladan eklenen product rastgele secildi.
            this.cards = this.yedekPaket;
            let modCardCount = this.yedekPaket.length % 3;
            if (modCardCount != 0) {
                let copyCount = 3 - modCardCount;
                for (let i = 1; i <= copyCount; i++) {
                    let num = Math.floor(Math.random() * this.yedekPaket.length);
                    this.cards.push(this.yedekPaket[num]);
                }
            }
            this.slides = this.chunk(this.cards, 3);
            localStorage.setItem("products", JSON.stringify(this.products));
        });
    }
    addToCheckout(newPackage) {
        this.flag = true;
        let paket;
        //sepete eklenen data alindi.
        paket = newPackage;
        if (this.checkout.packages.length == 0) {
            this.checkout.packages.push(paket);
        }
        else {
            this.checkout.packages.forEach((element) => {
                if (element.id == paket.id) {
                    this.flag = false;
                }
            });
            if (this.flag == true) {
                this.checkout.packages.push(paket);
            }
        }
        this.checkoutDataService.changeMessage(this.checkout);
    }
    randomImgUrl(a) {
        let ImgList = [
            {
                name: "platinum",
                link: [
                    "https://foto.haberler.com/haber/2017/05/27/turkcell-platinum-musterilerine-ozel-firsatlar-9664732_6690_amp.jpg",
                    "https://foto.haberler.com/haber/2017/05/27/turkcell-platinum-musterilerine-ozel-firsatlar-9664732_6690_amp.jpg"
                ]
            },
            {
                name: "bip",
                link: [
                    "https://www.technopat.net/wp-content/uploads/2019/06/turkcell.jpg",
                    "https://www.technopat.net/wp-content/uploads/2019/06/turkcell.jpg",
                ]
            },
            {
                name: "tv+",
                link: [
                    "https://cdn.iha.com.tr/Contents/images/2017/35/2156641.jpg",
                    "https://eventoftech.com/wp-content/uploads/2020/01/tv-plus.jpg"
                ]
            },
            {
                name: "fizy",
                link: [
                    "https://i.ytimg.com/vi/IlPg5-8mOLI/maxresdefault.jpg",
                    "https://i2.milimaj.com/i/milliyet/75/0x410/5ca1cef545d2a029641d2d24.jpg"
                ]
            },
            {
                name: "dergilik",
                link: [
                    "https://s2.turkcell.com.tr/SiteAssets/Bireysel/Kampanya/render/gorseller/Dergilik-1GB-Kampanya-Gorseli.jpg",
                    "https://www.mobil13.com/wp-content/uploads/2019/07/Turkcell-Dergilik.jpg"
                ]
            },
            {
                name: "lifebox",
                link: [
                    "https://www.teknotalk.com/wp-content/uploads/2016/11/lifebox.jpg",
                    "https://www.teknotalk.com/wp-content/uploads/2016/11/lifebox.jpg"
                ]
            },
            {
                name: "gollercepte",
                link: [
                    "https://turk-internet.com/wp-content/uploads/2019/05/goller-cepte-turkcell-ticom.jpg",
                    "https://turk-internet.com/wp-content/uploads/2019/05/goller-cepte-turkcell-ticom.jpg"
                ]
            }
        ];
        let num = Math.floor(Math.random() * 2);
        for (let i = 0; i < ImgList.length; i++) {
            if (ImgList[i].name == a) {
                return ImgList[i].link[num];
            }
        }
    }
};
PackagePageComponent.ctorParameters = () => [
    { type: src_app_services_package_page_service__WEBPACK_IMPORTED_MODULE_2__["PackagePageService"] },
    { type: src_app_services_checkout_data_service__WEBPACK_IMPORTED_MODULE_3__["CheckoutDataService"] }
];
PackagePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-package-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./package-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/package-page/package-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./package-page.component.css */ "./src/app/pages/package-page/package-page.component.css")).default]
    })
], PackagePageComponent);



/***/ }),

/***/ "./src/app/pages/page-not-found-page/page-not-found-page.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/page-not-found-page/page-not-found-page.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kLXBhZ2UvcGFnZS1ub3QtZm91bmQtcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/page-not-found-page/page-not-found-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/page-not-found-page/page-not-found-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: PageNotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundPageComponent", function() { return PageNotFoundPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundPageComponent = class PageNotFoundPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found-page/page-not-found-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found-page.component.css */ "./src/app/pages/page-not-found-page/page-not-found-page.component.css")).default]
    })
], PageNotFoundPageComponent);



/***/ }),

/***/ "./src/app/pages/user-page/user-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/user-page/user-page.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcGFnZS91c2VyLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/user-page/user-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/user-page/user-page.component.ts ***!
  \********************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserPageComponent = class UserPageComponent {
    constructor() { }
    ngOnInit() {
    }
    packageSearch(phoneNumber) {
        if (phoneNumber != localStorage.getItem('phoneNumber')) {
            localStorage.clear();
        }
        localStorage.setItem('phoneNumber', phoneNumber);
    }
};
UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-page/user-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-page.component.css */ "./src/app/pages/user-page/user-page.component.css")).default]
    })
], UserPageComponent);



/***/ }),

/***/ "./src/app/services/checkout-data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/checkout-data.service.ts ***!
  \***************************************************/
/*! exports provided: CheckoutDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutDataService", function() { return CheckoutDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let CheckoutDataService = class CheckoutDataService {
    constructor() {
        this.checkout = null;
        //  checkout: Checkout = {
        //    packages: [{
        //      id: 1,
        //      name: "paket",
        //      price: 0
        //    }]
        //  };
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.checkout);
        this.currentMessage = this.messageSource.asObservable();
    }
    changeMessage(checkout) {
        this.messageSource.next(checkout);
        localStorage.setItem('checkout', JSON.stringify(checkout));
    }
    newMessage() {
        this.changeMessage(this.checkout);
        return this.checkout;
    }
};
CheckoutDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CheckoutDataService);



/***/ }),

/***/ "./src/app/services/package-page.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/package-page.service.ts ***!
  \**************************************************/
/*! exports provided: PackagePageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagePageService", function() { return PackagePageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PackagePageService = class PackagePageService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getProduct(phoneNumber) {
        //return this.httpClient.post<Product>("/api/inquiryPackages?msisdn=" + phoneNumber, { title: 'Angular POST Request Example' });
        return this.httpClient.get("http://www.mocky.io/v2/5e4534b33000005d3561499a");
    }
};
PackagePageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PackagePageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PackagePageService);



/***/ }),

/***/ "./src/app/services/total-chart-price.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/total-chart-price.service.ts ***!
  \*******************************************************/
/*! exports provided: TotalChartPriceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalChartPriceService", function() { return TotalChartPriceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TotalChartPriceService = class TotalChartPriceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    postCheckout(requestData) {
        // return this.httpClient.post("/api/submit", checkout);
        return this.httpClient.post("/api/submit", requestData);
    }
};
TotalChartPriceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TotalChartPriceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TotalChartPriceService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cemretok/eclipse-tc/ttech-go/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map