import {
  NzIconDirective,
  NzIconModule
} from "./chunk-KON3F5BQ.js";
import "./chunk-2SJ2DHYL.js";
import "./chunk-BQ76GOFF.js";
import "./chunk-XLXKTAMZ.js";
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
  isNotNil,
  numberAttributeWithZeroFallback
} from "./chunk-PMSSPYGI.js";
import "./chunk-25ZD2YUN.js";
import "./chunk-CO52LRTC.js";
import {
  NgTemplateOutlet
} from "./chunk-VC5NROIR.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  NgModule,
  Subject,
  ViewEncapsulation,
  __esDecorate,
  __runInitializers,
  numberAttribute,
  setClassMetadata,
  takeUntil,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-UKO23YGW.js";
import {
  __objRest
} from "./chunk-WDMUDEB6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-progress.mjs
var _c0 = (a0) => ({
  $implicit: a0
});
function NzProgressComponent_ng_template_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("nzType", ctx_r0.icon);
  }
}
function NzProgressComponent_ng_template_0_Conditional_0_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const formatter_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", formatter_r2(ctx_r0.nzPercent), " ");
  }
}
function NzProgressComponent_ng_template_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzProgressComponent_ng_template_0_Conditional_0_Conditional_2_ng_container_0_Template, 2, 1, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.formatter)("nzStringTemplateOutletContext", ɵɵpureFunction1(2, _c0, ctx_r0.nzPercent));
  }
}
function NzProgressComponent_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtemplate(1, NzProgressComponent_ng_template_0_Conditional_0_Conditional_1_Template, 1, 1, "nz-icon", 3)(2, NzProgressComponent_ng_template_0_Conditional_0_Conditional_2_Template, 1, 4, "ng-container");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional((ctx_r0.status === "exception" || ctx_r0.status === "success") && !ctx_r0.nzFormat ? 1 : 2);
  }
}
function NzProgressComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzProgressComponent_ng_template_0_Conditional_0_Template, 3, 1, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(ctx_r0.nzShowInfo ? 0 : -1);
  }
}
function NzProgressComponent_Conditional_3_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 8);
  }
  if (rf & 2) {
    const step_r3 = ctx.$implicit;
    ɵɵstyleMap(step_r3);
  }
}
function NzProgressComponent_Conditional_3_Conditional_1_ng_template_3_Template(rf, ctx) {
}
function NzProgressComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵrepeaterCreate(1, NzProgressComponent_Conditional_3_Conditional_1_For_2_Template, 1, 2, "div", 6, ɵɵrepeaterTrackByIdentity);
    ɵɵtemplate(3, NzProgressComponent_Conditional_3_Conditional_1_ng_template_3_Template, 0, 0, "ng-template", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const progressInfoTemplate_r4 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.steps);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", progressInfoTemplate_r4);
  }
}
function NzProgressComponent_Conditional_3_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 13);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵstyleProp("width", ctx_r0.nzSuccessPercent, "%")("border-radius", ctx_r0.nzStrokeLinecap === "round" ? "100px" : "0")("height", ctx_r0.strokeWidth, "px");
  }
}
function NzProgressComponent_Conditional_3_Conditional_2_ng_template_4_Template(rf, ctx) {
}
function NzProgressComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9)(1, "div", 10);
    ɵɵelement(2, "div", 11);
    ɵɵtemplate(3, NzProgressComponent_Conditional_3_Conditional_2_Conditional_3_Template, 1, 6, "div", 12);
    ɵɵelementEnd()();
    ɵɵtemplate(4, NzProgressComponent_Conditional_3_Conditional_2_ng_template_4_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const progressInfoTemplate_r4 = ɵɵreference(1);
    ɵɵadvance(2);
    ɵɵstyleProp("width", ctx_r0.nzPercent, "%")("border-radius", ctx_r0.nzStrokeLinecap === "round" ? "100px" : "0")("background", !ctx_r0.isGradient ? ctx_r0.nzStrokeColor : null)("background-image", ctx_r0.isGradient ? ctx_r0.lineGradient : null)("height", ctx_r0.strokeWidth, "px");
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzSuccessPercent || ctx_r0.nzSuccessPercent === 0 ? 3 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", progressInfoTemplate_r4);
  }
}
function NzProgressComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, NzProgressComponent_Conditional_3_Conditional_1_Template, 4, 1, "div", 5)(2, NzProgressComponent_Conditional_3_Conditional_2_Template, 5, 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.isSteps ? 1 : 2);
  }
}
function NzProgressComponent_Conditional_4_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "stop");
  }
  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    ɵɵattribute("offset", i_r5.offset)("stop-color", i_r5.color);
  }
}
function NzProgressComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "defs")(1, "linearGradient", 17);
    ɵɵrepeaterCreate(2, NzProgressComponent_Conditional_4_Conditional_2_For_3_Template, 1, 2, ":svg:stop", null, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("id", "gradient-" + ctx_r0.gradientId);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.circleGradient);
  }
}
function NzProgressComponent_Conditional_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "path", 18);
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵstyleMap(p_r6.strokePathStyle);
    ɵɵattribute("d", ctx_r0.pathString)("stroke-linecap", ctx_r0.nzStrokeLinecap)("stroke", p_r6.stroke)("stroke-width", ctx_r0.nzPercent ? ctx_r0.strokeWidth : 0);
  }
}
function NzProgressComponent_Conditional_4_ng_template_6_Template(rf, ctx) {
}
function NzProgressComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 14);
    ɵɵtemplate(2, NzProgressComponent_Conditional_4_Conditional_2_Template, 4, 1, ":svg:defs");
    ɵɵelement(3, "path", 15);
    ɵɵrepeaterCreate(4, NzProgressComponent_Conditional_4_For_5_Template, 1, 6, ":svg:path", 16, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
    ɵɵtemplate(6, NzProgressComponent_Conditional_4_ng_template_6_Template, 0, 0, "ng-template", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const progressInfoTemplate_r4 = ɵɵreference(1);
    ɵɵstyleProp("width", ctx_r0.nzWidth, "px")("height", ctx_r0.nzWidth, "px")("font-size", ctx_r0.nzWidth * 0.15 + 6, "px");
    ɵɵclassProp("ant-progress-circle-gradient", ctx_r0.isGradient);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r0.isGradient ? 2 : -1);
    ɵɵadvance();
    ɵɵstyleMap(ctx_r0.trailPathStyle);
    ɵɵattribute("stroke-width", ctx_r0.strokeWidth)("d", ctx_r0.pathString);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.progressCirclePath);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", progressInfoTemplate_r4);
  }
}
function stripPercentToNumber(percent) {
  return +percent.replace("%", "");
}
var sortGradient = (gradients) => {
  let tempArr = [];
  Object.keys(gradients).forEach((key) => {
    const value = gradients[key];
    const formatKey = stripPercentToNumber(key);
    if (!isNaN(formatKey)) {
      tempArr.push({
        key: formatKey,
        value
      });
    }
  });
  tempArr = tempArr.sort((a, b) => a.key - b.key);
  return tempArr;
};
var handleCircleGradient = (strokeColor) => sortGradient(strokeColor).map(({
  key,
  value
}) => ({
  offset: `${key}%`,
  color: value
}));
var handleLinearGradient = (strokeColor) => {
  const _a = strokeColor, {
    from = "#1890ff",
    to = "#1890ff",
    direction = "to right"
  } = _a, rest = __objRest(_a, [
    "from",
    "to",
    "direction"
  ]);
  if (Object.keys(rest).length !== 0) {
    const sortedGradients = sortGradient(rest).map(({
      key,
      value
    }) => `${value} ${key}%`).join(", ");
    return `linear-gradient(${direction}, ${sortedGradients})`;
  }
  return `linear-gradient(${direction}, ${from}, ${to})`;
};
var gradientIdSeed = 0;
var NZ_CONFIG_MODULE_NAME = "progress";
var statusIconNameMap = /* @__PURE__ */ new Map([["success", "check"], ["exception", "close"]]);
var statusColorMap = /* @__PURE__ */ new Map([["normal", "#108ee9"], ["exception", "#ff5500"], ["success", "#87d068"]]);
var defaultFormatter = (p) => `${p}%`;
var NzProgressComponent = (() => {
  let _nzShowInfo_decorators;
  let _nzShowInfo_initializers = [];
  let _nzShowInfo_extraInitializers = [];
  let _nzStrokeColor_decorators;
  let _nzStrokeColor_initializers = [];
  let _nzStrokeColor_extraInitializers = [];
  let _nzSize_decorators;
  let _nzSize_initializers = [];
  let _nzSize_extraInitializers = [];
  let _nzStrokeWidth_decorators;
  let _nzStrokeWidth_initializers = [];
  let _nzStrokeWidth_extraInitializers = [];
  let _nzGapDegree_decorators;
  let _nzGapDegree_initializers = [];
  let _nzGapDegree_extraInitializers = [];
  let _nzGapPosition_decorators;
  let _nzGapPosition_initializers = [];
  let _nzGapPosition_extraInitializers = [];
  let _nzStrokeLinecap_decorators;
  let _nzStrokeLinecap_initializers = [];
  let _nzStrokeLinecap_extraInitializers = [];
  return class NzProgressComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzShowInfo_decorators = [WithConfig()];
      _nzStrokeColor_decorators = [WithConfig()];
      _nzSize_decorators = [WithConfig()];
      _nzStrokeWidth_decorators = [WithConfig()];
      _nzGapDegree_decorators = [WithConfig()];
      _nzGapPosition_decorators = [WithConfig()];
      _nzStrokeLinecap_decorators = [WithConfig()];
      __esDecorate(null, null, _nzShowInfo_decorators, {
        kind: "field",
        name: "nzShowInfo",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzShowInfo" in obj,
          get: (obj) => obj.nzShowInfo,
          set: (obj, value) => {
            obj.nzShowInfo = value;
          }
        },
        metadata: _metadata
      }, _nzShowInfo_initializers, _nzShowInfo_extraInitializers);
      __esDecorate(null, null, _nzStrokeColor_decorators, {
        kind: "field",
        name: "nzStrokeColor",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzStrokeColor" in obj,
          get: (obj) => obj.nzStrokeColor,
          set: (obj, value) => {
            obj.nzStrokeColor = value;
          }
        },
        metadata: _metadata
      }, _nzStrokeColor_initializers, _nzStrokeColor_extraInitializers);
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
      __esDecorate(null, null, _nzStrokeWidth_decorators, {
        kind: "field",
        name: "nzStrokeWidth",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzStrokeWidth" in obj,
          get: (obj) => obj.nzStrokeWidth,
          set: (obj, value) => {
            obj.nzStrokeWidth = value;
          }
        },
        metadata: _metadata
      }, _nzStrokeWidth_initializers, _nzStrokeWidth_extraInitializers);
      __esDecorate(null, null, _nzGapDegree_decorators, {
        kind: "field",
        name: "nzGapDegree",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzGapDegree" in obj,
          get: (obj) => obj.nzGapDegree,
          set: (obj, value) => {
            obj.nzGapDegree = value;
          }
        },
        metadata: _metadata
      }, _nzGapDegree_initializers, _nzGapDegree_extraInitializers);
      __esDecorate(null, null, _nzGapPosition_decorators, {
        kind: "field",
        name: "nzGapPosition",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzGapPosition" in obj,
          get: (obj) => obj.nzGapPosition,
          set: (obj, value) => {
            obj.nzGapPosition = value;
          }
        },
        metadata: _metadata
      }, _nzGapPosition_initializers, _nzGapPosition_extraInitializers);
      __esDecorate(null, null, _nzStrokeLinecap_decorators, {
        kind: "field",
        name: "nzStrokeLinecap",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzStrokeLinecap" in obj,
          get: (obj) => obj.nzStrokeLinecap,
          set: (obj, value) => {
            obj.nzStrokeLinecap = value;
          }
        },
        metadata: _metadata
      }, _nzStrokeLinecap_initializers, _nzStrokeLinecap_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    get formatter() {
      return this.nzFormat || defaultFormatter;
    }
    get status() {
      return this.nzStatus || this.inferredStatus;
    }
    get strokeWidth() {
      return this.nzStrokeWidth || (this.nzType === "line" && this.nzSize !== "small" ? 8 : 6);
    }
    get isCircleStyle() {
      return this.nzType === "circle" || this.nzType === "dashboard";
    }
    constructor(cdr, nzConfigService, directionality) {
      this.cdr = cdr;
      this.nzConfigService = nzConfigService;
      this.directionality = directionality;
      this._nzModuleName = NZ_CONFIG_MODULE_NAME;
      this.nzShowInfo = __runInitializers(this, _nzShowInfo_initializers, true);
      this.nzWidth = (__runInitializers(this, _nzShowInfo_extraInitializers), 132);
      this.nzStrokeColor = __runInitializers(this, _nzStrokeColor_initializers, void 0);
      this.nzSize = (__runInitializers(this, _nzStrokeColor_extraInitializers), __runInitializers(this, _nzSize_initializers, "default"));
      this.nzFormat = __runInitializers(this, _nzSize_extraInitializers);
      this.nzPercent = 0;
      this.nzStrokeWidth = __runInitializers(this, _nzStrokeWidth_initializers, void 0);
      this.nzGapDegree = (__runInitializers(this, _nzStrokeWidth_extraInitializers), __runInitializers(this, _nzGapDegree_initializers, void 0));
      this.nzStatus = __runInitializers(this, _nzGapDegree_extraInitializers);
      this.nzType = "line";
      this.nzGapPosition = __runInitializers(this, _nzGapPosition_initializers, "top");
      this.nzStrokeLinecap = (__runInitializers(this, _nzGapPosition_extraInitializers), __runInitializers(this, _nzStrokeLinecap_initializers, "round"));
      this.nzSteps = (__runInitializers(this, _nzStrokeLinecap_extraInitializers), 0);
      this.steps = [];
      this.lineGradient = null;
      this.isGradient = false;
      this.isSteps = false;
      this.gradientId = gradientIdSeed++;
      this.progressCirclePath = [];
      this.trailPathStyle = null;
      this.dir = "ltr";
      this.cachedStatus = "normal";
      this.inferredStatus = "normal";
      this.destroy$ = new Subject();
    }
    ngOnChanges(changes) {
      const {
        nzSteps,
        nzGapPosition,
        nzStrokeLinecap,
        nzStrokeColor,
        nzGapDegree,
        nzType,
        nzStatus,
        nzPercent,
        nzSuccessPercent,
        nzStrokeWidth
      } = changes;
      if (nzStatus) {
        this.cachedStatus = this.nzStatus || this.cachedStatus;
      }
      if (nzPercent || nzSuccessPercent) {
        const fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
        if (fillAll) {
          if (isNotNil(this.nzSuccessPercent) && this.nzSuccessPercent >= 100 || this.nzSuccessPercent === void 0) {
            this.inferredStatus = "success";
          }
        } else {
          this.inferredStatus = this.cachedStatus;
        }
      }
      if (nzStatus || nzPercent || nzSuccessPercent || nzStrokeColor) {
        this.updateIcon();
      }
      if (nzStrokeColor) {
        this.setStrokeColor();
      }
      if (nzGapPosition || nzStrokeLinecap || nzGapDegree || nzType || nzPercent || nzStrokeColor || nzStrokeColor) {
        this.getCirclePaths();
      }
      if (nzPercent || nzSteps || nzStrokeWidth) {
        this.isSteps = this.nzSteps > 0;
        if (this.isSteps) {
          this.getSteps();
        }
      }
    }
    ngOnInit() {
      this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.updateIcon();
        this.setStrokeColor();
        this.getCirclePaths();
      });
      this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
        this.dir = direction;
        this.cdr.detectChanges();
      });
      this.dir = this.directionality.value;
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    updateIcon() {
      const ret = statusIconNameMap.get(this.status);
      this.icon = ret ? ret + (this.isCircleStyle ? "-o" : "-circle-fill") : "";
    }
    /**
     * Calculate step render configs.
     */
    getSteps() {
      const current = Math.floor(this.nzSteps * (this.nzPercent / 100));
      const stepWidth = this.nzSize === "small" ? 2 : 14;
      const steps = [];
      for (let i = 0; i < this.nzSteps; i++) {
        let color;
        if (i <= current - 1) {
          color = this.nzStrokeColor;
        }
        const stepStyle = {
          backgroundColor: `${color}`,
          width: `${stepWidth}px`,
          height: `${this.strokeWidth}px`
        };
        steps.push(stepStyle);
      }
      this.steps = steps;
    }
    /**
     * Calculate paths when the type is circle or dashboard.
     */
    getCirclePaths() {
      if (!this.isCircleStyle) {
        return;
      }
      const values = isNotNil(this.nzSuccessPercent) ? [this.nzSuccessPercent, this.nzPercent] : [this.nzPercent];
      const radius = 50 - this.strokeWidth / 2;
      const gapPosition = this.nzGapPosition || (this.nzType === "circle" ? "top" : "bottom");
      const len = Math.PI * 2 * radius;
      const gapDegree = this.nzGapDegree || (this.nzType === "circle" ? 0 : 75);
      let beginPositionX = 0;
      let beginPositionY = -radius;
      let endPositionX = 0;
      let endPositionY = radius * -2;
      switch (gapPosition) {
        case "left":
          beginPositionX = -radius;
          beginPositionY = 0;
          endPositionX = radius * 2;
          endPositionY = 0;
          break;
        case "right":
          beginPositionX = radius;
          beginPositionY = 0;
          endPositionX = radius * -2;
          endPositionY = 0;
          break;
        case "bottom":
          beginPositionY = radius;
          endPositionY = radius * 2;
          break;
        default:
      }
      this.pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
       a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
       a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
      this.trailPathStyle = {
        strokeDasharray: `${len - gapDegree}px ${len}px`,
        strokeDashoffset: `-${gapDegree / 2}px`,
        transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"
      };
      this.progressCirclePath = values.map((value, index) => {
        const isSuccessPercent = values.length === 2 && index === 0;
        return {
          stroke: this.isGradient && !isSuccessPercent ? `url(#gradient-${this.gradientId})` : null,
          strokePathStyle: {
            stroke: !this.isGradient ? isSuccessPercent ? statusColorMap.get("success") : this.nzStrokeColor : null,
            transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s",
            strokeDasharray: `${(value || 0) / 100 * (len - gapDegree)}px ${len}px`,
            strokeDashoffset: `-${gapDegree / 2}px`
          }
        };
      }).reverse();
    }
    setStrokeColor() {
      const color = this.nzStrokeColor;
      const isGradient = this.isGradient = !!color && typeof color !== "string";
      if (isGradient && !this.isCircleStyle) {
        this.lineGradient = handleLinearGradient(color);
      } else if (isGradient && this.isCircleStyle) {
        this.circleGradient = handleCircleGradient(this.nzStrokeColor);
      } else {
        this.lineGradient = null;
        this.circleGradient = [];
      }
    }
    static {
      this.ɵfac = function NzProgressComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NzProgressComponent2)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Directionality));
      };
    }
    static {
      this.ɵcmp = ɵɵdefineComponent({
        type: NzProgressComponent2,
        selectors: [["nz-progress"]],
        inputs: {
          nzShowInfo: "nzShowInfo",
          nzWidth: "nzWidth",
          nzStrokeColor: "nzStrokeColor",
          nzSize: "nzSize",
          nzFormat: "nzFormat",
          nzSuccessPercent: [2, "nzSuccessPercent", "nzSuccessPercent", numberAttributeWithZeroFallback],
          nzPercent: [2, "nzPercent", "nzPercent", numberAttribute],
          nzStrokeWidth: [2, "nzStrokeWidth", "nzStrokeWidth", numberAttributeWithZeroFallback],
          nzGapDegree: [2, "nzGapDegree", "nzGapDegree", numberAttributeWithZeroFallback],
          nzStatus: "nzStatus",
          nzType: "nzType",
          nzGapPosition: "nzGapPosition",
          nzStrokeLinecap: "nzStrokeLinecap",
          nzSteps: [2, "nzSteps", "nzSteps", numberAttribute]
        },
        exportAs: ["nzProgress"],
        features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature],
        decls: 5,
        vars: 18,
        consts: [["progressInfoTemplate", ""], [1, "ant-progress-inner", 3, "width", "height", "fontSize", "ant-progress-circle-gradient"], [1, "ant-progress-text"], [3, "nzType"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-progress-steps-outer"], [1, "ant-progress-steps-item", 3, "style"], [3, "ngTemplateOutlet"], [1, "ant-progress-steps-item"], [1, "ant-progress-outer"], [1, "ant-progress-inner"], [1, "ant-progress-bg"], [1, "ant-progress-success-bg", 3, "width", "border-radius", "height"], [1, "ant-progress-success-bg"], ["viewBox", "0 0 100 100", 1, "ant-progress-circle"], ["stroke", "#f3f3f3", "fill-opacity", "0", 1, "ant-progress-circle-trail"], ["fill-opacity", "0", 1, "ant-progress-circle-path", 3, "style"], ["x1", "100%", "y1", "0%", "x2", "0%", "y2", "0%", 3, "id"], ["fill-opacity", "0", 1, "ant-progress-circle-path"]],
        template: function NzProgressComponent_Template(rf, ctx) {
          if (rf & 1) {
            ɵɵtemplate(0, NzProgressComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
            ɵɵelementStart(2, "div");
            ɵɵtemplate(3, NzProgressComponent_Conditional_3_Template, 3, 1, "div")(4, NzProgressComponent_Conditional_4_Template, 7, 14, "div", 1);
            ɵɵelementEnd();
          }
          if (rf & 2) {
            ɵɵadvance(2);
            ɵɵclassMap("ant-progress ant-progress-status-" + ctx.status);
            ɵɵclassProp("ant-progress-line", ctx.nzType === "line")("ant-progress-small", ctx.nzSize === "small")("ant-progress-default", ctx.nzSize === "default")("ant-progress-show-info", ctx.nzShowInfo)("ant-progress-circle", ctx.isCircleStyle)("ant-progress-steps", ctx.isSteps)("ant-progress-rtl", ctx.dir === "rtl");
            ɵɵadvance();
            ɵɵconditional(ctx.nzType === "line" ? 3 : -1);
            ɵɵadvance();
            ɵɵconditional(ctx.isCircleStyle ? 4 : -1);
          }
        },
        dependencies: [NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective, NgTemplateOutlet],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzProgressComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-progress",
      exportAs: "nzProgress",
      preserveWhitespaces: false,
      imports: [NzIconModule, NzOutletModule, NgTemplateOutlet],
      template: `
    <ng-template #progressInfoTemplate>
      @if (nzShowInfo) {
        <span class="ant-progress-text">
          @if ((status === 'exception' || status === 'success') && !nzFormat) {
            <nz-icon [nzType]="icon" />
          } @else {
            <ng-container *nzStringTemplateOutlet="formatter; context: { $implicit: nzPercent }; let formatter">
              {{ formatter(nzPercent) }}
            </ng-container>
          }
        </span>
      }
    </ng-template>

    <div
      [class]="'ant-progress ant-progress-status-' + status"
      [class.ant-progress-line]="nzType === 'line'"
      [class.ant-progress-small]="nzSize === 'small'"
      [class.ant-progress-default]="nzSize === 'default'"
      [class.ant-progress-show-info]="nzShowInfo"
      [class.ant-progress-circle]="isCircleStyle"
      [class.ant-progress-steps]="isSteps"
      [class.ant-progress-rtl]="dir === 'rtl'"
    >
      @if (nzType === 'line') {
        <div>
          <!-- normal line style -->
          @if (isSteps) {
            <div class="ant-progress-steps-outer">
              @for (step of steps; track step) {
                <div class="ant-progress-steps-item" [style]="step"></div>
              }
              <ng-template [ngTemplateOutlet]="progressInfoTemplate" />
            </div>
          } @else {
            <div class="ant-progress-outer">
              <div class="ant-progress-inner">
                <div
                  class="ant-progress-bg"
                  [style.width.%]="nzPercent"
                  [style.border-radius]="nzStrokeLinecap === 'round' ? '100px' : '0'"
                  [style.background]="!isGradient ? nzStrokeColor : null"
                  [style.background-image]="isGradient ? lineGradient : null"
                  [style.height.px]="strokeWidth"
                ></div>
                @if (nzSuccessPercent || nzSuccessPercent === 0) {
                  <div
                    class="ant-progress-success-bg"
                    [style.width.%]="nzSuccessPercent"
                    [style.border-radius]="nzStrokeLinecap === 'round' ? '100px' : '0'"
                    [style.height.px]="strokeWidth"
                  ></div>
                }
              </div>
            </div>
            <ng-template [ngTemplateOutlet]="progressInfoTemplate" />
          }
        </div>
      }
      <!-- line progress -->

      <!-- circle / dashboard progress -->

      @if (isCircleStyle) {
        <div
          [style.width.px]="this.nzWidth"
          [style.height.px]="this.nzWidth"
          [style.fontSize.px]="this.nzWidth * 0.15 + 6"
          class="ant-progress-inner"
          [class.ant-progress-circle-gradient]="isGradient"
        >
          <svg class="ant-progress-circle " viewBox="0 0 100 100">
            @if (isGradient) {
              <defs>
                <linearGradient [id]="'gradient-' + gradientId" x1="100%" y1="0%" x2="0%" y2="0%">
                  @for (i of circleGradient; track i) {
                    <stop [attr.offset]="i.offset" [attr.stop-color]="i.color"></stop>
                  }
                </linearGradient>
              </defs>
            }

            <path
              class="ant-progress-circle-trail"
              stroke="#f3f3f3"
              fill-opacity="0"
              [attr.stroke-width]="strokeWidth"
              [attr.d]="pathString"
              [style]="trailPathStyle"
            ></path>
            @for (p of progressCirclePath; track p) {
              <path
                class="ant-progress-circle-path"
                fill-opacity="0"
                [attr.d]="pathString"
                [attr.stroke-linecap]="nzStrokeLinecap"
                [attr.stroke]="p.stroke"
                [attr.stroke-width]="nzPercent ? strokeWidth : 0"
                [style]="p.strokePathStyle"
              ></path>
            }
          </svg>
          <ng-template [ngTemplateOutlet]="progressInfoTemplate" />
        </div>
      }
    </div>
  `
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzConfigService
  }, {
    type: Directionality
  }], {
    nzShowInfo: [{
      type: Input
    }],
    nzWidth: [{
      type: Input
    }],
    nzStrokeColor: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzFormat: [{
      type: Input
    }],
    nzSuccessPercent: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzPercent: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzStrokeWidth: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzGapDegree: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzStatus: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzGapPosition: [{
      type: Input
    }],
    nzStrokeLinecap: [{
      type: Input
    }],
    nzSteps: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }]
  });
})();
var NzProgressModule = class _NzProgressModule {
  static {
    this.ɵfac = function NzProgressModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzProgressModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzProgressModule,
      imports: [NzProgressComponent],
      exports: [NzProgressComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzProgressComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzProgressModule, [{
    type: NgModule,
    args: [{
      imports: [NzProgressComponent],
      exports: [NzProgressComponent]
    }]
  }], null, null);
})();
export {
  NzProgressComponent,
  NzProgressModule
};
//# sourceMappingURL=ng-zorro-antd_progress.js.map
