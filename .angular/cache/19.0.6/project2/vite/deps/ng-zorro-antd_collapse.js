import {
  NzDestroyService
} from "./chunk-D3WAMYJC.js";
import "./chunk-CGKDZGP4.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-KON3F5BQ.js";
import "./chunk-2SJ2DHYL.js";
import "./chunk-BQ76GOFF.js";
import "./chunk-XLXKTAMZ.js";
import {
  NzNoAnimationDirective
} from "./chunk-3Q2KX23Z.js";
import {
  collapseMotion
} from "./chunk-CA7I37YQ.js";
import "./chunk-S4RCOVZS.js";
import "./chunk-XN7EQTQK.js";
import "./chunk-BEEJEL5Z.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-DWZ7IJ2D.js";
import {
  Directionality
} from "./chunk-XWMA42Q7.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-RTBMFHVM.js";
import {
  fromEventOutsideAngular
} from "./chunk-PMSSPYGI.js";
import "./chunk-25ZD2YUN.js";
import "./chunk-CO52LRTC.js";
import "./chunk-VC5NROIR.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewChild,
  ViewEncapsulation,
  __esDecorate,
  __runInitializers,
  booleanAttribute,
  filter,
  inject,
  setClassMetadata,
  takeUntil,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-UKO23YGW.js";
import "./chunk-WDMUDEB6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-collapse.mjs
var _c0 = ["*"];
var _c1 = ["collapseHeader"];
function NzCollapsePanelComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const expandedIcon_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzType", expandedIcon_r1 || "right")("nzRotate", ctx_r1.nzActive ? 90 : 0);
  }
}
function NzCollapsePanelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, NzCollapsePanelComponent_Conditional_2_ng_container_1_Template, 2, 2, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzExpandedIcon);
  }
}
function NzCollapsePanelComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzHeader);
  }
}
function NzCollapsePanelComponent_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzExtra);
  }
}
function NzCollapsePanelComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtemplate(1, NzCollapsePanelComponent_Conditional_5_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzExtra);
  }
}
var NZ_CONFIG_MODULE_NAME$1 = "collapse";
var NzCollapseComponent = (() => {
  let _nzAccordion_decorators;
  let _nzAccordion_initializers = [];
  let _nzAccordion_extraInitializers = [];
  let _nzBordered_decorators;
  let _nzBordered_initializers = [];
  let _nzBordered_extraInitializers = [];
  let _nzGhost_decorators;
  let _nzGhost_initializers = [];
  let _nzGhost_extraInitializers = [];
  return class NzCollapseComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzAccordion_decorators = [WithConfig()];
      _nzBordered_decorators = [WithConfig()];
      _nzGhost_decorators = [WithConfig()];
      __esDecorate(null, null, _nzAccordion_decorators, {
        kind: "field",
        name: "nzAccordion",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzAccordion" in obj,
          get: (obj) => obj.nzAccordion,
          set: (obj, value) => {
            obj.nzAccordion = value;
          }
        },
        metadata: _metadata
      }, _nzAccordion_initializers, _nzAccordion_extraInitializers);
      __esDecorate(null, null, _nzBordered_decorators, {
        kind: "field",
        name: "nzBordered",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzBordered" in obj,
          get: (obj) => obj.nzBordered,
          set: (obj, value) => {
            obj.nzBordered = value;
          }
        },
        metadata: _metadata
      }, _nzBordered_initializers, _nzBordered_extraInitializers);
      __esDecorate(null, null, _nzGhost_decorators, {
        kind: "field",
        name: "nzGhost",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzGhost" in obj,
          get: (obj) => obj.nzGhost,
          set: (obj, value) => {
            obj.nzGhost = value;
          }
        },
        metadata: _metadata
      }, _nzGhost_initializers, _nzGhost_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    constructor(nzConfigService, cdr, directionality, destroy$) {
      this.nzConfigService = nzConfigService;
      this.cdr = cdr;
      this.directionality = directionality;
      this.destroy$ = destroy$;
      this._nzModuleName = NZ_CONFIG_MODULE_NAME$1;
      this.nzAccordion = __runInitializers(this, _nzAccordion_initializers, false);
      this.nzBordered = (__runInitializers(this, _nzAccordion_extraInitializers), __runInitializers(this, _nzBordered_initializers, true));
      this.nzGhost = (__runInitializers(this, _nzBordered_extraInitializers), __runInitializers(this, _nzGhost_initializers, false));
      this.nzExpandIconPosition = (__runInitializers(this, _nzGhost_extraInitializers), "start");
      this.dir = "ltr";
      this.listOfNzCollapsePanelComponent = [];
      this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME$1).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.cdr.markForCheck();
      });
    }
    ngOnInit() {
      this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      this.dir = this.directionality.value;
    }
    addPanel(value) {
      this.listOfNzCollapsePanelComponent.push(value);
    }
    removePanel(value) {
      this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    }
    click(collapse) {
      if (this.nzAccordion && !collapse.nzActive) {
        this.listOfNzCollapsePanelComponent.filter((item) => item !== collapse).forEach((item) => {
          if (item.nzActive) {
            item.nzActive = false;
            item.nzActiveChange.emit(item.nzActive);
            item.markForCheck();
          }
        });
      }
      collapse.nzActive = !collapse.nzActive;
      collapse.nzActiveChange.emit(collapse.nzActive);
    }
    static {
      this.ɵfac = function NzCollapseComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NzCollapseComponent2)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality), ɵɵdirectiveInject(NzDestroyService));
      };
    }
    static {
      this.ɵcmp = ɵɵdefineComponent({
        type: NzCollapseComponent2,
        selectors: [["nz-collapse"]],
        hostAttrs: [1, "ant-collapse"],
        hostVars: 10,
        hostBindings: function NzCollapseComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            ɵɵclassProp("ant-collapse-icon-position-start", ctx.nzExpandIconPosition === "start")("ant-collapse-icon-position-end", ctx.nzExpandIconPosition === "end")("ant-collapse-ghost", ctx.nzGhost)("ant-collapse-borderless", !ctx.nzBordered)("ant-collapse-rtl", ctx.dir === "rtl");
          }
        },
        inputs: {
          nzAccordion: [2, "nzAccordion", "nzAccordion", booleanAttribute],
          nzBordered: [2, "nzBordered", "nzBordered", booleanAttribute],
          nzGhost: [2, "nzGhost", "nzGhost", booleanAttribute],
          nzExpandIconPosition: "nzExpandIconPosition"
        },
        exportAs: ["nzCollapse"],
        features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵInputTransformsFeature],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function NzCollapseComponent_Template(rf, ctx) {
          if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });
    }
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCollapseComponent, [{
    type: Component,
    args: [{
      selector: "nz-collapse",
      exportAs: "nzCollapse",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-collapse",
        "[class.ant-collapse-icon-position-start]": `nzExpandIconPosition === 'start'`,
        "[class.ant-collapse-icon-position-end]": `nzExpandIconPosition === 'end'`,
        "[class.ant-collapse-ghost]": `nzGhost`,
        "[class.ant-collapse-borderless]": "!nzBordered",
        "[class.ant-collapse-rtl]": "dir === 'rtl'"
      },
      providers: [NzDestroyService]
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality
  }, {
    type: NzDestroyService
  }], {
    nzAccordion: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBordered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzGhost: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzExpandIconPosition: [{
      type: Input
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "collapsePanel";
var NzCollapsePanelComponent = (() => {
  let _nzShowArrow_decorators;
  let _nzShowArrow_initializers = [];
  let _nzShowArrow_extraInitializers = [];
  return class NzCollapsePanelComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzShowArrow_decorators = [WithConfig()];
      __esDecorate(null, null, _nzShowArrow_decorators, {
        kind: "field",
        name: "nzShowArrow",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzShowArrow" in obj,
          get: (obj) => obj.nzShowArrow,
          set: (obj, value) => {
            obj.nzShowArrow = value;
          }
        },
        metadata: _metadata
      }, _nzShowArrow_initializers, _nzShowArrow_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    markForCheck() {
      this.cdr.markForCheck();
    }
    constructor(nzConfigService, ngZone, cdr, destroy$) {
      this.nzConfigService = nzConfigService;
      this.ngZone = ngZone;
      this.cdr = cdr;
      this.destroy$ = destroy$;
      this._nzModuleName = NZ_CONFIG_MODULE_NAME;
      this.nzActive = false;
      this.nzDisabled = false;
      this.nzShowArrow = __runInitializers(this, _nzShowArrow_initializers, true);
      this.nzExtra = __runInitializers(this, _nzShowArrow_extraInitializers);
      this.nzActiveChange = new EventEmitter();
      this.nzCollapseComponent = inject(NzCollapseComponent, {
        host: true
      });
      this.noAnimation = inject(NzNoAnimationDirective, {
        optional: true
      });
      this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.cdr.markForCheck();
      });
    }
    ngOnInit() {
      this.nzCollapseComponent.addPanel(this);
      fromEventOutsideAngular(this.collapseHeader.nativeElement, "click").pipe(filter(() => !this.nzDisabled), takeUntil(this.destroy$)).subscribe(() => {
        this.ngZone.run(() => {
          this.nzCollapseComponent.click(this);
          this.cdr.markForCheck();
        });
      });
    }
    ngOnDestroy() {
      this.nzCollapseComponent.removePanel(this);
    }
    static {
      this.ɵfac = function NzCollapsePanelComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NzCollapsePanelComponent2)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzDestroyService));
      };
    }
    static {
      this.ɵcmp = ɵɵdefineComponent({
        type: NzCollapsePanelComponent2,
        selectors: [["nz-collapse-panel"]],
        viewQuery: function NzCollapsePanelComponent_Query(rf, ctx) {
          if (rf & 1) {
            ɵɵviewQuery(_c1, 7);
          }
          if (rf & 2) {
            let _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.collapseHeader = _t.first);
          }
        },
        hostAttrs: [1, "ant-collapse-item"],
        hostVars: 6,
        hostBindings: function NzCollapsePanelComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            ɵɵclassProp("ant-collapse-no-arrow", !ctx.nzShowArrow)("ant-collapse-item-active", ctx.nzActive)("ant-collapse-item-disabled", ctx.nzDisabled);
          }
        },
        inputs: {
          nzActive: [2, "nzActive", "nzActive", booleanAttribute],
          nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
          nzShowArrow: [2, "nzShowArrow", "nzShowArrow", booleanAttribute],
          nzExtra: "nzExtra",
          nzHeader: "nzHeader",
          nzExpandedIcon: "nzExpandedIcon"
        },
        outputs: {
          nzActiveChange: "nzActiveChange"
        },
        exportAs: ["nzCollapsePanel"],
        features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵInputTransformsFeature],
        ngContentSelectors: _c0,
        decls: 9,
        vars: 8,
        consts: [["collapseHeader", ""], ["role", "button", 1, "ant-collapse-header"], [1, "ant-collapse-header-text"], [4, "nzStringTemplateOutlet"], [1, "ant-collapse-extra"], [1, "ant-collapse-content"], [1, "ant-collapse-content-box"], ["nz-icon", "", 1, "ant-collapse-arrow", 3, "nzType", "nzRotate"]],
        template: function NzCollapsePanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div", 1, 0);
            ɵɵtemplate(2, NzCollapsePanelComponent_Conditional_2_Template, 2, 1, "div");
            ɵɵelementStart(3, "span", 2);
            ɵɵtemplate(4, NzCollapsePanelComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
            ɵɵelementEnd();
            ɵɵtemplate(5, NzCollapsePanelComponent_Conditional_5_Template, 2, 1, "div", 4);
            ɵɵelementEnd();
            ɵɵelementStart(6, "div", 5)(7, "div", 6);
            ɵɵprojection(8);
            ɵɵelementEnd()();
          }
          if (rf & 2) {
            ɵɵattribute("aria-expanded", ctx.nzActive);
            ɵɵadvance(2);
            ɵɵconditional(ctx.nzShowArrow ? 2 : -1);
            ɵɵadvance(2);
            ɵɵproperty("nzStringTemplateOutlet", ctx.nzHeader);
            ɵɵadvance();
            ɵɵconditional(ctx.nzExtra ? 5 : -1);
            ɵɵadvance();
            ɵɵclassProp("ant-collapse-content-active", ctx.nzActive);
            ɵɵproperty("@.disabled", !!(ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation))("@collapseMotion", ctx.nzActive ? "expanded" : "hidden");
          }
        },
        dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective],
        encapsulation: 2,
        data: {
          animation: [collapseMotion]
        },
        changeDetection: 0
      });
    }
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCollapsePanelComponent, [{
    type: Component,
    args: [{
      selector: "nz-collapse-panel",
      exportAs: "nzCollapsePanel",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      animations: [collapseMotion],
      template: `
    <div #collapseHeader role="button" [attr.aria-expanded]="nzActive" class="ant-collapse-header">
      @if (nzShowArrow) {
        <div>
          <ng-container *nzStringTemplateOutlet="nzExpandedIcon; let expandedIcon">
            <span
              nz-icon
              [nzType]="expandedIcon || 'right'"
              class="ant-collapse-arrow"
              [nzRotate]="nzActive ? 90 : 0"
            ></span>
          </ng-container>
        </div>
      }
      <span class="ant-collapse-header-text">
        <ng-container *nzStringTemplateOutlet="nzHeader">{{ nzHeader }}</ng-container>
      </span>
      @if (nzExtra) {
        <div class="ant-collapse-extra">
          <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
        </div>
      }
    </div>
    <div
      class="ant-collapse-content"
      [class.ant-collapse-content-active]="nzActive"
      [@.disabled]="!!noAnimation?.nzNoAnimation"
      [@collapseMotion]="nzActive ? 'expanded' : 'hidden'"
    >
      <div class="ant-collapse-content-box">
        <ng-content></ng-content>
      </div>
    </div>
  `,
      host: {
        class: "ant-collapse-item",
        "[class.ant-collapse-no-arrow]": "!nzShowArrow",
        "[class.ant-collapse-item-active]": "nzActive",
        "[class.ant-collapse-item-disabled]": "nzDisabled"
      },
      providers: [NzDestroyService],
      imports: [NzOutletModule, NzIconModule]
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzDestroyService
  }], {
    nzActive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowArrow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzExtra: [{
      type: Input
    }],
    nzHeader: [{
      type: Input
    }],
    nzExpandedIcon: [{
      type: Input
    }],
    nzActiveChange: [{
      type: Output
    }],
    collapseHeader: [{
      type: ViewChild,
      args: ["collapseHeader", {
        static: true
      }]
    }]
  });
})();
var NzCollapseModule = class _NzCollapseModule {
  static {
    this.ɵfac = function NzCollapseModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzCollapseModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzCollapseModule,
      imports: [NzCollapsePanelComponent, NzCollapseComponent],
      exports: [NzCollapsePanelComponent, NzCollapseComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzCollapsePanelComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCollapseModule, [{
    type: NgModule,
    args: [{
      imports: [NzCollapsePanelComponent, NzCollapseComponent],
      exports: [NzCollapsePanelComponent, NzCollapseComponent]
    }]
  }], null, null);
})();
export {
  NzCollapseComponent,
  NzCollapseModule,
  NzCollapsePanelComponent
};
//# sourceMappingURL=ng-zorro-antd_collapse.js.map
