import {
  registerPlugin
} from "./chunk-HFQJG5P2.js";
import {
  CommonModule,
  Component,
  FormsModule,
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonicModule,
  NgIf,
  NgModule,
  RouterModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
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
import {
  __async
} from "./chunk-QHQP2P2Z.js";

// node_modules/@capacitor/synapse/dist/synapse.mjs
function s(t) {
  t.CapacitorUtils.Synapse = new Proxy(
    {},
    {
      get(e, n) {
        return new Proxy({}, {
          get(w, o) {
            return (c, p, r) => {
              const i = t.Capacitor.Plugins[n];
              if (i === void 0) {
                r(new Error(`Capacitor plugin ${n} not found`));
                return;
              }
              if (typeof i[o] != "function") {
                r(new Error(`Method ${o} not found in Capacitor plugin ${n}`));
                return;
              }
              (() => __async(null, null, function* () {
                try {
                  const a = yield i[o](c);
                  p(a);
                } catch (a) {
                  r(a);
                }
              }))();
            };
          }
        });
      }
    }
  );
}
function u(t) {
  t.CapacitorUtils.Synapse = new Proxy(
    {},
    {
      get(e, n) {
        return t.cordova.plugins[n];
      }
    }
  );
}
function f(t = false) {
  typeof window > "u" || (window.CapacitorUtils = window.CapacitorUtils || {}, window.Capacitor !== void 0 && !t ? s(window) : window.cordova !== void 0 && u(window));
}

// node_modules/@capacitor/geolocation/dist/esm/index.js
var Geolocation = registerPlugin("Geolocation", {
  web: () => import("./web-TSR6Q2YR.js").then((m) => new m.GeolocationWeb())
});
f();

// src/app/home/home.page.ts
function HomePage_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Latitud: ", ctx_r0.latitude);
  }
}
function HomePage_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Longitud: ", ctx_r0.longitude);
  }
}
var _HomePage = class _HomePage {
  constructor() {
  }
  obtenerCoordenadas() {
    return __async(this, null, function* () {
      const coordinates = yield Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
    });
  }
};
_HomePage.\u0275fac = function HomePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePage)();
};
_HomePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home"]], standalone: false, decls: 11, vars: 4, consts: [[3, "translucent"], [1, "ion-padding", 3, "fullscreen"], [4, "ngIf"], ["expand", "block", 3, "click"]], template: function HomePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3, " Geolocalizaci\xF3n ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-content", 1)(5, "h1");
    \u0275\u0275text(6, "Mi ubicaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, HomePage_p_7_Template, 2, 1, "p", 2)(8, HomePage_p_8_Template, 2, 1, "p", 2);
    \u0275\u0275elementStart(9, "ion-button", 3);
    \u0275\u0275listener("click", function HomePage_Template_ion_button_click_9_listener() {
      return ctx.obtenerCoordenadas();
    });
    \u0275\u0275text(10, "Obtener Ubicaci\xF3n");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("translucent", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.latitude);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.longitude);
  }
}, dependencies: [NgIf, IonButton, IonContent, IonHeader, IonTitle, IonToolbar], styles: ["\n\n#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=home.page.css.map */"] });
var HomePage = _HomePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{ selector: "app-home", standalone: false, template: '<ion-header [translucent]="true">\n  <ion-toolbar>\n    <ion-title>\n      Geolocalizaci\xF3n\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]="true" class="ion-padding">\n  <h1>Mi ubicaci\xF3n</h1>\n  <p *ngIf="latitude">Latitud: {{ latitude }}</p>\n  <p *ngIf="longitude">Longitud: {{ longitude }}</p>\n  \n  <ion-button expand="block" (click)="obtenerCoordenadas()">Obtener Ubicaci\xF3n</ion-button>\n</ion-content>\n\n', styles: ["/* src/app/home/home.page.scss */\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=home.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "src/app/home/home.page.ts", lineNumber: 11 });
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
//# sourceMappingURL=home.module-XCAYN72D.js.map
