import {
  NzIconDirective,
  NzIconModule
} from "./chunk-KON3F5BQ.js";
import "./chunk-2SJ2DHYL.js";
import "./chunk-BQ76GOFF.js";
import "./chunk-XLXKTAMZ.js";
import {
  NzStringTemplateOutletDirective
} from "./chunk-DWZ7IJ2D.js";
import "./chunk-RTBMFHVM.js";
import "./chunk-PMSSPYGI.js";
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
  Output,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UKO23YGW.js";
import "./chunk-WDMUDEB6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-hash-code.mjs
var _c0 = (a0) => ({
  height: a0
});
function NzHashCodeComponent_Conditional_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵtextInterpolate(ctx_r1.nzLogo);
  }
}
function NzHashCodeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0)(1, "div", 22);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 23);
    ɵɵlistener("click", function NzHashCodeComponent_Conditional_0_Template_div_click_3_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.copyHandle());
    });
    ɵɵelement(4, "nz-icon", 24);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 25);
    ɵɵtemplate(6, NzHashCodeComponent_Conditional_0_ng_template_6_Template, 1, 1, "ng-template", 26);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.nzTitle);
    ɵɵadvance(4);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzLogo);
  }
}
function NzHashCodeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 23);
    ɵɵlistener("click", function NzHashCodeComponent_Conditional_1_Template_div_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.copyHandle());
    });
    ɵɵelement(1, "nz-icon", 24);
    ɵɵelementEnd();
  }
}
function NzHashCodeComponent_Conditional_4_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const v_r4 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(v_r4);
  }
}
function NzHashCodeComponent_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzHashCodeComponent_Conditional_4_Conditional_0_For_1_Template, 2, 1, "div", 27, ɵɵrepeaterTrackByIdentity);
    ɵɵelementStart(2, "div", 27);
    ɵɵtext(3, "····");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 27);
    ɵɵtext(5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵrepeater(ctx_r1.hashDataList.slice(0, 6));
    ɵɵadvance(5);
    ɵɵtextInterpolate(ctx_r1.hashDataList[ctx_r1.hashDataList.length - 1]);
  }
}
function NzHashCodeComponent_Conditional_4_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const v_r5 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(v_r5);
  }
}
function NzHashCodeComponent_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzHashCodeComponent_Conditional_4_Conditional_1_For_1_Template, 2, 1, "div", 27, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵrepeater(ctx_r1.hashDataList);
  }
}
function NzHashCodeComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzHashCodeComponent_Conditional_4_Conditional_0_Template, 6, 1)(1, NzHashCodeComponent_Conditional_4_Conditional_1_Template, 2, 0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(ctx_r1.hashDataList.length > 8 ? 0 : 1);
  }
}
function NzHashCodeComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵelementStart(2, "div", 27);
    ɵɵtext(3, "····");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 27);
    ɵɵtext(5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.hashDataList[0]);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r1.hashDataList[ctx_r1.hashDataList.length - 1]);
  }
}
function NzHashCodeComponent_Conditional_6_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const v_r6 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(v_r6);
  }
}
function NzHashCodeComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzHashCodeComponent_Conditional_6_Conditional_0_For_1_Template, 2, 1, "div", 27, ɵɵrepeaterTrackByIdentity);
    ɵɵelementStart(2, "div", 27);
    ɵɵtext(3, "····");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 27);
    ɵɵtext(5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵrepeater(ctx_r1.hashDataList.slice(0, 14));
    ɵɵadvance(5);
    ɵɵtextInterpolate(ctx_r1.hashDataList[ctx_r1.hashDataList.length - 1]);
  }
}
function NzHashCodeComponent_Conditional_6_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const v_r7 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(v_r7);
  }
}
function NzHashCodeComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzHashCodeComponent_Conditional_6_Conditional_1_For_1_Template, 2, 1, "div", 27, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵrepeater(ctx_r1.hashDataList);
  }
}
function NzHashCodeComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzHashCodeComponent_Conditional_6_Conditional_0_Template, 6, 1)(1, NzHashCodeComponent_Conditional_6_Conditional_1_Template, 2, 0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(ctx_r1.hashDataList.length > 16 ? 0 : 1);
  }
}
var NzHashCodeComponent = class _NzHashCodeComponent {
  copyHandle() {
    this.nzOnCopy.emit(this.nzValue);
  }
  constructor(cdr) {
    this.cdr = cdr;
    this.nzValue = "";
    this.nzTitle = "HashCode";
    this.nzLogo = "";
    this.nzMode = "double";
    this.nzType = "default";
    this.nzOnCopy = new EventEmitter();
    this.hashDataList = [];
  }
  ngOnChanges(changes) {
    const {
      nzValue
    } = changes;
    if (nzValue) {
      this.setData(this.nzValue);
    }
  }
  setData(value) {
    if (this.nzMode !== "single") {
      this.hashDataList = value.match(/.{1,4}/g);
    } else {
      this.hashDataList = value.match(/.{1,8}/g);
    }
    this.cdr.markForCheck();
  }
  static {
    this.ɵfac = function NzHashCodeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzHashCodeComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzHashCodeComponent,
      selectors: [["nz-hash-code"]],
      hostAttrs: [1, "ant-hashCode"],
      hostVars: 12,
      hostBindings: function NzHashCodeComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-hashCode-default", ctx.nzType === "default")("ant-hashCode-primary", ctx.nzType === "primary")("ant-hashCode-double", ctx.nzMode === "double")("ant-hashCode-single", ctx.nzMode === "single")("ant-hashCode-strip", ctx.nzMode === "strip")("ant-hashCode-rect", ctx.nzMode === "rect");
        }
      },
      inputs: {
        nzValue: "nzValue",
        nzTitle: "nzTitle",
        nzLogo: "nzLogo",
        nzMode: "nzMode",
        nzType: "nzType"
      },
      outputs: {
        nzOnCopy: "nzOnCopy"
      },
      exportAs: ["nzHashCode"],
      features: [ɵɵNgOnChangesFeature],
      decls: 44,
      vars: 21,
      consts: [[1, "ant-hashCode-header"], [1, "ant-hashCode-header-copy"], [1, "ant-hashCode-contant"], [1, "ant-hashCode-code-value"], [1, "ant-hashCode-texaure"], ["width", "545px", "height", "111px", "viewBox", "0 0 545 111", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "15.7162414%", "y1", "50.0992184%", "x2", "49.5266564%", "y2", "50.0234565%", "id", "linearGradient-2bm6v9icte-1"], ["stop-color", "#A76A00", "offset", "0%"], ["stop-color", "#F50006", "offset", "61.2716995%"], ["stop-color", "#DA8500", "offset", "100%"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["transform", "translate(-163.000000, -315.000000)", "stroke", "url(#linearGradient-2bm6v9icte-1)", "stroke-width", "0.72"], ["transform", "translate(163.535712, 316.000000)", 2, "mix-blend-mode", "exclusion"], ["d", "M0,0 C22.68,0 22.68,5.76 45.36,5.76 C68.04,5.76 68.04,0 90.72,0 C113.4,0 113.4,5.76 136.08,5.76 C158.76,5.76 158.76,0 181.44,0 C204.12,0 204.12,5.76 226.8,5.76 C249.48,5.76 249.48,0 272.16,0"], ["d", "M0,28.08 C22.68,28.08 22.68,33.84 45.36,33.84 C68.04,33.84 68.04,28.08 90.72,28.08 C113.4,28.08 113.4,33.84 136.08,33.84 C158.76,33.84 158.76,28.08 181.44,28.08 C204.12,28.08 204.12,33.84 226.8,33.84 C249.48,33.84 249.48,28.08 272.16,28.08"], ["d", "M0,37.44 C22.68,37.44 22.68,43.2 45.36,43.2 C68.04,43.2 68.04,37.44 90.72,37.44 C113.4,37.44 113.4,43.2 136.08,43.2 C158.76,43.2 158.76,37.44 181.44,37.44 C204.12,37.44 204.12,43.2 226.8,43.2 C249.48,43.2 249.48,37.44 272.16,37.44"], ["d", "M0,9.36 C22.68,9.36 22.68,15.12 45.36,15.12 C68.04,15.12 68.04,9.36 90.72,9.36 C113.4,9.36 113.4,15.12 136.08,15.12 C158.76,15.12 158.76,9.36 181.44,9.36 C204.12,9.36 204.12,15.12 226.8,15.12 C249.48,15.12 249.48,9.36 272.16,9.36"], ["d", "M0,18.72 C22.68,18.72 22.68,24.48 45.36,24.48 C68.04,24.48 68.04,18.72 90.72,18.72 C113.4,18.72 113.4,24.48 136.08,24.48 C158.76,24.48 158.76,18.72 181.44,18.72 C204.12,18.72 204.12,24.48 226.8,24.48 C249.48,24.48 249.48,18.72 272.16,18.72"], ["d", "M0,46.8 C22.68,46.8 22.68,52.56 45.36,52.56 C68.04,52.56 68.04,46.8 90.72,46.8 C113.4,46.8 113.4,52.56 136.08,52.56 C158.76,52.56 158.76,46.8 181.44,46.8 C204.12,46.8 204.12,52.56 226.8,52.56 C249.48,52.56 249.48,46.8 272.16,46.8"], ["transform", "translate(163.535712, 373.000000)", 2, "mix-blend-mode", "exclusion"], ["transform", "translate(435.535712, 316.000000)", 2, "mix-blend-mode", "exclusion"], ["transform", "translate(435.535712, 373.000000)", 2, "mix-blend-mode", "exclusion"], [1, "ant-hashCode-header-title"], [1, "ant-hashCode-header-copy", 3, "click"], ["nzType", "copy", "nzTheme", "outline"], [1, "ant-hashCode-header-logo"], [3, "nzStringTemplateOutlet"], [1, "ant-hashCode-code-value-block"]],
      template: function NzHashCodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzHashCodeComponent_Conditional_0_Template, 7, 2, "div", 0)(1, NzHashCodeComponent_Conditional_1_Template, 2, 0, "div", 1);
          ɵɵelementStart(2, "div", 2)(3, "div", 3);
          ɵɵtemplate(4, NzHashCodeComponent_Conditional_4_Template, 2, 1)(5, NzHashCodeComponent_Conditional_5_Template, 6, 2)(6, NzHashCodeComponent_Conditional_6_Template, 2, 1);
          ɵɵelementEnd();
          ɵɵelementStart(7, "div", 4);
          ɵɵnamespaceSVG();
          ɵɵelementStart(8, "svg", 5)(9, "defs")(10, "linearGradient", 6);
          ɵɵelement(11, "stop", 7)(12, "stop", 8)(13, "stop", 9);
          ɵɵelementEnd()();
          ɵɵelementStart(14, "g", 10)(15, "g", 11)(16, "g", 12);
          ɵɵelement(17, "path", 13)(18, "path", 14)(19, "path", 15)(20, "path", 16)(21, "path", 17)(22, "path", 18);
          ɵɵelementEnd();
          ɵɵelementStart(23, "g", 19);
          ɵɵelement(24, "path", 13)(25, "path", 14)(26, "path", 15)(27, "path", 16)(28, "path", 17)(29, "path", 18);
          ɵɵelementEnd();
          ɵɵelementStart(30, "g", 20);
          ɵɵelement(31, "path", 13)(32, "path", 14)(33, "path", 15)(34, "path", 16)(35, "path", 17)(36, "path", 18);
          ɵɵelementEnd();
          ɵɵelementStart(37, "g", 21);
          ɵɵelement(38, "path", 13)(39, "path", 14)(40, "path", 15)(41, "path", 16)(42, "path", 17)(43, "path", 18);
          ɵɵelementEnd()()()()()();
        }
        if (rf & 2) {
          ɵɵconditional(ctx.nzMode !== "single" && ctx.nzMode !== "rect" ? 0 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.nzMode === "single" || ctx.nzMode === "rect" ? 1 : -1);
          ɵɵadvance();
          ɵɵclassProp("ant-hashCode-value-default", ctx.nzType === "default")("ant-hashCode-value-primary", ctx.nzType === "primary");
          ɵɵadvance();
          ɵɵstyleMap(ɵɵpureFunction1(19, _c0, ctx.nzMode === "rect" ? "70px" : ctx.nzMode === "single" ? "18px" : "35px"));
          ɵɵadvance();
          ɵɵconditional(ctx.nzMode === "double" ? 4 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.nzMode === "single" ? 5 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.nzMode === "rect" || ctx.nzMode === "strip" ? 6 : -1);
          ɵɵadvance();
          ɵɵclassProp("ant-hashCode-texaure-double", ctx.nzMode === "double")("ant-hashCode-texaure-single", ctx.nzMode === "single")("ant-hashCode-texaure-strip", ctx.nzMode === "strip")("ant-hashCode-texaure-rect", ctx.nzMode === "rect");
        }
      },
      dependencies: [NzIconModule, NzIconDirective, NzStringTemplateOutletDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzHashCodeComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NzIconModule, NzStringTemplateOutletDirective],
      selector: "nz-hash-code",
      exportAs: "nzHashCode",
      template: `
    @if (nzMode !== 'single' && nzMode !== 'rect') {
      <div class="ant-hashCode-header">
        <div class="ant-hashCode-header-title">{{ nzTitle }}</div>
        <div class="ant-hashCode-header-copy" (click)="copyHandle()">
          <nz-icon nzType="copy" nzTheme="outline" />
        </div>
        <div class="ant-hashCode-header-logo">
          <ng-template [nzStringTemplateOutlet]="nzLogo">{{ nzLogo }}</ng-template>
        </div>
      </div>
    }

    @if (nzMode === 'single' || nzMode === 'rect') {
      <div class="ant-hashCode-header-copy" (click)="copyHandle()">
        <nz-icon nzType="copy" nzTheme="outline" />
      </div>
    }

    <div
      class="ant-hashCode-contant"
      [class.ant-hashCode-value-default]="nzType === 'default'"
      [class.ant-hashCode-value-primary]="nzType === 'primary'"
    >
      <div
        class="ant-hashCode-code-value"
        [style]="{ height: nzMode === 'rect' ? '70px' : nzMode === 'single' ? '18px' : '35px' }"
      >
        @if (nzMode === 'double') {
          @if (hashDataList.length > 8) {
            @for (v of hashDataList.slice(0, 6); track v) {
              <div class="ant-hashCode-code-value-block">{{ v }}</div>
            }
            <div class="ant-hashCode-code-value-block">····</div>
            <div class="ant-hashCode-code-value-block">{{ hashDataList[hashDataList.length - 1] }}</div>
          } @else {
            @for (v of hashDataList; track v) {
              <div class="ant-hashCode-code-value-block">{{ v }}</div>
            }
          }
        }

        @if (nzMode === 'single') {
          <div class="ant-hashCode-code-value-block">{{ hashDataList[0] }}</div>
          <div class="ant-hashCode-code-value-block">····</div>
          <div class="ant-hashCode-code-value-block">{{ hashDataList[hashDataList.length - 1] }}</div>
        }

        @if (nzMode === 'rect' || nzMode === 'strip') {
          @if (hashDataList.length > 16) {
            @for (v of hashDataList.slice(0, 14); track v) {
              <div class="ant-hashCode-code-value-block">{{ v }}</div>
            }
            <div class="ant-hashCode-code-value-block">····</div>
            <div class="ant-hashCode-code-value-block">{{ hashDataList[hashDataList.length - 1] }}</div>
          } @else {
            @for (v of hashDataList; track v) {
              <div class="ant-hashCode-code-value-block">{{ v }}</div>
            }
          }
        }
      </div>
      <div
        class="ant-hashCode-texaure"
        [class.ant-hashCode-texaure-double]="nzMode === 'double'"
        [class.ant-hashCode-texaure-single]="nzMode === 'single'"
        [class.ant-hashCode-texaure-strip]="nzMode === 'strip'"
        [class.ant-hashCode-texaure-rect]="nzMode === 'rect'"
      >
        <svg width="545px" height="111px" viewBox="0 0 545 111" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              x1="15.7162414%"
              y1="50.0992184%"
              x2="49.5266564%"
              y2="50.0234565%"
              id="linearGradient-2bm6v9icte-1"
            >
              <stop stop-color="#A76A00" offset="0%"></stop>
              <stop stop-color="#F50006" offset="61.2716995%"></stop>
              <stop stop-color="#DA8500" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g
              transform="translate(-163.000000, -315.000000)"
              stroke="url(#linearGradient-2bm6v9icte-1)"
              stroke-width="0.72"
            >
              <g transform="translate(163.535712, 316.000000)" style="mix-blend-mode: exclusion;">
                <path
                  d="M0,0 C22.68,0 22.68,5.76 45.36,5.76 C68.04,5.76 68.04,0 90.72,0 C113.4,0 113.4,5.76 136.08,5.76 C158.76,5.76 158.76,0 181.44,0 C204.12,0 204.12,5.76 226.8,5.76 C249.48,5.76 249.48,0 272.16,0"
                ></path>
                <path
                  d="M0,28.08 C22.68,28.08 22.68,33.84 45.36,33.84 C68.04,33.84 68.04,28.08 90.72,28.08 C113.4,28.08 113.4,33.84 136.08,33.84 C158.76,33.84 158.76,28.08 181.44,28.08 C204.12,28.08 204.12,33.84 226.8,33.84 C249.48,33.84 249.48,28.08 272.16,28.08"
                ></path>
                <path
                  d="M0,37.44 C22.68,37.44 22.68,43.2 45.36,43.2 C68.04,43.2 68.04,37.44 90.72,37.44 C113.4,37.44 113.4,43.2 136.08,43.2 C158.76,43.2 158.76,37.44 181.44,37.44 C204.12,37.44 204.12,43.2 226.8,43.2 C249.48,43.2 249.48,37.44 272.16,37.44"
                ></path>
                <path
                  d="M0,9.36 C22.68,9.36 22.68,15.12 45.36,15.12 C68.04,15.12 68.04,9.36 90.72,9.36 C113.4,9.36 113.4,15.12 136.08,15.12 C158.76,15.12 158.76,9.36 181.44,9.36 C204.12,9.36 204.12,15.12 226.8,15.12 C249.48,15.12 249.48,9.36 272.16,9.36"
                ></path>
                <path
                  d="M0,18.72 C22.68,18.72 22.68,24.48 45.36,24.48 C68.04,24.48 68.04,18.72 90.72,18.72 C113.4,18.72 113.4,24.48 136.08,24.48 C158.76,24.48 158.76,18.72 181.44,18.72 C204.12,18.72 204.12,24.48 226.8,24.48 C249.48,24.48 249.48,18.72 272.16,18.72"
                ></path>
                <path
                  d="M0,46.8 C22.68,46.8 22.68,52.56 45.36,52.56 C68.04,52.56 68.04,46.8 90.72,46.8 C113.4,46.8 113.4,52.56 136.08,52.56 C158.76,52.56 158.76,46.8 181.44,46.8 C204.12,46.8 204.12,52.56 226.8,52.56 C249.48,52.56 249.48,46.8 272.16,46.8"
                ></path>
              </g>
              <g transform="translate(163.535712, 373.000000)" style="mix-blend-mode: exclusion;">
                <path
                  d="M0,0 C22.68,0 22.68,5.76 45.36,5.76 C68.04,5.76 68.04,0 90.72,0 C113.4,0 113.4,5.76 136.08,5.76 C158.76,5.76 158.76,0 181.44,0 C204.12,0 204.12,5.76 226.8,5.76 C249.48,5.76 249.48,0 272.16,0"
                ></path>
                <path
                  d="M0,28.08 C22.68,28.08 22.68,33.84 45.36,33.84 C68.04,33.84 68.04,28.08 90.72,28.08 C113.4,28.08 113.4,33.84 136.08,33.84 C158.76,33.84 158.76,28.08 181.44,28.08 C204.12,28.08 204.12,33.84 226.8,33.84 C249.48,33.84 249.48,28.08 272.16,28.08"
                ></path>
                <path
                  d="M0,37.44 C22.68,37.44 22.68,43.2 45.36,43.2 C68.04,43.2 68.04,37.44 90.72,37.44 C113.4,37.44 113.4,43.2 136.08,43.2 C158.76,43.2 158.76,37.44 181.44,37.44 C204.12,37.44 204.12,43.2 226.8,43.2 C249.48,43.2 249.48,37.44 272.16,37.44"
                ></path>
                <path
                  d="M0,9.36 C22.68,9.36 22.68,15.12 45.36,15.12 C68.04,15.12 68.04,9.36 90.72,9.36 C113.4,9.36 113.4,15.12 136.08,15.12 C158.76,15.12 158.76,9.36 181.44,9.36 C204.12,9.36 204.12,15.12 226.8,15.12 C249.48,15.12 249.48,9.36 272.16,9.36"
                ></path>
                <path
                  d="M0,18.72 C22.68,18.72 22.68,24.48 45.36,24.48 C68.04,24.48 68.04,18.72 90.72,18.72 C113.4,18.72 113.4,24.48 136.08,24.48 C158.76,24.48 158.76,18.72 181.44,18.72 C204.12,18.72 204.12,24.48 226.8,24.48 C249.48,24.48 249.48,18.72 272.16,18.72"
                ></path>
                <path
                  d="M0,46.8 C22.68,46.8 22.68,52.56 45.36,52.56 C68.04,52.56 68.04,46.8 90.72,46.8 C113.4,46.8 113.4,52.56 136.08,52.56 C158.76,52.56 158.76,46.8 181.44,46.8 C204.12,46.8 204.12,52.56 226.8,52.56 C249.48,52.56 249.48,46.8 272.16,46.8"
                ></path>
              </g>
              <g transform="translate(435.535712, 316.000000)" style="mix-blend-mode: exclusion;">
                <path
                  d="M0,0 C22.68,0 22.68,5.76 45.36,5.76 C68.04,5.76 68.04,0 90.72,0 C113.4,0 113.4,5.76 136.08,5.76 C158.76,5.76 158.76,0 181.44,0 C204.12,0 204.12,5.76 226.8,5.76 C249.48,5.76 249.48,0 272.16,0"
                ></path>
                <path
                  d="M0,28.08 C22.68,28.08 22.68,33.84 45.36,33.84 C68.04,33.84 68.04,28.08 90.72,28.08 C113.4,28.08 113.4,33.84 136.08,33.84 C158.76,33.84 158.76,28.08 181.44,28.08 C204.12,28.08 204.12,33.84 226.8,33.84 C249.48,33.84 249.48,28.08 272.16,28.08"
                ></path>
                <path
                  d="M0,37.44 C22.68,37.44 22.68,43.2 45.36,43.2 C68.04,43.2 68.04,37.44 90.72,37.44 C113.4,37.44 113.4,43.2 136.08,43.2 C158.76,43.2 158.76,37.44 181.44,37.44 C204.12,37.44 204.12,43.2 226.8,43.2 C249.48,43.2 249.48,37.44 272.16,37.44"
                ></path>
                <path
                  d="M0,9.36 C22.68,9.36 22.68,15.12 45.36,15.12 C68.04,15.12 68.04,9.36 90.72,9.36 C113.4,9.36 113.4,15.12 136.08,15.12 C158.76,15.12 158.76,9.36 181.44,9.36 C204.12,9.36 204.12,15.12 226.8,15.12 C249.48,15.12 249.48,9.36 272.16,9.36"
                ></path>
                <path
                  d="M0,18.72 C22.68,18.72 22.68,24.48 45.36,24.48 C68.04,24.48 68.04,18.72 90.72,18.72 C113.4,18.72 113.4,24.48 136.08,24.48 C158.76,24.48 158.76,18.72 181.44,18.72 C204.12,18.72 204.12,24.48 226.8,24.48 C249.48,24.48 249.48,18.72 272.16,18.72"
                ></path>
                <path
                  d="M0,46.8 C22.68,46.8 22.68,52.56 45.36,52.56 C68.04,52.56 68.04,46.8 90.72,46.8 C113.4,46.8 113.4,52.56 136.08,52.56 C158.76,52.56 158.76,46.8 181.44,46.8 C204.12,46.8 204.12,52.56 226.8,52.56 C249.48,52.56 249.48,46.8 272.16,46.8"
                ></path>
              </g>
              <g transform="translate(435.535712, 373.000000)" style="mix-blend-mode: exclusion;">
                <path
                  d="M0,0 C22.68,0 22.68,5.76 45.36,5.76 C68.04,5.76 68.04,0 90.72,0 C113.4,0 113.4,5.76 136.08,5.76 C158.76,5.76 158.76,0 181.44,0 C204.12,0 204.12,5.76 226.8,5.76 C249.48,5.76 249.48,0 272.16,0"
                ></path>
                <path
                  d="M0,28.08 C22.68,28.08 22.68,33.84 45.36,33.84 C68.04,33.84 68.04,28.08 90.72,28.08 C113.4,28.08 113.4,33.84 136.08,33.84 C158.76,33.84 158.76,28.08 181.44,28.08 C204.12,28.08 204.12,33.84 226.8,33.84 C249.48,33.84 249.48,28.08 272.16,28.08"
                ></path>
                <path
                  d="M0,37.44 C22.68,37.44 22.68,43.2 45.36,43.2 C68.04,43.2 68.04,37.44 90.72,37.44 C113.4,37.44 113.4,43.2 136.08,43.2 C158.76,43.2 158.76,37.44 181.44,37.44 C204.12,37.44 204.12,43.2 226.8,43.2 C249.48,43.2 249.48,37.44 272.16,37.44"
                ></path>
                <path
                  d="M0,9.36 C22.68,9.36 22.68,15.12 45.36,15.12 C68.04,15.12 68.04,9.36 90.72,9.36 C113.4,9.36 113.4,15.12 136.08,15.12 C158.76,15.12 158.76,9.36 181.44,9.36 C204.12,9.36 204.12,15.12 226.8,15.12 C249.48,15.12 249.48,9.36 272.16,9.36"
                ></path>
                <path
                  d="M0,18.72 C22.68,18.72 22.68,24.48 45.36,24.48 C68.04,24.48 68.04,18.72 90.72,18.72 C113.4,18.72 113.4,24.48 136.08,24.48 C158.76,24.48 158.76,18.72 181.44,18.72 C204.12,18.72 204.12,24.48 226.8,24.48 C249.48,24.48 249.48,18.72 272.16,18.72"
                ></path>
                <path
                  d="M0,46.8 C22.68,46.8 22.68,52.56 45.36,52.56 C68.04,52.56 68.04,46.8 90.72,46.8 C113.4,46.8 113.4,52.56 136.08,52.56 C158.76,52.56 158.76,46.8 181.44,46.8 C204.12,46.8 204.12,52.56 226.8,52.56 C249.48,52.56 249.48,46.8 272.16,46.8"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  `,
      host: {
        class: "ant-hashCode",
        "[class.ant-hashCode-default]": `nzType === 'default'`,
        "[class.ant-hashCode-primary]": `nzType === 'primary'`,
        "[class.ant-hashCode-double]": `nzMode === 'double'`,
        "[class.ant-hashCode-single]": `nzMode === 'single'`,
        "[class.ant-hashCode-strip]": `nzMode === 'strip'`,
        "[class.ant-hashCode-rect]": `nzMode === 'rect'`
      }
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    nzValue: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzLogo: [{
      type: Input
    }],
    nzMode: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzOnCopy: [{
      type: Output
    }]
  });
})();
var NzHashCodeModule = class _NzHashCodeModule {
  static {
    this.ɵfac = function NzHashCodeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzHashCodeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzHashCodeModule,
      imports: [NzHashCodeComponent],
      exports: [NzHashCodeComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzHashCodeComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzHashCodeModule, [{
    type: NgModule,
    args: [{
      exports: [NzHashCodeComponent],
      imports: [NzHashCodeComponent]
    }]
  }], null, null);
})();
export {
  NzHashCodeComponent,
  NzHashCodeModule
};
//# sourceMappingURL=ng-zorro-antd_hash-code.js.map
