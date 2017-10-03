webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Lato:400,700);", ""]);

// module
exports.push([module.i, "/* General Blueprint Style */\r\n\r\n.hidden {\r\n\tposition: absolute;\r\n\topacity: 0;\r\n\tpointer-events: none;\r\n}\r\n\r\n/* Main styles */\r\n.main {\r\n    font-family: Avenir, 'Helvetica Neue', 'Lato', 'Segoe UI', Helvetica, Arial, sans-serif;\r\n    min-height: 100vh;\r\n\tcolor: #CECECE;\r\n\tbackground: #2A2B30;\r\n\t-webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n\tcolor: #f0f0f0;\r\n\toutline: none;\r\n}\r\n\r\na:hover {\r\n\tcolor: #5C5EDC;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <app-categories></app-categories>\n    <app-products></app-products>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products_component__ = __webpack_require__("./src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart_component__ = __webpack_require__("./src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_cart_service__ = __webpack_require__("./src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__categories_categories_component__ = __webpack_require__("./src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_9__categories_categories_component__["a" /* CategoriesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_7__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_10__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_8__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_11__angular_common__["c" /* DecimalPipe */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".checkout {\r\n\tposition: absolute;\r\n\ttop: 7px;\r\n\tright: 7px;\r\n\tz-index: 10;\r\n\tdisplay: block;\r\n\twidth: 67px;\r\n\theight: 67px;\r\n\ttext-align: center;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.checkout__button {\r\n\tposition: relative;\r\n\tz-index: 10;\r\n\tdisplay: block;\r\n\toverflow: hidden;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tcursor: pointer;\r\n\ttransition: -webkit-transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);\r\n\ttransition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);\r\n\ttransition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1), -webkit-transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);\r\n\t-webkit-backface-visibility: hidden;\r\n\tbackface-visibility: hidden;\r\n}\r\n\r\n.checkout--active .checkout__button {\r\n\tcursor: default;\r\n\t-webkit-transform: translate3d(-630%, 0, 0);\r\n\ttransform: translate3d(-630%, 0, 0);\r\n}\r\n\r\n.checkout__button:focus {\r\n\toutline: none;\r\n}\r\n\r\n.checkout__text {\r\n\tdisplay: block;\r\n\tpadding: 0.8em 0 0;\r\n\tcolor: #fff;\r\n\tfont-weight: 400;\r\n\tfont-size: 1.25em;\r\n}\r\n\r\n.checkout__count {\r\n\tposition: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    color: white;\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #1976d2;\r\n    line-height: 24px;\r\n    border-radius: 20px;\r\n    font-size: 0.7rem;\r\n}\r\n\r\n.checkout__icon {\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.checkout__order {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\toverflow: hidden;\r\n\tmax-width: 100vw;\r\n\twidth: 500px;\r\n\ttext-align: right;\r\n\tpointer-events: none;\r\n}\r\n\r\n.checkout--active .checkout__order {\r\n\tpointer-events: auto;\r\n}\r\n\r\n.checkout__order::before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: #96bbe5;\r\n\t-webkit-transform: translate3d(100%, -100%, 0) translate3d(-67px, 67px, 0);\r\n\ttransform: translate3d(100%, -100%, 0) translate3d(-67px, 67px, 0);\r\n\ttransition: -webkit-transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);\r\n\ttransition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);\r\n\ttransition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1), -webkit-transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);\r\n}\r\n\r\n.checkout--active .checkout__order::before {\r\n\t-webkit-transform: translate3d(0, 0, 0);\r\n\ttransform: translate3d(0, 0, 0);\r\n\ttransition-delay: 0s;\r\n}\r\n\r\n.checkout__order-inner {\r\n\tposition: relative;\r\n\tpadding: 2em 1.9em;\r\n\topacity: 0;\r\n}\r\n\r\n.checkout--active .checkout__order-inner {\r\n\topacity: 1;\r\n\ttransition: opacity 0.6s cubic-bezier(0.2, 1, 0.3, 1);\r\n}\r\n\r\n.checkout__close {\r\n\tposition: absolute;\r\n\ttop: 1.5em;\r\n\tright: 1.5em;\r\n\toverflow: hidden;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n\tcolor: transparent;\r\n\ttext-indent: 100%;\r\n\topacity: 0;\r\n\t-webkit-transform: translate3d(50px, 0, 0);\r\n\ttransform: translate3d(50px, 0, 0);\r\n\r\n\t-webkit-backface-visibility: hidden;\r\n\r\n\t        backface-visibility: hidden;\r\n}\r\n\r\n.checkout__close:focus {\r\n\toutline: none;\r\n}\r\n\r\n.checkout--active .checkout__close {\r\n\topacity: 1;\r\n\t-webkit-transform: translate3d(0, 0, 0);\r\n\ttransform: translate3d(0, 0, 0);\r\n\ttransition: opacity 0.6s cubic-bezier(0.2, 1, 0.3, 1), -webkit-transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);\r\n\ttransition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.2, 1, 0.3, 1);\r\n\ttransition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.2, 1, 0.3, 1), -webkit-transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);\r\n\ttransition-delay: 0.015s;\r\n}\r\n\r\n.icon {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tcolor: #fff;\r\n\ttext-indent: 0;\r\n}\r\n\r\n.icon:hover {\r\n\tcolor: #426a98;\r\n}\r\n\r\n.checkout__summary {\r\n\tmargin: 2.5em 0 0.75em;\r\n\twidth: 100%;\r\n\tcolor: #fff;\r\n\ttext-align: left;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n\tfont-size: 0.85em;\r\n\tline-height: 1.5;\r\n}\r\n\r\n.checkout__summary tr {\r\n\t-webkit-transform: translate3d(250px, 0, 0);\r\n\ttransform: translate3d(250px, 0, 0);\r\n}\r\n\r\n.checkout--active .checkout__summary tr {\r\n\t-webkit-transform: translate3d(0, 0, 0);\r\n\ttransform: translate3d(0, 0, 0);\r\n\ttransition: -webkit-transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);\r\n\ttransition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);\r\n\ttransition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1), -webkit-transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);\r\n}\r\n\r\n.checkout--active .checkout__summary tbody tr:nth-child(1) {\r\n\ttransition-delay: 0.015s;\r\n}\r\n\r\n.checkout--active .checkout__summary tbody tr:nth-child(2) {\r\n\ttransition-delay: 0.03s;\r\n}\r\n\r\n.checkout--active .checkout__summary tbody tr:nth-child(3) {\r\n\ttransition-delay: 0.045s;\r\n}\r\n\r\n.checkout--active .checkout__summary tbody tr:nth-child(4) {\r\n\ttransition-delay: 0.06s;\r\n}\r\n\r\n.checkout--active .checkout__summary tbody tr:nth-child(5) {\r\n\ttransition-delay: 0.075s;\r\n}\r\n\r\n.checkout--active .checkout__summary tbody tr:nth-child(6) {\r\n\ttransition-delay: 0.09s;\r\n}\r\n\r\n.checkout--active .checkout__summary tfoot tr {\r\n\ttransition-delay: 0.105s;\r\n}\r\n\r\n.checkout__summary thead th,\r\n.checkout__summary tfoot th {\r\n\tcolor: #517cad;\r\n\tline-height: 2.5;\r\n}\r\n\r\n.checkout__total {\r\n\tcolor: #fff;\r\n}\r\n\r\n.checkout__summary tbody tr:first-child td {\r\n\tpadding-top: 0.5em;\r\n}\r\n\r\n.checkout__summary tbody td {\r\n\tpadding: 0.25em 0;\r\n\tfont-weight: 700;\r\n\tfont-size: 0.85em;\r\n}\r\n\r\n\r\n.checkout__summary tbody td span {\r\n\tcolor: #cfe6ff;\r\n}\r\n\r\n.checkout__summary th:last-child,\r\n.checkout__summary td:last-child {\r\n\ttext-align: right;\r\n}\r\n\r\n.checkout__option {\r\n\tdisplay: inline-block;\r\n\tmargin-top: 1em;\r\n\tpadding: 0.5em 2em;\r\n\tborder: none;\r\n\tborder-radius: 1px;\r\n\tbackground: #517cad;\r\n\tcolor: #fff;\r\n\tfont-weight: 700;\r\n\topacity: 0;\r\n\t-webkit-transform: translate3d(50px, 0, 0);\r\n\ttransform: translate3d(50px, 0, 0);\r\n}\r\n\r\n.checkout__option:hover {\r\n\tbackground: #426a98;\r\n}\r\n\r\n.checkout__option--silent {\r\n\tbackground: none;\r\n\tcolor: #517cad;\r\n\tfont-weight: 500;\r\n\tfont-size: 0.75em;\r\n}\r\n\r\n.checkout__option--silent:hover {\r\n\tbackground: none;\r\n\tcolor: #426a98;\r\n}\r\n\r\n.checkout__option:focus {\r\n\toutline: none;\r\n}\r\n\r\n.checkout--active .checkout__option {\r\n\topacity: 1;\r\n\t-webkit-transform: translate3d(0, 0, 0);\r\n\ttransform: translate3d(0, 0, 0);\r\n\ttransition: opacity 0.6s cubic-bezier(0.2, 1, 0.3, 1), -webkit-transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);\r\n\ttransition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.2, 1, 0.3, 1);\r\n\ttransition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.2, 1, 0.3, 1), -webkit-transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);\r\n\ttransition-delay: 0.18s;\r\n}\r\n\r\n@media screen and (max-width: 26em) { \r\n\t.checkout--active .checkout__button {\r\n\t\tcursor: default;\r\n\t\t-webkit-transform: translate3d(-100%, 0, 0);\r\n\t\ttransform: translate3d(-100%, 0, 0);\r\n\t}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"checkout\" [ngClass]=\"{'checkout--active': isOpen | async}\">\r\n  <a class=\"checkout__button\" href=\"#\" (click)=\"openCart()\"><!-- Fallback location -->\r\n    <span class=\"checkout__text\">\r\n      <svg class=\"checkout__icon\" width=\"30px\" height=\"30px\" viewBox=\"0 0 35 35\">\r\n        <path fill=\"#fff\" d=\"M33.623,8.004c-0.185-0.268-0.486-0.434-0.812-0.447L12.573,6.685c-0.581-0.025-1.066,0.423-1.091,1.001 c-0.025,0.578,0.423,1.065,1.001,1.091L31.35,9.589l-3.709,11.575H11.131L8.149,4.924c-0.065-0.355-0.31-0.652-0.646-0.785 L2.618,2.22C2.079,2.01,1.472,2.274,1.26,2.812s0.053,1.146 0.591,1.357l4.343,1.706L9.23,22.4c0.092,0.497,0.524,0.857,1.03,0.857 h0.504l-1.15,3.193c-0.096,0.268-0.057,0.565,0.108,0.798c0.163,0.232,0.429,0.37,0.713,0.37h0.807 c-0.5,0.556-0.807,1.288-0.807,2.093c0,1.732,1.409,3.141,3.14,3.141c1.732,0,3.141-1.408,3.141-3.141c0-0.805-0.307-1.537-0.807-2.093h6.847c-0.5,0.556-0.806,1.288-0.806,2.093c0,1.732,1.407,3.141,3.14,3.141 c1.731,0,3.14-1.408,3.14-3.141c0-0.805-0.307-1.537-0.806-2.093h0.98c0.482,0,0.872-0.391,0.872-0.872s-0.39-0.873-0.872-0.873 H11.675l0.942-2.617h15.786c0.455,0,0.857-0.294,0.996-0.727l4.362-13.608C33.862,8.612,33.811,8.272,33.623,8.004z M13.574,31.108c-0.769,0-1.395-0.626-1.395-1.396s0.626-1.396,1.395-1.396c0.77,0,1.396,0.626,1.396,1.396S14.344,31.108,13.574,31.108z M25.089,31.108c-0.771,0-1.396 0.626-1.396-1.396s0.626-1.396,1.396-1.396c0.77,0,1.396,0.626,1.396,1.396 S25.858,31.108,25.089,31.108z\"/>\r\n      </svg>\r\n    </span>\r\n    <span class=\"checkout__count\" *ngIf=\"false\">0</span>\r\n  </a>\r\n  <div class=\"checkout__order\">\r\n    <div class=\"checkout__order-inner\">\r\n      <table class=\"checkout__summary\">\r\n        <thead>\r\n              <tr>\r\n                <th>Your Order</th>\r\n                <th>Qty</th>\r\n                <th>Price</th>\r\n                <th></th>\r\n              </tr>\r\n          </thead>\r\n          <tfoot>\r\n              <tr>\r\n                <th></th>\r\n                <th colspan=\"2\">Total <span class=\"checkout__total\">${{cart.getTotal() | number: '1.2'}}</span></th>\r\n                <th></th>\r\n              </tr>\r\n          </tfoot>\r\n          <tbody>\r\n            <tr *ngFor=\"let cartItem of cart.items\">\r\n              <td>{{cartItem.product.title}} <span>{{cartItem.product.brand}}</span></td>\r\n              <td>{{cartItem.qty}}</td>\r\n              <td>${{cartItem.subtotal}}</td>\r\n              <td><a (click)=\"cart.removeFromCart(cartItem)\"><i class=\"fa fa-trash\"></i></a></td>\r\n            </tr>\r\n        </tbody>\r\n      </table><!-- /checkout__summary -->\r\n      <button class=\"checkout__option checkout__option--silent checkout__cancel\" (click)=\"closeCart()\"><i class=\"fa fa-angle-left\"></i> Continue Shopping</button><button class=\"checkout__option\">Buy</button>\r\n      <button class=\"checkout__close checkout__cancel\" (click)=\"closeCart()\"><i class=\"icon fa fa-fw fa-close\"></i>Close</button>\r\n    </div><!-- /checkout__order-inner -->\r\n  </div><!-- /checkout__order -->\r\n</div><!-- /checkout -->"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("./src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_cart__ = __webpack_require__("./src/app/classes/cart.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = (function () {
    function CartComponent(_cart) {
        this._cart = _cart;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.isOpen = this._cart.isOpen;
        this.cart = __WEBPACK_IMPORTED_MODULE_2__classes_cart__["a" /* Cart */];
    };
    CartComponent.prototype.openCart = function () {
        this._cart.openCart();
    };
    CartComponent.prototype.closeCart = function () {
        this._cart.closeCart();
    };
    return CartComponent;
}());
CartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-cart',
        template: __webpack_require__("./src/app/cart/cart.component.html"),
        styles: [__webpack_require__("./src/app/cart/cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]) === "function" && _a || Object])
], CartComponent);

var _a;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "./src/app/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Fixed bottom bar */\r\n\r\n.bar {\r\n\tposition: fixed;\r\n\tz-index: 100;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\tpadding: 1.75em 5em;\r\n\ttext-align: center;\r\n\tbackground: #191a1b;\r\n\t-webkit-transform: translate3d(0, 0, 0);\r\n\t/* Fix for Chrome flicker on Mac ...party like we're in 2012! */\r\n}\r\n\r\n.flexbox .filter {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n}\r\n\r\n.action {\r\n\tfont-family: Avenir, 'Helvetica Neue', 'Lato', 'Segoe UI', Helvetica, Arial, sans-serif;\r\n\tfont-size: 1.05em;\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tmargin: 0;\r\n\tpadding: .25em;\r\n\tcursor: pointer;\r\n\tcolor: #fff;\r\n\tborder: none;\r\n\tbackground: none;\r\n}\r\n\r\n.action:focus {\r\n\toutline: none;\r\n}\r\n\r\n.action--button {\r\n\tcolor: #5c5edc;\r\n}\r\n\r\n.no-touch .action--button:hover {\r\n\tcolor: #fff;\r\n\toutline: none;\r\n}\r\n\r\n\r\n/* Filter */\r\n\r\n.filter__label {\r\n\tfont-size: .85em;\r\n\tdisplay: inline-block;\r\n\tmargin: 0 2%;\r\n\tfont-weight: bold;\r\n\tcolor: #393A3F;\r\n}\r\n\r\n.filter__item {\r\n\tfont-weight: bold;\r\n\tmargin: 0 2%;\r\n\tpadding: .1em;\r\n\tvertical-align: middle;\r\n\tcolor: #a3a3b3;\r\n\tborder-bottom: 2px solid transparent;\r\n}\r\n\r\n.filter__item--selected {\r\n\tcolor: #1976d2;\r\n\tborder-color: #1976d2;\r\n}\r\n\r\n.filter__item .icon {\r\n\tfont-size: 1.75em;\r\n\tdisplay: none;\r\n}\r\n\r\n/* Shopping cart */\r\n\r\n.cart {\r\n\tfont-size: 1.5em;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\toverflow: hidden;\r\n\theight: 100%;\r\n\tpadding: 0 1.195em;\r\n\tcursor: pointer;\r\n\tcolor: #abacae;\r\n\tborder: none;\r\n    background-color: #131415;\r\n    outline: none;\r\n}\r\n\r\n.no-touch .cart:focus,\r\n.no-touch .cart:hover {\r\n\tcolor: #fff;\r\n\toutline: none;\r\n}\r\n\r\n.cart--animate .cart__icon {\r\n\t-webkit-animation: cartAnim .4s forwards;\r\n\tanimation: cartAnim .4s forwards;\r\n}\r\n\r\n@-webkit-keyframes cartAnim {\r\n\t50% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translate3d(50px, 0, 0);\r\n\t\ttransform: translate3d(50px, 0, 0);\r\n\t}\r\n\t51% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translate3d(-50px, 0, 0);\r\n\t\ttransform: translate3d(-50px, 0, 0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: translate3d(0, 0, 0);\r\n\t\ttransform: translate3d(0, 0, 0);\r\n\t}\r\n}\r\n\r\n@keyframes cartAnim {\r\n\t50% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translate3d(50px, 0, 0);\r\n\t\ttransform: translate3d(50px, 0, 0);\r\n\t}\r\n\t51% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translate3d(-50px, 0, 0);\r\n\t\ttransform: translate3d(-50px, 0, 0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: translate3d(0, 0, 0);\r\n\t\ttransform: translate3d(0, 0, 0);\r\n\t}\r\n}\r\n\r\n.cart__count {\r\n\tfont-size: 9px;\r\n\tfont-weight: bold;\r\n\tline-height: 15px;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tright: 20px;\r\n\twidth: 15px;\r\n\theight: 15px;\r\n\tmargin: -16px 0 0 0;\r\n\ttext-align: center;\r\n\tcolor: #fff;\r\n\tborder-radius: 50%;\r\n\tbackground: #5c5edc;\r\n}\r\n\r\n.cart--animate .cart__count {\r\n\t-webkit-animation: countAnim .4s forwards;\r\n\tanimation: countAnim .4s forwards;\r\n}\r\n\r\n@-webkit-keyframes countAnim {\r\n\t50% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translate3d(0, 80px, 0);\r\n\t\ttransform: translate3d(0, 80px, 0);\r\n\t}\r\n\t51% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translate3d(0, -80px, 0);\r\n\t\ttransform: translate3d(0, -80px, 0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: translate3d(0, 0, 0);\r\n\t\ttransform: translate3d(0, 0, 0);\r\n\t}\r\n}\r\n\r\n@keyframes countAnim {\r\n\t50% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translate3d(0, 80px, 0);\r\n\t\ttransform: translate3d(0, 80px, 0);\r\n\t}\r\n\t51% {\r\n\t\topacity: 0;\r\n\t\t-webkit-transform: translate3d(0, -80px, 0);\r\n\t\ttransform: translate3d(0, -80px, 0);\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\t-webkit-transform: translate3d(0, 0, 0);\r\n\t\ttransform: translate3d(0, 0, 0);\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 50em) {\r\n\t.bar {\r\n\t\tpadding-left: 0;\r\n\t\ttext-align: left;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 40em) {\r\n\t.bar {\r\n\t\tpadding: .5em 4.5em .5em 0;\r\n\t}\r\n\t.flexbox .filter {\r\n\t\t-ms-flex-pack: distribute;\r\n\t\t    justify-content: space-around;\r\n\t}\r\n\t.filter__item {\r\n\t\theight: 100%;\r\n\t\tpadding: .5em .1em;\r\n\t\tborder: none;\r\n\t}\r\n\t.filter__item .icon {\r\n\t\tdisplay: inline-block;\r\n\t}\r\n\t.filter__label,\r\n\t.action__text {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.cart {\r\n\t\tpadding: 0 1em;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Bottom bar with filter and cart info -->\r\n<div class=\"bar\">\r\n    <div class=\"filter\">\r\n      <span class=\"filter__label\">Category: </span>\r\n      <button class=\"action filter__item \" data-filter=\"*\" (click)=\"setCategory(null)\" [ngClass]=\"{'filter__item--selected': (selectedCategory | async) === null}\">All</button>\r\n      <button *ngFor=\"let category of _category.categories\" class=\"action filter__item\" data-filter=\".jackets\" (click)=\"setCategory(category)\" [ngClass]=\"{'filter__item--selected': (selectedCategory | async) == category}\"><i class=\"icon icon--jacket\"></i><span class=\"action__text\">{{category.name}}</span></button>\r\n    </div>\r\n    <app-cart></app-cart>\r\n  </div>"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesComponent = (function () {
    function CategoriesComponent(_category) {
        this._category = _category;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.selectedCategory = this._category.selectedCategory;
    };
    CategoriesComponent.prototype.setCategory = function (category) {
        this._category.setCategory(category);
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-categories',
        template: __webpack_require__("./src/app/categories/categories.component.html"),
        styles: [__webpack_require__("./src/app/categories/categories.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_category_service__["a" /* CategoryService */]) === "function" && _a || Object])
], CategoriesComponent);

var _a;
//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "./src/app/classes/cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
var Cart = (function () {
    function Cart() {
    }
    Cart.getTotal = function () {
        return this.items.reduce(function (sum, cartItem) {
            return sum + cartItem.subtotal;
        }, 0);
    };
    Cart.removeFromCart = function (cartItem) {
        Cart.items.splice(Cart.items.indexOf(cartItem), 1);
    };
    return Cart;
}());

Cart.items = [];
//# sourceMappingURL=cart.js.map

/***/ }),

/***/ "./src/app/classes/category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = (function () {
    function Category(init) {
        this.id = init.id;
        this.name = init.name;
    }
    return Category;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ "./src/app/classes/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart__ = __webpack_require__("./src/app/classes/cart.ts");

var Product = (function () {
    function Product(init, category) {
        this.price = 0;
        this.featured = false;
        this.id = init.id;
        this.title = init.title;
        this.brand = init.brand;
        this.price = init.price;
        this.featured = init.featured;
        this.image = init.image;
        this.category = category;
    }
    Product.prototype.toJson = function () {
        return {
            id: this.id,
            title: this.title,
            price: this.price,
            category: this.category.id
        };
    };
    Product.prototype.addToCart = function () {
        var _this = this;
        var foundItem = __WEBPACK_IMPORTED_MODULE_0__cart__["a" /* Cart */].items.find(function (cartItem) { return cartItem.product == _this; });
        if (foundItem) {
            foundItem.qty += 1;
            foundItem.subtotal = foundItem.qty * this.price;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0__cart__["a" /* Cart */].items.push({
                product: this,
                qty: 1,
                subtotal: this.price
            });
        }
    };
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "./src/app/classes/shirt.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shirt; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product__ = __webpack_require__("./src/app/classes/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart__ = __webpack_require__("./src/app/classes/cart.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Shirt = (function (_super) {
    __extends(Shirt, _super);
    function Shirt(init, category) {
        var _this = _super.call(this, init, category) || this;
        _this.sizes = init.sizes;
        return _this;
    }
    Shirt.prototype.toJson = function () {
        var json = _super.prototype.toJson.call(this);
        json['sizes'] = this.sizes;
        return json;
    };
    Shirt.prototype.addToCart = function () {
        var _this = this;
        var foundItem = __WEBPACK_IMPORTED_MODULE_1__cart__["a" /* Cart */].items.find(function (cartItem) { return cartItem.product == _this; });
        if (foundItem) {
            foundItem.qty += 1;
            foundItem.subtotal = foundItem.qty * this.price;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_1__cart__["a" /* Cart */].items.push({
                product: this,
                qty: 1,
                subtotal: this.price
            });
        }
    };
    return Shirt;
}(__WEBPACK_IMPORTED_MODULE_0__product__["a" /* Product */]));

//# sourceMappingURL=shirt.js.map

/***/ }),

/***/ "./src/app/classes/sticker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sticker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product__ = __webpack_require__("./src/app/classes/product.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Sticker = (function (_super) {
    __extends(Sticker, _super);
    function Sticker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sticker;
}(__WEBPACK_IMPORTED_MODULE_0__product__["a" /* Product */]));

//# sourceMappingURL=sticker.js.map

/***/ }),

/***/ "./src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Helper classes */\r\n.cf:before,\r\n.cf:after {\r\n\tcontent: ' ';\r\n\tdisplay: table;\r\n}\r\n\r\n.cf:after {\r\n\tclear: both;\r\n}\r\n\r\n/* Blueprint header */\r\n.bp-header {\r\n\twidth: 90%;\r\n\tmax-width: 69em;\r\n\tmargin: 0 auto;\r\n\tpadding: 4em 1.875em 1.875em;\r\n\ttext-align: center;\r\n}\r\n\r\n.bp-header h1 {\r\n\tfont-size: 2.125em;\r\n\tfont-weight: 400;\r\n\tline-height: 1.3;\r\n\tmargin: 0 0 .6em 0;\r\n}\r\n\r\n.bp-header h1 > span {\r\n\tfont-size: 50%;\r\n\tdisplay: block;\r\n\tcolor: #4D4D5A;\r\n} \r\n\r\n.bp-header > span {\r\n\tfont-weight: 700;\r\n\tfont-size: 0.85em;\r\n\tcolor: #5C5EDC;\r\n\tposition: relative;\r\n\tz-index: 100;\r\n\tdisplay: block;\r\n\tpadding: 0 0 .6em .1em;\r\n\tletter-spacing: .5em;\r\n\ttext-transform: uppercase;\r\n\ttext-indent: 30px;\r\n}\r\n\r\n.bp-header > span span:after {\r\n\tfont-size: 50%;\r\n\tfont-size: 75%;\r\n\tposition: relative;\r\n\ttop: -8px;\r\n\tleft: -12px;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n\r\n.bp-header > span span:hover:before {\r\n\tcontent: attr(data-content);\r\n\tfont-size: 110%;\r\n\tfont-weight: 700;\r\n\tline-height: 1.2;\r\n\tposition: absolute;\r\n\tleft: auto;\r\n\tmargin-left: 4px;\r\n\tpadding: .8em 1em;\r\n\ttext-align: left;\r\n\ttext-indent: 0;\r\n\tletter-spacing: 0;\r\n\ttext-transform: none;\r\n\tcolor: #fff;\r\n\tbackground: #5C5EDC;\r\n}\r\n\r\n.bp-header nav {\r\n\ttext-align: center;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.bp-header nav a {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\twidth: 2.5em;\r\n\theight: 2.5em;\r\n\tmargin: 0 .1em;\r\n\ttext-align: left;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.bp-header nav a > span {\r\n\tdisplay: none;\r\n}\r\n\r\n.bp-header nav a:hover:before {\r\n\tcontent: attr(data-info);\r\n\tcolor: #595A5F;\r\n\tfont-weight: bold;\r\n\tfont-size: 0.85em;\r\n\tposition: absolute;\r\n\ttop: 120%;\r\n\tright: 0;\r\n\twidth: 600%;\r\n\ttext-align: right;\r\n\tpointer-events: none;\r\n}\r\n\r\n.bp-header nav a:hover {\r\n\tbackground: #5C5EDC;\r\n}\r\n\r\n.bp-icon:after {\r\n\tfont-family: 'bpicons';\r\n\tfont-weight: normal;\r\n\tfont-style: normal;\r\n\tfont-variant: normal;\r\n\ttext-align: center;\r\n\ttext-transform: none;\r\n\tcolor: #5C5EDC;\r\n\tspeak: none;\r\n\t-webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.bp-header nav .bp-icon:after {\r\n\tline-height: 2.4;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttext-indent: 0;\r\n}\r\n\r\n.bp-header nav a:hover:after {\r\n\tcolor: #fff;\r\n}\r\n\r\n.bp-icon-next:after {\r\n\tcontent: '\\E000';\r\n}\r\n\r\n.bp-icon-drop:after {\r\n\tcontent: '\\E001';\r\n}\r\n\r\n.bp-icon-archive:after {\r\n\tcontent: '\\E002';\r\n}\r\n\r\n.bp-icon-about:after {\r\n\tcontent: '\\E003';\r\n}\r\n\r\n.bp-icon-prev:after {\r\n\tcontent: '\\E004';\r\n}\r\n\r\n@media screen and (max-width: 40em) {\r\n\t.bp-header h1 {\r\n\t\tfont-size: 1.8em;\r\n\t}\r\n}\r\n\r\n/* Product grid */\r\n\r\n.grid {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n    max-width: 1300px;\r\n    margin: 0 auto;\r\n    margin-top: 70px;\r\n\tpadding: 1.5em 0 8em;\r\n\ttext-align: center;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\t-webkit-touch-callout: none;\r\n\t-khtml-user-select: none;\r\n}\r\n\r\n/* Loader */\r\n.grid__loader {\r\n\tdisplay: none;\r\n\tmargin: 12em auto 0;\r\n}\r\n\r\n.grid--loading .grid__loader {\r\n\tdisplay: block;\r\n}\r\n\r\n/* Clearfix */\r\n\r\n.grid:after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tclear: both;\r\n}\r\n\r\n/* Grid items */\r\n\r\n.grid__sizer,\r\n.grid__item {\r\n\tposition: relative;\r\n\tfloat: left;\r\n\twidth: 20%;\r\n\tpadding: .75em;\r\n}\r\n\r\n.no-touch .grid__sizer,\r\n.no-touch .grid__item {\r\n\tpadding: .75em .75em 1.25em;\r\n}\r\n\r\n.grid--loading .grid__item {\r\n\tvisibility: hidden;\r\n}\r\n\r\n.grid__item--size-a {\r\n\twidth: 40%;\r\n}\r\n\r\n/* Gallery */\r\n\r\n.slider {\r\n\tpadding: 0;\r\n\tborder-radius: 5px;\r\n\tbackground: #24252a;\r\n\tposition: relative;\r\n}\r\n\r\n.no-touch .slider {\r\n\tpadding: 0 0 1.25em;\r\n}\r\n\r\n.slider__item {\r\n\twidth: 100%;\r\n\tpadding: 1em;\r\n}\r\n\r\n.slider__item img {\r\n\twidth: 100%;\r\n}\r\n/* Flickity page dots */\r\n\r\n.slider .flickity-page-dots {\r\n\tbottom: 20px;\r\n\topacity: 0;\r\n\ttransition: opacity .3s;\r\n}\r\n\r\n.no-touch .slider:hover .flickity-page-dots {\r\n\topacity: 1;\r\n}\r\n\r\n.slider .flickity-page-dots .dot {\r\n\tbackground: #131417;\r\n}\r\n\r\n.slider .slider__overlay {\r\n\topacity: 0;\r\n\tposition: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n\tbackground: rgba(0,0,0,0.25);\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\ttransition: opacity .3s, -webkit-transform .3s;\r\n\ttransition: opacity .3s, transform .3s;\r\n\ttransition: opacity .3s, transform .3s, -webkit-transform .3s;\r\n}\r\n\r\n.slider .slider__overlay select {\r\n\theight: 3rem;\r\n    padding: 1rem;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.slider:hover .slider__overlay {\r\n\topacity: 1;\r\n}\r\n\r\n.action-add-to-cart {\r\n\tborder-radius: 1px;\r\n    background: #517cad;\r\n    display: inline-block;\r\n\twidth: 3rem;\r\n    height: 3rem;\r\n    line-height: 3rem;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.action-add-to-cart:hover {\r\n\tbackground: #426a98;\r\n}\r\n\r\n/* Product meta */\r\n\r\n.meta {\r\n\tposition: relative;\r\n\tmargin: 10px 0 0;\r\n\tpadding: 0 60px 0 0;\r\n\ttext-align: left;\r\n}\r\n\r\n.meta__brand {\r\n\tfont-size: .85em;\r\n\tfont-weight: bold;\r\n\tdisplay: block;\r\n\tcolor: #595b64;\r\n}\r\n\r\n.meta__title {\r\n\tfont-size: .95em;\r\n\tfont-weight: bold;\r\n\tmargin: 0;\r\n\tpadding: .4em 0 .1em;\r\n}\r\n\r\n.meta__price {\r\n\tfont-size: .95em;\r\n\tfont-weight: bold;\r\n\tposition: absolute;\r\n\ttop: .45em;\r\n\tright: .25em;\r\n\tcolor: #595b64;\r\n}\r\n\r\n/* Action style */\r\n\r\n.action {\r\n\tfont-family: Avenir, 'Helvetica Neue', 'Lato', 'Segoe UI', Helvetica, Arial, sans-serif;\r\n\tfont-size: 1.05em;\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tmargin: 0;\r\n\tpadding: .25em;\r\n\tcursor: pointer;\r\n\tcolor: #fff;\r\n\tborder: none;\r\n\tbackground: none;\r\n}\r\n\r\n.action:focus {\r\n\toutline: none;\r\n}\r\n\r\n.action--button {\r\n\tcolor: #5c5edc;\r\n}\r\n\r\n.no-touch .action--button:hover {\r\n\tcolor: #fff;\r\n\toutline: none;\r\n}\r\n\r\n.text-hidden {\r\n\tposition: absolute;\r\n\ttop: 200%;\r\n}\r\n\r\n/* Add to cart button */\r\n\r\n.action--buy {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 1.85em 2.35em;\r\n\ttransition: opacity .3s, -webkit-transform .3s;\r\n\ttransition: opacity .3s, transform .3s;\r\n\ttransition: opacity .3s, transform .3s, -webkit-transform .3s;\r\n\t-webkit-transform: translate3d(-5px, 0, 0);\r\n\ttransform: translate3d(-5px, 0, 0);\r\n}\r\n\r\n.no-touch .action--buy {\r\n\topacity: 0;\r\n}\r\n\r\n.no-touch .grid__item:hover .action--buy {\r\n\topacity: 1;\r\n\t-webkit-transform: translate3d(0, 0, 0);\r\n\ttransform: translate3d(0, 0, 0);\r\n}\r\n\r\n/* Resize grid items on smaller screens */\r\n\r\n@media screen and (max-width: 65em) {\r\n\t.grid__sizer,\r\n\t.grid__item,\r\n\t.grid__item--size-a {\r\n\t\twidth: 33.333%;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 50em) {\r\n\t.grid__sizer,\r\n\t.grid__item,\r\n\t.grid__item--size-a {\r\n\t\twidth: 50%;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 25em) {\r\n\t.grid {\r\n\t\tmax-width: 75%;\r\n\t}\r\n\t.grid__loader {\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\t.grid__sizer,\r\n\t.grid__item,\r\n\t.grid__item--size-a {\r\n\t\twidth: 100%;\r\n\t}\r\n\t.action--buy {\r\n\t\tfont-size: 1.5em;\r\n\t\tpadding: 1.15em 1.5em;\r\n\t\t-webkit-tap-highlight-color: transparent;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main view -->\r\n<div class=\"view\">\r\n  <!-- Grid -->\r\n  <section class=\"grid grid--loading\" #grid>\r\n    <!-- Loader -->\r\n    <img class=\"grid__loader\" src=\"assets/images/grid.svg\" width=\"60\" alt=\"Loader image\" />\r\n    <!-- Grid sizer for a fluid Isotope (Masonry) layout -->\r\n    <div class=\"grid__sizer\"></div>\r\n    <!-- Grid items -->\r\n    <div *ngFor=\"let product of _product.products\" class=\"grid__item category_{{product.category.id}}\" [ngClass]=\"{'grid__item--size-a': product.featured}\">\r\n      <div class=\"slider\">\r\n        <div class=\"slider__item\"><img src=\"assets/images/{{product.image}}\" alt=\"{{product.title}}\" /></div>\r\n        <div class=\"slider__overlay\">\r\n          <div *ngIf=\"product.sizes\"><select><option *ngFor=\"let size of product.sizes\">{{size}}</option></select></div>\r\n          <a class=\"action-add-to-cart\" (click)=\"product.addToCart()\"><i class=\"fa fa-shopping-cart\"></i></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"meta\">\r\n        <h3 class=\"meta__title\">{{product.title}}</h3>\r\n        <span class=\"meta__brand\">{{product.brand}}</span>\r\n        <span class=\"meta__price\">${{product.price}}</span>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- /grid-->\r\n</div>"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isotope_layout__ = __webpack_require__("./node_modules/isotope-layout/js/isotope.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isotope_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isotope_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_imagesloaded__ = __webpack_require__("./node_modules/imagesloaded/imagesloaded.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_imagesloaded___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_imagesloaded__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsComponent = (function () {
    function ProductsComponent(_category, _product) {
        this._category = _category;
        this._product = _product;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._product.loaded.subscribe(function (checkIfLoaded) {
            checkIfLoaded && setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_2_imagesloaded__(_this.gridEl.nativeElement, function () {
                    _this.isotope = new __WEBPACK_IMPORTED_MODULE_1_isotope_layout__(_this.gridEl.nativeElement, {
                        isResizeBound: false,
                        itemSelector: '.grid__item',
                        percentPosition: true,
                        masonry: {
                            // use outer width of grid-sizer for columnWidth
                            columnWidth: '.grid__sizer'
                        },
                        transitionDuration: '0.6s'
                    });
                    _this.gridEl.nativeElement.classList.remove('grid--loading');
                });
            });
        });
        this._category.selectedCategory.subscribe(function (category) {
            if (category)
                _this.filter('.category_' + category.id);
            else
                _this.filter('*');
        });
    };
    ProductsComponent.prototype.filter = function (items) {
        if (!this.isotope)
            return;
        this.isotope.arrange({
            filter: items
        });
        this.isotope.layout();
    };
    return ProductsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('grid'),
    __metadata("design:type", Object)
], ProductsComponent.prototype, "gridEl", void 0);
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-products',
        template: __webpack_require__("./src/app/products/products.component.html"),
        styles: [__webpack_require__("./src/app/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */]) === "function" && _b || Object])
], ProductsComponent);

var _a, _b;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "./src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    ApiService.prototype.get = function (path) {
        return this._http.get(path);
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "./src/app/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Rxjs__ = __webpack_require__("./node_modules/Rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_Rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartService = (function () {
    function CartService() {
        this.isOpen = new __WEBPACK_IMPORTED_MODULE_1_Rxjs__["BehaviorSubject"](false);
    }
    CartService.prototype.openCart = function () {
        this.isOpen.next(true);
    };
    CartService.prototype.closeCart = function () {
        this.isOpen.next(false);
    };
    return CartService;
}());
CartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CartService);

//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "./src/app/services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Rxjs__ = __webpack_require__("./node_modules/Rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_Rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_category__ = __webpack_require__("./src/app/classes/category.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryService = (function () {
    function CategoryService(_api) {
        this._api = _api;
        this.selectedCategory = new __WEBPACK_IMPORTED_MODULE_1_Rxjs__["BehaviorSubject"](null);
        this.loaded = new __WEBPACK_IMPORTED_MODULE_1_Rxjs__["BehaviorSubject"](false);
        this.loadCategories();
    }
    CategoryService.prototype.setCategory = function (category) {
        this.selectedCategory.next(category);
    };
    CategoryService.prototype.loadCategories = function () {
        var _this = this;
        return this._api.get('assets/api/categories.json').subscribe(function (data) {
            _this.categories = data.map(function (item) { return new __WEBPACK_IMPORTED_MODULE_3__classes_category__["a" /* Category */](item); });
            _this.loaded.next(true);
        });
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], CategoryService);

var _a;
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "./src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Rxjs__ = __webpack_require__("./node_modules/Rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_Rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_shirt__ = __webpack_require__("./src/app/classes/shirt.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_sticker__ = __webpack_require__("./src/app/classes/sticker.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductService = (function () {
    function ProductService(_api, _category) {
        var _this = this;
        this._api = _api;
        this._category = _category;
        this.loaded = new __WEBPACK_IMPORTED_MODULE_3_Rxjs__["BehaviorSubject"](false);
        this._category.loaded.subscribe(function (isLoaded) {
            if (isLoaded)
                _this.loadProducts();
        });
    }
    ProductService.prototype.loadProducts = function () {
        var _this = this;
        return this._api.get('assets/api/products.json').subscribe(function (data) {
            _this.products = data.map(function (product) {
                if (product.category == 1 || product.category == 2)
                    return new __WEBPACK_IMPORTED_MODULE_4__classes_shirt__["a" /* Shirt */](product, _this._category.categories.find(function (category) { return category.id == product.category; }));
                else if (product.category == 3)
                    return new __WEBPACK_IMPORTED_MODULE_5__classes_sticker__["a" /* Sticker */](product, _this._category.categories.find(function (category) { return category.id == product.category; }));
            });
            _this.loaded.next(true);
        });
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__category_service__["a" /* CategoryService */]) === "function" && _b || Object])
], ProductService);

var _a, _b;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map