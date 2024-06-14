(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/AddOnComponents/dialog/dialog.component.css":
/*!*************************************************************!*\
  !*** ./src/app/AddOnComponents/dialog/dialog.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/AddOnComponents/dialog/dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/AddOnComponents/dialog/dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n  <ul *ngFor=\"let line of announcements\">\r\n    {{\r\n      line\r\n    }}\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/AddOnComponents/dialog/dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/AddOnComponents/dialog/dialog.component.ts ***!
  \************************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogComponent = /** @class */ (function () {
    function DialogComponent(announcements) {
        this.announcements = announcements;
        console.log(announcements);
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/AddOnComponents/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/AddOnComponents/dialog/dialog.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Array])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/AddOnComponents/skillscomp/skillscomp.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/AddOnComponents/skillscomp/skillscomp.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/AddOnComponents/skillscomp/skillscomp.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/AddOnComponents/skillscomp/skillscomp.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 animate-box fadeInUp animated\">\n  <div class=\"progress-wrap\">\n    <h3 class=\"null\">JavaScript, TypeScript</h3>\n    <div class=\"progress\">\n      <div class=\"progress-bar color-1\" style=\"width: 80%\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/AddOnComponents/skillscomp/skillscomp.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/AddOnComponents/skillscomp/skillscomp.component.ts ***!
  \********************************************************************/
/*! exports provided: SkillscompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillscompComponent", function() { return SkillscompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillscompComponent = /** @class */ (function () {
    function SkillscompComponent() {
    }
    SkillscompComponent.prototype.ngOnInit = function () {
    };
    SkillscompComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skillscomp',
            template: __webpack_require__(/*! ./skillscomp.component.html */ "./src/app/AddOnComponents/skillscomp/skillscomp.component.html"),
            styles: [__webpack_require__(/*! ./skillscomp.component.css */ "./src/app/AddOnComponents/skillscomp/skillscomp.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillscompComponent);
    return SkillscompComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projects/projects.component */ "./src/app/projects/projects.component.ts");


var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    {
        path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsComponent"],
        children: [
            { path: ':category', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsComponent"] }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* =======================================================\r\n*\r\n* \tTemplate Style \r\n*\tEdit this section\r\n*\r\n* ======================================================= */\r\n\r\n.top-right{\r\n    background-color: rgb(42, 18, 228);\r\n    top: 10px;\r\n    right: 50px;\r\n    position: absolute;\r\n    border-radius: 6px;\r\n    color: white;\r\n    }\r\n\r\nbody {\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n\tfont-weight: 400;\r\n\tfont-size: 15px;\r\n\tline-height: 1.8;\r\n\tcolor: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n\tbody {\r\n\t\tfont-size: 16px;\r\n\t}\r\n\th2 {\r\n\t\ttext-align: center;\r\n\t}\r\n\tcanvas {\r\n\t\tbackground: #EEE;\r\n\t\tposition: fixed;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t}\r\n}\r\n\r\ncanvas {\r\n\tbackground: #EEE;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n}\r\n\r\na {\r\n\tcolor: #2c98f0;\r\n\ttransition: 0.5s;\r\n}\r\n\r\na:hover,\r\na:active,\r\na:focus {\r\n\tcolor: #2c98f0;\r\n\toutline: none;\r\n\ttext-decoration: none !important;\r\n}\r\n\r\np {\r\n\tmargin-bottom: 1.5em;\r\n\tcolor: black;\r\n\tfont-family: 'Montserrat', sans-serif;\r\n}\r\n\r\nx {\r\n\tmargin-bottom: 1.5em;\r\n\tbackground-color: lightblue;\r\n\tcolor: black;\r\n\t-webkit-backface-visibility: visible;\r\n\t        backface-visibility: visible;\r\n}\r\n\r\nh1,\r\nh4,\r\nh5,\r\nh6 {\r\n\tcolor: #000;\r\n\tfont-family: \"Playfair Display\", Georgia, serif;\r\n\tfont-weight: 400;\r\n\tmargin: 0 0 30px 0;\r\n}\r\n\r\nh2 {\r\n\tcolor: #000;\r\n\tfont-family: \"Playfair Display\", Georgia, serif;\r\n\tfont-weight: 200;\r\n\tmargin: 0 0 20px 0;\r\n}\r\n\r\nh3 {\r\n\tcolor: #000;\r\n\tfont-family: \"Playfair Display\", Georgia, serif;\r\n\tfont-weight: 200;\r\n\tmargin: 0 0 30px 0;\r\n}\r\n\r\nfigure {\r\n\tmargin-bottom: 2.5em;\r\n\tfloat: left;\r\n\twidth: 100%;\r\n}\r\n\r\nfigure figcaption {\r\n\tfont-size: 16px;\r\n\twidth: 80%;\r\n\tmargin: 20px auto 0px auto;\r\n\tcolor: #b3b3b3;\r\n\tfont-style: italic;\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n\tfigure figcaption {\r\n\t\twidth: 100%;\r\n\t}\r\n}\r\n\r\n::-webkit-selection {\r\n\tcolor: #fff;\r\n\tbackground: #2c98f0;\r\n}\r\n\r\n::-moz-selection {\r\n\tcolor: #fff;\r\n\tbackground: #2c98f0;\r\n}\r\n\r\n::selection {\r\n\tcolor: #fff;\r\n\tbackground: #2c98f0;\r\n}\r\n\r\n#colorlib-page {\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n}\r\n\r\n#colorlib-aside {\r\n\tpadding-top: 3em;\r\n\tpadding-bottom: 1px;\r\n\tfloat: left;\r\n\twidth: 300px;\r\n\tposition: fixed;\r\n\tz-index: 1001;\r\n\tbackground-color: lightblue;\r\n\ttransition: 0.5s;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#colorlib-aside {\r\n\t\twidth: 300px;\r\n\t\t-webkit-transform: translateX(-300px);\r\n\t\ttransform: translateX(-300px);\r\n\t\tpadding-top: 4em;\r\n\t\tbackground-color: lightblue;\r\n\t\theight: auto;\r\n\t}\r\n}\r\n\r\n#colorlib-aside .author-img {\r\n\twidth: 150px;\r\n\theight: 150px;\r\n\tmargin: 0 auto;\r\n\tmargin-bottom: 30px;\r\n\tborder-radius: 50%;\r\n\tborder: 3px solid white;\r\n}\r\n\r\n#colorlib-aside h1 {\r\n\tcolor: #000;\r\n\tfont-family: 'Raleway', sans-serif;\r\n}\r\n\r\n#colorlib-aside .position {\r\n\tdisplay: block;\r\n\tmargin-bottom: 2em;\r\n\tfont-size: 12px;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n#colorlib-aside #colorlib-logo {\r\n\ttext-align: right;\r\n\tfont-weight: 700;\r\n\tfont-size: 30px;\r\n\tmargin-bottom: .5em;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n}\r\n\r\n#colorlib-aside #colorlib-logo a {\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tcolor: #000;\r\n\tpadding-right: .3em;\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu .collapse {\r\n\tdisplay: block !important;\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu ul {\r\n\ttext-align: center;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#colorlib-aside #colorlib-main-menu ul {\r\n\t\tmargin: 0 0 2em 0;\r\n\t}\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu ul li {\r\n\tmargin: 0 0 10px 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n\tfont-size: 12px;\r\n\tfont-weight: 500;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu ul li a {\r\n\tcolor: rgba(0, 0, 0, 0.7);\r\n\ttext-decoration: none;\r\n\tposition: relative;\r\n\tpadding: 10px 0;\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n\ttransition: 0.3s;\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu ul li a:after {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\theight: 1px;\r\n\tbottom: 7px;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbackground-color: #2c98f0;\r\n\tvisibility: hidden;\r\n\t-webkit-transform: scaleX(0);\r\n\ttransform: scaleX(0);\r\n\ttransition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu ul li a:hover {\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu ul li a:hover:after {\r\n\tvisibility: visible;\r\n\t-webkit-transform: scaleX(1);\r\n\ttransform: scaleX(1);\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu ul li.active a {\r\n\tcolor: #2c98f0;\r\n}\r\n\r\n#colorlib-aside #colorlib-main-menu ul li.active a:after {\r\n\tvisibility: visible;\r\n\t-webkit-transform: scaleX(1);\r\n\ttransform: scaleX(1);\r\n}\r\n\r\n#colorlib-aside .colorlib-footer {\r\n\tfont-size: 20px;\r\n\ttext-align: center;\r\n\tfont-weight: 400;\r\n\tcolor: rgba(0, 0, 0, 0.5);\r\n\tpadding: 0 20px;\r\n\twidth: 100%;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#colorlib-aside .colorlib-footer {\r\n\t\tposition: fixed;\r\n\t\theight: auto;\r\n\t}\r\n}\r\n\r\n#colorlib-aside .colorlib-footer span {\r\n\tdisplay: block;\r\n}\r\n\r\n#colorlib-aside .colorlib-footer ul {\r\n\tpadding: 0 20px;\r\n\tmargin: 0 0 10px 0;\r\n}\r\n\r\n#colorlib-aside .colorlib-footer ul li {\r\n\tpadding: 0 20px;\r\n\tmargin: 0 0 10px 0;\r\n\tdisplay: inline;\r\n\tlist-style: none;\r\n}\r\n\r\n#colorlib-aside .colorlib-footer h3 {\r\n\tfont-family: inherit;\r\n\tpadding: 4px;\r\n}\r\n\r\n#colorlib-aside .colorlib-footer h3 a {\r\n\tcolor: #FF722C;\r\n\tfont-size: 18px;\r\n}\r\n\r\n#rcorners2 {\r\n\tborder-radius: 15px;\r\n\tbackground: black;\r\n\tpadding: 20px;\r\n\twidth: 50%;\r\n\theight: 40px;\r\n}\r\n\r\n#colorlib-aside .colorlib-footer ul li a {\r\n\tcolor: rgba(255, 255, 255, 0.3);\r\n\tpadding: 4px;\r\n}\r\n\r\n#colorlib-aside .colorlib-footer ul li a:hover,\r\n#colorlib-aside .colorlib-footer ul li a:active,\r\n#colorlib-aside .colorlib-footer ul li a:focus {\r\n\ttext-decoration: none;\r\n\toutline: none;\r\n\tcolor: black;\r\n}\r\n\r\n.container-wrap {\r\n\tmax-width: 1170px;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n/* #colorlib-main {\r\n\twidth: calc(100% - 300px);\r\n\tfloat: right;\r\n\t-webkit-transition: 0.5s;\r\n\t-o-transition: 0.5s;\r\n\ttransition: 0.5s;\r\n} */\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#colorlib-main {\r\n\t\twidth: 100%;\r\n\t\tpadding: 0 1em;\r\n\t}\r\n}\r\n\r\n#colorlib-hero {\r\n\tmin-height: 500px;\r\n\twidth: 100%;\r\n\tfloat: left;\r\n\tmargin-bottom: 10em;\r\n\tclear: both;\r\n}\r\n\r\n#colorlib-hero .flexslider {\r\n\tborder: none;\r\n\tz-index: 1;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n#colorlib-hero .flexslider .slides {\r\n\tposition: relative;\r\n\toverflow: visible;\r\n}\r\n\r\n#colorlib-hero .flexslider .slides li {\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tbackground-position: bottom center;\r\n\tmin-height: 400px;\r\n\tposition: relative;\r\n}\r\n\r\n#colorlib-hero .flexslider .flex-control-nav {\r\n\tbottom: 20px;\r\n\tz-index: 1000;\r\n\tleft: 20px;\r\n\tfloat: left;\r\n\twidth: auto;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#colorlib-hero .flexslider .flex-control-nav {\r\n\t\tright: 20px;\r\n\t\ttop: 100px;\r\n\t}\r\n}\r\n\r\n#colorlib-hero .flexslider .flex-control-nav li {\r\n\tdisplay: block;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n#colorlib-hero .flexslider .flex-control-nav li a {\r\n\tbackground: rgba(0, 0, 0, 0.5);\r\n\tbox-shadow: none;\r\n\twidth: 12px;\r\n\theight: 12px;\r\n\tcursor: pointer;\r\n}\r\n\r\n#colorlib-hero .flexslider .flex-control-nav li a.flex-active {\r\n\tcursor: pointer;\r\n\tbackground: transparent;\r\n\tborder: 2px solid #2c98f0;\r\n}\r\n\r\n#colorlib-hero .flexslider .flex-direction-nav {\r\n\tdisplay: none;\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text {\r\n\tdisplay: table;\r\n\topacity: 0;\r\n\tmin-height: 500px;\r\n\tz-index: 9;\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\tmin-height: 700px;\r\n\tpadding: 2.5em;\r\n\tposition: relative;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#colorlib-hero .flexslider .slider-text>.slider-text-inner {\r\n\t\ttext-align: center;\r\n\t}\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner h1,\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner h2 {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tcolor: black;\r\n\tfont-family: \"Playfair Display\", Georgia, serif;\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner h1 {\r\n\tmargin-bottom: 20px;\r\n\tfont-size: 60px;\r\n\tline-height: 1.3;\r\n\tfont-weight: 700;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#colorlib-hero .flexslider .slider-text>.slider-text-inner h1 {\r\n\t\tfont-size: 28px;\r\n\t}\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner h2 {\r\n\tfont-size: 10px;\r\n\tline-height: 1.5;\r\n\tmargin-bottom: 30px;\r\n\tfont-weight: 300;\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner h2 a {\r\n\tcolor: rgba(44, 152, 240, 0.8);\r\n\tborder-bottom: 1px solid rgba(44, 152, 240, 0.7);\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner .heading-section {\r\n\tfont-size: 50px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#colorlib-hero .flexslider .slider-text>.slider-text-inner .heading-section {\r\n\t\tfont-size: 30px;\r\n\t}\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner s .colorlib-lead {\r\n\tfont-size: 20px;\r\n\tcolor: #fff;\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner p {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner .btn {\r\n\tfont-size: 12px;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 2px;\r\n\tcolor: #000;\r\n\tpadding: 10px 15px !important;\r\n\tborder: none;\r\n\tfont-weight: 400;\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner .btn.btn-learn {\r\n\tcolor: #000;\r\n\tborder: 1px solid #000;\r\n\tbackground: transparent !important;\r\n}\r\n\r\n#colorlib-hero .flexslider .slider-text>.slider-text-inner .btn.btn-learn:hover {\r\n\tbackground: transparent !important;\r\n\tborder: 1px solid #000 !important;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#colorlib-hero .flexslider .slider-text>.slider-text-inner .btn {\r\n\t\twidth: 100%;\r\n\t}\r\n}\r\n\r\nbody.offcanvas {\r\n\toverflow-x: hidden;\r\n}\r\n\r\nbody.offcanvas #colorlib-aside {\r\n\t-webkit-transform: translateX(0);\r\n\ttransform: translateX(0);\r\n\twidth: 300px;\r\n\tbackground-color: lightblue;\r\n\tz-index: 999;\r\n\tposition: fixed;\r\n}\r\n\r\nbody.offcanvas #colorlib-main,\r\nbody.offcanvas .colorlib-nav-toggle {\r\n\ttop: 0;\r\n\t-webkit-transform: translateX(300px);\r\n\ttransform: translateX(300px);\r\n}\r\n\r\n.colorlib-narrow-content {\r\n\tpadding: 0 4.5em;\r\n}\r\n\r\n@media screen and (max-width: 878px) {\r\n\t.colorlib-narrow-content {\r\n\t\twidth: 100%;\r\n\t\tpadding: 0 1em;\r\n\t}\r\n}\r\n\r\n.no-gutters {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n.colorlib-experience,\r\n.colorlib-skills,\r\n.colorlib-education,\r\n.colorlib-blog,\r\n.colorlib-work,\r\n.colorlib-installation,\r\n.colorlib-services,\r\n.colorlib-footer,\r\n.colorlib-contact {\r\n\tpadding-top: 2em;\r\n\tpadding-bottom: 0em;\r\n\tclear: both;\r\n\twidth: 100%;\r\n\tdisplay: block;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.colorlib-experience,\r\n\t.colorlib-skills,\r\n\t.colorlib-education,\r\n\t.colorlib-blog,\r\n\t.colorlib-work,\r\n\t.colorlib-installation,\r\n\t.colorlib-services,\r\n\t.colorlib-contact {\r\n\t\tpadding-top: 2em;\r\n\t\tpadding-bottom: 0em;\r\n\t}\r\n}\r\n\r\n#colorlib-footer2 {\r\n\tbackground: black;\r\n\twidth: 100%;\r\n\tpadding-bottom: 3em;\r\n\tpadding-top: 2em;\r\n\tpadding-right: 2em;\r\n}\r\n\r\n#colorlib-footer2 .h2 {\r\n\tcolor: red;\r\n\ttext-align: center;\r\n}\r\n\r\n.author-img {\r\n\tbackground-size: cover;\r\n\tbackground-position: center center;\r\n\tbackground-repeat: no-repeat;\r\n\tposition: relative;\r\n}\r\n\r\n.colorlib-heading {\r\n\tfont-size: 18px;\r\n\tmargin-bottom: 2em;\r\n\tfont-weight: 700;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 5px;\r\n\tline-height: 1.8;\r\n\tposition: relative;\r\n}\r\n\r\n.colorlib-heading span {\r\n\tdisplay: block;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.colorlib-heading {\r\n\t\tmargin-bottom: 2em;\r\n\t}\r\n}\r\n\r\n.heading-meta {\r\n\tmargin-bottom: 15px;\r\n\tdisplay: block;\r\n\tfont-size: 10px;\r\n\ttext-transform: uppercase;\r\n\tcolor: #999999;\r\n\tfont-weight: 500;\r\n\tletter-spacing: 5px;\r\n}\r\n\r\n.about-img {\r\n\twidth: 100%;\r\n\theight: 600px;\r\n\tmargin-bottom: 10px;\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.about-desc h3 {\r\n\tfont-size: 18px;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 5px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.about-desc h1 {\r\n\tfont-size: 38px;\r\n\tfont-weight: 400;\r\n\tfont-family: \"Montserrat\", Georgia, serif;\r\n}\r\n\r\n.hire {\r\n\tpadding: 2em;\r\n\tbackground: lightblue;\r\n}\r\n\r\n.hire h2 {\r\n\tline-height: 1.5;\r\n}\r\n\r\n.hire .btn-hire {\r\n\tcolor: #000;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n\tbordeR: 1px solid #000;\r\n\tpadding: 2px 10px;\r\n}\r\n\r\n.fancy-collapse-panel .panel-default>.panel-heading {\r\n\tpadding: 0;\r\n}\r\n\r\n#projects {\r\n\tpadding: 50px 15px;\r\n\tborder-bottom: 1px solid #dcd9d9;\r\n\ttext-align: center\r\n}\r\n\r\n#projects h2 {\r\n\tcolor: #374054;\r\n\tmargin-bottom: 50px\r\n}\r\n\r\n.project {\r\n\tposition: relative;\r\n\tmax-width: 900px;\r\n\tmargin: 0 auto 30px auto;\r\n\toverflow: hidden;\r\n\tbackground: #fff;\r\n\tborder-radius: 4px\r\n}\r\n\r\n.project-image {\r\n\tfloat: left\r\n}\r\n\r\n.project-info {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\t-webkit-transform: translateY(-50%);\r\n\t        transform: translateY(-50%);\r\n\tmargin-left: 300px;\r\n\tpadding: 15px\r\n}\r\n\r\n.project-info h3 {\r\n\tfont-size: 1.5em;\r\n\tfont-weight: 300;\r\n\tcolor: #374054;\r\n\tmargin: 0 0 15px 0\r\n}\r\n\r\n.project-info p {\r\n\tcolor: #74808a;\r\n\tmargin: 0 0 15px 0;\r\n\tfont-size: 0.9em\r\n}\r\n\r\n.no-image .project-info {\r\n\tposition: relative;\r\n\tmargin: 0;\r\n\tpadding: 30px 15px;\r\n\t-webkit-transform: none;\r\n\t        transform: none\r\n}\r\n\r\n#more-projects {\r\n\tdisplay: none\r\n}\r\n\r\n.panel-heading a {\r\n\tpadding: 20px 25px;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tfont-weight: 500;\r\n\tfont-size: 14px;\r\n\tletter-spacing: 1px;\r\n\ttext-transform: uppercase;\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n\tbackground-color: #2c98f0;\r\n\tcolor: #fff;\r\n\tposition: relative;\r\n\t-ms-box-shadow: none !important;\r\n\t-o-box-shadow: none !important;\r\n\tbox-shadow: none !important;\r\n}\r\n\r\n.panel {\r\n\t-ms-box-shadow: none !important;\r\n\t-o-box-shadow: none !important;\r\n\tbox-shadow: none !important;\r\n\tborder: none;\r\n}\r\n\r\n.panel-heading a:after {\r\n\tfont-family: \"icomoon\";\r\n\tcontent: \"\\e115\";\r\n\tposition: absolute;\r\n\tright: 20px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\ttop: 50%;\r\n\tline-height: 1;\r\n\tmargin-top: -7px;\r\n}\r\n\r\n.panel-heading a.collapsed:after {\r\n\tcontent: \"\\e114\";\r\n}\r\n\r\n.panel-heading a.collapsed {\r\n\tbackground: #f2f3f7;\r\n\tborder: 1px solid #e6e6e6 !important;\r\n\tcolor: #333333;\r\n}\r\n\r\n.panel-body {\r\n\tpadding: 1.5em;\r\n\tmargin-top: 5px;\r\n\tborder: 1px solid #e6e6e6 !important;\r\n}\r\n\r\n.timeline-centered {\r\n\tposition: relative;\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.timeline-centered:before,\r\n.timeline-centered:after {\r\n\tcontent: \" \";\r\n\tdisplay: table;\r\n}\r\n\r\n.timeline-centered:after {\r\n\tclear: both;\r\n}\r\n\r\n.timeline-centered:before,\r\n.timeline-centered:after {\r\n\tcontent: \" \";\r\n\tdisplay: table;\r\n}\r\n\r\n.timeline-centered:after {\r\n\tclear: both;\r\n}\r\n\r\n.timeline-centered:before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n\twidth: 4px;\r\n\tbackground: lightblue;\r\n\ttop: 20px;\r\n\tbottom: 20px;\r\n\tmargin-left: 29px;\r\n}\r\n\r\n.timeline-centered .timeline-entry {\r\n\tposition: relative;\r\n\tmargin-top: 5px;\r\n\tmargin-left: 30px;\r\n\tmargin-bottom: 10px;\r\n\tclear: both;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner {\r\n\tposition: relative;\r\n\tmargin-left: -20px;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {\r\n\tdisplay: block;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tbackground: #2c98f0;\r\n\tborder-radius: 50%;\r\n\ttext-align: center;\r\n\tbox-shadow: 0 0 0 5px #f2f3f7;\r\n\tline-height: 40px;\r\n\tfloat: left;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon i {\r\n\tcolor: #fff;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-2 {\r\n\tbackground: #ec5453;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-3 {\r\n\tbackground: lightblue;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-4 {\r\n\tbackground: #a84cb8;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-5 {\r\n\tbackground: #2fa499;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-none {\r\n\tbackground: #fff;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {\r\n\tposition: relative;\r\n\tbackground: lightblue;\r\n\tpadding: 1.5em;\r\n\tmargin-left: 60px;\r\n\tbackground-clip: padding-box;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder-style: solid;\r\n\tborder-width: 9px 9px 9px 0;\r\n\tborder-color: transparent #f2f3f7 transparent transparent;\r\n\tleft: 0;\r\n\ttop: 10px;\r\n\tmargin-left: -9px;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p+p {\r\n\tmargin-top: 15px;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 {\r\n\tfont-size: 20px;\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {\r\n\tcolor: #000;\r\n}\r\n\r\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 span {\r\n\t-webkit-opacity: .4;\r\n\t-moz-opacity: .4;\r\n\topacity: .4;\r\n\t-ms-filter: alpha(opacity=40);\r\n\tfilter: alpha(opacity=40);\r\n\tfont-size: 16px;\r\n}\r\n\r\n.services {\r\n\tmargin-bottom: 30px;\r\n\tpadding: 1.5em;\r\n\t-ms-box-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.17);\r\n\t-o-box-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.17);\r\n\tbox-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.17);\r\n\tborder-bottom: 2px solid #2c98f0;\r\n}\r\n\r\n.services .icon2 {\r\n\tdisplay: block;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.services .icon2 i {\r\n\tfont-size: 30px;\r\n\tcolor: #2c98f0;\r\n}\r\n\r\n.services h3 {\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.services.color-2 {\r\n\tborder-bottom: 2px solid #ec5453;\r\n}\r\n\r\n.services.color-2 .icon2 i {\r\n\tcolor: #ec5453;\r\n}\r\n\r\n.services.color-3 {\r\n\tborder-bottom: 2px solid lightblue;\r\n}\r\n\r\n.services.color-3 .icon2 i {\r\n\tcolor: lightblue;\r\n}\r\n\r\n.services.color-4 {\r\n\tborder-bottom: 2px solid #a84cb8;\r\n}\r\n\r\n.services.color-4 .icon2 i {\r\n\tcolor: #a84cb8;\r\n}\r\n\r\n.services.color-5 {\r\n\tborder-bottom: 2px solid #2fa499;\r\n}\r\n\r\n.services.color-5 .icon2 i {\r\n\tcolor: #2fa499;\r\n}\r\n\r\n.services.color-6 {\r\n\tborder-bottom: 2px solid #4054b2;\r\n}\r\n\r\n.services.color-6 .icon2 i {\r\n\tcolor: #4054b2;\r\n}\r\n\r\n.services {\r\n\tmargin-bottom: 80px;\r\n\tposition: relative;\r\n\tz-index: 0;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.services {\r\n\t\tmargin-bottom: 4em;\r\n\t}\r\n}\r\n\r\n.services .icon {\r\n\tposition: absolute;\r\n\ttop: -20px;\r\n\tleft: 0;\r\n\tright: 0;\r\n\twidth: 100px;\r\n\theight: 50px;\r\n\tdisplay: table;\r\n\tmargin: 0 auto;\r\n\tbackground: #2c98f0;\r\n}\r\n\r\n.services .icon:before,\r\n.services .icon:after {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tcontent: '';\r\n}\r\n\r\n.services .icon:before {\r\n\ttop: -30px;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder-style: solid;\r\n\tborder-width: 0 50px 30px 50px;\r\n\tborder-color: transparent transparent #2c98f0 transparent;\r\n}\r\n\r\n.services .icon:after {\r\n\tbottom: -30px;\r\n\twidth: 0;\r\n\theight: 0;\r\n\tborder-style: solid;\r\n\tborder-width: 30px 50px 0 50px;\r\n\tborder-color: #2c98f0 transparent transparent transparent;\r\n}\r\n\r\n.services .icon i {\r\n\tfont-size: 30px;\r\n\tcolor: #fff;\r\n\tz-index: 1;\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.services .desc {\r\n\tmargin-top: 60px;\r\n}\r\n\r\n.services .desc h3 {\r\n\tfont-size: 16px;\r\n\tfont-weight: 700;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.services.color-2 .icon {\r\n\tbackground: #ec5453;\r\n}\r\n\r\n.services.color-2 .icon:before {\r\n\tborder-color: transparent transparent #ec5453 transparent;\r\n}\r\n\r\n.services.color-2 .icon:after {\r\n\tborder-color: #ec5453 transparent transparent transparent;\r\n}\r\n\r\n.services.color-3 .icon {\r\n\tbackground: lightblue;\r\n}\r\n\r\n.services.color-3 .icon:before {\r\n\tborder-color: transparent transparent lightblue transparent;\r\n}\r\n\r\n.services.color-3 .icon:after {\r\n\tborder-color: lightblue transparent transparent transparent;\r\n}\r\n\r\n.services.color-4 .icon {\r\n\tbackground: #a84cb8;\r\n}\r\n\r\n.services.color-4 .icon:before {\r\n\tborder-color: transparent transparent #a84cb8 transparent;\r\n}\r\n\r\n.services.color-4 .icon:after {\r\n\tborder-color: #a84cb8 transparent transparent transparent;\r\n}\r\n\r\n.services.color-5 .icon {\r\n\tbackground: #2fa499;\r\n}\r\n\r\n.services.color-5 .icon:before {\r\n\tborder-color: transparent transparent #2fa499 transparent;\r\n}\r\n\r\n.services.color-5 .icon:after {\r\n\tborder-color: #2fa499 transparent transparent transparent;\r\n}\r\n\r\n.services.color-6 .icon {\r\n\tbackground: #4054b2;\r\n}\r\n\r\n.services.color-6 .icon:before {\r\n\tborder-color: transparent transparent #4054b2 transparent;\r\n}\r\n\r\n.services.color-6 .icon:after {\r\n\tborder-color: #4054b2 transparent transparent transparent;\r\n}\r\n\r\n.progress-wrap h3 {\r\n\tfont-size: 16px;\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.progress {\r\n\theight: 6px;\r\n\tbox-shadow: none;\r\n\tbackground: #f2f3f7;\r\n\toverflow: visible;\r\n}\r\n\r\n.progress-bar {\r\n\tbackground: #2c98f0;\r\n\tbox-shadow: none;\r\n\tfont-size: 12px;\r\n\tline-height: 1.2;\r\n\tcolor: #000;\r\n\tfont-weight: 600;\r\n\ttext-align: right;\r\n\tposition: relative;\r\n\toverflow: visible;\r\n\tborder-radius: 8px;\r\n}\r\n\r\n.progress-bar:after {\r\n\tposition: absolute;\r\n\ttop: -2px;\r\n\tright: 0;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tcontent: '';\r\n\tbackground: #2c98f0;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.progress-bar span {\r\n\tposition: absolute;\r\n\ttop: -22px;\r\n\tright: -32px;\r\n}\r\n\r\n.progress-bar.color-1 {\r\n\tbackground: #2c98f0;\r\n}\r\n\r\n.progress-bar.color-1:after {\r\n\tbackground: #2c98f0;\r\n}\r\n\r\n.progress-bar.color-1 span {\r\n\tcolor: #2c98f0;\r\n}\r\n\r\n.progress-bar.color-2 {\r\n\tbackground: #ec5453;\r\n}\r\n\r\n.progress-bar.color-2:after {\r\n\tbackground: #ec5453;\r\n}\r\n\r\n.progress-bar.color-2 span {\r\n\tcolor: #ec5453;\r\n\tpadding-top: 2px;\r\n}\r\n\r\n.progress-bar.color-3 {\r\n\tbackground: lightblue;\r\n}\r\n\r\n.progress-bar.color-3:after {\r\n\tbackground: lightblue;\r\n}\r\n\r\n.progress-bar.color-3 span {\r\n\tcolor: lightblue;\r\n}\r\n\r\n.progress-bar.color-4 {\r\n\tbackground: #a84cb8;\r\n}\r\n\r\n.progress-bar.color-4:after {\r\n\tbackground: #a84cb8;\r\n}\r\n\r\n.progress-bar.color-4 span {\r\n\tcolor: #a84cb8;\r\n}\r\n\r\n.progress-bar.color-5 {\r\n\tbackground: #2fa499;\r\n}\r\n\r\n.progress-bar.color-5:after {\r\n\tbackground: #2fa499;\r\n}\r\n\r\n.progress-bar.color-5 span {\r\n\tcolor: #2fa499;\r\n}\r\n\r\n.progress-bar.color-6 {\r\n\tbackground: #4054b2;\r\n}\r\n\r\n.progress-bar.color-6:after {\r\n\tbackground: #4054b2;\r\n}\r\n\r\n.progress-bar.color-6 span {\r\n\tcolor: #4054b2;\r\n}\r\n\r\n.progress-bar.color-7 {\r\n\tbackground: #ec5453;\r\n}\r\n\r\n.progress-bar.color-7:after {\r\n\tbackground: #ec5453;\r\n}\r\n\r\n.progress-bar.color-7 span {\r\n\tcolor: #ec5453;\r\n}\r\n\r\n.progress-bar.color-8 {\r\n\tbackground: lightblue;\r\n}\r\n\r\n.progress-bar.color-8:after {\r\n\tbackground: lightblue;\r\n}\r\n\r\n.progress-bar.color-8 span {\r\n\tcolor: lightblue;\r\n}\r\n\r\n.progress-bar.color-9 {\r\n\tbackground: #a84cb8;\r\n}\r\n\r\n.progress-bar.color-9:after {\r\n\tbackground: #a84cb8;\r\n}\r\n\r\n.progress-bar.color-9 span {\r\n\tcolor: #a84cb8;\r\n}\r\n\r\n.progress-wrap h3 {\r\n\tpadding-bottom: 14px;\r\n}\r\n\r\n.colorlib-feature {\r\n\ttext-align: left;\r\n\twidth: 100%;\r\n\tfloat: left;\r\n\tmargin-bottom: 20px;\r\n\tposition: relative;\r\n}\r\n\r\n.colorlib-feature .colorlib-icon {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tdisplay: table;\r\n\ttext-align: center;\r\n\tbackground: #f2f3f7;\r\n\tborder-radius: 2px;\r\n}\r\n\r\n.colorlib-feature .colorlib-icon i {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\tcolor: #2c98f0;\r\n\tfont-size: 20px;\r\n\theight: 50px;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n\t.colorlib-feature .colorlib-icon i {\r\n\t\tfont-size: 20px;\r\n\t}\r\n}\r\n\r\n.colorlib-feature .colorlib-text {\r\n\tpadding-left: 60px;\r\n\twidth: 100%;\r\n}\r\n\r\n.colorlib-feature .colorlib-text h2,\r\n.colorlib-feature .colorlib-text h3 {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n.colorlib-feature .colorlib-text h3 {\r\n\tfont-weight: 500;\r\n\tmargin-bottom: 20px;\r\n\tcolor: rgba(0, 0, 0, 0.7);\r\n\tfont-size: 14px;\r\n\tletter-spacing: 3px;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.colorlib-feature.colorlib-feature-sm .colorlib-text {\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.colorlib-feature.colorlib-feature-sm .colorlib-icon i {\r\n\tcolor: #2c98f0;\r\n\tfont-size: 20px;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n\t.colorlib-feature.colorlib-feature-sm .colorlib-icon i {\r\n\t\tfont-size: 28px;\r\n\t}\r\n}\r\n\r\n.blog-entry {\r\n\twidth: 100%;\r\n\tfloat: left;\r\n\tbackground: #fff;\r\n\tmargin-bottom: 2em;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.blog-entry {\r\n\t\tmargin-bottom: 3em;\r\n\t}\r\n}\r\n\r\n.blog-entry .blog-img {\r\n\twidth: 100%;\r\n\tfloat: left;\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n\tz-index: 1;\r\n\tmargin-bottom: 25px;\r\n}\r\n\r\n.blog-entry .blog-img img {\r\n\tposition: relative;\r\n\tmax-width: 100%;\r\n\t-webkit-transform: scale(1);\r\n\ttransform: scale(1);\r\n\ttransition: 0.3s;\r\n}\r\n\r\n.blog-entry .desc h3 {\r\n\tfont-size: 16px;\r\n\tmargin-bottom: 25px;\r\n\tline-height: auto;\r\n\tfont-weight: 500;\r\n\tletter-spacing: 0.5px;\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n}\r\n\r\n.blog-entry .desc h3 a {\r\n\tcolor: #000;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.blog-entry .desc span {\r\n\tdisplay: block;\r\n\tmargin-bottom: 20px;\r\n\tfont-size: 12px;\r\n\tcolor: rgba(0, 0, 0, 0.4) !important;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n\tfont-weight: 400;\r\n}\r\n\r\n.blog-entry .desc span small i {\r\n\tcolor: #999999;\r\n}\r\n\r\n.blog-entry .desc .lead {\r\n\tfont-size: 12px;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 2px;\r\n\tcolor: #000;\r\n}\r\n\r\n.blog-entry:hover .blog-img img {\r\n\t-webkit-transform: scale(1.1);\r\n\ttransform: scale(1.1);\r\n}\r\n\r\n.work-menu span {\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.work-menu span:first-child {\r\n\tmargin-left: 0;\r\n}\r\n\r\n.work-menu span a {\r\n\tcolor: #000;\r\n}\r\n\r\n.work-menu span a.active {\r\n\tcolor: #2c98f0;\r\n}\r\n\r\n.project {\r\n\tbackground-size: cover;\r\n\tbackground-position: center center;\r\n\tbackground-repeat: no-repeat;\r\n\tposition: relative;\r\n\theight: 300px;\r\n\twidth: 100%;\r\n\tdisplay: block;\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.project .desc {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbackground: #2c98f0;\r\n\topacity: 0;\r\n\ttransition: 0.3s;\r\n}\r\n\r\n.project .desc .con {\r\n\tpadding: 20px;\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\theight: 300px;\r\n}\r\n\r\n.project .desc .con .icon {\r\n\tposition: absolute;\r\n\tbottom: 20px;\r\n\tleft: 20px;\r\n\tright: 20px;\r\n}\r\n\r\n.project .desc .con .icon span {\r\n\tdisplay: inline;\r\n\tpadding-right: 5px;\r\n}\r\n\r\n.project .desc .con .icon span a {\r\n\tcolor: #333333;\r\n\tpadding: 5px;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.project .desc .con .icon i {\r\n\tfont-size: 16px;\r\n\tcolor: #333333;\r\n}\r\n\r\n.project .desc h3 {\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 500;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transform: translate3d(0, -15px, 0);\r\n\ttransform: translate3d(0, -15px, 0);\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.project .desc h3 a {\r\n\tcolor: #fff;\r\n}\r\n\r\n.project .desc span {\r\n\tdisplay: block;\r\n\tcolor: rgba(255, 255, 255, 0.7);\r\n\tfont-size: 13px;\r\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s;\r\n\ttransition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\r\n\t-webkit-transform: translate3d(0, 15px, 0);\r\n\ttransform: translate3d(0, 15px, 0);\r\n}\r\n\r\n.project .desc span a {\r\n\tcolor: #000;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.project .desc {\r\n\t\topacity: 1;\r\n\t\tbackground: rgba(0, 0, 0, 0.4);\r\n\t}\r\n\t.project .desc h3 {\r\n\t\tfont-style: 28px;\r\n\t\t-webkit-transform: translate3d(0, 0, 0);\r\n\t\ttransform: translate3d(0, 0, 0);\r\n\t\tcolor: #000;\r\n\t}\r\n\t.project .desc span {\r\n\t\t-webkit-transform: translate3d(0, 0, 0);\r\n\t\ttransform: translate3d(0, 0, 0);\r\n\t}\r\n}\r\n\r\n.project:hover .desc {\r\n\topacity: 1;\r\n}\r\n\r\n.project:hover .desc h3 {\r\n\t-webkit-transform: translate3d(0, 0, 0);\r\n\ttransform: translate3d(0, 0, 0);\r\n}\r\n\r\n.project:hover .desc span {\r\n\t-webkit-transform: translate3d(0, 0, 0);\r\n\ttransform: translate3d(0, 0, 0);\r\n}\r\n\r\n.btn-load-more {\r\n\twidth: 100%;\r\n}\r\n\r\n#colorlib-counter {\r\n\tposition: relative;\r\n\tclear: both;\r\n\tmargin-bottom: 5em;\r\n}\r\n\r\n.colorlib-counters {\r\n\tpadding: 3em 0;\r\n\tbackground-size: cover;\r\n\tbackground-attachment: fixed;\r\n\tbackground-position: center;\r\n\talign-items: stretch;\r\n}\r\n\r\n.colorlib-counters .overlay {\r\n\tz-index: 0;\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbackground: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.colorlib-counters .icon {\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tdisplay: table;\r\n\tmargin: 0 auto;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.colorlib-counters .icon i {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tfont-size: 50px;\r\n\tcolor: #2c98f0;\r\n\tbackground: #fff;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.colorlib-counters .counter-wrap {\r\n\tborder: 1px solid red !important;\r\n}\r\n\r\n.colorlib-counters .colorlib-counter {\r\n\tfont-size: 40px;\r\n\tdisplay: block;\r\n\tcolor: white;\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n\twidth: 100%;\r\n\tfont-weight: 700;\r\n\tmargin-bottom: .3em;\r\n}\r\n\r\n.colorlib-counters .colorlib-counter-label {\r\n\tcolor: rgba(255, 255, 255, 0.7);\r\n\ttext-transform: uppercase;\r\n\tfont-size: 14px;\r\n\tletter-spacing: 5px;\r\n\tmargin-bottom: 2em;\r\n\tdisplay: block;\r\n}\r\n\r\n.colorlib-social {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\ttext-align: center;\r\n}\r\n\r\n.colorlib-social li {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tlist-style: none;\r\n\tdisplay: -moz-inline-stack;\r\n\tdisplay: inline-block;\r\n\tzoom: 1;\r\n\tdisplay: inline;\r\n}\r\n\r\n.colorlib-social li a {\r\n\tfont-size: 22px;\r\n\tcolor: #000;\r\n\tpadding: 10px;\r\n\tdisplay: -moz-inline-stack;\r\n\tdisplay: inline-block;\r\n\tzoom: 1;\r\n\tdisplay: inline;\r\n\tborder-radius: 7px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.colorlib-social li a {\r\n\t\tpadding: 10px 8px;\r\n\t}\r\n}\r\n\r\n.colorlib-social li a:hover {\r\n\tcolor: #2c98f0;\r\n}\r\n\r\n.colorlib-social li a:hover,\r\n.colorlib-social li a:active,\r\n.colorlib-social li a:focus {\r\n\toutline: none;\r\n\ttext-decoration: none;\r\n\tcolor: #2c98f0;\r\n}\r\n\r\n#map {\r\n\twidth: 100%;\r\n\theight: 700px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t#map {\r\n\t\theight: 200px;\r\n\t}\r\n}\r\n\r\n.colorlib-bg-color {\r\n\tbackground: #fafafa;\r\n\tposition: relative;\r\n}\r\n\r\n.pagination {\r\n\tpadding: 0;\r\n}\r\n\r\n.pagination li {\r\n\tmargin: 2px;\r\n}\r\n\r\n.pagination li a {\r\n\tcolor: #000;\r\n\tbackground: transparent;\r\n\tcolor: #000;\r\n\tmargin: 2px;\r\n\tborder-radius: 0;\r\n}\r\n\r\n.pagination li a:first-child {\r\n\tborder-radius: 2px;\r\n}\r\n\r\n.pagination li a:hover,\r\n.pagination li a:focus {\r\n\tbackground: #2c98f0;\r\n\tcolor: #fff;\r\n\tborder: 1px solid #2c98f0;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.pagination li a {\r\n\t\tpadding: 7px 15px;\r\n\t}\r\n}\r\n\r\n.pagination li.active a {\r\n\tbackground: #2c98f0;\r\n\tborder: 1px solid #2c98f0 !important;\r\n}\r\n\r\n.pagination li.active a:hover,\r\n.pagination li.active a:focus {\r\n\tbackground: #2c98f0;\r\n\tcolor: #fff;\r\n\tborder: 1px solid #2c98f0 !important;\r\n}\r\n\r\n.btn {\r\n\tmargin-right: 4px;\r\n\tmargin-bottom: 4px;\r\n\tfont-family: \"Quicksand\", Arial, sans-serif;\r\n\tfont-size: 12px;\r\n\tfont-weight: 400;\r\n\ttext-transform: uppercase;\r\n\tletter-spacing: 1px;\r\n\tborder-radius: 2px;\r\n\ttransition: 0.5s;\r\n\tpadding: 8px 15px !important;\r\n}\r\n\r\n.btn.btn-sm {\r\n\tpadding: 4px 15px !important;\r\n}\r\n\r\n.btn.btn-md {\r\n\tpadding: 8px 20px !important;\r\n}\r\n\r\n.btn.btn-lg {\r\n\tpadding: 18px 36px !important;\r\n}\r\n\r\n.btn:hover,\r\n.btn:active,\r\n.btn:focus {\r\n\tbox-shadow: none !important;\r\n\toutline: none !important;\r\n}\r\n\r\n.btn-primary {\r\n\tbackground: #2c98f0;\r\n\tcolor: #fff;\r\n\tborder: 2px solid #2c98f0;\r\n}\r\n\r\n.btn-primary:hover,\r\n.btn-primary:focus,\r\n.btn-primary:active {\r\n\tbackground: #44a4f2 !important;\r\n\tborder-color: #44a4f2 !important;\r\n}\r\n\r\n.btn-primary.btn-outline {\r\n\tbackground: transparent;\r\n\tcolor: #2c98f0;\r\n\tborder: 2px solid #2c98f0;\r\n}\r\n\r\n.btn-primary.btn-outline:hover,\r\n.btn-primary.btn-outline:focus,\r\n.btn-primary.btn-outline:active {\r\n\tbackground: #2c98f0;\r\n\tcolor: #fff;\r\n}\r\n\r\n.btn-success {\r\n\tbackground: #5cb85c;\r\n\tcolor: #fff;\r\n\tborder: 2px solid #5cb85c;\r\n}\r\n\r\n.btn-success:hover,\r\n.btn-success:focus,\r\n.btn-success:active {\r\n\tbackground: #4cae4c !important;\r\n\tborder-color: #4cae4c !important;\r\n}\r\n\r\n.btn-success.btn-outline {\r\n\tbackground: transparent;\r\n\tcolor: #5cb85c;\r\n\tborder: 2px solid #5cb85c;\r\n}\r\n\r\n.btn-success.btn-outline:hover,\r\n.btn-success.btn-outline:focus,\r\n.btn-success.btn-outline:active {\r\n\tbackground: #5cb85c;\r\n\tcolor: #fff;\r\n}\r\n\r\n.btn-info {\r\n\tbackground: #5bc0de;\r\n\tcolor: #fff;\r\n\tborder: 2px solid #5bc0de;\r\n}\r\n\r\n.btn-info:hover,\r\n.btn-info:focus,\r\n.btn-info:active {\r\n\tbackground: #46b8da !important;\r\n\tborder-color: #46b8da !important;\r\n}\r\n\r\n.btn-info.btn-outline {\r\n\tbackground: transparent;\r\n\tcolor: #5bc0de;\r\n\tborder: 2px solid #5bc0de;\r\n}\r\n\r\n.btn-info.btn-outline:hover,\r\n.btn-info.btn-outline:focus,\r\n.btn-info.btn-outline:active {\r\n\tbackground: #5bc0de;\r\n\tcolor: #fff;\r\n}\r\n\r\n.btn-warning {\r\n\tbackground: #f0ad4e;\r\n\tcolor: #fff;\r\n\tborder: 2px solid #f0ad4e;\r\n}\r\n\r\n.btn-warning:hover,\r\n.btn-warning:focus,\r\n.btn-warning:active {\r\n\tbackground: #eea236 !important;\r\n\tborder-color: #eea236 !important;\r\n}\r\n\r\n.btn-warning.btn-outline {\r\n\tbackground: transparent;\r\n\tcolor: #f0ad4e;\r\n\tborder: 2px solid #f0ad4e;\r\n}\r\n\r\n.btn-warning.btn-outline:hover,\r\n.btn-warning.btn-outline:focus,\r\n.btn-warning.btn-outline:active {\r\n\tbackground: #f0ad4e;\r\n\tcolor: #fff;\r\n}\r\n\r\n.btn-danger {\r\n\tbackground: #d9534f;\r\n\tcolor: #fff;\r\n\tborder: 2px solid #d9534f;\r\n}\r\n\r\n.btn-danger:hover,\r\n.btn-danger:focus,\r\n.btn-danger:active {\r\n\tbackground: #d43f3a !important;\r\n\tborder-color: #d43f3a !important;\r\n}\r\n\r\n.btn-danger.btn-outline {\r\n\tbackground: transparent;\r\n\tcolor: #d9534f;\r\n\tborder: 2px solid #d9534f;\r\n}\r\n\r\n.btn-danger.btn-outline:hover,\r\n.btn-danger.btn-outline:focus,\r\n.btn-danger.btn-outline:active {\r\n\tbackground: #d9534f;\r\n\tcolor: #fff;\r\n}\r\n\r\n.btn-outline {\r\n\tbackground: none;\r\n\tborder: 2px solid gray;\r\n\tfont-size: 16px;\r\n\ttransition: 0.3s;\r\n}\r\n\r\n.btn-outline:hover,\r\n.btn-outline:focus,\r\n.btn-outline:active {\r\n\tbox-shadow: none;\r\n}\r\n\r\n.form-control {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n\tbox-shadow: none;\r\n\tbackground: transparent;\r\n\tborder: transparent;\r\n\tbackground: #f2f3f7;\r\n\theight: 54px;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\ttransition: 0.3s;\r\n\tborder-radius: 0;\r\n}\r\n\r\n.form-control:active,\r\n.form-control:focus {\r\n\toutline: none;\r\n\tbox-shadow: none;\r\n\tborder-color: transparent;\r\n\tbackground: #f0f0f0;\r\n}\r\n\r\n#message {\r\n\theight: 130px;\r\n}\r\n\r\n.colorlib-nav-toggle {\r\n\tcursor: pointer;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.colorlib-nav-toggle.active i::before,\r\n.colorlib-nav-toggle.active i::after {\r\n\tbackground: #000;\r\n}\r\n\r\n.colorlib-nav-toggle.dark.active i::before,\r\n.colorlib-nav-toggle.dark.active i::after {\r\n\tbackground: #000;\r\n}\r\n\r\n.colorlib-nav-toggle:hover,\r\n.colorlib-nav-toggle:focus,\r\n.colorlib-nav-toggle:active {\r\n\toutline: none;\r\n\tborder-bottom: none !important;\r\n}\r\n\r\n.colorlib-nav-toggle i {\r\n\tposition: relative;\r\n\tdisplay: -moz-inline-stack;\r\n\tdisplay: inline-block;\r\n\tzoom: 1;\r\n\tdisplay: inline;\r\n\twidth: 30px;\r\n\theight: 2px;\r\n\tcolor: #000;\r\n\tfont: bold 14px/.4 Helvetica;\r\n\ttext-transform: uppercase;\r\n\ttext-indent: -55px;\r\n\tbackground: #000;\r\n\ttransition: all .2s ease-out;\r\n}\r\n\r\n.colorlib-nav-toggle i::before,\r\n.colorlib-nav-toggle i::after {\r\n\tcontent: '';\r\n\twidth: 30px;\r\n\theight: 2px;\r\n\tbackground: #000;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttransition: 0.2s;\r\n}\r\n\r\n.colorlib-nav-toggle.dark i {\r\n\tposition: relative;\r\n\tcolor: #000;\r\n\tbackground: #000;\r\n\ttransition: all .2s ease-out;\r\n}\r\n\r\n.colorlib-nav-toggle.dark i::before,\r\n.colorlib-nav-toggle.dark i::after {\r\n\tbackground: #000;\r\n\ttransition: 0.2s;\r\n}\r\n\r\n.colorlib-nav-toggle i::before {\r\n\ttop: -7px;\r\n}\r\n\r\n.colorlib-nav-toggle i::after {\r\n\tbottom: -7px;\r\n}\r\n\r\n.colorlib-nav-toggle:hover i::before {\r\n\ttop: -10px;\r\n}\r\n\r\n.colorlib-nav-toggle:hover i::after {\r\n\tbottom: -10px;\r\n}\r\n\r\n.colorlib-nav-toggle.active i {\r\n\tbackground: transparent;\r\n}\r\n\r\n.colorlib-nav-toggle.active i::before {\r\n\ttop: 0;\r\n\t-webkit-transform: rotateZ(45deg);\r\n\ttransform: rotateZ(45deg);\r\n}\r\n\r\n.colorlib-nav-toggle.active i::after {\r\n\tbottom: 0;\r\n\t-webkit-transform: rotateZ(-45deg);\r\n\ttransform: rotateZ(-45deg);\r\n}\r\n\r\n.colorlib-nav-toggle {\r\n\tposition: fixed;\r\n\tleft: -5px;\r\n\ttop: 0px;\r\n\tz-index: 9999;\r\n\tcursor: pointer;\r\n\topacity: 1;\r\n\tvisibility: hidden;\r\n\tpadding: 20px;\r\n\ttransition: 0.5s;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.colorlib-nav-toggle {\r\n\t\topacity: 1;\r\n\t\tvisibility: visible;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n\t.col-xxs-12 {\r\n\t\tfloat: none;\r\n\t\twidth: 100%;\r\n\t}\r\n}\r\n\r\n.row-bottom-padded-lg {\r\n\tpadding-bottom: 7em;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.row-bottom-padded-lg {\r\n\t\tpadding-bottom: 1em;\r\n\t}\r\n}\r\n\r\n.row-bottom-padded-md {\r\n\tpadding-bottom: 3em;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.row-bottom-padded-md {\r\n\t\tpadding-bottom: 1em;\r\n\t}\r\n}\r\n\r\n.row-bottom-padded-sm {\r\n\tpadding-bottom: 1em;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.row-bottom-padded-sm {\r\n\t\tpadding-bottom: 1em;\r\n\t}\r\n}\r\n\r\n.row-pt-md {\r\n\tpadding-top: 3em;\r\n}\r\n\r\n.col-padding {\r\n\tpadding: 10px !important;\r\n}\r\n\r\n/* .js .animate-box {\r\n\topacity: 0;\r\n} */\r\n\r\n/* Buy me a coffe button css*/\r\n\r\n.bmc-button img {\r\n\twidth: 27px !important;\r\n\tmargin-bottom: 0px !important;\r\n\tbox-shadow: none !important;\r\n\tborder: none !important;\r\n\tvertical-align: middle !important;\r\n}\r\n\r\n.bmc-button {\r\n\tline-height: 36px !important;\r\n\theight: 37px !important;\r\n\ttext-decoration: none !important;\r\n\tdisplay: inline-flex !important;\r\n\tcolor: #FFFFFF !important;\r\n\tbackground-color: #000 !important;\r\n\tborder-radius: 3px !important;\r\n\tborder: 1px solid transparent !important;\r\n\tpadding: 1px 9px !important;\r\n\tfont-size: 22px !important;\r\n\tletter-spacing: 0.6px !important;\r\n\tbox-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;\r\n\t-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;\r\n\tmargin: 0 auto !important;\r\n\tfont-family: 'Cookie', cursive !important;\r\n\tbox-sizing: border-box !important;\r\n\ttransition: 0.3s all linear !important;\r\n}\r\n\r\n.bmc-button:hover,\r\n.bmc-button:active,\r\n.bmc-button:focus {\r\n\t-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;\r\n\ttext-decoration: none !important;\r\n\tbox-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;\r\n\topacity: 0.85 !important;\r\n\tcolor: #FFFFFF !important;\r\n}\r\n\r\n.badge-secondary {\r\n\tmargin-left: 2px;\r\n\tmargin-right: 2px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    \n    <app-sidebar></app-sidebar>\n\n    <router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'raghuram07 - Portfolio';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//TODO : 
// Highlight the feild in the nav bar based on the section 
// Education and experience section time line laaga vundali
// Projects display marchali


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _AddOnComponents_skillscomp_skillscomp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AddOnComponents/skillscomp/skillscomp.component */ "./src/app/AddOnComponents/skillscomp/skillscomp.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _AddOnComponents_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AddOnComponents/dialog/dialog.component */ "./src/app/AddOnComponents/dialog/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
                _AddOnComponents_skillscomp_skillscomp_component__WEBPACK_IMPORTED_MODULE_9__["SkillscompComponent"],
                _AddOnComponents_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DialogComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"]
            ],
            entryComponents: [_AddOnComponents_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DialogComponent"]],
            exports: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"]],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService.prototype.setProjectData = function (data) {
        debugger;
        this.projectData = data;
    };
    AppService.prototype.getProjectData = function () {
        debugger;
        return this.projectData;
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/data/profile.json":
/*!***********************************!*\
  !*** ./src/app/data/profile.json ***!
  \***********************************/
/*! exports provided: username, image_path, intro, banner, skills, workExperience, education, certificates, mail, github, githubusername, Leetcode, linkdin, hackerRank, geeksforgeeks, instagram, quora, announce, resumeLink, default */
/***/ (function(module) {

module.exports = {"username":"I'm, Raghuram Damarancha","image_path":"/assets/images/profile.jpg","intro":["Hi, Welcome to my portfolio."," ","I am a computer science graduate student at University of Dayton, Dayton , Ohio."," ","I have 3 years of work experience in .NET, Angular, and AWS, backed by strong computer science fundamentals. My experience has helped me develop expert knowledge of software development, a strong sense of responsibility, and an understanding of work culture. I am highly motivated to continue learning and improving my skills."," ","I'm set to graduate in December 2024 and am currently seeking Fall 2024 internships.","","Please go through my Profile and If you find my profile interesting, please consider me for internship or full-time opportunities. If not, I would greatly appreciate any suggestions on areas I should improve and the approach I should follow to improve my self as a software developer.",""],"banner":"Show Some Banner","skills":[{"label":"DS and Algo/Problem Solving","value":"60","description":"I have been Practicing these in different platforms like leetcode, hackerank etc"},{"label":"MongoDB/ExpressJS/NodeJS","value":"40","description":"Did personal projects like movie db, angular authenticaion application etc"},{"label":"Python/Django/MySQL","value":"40","description":"Learning now as a masters student in University of Dayton"},{"label":"AWS: SNS/SQS/S3/Dynamodb","value":"50","description":"I have experience in working on AWS services like SNS/SQS, amazon S3, Dynamodb."},{"label":"Bootstrap/HTML/JavaScript/Typescript","value":"65","description":""},{"label":".Net/Angular/NUnit","value":"75","description":"Worked on .Net, Angular these for 2 years as a software engineer.Used NUnit for unit testing in .Net"},{"label":"Word/Excel","value":"70","description":"Learnt these Microsoft products during my undergraduation"},{"label":"Git/Trello/Postman/ChromeDevTools","value":"50","description":""},{"label":"Documentation Writing/Communication","value":"60","description":""}],"workExperience":[{"company_name":"5y Business Solutions / BOS Framework","designation":"Software Developement","time_period":"May 2022 - June 2023","summary":["Worked on a Stocks broker web application. It involves managing the user's portfolio based on the trade of stocks.","Worked on providing APIs to the mobile application. The application involves the diet and training management for football players based on user subscriptions.","Worked in System Design, System Testing, API Integration and Cloud Services for the deployment and production of the application."],"tech_stack":"NetCore, WebApi, JQuery, StripePayments, Angular, MySQL, SNS SQS, Nunit"},{"company_name":"Techigai","designation":"Software Developement Assosiate","time_period":"Jan 2021 - April 2022","summary":["Worked on an e-learning platform for scheduling online classes and content for participants. It involves Online media Streaming and real-time communication using AWS services.","Worked on a referral portal where patients are referred to a hospital's doctors."],"tech_stack":"NetFramework, NetCore WebApi, JQuery,Angular, SQL Server"}],"education":[{"degree":"Masters in Computer Science","institute":"University of Dayton, Dayton Ohio US","summary":["Courses undertaken Deep Learning, Visual Computing and Mixed Reality, Operating Systems, Software Engineering, Data Strucutures and Algorithms, Database Management Systems"]},{"degree":"Bachelors in Computer Science and Engineering","institute":"CMR Technical Campus, Hyderabad Telangana India","summary":["Courses undertaken Data Strucutures and Algorithms, Operating Systems, Database Management Systems, Networks, Distributed Computing, Object Oriented Programming, Computer Architecture."]},{"degree":"Intermediate","institute":"Board of Secondary Education, Telangana","summary":["Courses undertaken Physics, Chemistry and Mathematics."]}],"certificates":[{"title":"AWS","image":"/assets/images/profile.jpg","description":"Hello "},{"title":"AWS","image":"/assets/images/profile.jpg","description":"Hello "},{"title":"AWS","image":"/assets/images/profile.jpg","description":"Hello "}],"mail":"raghuramreddy1319@gmail.com","github":"https://github.com/Raghuram07","githubusername":"Raghuram07","Leetcode":"https://leetcode.com/raghuram07/","linkdin":"https://www.linkedin.com/in/raghuram-reddy-damarancha-074564149/","hackerRank":"https://www.hackerrank.com/raghuramreddy07","geeksforgeeks":"https://auth.geeksforgeeks.org/user/raghuramreddy2599","instagram":"https://www.instagram.com/raghuram_damarancha/","quora":"https://www.quora.com/profile/Damarancha-Raghuram","announce":[],"resumeLink":"https://drive.google.com/file/d/1SHpklMmO6JH_eWo_V61kZ6n18uj6GgM2/view?usp=sharing"};

/***/ }),

/***/ "./src/app/data/projects.json":
/*!************************************!*\
  !*** ./src/app/data/projects.json ***!
  \************************************/
/*! exports provided: projectTypes, projects, default */
/***/ (function(module) {

module.exports = {"projectTypes":[{"type":"Personal Projects","summary":"These are personal projects I independently undertook.","code":0},{"type":"College Projects","summary":"These projects were undertaken of my academic coursework.","code":1},{"type":"Basic Projects","summary":"Early-stage projects completed during my college years.","code":2}],"projects":[{"title":"Save Current User Contacts","type":2,"description":["Web-Based Contact Management with Secure Login."],"summary":"This web application offers users the ability to securely save and manage their contacts. By logging in, users can access their personal contact database, add new contacts, and view existing ones. It provides a convenient and organized way to store and retrieve contact information, ensuring that users can easily keep track of their important connections.","image_path":"/assets/images/HackerRankProfile.png","demoURL":"https://raghuram07.github.io/","source_code":"https://github.com/Raghuram07/raghuram07.github.io","technologies":["Angular","Css","Html"]},{"title":"MoviesDb","type":2,"description":["This is a web application which fetches the info from an API and displays"],"summary":"This web application, powered by Express.js, offers a straight forward API to retrieve movie details based on a title. Upon receiving a request, it seamlessly interfaces with a third-party API to fetch relevant data and then presents it in an organized and user-friendly format. Its primary function is to serve as a bridge between users and movie information, making it easy to access and display data, all while maintaining a clean and efficient design.","image_path":"/assets/images/MovieDb.png","demoURL":"","technologies":["Express.js","Javascript","hrml","css"]},{"title":"Daksha School Web Page","type":2,"description":["Daksha School: Building Webpages to Learn Web Development."],"summary":"Daksha is a school project I initiated, where I've been building static webpages to practice and enhance my HTML, CSS, Bootstrap, and basic JavaScript skills. This hands-on approach has allowed me to apply my knowledge and create functional web content. Daksha serves as a tangible representation of my ongoing web development journey","image_path":"/assets/images/Daksha.png","demoURL":"","technologies":["Html","css","bootstrap"]},{"title":"Premium Content","type":0,"description":["Secure Content Access with Angular and Node.js: A JWT Authentication Project"],"summary":"A dynamic Angular and Node server-based application that seamlessly delivers premium content exclusively to authenticated users. This application is a dual-tiered content access system. Public users can access general content, while logged-in users gain access to premium content through Google authentication. This project served as an immersive learning experience in authentication and authorization mechanisms, specifically focusing on the implementation of JWT (JSON Web Tokens). By building this application, I not only mastered the intricacies of user access control but also gained practical insights into integrating third-party authentication services and ensuring secure and seamless user experiences.","image_path":"/assets/images/AngularAuth.png","demoURL":"","technologies":["Express.js","Angular","Google SSO"]},{"title":"Portfolio","type":0,"description":["My Software Journey Portfolio"],"summary":"I built this portfolio site to effectively showcase my personal and professional software skills. It serves as a centralized platform where I can exhibit my work, highlight my accomplishments, and demonstrate my capabilities to potential employers, collaborators, and the broader tech community. This site helps me make a compelling case for your expertise and provides a valuable resource for networking and career advancement in the software development field.","image_path":"/assets/images/Portfolio.png","demoURL":"","technologies":["Angular","Typescript"]},{"title":"Mini Cart","type":1,"description":["Android e-commerce app for hassle-free shopping with secure login"],"summary":"This Android e-commerce application enables users to seamlessly log in and place orders for a wide range of readily available items. With user-friendly navigation and secure authentication, it offers a convenient shopping experience, allowing customers to browse, select, and purchase products with ease. Whether it's everyday essentials or special purchases, this app provides a convenient platform for users to access and acquire their desired items","image_path":"","demoURL":"","technologies":["Java","Android studio","Fire base"]},{"title":"Driver Drowsiness","type":1,"description":["This application utilizes OpenCV technology to detect driver drowsiness."],"summary":"This application leverages OpenCV's computer vision capabilities to detect instances of driver drowsiness. Using real-time camera input, it analyzes facial features and eye movements to identify signs of fatigue, such as closed eyes or prolonged blinking. When drowsiness is detected, the system can issue alerts, helping to prevent potential accidents on the road. This innovative application serves as a valuable tool in enhancing driver safety by addressing the critical issue of drowsy driving.","image_path":"/assets/images/driver_closedEyes.jpg","demoURL":"","technologies":["Python","Nueral Networks","Tensorflow"]}]};

/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about{\r\n    display: flex;\r\n    gap: 50px;\r\n    display: flex;\r\n    background-color: rgb(240, 82, 9);\r\n    color: white;\r\n    padding: 40px;\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    .author-img{\r\n      border-radius: 215px;\r\n      height: auto;\r\n      width: 100%;\r\n    }\r\n    .about-div{\r\n      margin-top: 50px;\r\n      width: 70%;\r\n    }\r\n    .about-desc p,h1 {\r\n      white-space: pre-wrap;\r\n      overflow-wrap: break-word;\r\n      color: white;\r\n    }\r\n    .intoDiv{\r\n      padding: 10px; /* Padding for better readability */\r\n      margin: 20px auto; /* Centers the container and adds top/bottom margin */\r\n      white-space: pre-wrap; /* Preserves whitespace and line breaks */\r\n      overflow-wrap: break-word; /* Allows long words to be broken and wrapped onto the next line */\r\n      box-sizing: border-box; \r\n    }\r\n    .typed-intro {\r\n      -webkit-animation: typing 3s steps(30, end), blink-caret .75s step-end infinite;\r\n              animation: typing 3s steps(30, end), blink-caret .75s step-end infinite;\r\n      font-size: large;\r\n    }\r\n}\r\n\r\n.box{\r\n\r\n    margin-left: -15px;\r\n    margin-right: 65px;\r\n}\r\n\r\n.iframes{\r\n    display: flex;\r\n    align-items: baseline;\r\n    justify-content: space-around;\r\n\r\n    .iframe{\r\n      width: 100%;\r\n      height: auto;\r\n      border: black;\r\n      border-bottom: lightslategray 2px solid;\r\n      border-radius: 10px;\r\n  }\r\n}\r\n\r\n.prog-profiles{\r\nbackground-color: rgb(185, 228, 233);\r\n}\r\n\r\n.top-right{\r\n  background-color: rgb(15, 152, 249);\r\n  top: 10px;\r\n  right: 50px;\r\n  border-radius: 6px;\r\n  position: fixed;\r\n  color: white;\r\n  z-index: 10000;\r\n  }\r\n\r\n/* Animation for typing effect */\r\n\r\n@-webkit-keyframes typing {\r\n    from {\r\n      width: 0;\r\n    }\r\n    to {\r\n      width: 100%;\r\n    }\r\n  }\r\n\r\n@keyframes typing {\r\n    from {\r\n      width: 0;\r\n    }\r\n    to {\r\n      width: 100%;\r\n    }\r\n  }\r\n\r\n/* Cursor animation */\r\n\r\n@-webkit-keyframes blink-caret {\r\n    from, to {\r\n      border-color: transparent;\r\n    }\r\n    50% {\r\n      border-color: rgb(4, 3, 1);\r\n    }\r\n  }\r\n\r\n@keyframes blink-caret {\r\n    from, to {\r\n      border-color: transparent;\r\n    }\r\n    50% {\r\n      border-color: rgb(4, 3, 1);\r\n    }\r\n  }\r\n\r\n.topnav a.active {\r\n    color: red; /* or any style you prefer */\r\n  }\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .iframes{ \r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n  }\r\n\r\n  \r\n\r\n  \r\n  "

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!--About Me -->\r\n<!-- About Me Section -->\r\n<div>\r\n  <a href=\"{{ profileData.resumeLink }}\" target=\"_blank\" class=\"top-right\" mat-raised-button>View Resume</a>\r\n  </div> \r\n<section class=\"colorlib-about\" data-section=\"about\" id=\"about\">\r\n  <div class=\"colorlib-narrow-content about\">\r\n    <div>\r\n      <img class=\"author-img\" src=\"../../assets/images/profile.jpg\" />\r\n      <!--<h1 id=\"colorlib-logo\"><a routerLink=\"/\">Raghuram</a></h1>-->\r\n    </div>\r\n    <div class=\"row about-div\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row row-bottom-padded-sm animate-box\" data-animate-effect=\"fadeInLeft\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"about-desc\">\r\n              <h1><strong>{{ UserName}}</strong></h1>\r\n              <hr />\r\n              <div class=\"intoDiv\">\r\n                <!-- Use pre-wrap to handle whitespace and line breaks -->\r\n                <p class=\"typed-intro\" [innerText]=\"itemIntro\">{{itemIntro}}</p>\r\n              </div>\r\n            <!--  <p id=\"typed-intro\"></p>  Display typed text here -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Other content -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n  <!-- ----Skills-------------- -->\r\n  <section  data-section=\"skills\" id=\"skills\">\r\n    <div class=\"colorlib-narrow-content skills\">\r\n      <div class=\"row\">\r\n        <div\r\n          class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\"\r\n          data-animate-effect=\"fadeInLeft\"\r\n        >\r\n          <!-- <span class=\"heading-meta\">My Specialty</span> -->\r\n          <div class=\"about-desc\">\r\n            <h1>Skills</h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <p>\r\n        Some of the significant aptitudes which will assist me with achieving\r\n        your objectives.\r\n      </p>\r\n      <div id=\"skills\" class=\"row\">\r\n        <div\r\n          class=\"col-md-6 animate-box\"\r\n          data-animate-effect=\"fadeInLeft\"\r\n          *ngFor=\"let skill of profileData.skills\"\r\n        >\r\n          <div\r\n            class=\"progress-wrap\"\r\n            matTooltip=\"{{ skill.description }}\"\r\n            matTooltipPosition=\"above\"\r\n          >\r\n            <h3 style=\"font-weight: 500\">{{ skill.label }}</h3>\r\n            <div class=\"progress\">\r\n              <div\r\n                class=\"progress-bar color-1\"\r\n                role=\"progressbar\"\r\n                aria-valuenow=\"50\"\r\n                aria-valuemin=\"0\"\r\n                aria-valuemax=\"100\"\r\n                [style.width]=\"skill.value + '%'\"\r\n              >\r\n                <span>{{ skill.value }}%</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- ----Programming Profiles-------------- -->\r\n  <section class=\"prog-profiles\" data-section=\"progProfiles\" id=\"progProfiles\">\r\n    <div class=\"colorlib-narrow-content\">\r\n      <div class=\"row\">\r\n        <div class=\"about-desc\">\r\n          <h1>Programming Profiles</h1>\r\n        </div>\r\n        <p>\r\n          Here are the some of platforms I used to improve my problem solving\r\n          skills\r\n        </p>\r\n      </div>\r\n      <!--Iframe divisions-->\r\n      <div class=\"row iframes\">\r\n        <div class=\"col-md-4 animate-box box\" data-animate-effect=\"fadeInRight\">\r\n          <div class=\"card\">\r\n            <a href=\"https://leetcode.com/raghuram07/\">\r\n              <h4>Leet Code :</h4>\r\n            </a>\r\n            <a href=\"https://leetcode.com/raghuram07/\">\r\n              <iframe\r\n                class=\"iframe\"\r\n                src=\"https://leetcard.jacoblin.cool/raghuram07\"\r\n                title=\"leetcard\">\r\n              </iframe>\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 animate-box box\" data-animate-effect=\"fadeInRight\">\r\n          <div class=\"card\">\r\n            <a href=\"https://www.hackerrank.com/raghuramreddy07\">\r\n              <h4>Hacker Rank :</h4>\r\n            </a>\r\n            <a href=\"https://www.hackerrank.com/raghuramreddy07\">\r\n              <img\r\n                class=\"iframe\"\r\n                src=\"../../assets/images/HackerRankProfile.png\"\r\n                title=\"leetcard\"\r\n              />\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4 animate-box box\" data-animate-effect=\"fadeInRight\">\r\n          <div class=\"card\">\r\n            <a href=\"https://www.credly.com/badges/b71fd79b-7377-48b9-8665-9483070b249d/linked_in?t=sdndjm\">\r\n              <h4>AWS DEV Associate :</h4>\r\n            </a>\r\n            <a href=\"https://www.credly.com/badges/b71fd79b-7377-48b9-8665-9483070b249d/linked_in?t=sdndjm\">\r\n              <img\r\n                class=\"iframe\"\r\n                src=\"../../assets/images/AWSCertificate.png\"\r\n                title=\"AWS Certificate\"\r\n              />\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- ----Personal Projects-------------- -->\r\n  <app-projects></app-projects>\r\n  <!-- ------------Work Experience--------- -->\r\n  <section class=\"colorlib-experience\" data-section=\"experience\" id=\"experience\">\r\n    <div class=\"colorlib-narrow-content\">\r\n      <div class=\"row\">\r\n        <div\r\n          class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\"\r\n          data-animate-effect=\"fadeInLeft\"\r\n        >\r\n          <div class=\"about-desc\">\r\n            <h1>\r\n              Work\r\n              <span style=\"color: rgb(15, 152, 249)\">Experience</span>\r\n            </h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"timeline-centered\">\r\n            <article\r\n              class=\"timeline-entry animate-box\"\r\n              data-animate-effect=\"fadeInLeft\"\r\n              *ngFor=\"let workexp of profileData.workExperience\"\r\n            >\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon color-1\">\r\n                  <i class=\"fa fa-code\"></i>\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <h2>\r\n                    <a href=\"#\">{{ workexp.company_name }}&nbsp;</a>\r\n                    <span>{{ workexp.time_period }}</span>\r\n                  </h2>\r\n                  <p>\r\n                    <strong>{{ workexp.designation }}</strong>\r\n                  </p>\r\n                  <ul type=\"square\" *ngFor=\"let item of workexp.summary\">\r\n                    <li>\r\n                      <span style=\"font-weight: 500\">{{ item }}</span>\r\n                    </li>\r\n                  </ul>\r\n                  <span>Tools: {{ workexp.tech_stack }}</span>\r\n                </div>\r\n              </div>\r\n            </article>\r\n            <article\r\n              class=\"timeline-entry begin animate-box\"\r\n              data-animate-effect=\"fadeInBottom\"\r\n            >\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon color-none\"></div>\r\n              </div>\r\n            </article>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- ------------Education--------- -->\r\n  <section class=\"colorlib-experience\" data-section=\"education\" id=\"education\">\r\n    <div class=\"colorlib-narrow-content\">\r\n      <div class=\"row\">\r\n        <div\r\n          class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\"\r\n          data-animate-effect=\"fadeInLeft\"\r\n        >\r\n          <div class=\"about-desc\">\r\n            <h1>Education</h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"timeline-centered\">\r\n            <article\r\n              class=\"timeline-entry animate-box\"\r\n              data-animate-effect=\"fadeInLeft\"\r\n              *ngFor=\"let education of profileData.education\"\r\n            >\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon color-1\">\r\n                  <i class=\"fa fa-code\"></i>\r\n                </div>\r\n                <div class=\"timeline-label\">\r\n                  <h2>{{ education.degree }}</h2>\r\n                  <p>\r\n                    <strong>{{ education.institute }}</strong>\r\n                  </p>\r\n                  <div *ngFor=\"let item of education.summary\">\r\n                    <span style=\"font-weight: 500\">{{ item }}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </article>\r\n            <article\r\n              class=\"timeline-entry begin animate-box\"\r\n              data-animate-effect=\"fadeInBottom\"\r\n            >\r\n              <div class=\"timeline-entry-inner\">\r\n                <div class=\"timeline-icon color-none\"></div>\r\n              </div>\r\n            </article>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- ------Contact-------- -->\r\n  <section class=\"colorlib-contact\" data-section=\"contact\" id=\"contact\">\r\n    <div class=\"colorlib-narrow-content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div\r\n            class=\"row row-bottom-padded-sm animate-box\"\r\n            data-animate-effect=\"fadeInLeft\"\r\n          >\r\n            <div class=\"about-desc\">\r\n              <h1>Contact</h1>\r\n            </div>\r\n            <p>\r\n              On the off chance that you might want to connect with me, don't\r\n              hesitate to send me an email at\r\n              <strong>{{ profileData.mail }}</strong>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- ----------Footer----------- -->\r\n  <section class=\"colorlib-footer\" data-section=\"footer\">\r\n    <div class=\"colorlib-narrow-content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div\r\n            class=\"row row-bottom-padded-sm animate-box\"\r\n            data-animate-effect=\"fadeInLeft\"\r\n          >\r\n            <div class=\"hire\">\r\n              <div align=\"center\">\r\n                <p style=\"font-size: 30px; margin-bottom: 0px\">\r\n                  <a\r\n                    href=\"{{ profileData.instagram }}\"\r\n                    style=\"color: black\"\r\n                    class=\"fa fa-instagram\"\r\n                  ></a>\r\n                  &nbsp;&nbsp;&nbsp;&nbsp;\r\n                  <a\r\n                    href=\"{{ profileData.linkdin }}\"\r\n                    style=\"color: black\"\r\n                    Work\r\n                    class=\"fa fa-linkedin\"\r\n                  ></a>\r\n                  &nbsp;&nbsp;&nbsp;&nbsp;\r\n                  <a\r\n                    href=\"{{ profileData.quora }}\"\r\n                    style=\"color: black\"\r\n                    class=\"fa fa-quora\"\r\n                  ></a>\r\n                  &nbsp;&nbsp;&nbsp;&nbsp;\r\n                  <a\r\n                    href=\"{{ profileData.github }}\"\r\n                    style=\"color: black\"\r\n                    class=\"fa fa-github\"\r\n                  ></a>\r\n                </p>\r\n              </div>\r\n              <p style=\"text-align: center; margin-bottom: -20px\">\r\n                <br />\r\n                <strong>\r\n                  &copy; No Copyrights, feel free to use this template.\r\n                </strong>\r\n              </p>\r\n              <br />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n\r\n<!-- POPUP -->\r\n<!-- <button mat-button (click)=\"openDialog()\">Open dialog</button> -->\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_profile_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/profile.json */ "./src/app/data/profile.json");
var _data_profile_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/profile.json */ "./src/app/data/profile.json", 1);
/* harmony import */ var _data_projects_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/projects.json */ "./src/app/data/projects.json");
var _data_projects_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/projects.json */ "./src/app/data/projects.json", 1);
/* harmony import */ var _AddOnComponents_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../AddOnComponents/dialog/dialog.component */ "./src/app/AddOnComponents/dialog/dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 // Assuming profileData is loaded from a JSON file
 // Assuming projectData is loaded from a JSON file

var HomeComponent = /** @class */ (function () {
    function HomeComponent(appservice, route, router, dialog) {
        this.appservice = appservice;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.UserName = "";
        this.currentIndex2 = 0;
        this.profileData = _data_profile_json__WEBPACK_IMPORTED_MODULE_4__;
        this.projectData = _data_projects_json__WEBPACK_IMPORTED_MODULE_5__;
        this.itemIntro = '';
        this.currentIndex = 0;
        this.currentIndex2 = 0;
        // Check if there are announcements and open a dialog if needed
        if (_data_profile_json__WEBPACK_IMPORTED_MODULE_4__.announce.length !== 0) {
            this.openDialog(_data_profile_json__WEBPACK_IMPORTED_MODULE_4__.announce);
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.typeIntro(); // Call method to start typing animation on component initialization
    };
    // Method to open dialog with announcement data
    HomeComponent.prototype.openDialog = function (announcement) {
        this.dialog.open(_AddOnComponents_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            data: announcement,
        });
    };
    // Method to toggle project data and navigate to project component
    HomeComponent.prototype.toggleProject = function (val) {
        if (val === 'webprojects') {
            this.appservice.setProjectData(_data_projects_json__WEBPACK_IMPORTED_MODULE_5__['webProject']);
        }
        else if (val === 'androidprojects') {
            this.appservice.setProjectData(_data_projects_json__WEBPACK_IMPORTED_MODULE_5__['androidProject']);
        }
        else if (val === 'softwareprojects') {
            this.appservice.setProjectData(_data_projects_json__WEBPACK_IMPORTED_MODULE_5__['softwareProject']);
        }
        this.router.navigate(['/projects', { category: val }]);
    };
    // Method to simulate typing animation for introduction text
    HomeComponent.prototype.typeIntro = function () {
        var text = this.profileData.intro.join("\n"); // Combine intro array into a single string
        var interval = setInterval(function () {
            if (this.currentIndex < text.length) {
                this.itemIntro += text.charAt(this.currentIndex);
                this.currentIndex++;
            }
            else {
                clearInterval(interval);
            }
        }.bind(this), 15);
        var userName = this.profileData.username;
        var intervalU = setInterval(function () {
            if (this.currentIndex2 < userName.length) {
                this.UserName += userName.charAt(this.currentIndex2);
                this.currentIndex2++;
            }
            else {
                clearInterval(intervalU);
            }
        }.bind(this), 50);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".proj-image{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.proj-summary{\r\n    display: inline-block;\r\n    /* margin: 26px; */\r\n    padding: 10px;\r\n}\r\n.proj-tech{\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    gap: 14px;\r\n}\r\n.tech-button{\r\n    background-color: #6abdea;\r\n    border-radius: 8px;\r\n    font-size: 12px;\r\n    padding: 4px;\r\n    border: none;\r\n    padding-left: 8px;\r\n    padding-right: 8px;\r\n    font-family: serif;\r\n}"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"prog-profiles\" data-section=\"personalProj\" id=\"personalProj\">\n  <div class=\"colorlib-narrow-content\">\n    <div class=\"row\">\n      <div class=\"about-desc\">\n        <br />\n        <h1>Personal Projects</h1>\n      </div>\n      <p>\n        Here are the some of personal and college projects I have done (IN\n        PROGRESS)\n      </p>\n    </div>\n    <!--Project Descriptions divisions-->\n    <mat-accordion *ngFor=\"let projectType of projectData.projectTypes\">\n      <mat-expansion-panel\n        [expanded]=\"projectType === OpenedProjectType\"\n        (opened)=\"expandPannel(projectType)\"\n        style=\"background-color: lightblue\"\n      >\n        <mat-expansion-panel-header>\n          <mat-panel-title> {{ projectType.type }}</mat-panel-title>\n          <mat-panel-description>\n            {{ projectType.summary }}\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <!--Nested Accordion-->\n        <!--\"project.title === OpenedProject\"-->\n        <mat-accordion *ngFor=\"let project of projectData.projects\">\n          <mat-expansion-panel\n            *ngIf=\"project.type == projectType.code\"\n            [expanded]=\"true\"\n            (opened)=\"expandProject(project.title)\"\n            style=\"background-color: rgb(204, 238, 245)\"\n          >\n            <mat-expansion-panel-header\n              style=\"background-color: rgb(203, 227, 236)\"\n            >\n              <mat-panel-title> {{ project.title }}</mat-panel-title>\n              <mat-panel-description>\n                {{ project.description }}\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <tr class=\"proj-summary row\">\n              <td class=\"col-md-4\">\n                <img class=\"proj-image\" [src]=\"project.image_path\" />\n              </td>\n              <td class=\"col-md-8\">\n                {{ project.summary }}\n              </td>\n            </tr>\n            <div class=\"proj-footer\">\n              <div class=\"proj-tech\">\n                <div *ngFor=\"let tech of project.technologies\">\n                  <button class=\"tech-button\">{{ tech }}</button>\n                </div>\n              </div>\n              <br />\n              <div\n                *ngIf=\"project.source_code != null && project.demoURL != null\"\n              >\n                <label\n                  >Source code :\n                  <a [href]=\"project.source_code\" target=\"_blank\">\n                    click here...</a\n                  ></label\n                >\n                <br />\n                <label\n                  >Live / Video :\n                  <a [href]=\"project.demoURL\" target=\"_blank\">\n                    click here...\n                  </a>\n                </label>\n              </div>\n            </div>\n          </mat-expansion-panel>\n        </mat-accordion>\n        <!--Nested Accordion-->\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _data_projects_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/projects.json */ "./src/app/data/projects.json");
var _data_projects_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/projects.json */ "./src/app/data/projects.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(appservice) {
        this.appservice = appservice;
        this.projectData = _data_projects_json__WEBPACK_IMPORTED_MODULE_2__;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        console.log("Im at ProjectsComponent");
        // this.projectData = this.appservice.getProjectData();
        console.log("This is the projecData", this.projectData);
    };
    ProjectsComponent.prototype.expandPannel = function (projectType) {
        this.OpenedProjectType = projectType;
    };
    ProjectsComponent.prototype.expandProject = function (project) {
        this.OpenedProject = project;
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \r\n  .topnav {\r\n    overflow: hidden;\r\n    background-color: rgba(249, 54, 5, 0.7);/*#eb8c5d;*/\r\n    width: 100%;\r\n    top: 0;\r\n    z-index: 1000;\r\n    position: fixed;\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 10px; /* Adds gap between the elements */\r\n  }\r\n  \r\n  .topnav a {\r\n    display: inline-block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n    transition: background-color 0.3s, color 0.3s;\r\n  }\r\n  \r\n  .topnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n  \r\n  @media screen and (max-width: 600px) {\r\n    /* .topnav {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .topnav a {\r\n      display: block;\r\n      width: 100%;\r\n      text-align: left;\r\n      padding: 14px 16px;\r\n    } */\r\n    .topnav{\r\n      display: none;\r\n    }\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation Bar -->\n<div class=\"topnav\" *ngIf=\"showNavbar\">\n  <a href=\"#about\" data-nav-section=\"about\">About</a>\n  <a href=\"#skills\" data-nav-section=\"skills\">Skills</a>\n  <a href=\"#progProfiles\" data-nav-section=\"progProfiles\">Programming Profile</a>\n  <a href=\"#personalProj\" data-nav-section=\"personalProj\">Personal Projects</a>\n  <a href=\"#experience\" data-nav-section=\"experience\">Work Experience</a>\n  <a href=\"#education\" data-nav-section=\"education\">Education</a>\n  <a href=\"#contact\" data-nav-section=\"contact\">Contact</a>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.showNavbar = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.onWindowScroll = function () {
        var verticalOffset = document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.showNavbar = verticalOffset > 100;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SidebarComponent.prototype, "onWindowScroll", null);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ANG REACT\ANGULAR\Raghuram Damarancha\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map