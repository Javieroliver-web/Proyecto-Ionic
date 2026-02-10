import {
  CommonModule,
  Component,
  FormsModule,
  HttpClient,
  Injectable,
  IonAvatar,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  IonicModule,
  NgForOf,
  NgModule,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-EKZYQBCQ.js";
import "./chunk-VTXRO2GG.js";
import "./chunk-W7NNY2EY.js";
import "./chunk-S3YSB5NN.js";
import "./chunk-HJ6CXARR.js";
import "./chunk-B3Q2LPJS.js";
import "./chunk-CEJNIMUS.js";
import "./chunk-XFNLVVCK.js";
import "./chunk-SYDV25UP.js";
import "./chunk-MIQK7L7P.js";
import "./chunk-UUIDJRJV.js";
import "./chunk-KTT6OZOU.js";
import "./chunk-XQK2O555.js";
import "./chunk-GZ3PEZRH.js";
import "./chunk-ANT7364I.js";
import "./chunk-R5YS7M2B.js";
import "./chunk-F3JJ4YWB.js";
import "./chunk-QOQL43QQ.js";
import "./chunk-ATARXR2F.js";
import "./chunk-IVBL4Y7V.js";
import "./chunk-VJJOCIUS.js";
import "./chunk-QHQP2P2Z.js";

// src/app/services/http.service.ts
var _HttpService = class _HttpService {
  constructor(http) {
    this.http = http;
  }
  loadUsers() {
    return this.http.get("https://randomuser.me/api/?results=10");
  }
};
_HttpService.\u0275fac = function HttpService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HttpService)(\u0275\u0275inject(HttpClient));
};
_HttpService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HttpService, factory: _HttpService.\u0275fac, providedIn: "root" });
var HttpService = _HttpService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/home/home.page.ts
function HomePage_ion_item_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-avatar", 3);
    \u0275\u0275element(2, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label")(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", user_r1.picture.thumbnail, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r1.name.first, " ", user_r1.name.last);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1.email);
  }
}
var _HomePage = class _HomePage {
  constructor(httpService) {
    this.httpService = httpService;
    this.users = [];
  }
  ngOnInit() {
    this.httpService.loadUsers().subscribe((data) => {
      this.users = data.results;
    });
  }
};
_HomePage.\u0275fac = function HomePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePage)(\u0275\u0275directiveInject(HttpService));
};
_HomePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home"]], standalone: false, decls: 7, vars: 3, consts: [[3, "translucent"], [3, "fullscreen"], [4, "ngFor", "ngForOf"], ["slot", "start"], [3, "src"]], template: function HomePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3, " Usuarios Aleatorios ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-content", 1)(5, "ion-list");
    \u0275\u0275template(6, HomePage_ion_item_6_Template, 8, 4, "ion-item", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.users);
  }
}, dependencies: [NgForOf, IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar], styles: ["\n\n#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=home.page.css.map */"] });
var HomePage = _HomePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{ selector: "app-home", standalone: false, template: '<ion-header [translucent]="true">\n  <ion-toolbar>\n    <ion-title>\n      Usuarios Aleatorios\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]="true">\n  <ion-list>\n    <ion-item *ngFor="let user of users">\n      <ion-avatar slot="start">\n        <img [src]="user.picture.thumbnail" />\n      </ion-avatar>\n      <ion-label>\n        <h2>{{ user.name.first }} {{ user.name.last }}</h2>\n        <p>{{ user.email }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n', styles: ["/* src/app/home/home.page.scss */\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=home.page.css.map */\n"] }]
  }], () => [{ type: HttpService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "src/app/home/home.page.ts", lineNumber: 10 });
})();

// src/app/home/home-routing.module.ts
var routes = [
  {
    path: "",
    component: HomePage
  }
];
var _HomePageRoutingModule = class _HomePageRoutingModule {
};
_HomePageRoutingModule.\u0275fac = function HomePageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePageRoutingModule)();
};
_HomePageRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomePageRoutingModule });
_HomePageRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var HomePageRoutingModule = _HomePageRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePageRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/home/home.module.ts
var _HomePageModule = class _HomePageModule {
};
_HomePageModule.\u0275fac = function HomePageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePageModule)();
};
_HomePageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomePageModule });
_HomePageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  IonicModule,
  HomePageRoutingModule
] });
var HomePageModule = _HomePageModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePageModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule
      ],
      declarations: [HomePage]
    }]
  }], null, null);
})();
export {
  HomePageModule
};
//# sourceMappingURL=home.module-4GBBYIZ6.js.map
