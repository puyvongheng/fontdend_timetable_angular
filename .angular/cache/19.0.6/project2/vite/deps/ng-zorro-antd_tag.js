import {
  NzIconDirective,
  NzIconModule
} from "./chunk-KON3F5BQ.js";
import "./chunk-2SJ2DHYL.js";
import "./chunk-BQ76GOFF.js";
import "./chunk-XLXKTAMZ.js";
import {
  Directionality
} from "./chunk-XWMA42Q7.js";
import {
  isPresetColor,
  isStatusColor,
  presetColors,
  statusColors
} from "./chunk-RTBMFHVM.js";
import "./chunk-PMSSPYGI.js";
import "./chunk-25ZD2YUN.js";
import "./chunk-CO52LRTC.js";
import "./chunk-VC5NROIR.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  Renderer2,
  Subject,
  ViewEncapsulation,
  booleanAttribute,
  setClassMetadata,
  takeUntil,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-UKO23YGW.js";
import "./chunk-WDMUDEB6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tag.mjs
var _c0 = ["*"];
function NzTagComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-icon", 1);
    ɵɵlistener("click", function NzTagComponent_Conditional_1_Template_nz_icon_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.closeTag($event));
    });
    ɵɵelementEnd();
  }
}
var NzTagComponent = class _NzTagComponent {
  constructor(cdr, renderer, elementRef, directionality) {
    this.cdr = cdr;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.directionality = directionality;
    this.isPresetColor = false;
    this.nzMode = "default";
    this.nzChecked = false;
    this.nzBordered = true;
    this.nzOnClose = new EventEmitter();
    this.nzCheckedChange = new EventEmitter();
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  updateCheckedStatus() {
    if (this.nzMode === "checkable") {
      this.nzChecked = !this.nzChecked;
      this.nzCheckedChange.emit(this.nzChecked);
    }
  }
  closeTag(e) {
    this.nzOnClose.emit(e);
    if (!e.defaultPrevented) {
      this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
  }
  clearPresetColor() {
    const hostElement = this.elementRef.nativeElement;
    const regexp = new RegExp(`(ant-tag-(?:${[...presetColors, ...statusColors].join("|")}))`, "g");
    const classname = hostElement.classList.toString();
    const matches = [];
    let match = regexp.exec(classname);
    while (match !== null) {
      matches.push(match[1]);
      match = regexp.exec(classname);
    }
    hostElement.classList.remove(...matches);
  }
  setPresetColor() {
    const hostElement = this.elementRef.nativeElement;
    this.clearPresetColor();
    if (!this.nzColor) {
      this.isPresetColor = false;
    } else {
      this.isPresetColor = isPresetColor(this.nzColor) || isStatusColor(this.nzColor);
    }
    if (this.isPresetColor) {
      hostElement.classList.add(`ant-tag-${this.nzColor}`);
    }
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnChanges(changes) {
    const {
      nzColor
    } = changes;
    if (nzColor) {
      this.setPresetColor();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzTagComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTagComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzTagComponent,
      selectors: [["nz-tag"]],
      hostAttrs: [1, "ant-tag"],
      hostVars: 12,
      hostBindings: function NzTagComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function NzTagComponent_click_HostBindingHandler() {
            return ctx.updateCheckedStatus();
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("background-color", ctx.isPresetColor ? "" : ctx.nzColor);
          ɵɵclassProp("ant-tag-has-color", ctx.nzColor && !ctx.isPresetColor)("ant-tag-checkable", ctx.nzMode === "checkable")("ant-tag-checkable-checked", ctx.nzChecked)("ant-tag-rtl", ctx.dir === "rtl")("ant-tag-borderless", !ctx.nzBordered);
        }
      },
      inputs: {
        nzMode: "nzMode",
        nzColor: "nzColor",
        nzChecked: [2, "nzChecked", "nzChecked", booleanAttribute],
        nzBordered: [2, "nzBordered", "nzBordered", booleanAttribute]
      },
      outputs: {
        nzOnClose: "nzOnClose",
        nzCheckedChange: "nzCheckedChange"
      },
      exportAs: ["nzTag"],
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 1,
      consts: [["nzType", "close", "tabindex", "-1", 1, "ant-tag-close-icon"], ["nzType", "close", "tabindex", "-1", 1, "ant-tag-close-icon", 3, "click"]],
      template: function NzTagComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, NzTagComponent_Conditional_1_Template, 1, 0, "nz-icon", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵconditional(ctx.nzMode === "closeable" ? 1 : -1);
        }
      },
      dependencies: [NzIconModule, NzIconDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTagComponent, [{
    type: Component,
    args: [{
      selector: "nz-tag",
      exportAs: "nzTag",
      preserveWhitespaces: false,
      template: `
    <ng-content></ng-content>
    @if (nzMode === 'closeable') {
      <nz-icon nzType="close" class="ant-tag-close-icon" tabindex="-1" (click)="closeTag($event)" />
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "ant-tag",
        "[style.background-color]": `isPresetColor ? '' : nzColor`,
        "[class.ant-tag-has-color]": `nzColor && !isPresetColor`,
        "[class.ant-tag-checkable]": `nzMode === 'checkable'`,
        "[class.ant-tag-checkable-checked]": `nzChecked`,
        "[class.ant-tag-rtl]": `dir === 'rtl'`,
        "[class.ant-tag-borderless]": `!nzBordered`,
        "(click)": "updateCheckedStatus()"
      },
      imports: [NzIconModule]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: Directionality
  }], {
    nzMode: [{
      type: Input
    }],
    nzColor: [{
      type: Input
    }],
    nzChecked: [{
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
    nzOnClose: [{
      type: Output
    }],
    nzCheckedChange: [{
      type: Output
    }]
  });
})();
var NzTagModule = class _NzTagModule {
  static {
    this.ɵfac = function NzTagModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTagModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzTagModule,
      imports: [NzTagComponent],
      exports: [NzTagComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzTagComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTagModule, [{
    type: NgModule,
    args: [{
      imports: [NzTagComponent],
      exports: [NzTagComponent]
    }]
  }], null, null);
})();
export {
  NzTagComponent,
  NzTagModule
};
//# sourceMappingURL=ng-zorro-antd_tag.js.map
