import {
  BrowserModule,
  Component,
  IonApp,
  IonRouterOutlet,
  IonicModule,
  IonicRouteStrategy,
  NgModule,
  PreloadAllModules,
  RouteReuseStrategy,
  RouterModule,
  platformBrowser,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-TAWTHQ4M.js";
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

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor() {
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: false, decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-app");
    \u0275\u0275element(1, "ion-router-outlet");
    \u0275\u0275elementEnd();
  }
}, dependencies: [IonApp, IonRouterOutlet], encapsulation: 2 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: false, template: "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 9 });
})();

// src/app/app-routing.module.ts
var routes = [
  {
    path: "home",
    loadChildren: () => import("./home.module-XCAYN72D.js").then((m) => m.HomePageModule)
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
];
var _AppRoutingModule = class _AppRoutingModule {
};
_AppRoutingModule.\u0275fac = function AppRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppRoutingModule)();
};
_AppRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
_AppRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), RouterModule] });
var AppRoutingModule = _AppRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
      ],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/app.module.ts
var _AppModule = class _AppModule {
};
_AppModule.\u0275fac = function AppModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppModule)();
};
_AppModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
_AppModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }], imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule] });
var AppModule = _AppModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppModule, [{
    type: NgModule,
    args: [{
      declarations: [AppComponent],
      imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
      providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
      bootstrap: [AppComponent]
    }]
  }], null, null);
})();

// src/main.ts
platformBrowser().bootstrapModule(AppModule).catch((err) => console.log(err));
//# sourceMappingURL=main.js.map
