webpackJsonp(["library.module"],{

/***/ "../../../../../src/app/components/library/author/author.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid [data]=\"view | async\"\r\n            [height]=\"750\"\r\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n            [pageable]=\"true\" [sortable]=\"true\"\r\n            (dataStateChange)=\"onStateChange($event)\"\r\n            (edit)=\"editHandler($event)\" (remove)=\"removeHandler($event)\"\r\n            (add)=\"addHandler($event)\">\r\n  <ng-template kendoGridToolbarTemplate>\r\n    <button kendoGridAddCommand>Add new</button>\r\n  </ng-template>\r\n  <kendo-grid-column field=\"firstName\" title=\"First name\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"lastName\" title=\"Last name\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"dateOfBirth\" title=\"Date of birth\">\r\n    <ng-template kendoGridCellTemplate let-dataItem>\r\n      {{ dataItem.dateOfBirth | date:'dd/MM/yyyy' }}\r\n    </ng-template>\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"books\" title=\"Books\">\r\n    <ng-template kendoGridCellTemplate let-dataItem>\r\n      {{ dataItem.books | join:'name' }}\r\n    </ng-template>\r\n  </kendo-grid-column>\r\n  <kendo-grid-command-column title=\"Command\" width=\"220\">\r\n    <ng-template kendoGridCellTemplate>\r\n      <button kendoGridEditCommand class=\"k-button k-primary\">Edit</button>\r\n      <button kendoGridRemoveCommand>Delete</button>\r\n    </ng-template>\r\n  </kendo-grid-command-column>\r\n</kendo-grid>\r\n<kendo-edit-form-author [model]=\"editDataItem\" [isNew]=\"isNew\"\r\n                        (save)=\"saveHandler($event)\"\r\n                        (cancel)=\"cancelHandler()\">\r\n</kendo-edit-form-author>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/author/author.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_author_service__ = __webpack_require__("../../../../../src/app/services/author.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base_library_component__ = __webpack_require__("../../../../../src/app/components/library/base/base-library.component.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorComponent = /** @class */ (function (_super) {
    __extends(AuthorComponent, _super);
    function AuthorComponent(authorService) {
        var _this = _super.call(this, authorService) || this;
        _this.authorService = authorService;
        return _this;
    }
    AuthorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'component-author',
            template: __webpack_require__("../../../../../src/app/components/library/author/author.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_author_service__["a" /* AuthorService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_author_service__["a" /* AuthorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_author_service__["a" /* AuthorService */]) === "function" && _a || Object])
    ], AuthorComponent);
    return AuthorComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__base_base_library_component__["a" /* BaseLibraryComponent */]));

//# sourceMappingURL=author.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/library/author/edit-form-author/edit-form-author.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-dialog *ngIf=\"active\" (close)=\"closeForm()\">\r\n  <kendo-dialog-titlebar>\r\n    {{ isNew ? 'Add new author' : 'Edit author' }}\r\n  </kendo-dialog-titlebar>\r\n\r\n  <form novalidate [formGroup]=\"editForm\">\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"firstName\" class=\"control-label\">First name</label>\r\n      <input type=\"text\" class=\"k-textbox\" formControlName=\"firstName\" />\r\n\r\n      <div class=\"k-tooltip k-tooltip-validation\"\r\n           [hidden]=\"editForm.controls.firstName.valid || editForm.controls.firstName.pristine\">\r\n        First name is required\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"lastName\" class=\"control-label\">Last name</label>\r\n      <input type=\"text\" class=\"k-textbox\" formControlName=\"lastName\" />\r\n\r\n      <div class=\"k-tooltip k-tooltip-validation\"\r\n           [hidden]=\"editForm.controls.lastName.valid || editForm.controls.lastName.pristine\">\r\n        Last name is required\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"dateOfBirth\" class=\"control-label\">Date of birth</label>\r\n\r\n     \r\n      <kendo-datepicker formControlName=\"dateOfBirth\" [format]=\"'dd/MM/yyyy'\"></kendo-datepicker>\r\n\r\n      <div class=\"k-tooltip k-tooltip-validation\"\r\n           [hidden]=\"editForm.controls.dateOfBirth.valid || editForm.controls.dateOfBirth.pristine\">\r\n        Date of birth required\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"books\" class=\"control-label\">Books</label>\r\n\r\n      <kendo-multiselect formControlName=\"books\"\r\n                         [data]=\"listBookItems\"\r\n                         [textField]=\"'name'\"\r\n                         [valueField]=\"'id'\">\r\n      </kendo-multiselect>\r\n\r\n\r\n      <div class=\"k-tooltip k-tooltip-validation\"\r\n           [hidden]=\"editForm.controls.books.valid || editForm.controls.books.pristine\">\r\n        Books is required\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <kendo-dialog-actions>\r\n    <button class=\"k-button\" (click)=\"onCancel($event)\">Cancel</button>\r\n    <button class=\"k-button k-primary\" [disabled]=\"!editForm.valid\" (click)=\"onSave($event)\">Save</button>\r\n  </kendo-dialog-actions>\r\n</kendo-dialog>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/author/edit-form-author/edit-form-author.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFormAuthorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_author_service__ = __webpack_require__("../../../../../src/app/services/author.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_edit_form_base_librray_component__ = __webpack_require__("../../../../../src/app/components/library/base/edit-form-base-librray.component.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditFormAuthorComponent = /** @class */ (function (_super) {
    __extends(EditFormAuthorComponent, _super);
    function EditFormAuthorComponent(authorService) {
        var _this = _super.call(this) || this;
        _this.authorService = authorService;
        _this.listBookItems = [];
        _this.editForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'firstName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'lastName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'dateOfBirth': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](new Date().getDate(), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'books': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]([], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
        return _this;
    }
    EditFormAuthorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authorService.getBooksList().subscribe(function (data) {
            _this.listBookItems = data;
        });
    };
    EditFormAuthorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'kendo-edit-form-author',
            template: __webpack_require__("../../../../../src/app/components/library/author/edit-form-author/edit-form-author.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_author_service__["a" /* AuthorService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_author_service__["a" /* AuthorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_author_service__["a" /* AuthorService */]) === "function" && _a || Object])
    ], EditFormAuthorComponent);
    return EditFormAuthorComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_3__base_edit_form_base_librray_component__["a" /* EditFormBaseLibrrayComponent */]));

//# sourceMappingURL=edit-form-author.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/library/base/base-library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseLibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__progress_kendo_data_query__ = __webpack_require__("../../../../@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_app_config__ = __webpack_require__("../../../../../src/app/configs/app-config.ts");



var BaseLibraryComponent = /** @class */ (function () {
    function BaseLibraryComponent(service) {
        this.service = service;
        this.gridState = {
            sort: [],
            skip: 0,
            take: __WEBPACK_IMPORTED_MODULE_2__configs_app_config__["a" /* AppConfig */].AMOUNT_OF_DATA_ON_PAGE
        };
    }
    BaseLibraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.service.pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_map__["a" /* map */])(function (data) { return Object(__WEBPACK_IMPORTED_MODULE_0__progress_kendo_data_query__["e" /* process */])(data, _this.gridState); }));
        this.service.read();
    };
    BaseLibraryComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        this.service.read();
    };
    BaseLibraryComponent.prototype.addHandler = function () {
        this.editDataItem = {};
        this.isNew = true;
    };
    BaseLibraryComponent.prototype.editHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.editDataItem = dataItem;
        this.isNew = false;
    };
    BaseLibraryComponent.prototype.cancelHandler = function () {
        this.editDataItem = undefined;
    };
    BaseLibraryComponent.prototype.saveHandler = function (item) {
        this.service.save(item, this.isNew);
        this.editDataItem = undefined;
    };
    BaseLibraryComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.service.remove(dataItem);
    };
    return BaseLibraryComponent;
}());

//# sourceMappingURL=base-library.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/library/base/edit-form-base-librray.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFormBaseLibrrayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditFormBaseLibrrayComponent = /** @class */ (function () {
    function EditFormBaseLibrrayComponent() {
        this.active = true;
        this.isNew = false;
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    Object.defineProperty(EditFormBaseLibrrayComponent.prototype, "model", {
        set: function (item) {
            this.editForm.reset(item);
            this.active = item !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    EditFormBaseLibrrayComponent.prototype.onSave = function (e) {
        e.preventDefault();
        this.save.emit(this.editForm.value);
        this.active = false;
    };
    EditFormBaseLibrrayComponent.prototype.onCancel = function (e) {
        e.preventDefault();
        this.closeForm();
    };
    EditFormBaseLibrrayComponent.prototype.closeForm = function () {
        this.active = false;
        this.cancel.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], EditFormBaseLibrrayComponent.prototype, "isNew", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditFormBaseLibrrayComponent.prototype, "model", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
    ], EditFormBaseLibrrayComponent.prototype, "cancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
    ], EditFormBaseLibrrayComponent.prototype, "save", void 0);
    return EditFormBaseLibrrayComponent;
    var _a, _b;
}());

//# sourceMappingURL=edit-form-base-librray.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/library/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid [data]=\"view | async\"\r\n            [height]=\"750\"\r\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n            [pageable]=\"true\" [sortable]=\"true\"\r\n            (dataStateChange)=\"onStateChange($event)\"\r\n            (edit)=\"editHandler($event)\" (remove)=\"removeHandler($event)\"\r\n            (add)=\"addHandler($event)\">\r\n  <ng-template kendoGridToolbarTemplate>\r\n    <button kendoGridAddCommand>Add new</button>\r\n  </ng-template>\r\n  <kendo-grid-column field=\"name\" title=\"Name\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"yearOfPublishing\" title=\"Year of publishing\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"authors\" title=\"Authors\">\r\n    <ng-template kendoGridCellTemplate let-dataItem>\r\n      {{ dataItem.authors | join:'firstName' }}\r\n    </ng-template>\r\n  </kendo-grid-column>\r\n  <kendo-grid-column field=\"publicHouses\" title=\"Public houses\">\r\n    <ng-template kendoGridCellTemplate let-dataItem>\r\n      {{ dataItem.publicHouses | join:'name' }}\r\n    </ng-template>\r\n  </kendo-grid-column>\r\n  <kendo-grid-command-column title=\"Command\" width=\"220\">\r\n    <ng-template kendoGridCellTemplate>\r\n      <button kendoGridEditCommand class=\"k-button k-primary\">Edit</button>\r\n      <button kendoGridRemoveCommand>Delete</button>\r\n    </ng-template>\r\n  </kendo-grid-command-column>\r\n</kendo-grid>\r\n<kendo-edit-form-book [model]=\"editDataItem\" [isNew]=\"isNew\"\r\n                        (save)=\"saveHandler($event)\"\r\n                        (cancel)=\"cancelHandler()\">\r\n</kendo-edit-form-book>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base_library_component__ = __webpack_require__("../../../../../src/app/components/library/base/base-library.component.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookComponent = /** @class */ (function (_super) {
    __extends(BookComponent, _super);
    function BookComponent(bookService) {
        var _this = _super.call(this, bookService) || this;
        _this.bookService = bookService;
        return _this;
    }
    BookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'component-book',
            template: __webpack_require__("../../../../../src/app/components/library/book/book.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_book_service__["a" /* BookService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_book_service__["a" /* BookService */]) === "function" && _a || Object])
    ], BookComponent);
    return BookComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__base_base_library_component__["a" /* BaseLibraryComponent */]));

//# sourceMappingURL=book.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/library/book/edit-form-book/edit-form-book.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-dialog *ngIf=\"active\" (close)=\"closeForm()\">\r\n  <kendo-dialog-titlebar>\r\n    {{ isNew ? 'Add new book' : 'Edit book' }}\r\n  </kendo-dialog-titlebar>\r\n\r\n  <form novalidate [formGroup]=\"editForm\">\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"name\" class=\"control-label\">Name</label>\r\n      <input type=\"text\" class=\"k-textbox\" formControlName=\"name\" />\r\n\r\n      <div class=\"k-tooltip k-tooltip-validation\"\r\n           [hidden]=\"editForm.controls.name.valid || editForm.controls.name.pristine\">\r\n        Name is required\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"yearOfPublishing\" class=\"control-label\">Year of publishing</label>\r\n      <input type=\"number\" class=\"k-textbox\" formControlName=\"yearOfPublishing\" />\r\n\r\n      <div class=\"k-tooltip k-tooltip-validation\"\r\n           [hidden]=\"editForm.controls.yearOfPublishing.valid || editForm.controls.yearOfPublishing.pristine\">\r\n        Year of publishing is required (between 1850-current year)\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"authors\" class=\"control-label\">Authors</label>\r\n\r\n      <kendo-multiselect formControlName=\"authors\"\r\n                         [data]=\"listAuthorItems\"\r\n                         [textField]=\"'firstName'\"\r\n                         [valueField]=\"'id'\">\r\n      </kendo-multiselect>\r\n\r\n      <div class=\"k-tooltip k-tooltip-validation\"\r\n           [hidden]=\"editForm.controls.authors.valid || editForm.controls.authors.pristine\">\r\n        Authors is required\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"publicHouses\" class=\"control-label\">Public houses</label>\r\n\r\n      <kendo-multiselect formControlName=\"publicHouses\"\r\n                         [data]=\"listPublicHouseItems\"\r\n                         [textField]=\"'name'\"\r\n                         [valueField]=\"'id'\">\r\n      </kendo-multiselect>\r\n\r\n      <div class=\"k-tooltip k-tooltip-validation\"\r\n           [hidden]=\"editForm.controls.publicHouses.valid || editForm.controls.publicHouses.pristine\">\r\n        Public houses is required\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </form>\r\n\r\n\r\n  <kendo-dialog-actions>\r\n    <button class=\"k-button\" (click)=\"onCancel($event)\">Cancel</button>\r\n    <button class=\"k-button k-primary\" [disabled]=\"!editForm.valid\" (click)=\"onSave($event)\">Save</button>\r\n  </kendo-dialog-actions>\r\n</kendo-dialog>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/book/edit-form-book/edit-form-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFormBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_book_service__ = __webpack_require__("../../../../../src/app/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_edit_form_base_librray_component__ = __webpack_require__("../../../../../src/app/components/library/base/edit-form-base-librray.component.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditFormBookComponent = /** @class */ (function (_super) {
    __extends(EditFormBookComponent, _super);
    function EditFormBookComponent(bookService) {
        var _this = _super.call(this) || this;
        _this.bookService = bookService;
        _this.listAuthorItems = [];
        _this.listPublicHouseItems = [];
        _this.editForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'id': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'yearOfPublishing': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](new Date().getFullYear(), [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].min(1850), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].max(new Date().getFullYear())]),
            'authors': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]([], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            'publicHouses': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]([], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
        });
        return _this;
    }
    ;
    EditFormBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getAuthorsList().subscribe(function (data) {
            _this.listAuthorItems = data;
        });
        this.bookService.getPublicHousesList().subscribe(function (data) {
            _this.listPublicHouseItems = data;
        });
    };
    EditFormBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'kendo-edit-form-book',
            template: __webpack_require__("../../../../../src/app/components/library/book/edit-form-book/edit-form-book.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_book_service__["a" /* BookService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_book_service__["a" /* BookService */]) === "function" && _a || Object])
    ], EditFormBookComponent);
    return EditFormBookComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_3__base_edit_form_base_librray_component__["a" /* EditFormBaseLibrrayComponent */]));

//# sourceMappingURL=edit-form-book.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/library/brochure/brochure.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid [data]=\"view | async\"\r\n            [height]=\"750\"\r\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n            [pageable]=\"true\" [sortable]=\"true\"\r\n            (dataStateChange)=\"onStateChange($event)\"\r\n            (edit)=\"editHandler($event)\" (remove)=\"removeHandler($event)\"\r\n            (add)=\"addHandler($event)\">\r\n  <ng-template kendoGridToolbarTemplate>\r\n    <button kendoGridAddCommand>Add new</button>\r\n  </ng-template>\r\n  <kendo-grid-column field=\"name\" title=\"Name\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"typeOfCover\" title=\"Type of cover\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"numberOfPages\" title=\"Number of pages\"></kendo-grid-column>\r\n   \r\n  <kendo-grid-command-column title=\"Command\" width=\"220\">\r\n    <ng-template kendoGridCellTemplate>\r\n      <button kendoGridEditCommand class=\"k-button k-primary\">Edit</button>\r\n      <button kendoGridRemoveCommand>Delete</button>\r\n    </ng-template>\r\n  </kendo-grid-command-column>\r\n</kendo-grid>\r\n<kendo-edit-form-brochure [model]=\"editDataItem\" [isNew]=\"isNew\"\r\n                      (save)=\"saveHandler($event)\"\r\n                      (cancel)=\"cancelHandler()\">\r\n</kendo-edit-form-brochure>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/brochure/brochure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrochureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_brochure_service__ = __webpack_require__("../../../../../src/app/services/brochure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base_library_component__ = __webpack_require__("../../../../../src/app/components/library/base/base-library.component.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrochureComponent = /** @class */ (function (_super) {
    __extends(BrochureComponent, _super);
    function BrochureComponent(brochureService) {
        var _this = _super.call(this, brochureService) || this;
        _this.brochureService = brochureService;
        return _this;
    }
    BrochureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'component-brochure',
            template: __webpack_require__("../../../../../src/app/components/library/brochure/brochure.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_brochure_service__["a" /* BrochureService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_brochure_service__["a" /* BrochureService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_brochure_service__["a" /* BrochureService */]) === "function" && _a || Object])
    ], BrochureComponent);
    return BrochureComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__base_base_library_component__["a" /* BaseLibraryComponent */]));

//# sourceMappingURL=brochure.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/library/brochure/edit-form-brochure/edit-form-brochure.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-dialog *ngIf=\"active\" (close)=\"closeForm()\">\r\n  <kendo-dialog-titlebar>\r\n    {{ isNew ? 'Add new brochure' : 'Edit brochure' }}\r\n  </kendo-dialog-titlebar>\r\n\r\n  <form novalidate [formGroup]=\"editForm\">\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"name\" class=\"control-label\">Name</label>\r\n      <input type=\"text\" class=\"k-textbox\" formControlName=\"name\" />\r\n\r\n      <div class=\"k-tooltip k-tooltip-validation\"\r\n           [hidden]=\"editForm.controls.name.valid || editForm.controls.name.pristine\">\r\n        Name is required\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"typeOfCover\" class=\"control-label\">Type of convert</label>\r\n      <input type=\"text\" class=\"k-textbox\" formControlName=\"typeOfCover\" />\r\n\r\n      <div class=\"k-tooltip k-tooltip-validation\"\r\n           [hidden]=\"editForm.controls.typeOfCover.valid || editForm.controls.typeOfCover.pristine\">\r\n        Type of convert is required\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"numberOfPages\" class=\"control-label\">Number of pages</label>\r\n      <input type=\"number\" class=\"k-textbox\" formControlName=\"numberOfPages\" />\r\n\r\n      <div class=\"k-tooltip k-tooltip-validation\"\r\n           [hidden]=\"editForm.controls.numberOfPages.valid || editForm.controls.numberOfPages.pristine\">\r\n        Number of page is required\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </form>\r\n\r\n\r\n  <kendo-dialog-actions>\r\n    <button class=\"k-button\" (click)=\"onCancel($event)\">Cancel</button>\r\n    <button class=\"k-button k-primary\" [disabled]=\"!editForm.valid\" (click)=\"onSave($event)\">Save</button>\r\n  </kendo-dialog-actions>\r\n</kendo-dialog>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/brochure/edit-form-brochure/edit-form-brochure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFormBrochureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_edit_form_base_librray_component__ = __webpack_require__("../../../../../src/app/components/library/base/edit-form-base-librray.component.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditFormBrochureComponent = /** @class */ (function (_super) {
    __extends(EditFormBrochureComponent, _super);
    function EditFormBrochureComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.editForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'typeOfCover': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'numberOfPages': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](1, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].min(1)]),
        });
        return _this;
    }
    EditFormBrochureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'kendo-edit-form-brochure',
            template: __webpack_require__("../../../../../src/app/components/library/brochure/edit-form-brochure/edit-form-brochure.component.html")
        })
    ], EditFormBrochureComponent);
    return EditFormBrochureComponent;
}(__WEBPACK_IMPORTED_MODULE_2__base_edit_form_base_librray_component__["a" /* EditFormBaseLibrrayComponent */]));

//# sourceMappingURL=edit-form-brochure.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/library/library.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryModule", function() { return LibraryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_join_pipe__ = __webpack_require__("../../../../../src/app/pipes/join-pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_house_edit_form_public_house_edit_form_public_house_component__ = __webpack_require__("../../../../../src/app/components/library/public-house/edit-form-public-house/edit-form-public-house.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__magazine_edit_form_magazine_edit_form_magazine_component__ = __webpack_require__("../../../../../src/app/components/library/magazine/edit-form-magazine/edit-form-magazine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__brochure_edit_form_brochure_edit_form_brochure_component__ = __webpack_require__("../../../../../src/app/components/library/brochure/edit-form-brochure/edit-form-brochure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__book_edit_form_book_edit_form_book_component__ = __webpack_require__("../../../../../src/app/components/library/book/edit-form-book/edit-form-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__author_edit_form_author_edit_form_author_component__ = __webpack_require__("../../../../../src/app/components/library/author/edit-form-author/edit-form-author.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__public_house_public_house_component__ = __webpack_require__("../../../../../src/app/components/library/public-house/public-house.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__magazine_magazine_component__ = __webpack_require__("../../../../../src/app/components/library/magazine/magazine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__brochure_brochure_component__ = __webpack_require__("../../../../../src/app/components/library/brochure/brochure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__book_book_component__ = __webpack_require__("../../../../../src/app/components/library/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__author_author_component__ = __webpack_require__("../../../../../src/app/components/library/author/author.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: 'authors', component: __WEBPACK_IMPORTED_MODULE_12__author_author_component__["a" /* AuthorComponent */] },
    { path: 'books', component: __WEBPACK_IMPORTED_MODULE_11__book_book_component__["a" /* BookComponent */] },
    { path: 'magazines', component: __WEBPACK_IMPORTED_MODULE_9__magazine_magazine_component__["a" /* MagazineComponent */] },
    { path: 'brochures', component: __WEBPACK_IMPORTED_MODULE_10__brochure_brochure_component__["a" /* BrochureComponent */] },
    { path: 'publichouses', component: __WEBPACK_IMPORTED_MODULE_8__public_house_public_house_component__["a" /* PublicHouseComponent */] }
];
var LibraryModule = /** @class */ (function () {
    function LibraryModule() {
    }
    LibraryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_13__shared_module__["a" /* SharedModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__author_author_component__["a" /* AuthorComponent */],
                __WEBPACK_IMPORTED_MODULE_11__book_book_component__["a" /* BookComponent */],
                __WEBPACK_IMPORTED_MODULE_10__brochure_brochure_component__["a" /* BrochureComponent */],
                __WEBPACK_IMPORTED_MODULE_9__magazine_magazine_component__["a" /* MagazineComponent */],
                __WEBPACK_IMPORTED_MODULE_8__public_house_public_house_component__["a" /* PublicHouseComponent */],
                __WEBPACK_IMPORTED_MODULE_7__author_edit_form_author_edit_form_author_component__["a" /* EditFormAuthorComponent */],
                __WEBPACK_IMPORTED_MODULE_6__book_edit_form_book_edit_form_book_component__["a" /* EditFormBookComponent */],
                __WEBPACK_IMPORTED_MODULE_5__brochure_edit_form_brochure_edit_form_brochure_component__["a" /* EditFormBrochureComponent */],
                __WEBPACK_IMPORTED_MODULE_4__magazine_edit_form_magazine_edit_form_magazine_component__["a" /* EditFormMagazineComponent */],
                __WEBPACK_IMPORTED_MODULE_3__public_house_edit_form_public_house_edit_form_public_house_component__["a" /* EditFormPublicHouseComponent */],
                __WEBPACK_IMPORTED_MODULE_2__pipes_join_pipe__["a" /* JoinPipe */]
            ]
        })
    ], LibraryModule);
    return LibraryModule;
}());

//# sourceMappingURL=library.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/library/magazine/edit-form-magazine/edit-form-magazine.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-dialog *ngIf=\"active\" (close)=\"closeForm()\">\r\n  <kendo-dialog-titlebar>\r\n    {{ isNew ? 'Add new magzine' : 'Edit magazine' }}\r\n  </kendo-dialog-titlebar>\r\n\r\n  <form novalidate [formGroup]=\"editForm\">\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"name\" class=\"control-label\">Name</label>\r\n      <input type=\"text\" class=\"k-textbox\" formControlName=\"name\" />\r\n\r\n      <div class=\"k-tooltip k-tooltip-validation\"\r\n           [hidden]=\"editForm.controls.name.valid || editForm.controls.name.pristine\">\r\n        Name is required\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"authorName\" class=\"control-label\">Author name</label>\r\n      <input type=\"text\" class=\"k-textbox\" formControlName=\"authorName\" />\r\n\r\n      <div class=\"k-tooltip k-tooltip-validation\"\r\n           [hidden]=\"editForm.controls.authorName.valid || editForm.controls.authorName.pristine\">\r\n        Author name is required\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"yearOfPublishing\" class=\"control-label\">Year of publishing</label>\r\n      <input type=\"number\" class=\"k-textbox\" formControlName=\"yearOfPublishing\" />\r\n\r\n      <div class=\"k-tooltip k-tooltip-validation\"\r\n           [hidden]=\"editForm.controls.yearOfPublishing.valid || editForm.controls.yearOfPublishing.pristine\">\r\n        Year of publishing is required (between 1850-currnet Year)\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </form>\r\n\r\n  <kendo-dialog-actions>\r\n    <button class=\"k-button\" (click)=\"onCancel($event)\">Cancel</button>\r\n    <button class=\"k-button k-primary\" [disabled]=\"!editForm.valid\" (click)=\"onSave($event)\">Save</button>\r\n  </kendo-dialog-actions>\r\n</kendo-dialog>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/magazine/edit-form-magazine/edit-form-magazine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFormMagazineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_edit_form_base_librray_component__ = __webpack_require__("../../../../../src/app/components/library/base/edit-form-base-librray.component.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditFormMagazineComponent = /** @class */ (function (_super) {
    __extends(EditFormMagazineComponent, _super);
    function EditFormMagazineComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.editForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'authorName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'yearOfPublishing': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](new Date().getFullYear(), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].max(new Date().getFullYear()), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].min(1850)]),
        });
        return _this;
    }
    EditFormMagazineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'kendo-edit-form-magazine',
            template: __webpack_require__("../../../../../src/app/components/library/magazine/edit-form-magazine/edit-form-magazine.component.html")
        })
    ], EditFormMagazineComponent);
    return EditFormMagazineComponent;
}(__WEBPACK_IMPORTED_MODULE_2__base_edit_form_base_librray_component__["a" /* EditFormBaseLibrrayComponent */]));

//# sourceMappingURL=edit-form-magazine.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/library/magazine/magazine.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid [data]=\"view | async\"\r\n            [height]=\"750\"\r\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n            [pageable]=\"true\" [sortable]=\"true\"\r\n            (dataStateChange)=\"onStateChange($event)\"\r\n            (edit)=\"editHandler($event)\" (remove)=\"removeHandler($event)\"\r\n            (add)=\"addHandler($event)\">\r\n  <ng-template kendoGridToolbarTemplate>\r\n    <button kendoGridAddCommand>Add new</button>\r\n  </ng-template>\r\n  <kendo-grid-column field=\"name\" title=\"Name\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"authorName\" title=\"Author name\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"yearOfPublishing\" title=\"Yaer of publishing\"></kendo-grid-column>\r\n\r\n  <kendo-grid-command-column title=\"Command\" width=\"220\">\r\n    <ng-template kendoGridCellTemplate>\r\n      <button kendoGridEditCommand class=\"k-button k-primary\">Edit</button>\r\n      <button kendoGridRemoveCommand>Delete</button>\r\n    </ng-template>\r\n  </kendo-grid-command-column>\r\n</kendo-grid>\r\n<kendo-edit-form-magazine [model]=\"editDataItem\" [isNew]=\"isNew\"\r\n                          (save)=\"saveHandler($event)\"\r\n                          (cancel)=\"cancelHandler()\">\r\n</kendo-edit-form-magazine>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/magazine/magazine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_magazine_service__ = __webpack_require__("../../../../../src/app/services/magazine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base_library_component__ = __webpack_require__("../../../../../src/app/components/library/base/base-library.component.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MagazineComponent = /** @class */ (function (_super) {
    __extends(MagazineComponent, _super);
    function MagazineComponent(magazineService) {
        var _this = _super.call(this, magazineService) || this;
        _this.magazineService = magazineService;
        return _this;
    }
    MagazineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'component-magazine',
            template: __webpack_require__("../../../../../src/app/components/library/magazine/magazine.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_magazine_service__["a" /* MagazineService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_magazine_service__["a" /* MagazineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_magazine_service__["a" /* MagazineService */]) === "function" && _a || Object])
    ], MagazineComponent);
    return MagazineComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__base_base_library_component__["a" /* BaseLibraryComponent */]));

//# sourceMappingURL=magazine.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/library/public-house/edit-form-public-house/edit-form-public-house.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-dialog *ngIf=\"active\" (close)=\"closeForm()\">\r\n  <kendo-dialog-titlebar>\r\n    {{ isNew ? 'Add new public house' : 'Edit public house' }}\r\n  </kendo-dialog-titlebar>\r\n\r\n  <form novalidate [formGroup]=\"editForm\">\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"name\" class=\"control-label\">Name</label>\r\n      <input type=\"text\" class=\"k-textbox\" formControlName=\"name\" />\r\n\r\n      <div class=\"k-tooltip k-tooltip-validation\"\r\n           [hidden]=\"editForm.controls.name.valid || editForm.controls.name.pristine\">\r\n        Name is required\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"country\" class=\"control-label\">Country</label>\r\n      <input type=\"text\" class=\"k-textbox\" formControlName=\"country\" />\r\n\r\n      <div class=\"k-tooltip k-tooltip-validation\"\r\n           [hidden]=\"editForm.controls.country.valid || editForm.controls.country.pristine\">\r\n        Country is required\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"books\" class=\"control-label\">Books</label>\r\n      <kendo-multiselect formControlName=\"books\"\r\n                         [data]=\"listBookItems\"\r\n                         [textField]=\"'name'\"\r\n                         [valueField]=\"'id'\">\r\n      </kendo-multiselect>\r\n      <div class=\"k-tooltip k-tooltip-validation\"\r\n           [hidden]=\"editForm.controls.books.valid || editForm.controls.books.pristine\">\r\n        Books is required\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <kendo-dialog-actions>\r\n    <button class=\"k-button\" (click)=\"onCancel($event)\">Cancel</button>\r\n    <button class=\"k-button k-primary\" [disabled]=\"!editForm.valid\" (click)=\"onSave($event)\">Save</button>\r\n  </kendo-dialog-actions>\r\n</kendo-dialog>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/public-house/edit-form-public-house/edit-form-public-house.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditFormPublicHouseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_public_house_service__ = __webpack_require__("../../../../../src/app/services/public-house.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_edit_form_base_librray_component__ = __webpack_require__("../../../../../src/app/components/library/base/edit-form-base-librray.component.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditFormPublicHouseComponent = /** @class */ (function (_super) {
    __extends(EditFormPublicHouseComponent, _super);
    function EditFormPublicHouseComponent(publicHouseService) {
        var _this = _super.call(this) || this;
        _this.publicHouseService = publicHouseService;
        _this.listBookItems = [];
        _this.editForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'id': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'country': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            'books': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]([], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
        });
        return _this;
    }
    EditFormPublicHouseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.publicHouseService.getBooksList().subscribe(function (data) {
            _this.listBookItems = data;
        });
    };
    EditFormPublicHouseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'kendo-edit-form-public-house',
            template: __webpack_require__("../../../../../src/app/components/library/public-house/edit-form-public-house/edit-form-public-house.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_public_house_service__["a" /* PublicHouseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_public_house_service__["a" /* PublicHouseService */]) === "function" && _a || Object])
    ], EditFormPublicHouseComponent);
    return EditFormPublicHouseComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_3__base_edit_form_base_librray_component__["a" /* EditFormBaseLibrrayComponent */]));

//# sourceMappingURL=edit-form-public-house.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/library/public-house/public-house.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid [data]=\"view | async\"\r\n            [height]=\"750\"\r\n            [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n            [pageable]=\"true\" [sortable]=\"true\"\r\n            (dataStateChange)=\"onStateChange($event)\"\r\n            (edit)=\"editHandler($event)\" (remove)=\"removeHandler($event)\"\r\n            (add)=\"addHandler($event)\">\r\n  <ng-template kendoGridToolbarTemplate>\r\n    <button kendoGridAddCommand>Add new</button>\r\n  </ng-template>\r\n  <kendo-grid-column field=\"name\" title=\"Name\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"country\" title=\"Country\"></kendo-grid-column>\r\n  <kendo-grid-column field=\"books\" title=\"Books\">\r\n    <ng-template kendoGridCellTemplate let-dataItem>\r\n      {{ dataItem.books | join:'name' }}\r\n    </ng-template>\r\n  </kendo-grid-column>\r\n  <kendo-grid-command-column title=\"Command\" width=\"220\">\r\n    <ng-template kendoGridCellTemplate>\r\n      <button kendoGridEditCommand class=\"k-button k-primary\">Edit</button>\r\n      <button kendoGridRemoveCommand>Delete</button>\r\n    </ng-template>\r\n  </kendo-grid-command-column>\r\n</kendo-grid>\r\n<kendo-edit-form-public-house [model]=\"editDataItem\" [isNew]=\"isNew\"\r\n                        (save)=\"saveHandler($event)\"\r\n                        (cancel)=\"cancelHandler()\">\r\n</kendo-edit-form-public-house>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/library/public-house/public-house.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicHouseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_public_house_service__ = __webpack_require__("../../../../../src/app/services/public-house.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base_library_component__ = __webpack_require__("../../../../../src/app/components/library/base/base-library.component.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicHouseComponent = /** @class */ (function (_super) {
    __extends(PublicHouseComponent, _super);
    function PublicHouseComponent(publicHouseService) {
        var _this = _super.call(this, publicHouseService) || this;
        _this.publicHouseService = publicHouseService;
        return _this;
    }
    PublicHouseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'component-public-house',
            template: __webpack_require__("../../../../../src/app/components/library/public-house/public-house.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_public_house_service__["a" /* PublicHouseService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_public_house_service__["a" /* PublicHouseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_public_house_service__["a" /* PublicHouseService */]) === "function" && _a || Object])
    ], PublicHouseComponent);
    return PublicHouseComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__base_base_library_component__["a" /* BaseLibraryComponent */]));

//# sourceMappingURL=public-house.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/join-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JoinPipe = /** @class */ (function () {
    function JoinPipe() {
    }
    JoinPipe.prototype.transform = function (object, property) {
        var arrayOfPropery = object.map(function (o) { return o[property]; });
        return arrayOfPropery.join(", ");
    };
    JoinPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
            name: 'join'
        })
    ], JoinPipe);
    return JoinPipe;
}());

//# sourceMappingURL=join-pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/author.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__("../../../../../src/app/services/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configs_app_config__ = __webpack_require__("../../../../../src/app/configs/app-config.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AuthorService = /** @class */ (function (_super) {
    __extends(AuthorService, _super);
    function AuthorService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = 'api/author';
        return _this;
    }
    AuthorService.prototype.transformData = function (response) {
        var data = response.authors || [];
        console.log(data);
        data.forEach(function (a) {
            a.dateOfBirth = new Date(a.dateOfBirth);
        });
        return data;
    };
    AuthorService.prototype.getBooksList = function () {
        return this.http.get("api/book/" + __WEBPACK_IMPORTED_MODULE_3__configs_app_config__["a" /* AppConfig */].READ_ACTION).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_map__["a" /* map */])(function (res) { return res.books; }));
    };
    AuthorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], AuthorService);
    return AuthorService;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* BaseService */]));

//# sourceMappingURL=author.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_tap__ = __webpack_require__("../../../../rxjs/_esm5/operators/tap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configs_app_config__ = __webpack_require__("../../../../../src/app/configs/app-config.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BaseService = /** @class */ (function (_super) {
    __extends(BaseService, _super);
    function BaseService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.data = [];
        return _this;
    }
    BaseService.prototype.fetch = function (action, data) {
        var _this = this;
        if (action === void 0) { action = ''; }
        if (action == __WEBPACK_IMPORTED_MODULE_5__configs_app_config__["a" /* AppConfig */].READ_ACTION) {
            return this.http
                .get(this.url + "/" + action)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (res) { return _this.transformData(res); }));
        }
        return this.http
            .post(this.url + "/" + action, data)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (res) { return _this.transformData(res); }));
    };
    BaseService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(__WEBPACK_IMPORTED_MODULE_5__configs_app_config__["a" /* AppConfig */].DELETE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    BaseService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? __WEBPACK_IMPORTED_MODULE_5__configs_app_config__["a" /* AppConfig */].CREATE_ACTION : __WEBPACK_IMPORTED_MODULE_5__configs_app_config__["a" /* AppConfig */].UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    BaseService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch(__WEBPACK_IMPORTED_MODULE_5__configs_app_config__["a" /* AppConfig */].READ_ACTION)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_tap__["a" /* tap */])(function (data) { _this.data = data; }))
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    BaseService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        var originalDataItem = this.data.find(function (item) { return item.ProductID === dataItem.ProductID; });
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    BaseService.prototype.reset = function () {
        this.data = [];
    };
    BaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], BaseService);
    return BaseService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__("../../../../../src/app/services/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configs_app_config__ = __webpack_require__("../../../../../src/app/configs/app-config.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BookService = /** @class */ (function (_super) {
    __extends(BookService, _super);
    function BookService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = 'api/book';
        return _this;
    }
    BookService.prototype.transformData = function (response) {
        var data = response.books || [];
        return data;
    };
    BookService.prototype.getAuthorsList = function () {
        return this.http.get("api/author/" + __WEBPACK_IMPORTED_MODULE_3__configs_app_config__["a" /* AppConfig */].READ_ACTION).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_map__["a" /* map */])(function (res) { return res.authors; }));
    };
    BookService.prototype.getPublicHousesList = function () {
        return this.http.get("api/publichouse/" + __WEBPACK_IMPORTED_MODULE_3__configs_app_config__["a" /* AppConfig */].READ_ACTION).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_map__["a" /* map */])(function (res) { return res.publicHouses; }));
    };
    BookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], BookService);
    return BookService;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* BaseService */]));

//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/brochure.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrochureService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_service__ = __webpack_require__("../../../../../src/app/services/base.service.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BrochureService = /** @class */ (function (_super) {
    __extends(BrochureService, _super);
    function BrochureService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = 'api/brochure';
        return _this;
    }
    BrochureService.prototype.transformData = function (response) {
        var data = response.brochures || [];
        return data;
    };
    BrochureService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], BrochureService);
    return BrochureService;
}(__WEBPACK_IMPORTED_MODULE_1__base_service__["a" /* BaseService */]));

//# sourceMappingURL=brochure.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/magazine.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_service__ = __webpack_require__("../../../../../src/app/services/base.service.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MagazineService = /** @class */ (function (_super) {
    __extends(MagazineService, _super);
    function MagazineService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = 'api/magazine';
        return _this;
    }
    MagazineService.prototype.transformData = function (response) {
        var data = response.magazines || [];
        return data;
    };
    MagazineService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], MagazineService);
    return MagazineService;
}(__WEBPACK_IMPORTED_MODULE_1__base_service__["a" /* BaseService */]));

//# sourceMappingURL=magazine.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/public-house.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicHouseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__("../../../../../src/app/services/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configs_app_config__ = __webpack_require__("../../../../../src/app/configs/app-config.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PublicHouseService = /** @class */ (function (_super) {
    __extends(PublicHouseService, _super);
    function PublicHouseService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = 'api/publichouse';
        return _this;
    }
    PublicHouseService.prototype.transformData = function (response) {
        var data = response.publicHouses || [];
        console.log(data);
        return data;
    };
    PublicHouseService.prototype.getBooksList = function () {
        return this.http.get("api/book/" + __WEBPACK_IMPORTED_MODULE_3__configs_app_config__["a" /* AppConfig */].READ_ACTION).pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_map__["a" /* map */])(function (res) { return res.books; }));
    };
    PublicHouseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], PublicHouseService);
    return PublicHouseService;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* BaseService */]));

//# sourceMappingURL=public-house.service.js.map

/***/ })

});
//# sourceMappingURL=library.module.chunk.js.map