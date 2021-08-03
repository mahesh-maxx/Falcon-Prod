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
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"https://www.geektrust.in/\" target=\"_blank\"\n    >GeekTrust</a\n  >\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarText\"\n    aria-controls=\"navbarText\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse header-action\" id=\"navbarText\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li\n        class=\"nav-item\"\n        [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{ exact: true }\"\n      >\n        <a class=\"nav-link\" [routerLink]=\"['']\">Home </a>\n      </li>\n      <li\n        class=\"nav-item\"\n        [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{ exact: true }\"\n      >\n        <a class=\"nav-link\" [routerLink]=\"['find-falcon']\">Find Falcone</a>\n      </li>\n    </ul>\n\n    <ul class=\"nav navbar-nav ml-auto\">\n      <li class=\"nav-item pointer\">\n        <a class=\"nav-link\" (click)=\"abortSearch()\">Reset</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://www.geektrust.in/\" target=\"_blank\"\n          >Geektrust Home</a\n        >\n      </li>\n    </ul>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/select-planet/select-planet.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/select-planet/select-planet.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"form\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"img-bound\">\n        <img\n          class=\"card-img-top\"\n          [src]=\"\n            imageBasePath +\n            (selectedPlanet\n              ? selectedPlanet.name + '.png'\n              : 'planet-not-selected.png')\n          \"\n          alt=\"Card image cap\"\n        />\n      </div>\n      <div *ngIf=\"selectedPlanet\">\n        <h5 class=\"text-center\">\n          {{ selectedPlanet.name | uppercase }}\n        </h5>\n        <h6 class=\"text-center\">\n          Distance :\n          {{ selectedPlanet.distance }} MegaMiles\n        </h6>\n      </div>\n\n      <div class=\"form-group\">\n        <select\n          class=\"form-control\"\n          name=\"planet\"\n          (change)=\"updateSelectedPlanet($event)\"\n        >\n          <option value=\"\">Select Planet</option>\n          <option *ngFor=\"let planet of planetList\" [value]=\"planet.name\">\n            {{ planet.name }}\n          </option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"card-body\">\n      <select-vehicle\n        [selectedPlanet]=\"selectedPlanet\"\n        *ngIf=\"selectedPlanet\"\n      ></select-vehicle>\n    </div>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/select-vehicle/select-vehicle.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/select-vehicle/select-vehicle.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\n  <ul class=\"list-group\">\n    <li\n      class=\"list-group-item list-group-item-action\"\n      *ngFor=\"let vehicle of vehicleList; index as i\"\n      [ngClass]=\"[\n        selectedVehicle && selectedVehicle == vehicle.name\n          ? 'list-group-item-success'\n          : '',\n        vehicle.max_distance < selectedPlanet.distance || vehicle.total_no === 0\n          ? 'disable-item'\n          : ''\n      ]\"\n      data-toggle=\"tooltip\"\n      data-placement=\"top\"\n      [title]=\"\n        'Range: ' +\n        vehicle.max_distance +\n        ' MegaMiles, Speed: ' +\n        vehicle.speed +\n        ' MM/Hour'\n      \"\n    >\n      <label>\n        <input\n          type=\"radio\"\n          [value]=\"vehicle.name\"\n          [checked]=\"vehicle.name == selectedVehicle\"\n          [disabled]=\"\n            vehicle.max_distance < selectedPlanet.distance ||\n            vehicle.total_no === 0\n          \"\n          (change)=\"updateSelectedVehicle($event)\"\n        />\n        <img\n          [src]=\"imageBasePath + vehicle.name + '.png'\"\n          style=\"height: 2rem\"\n        />\n        {{ vehicle.name }} ({{ vehicle.total_no }})\n      </label>\n    </li>\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/finding-falcon/finding-falcon.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/finding-falcon/finding-falcon.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h2 class=\"text-center\">\n      Select any 4 Planets and Vehicles you want to search\n    </h2>\n    <h4 class=\"text-center\" *ngIf=\"(totalTimeTaken$ | async) > 0\">\n      Total time to reach all the planets : {{ totalTimeTaken$ | async }}\n    </h4>\n    <br />\n    <div class=\"row\">\n      <select-planet class=\"col-md-3\"></select-planet>\n      <select-planet class=\"col-md-3\"></select-planet>\n      <select-planet class=\"col-md-3\"></select-planet>\n      <select-planet class=\"col-md-3\"></select-planet>\n      <button\n        *ngIf=\"readyToFind$ | async\"\n        class=\"btn btn-large btn-primary find\"\n        (click)=\"findFalcon()\"\n      >\n        Find Falcon\n      </button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-lg-12 spacing-20 intro\">\n    <img src=\"./assets/king_shan.jpg\" alt=\"king shan\" />\n\n    <h1>Welcome to the planet of Lengaburu</h1>\n    <br />\n    <div class=\"container\">\n      <p>\n        After the recent war with neighbouring planet Falicornia, King Shan has\n        exiled the Queen of Falicornia for 15 years.Queen Al Falcone is now in\n        hiding. But if King Shan can find her before the years are up, she will\n        be exiled for another 15 years....\n      </p>\n      <p>\n        King Shan has received intelligence that Al Falcone is in hiding in one\n        of these 6 planets - DonLon, Enchai, Jebing, Sapir, Lerbin & Pingasor.\n        However he has limited resources at his disposal & can send his army to\n        only 4 of these planets. Your task is to help King Shan find Al Falcone.\n      </p>\n\n      <a class=\"btn btn-large btn-primary\" [routerLink]=\"['find-falcon']\">\n        Send Army to Find AI Falcon\n      </a>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/page-not-found/page-not-found.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/page-not-found/page-not-found.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-container\">\n  <div class=\"error-container\">\n    <div class=\"logo\" role=\"img\" aria-label=\"logo\" title=\"logo\">\n      <svg\n        version=\"1.1\"\n        id=\"Layer_1\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n        x=\"0px\"\n        y=\"0px\"\n        viewBox=\"0 0 250 250\"\n        style=\"enable-background: new 0 0 250 250\"\n        xml:space=\"preserve\"\n      >\n        <style type=\"text/css\">\n          .st0 {\n            fill: #dd0031;\n          }\n          .st1 {\n            fill: #c3002f;\n          }\n          .st2 {\n            fill: #ffffff;\n          }\n        </style>\n        <g>\n          <polygon\n            class=\"st0\"\n            points=\"125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2 \t\"\n          />\n          <polygon\n            class=\"st1\"\n            points=\"125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30 \t\"\n          />\n          <path\n            class=\"st2\"\n            d=\"M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1L125,52.1L125,52.1L125,52.1\n\t\tL125,52.1z M142,135.4H108l17-40.9L142,135.4z\"\n          />\n        </g>\n      </svg>\n    </div>\n    <h4 class=\"heading-text\">That page does not exist</h4>\n    <p>Please check the URL and try again.</p>\n    <div class=\"exit-btn-container\">\n      <a class=\"button__primary exit-btn\" [routerLink]=\"['']\">\n        Return to Homepage\n      </a>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/results/results.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/results/results.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-lg-12 spacing-20 intro\">\n    <img src=\"./assets/king_shan.jpg\" alt=\"king shan\" />\n\n    <h1>Finding Falcone!</h1>\n    <br />\n    <div class=\"container\" *ngIf=\"missionDetails$ | async as missionDetails\">\n      <div *ngIf=\"missionDetails.status == 'success'\" class=\"success\">\n        <h5>\n          Success! Congratulations on Finding Falcone. King Shan is mighty\n          pleased.\n        </h5>\n        <h5>Time taken: {{ timeSpent$ | async }} Hours</h5>\n        <h5>Planet found: {{ missionDetails.planet_name }}</h5>\n      </div>\n\n      <div *ngIf=\"missionDetails.status == 'false'\" class=\"fail\">\n        <h5>Failed to find Falcone</h5>\n        <h5>Time taken: {{ timeSpent$ | async }} Hours</h5>\n      </div>\n\n      <a class=\"btn btn-large btn-primary\" (click)=\"startMission()\">\n        Start Mission Again\n      </a>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/+state/actions/clear-state.actions.ts":
/*!*******************************************************!*\
  !*** ./src/app/+state/actions/clear-state.actions.ts ***!
  \*******************************************************/
/*! exports provided: ActionTypes, ClearState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearState", function() { return ClearState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ActionTypes;
(function (ActionTypes) {
    ActionTypes["ClearState"] = "[App] CLEAR STATE";
})(ActionTypes || (ActionTypes = {}));
class ClearState {
    constructor() {
        this.type = ActionTypes.ClearState;
    }
}


/***/ }),

/***/ "./src/app/+state/actions/find-falcon.actions.ts":
/*!*******************************************************!*\
  !*** ./src/app/+state/actions/find-falcon.actions.ts ***!
  \*******************************************************/
/*! exports provided: FindFalconActionTypes, FindFalcon, FindFalconSuccess, FindFalconFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindFalconActionTypes", function() { return FindFalconActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindFalcon", function() { return FindFalcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindFalconSuccess", function() { return FindFalconSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindFalconFail", function() { return FindFalconFail; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var FindFalconActionTypes;
(function (FindFalconActionTypes) {
    FindFalconActionTypes["FindFalcon"] = "[FindFalcon] Find Falcon";
    FindFalconActionTypes["FindFalconSuccess"] = "[FindFalcon] Find Falcon Success";
    FindFalconActionTypes["FindFalconFail"] = "[FindFalcon] Find Falcon Fail";
})(FindFalconActionTypes || (FindFalconActionTypes = {}));
class FindFalcon {
    constructor() {
        this.type = FindFalconActionTypes.FindFalcon;
    }
}
class FindFalconSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = FindFalconActionTypes.FindFalconSuccess;
    }
}
class FindFalconFail {
    constructor(payload) {
        this.payload = payload;
        this.type = FindFalconActionTypes.FindFalconFail;
    }
}


/***/ }),

/***/ "./src/app/+state/actions/index.ts":
/*!*****************************************!*\
  !*** ./src/app/+state/actions/index.ts ***!
  \*****************************************/
/*! exports provided: VehiclesActionTypes, GetVehicles, GetVehiclesSuccess, GetVehiclesFail, UpdateSelectedVehicles, PlanetsActionTypes, GetPlanets, GetPlanetsSuccess, GetPlanetsFail, UpdateSelectedPlanets, FindFalconActionTypes, FindFalcon, FindFalconSuccess, FindFalconFail, TimeTakenActionTypes, AddTimeTaken, RemoveTimeTaken, ActionTypes, ClearState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _vehicles_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicles.actions */ "./src/app/+state/actions/vehicles.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VehiclesActionTypes", function() { return _vehicles_actions__WEBPACK_IMPORTED_MODULE_1__["VehiclesActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetVehicles", function() { return _vehicles_actions__WEBPACK_IMPORTED_MODULE_1__["GetVehicles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetVehiclesSuccess", function() { return _vehicles_actions__WEBPACK_IMPORTED_MODULE_1__["GetVehiclesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetVehiclesFail", function() { return _vehicles_actions__WEBPACK_IMPORTED_MODULE_1__["GetVehiclesFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateSelectedVehicles", function() { return _vehicles_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateSelectedVehicles"]; });

/* harmony import */ var _planets_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planets.actions */ "./src/app/+state/actions/planets.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlanetsActionTypes", function() { return _planets_actions__WEBPACK_IMPORTED_MODULE_2__["PlanetsActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPlanets", function() { return _planets_actions__WEBPACK_IMPORTED_MODULE_2__["GetPlanets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPlanetsSuccess", function() { return _planets_actions__WEBPACK_IMPORTED_MODULE_2__["GetPlanetsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPlanetsFail", function() { return _planets_actions__WEBPACK_IMPORTED_MODULE_2__["GetPlanetsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateSelectedPlanets", function() { return _planets_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateSelectedPlanets"]; });

/* harmony import */ var _find_falcon_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-falcon.actions */ "./src/app/+state/actions/find-falcon.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FindFalconActionTypes", function() { return _find_falcon_actions__WEBPACK_IMPORTED_MODULE_3__["FindFalconActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FindFalcon", function() { return _find_falcon_actions__WEBPACK_IMPORTED_MODULE_3__["FindFalcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FindFalconSuccess", function() { return _find_falcon_actions__WEBPACK_IMPORTED_MODULE_3__["FindFalconSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FindFalconFail", function() { return _find_falcon_actions__WEBPACK_IMPORTED_MODULE_3__["FindFalconFail"]; });

/* harmony import */ var _time_taken_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./time-taken.actions */ "./src/app/+state/actions/time-taken.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeTakenActionTypes", function() { return _time_taken_actions__WEBPACK_IMPORTED_MODULE_4__["TimeTakenActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddTimeTaken", function() { return _time_taken_actions__WEBPACK_IMPORTED_MODULE_4__["AddTimeTaken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveTimeTaken", function() { return _time_taken_actions__WEBPACK_IMPORTED_MODULE_4__["RemoveTimeTaken"]; });

/* harmony import */ var _clear_state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clear-state.actions */ "./src/app/+state/actions/clear-state.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return _clear_state_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearState", function() { return _clear_state_actions__WEBPACK_IMPORTED_MODULE_5__["ClearState"]; });









/***/ }),

/***/ "./src/app/+state/actions/planets.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/+state/actions/planets.actions.ts ***!
  \***************************************************/
/*! exports provided: PlanetsActionTypes, GetPlanets, GetPlanetsSuccess, GetPlanetsFail, UpdateSelectedPlanets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsActionTypes", function() { return PlanetsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPlanets", function() { return GetPlanets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPlanetsSuccess", function() { return GetPlanetsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPlanetsFail", function() { return GetPlanetsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSelectedPlanets", function() { return UpdateSelectedPlanets; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var PlanetsActionTypes;
(function (PlanetsActionTypes) {
    PlanetsActionTypes["GetPlanets"] = "[GetPlanets] Get Planets";
    PlanetsActionTypes["GetPlanetsSuccess"] = "[GetPlanets] Get Planets Success";
    PlanetsActionTypes["GetPlanetsFail"] = "[GetPlanets] Get Planets Fail";
    PlanetsActionTypes["UpdateSelectedPlanets"] = "[UpdateSelectedPlanets] Update Selected Planets";
})(PlanetsActionTypes || (PlanetsActionTypes = {}));
class GetPlanets {
    constructor() {
        this.type = PlanetsActionTypes.GetPlanets;
    }
}
class GetPlanetsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = PlanetsActionTypes.GetPlanetsSuccess;
    }
}
class GetPlanetsFail {
    constructor(payload) {
        this.payload = payload;
        this.type = PlanetsActionTypes.GetPlanetsFail;
    }
}
class UpdateSelectedPlanets {
    constructor(planet, actionType) {
        this.planet = planet;
        this.actionType = actionType;
        this.type = PlanetsActionTypes.UpdateSelectedPlanets;
    }
}


/***/ }),

/***/ "./src/app/+state/actions/time-taken.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/+state/actions/time-taken.actions.ts ***!
  \******************************************************/
/*! exports provided: TimeTakenActionTypes, AddTimeTaken, RemoveTimeTaken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTakenActionTypes", function() { return TimeTakenActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTimeTaken", function() { return AddTimeTaken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveTimeTaken", function() { return RemoveTimeTaken; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var TimeTakenActionTypes;
(function (TimeTakenActionTypes) {
    TimeTakenActionTypes["AddTimeTaken"] = "[AddTimeTaken] Add Time Taken";
    TimeTakenActionTypes["RemoveTimeTaken"] = "[RemoveTimeTaken] Remove Time Taken";
})(TimeTakenActionTypes || (TimeTakenActionTypes = {}));
class AddTimeTaken {
    constructor(payload) {
        this.payload = payload;
        this.type = TimeTakenActionTypes.AddTimeTaken;
    }
}
class RemoveTimeTaken {
    constructor(payload) {
        this.payload = payload;
        this.type = TimeTakenActionTypes.RemoveTimeTaken;
    }
}


/***/ }),

/***/ "./src/app/+state/actions/vehicles.actions.ts":
/*!****************************************************!*\
  !*** ./src/app/+state/actions/vehicles.actions.ts ***!
  \****************************************************/
/*! exports provided: VehiclesActionTypes, GetVehicles, GetVehiclesSuccess, GetVehiclesFail, UpdateSelectedVehicles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesActionTypes", function() { return VehiclesActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetVehicles", function() { return GetVehicles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetVehiclesSuccess", function() { return GetVehiclesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetVehiclesFail", function() { return GetVehiclesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSelectedVehicles", function() { return UpdateSelectedVehicles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var VehiclesActionTypes;
(function (VehiclesActionTypes) {
    VehiclesActionTypes["GetVehicles"] = "[GetVehicles] Get Vehicles";
    VehiclesActionTypes["GetVehiclesSuccess"] = "[GetVehicles] Get Vehicles Success";
    VehiclesActionTypes["GetVehiclesFail"] = "[GetVehicles] Get Vehicles Fail";
    VehiclesActionTypes["UpdateSelectedVehicles"] = "[UpdateSelectedVehicles] Update Selected Vehicles";
})(VehiclesActionTypes || (VehiclesActionTypes = {}));
class GetVehicles {
    constructor() {
        this.type = VehiclesActionTypes.GetVehicles;
    }
}
class GetVehiclesSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = VehiclesActionTypes.GetVehiclesSuccess;
    }
}
class GetVehiclesFail {
    constructor(payload) {
        this.payload = payload;
        this.type = VehiclesActionTypes.GetVehiclesFail;
    }
}
class UpdateSelectedVehicles {
    constructor(vehicle, actionType) {
        this.vehicle = vehicle;
        this.actionType = actionType;
        this.type = VehiclesActionTypes.UpdateSelectedVehicles;
    }
}


/***/ }),

/***/ "./src/app/+state/effects/find-falcon.effects.ts":
/*!*******************************************************!*\
  !*** ./src/app/+state/effects/find-falcon.effects.ts ***!
  \*******************************************************/
/*! exports provided: FindFalconEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindFalconEffects", function() { return FindFalconEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/ngrx-effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions */ "./src/app/+state/actions/index.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../selectors */ "./src/app/+state/selectors/index.ts");










let FindFalconEffects = class FindFalconEffects {
    constructor(actions$, dataService, store, router) {
        this.actions$ = actions$;
        this.dataService = dataService;
        this.store = store;
        this.router = router;
        this.findFalcon$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_8__["FindFalconActionTypes"].FindFalcon), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_9__["getSelectedPlanets"]), this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_9__["getSelectedVehicles"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(([any, testContext, interaction]) => {
            return this.dataService.findFalcon(testContext, interaction).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((result) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_8__["FindFalconSuccess"](result));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((error) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_8__["FindFalconFail"](error));
            }));
        }));
        this.findFalconSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_8__["FindFalconActionTypes"].FindFalconSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => {
            this.router.navigate(['mission-result']);
        }));
    }
};
FindFalconEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
], FindFalconEffects.prototype, "findFalcon$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false })
], FindFalconEffects.prototype, "findFalconSuccess$", void 0);
FindFalconEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FindFalconEffects);



/***/ }),

/***/ "./src/app/+state/effects/index.ts":
/*!*****************************************!*\
  !*** ./src/app/+state/effects/index.ts ***!
  \*****************************************/
/*! exports provided: VehiclesEffects, PlanetsEffects, FindFalconEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _vehicles_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicles.effects */ "./src/app/+state/effects/vehicles.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VehiclesEffects", function() { return _vehicles_effects__WEBPACK_IMPORTED_MODULE_1__["VehiclesEffects"]; });

/* harmony import */ var _planets_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planets.effects */ "./src/app/+state/effects/planets.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlanetsEffects", function() { return _planets_effects__WEBPACK_IMPORTED_MODULE_2__["PlanetsEffects"]; });

/* harmony import */ var _find_falcon_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-falcon.effects */ "./src/app/+state/effects/find-falcon.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FindFalconEffects", function() { return _find_falcon_effects__WEBPACK_IMPORTED_MODULE_3__["FindFalconEffects"]; });







/***/ }),

/***/ "./src/app/+state/effects/planets.effects.ts":
/*!***************************************************!*\
  !*** ./src/app/+state/effects/planets.effects.ts ***!
  \***************************************************/
/*! exports provided: PlanetsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsEffects", function() { return PlanetsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./src/app/+state/actions/index.ts");







let PlanetsEffects = class PlanetsEffects {
    constructor(actions$, dataService) {
        this.actions$ = actions$;
        this.dataService = dataService;
        this.getPlanets$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["PlanetsActionTypes"].GetPlanets), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
            return this.dataService.getPlanets().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((planets) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["GetPlanetsSuccess"](planets));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["GetPlanetsFail"](error));
            }));
        }));
    }
};
PlanetsEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], PlanetsEffects.prototype, "getPlanets$", void 0);
PlanetsEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PlanetsEffects);



/***/ }),

/***/ "./src/app/+state/effects/vehicles.effects.ts":
/*!****************************************************!*\
  !*** ./src/app/+state/effects/vehicles.effects.ts ***!
  \****************************************************/
/*! exports provided: VehiclesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclesEffects", function() { return VehiclesEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./src/app/+state/actions/index.ts");







let VehiclesEffects = class VehiclesEffects {
    constructor(actions$, dataService) {
        this.actions$ = actions$;
        this.dataService = dataService;
        this.getVehicles$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["VehiclesActionTypes"].GetVehicles), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
            return this.dataService.getVehicles().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((vehicles) => {
                return [new _actions__WEBPACK_IMPORTED_MODULE_6__["GetVehiclesSuccess"](vehicles)];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_6__["GetVehiclesFail"](error));
            }));
        }));
    }
};
VehiclesEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], VehiclesEffects.prototype, "getVehicles$", void 0);
VehiclesEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], VehiclesEffects);



/***/ }),

/***/ "./src/app/+state/index.ts":
/*!*********************************!*\
  !*** ./src/app/+state/index.ts ***!
  \*********************************/
/*! exports provided: reducerForApp, getAppState, VehiclesActionTypes, GetVehicles, GetVehiclesSuccess, GetVehiclesFail, UpdateSelectedVehicles, PlanetsActionTypes, GetPlanets, GetPlanetsSuccess, GetPlanetsFail, UpdateSelectedPlanets, FindFalconActionTypes, FindFalcon, FindFalconSuccess, FindFalconFail, TimeTakenActionTypes, AddTimeTaken, RemoveTimeTaken, ActionTypes, ClearState, vehiclesState, getSelectedVehicles, isVehiclesLoading, getAvailableVehicles, planetsState, getSelectedPlanets, getAvailablesPlanets, isPlanetsLoading, timeTakenState, getTotalTimeTaken, findFalconState, getFalconResult, VehiclesEffects, PlanetsEffects, FindFalconEffects, clearState, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/app/+state/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducerForApp", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["reducerForApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["getAppState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["clearState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_1__["metaReducers"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/app/+state/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VehiclesActionTypes", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["VehiclesActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetVehicles", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["GetVehicles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetVehiclesSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["GetVehiclesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetVehiclesFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["GetVehiclesFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateSelectedVehicles", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["UpdateSelectedVehicles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlanetsActionTypes", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["PlanetsActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPlanets", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["GetPlanets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPlanetsSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["GetPlanetsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPlanetsFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["GetPlanetsFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateSelectedPlanets", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["UpdateSelectedPlanets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FindFalconActionTypes", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["FindFalconActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FindFalcon", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["FindFalcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FindFalconSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["FindFalconSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FindFalconFail", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["FindFalconFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeTakenActionTypes", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["TimeTakenActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddTimeTaken", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["AddTimeTaken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoveTimeTaken", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["RemoveTimeTaken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClearState", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["ClearState"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/app/+state/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vehiclesState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["vehiclesState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedVehicles", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getSelectedVehicles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVehiclesLoading", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["isVehiclesLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAvailableVehicles", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAvailableVehicles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planetsState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["planetsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedPlanets", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getSelectedPlanets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAvailablesPlanets", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getAvailablesPlanets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlanetsLoading", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["isPlanetsLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeTakenState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["timeTakenState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTotalTimeTaken", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getTotalTimeTaken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findFalconState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["findFalconState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFalconResult", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getFalconResult"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./effects */ "./src/app/+state/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VehiclesEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_4__["VehiclesEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlanetsEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_4__["PlanetsEffects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FindFalconEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_4__["FindFalconEffects"]; });








/***/ }),

/***/ "./src/app/+state/reducers/clear-state.reducer.ts":
/*!********************************************************!*\
  !*** ./src/app/+state/reducers/clear-state.reducer.ts ***!
  \********************************************************/
/*! exports provided: clearState, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearState", function() { return clearState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/+state/actions/index.ts");


function clearState(reducer) {
    return function (state, action) {
        if (action.type === _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].ClearState) {
            state = undefined;
        }
        return reducer(state, action);
    };
}
const metaReducers = [clearState];


/***/ }),

/***/ "./src/app/+state/reducers/find-falcon.reducer.ts":
/*!********************************************************!*\
  !*** ./src/app/+state/reducers/find-falcon.reducer.ts ***!
  \********************************************************/
/*! exports provided: initialFindFalconState, findFalconReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialFindFalconState", function() { return initialFindFalconState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFalconReducer", function() { return findFalconReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/+state/actions/index.ts");


const initialFindFalconState = {
    result: { status: null },
    loading: false,
    loaded: false
};
function findFalconReducer(state = initialFindFalconState, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["FindFalconActionTypes"].FindFalcon:
            return Object.assign({}, state, { loading: true });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["FindFalconActionTypes"].FindFalconSuccess:
            return Object.assign({}, state, { result: action.payload, loading: false, loaded: true });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["FindFalconActionTypes"].FindFalconFail:
            return Object.assign({}, state, { loading: false, loaded: false });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/+state/reducers/index.ts":
/*!******************************************!*\
  !*** ./src/app/+state/reducers/index.ts ***!
  \******************************************/
/*! exports provided: reducerForApp, getAppState, clearState, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducerForApp", function() { return reducerForApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppState", function() { return getAppState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _vehicles_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vehicles.reducer */ "./src/app/+state/reducers/vehicles.reducer.ts");
/* harmony import */ var _planets_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./planets.reducer */ "./src/app/+state/reducers/planets.reducer.ts");
/* harmony import */ var _find_falcon_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./find-falcon.reducer */ "./src/app/+state/reducers/find-falcon.reducer.ts");
/* harmony import */ var _time_taken_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./time-taken.reducer */ "./src/app/+state/reducers/time-taken.reducer.ts");
/* harmony import */ var _clear_state_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clear-state.reducer */ "./src/app/+state/reducers/clear-state.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearState", function() { return _clear_state_reducer__WEBPACK_IMPORTED_MODULE_6__["clearState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return _clear_state_reducer__WEBPACK_IMPORTED_MODULE_6__["metaReducers"]; });







const reducerForApp = {
    vehicles: _vehicles_reducer__WEBPACK_IMPORTED_MODULE_2__["vehiclesReducer"],
    planets: _planets_reducer__WEBPACK_IMPORTED_MODULE_3__["planetsReducer"],
    findFalcon: _find_falcon_reducer__WEBPACK_IMPORTED_MODULE_4__["findFalconReducer"],
    totalTakenTime: _time_taken_reducer__WEBPACK_IMPORTED_MODULE_5__["timeTakenReducer"]
};
const getAppState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('falcon');



/***/ }),

/***/ "./src/app/+state/reducers/planets.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/+state/reducers/planets.reducer.ts ***!
  \****************************************************/
/*! exports provided: initialPlanetsState, planetsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialPlanetsState", function() { return initialPlanetsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planetsReducer", function() { return planetsReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models */ "./src/app/models/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/app/+state/actions/index.ts");



const initialPlanetsState = {
    planets: [],
    selectedPlanets: [],
    loading: false,
    loaded: false
};
function planetsReducer(state = initialPlanetsState, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_2__["PlanetsActionTypes"].GetPlanets:
            return Object.assign({}, state, { loading: true });
        case _actions__WEBPACK_IMPORTED_MODULE_2__["PlanetsActionTypes"].GetPlanetsSuccess:
            return Object.assign({}, state, { planets: action.payload, loading: false, loaded: true });
        case _actions__WEBPACK_IMPORTED_MODULE_2__["PlanetsActionTypes"].GetPlanetsFail:
            return Object.assign({}, state, { loading: false, loaded: false });
        case _actions__WEBPACK_IMPORTED_MODULE_2__["PlanetsActionTypes"].UpdateSelectedPlanets:
            let selectedPlanets = state.selectedPlanets.slice();
            if (action.actionType === src_app_models__WEBPACK_IMPORTED_MODULE_1__["ESelectAction"].Add &&
                selectedPlanets.indexOf(action.planet.name) == -1) {
                selectedPlanets.push(action.planet.name);
                return Object.assign({}, state, { selectedPlanets: selectedPlanets });
            }
            else if (action.actionType === src_app_models__WEBPACK_IMPORTED_MODULE_1__["ESelectAction"].Remove) {
                let selectedIndex = state.selectedPlanets.findIndex((x) => x == action.planet.name);
                if (selectedIndex !== -1) {
                    selectedPlanets.splice(selectedIndex, 1);
                    return Object.assign({}, state, { selectedPlanets: selectedPlanets });
                }
            }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/+state/reducers/time-taken.reducer.ts":
/*!*******************************************************!*\
  !*** ./src/app/+state/reducers/time-taken.reducer.ts ***!
  \*******************************************************/
/*! exports provided: initialTimeTakenState, timeTakenReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialTimeTakenState", function() { return initialTimeTakenState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeTakenReducer", function() { return timeTakenReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/+state/actions/index.ts");


const initialTimeTakenState = {
    totalTimeTaken: 0
};
function timeTakenReducer(state = initialTimeTakenState, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["TimeTakenActionTypes"].AddTimeTaken:
            return Object.assign({}, state, { totalTimeTaken: state.totalTimeTaken + action.payload });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["TimeTakenActionTypes"].RemoveTimeTaken:
            return Object.assign({}, state, { totalTimeTaken: state.totalTimeTaken - action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/+state/reducers/vehicles.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/+state/reducers/vehicles.reducer.ts ***!
  \*****************************************************/
/*! exports provided: initialVehiclesState, vehiclesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialVehiclesState", function() { return initialVehiclesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehiclesReducer", function() { return vehiclesReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models */ "./src/app/models/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/app/+state/actions/index.ts");



const initialVehiclesState = {
    vehicles: [],
    selectedVehicles: [],
    loading: false,
    loaded: false
};
function vehiclesReducer(state = initialVehiclesState, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_2__["VehiclesActionTypes"].GetVehicles:
            return Object.assign({}, state, { loading: true });
        case _actions__WEBPACK_IMPORTED_MODULE_2__["VehiclesActionTypes"].GetVehiclesSuccess:
            return Object.assign({}, state, { vehicles: action.payload, loading: false, loaded: true });
        case _actions__WEBPACK_IMPORTED_MODULE_2__["VehiclesActionTypes"].GetVehiclesFail:
            return Object.assign({}, state, { loading: false, loaded: false });
        case _actions__WEBPACK_IMPORTED_MODULE_2__["VehiclesActionTypes"].UpdateSelectedVehicles:
            let selectedVehicles = state.selectedVehicles.slice();
            if (action.actionType === src_app_models__WEBPACK_IMPORTED_MODULE_1__["ESelectAction"].Add) {
                selectedVehicles.push(action.vehicle);
                return Object.assign({}, state, { selectedVehicles: selectedVehicles });
            }
            else if (action.actionType === src_app_models__WEBPACK_IMPORTED_MODULE_1__["ESelectAction"].Remove) {
                let indexSelected = state.selectedVehicles.findIndex((x) => x == action.vehicle);
                if (indexSelected !== -1) {
                    selectedVehicles.splice(indexSelected, 1);
                    return Object.assign({}, state, { selectedVehicles: selectedVehicles });
                }
            }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/+state/selectors/find-falcon.selector.ts":
/*!**********************************************************!*\
  !*** ./src/app/+state/selectors/find-falcon.selector.ts ***!
  \**********************************************************/
/*! exports provided: findFalconState, getFalconResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFalconState", function() { return findFalconState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFalconResult", function() { return getFalconResult; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");


const findFalconState = (state) => state.findFalcon;
const getFalconResult = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(findFalconState, (state) => {
    return state ? state.result : null;
});


/***/ }),

/***/ "./src/app/+state/selectors/index.ts":
/*!*******************************************!*\
  !*** ./src/app/+state/selectors/index.ts ***!
  \*******************************************/
/*! exports provided: vehiclesState, getSelectedVehicles, isVehiclesLoading, getAvailableVehicles, planetsState, getSelectedPlanets, getAvailablesPlanets, isPlanetsLoading, timeTakenState, getTotalTimeTaken, findFalconState, getFalconResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _vehicles_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicles.selector */ "./src/app/+state/selectors/vehicles.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vehiclesState", function() { return _vehicles_selector__WEBPACK_IMPORTED_MODULE_1__["vehiclesState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedVehicles", function() { return _vehicles_selector__WEBPACK_IMPORTED_MODULE_1__["getSelectedVehicles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVehiclesLoading", function() { return _vehicles_selector__WEBPACK_IMPORTED_MODULE_1__["isVehiclesLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAvailableVehicles", function() { return _vehicles_selector__WEBPACK_IMPORTED_MODULE_1__["getAvailableVehicles"]; });

/* harmony import */ var _planets_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planets.selector */ "./src/app/+state/selectors/planets.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "planetsState", function() { return _planets_selector__WEBPACK_IMPORTED_MODULE_2__["planetsState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedPlanets", function() { return _planets_selector__WEBPACK_IMPORTED_MODULE_2__["getSelectedPlanets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAvailablesPlanets", function() { return _planets_selector__WEBPACK_IMPORTED_MODULE_2__["getAvailablesPlanets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlanetsLoading", function() { return _planets_selector__WEBPACK_IMPORTED_MODULE_2__["isPlanetsLoading"]; });

/* harmony import */ var _time_taken_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time-taken.selector */ "./src/app/+state/selectors/time-taken.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeTakenState", function() { return _time_taken_selector__WEBPACK_IMPORTED_MODULE_3__["timeTakenState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTotalTimeTaken", function() { return _time_taken_selector__WEBPACK_IMPORTED_MODULE_3__["getTotalTimeTaken"]; });

/* harmony import */ var _find_falcon_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./find-falcon.selector */ "./src/app/+state/selectors/find-falcon.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findFalconState", function() { return _find_falcon_selector__WEBPACK_IMPORTED_MODULE_4__["findFalconState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFalconResult", function() { return _find_falcon_selector__WEBPACK_IMPORTED_MODULE_4__["getFalconResult"]; });








/***/ }),

/***/ "./src/app/+state/selectors/planets.selector.ts":
/*!******************************************************!*\
  !*** ./src/app/+state/selectors/planets.selector.ts ***!
  \******************************************************/
/*! exports provided: planetsState, getSelectedPlanets, getAvailablesPlanets, isPlanetsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planetsState", function() { return planetsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedPlanets", function() { return getSelectedPlanets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailablesPlanets", function() { return getAvailablesPlanets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlanetsLoading", function() { return isPlanetsLoading; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");


const planetsState = (state) => state.planets;
const getSelectedPlanets = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(planetsState, (state) => {
    return state ? state.selectedPlanets : null;
});
const getAvailablesPlanets = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(planetsState, (state) => {
    return state ? state.planets : null;
});
const isPlanetsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(planetsState, (state) => {
    return state ? state.loading : null;
});


/***/ }),

/***/ "./src/app/+state/selectors/time-taken.selector.ts":
/*!*********************************************************!*\
  !*** ./src/app/+state/selectors/time-taken.selector.ts ***!
  \*********************************************************/
/*! exports provided: timeTakenState, getTotalTimeTaken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeTakenState", function() { return timeTakenState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalTimeTaken", function() { return getTotalTimeTaken; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");


const timeTakenState = (state) => state.totalTakenTime;
const getTotalTimeTaken = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(timeTakenState, (state) => {
    return state ? state.totalTimeTaken : null;
});


/***/ }),

/***/ "./src/app/+state/selectors/vehicles.selector.ts":
/*!*******************************************************!*\
  !*** ./src/app/+state/selectors/vehicles.selector.ts ***!
  \*******************************************************/
/*! exports provided: vehiclesState, getSelectedVehicles, isVehiclesLoading, getAvailableVehicles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehiclesState", function() { return vehiclesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedVehicles", function() { return getSelectedVehicles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVehiclesLoading", function() { return isVehiclesLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailableVehicles", function() { return getAvailableVehicles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");


const vehiclesState = (state) => state.vehicles;
const getSelectedVehicles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(vehiclesState, (state) => {
    return state ? state.selectedVehicles : null;
});
const isVehiclesLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(vehiclesState, (state) => {
    return state ? state.loading : null;
});
const getAvailableVehicles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(vehiclesState, (state) => {
    return state ? state.vehicles : null;
});


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./src/app/containers/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards */ "./src/app/guards/index.ts");
/* harmony import */ var _guards_result_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/result.guard */ "./src/app/guards/result.guard.ts");






const routes = [
    {
        path: '',
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["SetTokenGuard"]],
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'find-falcon',
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_4__["SetTokenGuard"]],
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["FindingFalconComponent"]
    },
    {
        path: 'mission-result',
        canActivate: [_guards_result_guard__WEBPACK_IMPORTED_MODULE_5__["ResultGuard"]],
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["ResultsComponent"]
    },
    { path: '**', component: _containers__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWhlc2hrdW1hci9Eb2N1bWVudHMvUGVyc29uYWwvRmluZGluZy1GYWxjb24vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiIsIi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */");

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
        this.title = 'Finding-Falcon';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers */ "./src/app/containers/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./+state */ "./src/app/+state/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/ngrx-effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/ngrx-store-devtools.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components */ "./src/app/components/index.ts");
/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./http-interceptor */ "./src/app/http-interceptor/index.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _containers__WEBPACK_IMPORTED_MODULE_6__["FindingFalconComponent"],
            _containers__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"],
            _components__WEBPACK_IMPORTED_MODULE_13__["SelectPlanetComponent"],
            _components__WEBPACK_IMPORTED_MODULE_13__["SelectVehicleComponent"],
            _components__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
            _containers__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _containers__WEBPACK_IMPORTED_MODULE_6__["ResultsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_state__WEBPACK_IMPORTED_MODULE_9__["reducerForApp"], { metaReducers: _state__WEBPACK_IMPORTED_MODULE_9__["metaReducers"] }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([_state__WEBPACK_IMPORTED_MODULE_9__["VehiclesEffects"], _state__WEBPACK_IMPORTED_MODULE_9__["PlanetsEffects"], _state__WEBPACK_IMPORTED_MODULE_9__["FindFalconEffects"]]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"].instrument({
                maxAge: 50,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production // Restrict extension to log-only mode
            })
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                useClass: _http_interceptor__WEBPACK_IMPORTED_MODULE_14__["RefreshTokenInterceptor"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-brand {\n  margin-left: 1rem;\n}\n\n.header-action {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 10px;\n}\n\nli.active a {\n  color: #fff;\n}\n\n.pointer {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWhlc2hrdW1hci9Eb2N1bWVudHMvUGVyc29uYWwvRmluZGluZy1GYWxjb24vc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5oZWFkZXItYWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxubGkuYWN0aXZlIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCIubmF2YmFyLWJyYW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5oZWFkZXItYWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxubGkuYWN0aXZlIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../+state */ "./src/app/+state/index.ts");





let HeaderComponent = class HeaderComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
    }
    abortSearch() {
        this.store.dispatch(new _state__WEBPACK_IMPORTED_MODULE_4__["ClearState"]());
        this.router.navigate(['']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/header/header.mock.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/header/header.mock.component.ts ***!
  \************************************************************/
/*! exports provided: MockHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockHeaderComponent", function() { return MockHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MockHeaderComponent = class MockHeaderComponent {
};
MockHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: ''
    })
], MockHeaderComponent);



/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: SelectPlanetComponent, MockSelectPlanetComponent, SelectVehicleComponent, MockSelectVehicleComponent, HeaderComponent, MockHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _select_planet_select_planet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-planet/select-planet.component */ "./src/app/components/select-planet/select-planet.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectPlanetComponent", function() { return _select_planet_select_planet_component__WEBPACK_IMPORTED_MODULE_1__["SelectPlanetComponent"]; });

/* harmony import */ var _select_planet_select_planet_mock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-planet/select-planet.mock.component */ "./src/app/components/select-planet/select-planet.mock.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockSelectPlanetComponent", function() { return _select_planet_select_planet_mock_component__WEBPACK_IMPORTED_MODULE_2__["MockSelectPlanetComponent"]; });

/* harmony import */ var _select_vehicle_select_vehicle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-vehicle/select-vehicle.component */ "./src/app/components/select-vehicle/select-vehicle.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectVehicleComponent", function() { return _select_vehicle_select_vehicle_component__WEBPACK_IMPORTED_MODULE_3__["SelectVehicleComponent"]; });

/* harmony import */ var _select_vehicle_select_vehicle_mock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-vehicle/select-vehicle.mock.component */ "./src/app/components/select-vehicle/select-vehicle.mock.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockSelectVehicleComponent", function() { return _select_vehicle_select_vehicle_mock_component__WEBPACK_IMPORTED_MODULE_4__["MockSelectVehicleComponent"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]; });

/* harmony import */ var _header_header_mock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.mock.component */ "./src/app/components/header/header.mock.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockHeaderComponent", function() { return _header_header_mock_component__WEBPACK_IMPORTED_MODULE_6__["MockHeaderComponent"]; });










/***/ }),

/***/ "./src/app/components/select-planet/select-planet.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/select-planet/select-planet.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  border-radius: 4px;\n}\n\n.card-header {\n  background: none;\n  padding: 0.25rem 1.25rem;\n}\n\n.card-header .img-bound {\n  padding-left: calc(100% / 4);\n  padding-right: calc(100% / 4);\n}\n\n.card-header h5 {\n  margin-top: 5px;\n}\n\n.card-body {\n  padding: 0;\n}\n\n.form-group {\n  margin-bottom: 0.5rem;\n}\n\n.form-control {\n  -webkit-appearance: auto;\n  -moz-appearance: auto;\n       appearance: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWhlc2hrdW1hci9Eb2N1bWVudHMvUGVyc29uYWwvRmluZGluZy1GYWxjb24vc3JjL2FwcC9jb21wb25lbnRzL3NlbGVjdC1wbGFuZXQvc2VsZWN0LXBsYW5ldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3QtcGxhbmV0L3NlbGVjdC1wbGFuZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3QtcGxhbmV0L3NlbGVjdC1wbGFuZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogMC4yNXJlbSAxLjI1cmVtO1xufVxuXG4uY2FyZC1oZWFkZXIgLmltZy1ib3VuZCB7XG4gIHBhZGRpbmctbGVmdDogY2FsYygxMDAlIC8gNCk7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGMoMTAwJSAvIDQpO1xufVxuXG4uY2FyZC1oZWFkZXIgaDUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYXV0bztcbiAgYXBwZWFyYW5jZTogYXV0bztcbn1cbiIsIi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwLjI1cmVtIDEuMjVyZW07XG59XG5cbi5jYXJkLWhlYWRlciAuaW1nLWJvdW5kIHtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKDEwMCUgLyA0KTtcbiAgcGFkZGluZy1yaWdodDogY2FsYygxMDAlIC8gNCk7XG59XG5cbi5jYXJkLWhlYWRlciBoNSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBhdXRvO1xuICBhcHBlYXJhbmNlOiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/select-planet/select-planet.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/select-planet/select-planet.component.ts ***!
  \*********************************************************************/
/*! exports provided: SelectPlanetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPlanetComponent", function() { return SelectPlanetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../+state */ "./src/app/+state/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../models */ "./src/app/models/index.ts");







let SelectPlanetComponent = class SelectPlanetComponent {
    constructor(store) {
        this.store = store;
        this.imageBasePath = './assets/';
        this.myGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            myControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    ngOnInit() {
        this.planetsSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.store.select(_state__WEBPACK_IMPORTED_MODULE_5__["getAvailablesPlanets"]),
            this.store.select(_state__WEBPACK_IMPORTED_MODULE_5__["getSelectedPlanets"])
        ]).subscribe(([planets, selectedPlanets]) => {
            this.planetList = planets.filter((item) => {
                return selectedPlanets.indexOf(item.name) == -1;
            });
            if (this.selectedPlanet) {
                this.planetList = [this.selectedPlanet, ...this.planetList];
                this.planetList = [...new Set(this.planetList)];
            }
        });
    }
    updateSelectedPlanet(e) {
        if (e.target.value !== '' && e.target.value.length > 0) {
            if (this.selectedPlanet && this.selectedPlanet.name) {
                this.store.dispatch(new _state__WEBPACK_IMPORTED_MODULE_5__["UpdateSelectedPlanets"](this.selectedPlanet, _models__WEBPACK_IMPORTED_MODULE_6__["ESelectAction"].Remove));
            }
            this.selectedPlanet = this.planetList.find((x) => x.name == e.target.value);
            this.store.dispatch(new _state__WEBPACK_IMPORTED_MODULE_5__["UpdateSelectedPlanets"](this.selectedPlanet, _models__WEBPACK_IMPORTED_MODULE_6__["ESelectAction"].Add));
        }
        else {
            this.store.dispatch(new _state__WEBPACK_IMPORTED_MODULE_5__["UpdateSelectedPlanets"](this.selectedPlanet, _models__WEBPACK_IMPORTED_MODULE_6__["ESelectAction"].Remove));
            this.selectedPlanet = null;
        }
    }
    resetSelectedPlanet() {
        this.selectedPlanet = { name: '', distance: 0 };
    }
};
SelectPlanetComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
SelectPlanetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'select-planet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-planet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/select-planet/select-planet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-planet.component.scss */ "./src/app/components/select-planet/select-planet.component.scss")).default]
    })
], SelectPlanetComponent);



/***/ }),

/***/ "./src/app/components/select-planet/select-planet.mock.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/select-planet/select-planet.mock.component.ts ***!
  \**************************************************************************/
/*! exports provided: MockSelectPlanetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockSelectPlanetComponent", function() { return MockSelectPlanetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MockSelectPlanetComponent = class MockSelectPlanetComponent {
};
MockSelectPlanetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'select-planet',
        template: ''
    })
], MockSelectPlanetComponent);



/***/ }),

/***/ "./src/app/components/select-vehicle/select-vehicle.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/select-vehicle/select-vehicle.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul {\n  list-style-type: none;\n}\n\n.vehiclebox {\n  border: 1px solid #ddd;\n  text-align: center;\n  padding: 5px 10px;\n}\n\nlabel {\n  margin-bottom: 0;\n}\n\n.list-group-item {\n  padding: 0.15rem 0.5rem;\n}\n\n[type=radio] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* IMAGE STYLES */\n\n[type=radio] + img {\n  cursor: pointer;\n  height: 2rem;\n  margin-right: 10px;\n}\n\n.form-group {\n  margin-bottom: 0;\n}\n\n.list-group-item:first-child {\n  border-top-left-radius: 0rem;\n  border-top-right-radius: 0rem;\n  border: none;\n}\n\n.list-group-item {\n  border: none;\n  border-top: 1px solid #dfd7ca !important;\n}\n\n.disable-item {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWhlc2hrdW1hci9Eb2N1bWVudHMvUGVyc29uYWwvRmluZGluZy1GYWxjb24vc3JjL2FwcC9jb21wb25lbnRzL3NlbGVjdC12ZWhpY2xlL3NlbGVjdC12ZWhpY2xlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlbGVjdC12ZWhpY2xlL3NlbGVjdC12ZWhpY2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBLGlCQUFBOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0Esd0NBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWxlY3QtdmVoaWNsZS9zZWxlY3QtdmVoaWNsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4udmVoaWNsZWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIHBhZGRpbmc6IDAuMTVyZW0gMC41cmVtO1xufVxuXG5bdHlwZT0ncmFkaW8nXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogSU1BR0UgU1RZTEVTICovXG5cblt0eXBlPSdyYWRpbyddICsgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDJyZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDByZW07XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZmQ3Y2EgIWltcG9ydGFudDtcbn1cblxuLmRpc2FibGUtaXRlbSB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbiIsInVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4udmVoaWNsZWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIHBhZGRpbmc6IDAuMTVyZW0gMC41cmVtO1xufVxuXG5bdHlwZT1yYWRpb10ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIElNQUdFIFNUWUxFUyAqL1xuW3R5cGU9cmFkaW9dICsgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDJyZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDByZW07XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZmQ3Y2EgIWltcG9ydGFudDtcbn1cblxuLmRpc2FibGUtaXRlbSB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/select-vehicle/select-vehicle.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/select-vehicle/select-vehicle.component.ts ***!
  \***********************************************************************/
/*! exports provided: SelectVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectVehicleComponent", function() { return SelectVehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../+state */ "./src/app/+state/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../models */ "./src/app/models/index.ts");






let SelectVehicleComponent = class SelectVehicleComponent {
    constructor(store) {
        this.store = store;
        this.selectedVehicle = '';
        this.timeTaken = 0;
        this.imageBasePath = './assets/';
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.store.select(_state__WEBPACK_IMPORTED_MODULE_4__["getAvailableVehicles"]),
            this.store.select(_state__WEBPACK_IMPORTED_MODULE_4__["getSelectedVehicles"])
        ]).subscribe(([vehicles, selectedVehicles]) => {
            this.vehicleList = vehicles.slice();
            this.updateVehicleCount(selectedVehicles);
        });
    }
    updateSelectedVehicle(e) {
        if (this.selectedVehicle) {
            this.store.dispatch(new _state__WEBPACK_IMPORTED_MODULE_4__["UpdateSelectedVehicles"](this.selectedVehicle, _models__WEBPACK_IMPORTED_MODULE_5__["ESelectAction"].Remove));
            this.selectedVehicle = e.target.value;
            this.store.dispatch(new _state__WEBPACK_IMPORTED_MODULE_4__["UpdateSelectedVehicles"](this.selectedVehicle, _models__WEBPACK_IMPORTED_MODULE_5__["ESelectAction"].Add));
        }
        else {
            this.selectedVehicle = e.target.value;
            this.store.dispatch(new _state__WEBPACK_IMPORTED_MODULE_4__["UpdateSelectedVehicles"](this.selectedVehicle, _models__WEBPACK_IMPORTED_MODULE_5__["ESelectAction"].Add));
        }
        this.updateTimeTaken();
    }
    ngOnChanges(changes) {
        if (changes.selectedPlanet.previousValue &&
            changes.selectedPlanet.currentValue === null) {
            this.store.dispatch(new _state__WEBPACK_IMPORTED_MODULE_4__["UpdateSelectedVehicles"](this.selectedVehicle, _models__WEBPACK_IMPORTED_MODULE_5__["ESelectAction"].Remove));
            this.selectedVehicle = null;
        }
    }
    updateVehicleCount(selectedVehicles) {
        let updatedVehiclesList = this.vehicleList.map((vehicle) => (Object.assign({}, vehicle)));
        for (let i in selectedVehicles) {
            let index = this.vehicleList.findIndex((x) => x.name === selectedVehicles[i]);
            updatedVehiclesList[index].total_no =
                updatedVehiclesList[index].total_no - 1;
        }
        this.vehicleList = updatedVehiclesList;
    }
    updateTimeTaken() {
        let sVehicle = this.vehicleList.find((x) => x.name == this.selectedVehicle);
        if (sVehicle && sVehicle.name) {
            let timeTaken = this.selectedPlanet.distance / sVehicle.speed;
            if (this.timeTaken > 0) {
                this.store.dispatch(new _state__WEBPACK_IMPORTED_MODULE_4__["RemoveTimeTaken"](this.timeTaken));
                this.timeTaken = timeTaken;
                this.store.dispatch(new _state__WEBPACK_IMPORTED_MODULE_4__["AddTimeTaken"](this.timeTaken));
            }
            else {
                this.timeTaken = timeTaken;
                this.store.dispatch(new _state__WEBPACK_IMPORTED_MODULE_4__["AddTimeTaken"](timeTaken));
            }
        }
    }
};
SelectVehicleComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectVehicleComponent.prototype, "selectedPlanet", void 0);
SelectVehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'select-vehicle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-vehicle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/select-vehicle/select-vehicle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-vehicle.component.scss */ "./src/app/components/select-vehicle/select-vehicle.component.scss")).default]
    })
], SelectVehicleComponent);



/***/ }),

/***/ "./src/app/components/select-vehicle/select-vehicle.mock.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/select-vehicle/select-vehicle.mock.component.ts ***!
  \****************************************************************************/
/*! exports provided: MockSelectVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockSelectVehicleComponent", function() { return MockSelectVehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MockSelectVehicleComponent = class MockSelectVehicleComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MockSelectVehicleComponent.prototype, "selectedPlanet", void 0);
MockSelectVehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'select-vehicle',
        template: ''
    })
], MockSelectVehicleComponent);



/***/ }),

/***/ "./src/app/containers/finding-falcon/finding-falcon.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/containers/finding-falcon/finding-falcon.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".find-falcon-header {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 20px;\n}\n\n.control-right {\n  margin-top: 20px;\n}\n\nbutton.reset {\n  margin-right: 10px;\n}\n\nh1 {\n  font-weight: bold;\n}\n\n.row,\n.text-center {\n  text-align: center;\n}\n\n.find {\n  width: 30%;\n  text-align: center;\n  margin: 5rem auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWhlc2hrdW1hci9Eb2N1bWVudHMvUGVyc29uYWwvRmluZGluZy1GYWxjb24vc3JjL2FwcC9jb250YWluZXJzL2ZpbmRpbmctZmFsY29uL2ZpbmRpbmctZmFsY29uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXJzL2ZpbmRpbmctZmFsY29uL2ZpbmRpbmctZmFsY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBOztFQUVFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9maW5kaW5nLWZhbGNvbi9maW5kaW5nLWZhbGNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maW5kLWZhbGNvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuXG4uY29udHJvbC1yaWdodCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmJ1dHRvbi5yZXNldCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJvdyxcbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpbmQge1xuICB3aWR0aDogMzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNXJlbSBhdXRvO1xufVxuIiwiLmZpbmQtZmFsY29uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG5cbi5jb250cm9sLXJpZ2h0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuYnV0dG9uLnJlc2V0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5oMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucm93LFxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmluZCB7XG4gIHdpZHRoOiAzMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1cmVtIGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/containers/finding-falcon/finding-falcon.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/containers/finding-falcon/finding-falcon.component.ts ***!
  \***********************************************************************/
/*! exports provided: FindingFalconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindingFalconComponent", function() { return FindingFalconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../+state */ "./src/app/+state/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let FindingFalconComponent = class FindingFalconComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(new _state__WEBPACK_IMPORTED_MODULE_4__["GetVehicles"]());
        this.store.dispatch(new _state__WEBPACK_IMPORTED_MODULE_4__["GetPlanets"]());
        this.readyToFind$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.store.select(_state__WEBPACK_IMPORTED_MODULE_4__["getSelectedVehicles"]),
            this.store.select(_state__WEBPACK_IMPORTED_MODULE_4__["getSelectedPlanets"])
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([vehicles, planets]) => vehicles.length === 4 && planets.length === 4));
        this.totalTimeTaken$ = this.store.select(_state__WEBPACK_IMPORTED_MODULE_4__["getTotalTimeTaken"]);
    }
    findFalcon() {
        this.store.dispatch(new _state__WEBPACK_IMPORTED_MODULE_4__["FindFalcon"]());
    }
};
FindingFalconComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
FindingFalconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'finding-falcon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finding-falcon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/finding-falcon/finding-falcon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./finding-falcon.component.scss */ "./src/app/containers/finding-falcon/finding-falcon.component.scss")).default]
    })
], FindingFalconComponent);



/***/ }),

/***/ "./src/app/containers/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/containers/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".intro {\n  text-align: center;\n}\n\n.intro img {\n  height: 7rem;\n  margin-bottom: 10px;\n}\n\n.intro a {\n  color: white;\n  border-radius: 2.25rem;\n  padding: 0.375rem 3.75rem;\n  margin-top: 5%;\n}\n\n.intro .container {\n  max-width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWhlc2hrdW1hci9Eb2N1bWVudHMvUGVyc29uYWwvRmluZGluZy1GYWxjb24vc3JjL2FwcC9jb250YWluZXJzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVycy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRybyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmludHJvIGltZyB7XG4gIGhlaWdodDogN3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmludHJvIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIuMjVyZW07XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDMuNzVyZW07XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uaW50cm8gLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG4iLCIuaW50cm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnRybyBpbWcge1xuICBoZWlnaHQ6IDdyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbnRybyBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyLjI1cmVtO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAzLjc1cmVtO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmludHJvIC5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/containers/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/containers/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/containers/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/containers/index.ts":
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/*! exports provided: FindingFalconComponent, PageNotFoundComponent, HomeComponent, ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _finding_falcon_finding_falcon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finding-falcon/finding-falcon.component */ "./src/app/containers/finding-falcon/finding-falcon.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FindingFalconComponent", function() { return _finding_falcon_finding_falcon_component__WEBPACK_IMPORTED_MODULE_1__["FindingFalconComponent"]; });

/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/containers/page-not-found/page-not-found.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]; });

/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/containers/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]; });

/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./results/results.component */ "./src/app/containers/results/results.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return _results_results_component__WEBPACK_IMPORTED_MODULE_4__["ResultsComponent"]; });








/***/ }),

/***/ "./src/app/containers/page-not-found/page-not-found.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/containers/page-not-found/page-not-found.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-family: sans-serif;\n  background-color: #faebaf;\n}\n\n.error-container {\n  text-align: center;\n  text-align: center;\n  max-width: 500px;\n}\n\n.logo {\n  display: inline-flex;\n  justify-content: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 0;\n  min-height: 100px;\n  width: 100%;\n  margin: 10px auto;\n}\n\n.heading-text {\n  font-family: sans-serif;\n  color: #000;\n  font-weight: 700;\n  font-size: 26px;\n  letter-spacing: 0;\n  margin: 0 auto;\n  padding-bottom: 15px;\n}\n\n.exit-btn-container {\n  margin: 43px auto;\n}\n\n.exit-btn {\n  border: 1px solid transparent;\n  color: #ffffff;\n  background-color: blue;\n  border-color: black;\n  border-radius: 4px;\n  min-width: 160px;\n  height: 40px;\n  padding: 12px 24px;\n  font-size: 16px;\n  font-weight: 500;\n  text-transform: capitalize;\n  text-decoration: none;\n}\n\n.exit-btn:hover {\n  background-color: lightblue;\n  border-color: grey;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWhlc2hrdW1hci9Eb2N1bWVudHMvUGVyc29uYWwvRmluZGluZy1GYWxjb24vc3JjL2FwcC9jb250YWluZXJzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXJzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxvQkFBQTtFQUVBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDREY7O0FESUE7RUFDRSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsNkJBQUE7RUFDQSxjQTdDTTtFQThDTixzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUNERjs7QURJQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQTdETTtBQzREUiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGU6ICNmZmZmZmY7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWViYWY7XG59XG5cbi5lcnJvci1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG4uaGVhZGluZy10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5leGl0LWJ0bi1jb250YWluZXIge1xuICBtYXJnaW46IDQzcHggYXV0bztcbn1cblxuLmV4aXQtYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAkd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmV4aXQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICBib3JkZXItY29sb3I6IGdyZXk7XG4gIGNvbG9yOiAkd2hpdGU7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFlYmFmO1xufVxuXG4uZXJyb3ItY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4uZXhpdC1idG4tY29udGFpbmVyIHtcbiAgbWFyZ2luOiA0M3B4IGF1dG87XG59XG5cbi5leGl0LWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZXhpdC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gIGJvcmRlci1jb2xvcjogZ3JleTtcbiAgY29sb3I6ICNmZmZmZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/containers/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/containers/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() { }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "page-not-found",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/containers/page-not-found/page-not-found.component.scss")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/containers/results/results.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/containers/results/results.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/containers/results/results.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/containers/results/results.component.ts ***!
  \*********************************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../+state */ "./src/app/+state/index.ts");





let ResultsComponent = class ResultsComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
    }
    ngOnInit() {
        this.missionDetails$ = this.store.select(_state__WEBPACK_IMPORTED_MODULE_4__["getFalconResult"]);
        this.timeSpent$ = this.store.select(_state__WEBPACK_IMPORTED_MODULE_4__["getTotalTimeTaken"]);
    }
    startMission() {
        this.store.dispatch(new _state__WEBPACK_IMPORTED_MODULE_4__["ClearState"]());
        this.router.navigate(['']);
    }
};
ResultsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-results',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./results.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/results/results.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./results.component.scss */ "./src/app/containers/results/results.component.scss")).default]
    })
], ResultsComponent);



/***/ }),

/***/ "./src/app/guards/index.ts":
/*!*********************************!*\
  !*** ./src/app/guards/index.ts ***!
  \*********************************/
/*! exports provided: SetTokenGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _set_token_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-token.guard */ "./src/app/guards/set-token.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetTokenGuard", function() { return _set_token_guard__WEBPACK_IMPORTED_MODULE_1__["SetTokenGuard"]; });





/***/ }),

/***/ "./src/app/guards/result.guard.ts":
/*!****************************************!*\
  !*** ./src/app/guards/result.guard.ts ***!
  \****************************************/
/*! exports provided: ResultGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultGuard", function() { return ResultGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/ngrx-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../+state */ "./src/app/+state/index.ts");






let ResultGuard = class ResultGuard {
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    canActivate() {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_state__WEBPACK_IMPORTED_MODULE_5__["getFalconResult"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((s) => {
            if (s && s.status) {
                return true;
            }
            this.router.navigate(['']);
            return true;
        }));
    }
};
ResultGuard.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ResultGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ResultGuard);



/***/ }),

/***/ "./src/app/guards/set-token.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/set-token.guard.ts ***!
  \*******************************************/
/*! exports provided: SetTokenGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTokenGuard", function() { return SetTokenGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");




let SetTokenGuard = class SetTokenGuard {
    constructor(tokenService, cookieService) {
        this.tokenService = tokenService;
        this.cookieService = cookieService;
    }
    canActivate() {
        return this.tokenService.getToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((token) => !!token), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((token) => {
            if (token) {
                this.cookieService.set('falconToken', token.token);
                return true;
            }
            return false;
        }));
    }
};
SetTokenGuard.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
SetTokenGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SetTokenGuard);



/***/ }),

/***/ "./src/app/http-interceptor/index.ts":
/*!*******************************************!*\
  !*** ./src/app/http-interceptor/index.ts ***!
  \*******************************************/
/*! exports provided: RefreshTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _refresh_token_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refresh-token.interceptor */ "./src/app/http-interceptor/refresh-token.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefreshTokenInterceptor", function() { return _refresh_token_interceptor__WEBPACK_IMPORTED_MODULE_1__["RefreshTokenInterceptor"]; });





/***/ }),

/***/ "./src/app/http-interceptor/refresh-token.interceptor.ts":
/*!***************************************************************!*\
  !*** ./src/app/http-interceptor/refresh-token.interceptor.ts ***!
  \***************************************************************/
/*! exports provided: RefreshTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshTokenInterceptor", function() { return RefreshTokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");




let RefreshTokenInterceptor = class RefreshTokenInterceptor {
    constructor(tokenService, cookieService) {
        this.tokenService = tokenService;
        this.cookieService = cookieService;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            if (error.status === 401 ||
                error.status === 404 ||
                error.status === 400) {
                return this.tokenService.getToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((token) => {
                    this.cookieService.set('falconToken', token.token);
                    const updatedRequest = this.cloneRequestWithToken(req);
                    return next.handle(updatedRequest);
                }));
            }
            throw error;
        }));
    }
    cloneRequestWithToken(request) {
        const token = this.cookieService.get('falconToken');
        if (!token) {
            return request;
        }
        const updatedBody = {};
        updatedBody['token'] = token;
        return request.clone({
            body: Object.assign({}, request.body, updatedBody)
        });
    }
};
RefreshTokenInterceptor.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
RefreshTokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], RefreshTokenInterceptor);



/***/ }),

/***/ "./src/app/models/app.constants.ts":
/*!*****************************************!*\
  !*** ./src/app/models/app.constants.ts ***!
  \*****************************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const API_URL = 'https://findfalcone.herokuapp.com/';


/***/ }),

/***/ "./src/app/models/app.enum.ts":
/*!************************************!*\
  !*** ./src/app/models/app.enum.ts ***!
  \************************************/
/*! exports provided: ESelectAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESelectAction", function() { return ESelectAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ESelectAction;
(function (ESelectAction) {
    ESelectAction["Add"] = "add";
    ESelectAction["Remove"] = "remove";
})(ESelectAction || (ESelectAction = {}));


/***/ }),

/***/ "./src/app/models/app.mock.data.ts":
/*!*****************************************!*\
  !*** ./src/app/models/app.mock.data.ts ***!
  \*****************************************/
/*! exports provided: mockState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockState", function() { return mockState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const mockState = {
    planets: {
        planets: [],
        loading: false,
        loaded: false,
        selectedPlanets: []
    },
    vehicles: {
        vehicles: [],
        selectedVehicles: [],
        loaded: false,
        loading: false
    },
    totalTakenTime: { totalTimeTaken: 0 },
    findFalcon: {
        result: { status: 'success' },
        loaded: false,
        loading: false
    }
};


/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: API_URL, ESelectAction, mockState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.constants */ "./src/app/models/app.constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return _app_constants__WEBPACK_IMPORTED_MODULE_1__["API_URL"]; });

/* harmony import */ var _app_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.enum */ "./src/app/models/app.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ESelectAction", function() { return _app_enum__WEBPACK_IMPORTED_MODULE_2__["ESelectAction"]; });

/* harmony import */ var _app_mock_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.mock.data */ "./src/app/models/app.mock.data.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockState", function() { return _app_mock_data__WEBPACK_IMPORTED_MODULE_3__["mockState"]; });







/***/ }),

/***/ "./src/app/services/cookie.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/cookie.service.ts ***!
  \********************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Cookie Service to handle token
 *
 * @class CookieService
 */
let CookieService = class CookieService {
    constructor() { }
    /**
     * Get token from Cookie
     *
     * @return {String} token
     *
     * @memberof CookieService
     */
    get(cookiename) {
        return ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get(cookiename);
    }
    /**
     * Set Access Token in Cookie with expiration
     *
     * @memberof CookieService
     */
    set(cookiename, data, expiration) {
        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set(cookiename, data, expiration, '/');
    }
};
CookieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CookieService);



/***/ }),

/***/ "./src/app/services/data.mock.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/data.mock.service.ts ***!
  \***********************************************/
/*! exports provided: MockDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockDataService", function() { return MockDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


class MockDataService {
    getVehicles() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
    }
    getPlanets() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
    }
    findFalcon(selectedVehicles, selectedPlanets) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
    }
}


/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cookie.service */ "./src/app/services/cookie.service.ts");





let DataService = class DataService {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
    }
    getVehicles() {
        return this.http.get(_models__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'vehicles');
    }
    getPlanets() {
        return this.http.get(_models__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'planets');
    }
    findFalcon(selectedPlanets, selectedVehicles) {
        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        };
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headers)
        };
        const token = this.cookieService.get('falconToken');
        const requestBody = {
            token: token,
            planet_names: selectedPlanets,
            vehicle_names: selectedVehicles
        };
        return this.http.post(_models__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'find', requestBody, options);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: CookieService, DataService, MockDataService, TokenService, MockTokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie.service */ "./src/app/services/cookie.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return _cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]; });

/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]; });

/* harmony import */ var _data_mock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.mock.service */ "./src/app/services/data.mock.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockDataService", function() { return _data_mock_service__WEBPACK_IMPORTED_MODULE_3__["MockDataService"]; });

/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.service */ "./src/app/services/token.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]; });

/* harmony import */ var _token_mock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token.mock.service */ "./src/app/services/token.mock.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockTokenService", function() { return _token_mock_service__WEBPACK_IMPORTED_MODULE_5__["MockTokenService"]; });









/***/ }),

/***/ "./src/app/services/token.mock.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/token.mock.service.ts ***!
  \************************************************/
/*! exports provided: MockTokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockTokenService", function() { return MockTokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


class MockTokenService {
    getToken() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
    }
}


/***/ }),

/***/ "./src/app/services/token.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");




let TokenService = class TokenService {
    constructor(http) {
        this.http = http;
    }
    getToken() {
        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        };
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headers)
        };
        return this.http.post(_models__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'token', null, options);
    }
};
TokenService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TokenService);



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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/maheshkumar/Documents/Personal/Finding-Falcon/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map