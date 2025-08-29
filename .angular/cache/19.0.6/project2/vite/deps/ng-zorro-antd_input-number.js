import {
  NzInputAddonAfterDirective,
  NzInputAddonBeforeDirective,
  NzInputPrefixDirective,
  NzInputSuffixDirective
} from "./chunk-HVU6C2JY.js";
import {
  NzFormItemFeedbackIconComponent,
  NzFormStatusService
} from "./chunk-OXW7YYNW.js";
import {
  DOWN_ARROW,
  FocusMonitor,
  UP_ARROW
} from "./chunk-QLLY5WPX.js";
import {
  NZ_SPACE_COMPACT_ITEM_TYPE,
  NZ_SPACE_COMPACT_SIZE,
  NzSpaceCompactItemDirective
} from "./chunk-4NLV4GET.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-35KDMFCB.js";
import "./chunk-D3WAMYJC.js";
import "./chunk-CGKDZGP4.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-KON3F5BQ.js";
import "./chunk-2SJ2DHYL.js";
import "./chunk-BQ76GOFF.js";
import "./chunk-XLXKTAMZ.js";
import "./chunk-DWZ7IJ2D.js";
import {
  Directionality
} from "./chunk-XWMA42Q7.js";
import "./chunk-RTBMFHVM.js";
import {
  getStatusClassNames,
  isNil
} from "./chunk-PMSSPYGI.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-BITKYCMU.js";
import "./chunk-25ZD2YUN.js";
import "./chunk-CO52LRTC.js";
import {
  NgTemplateOutlet
} from "./chunk-VC5NROIR.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  Injector,
  NgModule,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  computed,
  contentChild,
  forwardRef,
  inject,
  input,
  linkedSignal,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuerySignal
} from "./chunk-UKO23YGW.js";
import {
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-input-number.mjs
var _c0 = ["input"];
var _c1 = ["inputNumberHost"];
var _c2 = [[["", "nzInputAddonBefore", ""]], [["", "nzInputAddonAfter", ""]], [["", "nzInputPrefix", ""]], [["", "nzInputSuffix", ""]], [["", "nzInputNumberUpIcon", ""]], [["", "nzInputNumberDownIcon", ""]]];
var _c3 = ["[nzInputAddonBefore]", "[nzInputAddonAfter]", "[nzInputPrefix]", "[nzInputSuffix]", "[nzInputNumberUpIcon]", "[nzInputNumberDownIcon]"];
function NzInputNumberComponent_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzInputNumberComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputNumberComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const inputNumberWithAddonInner_r1 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", inputNumberWithAddonInner_r1);
  }
}
function NzInputNumberComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzInputNumberComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputNumberComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const inputNumberWithAffixInner_r2 = ɵɵreference(8);
    ɵɵproperty("ngTemplateOutlet", inputNumberWithAffixInner_r2);
  }
}
function NzInputNumberComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzInputNumberComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputNumberComponent_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const inputNumberInner_r3 = ɵɵreference(12);
    ɵɵproperty("ngTemplateOutlet", inputNumberInner_r3);
  }
}
function NzInputNumberComponent_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
}
function NzInputNumberComponent_ng_template_3_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzInputNumberComponent_ng_template_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputNumberComponent_ng_template_3_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const inputNumberWithAffix_r4 = ɵɵreference(6);
    ɵɵproperty("ngTemplateOutlet", inputNumberWithAffix_r4);
  }
}
function NzInputNumberComponent_ng_template_3_Conditional_3_ng_template_0_Template(rf, ctx) {
}
function NzInputNumberComponent_ng_template_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputNumberComponent_ng_template_3_Conditional_3_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const inputNumber_r5 = ɵɵreference(10);
    ɵɵproperty("ngTemplateOutlet", inputNumber_r5);
  }
}
function NzInputNumberComponent_ng_template_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵprojection(1, 1);
    ɵɵelementEnd();
  }
}
function NzInputNumberComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, NzInputNumberComponent_ng_template_3_Conditional_1_Template, 2, 0, "div", 10)(2, NzInputNumberComponent_ng_template_3_Conditional_2_Template, 1, 1, null, 8)(3, NzInputNumberComponent_ng_template_3_Conditional_3_Template, 1, 1, null, 8)(4, NzInputNumberComponent_ng_template_3_Conditional_4_Template, 2, 0, "div", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r5.addonBefore() ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r5.hasAffix() ? 2 : 3);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r5.addonAfter() ? 4 : -1);
  }
}
function NzInputNumberComponent_ng_template_5_ng_template_1_Template(rf, ctx) {
}
function NzInputNumberComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, NzInputNumberComponent_ng_template_5_ng_template_1_Template, 0, 0, "ng-template", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    const inputNumberWithAffixInner_r2 = ɵɵreference(8);
    ɵɵclassMap(ctx_r5.affixWrapperClass());
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", inputNumberWithAffixInner_r2);
  }
}
function NzInputNumberComponent_ng_template_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵprojection(1, 2);
    ɵɵelementEnd();
  }
}
function NzInputNumberComponent_ng_template_7_ng_template_1_Template(rf, ctx) {
}
function NzInputNumberComponent_ng_template_7_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-form-item-feedback-icon", 13);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵproperty("status", ctx_r5.finalStatus());
  }
}
function NzInputNumberComponent_ng_template_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵprojection(1, 3);
    ɵɵtemplate(2, NzInputNumberComponent_ng_template_7_Conditional_2_Conditional_2_Template, 1, 1, "nz-form-item-feedback-icon", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r5.hasFeedback() && ctx_r5.finalStatus() ? 2 : -1);
  }
}
function NzInputNumberComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzInputNumberComponent_ng_template_7_Conditional_0_Template, 2, 0, "span", 11)(1, NzInputNumberComponent_ng_template_7_ng_template_1_Template, 0, 0, "ng-template", 8)(2, NzInputNumberComponent_ng_template_7_Conditional_2_Template, 3, 1, "span", 12);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    const inputNumber_r5 = ɵɵreference(10);
    ɵɵconditional(ctx_r5.prefix() ? 0 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", inputNumber_r5);
    ɵɵadvance();
    ɵɵconditional(ctx_r5.suffix() || ctx_r5.hasFeedback() ? 2 : -1);
  }
}
function NzInputNumberComponent_ng_template_9_ng_template_2_Template(rf, ctx) {
}
function NzInputNumberComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 5);
    ɵɵtemplate(2, NzInputNumberComponent_ng_template_9_ng_template_2_Template, 0, 0, "ng-template", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    const inputNumberInner_r3 = ɵɵreference(12);
    ɵɵclassMap(ctx_r5.inputNumberClass());
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", inputNumberInner_r3);
  }
}
function NzInputNumberComponent_ng_template_11_Conditional_0_ProjectionFallback_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 20);
  }
}
function NzInputNumberComponent_ng_template_11_Conditional_0_ProjectionFallback_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 21);
  }
}
function NzInputNumberComponent_ng_template_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 17, 7);
    ɵɵlistener("mouseup", function NzInputNumberComponent_ng_template_11_Conditional_0_Template_div_mouseup_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r5 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r5.stopAutoStep());
    })("mouseleave", function NzInputNumberComponent_ng_template_11_Conditional_0_Template_div_mouseleave_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r5 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r5.stopAutoStep());
    });
    ɵɵelementStart(2, "span", 18);
    ɵɵlistener("mousedown", function NzInputNumberComponent_ng_template_11_Conditional_0_Template_span_mousedown_2_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r5 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r5.onStepMouseDown($event, true));
    });
    ɵɵprojection(3, 4, null, NzInputNumberComponent_ng_template_11_Conditional_0_ProjectionFallback_3_Template, 1, 0);
    ɵɵelementEnd();
    ɵɵelementStart(5, "span", 19);
    ɵɵlistener("mousedown", function NzInputNumberComponent_ng_template_11_Conditional_0_Template_span_mousedown_5_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r5 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r5.onStepMouseDown($event, false));
    });
    ɵɵprojection(6, 5, null, NzInputNumberComponent_ng_template_11_Conditional_0_ProjectionFallback_6_Template, 1, 0);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵclassProp("ant-input-number-handler-up-disabled", ctx_r5.upDisabled());
    ɵɵattribute("aria-disabled", ctx_r5.upDisabled());
    ɵɵadvance(3);
    ɵɵclassProp("ant-input-number-handler-down-disabled", ctx_r5.downDisabled());
    ɵɵattribute("aria-disabled", ctx_r5.downDisabled());
  }
}
function NzInputNumberComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵtemplate(0, NzInputNumberComponent_ng_template_11_Conditional_0_Template, 8, 6, "div", 14);
    ɵɵelementStart(1, "div", 15)(2, "input", 16, 6);
    ɵɵlistener("input", function NzInputNumberComponent_ng_template_11_Template_input_input_2_listener() {
      ɵɵrestoreView(_r7);
      const input_r9 = ɵɵreference(3);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.displayValue.set(input_r9.value));
    })("change", function NzInputNumberComponent_ng_template_11_Template_input_change_2_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.onInputChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r5 = ɵɵnextContext();
    ɵɵconditional(ctx_r5.nzControls() ? 0 : -1);
    ɵɵadvance(2);
    ɵɵproperty("value", ctx_r5.displayValue())("placeholder", (tmp_9_0 = ctx_r5.nzPlaceHolder()) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : "")("disabled", ctx_r5.finalDisabled())("readOnly", ctx_r5.nzReadOnly());
    ɵɵattribute("aria-valuemin", ctx_r5.nzMin())("aria-valuemax", ctx_r5.nzMax())("id", ctx_r5.nzId())("step", ctx_r5.nzStep());
  }
}
var NzInputNumberComponent = class _NzInputNumberComponent {
  constructor() {
    this.nzId = input(null);
    this.nzSize = input("default");
    this.nzPlaceHolder = input(null);
    this.nzStatus = input("");
    this.nzStep = input(1, {
      transform: numberAttribute
    });
    this.nzMin = input(Number.MIN_SAFE_INTEGER, {
      transform: numberAttribute
    });
    this.nzMax = input(Number.MAX_SAFE_INTEGER, {
      transform: numberAttribute
    });
    this.nzPrecision = input(null);
    this.nzParser = input((value) => {
      const parsedValue = defaultParser(value);
      const precision = this.nzPrecision();
      if (!isNil(precision)) {
        return +parsedValue.toFixed(precision);
      }
      return parsedValue;
    });
    this.nzFormatter = input((value) => {
      const precision = this.nzPrecision();
      if (!isNil(precision)) {
        return value.toFixed(precision);
      }
      return value.toString();
    });
    this.nzDisabled = input(false, {
      transform: booleanAttribute
    });
    this.nzReadOnly = input(false, {
      transform: booleanAttribute
    });
    this.nzAutoFocus = input(false, {
      transform: booleanAttribute
    });
    this.nzBordered = input(true, {
      transform: booleanAttribute
    });
    this.nzKeyboard = input(true, {
      transform: booleanAttribute
    });
    this.nzControls = input(true, {
      transform: booleanAttribute
    });
    this.nzOnStep = output();
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.isDisabledFirstChange = true;
    this.compactSize = inject(NZ_SPACE_COMPACT_SIZE, {
      optional: true
    });
    this.inputRef = viewChild.required("input");
    this.hostRef = viewChild("inputNumberHost");
    this.elementRef = inject(ElementRef);
    this.injector = inject(Injector);
    this.focusMonitor = inject(FocusMonitor);
    this.directionality = inject(Directionality);
    this.nzFormStatusService = inject(NzFormStatusService, {
      optional: true
    });
    this.autoStepTimer = null;
    this.value = signal(null);
    this.displayValue = signal("");
    this.dir = toSignal(this.directionality.change, {
      initialValue: this.directionality.value
    });
    this.focused = signal(false);
    this.hasFeedback = signal(false);
    this.finalStatus = linkedSignal(() => this.nzStatus());
    this.finalDisabled = linkedSignal(() => this.nzDisabled());
    this.prefix = contentChild(NzInputPrefixDirective);
    this.suffix = contentChild(NzInputSuffixDirective);
    this.addonBefore = contentChild(NzInputAddonBeforeDirective);
    this.addonAfter = contentChild(NzInputAddonAfterDirective);
    this.hasAffix = computed(() => !!this.prefix() || !!this.suffix() || this.hasFeedback());
    this.hasAddon = computed(() => !!this.addonBefore() || !!this.addonAfter());
    this.class = computed(() => {
      if (this.hasAddon()) {
        return this.groupWrapperClass();
      }
      if (this.hasAffix()) {
        return this.affixWrapperClass();
      }
      return this.inputNumberClass();
    });
    this.inputNumberClass = computed(() => {
      return __spreadValues({
        "ant-input-number": true,
        "ant-input-number-lg": this.finalSize() === "large",
        "ant-input-number-sm": this.finalSize() === "small",
        "ant-input-number-disabled": this.finalDisabled(),
        "ant-input-number-readonly": this.nzReadOnly(),
        "ant-input-number-borderless": !this.nzBordered(),
        "ant-input-number-focused": this.focused(),
        "ant-input-number-rtl": this.dir() === "rtl",
        "ant-input-number-in-form-item": !!this.nzFormStatusService,
        "ant-input-number-out-of-range": this.value() !== null && !isInRange(this.value(), this.nzMin(), this.nzMax())
      }, getStatusClassNames("ant-input-number", this.finalStatus(), this.hasFeedback()));
    });
    this.affixWrapperClass = computed(() => {
      return __spreadValues({
        "ant-input-number-affix-wrapper": true,
        "ant-input-number-affix-wrapper-disabled": this.finalDisabled(),
        "ant-input-number-affix-wrapper-readonly": this.nzReadOnly(),
        "ant-input-number-affix-wrapper-borderless": !this.nzBordered(),
        "ant-input-number-affix-wrapper-focused": this.focused(),
        "ant-input-number-affix-wrapper-rtl": this.dir() === "rtl"
      }, getStatusClassNames("ant-input-number-affix-wrapper", this.finalStatus(), this.hasFeedback()));
    });
    this.groupWrapperClass = computed(() => {
      return __spreadValues({
        "ant-input-number-group-wrapper": true,
        "ant-input-number-group-wrapper-rtl": this.dir() === "rtl"
      }, getStatusClassNames("ant-input-number-group-wrapper", this.finalStatus(), this.hasFeedback()));
    });
    this.finalSize = computed(() => {
      if (this.compactSize) {
        return this.compactSize();
      }
      return this.nzSize();
    });
    this.upDisabled = computed(() => {
      return !isNil(this.value()) && this.value() >= this.nzMax();
    });
    this.downDisabled = computed(() => {
      return !isNil(this.value()) && this.value() <= this.nzMin();
    });
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const hostRef = this.hostRef();
      const element = hostRef ? hostRef : this.elementRef;
      this.focusMonitor.monitor(element, true).pipe(takeUntilDestroyed(destroyRef)).subscribe((origin) => {
        this.focused.set(!!origin);
        if (!origin) {
          this.onTouched();
        }
      });
      destroyRef.onDestroy(() => {
        this.focusMonitor.stopMonitoring(element);
      });
    });
    this.nzFormStatusService?.formStatusChanges.pipe(takeUntilDestroyed()).subscribe(({
      status,
      hasFeedback
    }) => {
      this.finalStatus.set(status);
      this.hasFeedback.set(hasFeedback);
    });
  }
  ngOnInit() {
    if (this.nzAutoFocus()) {
      afterNextRender(() => this.focus(), {
        injector: this.injector
      });
    }
  }
  writeValue(value) {
    untracked(() => this.setValue(value));
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(disabled) {
    if (!this.isDisabledFirstChange) {
      this.finalDisabled.set(disabled);
    }
    this.isDisabledFirstChange = false;
  }
  focus() {
    this.inputRef().nativeElement.focus();
  }
  blur() {
    this.inputRef().nativeElement.blur();
  }
  step(event, up) {
    if (up && this.upDisabled() || !up && this.downDisabled()) {
      return;
    }
    let step = event.shiftKey ? this.nzStep() * 10 : this.nzStep();
    if (!up) {
      step = -step;
    }
    const places = getDecimalPlaces(step);
    const multiple = Math.pow(10, places);
    this.setValue((Math.round((this.value() || 0) * multiple) + Math.round(step * multiple)) / multiple, true);
    this.nzOnStep.emit({
      type: up ? "up" : "down",
      value: this.value(),
      offset: this.nzStep()
    });
    this.focus();
  }
  setValue(value, userTyping) {
    let parsedValue = null;
    if (!isNil(value)) {
      parsedValue = this.nzParser()(value.toString());
      if (userTyping) {
        if (Number.isNaN(parsedValue)) {
          parsedValue = null;
        } else {
          parsedValue = getRangeValueWithPrecision(parsedValue, this.nzMin(), this.nzMax(), this.nzPrecision());
        }
      }
    }
    this.value.set(parsedValue);
    this.displayValue.set(parsedValue === null ? "" : this.nzFormatter()(parsedValue));
    this.onChange(parsedValue);
  }
  stopAutoStep() {
    if (this.autoStepTimer !== null) {
      clearTimeout(this.autoStepTimer);
      this.autoStepTimer = null;
    }
  }
  onStepMouseDown(event, up) {
    event.preventDefault();
    this.stopAutoStep();
    this.step(event, up);
    const loopStep = () => {
      this.step(event, up);
      this.autoStepTimer = setTimeout(loopStep, STEP_INTERVAL);
    };
    this.autoStepTimer = setTimeout(loopStep, STEP_DELAY);
  }
  onKeyDown(event) {
    switch (event.keyCode) {
      case UP_ARROW:
        event.preventDefault();
        this.nzKeyboard() && this.step(event, true);
        break;
      case DOWN_ARROW:
        event.preventDefault();
        this.nzKeyboard() && this.step(event, false);
        break;
    }
  }
  onInputChange(value) {
    const target = value.target;
    this.setValue(target.value, true);
  }
  static {
    this.ɵfac = function NzInputNumberComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzInputNumberComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzInputNumberComponent,
      selectors: [["nz-input-number"]],
      contentQueries: function NzInputNumberComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.prefix, NzInputPrefixDirective, 5);
          ɵɵcontentQuerySignal(dirIndex, ctx.suffix, NzInputSuffixDirective, 5);
          ɵɵcontentQuerySignal(dirIndex, ctx.addonBefore, NzInputAddonBeforeDirective, 5);
          ɵɵcontentQuerySignal(dirIndex, ctx.addonAfter, NzInputAddonAfterDirective, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(4);
        }
      },
      viewQuery: function NzInputNumberComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.inputRef, _c0, 5);
          ɵɵviewQuerySignal(ctx.hostRef, _c1, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(2);
        }
      },
      hostVars: 2,
      hostBindings: function NzInputNumberComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown", function NzInputNumberComponent_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          });
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.class());
        }
      },
      inputs: {
        nzId: [1, "nzId"],
        nzSize: [1, "nzSize"],
        nzPlaceHolder: [1, "nzPlaceHolder"],
        nzStatus: [1, "nzStatus"],
        nzStep: [1, "nzStep"],
        nzMin: [1, "nzMin"],
        nzMax: [1, "nzMax"],
        nzPrecision: [1, "nzPrecision"],
        nzParser: [1, "nzParser"],
        nzFormatter: [1, "nzFormatter"],
        nzDisabled: [1, "nzDisabled"],
        nzReadOnly: [1, "nzReadOnly"],
        nzAutoFocus: [1, "nzAutoFocus"],
        nzBordered: [1, "nzBordered"],
        nzKeyboard: [1, "nzKeyboard"],
        nzControls: [1, "nzControls"]
      },
      outputs: {
        nzOnStep: "nzOnStep"
      },
      exportAs: ["nzInputNumber"],
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NzInputNumberComponent),
        multi: true
      }, {
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "input-number"
      }]), ɵɵHostDirectivesFeature([NzSpaceCompactItemDirective])],
      ngContentSelectors: _c3,
      decls: 13,
      vars: 1,
      consts: [["inputNumberWithAddonInner", ""], ["inputNumberWithAffix", ""], ["inputNumberWithAffixInner", ""], ["inputNumber", ""], ["inputNumberInner", ""], ["inputNumberHost", ""], ["input", ""], ["handlers", ""], [3, "ngTemplateOutlet"], [1, "ant-input-number-wrapper", "ant-input-number-group"], [1, "ant-input-number-group-addon"], [1, "ant-input-number-prefix"], [1, "ant-input-number-suffix"], [3, "status"], [1, "ant-input-number-handler-wrap"], [1, "ant-input-number-input-wrap"], ["autocomplete", "off", "role", "spinbutton", 1, "ant-input-number-input", 3, "input", "change", "value", "placeholder", "disabled", "readOnly"], [1, "ant-input-number-handler-wrap", 3, "mouseup", "mouseleave"], ["role", "button", "unselectable", "on", 1, "ant-input-number-handler", "ant-input-number-handler-up", 3, "mousedown"], ["role", "button", "unselectable", "on", 1, "ant-input-number-handler", "ant-input-number-handler-down", 3, "mousedown"], ["nzType", "up", 1, "ant-input-number-handler-up-inner"], ["nzType", "down", 1, "ant-input-number-handler-down-inner"]],
      template: function NzInputNumberComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c2);
          ɵɵtemplate(0, NzInputNumberComponent_Conditional_0_Template, 1, 1, null, 8)(1, NzInputNumberComponent_Conditional_1_Template, 1, 1, null, 8)(2, NzInputNumberComponent_Conditional_2_Template, 1, 1, null, 8)(3, NzInputNumberComponent_ng_template_3_Template, 5, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(5, NzInputNumberComponent_ng_template_5_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor)(7, NzInputNumberComponent_ng_template_7_Template, 3, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor)(9, NzInputNumberComponent_ng_template_9_Template, 3, 3, "ng-template", null, 3, ɵɵtemplateRefExtractor)(11, NzInputNumberComponent_ng_template_11_Template, 4, 9, "ng-template", null, 4, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.hasAddon() ? 0 : ctx.hasAffix() ? 1 : 2);
        }
      },
      dependencies: [NzIconModule, NzIconDirective, NzFormItemFeedbackIconComponent, NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputNumberComponent, [{
    type: Component,
    args: [{
      selector: "nz-input-number",
      exportAs: "nzInputNumber",
      imports: [NzIconModule, NzFormItemFeedbackIconComponent, NgTemplateOutlet],
      template: `
    @if (hasAddon()) {
      <ng-template [ngTemplateOutlet]="inputNumberWithAddonInner" />
    } @else if (hasAffix()) {
      <ng-template [ngTemplateOutlet]="inputNumberWithAffixInner" />
    } @else {
      <ng-template [ngTemplateOutlet]="inputNumberInner" />
    }

    <ng-template #inputNumberWithAddonInner>
      <div class="ant-input-number-wrapper ant-input-number-group">
        @if (addonBefore()) {
          <div class="ant-input-number-group-addon">
            <ng-content select="[nzInputAddonBefore]"></ng-content>
          </div>
        }

        @if (hasAffix()) {
          <ng-template [ngTemplateOutlet]="inputNumberWithAffix" />
        } @else {
          <ng-template [ngTemplateOutlet]="inputNumber" />
        }

        @if (addonAfter()) {
          <div class="ant-input-number-group-addon">
            <ng-content select="[nzInputAddonAfter]"></ng-content>
          </div>
        }
      </div>
    </ng-template>

    <ng-template #inputNumberWithAffix>
      <div [class]="affixWrapperClass()">
        <ng-template [ngTemplateOutlet]="inputNumberWithAffixInner" />
      </div>
    </ng-template>

    <ng-template #inputNumberWithAffixInner>
      @if (prefix()) {
        <span class="ant-input-number-prefix">
          <ng-content select="[nzInputPrefix]"></ng-content>
        </span>
      }
      <ng-template [ngTemplateOutlet]="inputNumber" />
      @if (suffix() || hasFeedback()) {
        <span class="ant-input-number-suffix">
          <ng-content select="[nzInputSuffix]"></ng-content>
          @if (hasFeedback() && finalStatus()) {
            <nz-form-item-feedback-icon [status]="finalStatus()" />
          }
        </span>
      }
    </ng-template>

    <ng-template #inputNumber>
      <div #inputNumberHost [class]="inputNumberClass()">
        <ng-template [ngTemplateOutlet]="inputNumberInner" />
      </div>
    </ng-template>

    <ng-template #inputNumberInner>
      @if (nzControls()) {
        <div #handlers class="ant-input-number-handler-wrap" (mouseup)="stopAutoStep()" (mouseleave)="stopAutoStep()">
          <span
            role="button"
            unselectable="on"
            class="ant-input-number-handler ant-input-number-handler-up"
            [class.ant-input-number-handler-up-disabled]="upDisabled()"
            [attr.aria-disabled]="upDisabled()"
            (mousedown)="onStepMouseDown($event, true)"
          >
            <ng-content select="[nzInputNumberUpIcon]">
              <nz-icon nzType="up" class="ant-input-number-handler-up-inner" />
            </ng-content>
          </span>
          <span
            role="button"
            unselectable="on"
            class="ant-input-number-handler ant-input-number-handler-down"
            [class.ant-input-number-handler-down-disabled]="downDisabled()"
            [attr.aria-disabled]="downDisabled()"
            (mousedown)="onStepMouseDown($event, false)"
          >
            <ng-content select="[nzInputNumberDownIcon]">
              <nz-icon nzType="down" class="ant-input-number-handler-down-inner" />
            </ng-content>
          </span>
        </div>
      }

      <div class="ant-input-number-input-wrap">
        <input
          #input
          autocomplete="off"
          role="spinbutton"
          class="ant-input-number-input"
          [attr.aria-valuemin]="nzMin()"
          [attr.aria-valuemax]="nzMax()"
          [attr.id]="nzId()"
          [value]="displayValue()"
          [attr.step]="nzStep()"
          [placeholder]="nzPlaceHolder() ?? ''"
          [disabled]="finalDisabled()"
          [readOnly]="nzReadOnly()"
          (input)="displayValue.set(input.value)"
          (change)="onInputChange($event)"
        />
      </div>
    </ng-template>
  `,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzInputNumberComponent),
        multi: true
      }, {
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "input-number"
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "class()",
        "(keydown)": "onKeyDown($event)"
      },
      hostDirectives: [NzSpaceCompactItemDirective]
    }]
  }], () => [], null);
})();
var STEP_INTERVAL = 200;
var STEP_DELAY = 600;
function defaultParser(value) {
  return +value.trim().replace(/。/g, ".");
}
function isInRange(value, min, max) {
  return value >= min && value <= max;
}
function getRangeValue(value, min, max) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}
function getRangeValueWithPrecision(value, min, max, precision) {
  if (precision === null) {
    return getRangeValue(value, min, max);
  }
  const fixedValue = +value.toFixed(precision);
  const multiple = Math.pow(10, precision);
  if (fixedValue < min) {
    return Math.ceil(min * multiple) / multiple;
  }
  if (fixedValue > max) {
    return Math.floor(max * multiple) / multiple;
  }
  return fixedValue;
}
function getDecimalPlaces(num) {
  return num.toString().split(".")[1]?.length || 0;
}
var NzInputNumberModule = class _NzInputNumberModule {
  static {
    this.ɵfac = function NzInputNumberModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzInputNumberModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzInputNumberModule,
      imports: [NzInputNumberComponent, NzInputAddonBeforeDirective, NzInputAddonAfterDirective, NzInputPrefixDirective, NzInputSuffixDirective],
      exports: [NzInputNumberComponent, NzInputAddonBeforeDirective, NzInputAddonAfterDirective, NzInputPrefixDirective, NzInputSuffixDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzInputNumberComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputNumberModule, [{
    type: NgModule,
    args: [{
      imports: [NzInputNumberComponent, NzInputAddonBeforeDirective, NzInputAddonAfterDirective, NzInputPrefixDirective, NzInputSuffixDirective],
      exports: [NzInputNumberComponent, NzInputAddonBeforeDirective, NzInputAddonAfterDirective, NzInputPrefixDirective, NzInputSuffixDirective]
    }]
  }], null, null);
})();
export {
  NzInputNumberComponent,
  NzInputNumberModule
};
//# sourceMappingURL=ng-zorro-antd_input-number.js.map
