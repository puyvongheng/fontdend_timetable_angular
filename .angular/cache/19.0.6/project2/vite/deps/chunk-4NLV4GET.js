import {
  toSignal
} from "./chunk-35KDMFCB.js";
import {
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
  NgTemplateOutlet
} from "./chunk-VC5NROIR.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  InjectionToken,
  Input,
  NgModule,
  Subject,
  TemplateRef,
  __esDecorate,
  __runInitializers,
  afterNextRender,
  booleanAttribute,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  takeUntil,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UKO23YGW.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-space.mjs
var _c0 = ["*"];
var _c1 = (a0) => ({
  $implicit: a0
});
function NzSpaceComponent_For_2_Conditional_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵtextInterpolate(ctx_r0.nzSplit);
  }
}
function NzSpaceComponent_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtemplate(1, NzSpaceComponent_For_2_Conditional_2_ng_template_1_Template, 1, 1, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const ɵ$index_2_r3 = ctx_r1.$index;
    const ɵ$count_2_r4 = ctx_r1.$count;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("margin-bottom", ctx_r0.nzDirection === "vertical" ? ɵ$index_2_r3 === ɵ$count_2_r4 - 1 ? null : ctx_r0.spaceSize : null, "px")("margin-right", ctx_r0.nzDirection === "horizontal" ? ɵ$index_2_r3 === ɵ$count_2_r4 - 1 ? null : ctx_r0.spaceSize : null, "px");
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzSplit)("nzStringTemplateOutletContext", ɵɵpureFunction1(6, _c1, ɵ$index_2_r3));
  }
}
function NzSpaceComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵelementContainer(1, 1);
    ɵɵelementEnd();
    ɵɵtemplate(2, NzSpaceComponent_For_2_Conditional_2_Template, 2, 8, "span", 2);
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ɵ$index_2_r3 = ctx.$index;
    const ɵ$count_2_r4 = ctx.$count;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("margin-bottom", ctx_r0.nzDirection === "vertical" ? ɵ$index_2_r3 === ɵ$count_2_r4 - 1 ? null : ctx_r0.spaceSize : null, "px")("margin-right", ctx_r0.nzDirection === "horizontal" ? ɵ$index_2_r3 === ɵ$count_2_r4 - 1 ? null : ctx_r0.spaceSize : null, "px");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r5);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzSplit && !(ɵ$index_2_r3 === ɵ$count_2_r4 - 1) ? 2 : -1);
  }
}
var NZ_SPACE_COMPACT_SIZE = new InjectionToken("NZ_SPACE_COMPACT_SIZE");
var NZ_SPACE_COMPACT_ITEMS = new InjectionToken("NZ_SPACE_COMPACT_ITEMS");
var NZ_SPACE_COMPACT_ITEM_TYPE = new InjectionToken("NZ_SPACE_COMPACT_ITEM_TYPE");
var NzSpaceCompactComponent = class _NzSpaceCompactComponent {
  constructor() {
    this.nzBlock = input(false, {
      transform: booleanAttribute
    });
    this.nzDirection = input("horizontal");
    this.nzSize = input("default");
    this.elementRef = inject(ElementRef);
  }
  static {
    this.ɵfac = function NzSpaceCompactComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzSpaceCompactComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzSpaceCompactComponent,
      selectors: [["nz-space-compact"]],
      hostAttrs: [1, "ant-space-compact"],
      hostVars: 4,
      hostBindings: function NzSpaceCompactComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-space-compact-block", ctx.nzBlock())("ant-space-compact-vertical", ctx.nzDirection() === "vertical");
        }
      },
      inputs: {
        nzBlock: [1, "nzBlock"],
        nzDirection: [1, "nzDirection"],
        nzSize: [1, "nzSize"]
      },
      exportAs: ["nzSpaceCompact"],
      features: [ɵɵProvidersFeature([{
        provide: NZ_SPACE_COMPACT_SIZE,
        useFactory: () => inject(_NzSpaceCompactComponent).nzSize
      }, {
        provide: NZ_SPACE_COMPACT_ITEMS,
        useFactory: () => signal([])
      }])],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function NzSpaceCompactComponent_Template(rf, ctx) {
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
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpaceCompactComponent, [{
    type: Component,
    args: [{
      selector: "nz-space-compact",
      exportAs: "nzSpaceCompact",
      template: `<ng-content></ng-content>`,
      host: {
        class: "ant-space-compact",
        "[class.ant-space-compact-block]": `nzBlock()`,
        "[class.ant-space-compact-vertical]": `nzDirection() === 'vertical'`
      },
      providers: [{
        provide: NZ_SPACE_COMPACT_SIZE,
        useFactory: () => inject(NzSpaceCompactComponent).nzSize
      }, {
        provide: NZ_SPACE_COMPACT_ITEMS,
        useFactory: () => signal([])
      }],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
var NzSpaceCompactItemDirective = class _NzSpaceCompactItemDirective {
  get parentElement() {
    return this.elementRef.nativeElement?.parentElement;
  }
  constructor() {
    this.spaceCompactCmp = inject(NzSpaceCompactComponent, {
      host: true,
      optional: true
    });
    this.items = inject(NZ_SPACE_COMPACT_ITEMS, {
      host: true,
      optional: true
    });
    this.type = inject(NZ_SPACE_COMPACT_ITEM_TYPE);
    this.elementRef = inject(ElementRef);
    this.directionality = inject(Directionality);
    this.dir = toSignal(this.directionality.change, {
      initialValue: this.directionality.value
    });
    this.class = computed(() => {
      if (!this.spaceCompactCmp || !this.items) return null;
      if (this.parentElement !== this.spaceCompactCmp.elementRef.nativeElement) return null;
      const items = this.items();
      const direction = this.spaceCompactCmp.nzDirection();
      const classes = [compactItemClassOf(this.type, direction, this.dir() === "rtl")];
      const index = items.indexOf(this);
      const firstIndex = items.findIndex((element) => element);
      if (index === firstIndex) {
        classes.push(compactFirstItemClassOf(this.type, direction));
      } else if (index === items.length - 1) {
        classes.push(compactLastItemClassOf(this.type, direction));
      }
      return classes;
    });
    if (!this.spaceCompactCmp || !this.items) return;
    afterNextRender(() => {
      if (this.parentElement === this.spaceCompactCmp.elementRef.nativeElement) {
        const index = Array.from(this.parentElement.children).indexOf(this.elementRef.nativeElement);
        this.items.update((value) => {
          const newValue = value.slice();
          newValue.splice(index, 0, this);
          return newValue;
        });
      }
    });
  }
  ngOnDestroy() {
    this.items?.update((value) => value.filter((o) => o !== this));
  }
  static {
    this.ɵfac = function NzSpaceCompactItemDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzSpaceCompactItemDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzSpaceCompactItemDirective,
      hostVars: 2,
      hostBindings: function NzSpaceCompactItemDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.class());
        }
      },
      exportAs: ["nzSpaceCompactItem"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpaceCompactItemDirective, [{
    type: Directive,
    args: [{
      exportAs: "nzSpaceCompactItem",
      host: {
        "[class]": "class()"
      }
    }]
  }], () => [], null);
})();
function generateCompactClass(type, direction, position) {
  const directionPrefix = direction === "vertical" ? "vertical-" : "";
  return `ant-${type}-compact-${directionPrefix}${position}`;
}
function compactItemClassOf(type, direction, rtl) {
  const rtlSuffix = rtl ? "-rtl" : "";
  return `${generateCompactClass(type, direction, "item")}${rtlSuffix}`;
}
function compactFirstItemClassOf(type, direction) {
  return generateCompactClass(type, direction, "first-item");
}
function compactLastItemClassOf(type, direction) {
  return generateCompactClass(type, direction, "last-item");
}
var NzSpaceItemDirective = class _NzSpaceItemDirective {
  static {
    this.ɵfac = function NzSpaceItemDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzSpaceItemDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzSpaceItemDirective,
      selectors: [["", "nzSpaceItem", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpaceItemDirective, [{
    type: Directive,
    args: [{
      selector: "[nzSpaceItem]"
    }]
  }], null, null);
})();
var NZ_CONFIG_MODULE_NAME = "space";
var SPACE_SIZE = {
  small: 8,
  middle: 16,
  large: 24
};
var NzSpaceComponent = (() => {
  let _nzSize_decorators;
  let _nzSize_initializers = [];
  let _nzSize_extraInitializers = [];
  return class NzSpaceComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzSize_decorators = [WithConfig()];
      __esDecorate(null, null, _nzSize_decorators, {
        kind: "field",
        name: "nzSize",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSize" in obj,
          get: (obj) => obj.nzSize,
          set: (obj, value) => {
            obj.nzSize = value;
          }
        },
        metadata: _metadata
      }, _nzSize_initializers, _nzSize_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    constructor(nzConfigService, cdr) {
      this.nzConfigService = nzConfigService;
      this.cdr = cdr;
      this._nzModuleName = NZ_CONFIG_MODULE_NAME;
      this.nzDirection = "horizontal";
      this.nzSplit = null;
      this.nzWrap = false;
      this.nzSize = __runInitializers(this, _nzSize_initializers, "small");
      this.items = __runInitializers(this, _nzSize_extraInitializers);
      this.spaceSize = SPACE_SIZE.small;
      this.destroy$ = new Subject();
    }
    updateSpaceItems() {
      const numberSize = typeof this.nzSize === "string" ? SPACE_SIZE[this.nzSize] : this.nzSize;
      this.spaceSize = numberSize / (this.nzSplit ? 2 : 1);
      this.cdr.markForCheck();
    }
    ngOnChanges() {
      this.updateSpaceItems();
      this.mergedAlign = this.nzAlign === void 0 && this.nzDirection === "horizontal" ? "center" : this.nzAlign;
    }
    ngOnDestroy() {
      this.destroy$.next(true);
      this.destroy$.complete();
    }
    ngAfterContentInit() {
      this.updateSpaceItems();
      this.items.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.cdr.markForCheck();
      });
    }
    static {
      this.ɵfac = function NzSpaceComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NzSpaceComponent2)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef));
      };
    }
    static {
      this.ɵcmp = ɵɵdefineComponent({
        type: NzSpaceComponent2,
        selectors: [["nz-space"], ["", "nz-space", ""]],
        contentQueries: function NzSpaceComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzSpaceItemDirective, 4, TemplateRef);
          }
          if (rf & 2) {
            let _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
          }
        },
        hostAttrs: [1, "ant-space"],
        hostVars: 14,
        hostBindings: function NzSpaceComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            ɵɵstyleProp("flex-wrap", ctx.nzWrap ? "wrap" : null);
            ɵɵclassProp("ant-space-horizontal", ctx.nzDirection === "horizontal")("ant-space-vertical", ctx.nzDirection === "vertical")("ant-space-align-start", ctx.mergedAlign === "start")("ant-space-align-end", ctx.mergedAlign === "end")("ant-space-align-center", ctx.mergedAlign === "center")("ant-space-align-baseline", ctx.mergedAlign === "baseline");
          }
        },
        inputs: {
          nzDirection: "nzDirection",
          nzAlign: "nzAlign",
          nzSplit: "nzSplit",
          nzWrap: [2, "nzWrap", "nzWrap", booleanAttribute],
          nzSize: "nzSize"
        },
        exportAs: ["nzSpace"],
        features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
        ngContentSelectors: _c0,
        decls: 3,
        vars: 0,
        consts: [[1, "ant-space-item"], [3, "ngTemplateOutlet"], [1, "ant-space-split", 3, "margin-bottom", "margin-right"], [1, "ant-space-split"], [3, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"]],
        template: function NzSpaceComponent_Template(rf, ctx) {
          if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
            ɵɵrepeaterCreate(1, NzSpaceComponent_For_2_Template, 3, 6, null, null, ɵɵrepeaterTrackByIdentity);
          }
          if (rf & 2) {
            ɵɵadvance();
            ɵɵrepeater(ctx.items);
          }
        },
        dependencies: [NgTemplateOutlet, NzStringTemplateOutletDirective],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpaceComponent, [{
    type: Component,
    args: [{
      selector: "nz-space, [nz-space]",
      exportAs: "nzSpace",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-content></ng-content>
    @for (item of items; track item; let last = $last; let index = $index) {
      <div
        class="ant-space-item"
        [style.margin-bottom.px]="nzDirection === 'vertical' ? (last ? null : spaceSize) : null"
        [style.margin-right.px]="nzDirection === 'horizontal' ? (last ? null : spaceSize) : null"
      >
        <ng-container [ngTemplateOutlet]="item"></ng-container>
      </div>
      @if (nzSplit && !last) {
        <span
          class="ant-space-split"
          [style.margin-bottom.px]="nzDirection === 'vertical' ? (last ? null : spaceSize) : null"
          [style.margin-right.px]="nzDirection === 'horizontal' ? (last ? null : spaceSize) : null"
        >
          <ng-template [nzStringTemplateOutlet]="nzSplit" [nzStringTemplateOutletContext]="{ $implicit: index }">{{
            nzSplit
          }}</ng-template>
        </span>
      }
    }
  `,
      host: {
        class: "ant-space",
        "[class.ant-space-horizontal]": 'nzDirection === "horizontal"',
        "[class.ant-space-vertical]": 'nzDirection === "vertical"',
        "[class.ant-space-align-start]": 'mergedAlign === "start"',
        "[class.ant-space-align-end]": 'mergedAlign === "end"',
        "[class.ant-space-align-center]": 'mergedAlign === "center"',
        "[class.ant-space-align-baseline]": 'mergedAlign === "baseline"',
        "[style.flex-wrap]": 'nzWrap ? "wrap" : null'
      },
      imports: [NgTemplateOutlet, NzStringTemplateOutletDirective]
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }], {
    nzDirection: [{
      type: Input
    }],
    nzAlign: [{
      type: Input
    }],
    nzSplit: [{
      type: Input
    }],
    nzWrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSize: [{
      type: Input
    }],
    items: [{
      type: ContentChildren,
      args: [NzSpaceItemDirective, {
        read: TemplateRef
      }]
    }]
  });
})();
var NzSpaceModule = class _NzSpaceModule {
  static {
    this.ɵfac = function NzSpaceModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzSpaceModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzSpaceModule,
      imports: [NzSpaceComponent, NzSpaceItemDirective, NzSpaceCompactComponent],
      exports: [NzSpaceComponent, NzSpaceItemDirective, NzSpaceCompactComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpaceModule, [{
    type: NgModule,
    args: [{
      imports: [NzSpaceComponent, NzSpaceItemDirective, NzSpaceCompactComponent],
      exports: [NzSpaceComponent, NzSpaceItemDirective, NzSpaceCompactComponent]
    }]
  }], null, null);
})();

export {
  NZ_SPACE_COMPACT_SIZE,
  NZ_SPACE_COMPACT_ITEMS,
  NZ_SPACE_COMPACT_ITEM_TYPE,
  NzSpaceCompactComponent,
  NzSpaceCompactItemDirective,
  NzSpaceItemDirective,
  NzSpaceComponent,
  NzSpaceModule
};
//# sourceMappingURL=chunk-4NLV4GET.js.map
