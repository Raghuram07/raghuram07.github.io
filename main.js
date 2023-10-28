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

module.exports = "/* =======================================================\n*\n* \tTemplate Style \n*\tEdit this section\n*\n* ======================================================= */\n\nbody {\n\tfont-family: \"Quicksand\", Arial, sans-serif;\n\tfont-weight: 400;\n\tfont-size: 15px;\n\tline-height: 1.8;\n\tcolor: rgba(0, 0, 0, 0.7);\n}\n\n@media screen and (max-width: 992px) {\n\tbody {\n\t\tfont-size: 16px;\n\t}\n\th2 {\n\t\ttext-align: center;\n\t}\n\tcanvas {\n\t\tbackground: #EEE;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t}\n}\n\ncanvas {\n\tbackground: #EEE;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n}\n\na {\n\tcolor: #2c98f0;\n\ttransition: 0.5s;\n}\n\na:hover,\na:active,\na:focus {\n\tcolor: #2c98f0;\n\toutline: none;\n\ttext-decoration: none !important;\n}\n\np {\n\tmargin-bottom: 1.5em;\n\tcolor: black;\n\tfont-family: 'Montserrat', sans-serif;\n}\n\nx {\n\tmargin-bottom: 1.5em;\n\tbackground-color: lightblue;\n\tcolor: black;\n\t-webkit-backface-visibility: visible;\n\t        backface-visibility: visible;\n}\n\nh1,\nh4,\nh5,\nh6 {\n\tcolor: #000;\n\tfont-family: \"Playfair Display\", Georgia, serif;\n\tfont-weight: 400;\n\tmargin: 0 0 30px 0;\n}\n\nh2 {\n\tcolor: #000;\n\tfont-family: \"Playfair Display\", Georgia, serif;\n\tfont-weight: 200;\n\tmargin: 0 0 20px 0;\n}\n\nh3 {\n\tcolor: #000;\n\tfont-family: \"Playfair Display\", Georgia, serif;\n\tfont-weight: 200;\n\tmargin: 0 0 30px 0;\n}\n\nfigure {\n\tmargin-bottom: 2.5em;\n\tfloat: left;\n\twidth: 100%;\n}\n\nfigure figcaption {\n\tfont-size: 16px;\n\twidth: 80%;\n\tmargin: 20px auto 0px auto;\n\tcolor: #b3b3b3;\n\tfont-style: italic;\n\tfont-family: \"Quicksand\", Arial, sans-serif;\n}\n\n@media screen and (max-width: 480px) {\n\tfigure figcaption {\n\t\twidth: 100%;\n\t}\n}\n\n::-webkit-selection {\n\tcolor: #fff;\n\tbackground: #2c98f0;\n}\n\n::-moz-selection {\n\tcolor: #fff;\n\tbackground: #2c98f0;\n}\n\n::selection {\n\tcolor: #fff;\n\tbackground: #2c98f0;\n}\n\n#colorlib-page {\n\twidth: 100%;\n\toverflow: hidden;\n\tposition: relative;\n}\n\n#colorlib-aside {\n\tpadding-top: 3em;\n\tpadding-bottom: 1px;\n\tfloat: left;\n\twidth: 300px;\n\tposition: fixed;\n\tz-index: 1001;\n\tbackground-color: lightblue;\n\ttransition: 0.5s;\n}\n\n@media screen and (max-width: 768px) {\n\t#colorlib-aside {\n\t\twidth: 300px;\n\t\t-webkit-transform: translateX(-300px);\n\t\ttransform: translateX(-300px);\n\t\tpadding-top: 4em;\n\t\tbackground-color: lightblue;\n\t\theight: auto;\n\t}\n}\n\n#colorlib-aside .author-img {\n\twidth: 150px;\n\theight: 150px;\n\tmargin: 0 auto;\n\tmargin-bottom: 30px;\n\tborder-radius: 50%;\n\tborder: 3px solid white;\n}\n\n#colorlib-aside h1 {\n\tcolor: #000;\n\tfont-family: 'Raleway', sans-serif;\n}\n\n#colorlib-aside .position {\n\tdisplay: block;\n\tmargin-bottom: 2em;\n\tfont-size: 12px;\n\ttext-transform: uppercase;\n}\n\n#colorlib-aside #colorlib-logo {\n\ttext-align: right;\n\tfont-weight: 700;\n\tfont-size: 30px;\n\tmargin-bottom: .5em;\n\tdisplay: block;\n\twidth: 100%;\n}\n\n#colorlib-aside #colorlib-logo a {\n\tdisplay: block;\n\ttext-align: center;\n\tcolor: #000;\n\tpadding-right: .3em;\n}\n\n#colorlib-aside #colorlib-main-menu {\n\tdisplay: block;\n\twidth: 100%;\n}\n\n#colorlib-aside #colorlib-main-menu .collapse {\n\tdisplay: block !important;\n}\n\n#colorlib-aside #colorlib-main-menu ul {\n\ttext-align: center;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n@media screen and (max-width: 768px) {\n\t#colorlib-aside #colorlib-main-menu ul {\n\t\tmargin: 0 0 2em 0;\n\t}\n}\n\n#colorlib-aside #colorlib-main-menu ul li {\n\tmargin: 0 0 10px 0;\n\tpadding: 0;\n\tlist-style: none;\n\tfont-size: 12px;\n\tfont-weight: 500;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n}\n\n#colorlib-aside #colorlib-main-menu ul li a {\n\tcolor: rgba(0, 0, 0, 0.7);\n\ttext-decoration: none;\n\tposition: relative;\n\tpadding: 10px 0;\n\tfont-family: \"Quicksand\", Arial, sans-serif;\n\ttransition: 0.3s;\n}\n\n#colorlib-aside #colorlib-main-menu ul li a:after {\n\tcontent: \"\";\n\tposition: absolute;\n\theight: 1px;\n\tbottom: 7px;\n\tleft: 0;\n\tright: 0;\n\tbackground-color: #2c98f0;\n\tvisibility: hidden;\n\t-webkit-transform: scaleX(0);\n\ttransform: scaleX(0);\n\ttransition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n#colorlib-aside #colorlib-main-menu ul li a:hover {\n\ttext-decoration: none;\n\tcolor: black;\n}\n\n#colorlib-aside #colorlib-main-menu ul li a:hover:after {\n\tvisibility: visible;\n\t-webkit-transform: scaleX(1);\n\ttransform: scaleX(1);\n}\n\n#colorlib-aside #colorlib-main-menu ul li.active a {\n\tcolor: #2c98f0;\n}\n\n#colorlib-aside #colorlib-main-menu ul li.active a:after {\n\tvisibility: visible;\n\t-webkit-transform: scaleX(1);\n\ttransform: scaleX(1);\n}\n\n#colorlib-aside .colorlib-footer {\n\tfont-size: 20px;\n\ttext-align: center;\n\tfont-weight: 400;\n\tcolor: rgba(0, 0, 0, 0.5);\n\tpadding: 0 20px;\n\twidth: 100%;\n}\n\n@media screen and (max-width: 768px) {\n\t#colorlib-aside .colorlib-footer {\n\t\tposition: fixed;\n\t\theight: auto;\n\t}\n}\n\n#colorlib-aside .colorlib-footer span {\n\tdisplay: block;\n}\n\n#colorlib-aside .colorlib-footer ul {\n\tpadding: 0 20px;\n\tmargin: 0 0 10px 0;\n}\n\n#colorlib-aside .colorlib-footer ul li {\n\tpadding: 0 20px;\n\tmargin: 0 0 10px 0;\n\tdisplay: inline;\n\tlist-style: none;\n}\n\n#colorlib-aside .colorlib-footer h3 {\n\tfont-family: inherit;\n\tpadding: 4px;\n}\n\n#colorlib-aside .colorlib-footer h3 a {\n\tcolor: #FF722C;\n\tfont-size: 18px;\n}\n\n#rcorners2 {\n\tborder-radius: 15px;\n\tbackground: black;\n\tpadding: 20px;\n\twidth: 50%;\n\theight: 40px;\n}\n\n#colorlib-aside .colorlib-footer ul li a {\n\tcolor: rgba(255, 255, 255, 0.3);\n\tpadding: 4px;\n}\n\n#colorlib-aside .colorlib-footer ul li a:hover,\n#colorlib-aside .colorlib-footer ul li a:active,\n#colorlib-aside .colorlib-footer ul li a:focus {\n\ttext-decoration: none;\n\toutline: none;\n\tcolor: black;\n}\n\n.container-wrap {\n\tmax-width: 1170px;\n\tmargin: 0 auto;\n}\n\n#colorlib-main {\n\twidth: calc(100% - 300px);\n\tfloat: right;\n\ttransition: 0.5s;\n}\n\n@media screen and (max-width: 768px) {\n\t#colorlib-main {\n\t\twidth: 100%;\n\t\tpadding: 0 1em;\n\t}\n}\n\n#colorlib-hero {\n\tmin-height: 500px;\n\twidth: 100%;\n\tfloat: left;\n\tmargin-bottom: 10em;\n\tclear: both;\n}\n\n#colorlib-hero .flexslider {\n\tborder: none;\n\tz-index: 1;\n\tmargin-bottom: 0;\n}\n\n#colorlib-hero .flexslider .slides {\n\tposition: relative;\n\toverflow: visible;\n}\n\n#colorlib-hero .flexslider .slides li {\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tbackground-position: bottom center;\n\tmin-height: 400px;\n\tposition: relative;\n}\n\n#colorlib-hero .flexslider .flex-control-nav {\n\tbottom: 20px;\n\tz-index: 1000;\n\tleft: 20px;\n\tfloat: left;\n\twidth: auto;\n}\n\n@media screen and (max-width: 768px) {\n\t#colorlib-hero .flexslider .flex-control-nav {\n\t\tright: 20px;\n\t\ttop: 100px;\n\t}\n}\n\n#colorlib-hero .flexslider .flex-control-nav li {\n\tdisplay: block;\n\tmargin-bottom: 10px;\n}\n\n#colorlib-hero .flexslider .flex-control-nav li a {\n\tbackground: rgba(0, 0, 0, 0.5);\n\tbox-shadow: none;\n\twidth: 12px;\n\theight: 12px;\n\tcursor: pointer;\n}\n\n#colorlib-hero .flexslider .flex-control-nav li a.flex-active {\n\tcursor: pointer;\n\tbackground: transparent;\n\tborder: 2px solid #2c98f0;\n}\n\n#colorlib-hero .flexslider .flex-direction-nav {\n\tdisplay: none;\n}\n\n#colorlib-hero .flexslider .slider-text {\n\tdisplay: table;\n\topacity: 0;\n\tmin-height: 500px;\n\tz-index: 9;\n}\n\n#colorlib-hero .flexslider .slider-text>.slider-text-inner {\n\tdisplay: table-cell;\n\tvertical-align: middle;\n\tmin-height: 700px;\n\tpadding: 2.5em;\n\tposition: relative;\n}\n\n@media screen and (max-width: 768px) {\n\t#colorlib-hero .flexslider .slider-text>.slider-text-inner {\n\t\ttext-align: center;\n\t}\n}\n\n#colorlib-hero .flexslider .slider-text>.slider-text-inner h1,\n#colorlib-hero .flexslider .slider-text>.slider-text-inner h2 {\n\tmargin: 0;\n\tpadding: 0;\n\tcolor: black;\n\tfont-family: \"Playfair Display\", Georgia, serif;\n}\n\n#colorlib-hero .flexslider .slider-text>.slider-text-inner h1 {\n\tmargin-bottom: 20px;\n\tfont-size: 60px;\n\tline-height: 1.3;\n\tfont-weight: 700;\n}\n\n@media screen and (max-width: 768px) {\n\t#colorlib-hero .flexslider .slider-text>.slider-text-inner h1 {\n\t\tfont-size: 28px;\n\t}\n}\n\n#colorlib-hero .flexslider .slider-text>.slider-text-inner h2 {\n\tfont-size: 10px;\n\tline-height: 1.5;\n\tmargin-bottom: 30px;\n\tfont-weight: 300;\n\tfont-family: \"Quicksand\", Arial, sans-serif;\n}\n\n#colorlib-hero .flexslider .slider-text>.slider-text-inner h2 a {\n\tcolor: rgba(44, 152, 240, 0.8);\n\tborder-bottom: 1px solid rgba(44, 152, 240, 0.7);\n}\n\n#colorlib-hero .flexslider .slider-text>.slider-text-inner .heading-section {\n\tfont-size: 50px;\n}\n\n@media screen and (max-width: 768px) {\n\t#colorlib-hero .flexslider .slider-text>.slider-text-inner .heading-section {\n\t\tfont-size: 30px;\n\t}\n}\n\n#colorlib-hero .flexslider .slider-text>.slider-text-inner s .colorlib-lead {\n\tfont-size: 20px;\n\tcolor: #fff;\n}\n\n#colorlib-hero .flexslider .slider-text>.slider-text-inner p {\n\tmargin-bottom: 0;\n}\n\n#colorlib-hero .flexslider .slider-text>.slider-text-inner .btn {\n\tfont-size: 12px;\n\ttext-transform: uppercase;\n\tletter-spacing: 2px;\n\tcolor: #000;\n\tpadding: 10px 15px !important;\n\tborder: none;\n\tfont-weight: 400;\n}\n\n#colorlib-hero .flexslider .slider-text>.slider-text-inner .btn.btn-learn {\n\tcolor: #000;\n\tborder: 1px solid #000;\n\tbackground: transparent !important;\n}\n\n#colorlib-hero .flexslider .slider-text>.slider-text-inner .btn.btn-learn:hover {\n\tbackground: transparent !important;\n\tborder: 1px solid #000 !important;\n}\n\n@media screen and (max-width: 768px) {\n\t#colorlib-hero .flexslider .slider-text>.slider-text-inner .btn {\n\t\twidth: 100%;\n\t}\n}\n\nbody.offcanvas {\n\toverflow-x: hidden;\n}\n\nbody.offcanvas #colorlib-aside {\n\t-webkit-transform: translateX(0);\n\ttransform: translateX(0);\n\twidth: 300px;\n\tbackground-color: lightblue;\n\tz-index: 999;\n\tposition: fixed;\n}\n\nbody.offcanvas #colorlib-main,\nbody.offcanvas .colorlib-nav-toggle {\n\ttop: 0;\n\t-webkit-transform: translateX(300px);\n\ttransform: translateX(300px);\n}\n\n.colorlib-narrow-content {\n\tpadding: 0 4.5em;\n}\n\n@media screen and (max-width: 878px) {\n\t.colorlib-narrow-content {\n\t\twidth: 100%;\n\t\tpadding: 0 1em;\n\t}\n}\n\n.no-gutters {\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.colorlib-experience,\n.colorlib-skills,\n.colorlib-education,\n.colorlib-blog,\n.colorlib-work,\n.colorlib-about,\n.colorlib-installation,\n.colorlib-services,\n.colorlib-footer,\n.colorlib-contact {\n\tpadding-top: 2em;\n\tpadding-bottom: 0em;\n\tclear: both;\n\twidth: 100%;\n\tdisplay: block;\n}\n\n@media screen and (max-width: 768px) {\n\t.colorlib-experience,\n\t.colorlib-skills,\n\t.colorlib-education,\n\t.colorlib-blog,\n\t.colorlib-work,\n\t.colorlib-about,\n\t.colorlib-installation,\n\t.colorlib-services,\n\t.colorlib-contact {\n\t\tpadding-top: 2em;\n\t\tpadding-bottom: 0em;\n\t}\n}\n\n#colorlib-footer2 {\n\tbackground: black;\n\twidth: 100%;\n\tpadding-bottom: 3em;\n\tpadding-top: 2em;\n\tpadding-right: 2em;\n}\n\n#colorlib-footer2 .h2 {\n\tcolor: red;\n\ttext-align: center;\n}\n\n.author-img {\n\tbackground-size: cover;\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n\tposition: relative;\n}\n\n.colorlib-heading {\n\tfont-size: 18px;\n\tmargin-bottom: 2em;\n\tfont-weight: 700;\n\ttext-transform: uppercase;\n\tletter-spacing: 5px;\n\tline-height: 1.8;\n\tposition: relative;\n}\n\n.colorlib-heading span {\n\tdisplay: block;\n}\n\n@media screen and (max-width: 768px) {\n\t.colorlib-heading {\n\t\tmargin-bottom: 2em;\n\t}\n}\n\n.heading-meta {\n\tmargin-bottom: 15px;\n\tdisplay: block;\n\tfont-size: 10px;\n\ttext-transform: uppercase;\n\tcolor: #999999;\n\tfont-weight: 500;\n\tletter-spacing: 5px;\n}\n\n.about-img {\n\twidth: 100%;\n\theight: 600px;\n\tmargin-bottom: 10px;\n\tmargin-left: 10px;\n}\n\n.about-desc h3 {\n\tfont-size: 18px;\n\ttext-transform: uppercase;\n\tletter-spacing: 5px;\n\tfont-weight: 500;\n}\n\n.about-desc h1 {\n\tfont-size: 38px;\n\tfont-weight: 400;\n\tfont-family: \"Montserrat\", Georgia, serif;\n}\n\n.hire {\n\tpadding: 2em;\n\tbackground: lightblue;\n}\n\n.hire h2 {\n\tline-height: 1.5;\n}\n\n.hire .btn-hire {\n\tcolor: #000;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n\tbordeR: 1px solid #000;\n\tpadding: 2px 10px;\n}\n\n.fancy-collapse-panel .panel-default>.panel-heading {\n\tpadding: 0;\n}\n\n#projects {\n\tpadding: 50px 15px;\n\tborder-bottom: 1px solid #dcd9d9;\n\ttext-align: center\n}\n\n#projects h2 {\n\tcolor: #374054;\n\tmargin-bottom: 50px\n}\n\n.project {\n\tposition: relative;\n\tmax-width: 900px;\n\tmargin: 0 auto 30px auto;\n\toverflow: hidden;\n\tbackground: #fff;\n\tborder-radius: 4px\n}\n\n.project-image {\n\tfloat: left\n}\n\n.project-info {\n\tposition: absolute;\n\ttop: 50%;\n\t-webkit-transform: translateY(-50%);\n\t        transform: translateY(-50%);\n\tmargin-left: 300px;\n\tpadding: 15px\n}\n\n.project-info h3 {\n\tfont-size: 1.5em;\n\tfont-weight: 300;\n\tcolor: #374054;\n\tmargin: 0 0 15px 0\n}\n\n.project-info p {\n\tcolor: #74808a;\n\tmargin: 0 0 15px 0;\n\tfont-size: 0.9em\n}\n\n.no-image .project-info {\n\tposition: relative;\n\tmargin: 0;\n\tpadding: 30px 15px;\n\t-webkit-transform: none;\n\t        transform: none\n}\n\n#more-projects {\n\tdisplay: none\n}\n\n.panel-heading a {\n\tpadding: 20px 25px;\n\tdisplay: block;\n\twidth: 100%;\n\tfont-weight: 500;\n\tfont-size: 14px;\n\tletter-spacing: 1px;\n\ttext-transform: uppercase;\n\tfont-family: \"Quicksand\", Arial, sans-serif;\n\tbackground-color: #2c98f0;\n\tcolor: #fff;\n\tposition: relative;\n\t-ms-box-shadow: none !important;\n\t-o-box-shadow: none !important;\n\tbox-shadow: none !important;\n}\n\n.panel {\n\t-ms-box-shadow: none !important;\n\t-o-box-shadow: none !important;\n\tbox-shadow: none !important;\n\tborder: none;\n}\n\n.panel-heading a:after {\n\tfont-family: \"icomoon\";\n\tcontent: \"\\e115\";\n\tposition: absolute;\n\tright: 20px;\n\tfont-size: 14px;\n\tfont-weight: 400;\n\ttop: 50%;\n\tline-height: 1;\n\tmargin-top: -7px;\n}\n\n.panel-heading a.collapsed:after {\n\tcontent: \"\\e114\";\n}\n\n.panel-heading a.collapsed {\n\tbackground: #f2f3f7;\n\tborder: 1px solid #e6e6e6 !important;\n\tcolor: #333333;\n}\n\n.panel-body {\n\tpadding: 1.5em;\n\tmargin-top: 5px;\n\tborder: 1px solid #e6e6e6 !important;\n}\n\n.timeline-centered {\n\tposition: relative;\n\tmargin-bottom: 30px;\n}\n\n.timeline-centered:before,\n.timeline-centered:after {\n\tcontent: \" \";\n\tdisplay: table;\n}\n\n.timeline-centered:after {\n\tclear: both;\n}\n\n.timeline-centered:before,\n.timeline-centered:after {\n\tcontent: \" \";\n\tdisplay: table;\n}\n\n.timeline-centered:after {\n\tclear: both;\n}\n\n.timeline-centered:before {\n\tcontent: '';\n\tposition: absolute;\n\tdisplay: block;\n\twidth: 4px;\n\tbackground: lightblue;\n\ttop: 20px;\n\tbottom: 20px;\n\tmargin-left: 29px;\n}\n\n.timeline-centered .timeline-entry {\n\tposition: relative;\n\tmargin-top: 5px;\n\tmargin-left: 30px;\n\tmargin-bottom: 10px;\n\tclear: both;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner {\n\tposition: relative;\n\tmargin-left: -20px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {\n\tdisplay: block;\n\twidth: 40px;\n\theight: 40px;\n\tbackground: #2c98f0;\n\tborder-radius: 50%;\n\ttext-align: center;\n\tbox-shadow: 0 0 0 5px #f2f3f7;\n\tline-height: 40px;\n\tfloat: left;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon i {\n\tcolor: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-2 {\n\tbackground: #ec5453;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-3 {\n\tbackground: lightblue;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-4 {\n\tbackground: #a84cb8;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-5 {\n\tbackground: #2fa499;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-none {\n\tbackground: #fff;\n\twidth: 20px;\n\theight: 20px;\n\tmargin-left: 10px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {\n\tposition: relative;\n\tbackground: lightblue;\n\tpadding: 1.5em;\n\tmargin-left: 60px;\n\tbackground-clip: padding-box;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\twidth: 0;\n\theight: 0;\n\tborder-style: solid;\n\tborder-width: 9px 9px 9px 0;\n\tborder-color: transparent #f2f3f7 transparent transparent;\n\tleft: 0;\n\ttop: 10px;\n\tmargin-left: -9px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p+p {\n\tmargin-top: 15px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 {\n\tfont-size: 20px;\n\tfont-family: \"Quicksand\", Arial, sans-serif;\n\tfont-weight: 500;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {\n\tcolor: #000;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 span {\n\t-webkit-opacity: .4;\n\t-moz-opacity: .4;\n\topacity: .4;\n\t-ms-filter: alpha(opacity=40);\n\tfilter: alpha(opacity=40);\n\tfont-size: 16px;\n}\n\n.services {\n\tmargin-bottom: 30px;\n\tpadding: 1.5em;\n\t-ms-box-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.17);\n\t-o-box-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.17);\n\tbox-shadow: 0px 0px 56px -8px rgba(0, 0, 0, 0.17);\n\tborder-bottom: 2px solid #2c98f0;\n}\n\n.services .icon2 {\n\tdisplay: block;\n\tmargin-bottom: 20px;\n}\n\n.services .icon2 i {\n\tfont-size: 30px;\n\tcolor: #2c98f0;\n}\n\n.services h3 {\n\tfont-family: \"Quicksand\", Arial, sans-serif;\n\tfont-size: 16px;\n\tfont-weight: 500;\n}\n\n.services.color-2 {\n\tborder-bottom: 2px solid #ec5453;\n}\n\n.services.color-2 .icon2 i {\n\tcolor: #ec5453;\n}\n\n.services.color-3 {\n\tborder-bottom: 2px solid lightblue;\n}\n\n.services.color-3 .icon2 i {\n\tcolor: lightblue;\n}\n\n.services.color-4 {\n\tborder-bottom: 2px solid #a84cb8;\n}\n\n.services.color-4 .icon2 i {\n\tcolor: #a84cb8;\n}\n\n.services.color-5 {\n\tborder-bottom: 2px solid #2fa499;\n}\n\n.services.color-5 .icon2 i {\n\tcolor: #2fa499;\n}\n\n.services.color-6 {\n\tborder-bottom: 2px solid #4054b2;\n}\n\n.services.color-6 .icon2 i {\n\tcolor: #4054b2;\n}\n\n.services {\n\tmargin-bottom: 80px;\n\tposition: relative;\n\tz-index: 0;\n}\n\n@media screen and (max-width: 768px) {\n\t.services {\n\t\tmargin-bottom: 4em;\n\t}\n}\n\n.services .icon {\n\tposition: absolute;\n\ttop: -20px;\n\tleft: 0;\n\tright: 0;\n\twidth: 100px;\n\theight: 50px;\n\tdisplay: table;\n\tmargin: 0 auto;\n\tbackground: #2c98f0;\n}\n\n.services .icon:before,\n.services .icon:after {\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\tcontent: '';\n}\n\n.services .icon:before {\n\ttop: -30px;\n\twidth: 0;\n\theight: 0;\n\tborder-style: solid;\n\tborder-width: 0 50px 30px 50px;\n\tborder-color: transparent transparent #2c98f0 transparent;\n}\n\n.services .icon:after {\n\tbottom: -30px;\n\twidth: 0;\n\theight: 0;\n\tborder-style: solid;\n\tborder-width: 30px 50px 0 50px;\n\tborder-color: #2c98f0 transparent transparent transparent;\n}\n\n.services .icon i {\n\tfont-size: 30px;\n\tcolor: #fff;\n\tz-index: 1;\n\tdisplay: table-cell;\n\tvertical-align: middle;\n}\n\n.services .desc {\n\tmargin-top: 60px;\n}\n\n.services .desc h3 {\n\tfont-size: 16px;\n\tfont-weight: 700;\n\ttext-transform: uppercase;\n}\n\n.services.color-2 .icon {\n\tbackground: #ec5453;\n}\n\n.services.color-2 .icon:before {\n\tborder-color: transparent transparent #ec5453 transparent;\n}\n\n.services.color-2 .icon:after {\n\tborder-color: #ec5453 transparent transparent transparent;\n}\n\n.services.color-3 .icon {\n\tbackground: lightblue;\n}\n\n.services.color-3 .icon:before {\n\tborder-color: transparent transparent lightblue transparent;\n}\n\n.services.color-3 .icon:after {\n\tborder-color: lightblue transparent transparent transparent;\n}\n\n.services.color-4 .icon {\n\tbackground: #a84cb8;\n}\n\n.services.color-4 .icon:before {\n\tborder-color: transparent transparent #a84cb8 transparent;\n}\n\n.services.color-4 .icon:after {\n\tborder-color: #a84cb8 transparent transparent transparent;\n}\n\n.services.color-5 .icon {\n\tbackground: #2fa499;\n}\n\n.services.color-5 .icon:before {\n\tborder-color: transparent transparent #2fa499 transparent;\n}\n\n.services.color-5 .icon:after {\n\tborder-color: #2fa499 transparent transparent transparent;\n}\n\n.services.color-6 .icon {\n\tbackground: #4054b2;\n}\n\n.services.color-6 .icon:before {\n\tborder-color: transparent transparent #4054b2 transparent;\n}\n\n.services.color-6 .icon:after {\n\tborder-color: #4054b2 transparent transparent transparent;\n}\n\n.progress-wrap h3 {\n\tfont-size: 16px;\n\tfont-family: \"Quicksand\", Arial, sans-serif;\n\tmargin-bottom: 10px;\n}\n\n.progress {\n\theight: 6px;\n\tbox-shadow: none;\n\tbackground: #f2f3f7;\n\toverflow: visible;\n}\n\n.progress-bar {\n\tbackground: #2c98f0;\n\tbox-shadow: none;\n\tfont-size: 12px;\n\tline-height: 1.2;\n\tcolor: #000;\n\tfont-weight: 600;\n\ttext-align: right;\n\tposition: relative;\n\toverflow: visible;\n\tborder-radius: 8px;\n}\n\n.progress-bar:after {\n\tposition: absolute;\n\ttop: -2px;\n\tright: 0;\n\twidth: 10px;\n\theight: 10px;\n\tcontent: '';\n\tbackground: #2c98f0;\n\tborder-radius: 50%;\n}\n\n.progress-bar span {\n\tposition: absolute;\n\ttop: -22px;\n\tright: -32px;\n}\n\n.progress-bar.color-1 {\n\tbackground: #2c98f0;\n}\n\n.progress-bar.color-1:after {\n\tbackground: #2c98f0;\n}\n\n.progress-bar.color-1 span {\n\tcolor: #2c98f0;\n}\n\n.progress-bar.color-2 {\n\tbackground: #ec5453;\n}\n\n.progress-bar.color-2:after {\n\tbackground: #ec5453;\n}\n\n.progress-bar.color-2 span {\n\tcolor: #ec5453;\n\tpadding-top: 2px;\n}\n\n.progress-bar.color-3 {\n\tbackground: lightblue;\n}\n\n.progress-bar.color-3:after {\n\tbackground: lightblue;\n}\n\n.progress-bar.color-3 span {\n\tcolor: lightblue;\n}\n\n.progress-bar.color-4 {\n\tbackground: #a84cb8;\n}\n\n.progress-bar.color-4:after {\n\tbackground: #a84cb8;\n}\n\n.progress-bar.color-4 span {\n\tcolor: #a84cb8;\n}\n\n.progress-bar.color-5 {\n\tbackground: #2fa499;\n}\n\n.progress-bar.color-5:after {\n\tbackground: #2fa499;\n}\n\n.progress-bar.color-5 span {\n\tcolor: #2fa499;\n}\n\n.progress-bar.color-6 {\n\tbackground: #4054b2;\n}\n\n.progress-bar.color-6:after {\n\tbackground: #4054b2;\n}\n\n.progress-bar.color-6 span {\n\tcolor: #4054b2;\n}\n\n.progress-bar.color-7 {\n\tbackground: #ec5453;\n}\n\n.progress-bar.color-7:after {\n\tbackground: #ec5453;\n}\n\n.progress-bar.color-7 span {\n\tcolor: #ec5453;\n}\n\n.progress-bar.color-8 {\n\tbackground: lightblue;\n}\n\n.progress-bar.color-8:after {\n\tbackground: lightblue;\n}\n\n.progress-bar.color-8 span {\n\tcolor: lightblue;\n}\n\n.progress-bar.color-9 {\n\tbackground: #a84cb8;\n}\n\n.progress-bar.color-9:after {\n\tbackground: #a84cb8;\n}\n\n.progress-bar.color-9 span {\n\tcolor: #a84cb8;\n}\n\n.progress-wrap h3 {\n\tpadding-bottom: 14px;\n}\n\n.colorlib-feature {\n\ttext-align: left;\n\twidth: 100%;\n\tfloat: left;\n\tmargin-bottom: 20px;\n\tposition: relative;\n}\n\n.colorlib-feature .colorlib-icon {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 50px;\n\theight: 50px;\n\tdisplay: table;\n\ttext-align: center;\n\tbackground: #f2f3f7;\n\tborder-radius: 2px;\n}\n\n.colorlib-feature .colorlib-icon i {\n\tdisplay: table-cell;\n\tvertical-align: middle;\n\tcolor: #2c98f0;\n\tfont-size: 20px;\n\theight: 50px;\n}\n\n@media screen and (max-width: 1200px) {\n\t.colorlib-feature .colorlib-icon i {\n\t\tfont-size: 20px;\n\t}\n}\n\n.colorlib-feature .colorlib-text {\n\tpadding-left: 60px;\n\twidth: 100%;\n}\n\n.colorlib-feature .colorlib-text h2,\n.colorlib-feature .colorlib-text h3 {\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.colorlib-feature .colorlib-text h3 {\n\tfont-weight: 500;\n\tmargin-bottom: 20px;\n\tcolor: rgba(0, 0, 0, 0.7);\n\tfont-size: 14px;\n\tletter-spacing: 3px;\n\ttext-transform: uppercase;\n}\n\n.colorlib-feature.colorlib-feature-sm .colorlib-text {\n\tmargin-top: 10px;\n}\n\n.colorlib-feature.colorlib-feature-sm .colorlib-icon i {\n\tcolor: #2c98f0;\n\tfont-size: 20px;\n}\n\n@media screen and (max-width: 1200px) {\n\t.colorlib-feature.colorlib-feature-sm .colorlib-icon i {\n\t\tfont-size: 28px;\n\t}\n}\n\n.blog-entry {\n\twidth: 100%;\n\tfloat: left;\n\tbackground: #fff;\n\tmargin-bottom: 2em;\n}\n\n@media screen and (max-width: 768px) {\n\t.blog-entry {\n\t\tmargin-bottom: 3em;\n\t}\n}\n\n.blog-entry .blog-img {\n\twidth: 100%;\n\tfloat: left;\n\toverflow: hidden;\n\tposition: relative;\n\tz-index: 1;\n\tmargin-bottom: 25px;\n}\n\n.blog-entry .blog-img img {\n\tposition: relative;\n\tmax-width: 100%;\n\t-webkit-transform: scale(1);\n\ttransform: scale(1);\n\ttransition: 0.3s;\n}\n\n.blog-entry .desc h3 {\n\tfont-size: 16px;\n\tmargin-bottom: 25px;\n\tline-height: auto;\n\tfont-weight: 500;\n\tletter-spacing: 0.5px;\n\tfont-family: \"Quicksand\", Arial, sans-serif;\n}\n\n.blog-entry .desc h3 a {\n\tcolor: #000;\n\ttext-decoration: none;\n}\n\n.blog-entry .desc span {\n\tdisplay: block;\n\tmargin-bottom: 20px;\n\tfont-size: 12px;\n\tcolor: rgba(0, 0, 0, 0.4) !important;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n\tfont-weight: 400;\n}\n\n.blog-entry .desc span small i {\n\tcolor: #999999;\n}\n\n.blog-entry .desc .lead {\n\tfont-size: 12px;\n\ttext-transform: uppercase;\n\tletter-spacing: 2px;\n\tcolor: #000;\n}\n\n.blog-entry:hover .blog-img img {\n\t-webkit-transform: scale(1.1);\n\ttransform: scale(1.1);\n}\n\n.work-menu span {\n\tmargin-left: 10px;\n}\n\n.work-menu span:first-child {\n\tmargin-left: 0;\n}\n\n.work-menu span a {\n\tcolor: #000;\n}\n\n.work-menu span a.active {\n\tcolor: #2c98f0;\n}\n\n.project {\n\tbackground-size: cover;\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n\tposition: relative;\n\theight: 300px;\n\twidth: 100%;\n\tdisplay: block;\n\tmargin-bottom: 30px;\n}\n\n.project .desc {\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tbackground: #2c98f0;\n\topacity: 0;\n\ttransition: 0.3s;\n}\n\n.project .desc .con {\n\tpadding: 20px;\n\tdisplay: block;\n\tposition: relative;\n\theight: 300px;\n}\n\n.project .desc .con .icon {\n\tposition: absolute;\n\tbottom: 20px;\n\tleft: 20px;\n\tright: 20px;\n}\n\n.project .desc .con .icon span {\n\tdisplay: inline;\n\tpadding-right: 5px;\n}\n\n.project .desc .con .icon span a {\n\tcolor: #333333;\n\tpadding: 5px;\n\tbackground: rgba(255, 255, 255, 0.5);\n\tborder-radius: 4px;\n}\n\n.project .desc .con .icon i {\n\tfont-size: 16px;\n\tcolor: #333333;\n}\n\n.project .desc h3 {\n\tfont-family: \"Quicksand\", Arial, sans-serif;\n\tfont-size: 16px;\n\tfont-weight: 500;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\n\ttransition: transform 0.3s, opacity 0.3s;\n\ttransition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n\t-webkit-transform: translate3d(0, -15px, 0);\n\ttransform: translate3d(0, -15px, 0);\n\tmargin-bottom: 15px;\n}\n\n.project .desc h3 a {\n\tcolor: #fff;\n}\n\n.project .desc span {\n\tdisplay: block;\n\tcolor: rgba(255, 255, 255, 0.7);\n\tfont-size: 13px;\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\n\ttransition: transform 0.3s, opacity 0.3s;\n\ttransition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n\t-webkit-transform: translate3d(0, 15px, 0);\n\ttransform: translate3d(0, 15px, 0);\n}\n\n.project .desc span a {\n\tcolor: #000;\n}\n\n@media screen and (max-width: 768px) {\n\t.project .desc {\n\t\topacity: 1;\n\t\tbackground: rgba(0, 0, 0, 0.4);\n\t}\n\t.project .desc h3 {\n\t\tfont-style: 28px;\n\t\t-webkit-transform: translate3d(0, 0, 0);\n\t\ttransform: translate3d(0, 0, 0);\n\t\tcolor: #000;\n\t}\n\t.project .desc span {\n\t\t-webkit-transform: translate3d(0, 0, 0);\n\t\ttransform: translate3d(0, 0, 0);\n\t}\n}\n\n.project:hover .desc {\n\topacity: 1;\n}\n\n.project:hover .desc h3 {\n\t-webkit-transform: translate3d(0, 0, 0);\n\ttransform: translate3d(0, 0, 0);\n}\n\n.project:hover .desc span {\n\t-webkit-transform: translate3d(0, 0, 0);\n\ttransform: translate3d(0, 0, 0);\n}\n\n.btn-load-more {\n\twidth: 100%;\n}\n\n#colorlib-counter {\n\tposition: relative;\n\tclear: both;\n\tmargin-bottom: 5em;\n}\n\n.colorlib-counters {\n\tpadding: 3em 0;\n\tbackground-size: cover;\n\tbackground-attachment: fixed;\n\tbackground-position: center;\n\talign-items: stretch;\n}\n\n.colorlib-counters .overlay {\n\tz-index: 0;\n\tposition: absolute;\n\tbottom: 0;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbackground: rgba(0, 0, 0, 0.4);\n}\n\n.colorlib-counters .icon {\n\twidth: 100px;\n\theight: 100px;\n\tdisplay: table;\n\tmargin: 0 auto;\n\tmargin-bottom: 20px;\n}\n\n.colorlib-counters .icon i {\n\tdisplay: table-cell;\n\tvertical-align: middle;\n\twidth: 100px;\n\theight: 100px;\n\tfont-size: 50px;\n\tcolor: #2c98f0;\n\tbackground: #fff;\n\tborder-radius: 50%;\n}\n\n.colorlib-counters .counter-wrap {\n\tborder: 1px solid red !important;\n}\n\n.colorlib-counters .colorlib-counter {\n\tfont-size: 40px;\n\tdisplay: block;\n\tcolor: white;\n\tfont-family: \"Quicksand\", Arial, sans-serif;\n\twidth: 100%;\n\tfont-weight: 700;\n\tmargin-bottom: .3em;\n}\n\n.colorlib-counters .colorlib-counter-label {\n\tcolor: rgba(255, 255, 255, 0.7);\n\ttext-transform: uppercase;\n\tfont-size: 14px;\n\tletter-spacing: 5px;\n\tmargin-bottom: 2em;\n\tdisplay: block;\n}\n\n.colorlib-social {\n\tpadding: 0;\n\tmargin: 0;\n\ttext-align: center;\n}\n\n.colorlib-social li {\n\tpadding: 0;\n\tmargin: 0;\n\tlist-style: none;\n\tdisplay: -moz-inline-stack;\n\tdisplay: inline-block;\n\tzoom: 1;\n\tdisplay: inline;\n}\n\n.colorlib-social li a {\n\tfont-size: 22px;\n\tcolor: #000;\n\tpadding: 10px;\n\tdisplay: -moz-inline-stack;\n\tdisplay: inline-block;\n\tzoom: 1;\n\tdisplay: inline;\n\tborder-radius: 7px;\n}\n\n@media screen and (max-width: 768px) {\n\t.colorlib-social li a {\n\t\tpadding: 10px 8px;\n\t}\n}\n\n.colorlib-social li a:hover {\n\tcolor: #2c98f0;\n}\n\n.colorlib-social li a:hover,\n.colorlib-social li a:active,\n.colorlib-social li a:focus {\n\toutline: none;\n\ttext-decoration: none;\n\tcolor: #2c98f0;\n}\n\n#map {\n\twidth: 100%;\n\theight: 700px;\n}\n\n@media screen and (max-width: 768px) {\n\t#map {\n\t\theight: 200px;\n\t}\n}\n\n.colorlib-bg-color {\n\tbackground: #fafafa;\n\tposition: relative;\n}\n\n.pagination {\n\tpadding: 0;\n}\n\n.pagination li {\n\tmargin: 2px;\n}\n\n.pagination li a {\n\tcolor: #000;\n\tbackground: transparent;\n\tcolor: #000;\n\tmargin: 2px;\n\tborder-radius: 0;\n}\n\n.pagination li a:first-child {\n\tborder-radius: 2px;\n}\n\n.pagination li a:hover,\n.pagination li a:focus {\n\tbackground: #2c98f0;\n\tcolor: #fff;\n\tborder: 1px solid #2c98f0;\n}\n\n@media screen and (max-width: 768px) {\n\t.pagination li a {\n\t\tpadding: 7px 15px;\n\t}\n}\n\n.pagination li.active a {\n\tbackground: #2c98f0;\n\tborder: 1px solid #2c98f0 !important;\n}\n\n.pagination li.active a:hover,\n.pagination li.active a:focus {\n\tbackground: #2c98f0;\n\tcolor: #fff;\n\tborder: 1px solid #2c98f0 !important;\n}\n\n.btn {\n\tmargin-right: 4px;\n\tmargin-bottom: 4px;\n\tfont-family: \"Quicksand\", Arial, sans-serif;\n\tfont-size: 12px;\n\tfont-weight: 400;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n\tborder-radius: 2px;\n\ttransition: 0.5s;\n\tpadding: 8px 15px !important;\n}\n\n.btn.btn-sm {\n\tpadding: 4px 15px !important;\n}\n\n.btn.btn-md {\n\tpadding: 8px 20px !important;\n}\n\n.btn.btn-lg {\n\tpadding: 18px 36px !important;\n}\n\n.btn:hover,\n.btn:active,\n.btn:focus {\n\tbox-shadow: none !important;\n\toutline: none !important;\n}\n\n.btn-primary {\n\tbackground: #2c98f0;\n\tcolor: #fff;\n\tborder: 2px solid #2c98f0;\n}\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active {\n\tbackground: #44a4f2 !important;\n\tborder-color: #44a4f2 !important;\n}\n\n.btn-primary.btn-outline {\n\tbackground: transparent;\n\tcolor: #2c98f0;\n\tborder: 2px solid #2c98f0;\n}\n\n.btn-primary.btn-outline:hover,\n.btn-primary.btn-outline:focus,\n.btn-primary.btn-outline:active {\n\tbackground: #2c98f0;\n\tcolor: #fff;\n}\n\n.btn-success {\n\tbackground: #5cb85c;\n\tcolor: #fff;\n\tborder: 2px solid #5cb85c;\n}\n\n.btn-success:hover,\n.btn-success:focus,\n.btn-success:active {\n\tbackground: #4cae4c !important;\n\tborder-color: #4cae4c !important;\n}\n\n.btn-success.btn-outline {\n\tbackground: transparent;\n\tcolor: #5cb85c;\n\tborder: 2px solid #5cb85c;\n}\n\n.btn-success.btn-outline:hover,\n.btn-success.btn-outline:focus,\n.btn-success.btn-outline:active {\n\tbackground: #5cb85c;\n\tcolor: #fff;\n}\n\n.btn-info {\n\tbackground: #5bc0de;\n\tcolor: #fff;\n\tborder: 2px solid #5bc0de;\n}\n\n.btn-info:hover,\n.btn-info:focus,\n.btn-info:active {\n\tbackground: #46b8da !important;\n\tborder-color: #46b8da !important;\n}\n\n.btn-info.btn-outline {\n\tbackground: transparent;\n\tcolor: #5bc0de;\n\tborder: 2px solid #5bc0de;\n}\n\n.btn-info.btn-outline:hover,\n.btn-info.btn-outline:focus,\n.btn-info.btn-outline:active {\n\tbackground: #5bc0de;\n\tcolor: #fff;\n}\n\n.btn-warning {\n\tbackground: #f0ad4e;\n\tcolor: #fff;\n\tborder: 2px solid #f0ad4e;\n}\n\n.btn-warning:hover,\n.btn-warning:focus,\n.btn-warning:active {\n\tbackground: #eea236 !important;\n\tborder-color: #eea236 !important;\n}\n\n.btn-warning.btn-outline {\n\tbackground: transparent;\n\tcolor: #f0ad4e;\n\tborder: 2px solid #f0ad4e;\n}\n\n.btn-warning.btn-outline:hover,\n.btn-warning.btn-outline:focus,\n.btn-warning.btn-outline:active {\n\tbackground: #f0ad4e;\n\tcolor: #fff;\n}\n\n.btn-danger {\n\tbackground: #d9534f;\n\tcolor: #fff;\n\tborder: 2px solid #d9534f;\n}\n\n.btn-danger:hover,\n.btn-danger:focus,\n.btn-danger:active {\n\tbackground: #d43f3a !important;\n\tborder-color: #d43f3a !important;\n}\n\n.btn-danger.btn-outline {\n\tbackground: transparent;\n\tcolor: #d9534f;\n\tborder: 2px solid #d9534f;\n}\n\n.btn-danger.btn-outline:hover,\n.btn-danger.btn-outline:focus,\n.btn-danger.btn-outline:active {\n\tbackground: #d9534f;\n\tcolor: #fff;\n}\n\n.btn-outline {\n\tbackground: none;\n\tborder: 2px solid gray;\n\tfont-size: 16px;\n\ttransition: 0.3s;\n}\n\n.btn-outline:hover,\n.btn-outline:focus,\n.btn-outline:active {\n\tbox-shadow: none;\n}\n\n.form-control {\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\tappearance: none;\n\tbox-shadow: none;\n\tbackground: transparent;\n\tborder: transparent;\n\tbackground: #f2f3f7;\n\theight: 54px;\n\tfont-size: 16px;\n\tfont-weight: 400;\n\ttransition: 0.3s;\n\tborder-radius: 0;\n}\n\n.form-control:active,\n.form-control:focus {\n\toutline: none;\n\tbox-shadow: none;\n\tborder-color: transparent;\n\tbackground: #f0f0f0;\n}\n\n#message {\n\theight: 130px;\n}\n\n.colorlib-nav-toggle {\n\tcursor: pointer;\n\ttext-decoration: none;\n}\n\n.colorlib-nav-toggle.active i::before,\n.colorlib-nav-toggle.active i::after {\n\tbackground: #000;\n}\n\n.colorlib-nav-toggle.dark.active i::before,\n.colorlib-nav-toggle.dark.active i::after {\n\tbackground: #000;\n}\n\n.colorlib-nav-toggle:hover,\n.colorlib-nav-toggle:focus,\n.colorlib-nav-toggle:active {\n\toutline: none;\n\tborder-bottom: none !important;\n}\n\n.colorlib-nav-toggle i {\n\tposition: relative;\n\tdisplay: -moz-inline-stack;\n\tdisplay: inline-block;\n\tzoom: 1;\n\tdisplay: inline;\n\twidth: 30px;\n\theight: 2px;\n\tcolor: #000;\n\tfont: bold 14px/.4 Helvetica;\n\ttext-transform: uppercase;\n\ttext-indent: -55px;\n\tbackground: #000;\n\ttransition: all .2s ease-out;\n}\n\n.colorlib-nav-toggle i::before,\n.colorlib-nav-toggle i::after {\n\tcontent: '';\n\twidth: 30px;\n\theight: 2px;\n\tbackground: #000;\n\tposition: absolute;\n\tleft: 0;\n\ttransition: 0.2s;\n}\n\n.colorlib-nav-toggle.dark i {\n\tposition: relative;\n\tcolor: #000;\n\tbackground: #000;\n\ttransition: all .2s ease-out;\n}\n\n.colorlib-nav-toggle.dark i::before,\n.colorlib-nav-toggle.dark i::after {\n\tbackground: #000;\n\ttransition: 0.2s;\n}\n\n.colorlib-nav-toggle i::before {\n\ttop: -7px;\n}\n\n.colorlib-nav-toggle i::after {\n\tbottom: -7px;\n}\n\n.colorlib-nav-toggle:hover i::before {\n\ttop: -10px;\n}\n\n.colorlib-nav-toggle:hover i::after {\n\tbottom: -10px;\n}\n\n.colorlib-nav-toggle.active i {\n\tbackground: transparent;\n}\n\n.colorlib-nav-toggle.active i::before {\n\ttop: 0;\n\t-webkit-transform: rotateZ(45deg);\n\ttransform: rotateZ(45deg);\n}\n\n.colorlib-nav-toggle.active i::after {\n\tbottom: 0;\n\t-webkit-transform: rotateZ(-45deg);\n\ttransform: rotateZ(-45deg);\n}\n\n.colorlib-nav-toggle {\n\tposition: fixed;\n\tleft: -5px;\n\ttop: 0px;\n\tz-index: 9999;\n\tcursor: pointer;\n\topacity: 1;\n\tvisibility: hidden;\n\tpadding: 20px;\n\ttransition: 0.5s;\n}\n\n@media screen and (max-width: 768px) {\n\t.colorlib-nav-toggle {\n\t\topacity: 1;\n\t\tvisibility: visible;\n\t}\n}\n\n@media screen and (max-width: 480px) {\n\t.col-xxs-12 {\n\t\tfloat: none;\n\t\twidth: 100%;\n\t}\n}\n\n.row-bottom-padded-lg {\n\tpadding-bottom: 7em;\n}\n\n@media screen and (max-width: 768px) {\n\t.row-bottom-padded-lg {\n\t\tpadding-bottom: 1em;\n\t}\n}\n\n.row-bottom-padded-md {\n\tpadding-bottom: 3em;\n}\n\n@media screen and (max-width: 768px) {\n\t.row-bottom-padded-md {\n\t\tpadding-bottom: 1em;\n\t}\n}\n\n.row-bottom-padded-sm {\n\tpadding-bottom: 1em;\n}\n\n@media screen and (max-width: 768px) {\n\t.row-bottom-padded-sm {\n\t\tpadding-bottom: 1em;\n\t}\n}\n\n.row-pt-md {\n\tpadding-top: 3em;\n}\n\n.col-padding {\n\tpadding: 10px !important;\n}\n\n/* .js .animate-box {\n\topacity: 0;\n} */\n\n/* Buy me a coffe button css*/\n\n.bmc-button img {\n\twidth: 27px !important;\n\tmargin-bottom: 0px !important;\n\tbox-shadow: none !important;\n\tborder: none !important;\n\tvertical-align: middle !important;\n}\n\n.bmc-button {\n\tline-height: 36px !important;\n\theight: 37px !important;\n\ttext-decoration: none !important;\n\tdisplay: inline-flex !important;\n\tcolor: #FFFFFF !important;\n\tbackground-color: #000 !important;\n\tborder-radius: 3px !important;\n\tborder: 1px solid transparent !important;\n\tpadding: 1px 9px !important;\n\tfont-size: 22px !important;\n\tletter-spacing: 0.6px !important;\n\tbox-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;\n\t-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;\n\tmargin: 0 auto !important;\n\tfont-family: 'Cookie', cursive !important;\n\tbox-sizing: border-box !important;\n\ttransition: 0.3s all linear !important;\n}\n\n.bmc-button:hover,\n.bmc-button:active,\n.bmc-button:focus {\n\t-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;\n\ttext-decoration: none !important;\n\tbox-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;\n\topacity: 0.85 !important;\n\tcolor: #FFFFFF !important;\n}\n\n.badge-secondary {\n\tmargin-left: 2px;\n\tmargin-right: 2px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"colorlib-page\">\n  <div class=\"container-wrap\">\n    <a\n      href=\"#\"\n      class=\"js-colorlib-nav-toggle colorlib-nav-toggle\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbar\"\n      aria-expanded=\"false\"\n      aria-controls=\"navbar\"\n    >\n      <i></i>\n    </a>\n    <app-sidebar></app-sidebar>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n<!-- Google tag (gtag.js) -->\n<script\n  async\n  src=\"https://www.googletagmanager.com/gtag/js?id=G-QCJXQWNMX7\"\n></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag() {\n    dataLayer.push(arguments);\n  }\n  gtag(\"js\", new Date());\n\n  gtag(\"config\", \"G-QCJXQWNMX7\");\n</script>\n"

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
/*! exports provided: username, image_path, intro, banner, skills, workExperience, education, mail, github, githubusername, Leetcode, linkdin, hackerRank, geeksforgeeks, instagram, quora, announce, resumeLink, default */
/***/ (function(module) {

module.exports = {"username":"Raghuram Damarancha","image_path":"/assets/images/profile.jpg","intro":["Hi, Welcome to my portfolio.","I am a computer science graduate student at University of Dayton, Dayton , Ohio.","I have  two years experience of working in the .Net and Angular with strong computer science fundamentals. My experience helped me develop expert knowledge of software development, responsibilities for the given tasks, and work culture. I am highly motivated to continue learning and improving my skills."],"banner":"Show Some Banner","skills":[{"label":"DS and Algo/Problem Solving","value":"60","description":"I have been Practicing these in different platforms like leetcode, hackerank etc"},{"label":"MongoDB/ExpressJS/NodeJS","value":"40","description":"Did personal projects like movie db, angular authenticaion application etc"},{"label":"Python/Django/MySQL","value":"40","description":"Learning now as a masters student in University of Dayton"},{"label":"AWS: SNS/SQS/S3/Dynamodb","value":"50","description":"I have experience in working on AWS services like SNS/SQS, amazon S3, Dynamodb."},{"label":"Bootstrap/HTML/JavaScript/Typescript","value":"65","description":""},{"label":".Net/Angular/NUnit","value":"75","description":"Worked on .Net, Angular these for 2 years as a software engineer.Used NUnit for unit testing in .Net"},{"label":"Word/Excel","value":"70","description":"Learnt these Microsoft products during my undergraduation"},{"label":"Git/Trello/Postman/ChromeDevTools","value":"50","description":""},{"label":"Documentation Writing/Communication","value":"60","description":""}],"workExperience":[{"company_name":"5y Business Solutions / BOS Framework","designation":"Software Developement","time_period":"May 2022 - June 2023","summary":["Worked on a Stocks broker web application. It involves managing the user's portfolio based on the trade of stocks.","Worked on providing APIs to the mobile application. The application involves the diet and training management for football players based on user subscriptions.","Worked in System Design, System Testing, API Integration and Cloud Services for the deployment and production of the application."],"tech_stack":"NetCore, WebApi, JQuery, StripePayments, Angular, MySQL, SNS SQS, Nunit"},{"company_name":"Techigai","designation":"Software Developement Assosiate","time_period":"Jan 2021 - April 2022","summary":["Worked on an e-learning platform for scheduling online classes and content for participants. It involves Online media Streaming and real-time communication using AWS services.","Worked on a referral portal where patients are referred to a hospital's doctors."],"tech_stack":"NetFramework, NetCore WebApi, JQuery,Angular, SQL Server"}],"education":[{"degree":"Masters in Computer Science","institute":"University of Dayton, Dayton Ohio US","summary":["Courses undertaken till now Data Strucutures and Algorithms, Database Management Systems"]},{"degree":"Bachelors in Computer Science and Engineering","institute":"CMR Technical Campus, Hyderabad Telangana India","summary":["Courses undertaken Data Strucutures and Algorithms, Operating Systems, Database Management Systems, Networks, Distributed Computing, Object Oriented Programming, Computer Architecture."]},{"degree":"Intermediate","institute":"Board of Secondary Education, Telangana","summary":["Courses undertaken Physics, Chemistry and Mathematics."]}],"mail":"raghuramreddy1319@gmail.com","github":"https://github.com/Raghuram07","githubusername":"Raghuram07","Leetcode":"https://leetcode.com/raghuram07/","linkdin":"https://www.linkedin.com/in/raghuram-reddy-damarancha-074564149/","hackerRank":"https://www.hackerrank.com/raghuramreddy07","geeksforgeeks":"https://auth.geeksforgeeks.org/user/raghuramreddy2599","instagram":"https://www.instagram.com/raghuram_damarancha/","quora":"https://www.quora.com/profile/Damarancha-Raghuram","announce":["Sorry...! ","The Personal Projects Section is Still In Progress. I will be done by 25th Septmenber 2023."," -Raghuram "],"resumeLink":"https://drive.google.com/file/d/1nq9N_4kPJIMwZdk9PJ8WEQ-NccIEHk7C/view?usp=sharing"};

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

module.exports = ".iframe{\r\n    width: 250px;\r\n    height: 100px;\r\n    border: black;\r\n    border-bottom: lightslategray 2px solid;\r\n    border-radius: 10px;\r\n}\r\n.box{\r\n\r\n    margin-left: -15px;\r\n    margin-right: 65px;\r\n}\r\n.iframes{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n}\r\n.top-right{\r\nbackground-color: lightblue;\r\ntop: 2px;\r\nright: 0px;\r\nposition: absolute;\r\nborder-radius: 6px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"colorlib-main\">\n  <!--About Me -->\n  <section class=\"colorlib-about\" data-section=\"about\">\n    <div class=\"colorlib-narrow-content\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div\n            class=\"row row-bottom-padded-sm animate-box\"\n            data-animate-effect=\"fadeInLeft\"\n          >\n            <div class=\"col-md-12\">\n              <div class=\"about-desc\">\n                <h1>\n                  <strong>{{ profileData.username }}</strong>\n                  <a href=\"{{ profileData.resumeLink }}\" target=\"_blank\">\n                    <button class=\"top-right\" mat-raised-button>\n                      View Resume\n                    </button>\n                  </a>\n\n                  <hr />\n                </h1>\n\n                <div *ngFor=\"let itemIntro of profileData.intro\">\n                  <p>{{ itemIntro }}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- <div class=\"row\">\n                  <div *ngFor=\"let item of projectData.projectTitles\">\n                     <div \n                        class=\"col-md-3 animate-box\"\n                        data-animate-effect=\"fadeInRight\"\n                        (click)=\"toggleProject(item.code)\">\n                        <div class=\"services color-2\">\n                           <span class=\"icon2\">\n                              <i class=\"fa fa-code\"></i>\n                           </span>\n                           <h3>{{item.title}}</h3>\n                        </div>\n                     </div>\n                  </div>\n                  <div class=\"col-md-3 animate-box\"\n                     data-animate-effect=\"fadeInRight\">\n                     <a routerLink=\"/web-development\">\n                        <div class=\"services color-2\">\n                           <span class=\"icon2\">\n                              <i class=\"fa fa-code\"></i>\n                           </span>\n                           <h3>\n                              Web\n                              <br>\n                              Designing\n                           </h3>\n                        </div>\n                     </a>\n                  </div>\n                  <div\n                     class=\"col-md-3 animate-box\"\n                     data-animate-effect=\"fadeInRight\">\n                     <a routerLink=\"/software-development\">\n                        <div class=\"services color-3\">\n                           <span class=\"icon2\">\n                              <i class=\"fa fa-terminal\"></i>\n                           </span>\n                           <h3>Software Development</h3>\n                        </div>\n                     </a>\n                  </div>\n                  <div\n                     class=\"col-md-3 animate-box\"\n                     data-animate-effect=\"fadeInRight\">\n                     <a routerLink=\"/android-development\">\n                        <div class=\"services color-4\">\n                           <span class=\"icon2\">\n                              <i class=\"fa fa-android\"></i>\n                           </span>\n                           <h3>Android Applications</h3>\n                        </div>\n                     </a>\n                  </div> \n               </div> -->\n          <!-- <div class=\"row\">\n                  <div\n                     class=\"col-md-12 animate-box\"\n                     data-animate-effect=\"fadeInLeft\">\n                     <div class=\"hire\">\n                        <h2>{{profileData.banner}}</h2>\n                         <a href=\"#\" class=\"btn-hire\" style=\"text-align: center;\">Download Resume</a> \n                     </div>\n                  </div>\n               </div>  -->\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- ----Skills-------------- -->\n  <section class=\"colorlib-skills\" data-section=\"skills\">\n    <div class=\"colorlib-narrow-content\">\n      <div class=\"row\">\n        <div\n          class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\"\n          data-animate-effect=\"fadeInLeft\"\n        >\n          <!-- <span class=\"heading-meta\">My Specialty</span> -->\n          <div class=\"about-desc\">\n            <h1>Skills</h1>\n          </div>\n        </div>\n      </div>\n      <p>\n        Some of the significant aptitudes which will assist me with achieving\n        your objectives.\n      </p>\n      <div id=\"skills\" class=\"row\">\n        <div\n          class=\"col-md-6 animate-box\"\n          data-animate-effect=\"fadeInLeft\"\n          *ngFor=\"let skill of profileData.skills\"\n        >\n          <div\n            class=\"progress-wrap\"\n            matTooltip=\"{{ skill.description }}\"\n            matTooltipPosition=\"above\"\n          >\n            <h3 style=\"font-weight: 500\">{{ skill.label }}</h3>\n            <div class=\"progress\">\n              <div\n                class=\"progress-bar color-1\"\n                role=\"progressbar\"\n                aria-valuenow=\"50\"\n                aria-valuemin=\"0\"\n                aria-valuemax=\"100\"\n                [style.width]=\"skill.value + '%'\"\n              >\n                <span>{{ skill.value }}%</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ----Programming Profiles-------------- -->\n  <section class=\"prog-profiles\" data-section=\"prog-profiles\">\n    <div class=\"colorlib-narrow-content\">\n      <div class=\"row\">\n        <div class=\"about-desc\">\n          <h1>Programming Profiles</h1>\n        </div>\n        <p>\n          Here are the some of platforms I used to improve my problem solving\n          skills\n        </p>\n      </div>\n      <!--Iframe divisions-->\n      <div class=\"row iframes\">\n        <div class=\"col-md-4 animate-box box\" data-animate-effect=\"fadeInRight\">\n          <div class=\"card\">\n            <a href=\"https://leetcode.com/raghuram07/\">\n              <h4>Leet Code :</h4>\n            </a>\n            <a href=\"https://leetcode.com/raghuram07/\">\n              <iframe\n                class=\"iframe\"\n                src=\"https://leetcard.jacoblin.cool/raghuram07\"\n                title=\"leetcard\"\n              >\n              </iframe>\n            </a>\n          </div>\n        </div>\n\n        <div class=\"col-md-4 animate-box box\" data-animate-effect=\"fadeInRight\">\n          <div class=\"card\">\n            <a href=\"https://www.hackerrank.com/raghuramreddy07\">\n              <h4>Hacker Rank :</h4>\n            </a>\n            <a href=\"https://www.hackerrank.com/raghuramreddy07\">\n              <img\n                class=\"iframe\"\n                src=\"../../assets/images/HackerRankProfile.png\"\n                title=\"leetcard\"\n              />\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ----Personal Projects-------------- -->\n  <app-projects></app-projects>\n  <!-- ------------Work Experience--------- -->\n  <section class=\"colorlib-experience\" data-section=\"experience\">\n    <div class=\"colorlib-narrow-content\">\n      <div class=\"row\">\n        <div\n          class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\"\n          data-animate-effect=\"fadeInLeft\"\n        >\n          <div class=\"about-desc\">\n            <h1>\n              Work\n              <span style=\"color: cornflowerblue\">Experience</span>\n            </h1>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"timeline-centered\">\n            <article\n              class=\"timeline-entry animate-box\"\n              data-animate-effect=\"fadeInLeft\"\n              *ngFor=\"let workexp of profileData.workExperience\"\n            >\n              <div class=\"timeline-entry-inner\">\n                <div class=\"timeline-icon color-1\">\n                  <i class=\"fa fa-code\"></i>\n                </div>\n                <div class=\"timeline-label\">\n                  <h2>\n                    <a href=\"#\">{{ workexp.company_name }}&nbsp;</a>\n                    <span>{{ workexp.time_period }}</span>\n                  </h2>\n                  <p>\n                    <strong>{{ workexp.designation }}</strong>\n                  </p>\n                  <ul type=\"square\" *ngFor=\"let item of workexp.summary\">\n                    <li>\n                      <span style=\"font-weight: 500\">{{ item }}</span>\n                    </li>\n                  </ul>\n                  <span>Tools: {{ workexp.tech_stack }}</span>\n                </div>\n              </div>\n            </article>\n            <article\n              class=\"timeline-entry begin animate-box\"\n              data-animate-effect=\"fadeInBottom\"\n            >\n              <div class=\"timeline-entry-inner\">\n                <div class=\"timeline-icon color-none\"></div>\n              </div>\n            </article>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ------------Education--------- -->\n  <section class=\"colorlib-experience\" data-section=\"education\">\n    <div class=\"colorlib-narrow-content\">\n      <div class=\"row\">\n        <div\n          class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\"\n          data-animate-effect=\"fadeInLeft\"\n        >\n          <div class=\"about-desc\">\n            <h1>Education</h1>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"timeline-centered\">\n            <article\n              class=\"timeline-entry animate-box\"\n              data-animate-effect=\"fadeInLeft\"\n              *ngFor=\"let education of profileData.education\"\n            >\n              <div class=\"timeline-entry-inner\">\n                <div class=\"timeline-icon color-1\">\n                  <i class=\"fa fa-code\"></i>\n                </div>\n                <div class=\"timeline-label\">\n                  <h2>{{ education.degree }}</h2>\n                  <p>\n                    <strong>{{ education.institute }}</strong>\n                  </p>\n                  <div *ngFor=\"let item of education.summary\">\n                    <span style=\"font-weight: 500\">{{ item }}</span>\n                  </div>\n                </div>\n              </div>\n            </article>\n            <article\n              class=\"timeline-entry begin animate-box\"\n              data-animate-effect=\"fadeInBottom\"\n            >\n              <div class=\"timeline-entry-inner\">\n                <div class=\"timeline-icon color-none\"></div>\n              </div>\n            </article>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ------Contact-------- -->\n  <section class=\"colorlib-contact\" data-section=\"contact\">\n    <div class=\"colorlib-narrow-content\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div\n            class=\"row row-bottom-padded-sm animate-box\"\n            data-animate-effect=\"fadeInLeft\"\n          >\n            <div class=\"about-desc\">\n              <h1>Contact</h1>\n            </div>\n            <p>\n              On the off chance that you might want to connect with me, don't\n              hesitate to send me an email at\n              <strong>{{ profileData.mail }}</strong>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- ----------Footer----------- -->\n  <section class=\"colorlib-footer\" data-section=\"footer\">\n    <div class=\"colorlib-narrow-content\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div\n            class=\"row row-bottom-padded-sm animate-box\"\n            data-animate-effect=\"fadeInLeft\"\n          >\n            <div class=\"hire\">\n              <div align=\"center\">\n                <p style=\"font-size: 30px; margin-bottom: 0px\">\n                  <a\n                    href=\"{{ profileData.instagram }}\"\n                    style=\"color: black\"\n                    class=\"fa fa-instagram\"\n                  ></a>\n                  &nbsp;&nbsp;&nbsp;&nbsp;\n                  <a\n                    href=\"{{ profileData.linkdin }}\"\n                    style=\"color: black\"\n                    Work\n                    class=\"fa fa-linkedin\"\n                  ></a>\n                  &nbsp;&nbsp;&nbsp;&nbsp;\n                  <a\n                    href=\"{{ profileData.quora }}\"\n                    style=\"color: black\"\n                    class=\"fa fa-quora\"\n                  ></a>\n                  &nbsp;&nbsp;&nbsp;&nbsp;\n                  <a\n                    href=\"{{ profileData.github }}\"\n                    style=\"color: black\"\n                    class=\"fa fa-github\"\n                  ></a>\n                </p>\n              </div>\n              <p style=\"text-align: center; margin-bottom: -20px\">\n                <br />\n                <strong>\n                  &copy; No Copyrights, feel free to use this template.\n                </strong>\n              </p>\n              <br />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n\n<!-- POPUP -->\n<!-- <button mat-button (click)=\"openDialog()\">Open dialog</button> -->\n"

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







var HomeComponent = /** @class */ (function () {
    function HomeComponent(appservice, route, router, dialog) {
        this.appservice = appservice;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.profileData = _data_profile_json__WEBPACK_IMPORTED_MODULE_4__;
        this.projectData = _data_projects_json__WEBPACK_IMPORTED_MODULE_5__;
        if (_data_profile_json__WEBPACK_IMPORTED_MODULE_4__.announce.length != 0) {
            //this.openDialog(profileData.announce)
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.openDialog = function (announcement) {
        this.dialog.open(_AddOnComponents_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            data: announcement,
        });
    };
    HomeComponent.prototype.toggleProject = function (val) {
        debugger;
        if (val == 'webprojects') {
            this.appservice.setProjectData(_data_projects_json__WEBPACK_IMPORTED_MODULE_5__['webProject']);
        }
        else if (val == 'androidprojects') {
            this.appservice.setProjectData(_data_projects_json__WEBPACK_IMPORTED_MODULE_5__['androidProject']);
        }
        else if (val == 'softwareprojects') {
            this.appservice.setProjectData(_data_projects_json__WEBPACK_IMPORTED_MODULE_5__['softwareProject']);
        }
        this.router.navigate(['/projects', { category: val }]);
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

module.exports = "<section class=\"prog-profiles\" data-section=\"personal-proj\">\n  <div class=\"colorlib-narrow-content\">\n    <div class=\"row\">\n      <div class=\"about-desc\">\n        <br />\n        <h1>Personal Projects</h1>\n      </div>\n      <p>\n        Here are the some of personal and college projects I have done (IN\n        PROGRESS)\n      </p>\n    </div>\n    <!--Project Descriptions divisions-->\n    <mat-accordion *ngFor=\"let projectType of projectData.projectTypes\">\n      <mat-expansion-panel\n        [expanded]=\"projectType === OpenedProjectType\"\n        (opened)=\"expandPannel(projectType)\"\n        style=\"background-color: lightblue\"\n      >\n        <mat-expansion-panel-header>\n          <mat-panel-title> {{ projectType.type }}</mat-panel-title>\n          <mat-panel-description>\n            {{ projectType.summary }}\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n\n        <!--Nested Accordion-->\n        <!--\"project.title === OpenedProject\"-->\n        <mat-accordion *ngFor=\"let project of projectData.projects\">\n          <mat-expansion-panel\n            *ngIf=\"project.type == projectType.code\"\n            [expanded]=\"true\"\n            (opened)=\"expandProject(project.title)\"\n            style=\"background-color: rgb(204, 238, 245)\"\n          >\n            <mat-expansion-panel-header\n              style=\"background-color: rgb(203, 227, 236)\"\n            >\n              <mat-panel-title> {{ project.title }}</mat-panel-title>\n              <mat-panel-description>\n                {{ project.description }}\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n            <tr class=\"proj-summary row\">\n              <td class=\"col-md-4\">\n                <img class=\"proj-image\" [src]=\"project.image_path\" />\n              </td>\n              <td class=\"col-md-8\">\n                {{ project.summary }}\n              </td>\n            </tr>\n            <div class=\"proj-footer\">\n              <div class=\"proj-tech\">\n                <div *ngFor=\"let tech of project.technologies\">\n                  <button class=\"tech-button\">{{ tech }}</button>\n                </div>\n              </div>\n              <br />\n              <div\n                *ngIf=\"project.source_code != null && project.demoURL != null\"\n              >\n                <label\n                  >Source code :\n                  <a [href]=\"project.source_code\" target=\"_blank\">\n                    click here...</a\n                  ></label\n                >\n                <br />\n                <label\n                  >Live / Video :\n                  <a [href]=\"project.demoURL\" target=\"_blank\">\n                    click here...\n                  </a>\n                </label>\n              </div>\n            </div>\n          </mat-expansion-panel>\n        </mat-accordion>\n        <!--Nested Accordion-->\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n</section>\n"

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

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside\n  id=\"colorlib-aside\"\n  role=\"complementary\"\n  class=\"border js-fullheight\"\n  style=\"height: 841px\"\n>\n  <div class=\"text-center\">\n    <img class=\"author-img\" src=\"../../assets/images/profile.jpg\" />\n    <h1 id=\"colorlib-logo\"><a routerLink=\"/\">Raghuram</a></h1>\n  </div>\n  <nav id=\"colorlib-main-menu\" role=\"navigation\" class=\"navbar\">\n    <div id=\"navbar\" class=\"collapse\">\n      <ul>\n        <li><a href=\"#\" data-nav-section=\"about\">About</a></li>\n        <li><a href=\"#\" data-nav-section=\"skills\">Skills</a></li>\n        <li>\n          <a href=\"#\" data-nav-section=\"prog-profiles\">Programming Profile</a>\n        </li>\n        <li>\n          <a href=\"#\" data-nav-section=\"personal-proj\">Personal Projects</a>\n        </li>\n        <li><a href=\"#\" data-nav-section=\"experience\">Work Experience</a></li>\n        <li><a href=\"#\" data-nav-section=\"education\">Education </a></li>\n        <li><a href=\"#\" data-nav-section=\"contact\">Contact</a></li>\n      </ul>\n    </div>\n  </nav>\n</aside>\n"

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
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
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

module.exports = __webpack_require__(/*! D:\ANGULAR\Raghuram Damarancha\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map