"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var products_service_1 = require("./products.service");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent(prodserv) {
        this.prodserv = prodserv;
        this.name = 'James';
        this.email = "james@gmail.com";
        this.show = true;
        this.students = [{ "name": "james", "email": "james@gmail.com", "mobile": 234234, "id": 323 }, { "name": "vimal", "email": "vinmal@gmail.com", "mobile": 234234, "id": 303 }, { "name": "kishore", "email": "kishore@gmail.com", "mobile": 34234234, "id": 313 }, { "name": "sureh", "email": "suresh@gmail.com", "mobile": 234435345, "id": 345 }, { "name": "krish", "email": "krish@gmail.com", "mobile": 432234324, "id": 320 }];
        this.imagePath = 'app/img/1.jpg';
        this.cartProducts = [];
        this.ind = 1;
    }
    // function implementing
    AppComponent.prototype.getNameInCaps = function (name) {
        return name.toUpperCase();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prodserv.getProducts().subscribe(function (products) { return _this.products = products; });
        return this.products;
    };
    AppComponent.prototype.cart = function (pname, pid, pcost, image) {
        this.cartProducts.push({ "pname": pname, "pid": pid, "pcost": pcost, "image": image, "ind": this.ind });
        this.ind++;
    };
    AppComponent.prototype.del = function (ind) {
        for (var i = 0; i < this.cartProducts.length; i++) {
            if (this.cartProducts[i].ind == ind) {
                this.cartProducts.splice(i, 1);
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        // template: `<h1>Hello {{name}}</h1>
        // `,
        templateUrl: "app/app.component.html",
        // styles: ['.desc {font-size: 20px; color: blue;}'],
        styleUrls: ['./app.style.css'],
        providers: [products_service_1.ProductsServices]
    }),
    __metadata("design:paramtypes", [products_service_1.ProductsServices])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map