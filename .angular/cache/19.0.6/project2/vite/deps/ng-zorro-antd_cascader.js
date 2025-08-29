import {
  NzEmbedEmptyComponent,
  NzEmptyModule,
  NzSelectClearComponent,
  NzSelectItemComponent,
  NzSelectPlaceholderComponent,
  NzSelectSearchComponent
} from "./chunk-JAL67PRF.js";
import {
  NzI18nService
} from "./chunk-S4GNDCLS.js";
import {
  NzFormItemFeedbackIconComponent,
  NzFormNoStatusService,
  NzFormStatusService
} from "./chunk-OXW7YYNW.js";
import {
  DEFAULT_CASCADER_POSITIONS,
  NzConnectedOverlayDirective,
  NzOverlayModule,
  POSITION_MAP,
  getPlacementName
} from "./chunk-DDJNGWJA.js";
import {
  CdkConnectedOverlay,
  OverlayModule
} from "./chunk-QRD4753P.js";
import {
  BACKSPACE,
  DOWN_ARROW,
  ENTER,
  ESCAPE,
  LEFT_ARROW,
  RIGHT_ARROW,
  UP_ARROW
} from "./chunk-QLLY5WPX.js";
import {
  NZ_SPACE_COMPACT_ITEM_TYPE,
  NZ_SPACE_COMPACT_SIZE,
  NzSpaceCompactItemDirective
} from "./chunk-4NLV4GET.js";
import "./chunk-35KDMFCB.js";
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
import {
  _getEventTarget
} from "./chunk-XLXKTAMZ.js";
import {
  NzNoAnimationDirective
} from "./chunk-3Q2KX23Z.js";
import {
  slideMotion
} from "./chunk-CA7I37YQ.js";
import "./chunk-S4RCOVZS.js";
import "./chunk-XN7EQTQK.js";
import "./chunk-BEEJEL5Z.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-DWZ7IJ2D.js";
import {
  Dir,
  Directionality
} from "./chunk-XWMA42Q7.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-RTBMFHVM.js";
import {
  arraysEqual,
  fromEventOutsideAngular,
  getStatusClassNames,
  isNotNil,
  toArray
} from "./chunk-PMSSPYGI.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR
} from "./chunk-BITKYCMU.js";
import "./chunk-25ZD2YUN.js";
import "./chunk-CO52LRTC.js";
import {
  NgTemplateOutlet,
  SlicePipe
} from "./chunk-VC5NROIR.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  Pipe,
  Renderer2,
  Subject,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  __esDecorate,
  __runInitializers,
  booleanAttribute,
  computed,
  distinctUntilChanged,
  finalize,
  forwardRef,
  from,
  inject,
  map,
  merge,
  numberAttribute,
  of,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  takeUntil,
  withLatestFrom,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-UKO23YGW.js";
import "./chunk-WDMUDEB6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-tree.mjs
var NzTreeNode = class _NzTreeNode {
  get treeService() {
    return this.service || this.parentNode && this.parentNode.treeService;
  }
  /**
   * Init nzTreeNode
   *
   * @param option option user's input
   * @param parent parent node
   * @param service base nzTreeService
   */
  constructor(option, parent = null, service = null) {
    this._title = "";
    this.level = 0;
    this.parentNode = null;
    this._icon = "";
    this._children = [];
    this._isLeaf = false;
    this._isChecked = false;
    this._isSelectable = false;
    this._isDisabled = false;
    this._isDisableCheckbox = false;
    this._isExpanded = false;
    this._isHalfChecked = false;
    this._isSelected = false;
    this._isLoading = false;
    this.canHide = false;
    this.isMatched = false;
    this.service = null;
    if (option instanceof _NzTreeNode) {
      return option;
    }
    this.service = service || null;
    this.origin = option;
    this.key = option.key;
    this.parentNode = parent;
    this._title = option.title || "---";
    this._icon = option.icon || "";
    this._isLeaf = option.isLeaf || false;
    this._children = [];
    this._isChecked = option.checked || false;
    this._isSelectable = option.disabled || option.selectable !== false;
    this._isDisabled = option.disabled || false;
    this._isDisableCheckbox = option.disableCheckbox || false;
    this._isExpanded = option.isLeaf ? false : option.expanded || false;
    this._isHalfChecked = false;
    this._isSelected = !option.disabled && option.selected || false;
    this._isLoading = false;
    this.isMatched = false;
    if (parent) {
      this.level = parent.level + 1;
    } else {
      this.level = 0;
    }
    const s = this.treeService;
    s?.treeNodePostProcessor?.(this);
    if (typeof option.children !== "undefined" && option.children !== null) {
      option.children.forEach((nodeOptions) => {
        if (s && !s.isCheckStrictly && option.checked && !option.disabled && !nodeOptions.disabled && !nodeOptions.disableCheckbox) {
          nodeOptions.checked = option.checked;
        }
        this._children.push(new _NzTreeNode(nodeOptions, this));
      });
    }
  }
  /**
   * auto generate
   * get
   * set
   */
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
    this.update();
  }
  get icon() {
    return this._icon;
  }
  set icon(value) {
    this._icon = value;
    this.update();
  }
  get children() {
    return this._children;
  }
  set children(value) {
    this._children = value;
    this.update();
  }
  get isLeaf() {
    return this._isLeaf;
  }
  set isLeaf(value) {
    this._isLeaf = value;
    this.update();
  }
  get isChecked() {
    return this._isChecked;
  }
  set isChecked(value) {
    this._isChecked = value;
    this.origin.checked = value;
    this.afterValueChange("isChecked");
  }
  get isHalfChecked() {
    return this._isHalfChecked;
  }
  set isHalfChecked(value) {
    this._isHalfChecked = value;
    this.afterValueChange("isHalfChecked");
  }
  get isSelectable() {
    return this._isSelectable;
  }
  set isSelectable(value) {
    this._isSelectable = value;
    this.update();
  }
  get isDisabled() {
    return this._isDisabled;
  }
  set isDisabled(value) {
    this._isDisabled = value;
    this.update();
  }
  get isDisableCheckbox() {
    return this._isDisableCheckbox;
  }
  set isDisableCheckbox(value) {
    this._isDisableCheckbox = value;
    this.update();
  }
  get isExpanded() {
    return this._isExpanded;
  }
  set isExpanded(value) {
    this._isExpanded = value;
    this.origin.expanded = value;
    this.afterValueChange("isExpanded");
    this.afterValueChange("reRender");
  }
  get isSelected() {
    return this._isSelected;
  }
  set isSelected(value) {
    this._isSelected = value;
    this.origin.selected = value;
    this.afterValueChange("isSelected");
  }
  get isLoading() {
    return this._isLoading;
  }
  set isLoading(value) {
    this._isLoading = value;
    this.update();
  }
  setSyncChecked(checked = false, halfChecked = false) {
    this.setChecked(checked, halfChecked);
    if (this.treeService && !this.treeService.isCheckStrictly) {
      this.treeService.conduct(this);
    }
  }
  setChecked(checked = false, halfChecked = false) {
    this.origin.checked = checked;
    this.isChecked = checked;
    this.isHalfChecked = halfChecked;
  }
  setExpanded(value) {
    this._isExpanded = value;
    this.origin.expanded = value;
    this.afterValueChange("isExpanded");
  }
  getParentNode() {
    return this.parentNode;
  }
  getChildren() {
    return this.children;
  }
  /**
   * Support appending child nodes by position. Leaf node cannot be appended.
   */
  addChildren(children, childPos = -1) {
    if (!this.isLeaf) {
      children.forEach((node) => {
        const refreshLevel = (n) => {
          n.getChildren().forEach((c) => {
            c.level = c.getParentNode().level + 1;
            c.origin.level = c.level;
            refreshLevel(c);
          });
        };
        let child = node;
        if (child instanceof _NzTreeNode) {
          child.parentNode = this;
        } else {
          child = new _NzTreeNode(node, this);
        }
        child.level = this.level + 1;
        child.origin.level = child.level;
        refreshLevel(child);
        try {
          childPos === -1 ? this.children.push(child) : this.children.splice(childPos, 0, child);
        } catch (e) {
        }
      });
      this.origin.children = this.getChildren().map((v) => v.origin);
      this.isLoading = false;
    }
    this.afterValueChange("addChildren");
    this.afterValueChange("reRender");
  }
  clearChildren() {
    this.afterValueChange("clearChildren");
    this.children = [];
    this.origin.children = [];
    this.afterValueChange("reRender");
  }
  remove() {
    const parentNode = this.getParentNode();
    if (parentNode) {
      parentNode.children = parentNode.getChildren().filter((v) => v.key !== this.key);
      parentNode.origin.children = parentNode.origin.children.filter((v) => v.key !== this.key);
      this.afterValueChange("remove");
      this.afterValueChange("reRender");
    }
  }
  afterValueChange(key) {
    if (this.treeService) {
      switch (key) {
        case "isChecked":
          this.treeService.setCheckedNodeList(this);
          break;
        case "isHalfChecked":
          this.treeService.setHalfCheckedNodeList(this);
          break;
        case "isExpanded":
          this.treeService.setExpandedNodeList(this);
          break;
        case "isSelected":
          this.treeService.setNodeActive(this);
          break;
        case "clearChildren":
          this.treeService.afterRemove(this.getChildren());
          break;
        case "remove":
          this.treeService.afterRemove([this]);
          break;
        case "reRender":
          this.treeService.flattenTreeData(this.treeService.rootNodes, this.treeService.getExpandedNodeList().map((v) => v.key));
          break;
      }
    }
    this.update();
  }
  update() {
    if (this.component) {
      this.component.markForCheck();
    }
  }
};
function isCheckDisabled(node) {
  const {
    isDisabled,
    isDisableCheckbox
  } = node;
  return !!(isDisabled || isDisableCheckbox);
}
function isInArray(needle, haystack) {
  return haystack.length > 0 && haystack.indexOf(needle) > -1;
}
function getPosition(level, index) {
  return `${level}-${index}`;
}
function getKey(key, pos) {
  if (key !== null && key !== void 0) {
    return key;
  }
  return pos;
}
function flattenTreeData(treeNodeList = [], expandedKeys = []) {
  const expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
  const flattenList = [];
  function dig(list, parent = null) {
    return list.map((treeNode, index) => {
      const pos = getPosition(parent ? parent.pos : "0", index);
      const mergedKey = getKey(treeNode.key, pos);
      treeNode.isStart = [...parent ? parent.isStart : [], index === 0];
      treeNode.isEnd = [...parent ? parent.isEnd : [], index === list.length - 1];
      const flattenNode = {
        parent,
        pos,
        children: [],
        data: treeNode,
        isStart: [...parent ? parent.isStart : [], index === 0],
        isEnd: [...parent ? parent.isEnd : [], index === list.length - 1]
      };
      flattenList.push(flattenNode);
      if (expandedKeys === true || expandedKeySet.has(mergedKey) || treeNode.isExpanded) {
        flattenNode.children = dig(treeNode.children || [], flattenNode);
      } else {
        flattenNode.children = [];
      }
      return flattenNode;
    });
  }
  dig(treeNodeList);
  return flattenList;
}
var NzTreeBaseService = class _NzTreeBaseService {
  constructor() {
    this.DRAG_SIDE_RANGE = 0.25;
    this.DRAG_MIN_GAP = 2;
    this.isCheckStrictly = false;
    this.isMultiple = false;
    this.rootNodes = [];
    this.flattenNodes$ = new BehaviorSubject([]);
    this.selectedNodeList = [];
    this.expandedNodeList = [];
    this.checkedNodeList = [];
    this.halfCheckedNodeList = [];
    this.matchedNodeList = [];
  }
  /**
   * reset tree nodes will clear default node list
   */
  initTree(nzNodes) {
    this.rootNodes = nzNodes;
    this.expandedNodeList = [];
    this.selectedNodeList = [];
    this.halfCheckedNodeList = [];
    this.checkedNodeList = [];
    this.matchedNodeList = [];
  }
  flattenTreeData(nzNodes, expandedKeys = []) {
    this.flattenNodes$.next(flattenTreeData(nzNodes, expandedKeys).map((item) => item.data));
  }
  getSelectedNode() {
    return this.selectedNode;
  }
  /**
   * get some list
   */
  getSelectedNodeList() {
    return this.conductNodeState("select");
  }
  /**
   * get checked node keys
   */
  getCheckedNodeKeys() {
    const keys = [];
    const checkedNodes = this.getCheckedNodeList();
    const calc = (nodes) => {
      nodes.forEach((node) => {
        keys.push(node.key);
        if (node.children.length < 1) return;
        calc(node.children);
      });
    };
    calc(checkedNodes);
    return keys;
  }
  /**
   * return checked nodes
   */
  getCheckedNodeList() {
    return this.conductNodeState("check");
  }
  getHalfCheckedNodeList() {
    return this.conductNodeState("halfCheck");
  }
  /**
   * return expanded nodes
   */
  getExpandedNodeList() {
    return this.conductNodeState("expand");
  }
  /**
   * return search matched nodes
   */
  getMatchedNodeList() {
    return this.conductNodeState("match");
  }
  isArrayOfNzTreeNode(value) {
    return value.every((item) => item instanceof NzTreeNode);
  }
  /**
   * set drag node
   */
  setSelectedNode(node) {
    this.selectedNode = node;
  }
  /**
   * set node selected status
   */
  setNodeActive(node) {
    if (!this.isMultiple && node.isSelected) {
      this.selectedNodeList.forEach((n) => {
        if (node.key !== n.key) {
          n.isSelected = false;
        }
      });
      this.selectedNodeList = [];
    }
    this.setSelectedNodeList(node, this.isMultiple);
  }
  /**
   * add or remove node to selectedNodeList
   */
  setSelectedNodeList(node, isMultiple = false) {
    const index = this.getIndexOfArray(this.selectedNodeList, node.key);
    if (isMultiple) {
      if (node.isSelected && index === -1) {
        this.selectedNodeList.push(node);
      }
    } else {
      if (node.isSelected && index === -1) {
        this.selectedNodeList = [node];
      }
    }
    if (!node.isSelected) {
      this.selectedNodeList = this.selectedNodeList.filter((n) => n.key !== node.key);
    }
  }
  /**
   * merge checked nodes
   */
  setHalfCheckedNodeList(node) {
    const index = this.getIndexOfArray(this.halfCheckedNodeList, node.key);
    if (node.isHalfChecked && index === -1) {
      this.halfCheckedNodeList.push(node);
    } else if (!node.isHalfChecked && index > -1) {
      this.halfCheckedNodeList = this.halfCheckedNodeList.filter((n) => node.key !== n.key);
    }
  }
  setCheckedNodeList(node) {
    const index = this.getIndexOfArray(this.checkedNodeList, node.key);
    if (node.isChecked && index === -1) {
      this.checkedNodeList.push(node);
    } else if (!node.isChecked && index > -1) {
      this.checkedNodeList = this.checkedNodeList.filter((n) => node.key !== n.key);
    }
  }
  /**
   * conduct checked/selected/expanded keys
   */
  conductNodeState(type = "check") {
    let resultNodesList = [];
    switch (type) {
      case "select":
        resultNodesList = this.selectedNodeList;
        break;
      case "expand":
        resultNodesList = this.expandedNodeList;
        break;
      case "match":
        resultNodesList = this.matchedNodeList;
        break;
      case "check":
        resultNodesList = this.checkedNodeList;
        const isIgnore = (node) => {
          const parentNode = node.getParentNode();
          if (parentNode) {
            if (this.checkedNodeList.findIndex((n) => n.key === parentNode.key) > -1) {
              return true;
            } else {
              return isIgnore(parentNode);
            }
          }
          return false;
        };
        if (!this.isCheckStrictly) {
          resultNodesList = this.checkedNodeList.filter((n) => !isIgnore(n));
        }
        break;
      case "halfCheck":
        if (!this.isCheckStrictly) {
          resultNodesList = this.halfCheckedNodeList;
        }
        break;
    }
    return resultNodesList;
  }
  /**
   * set expanded nodes
   */
  setExpandedNodeList(node) {
    if (node.isLeaf) {
      return;
    }
    const index = this.getIndexOfArray(this.expandedNodeList, node.key);
    if (node.isExpanded && index === -1) {
      this.expandedNodeList.push(node);
    } else if (!node.isExpanded && index > -1) {
      this.expandedNodeList.splice(index, 1);
    }
  }
  setMatchedNodeList(node) {
    const index = this.getIndexOfArray(this.matchedNodeList, node.key);
    if (node.isMatched && index === -1) {
      this.matchedNodeList.push(node);
    } else if (!node.isMatched && index > -1) {
      this.matchedNodeList.splice(index, 1);
    }
  }
  /**
   * check state
   *
   * @param isCheckStrictly
   */
  refreshCheckState(isCheckStrictly = false) {
    if (isCheckStrictly) {
      return;
    }
    this.checkedNodeList.forEach((node) => {
      this.conduct(node, isCheckStrictly);
    });
  }
  // reset other node checked state based current node
  conduct(node, isCheckStrictly = false) {
    const isChecked = node.isChecked;
    if (node && !isCheckStrictly) {
      this.conductUp(node);
      this.conductDown(node, isChecked);
    }
  }
  /**
   * 1、children half checked
   * 2、children all checked, parent checked
   * 3、no children checked
   */
  conductUp(node) {
    const parentNode = node.getParentNode();
    if (parentNode) {
      if (!isCheckDisabled(parentNode)) {
        if (parentNode.children.every((child) => isCheckDisabled(child) || !child.isHalfChecked && child.isChecked)) {
          parentNode.isChecked = true;
          parentNode.isHalfChecked = false;
        } else if (parentNode.children.some((child) => child.isHalfChecked || child.isChecked)) {
          parentNode.isChecked = false;
          parentNode.isHalfChecked = true;
        } else {
          parentNode.isChecked = false;
          parentNode.isHalfChecked = false;
        }
      }
      this.setCheckedNodeList(parentNode);
      this.setHalfCheckedNodeList(parentNode);
      this.conductUp(parentNode);
    }
  }
  /**
   * reset child check state
   */
  conductDown(node, value) {
    if (!isCheckDisabled(node)) {
      node.isChecked = value;
      node.isHalfChecked = false;
      this.setCheckedNodeList(node);
      this.setHalfCheckedNodeList(node);
      node.children.forEach((n) => {
        this.conductDown(n, value);
      });
    }
  }
  /**
   * flush after delete node
   */
  afterRemove(nodes) {
    const loopNode = (node) => {
      this.selectedNodeList = this.selectedNodeList.filter((n) => n.key !== node.key);
      this.expandedNodeList = this.expandedNodeList.filter((n) => n.key !== node.key);
      this.checkedNodeList = this.checkedNodeList.filter((n) => n.key !== node.key);
      if (node.children) {
        node.children.forEach((child) => {
          loopNode(child);
        });
      }
    };
    nodes.forEach((n) => {
      loopNode(n);
    });
    this.refreshCheckState(this.isCheckStrictly);
  }
  /**
   * drag event
   */
  refreshDragNode(node) {
    if (node.children.length === 0) {
      this.conductUp(node);
    } else {
      node.children.forEach((child) => {
        this.refreshDragNode(child);
      });
    }
  }
  // reset node level
  resetNodeLevel(node) {
    const parentNode = node.getParentNode();
    if (parentNode) {
      node.level = parentNode.level + 1;
    } else {
      node.level = 0;
    }
    for (const child of node.children) {
      this.resetNodeLevel(child);
    }
  }
  calcDropPosition(event) {
    const {
      clientY
    } = event;
    const {
      top,
      bottom,
      height
    } = event.target.getBoundingClientRect();
    const des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
    if (clientY <= top + des) {
      return -1;
    } else if (clientY >= bottom - des) {
      return 1;
    }
    return 0;
  }
  /**
   * drop
   * 0: inner -1: pre 1: next
   */
  dropAndApply(targetNode, dragPos = -1) {
    if (!targetNode || dragPos > 1) {
      return;
    }
    const treeService = targetNode.treeService;
    const targetParent = targetNode.getParentNode();
    const isSelectedRootNode = this.selectedNode.getParentNode();
    if (isSelectedRootNode) {
      isSelectedRootNode.children = isSelectedRootNode.children.filter((n) => n.key !== this.selectedNode.key);
    } else {
      this.rootNodes = this.rootNodes.filter((n) => n.key !== this.selectedNode.key);
    }
    switch (dragPos) {
      case 0:
        targetNode.addChildren([this.selectedNode]);
        this.resetNodeLevel(targetNode);
        break;
      case -1:
      case 1:
        const tIndex = dragPos === 1 ? 1 : 0;
        if (targetParent) {
          targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
          const parentNode = this.selectedNode.getParentNode();
          if (parentNode) {
            this.resetNodeLevel(parentNode);
          }
        } else {
          const targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
          this.rootNodes.splice(targetIndex, 0, this.selectedNode);
          this.rootNodes[targetIndex].parentNode = null;
          this.resetNodeLevel(this.rootNodes[targetIndex]);
        }
        break;
    }
    this.rootNodes.forEach((child) => {
      if (!child.treeService) {
        child.service = treeService;
      }
      this.refreshDragNode(child);
    });
  }
  /**
   * emit Structure
   * eventName
   * node
   * event: MouseEvent / DragEvent
   * dragNode
   */
  formatEvent(eventName, node, event) {
    const emitStructure = {
      eventName,
      node,
      event
    };
    switch (eventName) {
      case "dragstart":
      case "dragenter":
      case "dragover":
      case "dragleave":
      case "drop":
      case "dragend":
        Object.assign(emitStructure, {
          dragNode: this.getSelectedNode()
        });
        break;
      case "click":
      case "dblclick":
        Object.assign(emitStructure, {
          selectedKeys: this.selectedNodeList
        });
        Object.assign(emitStructure, {
          nodes: this.selectedNodeList
        });
        Object.assign(emitStructure, {
          keys: this.selectedNodeList.map((n) => n.key)
        });
        break;
      case "check":
        const checkedNodeList = this.getCheckedNodeList();
        Object.assign(emitStructure, {
          checkedKeys: checkedNodeList
        });
        Object.assign(emitStructure, {
          nodes: checkedNodeList
        });
        Object.assign(emitStructure, {
          keys: checkedNodeList.map((n) => n.key)
        });
        break;
      case "search":
        Object.assign(emitStructure, {
          matchedKeys: this.getMatchedNodeList()
        });
        Object.assign(emitStructure, {
          nodes: this.getMatchedNodeList()
        });
        Object.assign(emitStructure, {
          keys: this.getMatchedNodeList().map((n) => n.key)
        });
        break;
      case "expand":
        Object.assign(emitStructure, {
          nodes: this.expandedNodeList
        });
        Object.assign(emitStructure, {
          keys: this.expandedNodeList.map((n) => n.key)
        });
        break;
    }
    return emitStructure;
  }
  /**
   * New functions for flatten nodes
   */
  getIndexOfArray(list, key) {
    return list.findIndex((v) => v.key === key);
  }
  /**
   * Render by nzCheckedKeys
   * When keys equals null, just render with checkStrictly
   *
   * @param keys
   * @param checkStrictly
   */
  conductCheck(keys, checkStrictly) {
    this.checkedNodeList = [];
    this.halfCheckedNodeList = [];
    const calc = (nodes) => {
      nodes.forEach((node) => {
        if (keys === null) {
          node.isChecked = !!node.origin.checked;
        } else {
          if (isInArray(node.key, keys || [])) {
            node.isChecked = true;
            node.isHalfChecked = false;
          } else {
            node.isChecked = false;
            node.isHalfChecked = false;
          }
        }
        if (node.children.length > 0) {
          calc(node.children);
        }
      });
    };
    calc(this.rootNodes);
    this.refreshCheckState(checkStrictly);
  }
  conductExpandedKeys(keys = []) {
    const expandedKeySet = new Set(keys === true ? [] : keys);
    this.expandedNodeList = [];
    const calc = (nodes) => {
      nodes.forEach((node) => {
        node.setExpanded(keys === true || expandedKeySet.has(node.key) || node.isExpanded === true);
        if (node.isExpanded) {
          this.setExpandedNodeList(node);
        }
        if (node.children.length > 0) {
          calc(node.children);
        }
      });
    };
    calc(this.rootNodes);
  }
  conductSelectedKeys(keys, isMulti) {
    this.selectedNodeList.forEach((node) => node.isSelected = false);
    this.selectedNodeList = [];
    const calc = (nodes) => nodes.every((node) => {
      if (isInArray(node.key, keys)) {
        node.isSelected = true;
        this.setSelectedNodeList(node);
        if (!isMulti) {
          return false;
        }
      } else {
        node.isSelected = false;
      }
      if (node.children.length > 0) {
        return calc(node.children);
      }
      return true;
    });
    calc(this.rootNodes);
  }
  /**
   * Expand parent nodes by child node
   *
   * @param node
   */
  expandNodeAllParentBySearch(node) {
    const calc = (n) => {
      if (n) {
        n.canHide = false;
        n.setExpanded(true);
        this.setExpandedNodeList(n);
        if (n.getParentNode()) {
          return calc(n.getParentNode());
        }
      }
    };
    calc(node.getParentNode());
  }
  static {
    this.ɵfac = function NzTreeBaseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzTreeBaseService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NzTreeBaseService,
      factory: _NzTreeBaseService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeBaseService, [{
    type: Injectable
  }], null, null);
})();
var NzTreeHigherOrderServiceToken = new InjectionToken("NzTreeHigherOrder");
var NzTreeBase = class {
  constructor(nzTreeService) {
    this.nzTreeService = nzTreeService;
  }
  /**
   * Coerces a value({@link any[]}) to a TreeNodes({@link NzTreeNode[]})
   */
  coerceTreeNodes(value) {
    let nodes = [];
    if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
      nodes = value.map((item) => new NzTreeNode(item, null, this.nzTreeService));
    } else {
      nodes = value.map((item) => {
        item.service = this.nzTreeService;
        return item;
      });
    }
    return nodes;
  }
  /**
   * Get all nodes({@link NzTreeNode})
   */
  getTreeNodes() {
    return this.nzTreeService.rootNodes;
  }
  /**
   * Get {@link NzTreeNode} with key
   */
  getTreeNodeByKey(key) {
    const nodes = [];
    const getNode = (node) => {
      nodes.push(node);
      node.getChildren().forEach((n) => {
        getNode(n);
      });
    };
    this.getTreeNodes().forEach((n) => {
      getNode(n);
    });
    return nodes.find((n) => n.key === key) || null;
  }
  /**
   * Get checked nodes(merged)
   */
  getCheckedNodeList() {
    return this.nzTreeService.getCheckedNodeList();
  }
  /**
   * Get selected nodes
   */
  getSelectedNodeList() {
    return this.nzTreeService.getSelectedNodeList();
  }
  /**
   * Get half checked nodes
   */
  getHalfCheckedNodeList() {
    return this.nzTreeService.getHalfCheckedNodeList();
  }
  /**
   * Get expanded nodes
   */
  getExpandedNodeList() {
    return this.nzTreeService.getExpandedNodeList();
  }
  /**
   * Get matched nodes(if nzSearchValue is not null)
   */
  getMatchedNodeList() {
    return this.nzTreeService.getMatchedNodeList();
  }
};

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-highlight.mjs
var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
var NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
function encodeEntities(value) {
  return value.replace(/&/g, "&amp;").replace(SURROGATE_PAIR_REGEXP, (match) => {
    const hi = match.charCodeAt(0);
    const low = match.charCodeAt(1);
    return `&#${(hi - 55296) * 1024 + (low - 56320) + 65536};`;
  }).replace(NON_ALPHANUMERIC_REGEXP, (match) => `&#${match.charCodeAt(0)};`).replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
var NzHighlightPipe = class _NzHighlightPipe {
  constructor() {
    this.UNIQUE_WRAPPERS = ["##==-open_tag-==##", "##==-close_tag-==##"];
  }
  transform(value, highlightValue, flags, klass) {
    if (!highlightValue) {
      return value;
    }
    const searchValue = new RegExp(highlightValue.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$&"), flags);
    const wrapValue = value.replace(searchValue, `${this.UNIQUE_WRAPPERS[0]}$&${this.UNIQUE_WRAPPERS[1]}`);
    return encodeEntities(wrapValue).replace(new RegExp(this.UNIQUE_WRAPPERS[0], "g"), klass ? `<span class="${klass}">` : "<span>").replace(new RegExp(this.UNIQUE_WRAPPERS[1], "g"), "</span>");
  }
  static {
    this.ɵfac = function NzHighlightPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzHighlightPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "nzHighlight",
      type: _NzHighlightPipe,
      pure: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzHighlightPipe, [{
    type: Pipe,
    args: [{
      name: "nzHighlight",
      pure: true
    }]
  }], null, null);
})();
var NzHighlightModule = class _NzHighlightModule {
  static {
    this.ɵfac = function NzHighlightModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzHighlightModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzHighlightModule,
      imports: [NzHighlightPipe],
      exports: [NzHighlightPipe]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzHighlightModule, [{
    type: NgModule,
    args: [{
      imports: [NzHighlightPipe],
      exports: [NzHighlightPipe]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-cascader.mjs
var _c0 = ["nz-cascader-option", ""];
var _c1 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function NzCascaderOptionComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 4);
    ɵɵlistener("click", function NzCascaderOptionComponent_Conditional_0_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onCheckboxClick($event));
    });
    ɵɵelement(1, "span", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-cascader-checkbox-checked", ctx_r1.checked)("ant-cascader-checkbox-indeterminate", ctx_r1.halfChecked)("ant-cascader-checkbox-disabled", ctx_r1.disabled);
  }
}
function NzCascaderOptionComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzCascaderOptionComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzCascaderOptionComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.optionTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c1, ctx_r1.node.origin, ctx_r1.columnIndex));
  }
}
function NzCascaderOptionComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 2);
    ɵɵpipe(1, "nzHighlight");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ɵɵpipeBind4(1, 1, ctx_r1.node.title, ctx_r1.highlightText, "g", "ant-cascader-menu-item-keyword"), ɵɵsanitizeHtml);
  }
}
function NzCascaderOptionComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 6);
  }
}
function NzCascaderOptionComponent_Conditional_3_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "nz-icon", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("nzType", ctx_r1.expandIcon);
  }
}
function NzCascaderOptionComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzCascaderOptionComponent_Conditional_3_Conditional_2_ng_container_0_Template, 2, 1, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.expandIcon);
  }
}
function NzCascaderOptionComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, NzCascaderOptionComponent_Conditional_3_Conditional_1_Template, 1, 0, "nz-icon", 6)(2, NzCascaderOptionComponent_Conditional_3_Conditional_2_Template, 1, 1, "ng-container");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r1.node.isLoading ? 1 : 2);
  }
}
var _c2 = ["selectContainer"];
var _c3 = ["menu"];
var _c4 = ["*"];
function NzCascaderComponent_Conditional_0_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-select-item", 9);
    ɵɵlistener("delete", function NzCascaderComponent_Conditional_0_Conditional_2_For_1_Template_nz_select_item_delete_0_listener() {
      const node_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.removeSelected(node_r3));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵproperty("deletable", true)("disabled", ctx_r3.nzDisabled)("label", ctx_r3.nzDisplayWith(ctx_r3.getAncestorOptionList(node_r3)));
  }
}
function NzCascaderComponent_Conditional_0_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-select-item", 8);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵproperty("deletable", false)("disabled", false)("label", "+ " + (ctx_r3.selectedNodes.length - ctx_r3.nzMaxTagCount) + " ...");
  }
}
function NzCascaderComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzCascaderComponent_Conditional_0_Conditional_2_For_1_Template, 1, 3, "nz-select-item", 8, ɵɵrepeaterTrackByIdentity);
    ɵɵpipe(2, "slice");
    ɵɵtemplate(3, NzCascaderComponent_Conditional_0_Conditional_2_Conditional_3_Template, 1, 3, "nz-select-item", 8);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵrepeater(ɵɵpipeBind3(2, 1, ctx_r3.selectedNodes, 0, ctx_r3.nzMaxTagCount));
    ɵɵadvance(3);
    ɵɵconditional(ctx_r3.selectedNodes.length > ctx_r3.nzMaxTagCount ? 3 : -1);
  }
}
function NzCascaderComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-select-placeholder", 10);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵstyleProp("display", ctx_r3.inputValue || ctx_r3.isComposing ? "none" : "block");
    ɵɵproperty("placeholder", ctx_r3.nzPlaceHolder || (ctx_r3.locale == null ? null : ctx_r3.locale.placeholder));
  }
}
function NzCascaderComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-select-item", 6);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("deletable", false)("disabled", ctx_r3.nzDisabled)("label", ctx_r3.labelRenderText)("contentTemplateOutlet", ctx_r3.isLabelRenderTemplate ? ctx_r3.nzLabelRender : null)("contentTemplateOutletContext", ctx_r3.labelRenderContext);
  }
}
function NzCascaderComponent_Conditional_0_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 15);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵclassProp("ant-cascader-picker-arrow-expand", ctx_r3.menuVisible);
    ɵɵproperty("nzType", ctx_r3.nzSuffixIcon);
  }
}
function NzCascaderComponent_Conditional_0_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 13);
  }
}
function NzCascaderComponent_Conditional_0_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-form-item-feedback-icon", 14);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵproperty("status", ctx_r3.status);
  }
}
function NzCascaderComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtemplate(1, NzCascaderComponent_Conditional_0_Conditional_6_Conditional_1_Template, 1, 3, "nz-icon", 12)(2, NzCascaderComponent_Conditional_0_Conditional_6_Conditional_2_Template, 1, 0, "nz-icon", 13)(3, NzCascaderComponent_Conditional_0_Conditional_6_Conditional_3_Template, 1, 1, "nz-form-item-feedback-icon", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassProp("ant-select-arrow-loading", ctx_r3.isLoading);
    ɵɵadvance();
    ɵɵconditional(!ctx_r3.isLoading ? 1 : 2);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r3.hasFeedback && !!ctx_r3.status ? 3 : -1);
  }
}
function NzCascaderComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-select-clear", 16);
    ɵɵlistener("clear", function NzCascaderComponent_Conditional_0_Conditional_7_Template_nz_select_clear_clear_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.clearSelection($event));
    });
    ɵɵelementEnd();
  }
}
function NzCascaderComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3, 0);
    ɵɵtemplate(2, NzCascaderComponent_Conditional_0_Conditional_2_Template, 4, 5);
    ɵɵelementStart(3, "nz-select-search", 4);
    ɵɵlistener("isComposingChange", function NzCascaderComponent_Conditional_0_Template_nz_select_search_isComposingChange_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.isComposingChange($event));
    })("valueChange", function NzCascaderComponent_Conditional_0_Template_nz_select_search_valueChange_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.inputValue = $event);
    });
    ɵɵelementEnd();
    ɵɵtemplate(4, NzCascaderComponent_Conditional_0_Conditional_4_Template, 1, 3, "nz-select-placeholder", 5)(5, NzCascaderComponent_Conditional_0_Conditional_5_Template, 1, 5, "nz-select-item", 6);
    ɵɵelementEnd();
    ɵɵtemplate(6, NzCascaderComponent_Conditional_0_Conditional_6_Template, 4, 4, "span", 7)(7, NzCascaderComponent_Conditional_0_Conditional_7_Template, 1, 0, "nz-select-clear");
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵconditional(ctx_r3.nzMultiple ? 2 : -1);
    ɵɵadvance();
    ɵɵproperty("showInput", !!ctx_r3.nzShowSearch)("value", ctx_r3.inputValue)("mirrorSync", ctx_r3.nzMultiple)("disabled", ctx_r3.nzDisabled)("autofocus", ctx_r3.nzAutoFocus)("focusTrigger", ctx_r3.menuVisible);
    ɵɵadvance();
    ɵɵconditional(ctx_r3.showPlaceholder ? 4 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r3.showLabelRender ? 5 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r3.nzShowArrow ? 6 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r3.clearIconVisible ? 7 : -1);
  }
}
function NzCascaderComponent_ng_template_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 20)(1, "li", 21);
    ɵɵelement(2, "nz-embed-empty", 22);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵstyleProp("width", ctx_r3.dropdownWidthStyle)("height", ctx_r3.dropdownHeightStyle);
    ɵɵadvance(2);
    ɵɵproperty("nzComponentName", "cascader")("specificContent", ctx_r3.nzNotFoundContent);
  }
}
function NzCascaderComponent_ng_template_2_Conditional_4_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 26);
    ɵɵlistener("mouseenter", function NzCascaderComponent_ng_template_2_Conditional_4_For_1_For_2_Template_li_mouseenter_0_listener($event) {
      const option_r8 = ɵɵrestoreView(_r7).$implicit;
      const ɵ$index_50_r9 = ɵɵnextContext().$index;
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.onOptionMouseEnter(option_r8, ɵ$index_50_r9, $event));
    })("mouseleave", function NzCascaderComponent_ng_template_2_Conditional_4_For_1_For_2_Template_li_mouseleave_0_listener($event) {
      const option_r8 = ɵɵrestoreView(_r7).$implicit;
      const ɵ$index_50_r9 = ɵɵnextContext().$index;
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.onOptionMouseLeave(option_r8, ɵ$index_50_r9, $event));
    })("click", function NzCascaderComponent_ng_template_2_Conditional_4_For_1_For_2_Template_li_click_0_listener($event) {
      const option_r8 = ɵɵrestoreView(_r7).$implicit;
      const ɵ$index_50_r9 = ɵɵnextContext().$index;
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.onOptionClick(option_r8, ɵ$index_50_r9, $event));
    })("check", function NzCascaderComponent_ng_template_2_Conditional_4_For_1_For_2_Template_li_check_0_listener() {
      const option_r8 = ɵɵrestoreView(_r7).$implicit;
      const ɵ$index_50_r9 = ɵɵnextContext().$index;
      const ctx_r3 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r3.onOptionCheck(option_r8, ɵ$index_50_r9));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ɵ$index_50_r9 = ɵɵnextContext().$index;
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵproperty("expandIcon", ctx_r3.nzExpandIcon)("columnIndex", ɵ$index_50_r9)("nzLabelProperty", ctx_r3.nzLabelProperty)("optionTemplate", ctx_r3.nzOptionRender)("activated", ctx_r3.isOptionActivated(option_r8, ɵ$index_50_r9))("highlightText", ctx_r3.inSearchingMode ? ctx_r3.inputValue : "")("node", option_r8)("dir", ctx_r3.dir)("checkable", ctx_r3.nzMultiple);
  }
}
function NzCascaderComponent_ng_template_2_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 24);
    ɵɵrepeaterCreate(1, NzCascaderComponent_ng_template_2_Conditional_4_For_1_For_2_Template, 1, 9, "li", 25, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const options_r10 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r3.nzColumnClassName);
    ɵɵstyleProp("height", ctx_r3.dropdownHeightStyle);
    ɵɵadvance();
    ɵɵrepeater(options_r10);
  }
}
function NzCascaderComponent_ng_template_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzCascaderComponent_ng_template_2_Conditional_4_For_1_Template, 3, 4, "ul", 23, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵrepeater(ctx_r3.cascaderService.columns);
  }
}
function NzCascaderComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 17);
    ɵɵlistener("mouseenter", function NzCascaderComponent_ng_template_2_Template_div_mouseenter_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onTriggerMouseEnter());
    })("mouseleave", function NzCascaderComponent_ng_template_2_Template_div_mouseleave_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onTriggerMouseLeave($event));
    });
    ɵɵelementStart(1, "div", 18, 1);
    ɵɵtemplate(3, NzCascaderComponent_ng_template_2_Conditional_3_Template, 3, 6, "ul", 19)(4, NzCascaderComponent_ng_template_2_Conditional_4_Template, 2, 0);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("ant-select-dropdown-placement-bottomLeft", ctx_r3.dropdownPosition === "bottomLeft")("ant-select-dropdown-placement-bottomRight", ctx_r3.dropdownPosition === "bottomRight")("ant-select-dropdown-placement-topLeft", ctx_r3.dropdownPosition === "topLeft")("ant-select-dropdown-placement-topRight", ctx_r3.dropdownPosition === "topRight")("ant-cascader-dropdown-rtl", ctx_r3.dir === "rtl");
    ɵɵproperty("@slideMotion", "enter")("@.disabled", !!(ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation);
    ɵɵadvance();
    ɵɵstyleMap(ctx_r3.nzMenuStyle);
    ɵɵclassMap(ctx_r3.nzMenuClassName);
    ɵɵclassProp("ant-cascader-rtl", ctx_r3.dir === "rtl")("ant-cascader-menus-hidden", !ctx_r3.menuVisible)("ant-cascader-menu-empty", ctx_r3.shouldShowEmpty);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r3.shouldShowEmpty ? 3 : 4);
  }
}
function isShowSearchObject(options) {
  return typeof options !== "boolean";
}
function isChildNode(node) {
  return node.isLeaf || !node.children || !node.children.length;
}
function isParentNode(node) {
  return !!node.children && !!node.children.length && !node.isLeaf;
}
var NzCascaderOptionComponent = class _NzCascaderOptionComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.optionTemplate = null;
    this.activated = false;
    this.nzLabelProperty = "label";
    this.expandIcon = "";
    this.dir = "ltr";
    this.checkable = false;
    this.check = new EventEmitter();
    this.nativeElement = inject(ElementRef).nativeElement;
  }
  ngOnInit() {
    if (this.expandIcon === "" && this.dir === "rtl") {
      this.expandIcon = "left";
    } else if (this.expandIcon === "") {
      this.expandIcon = "right";
    }
  }
  get checked() {
    return this.node.isChecked;
  }
  get halfChecked() {
    return this.node.isHalfChecked;
  }
  get disabled() {
    return this.node.isDisabled || this.node.isDisableCheckbox;
  }
  markForCheck() {
    this.cdr.markForCheck();
  }
  onCheckboxClick(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.checkable) {
      return;
    }
    this.check.emit();
  }
  static {
    this.ɵfac = function NzCascaderOptionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzCascaderOptionComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzCascaderOptionComponent,
      selectors: [["", "nz-cascader-option", ""]],
      hostAttrs: [1, "ant-cascader-menu-item", "ant-cascader-menu-item-expanded"],
      hostVars: 7,
      hostBindings: function NzCascaderOptionComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("title", ctx.node.title);
          ɵɵclassProp("ant-cascader-menu-item-active", ctx.activated)("ant-cascader-menu-item-expand", !ctx.node.isLeaf)("ant-cascader-menu-item-disabled", ctx.node.isDisabled);
        }
      },
      inputs: {
        optionTemplate: "optionTemplate",
        node: "node",
        activated: "activated",
        highlightText: "highlightText",
        nzLabelProperty: "nzLabelProperty",
        columnIndex: [2, "columnIndex", "columnIndex", numberAttribute],
        expandIcon: "expandIcon",
        dir: "dir",
        checkable: [2, "checkable", "checkable", booleanAttribute]
      },
      outputs: {
        check: "check"
      },
      exportAs: ["nzCascaderOption"],
      features: [ɵɵInputTransformsFeature],
      attrs: _c0,
      decls: 4,
      vars: 3,
      consts: [[1, "ant-cascader-checkbox", 3, "ant-cascader-checkbox-checked", "ant-cascader-checkbox-indeterminate", "ant-cascader-checkbox-disabled"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-cascader-menu-item-content", 3, "innerHTML"], [1, "ant-cascader-menu-item-expand-icon"], [1, "ant-cascader-checkbox", 3, "click"], [1, "ant-cascader-checkbox-inner"], ["nzType", "loading"], [4, "nzStringTemplateOutlet"], [3, "nzType"]],
      template: function NzCascaderOptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzCascaderOptionComponent_Conditional_0_Template, 2, 6, "span", 0)(1, NzCascaderOptionComponent_Conditional_1_Template, 1, 5, null, 1)(2, NzCascaderOptionComponent_Conditional_2_Template, 2, 6, "div", 2)(3, NzCascaderOptionComponent_Conditional_3_Template, 3, 1, "div", 3);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.checkable ? 0 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.optionTemplate ? 1 : 2);
          ɵɵadvance(2);
          ɵɵconditional(!ctx.node.isLeaf || (ctx.node.children == null ? null : ctx.node.children.length) || ctx.node.isLoading ? 3 : -1);
        }
      },
      dependencies: [NgTemplateOutlet, NzHighlightModule, NzHighlightPipe, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCascaderOptionComponent, [{
    type: Component,
    args: [{
      selector: "[nz-cascader-option]",
      exportAs: "nzCascaderOption",
      imports: [NgTemplateOutlet, NzHighlightModule, NzIconModule, NzOutletModule],
      template: `
    @if (checkable) {
      <span
        class="ant-cascader-checkbox"
        [class.ant-cascader-checkbox-checked]="checked"
        [class.ant-cascader-checkbox-indeterminate]="halfChecked"
        [class.ant-cascader-checkbox-disabled]="disabled"
        (click)="onCheckboxClick($event)"
      >
        <span class="ant-cascader-checkbox-inner"></span>
      </span>
    }

    @if (optionTemplate) {
      <ng-template
        [ngTemplateOutlet]="optionTemplate"
        [ngTemplateOutletContext]="{ $implicit: node.origin, index: columnIndex }"
      />
    } @else {
      <div
        class="ant-cascader-menu-item-content"
        [innerHTML]="node.title | nzHighlight: highlightText : 'g' : 'ant-cascader-menu-item-keyword'"
      ></div>
    }

    @if (!node.isLeaf || node.children?.length || node.isLoading) {
      <div class="ant-cascader-menu-item-expand-icon">
        @if (node.isLoading) {
          <nz-icon nzType="loading" />
        } @else {
          <ng-container *nzStringTemplateOutlet="expandIcon">
            <nz-icon [nzType]="$any(expandIcon)" />
          </ng-container>
        }
      </div>
    }
  `,
      host: {
        class: "ant-cascader-menu-item ant-cascader-menu-item-expanded",
        "[attr.title]": "node.title",
        "[class.ant-cascader-menu-item-active]": "activated",
        "[class.ant-cascader-menu-item-expand]": "!node.isLeaf",
        "[class.ant-cascader-menu-item-disabled]": "node.isDisabled"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    optionTemplate: [{
      type: Input
    }],
    node: [{
      type: Input
    }],
    activated: [{
      type: Input
    }],
    highlightText: [{
      type: Input
    }],
    nzLabelProperty: [{
      type: Input
    }],
    columnIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    expandIcon: [{
      type: Input
    }],
    dir: [{
      type: Input
    }],
    checkable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    check: [{
      type: Output
    }]
  });
})();
var NzCascaderTreeService = class _NzCascaderTreeService extends NzTreeBaseService {
  getOptionValue(node) {
    return node.origin[this.fieldNames.value || "value"];
  }
  getOptionLabel(node) {
    return node.origin[this.fieldNames.label || "label"];
  }
  get children() {
    return this.rootNodes;
  }
  set children(value) {
    this.rootNodes = value.map((v) => v instanceof NzTreeNode ? v : new NzTreeNode(v, null));
  }
  constructor() {
    super();
    this.fieldNames = {
      label: "label",
      value: "value"
    };
    this.missingNodeList = [];
    this.treeNodePostProcessor = (node) => {
      node.key = this.getOptionValue(node);
      node.title = this.getOptionLabel(node);
    };
  }
  /**
   * Map list of nodes to list of option
   */
  toOptions(nodes) {
    return nodes.map((node) => node.origin);
  }
  getAncestorNodeList(node) {
    if (!node) {
      return [];
    }
    if (node.parentNode) {
      return [...this.getAncestorNodeList(node.parentNode), node];
    }
    return [node];
  }
  /**
   * Render by nzCheckedKeys
   * When keys equals null, just render with checkStrictly
   *
   * @param paths
   * @param checkStrictly
   */
  conductCheckPaths(paths, checkStrictly) {
    this.checkedNodeList = [];
    this.halfCheckedNodeList = [];
    this.missingNodeList = [];
    const existsPathList = [];
    const calc = (nodes) => {
      nodes.forEach((node) => {
        if (paths === null) {
          node.isChecked = !!node.origin.checked;
        } else {
          const nodePath = this.getAncestorNodeList(node).map((n) => this.getOptionValue(n));
          if (paths.some((keys) => arraysEqual(nodePath, keys))) {
            node.isChecked = true;
            node.isHalfChecked = false;
            existsPathList.push(nodePath);
          } else {
            node.isChecked = false;
            node.isHalfChecked = false;
          }
        }
        if (node.children.length > 0) {
          calc(node.children);
        }
      });
    };
    calc(this.rootNodes);
    this.refreshCheckState(checkStrictly);
    this.missingNodeList = this.getMissingNodeList(paths, existsPathList);
  }
  conductSelectedPaths(paths, isMulti) {
    this.selectedNodeList.forEach((node) => node.isSelected = false);
    this.selectedNodeList = [];
    this.missingNodeList = [];
    const existsPathList = [];
    const calc = (nodes) => nodes.every((node) => {
      const nodePath = this.getAncestorNodeList(node).map((n) => this.getOptionValue(n));
      if (paths.some((keys) => arraysEqual(nodePath, keys))) {
        node.isSelected = true;
        this.setSelectedNodeList(node);
        existsPathList.push(nodePath);
        if (!isMulti) {
          return false;
        }
      } else {
        node.isSelected = false;
      }
      if (node.children.length > 0) {
        return calc(node.children);
      }
      return true;
    });
    calc(this.rootNodes);
    this.missingNodeList = this.getMissingNodeList(paths, existsPathList);
  }
  getMissingNodeList(paths, existsPathList) {
    if (!paths) {
      return [];
    }
    return paths.filter((path) => !existsPathList.some((keys) => arraysEqual(path, keys))).map((path) => this.createMissingNode(path)).filter(isNotNil);
  }
  createMissingNode(path) {
    if (!path?.length) {
      return null;
    }
    const createOption = (key) => {
      return {
        [this.fieldNames.value || "value"]: key,
        [this.fieldNames.label || "label"]: key
      };
    };
    let node = new NzTreeNode(createOption(path[0]), null, this);
    for (let i = 1; i < path.length; i++) {
      const childNode = new NzTreeNode(createOption(path[i]));
      node.addChildren([childNode]);
      node = childNode;
    }
    return node;
  }
  static {
    this.ɵfac = function NzCascaderTreeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzCascaderTreeService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NzCascaderTreeService,
      factory: _NzCascaderTreeService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCascaderTreeService, [{
    type: Injectable
  }], () => [], null);
})();
var NzCascaderService = class _NzCascaderService {
  constructor() {
    this.activatedNodes = [];
    this.columns = [];
    this.inSearchingMode = false;
    this.values = [];
    this.$loading = new BehaviorSubject(false);
    this.$redraw = new Subject();
    this.$nodeSelected = new Subject();
    this.$quitSearching = new Subject();
    this.columnSnapshot = [[]];
    this.searchOptionPathMap = /* @__PURE__ */ new Map();
  }
  /** Return cascader options in the first layer. */
  get nzOptions() {
    return this.cascaderComponent.treeService.toOptions(this.columns[0] || []);
  }
  ngOnDestroy() {
    this.$redraw.complete();
    this.$quitSearching.complete();
    this.$nodeSelected.complete();
    this.$loading.complete();
    this.searchOptionPathMap.clear();
  }
  /**
   * Bind cascader component so this service could use inputs.
   */
  withComponent(cascaderComponent) {
    this.cascaderComponent = cascaderComponent;
  }
  /**
   * Try to set an option as activated.
   *
   * @param node Cascader option node
   * @param columnIndex Of which column this option is in
   * @param performSelect Select
   * @param multiple Multiple mode
   * @param loadingChildren Try to load children asynchronously.
   */
  setNodeActivated(node, columnIndex, performSelect = false, multiple = false, loadingChildren = true) {
    if (node.isDisabled) {
      return;
    }
    this.activatedNodes[columnIndex] = node;
    this.trackAncestorActivatedNodes(columnIndex);
    this.dropBehindActivatedNodes(columnIndex);
    if (isParentNode(node)) {
      this.setColumnData(node.children, columnIndex + 1);
    } else if (!node.isLeaf && loadingChildren) {
      this.loadChildren(node, columnIndex);
    } else if (node.isLeaf) {
      this.dropBehindColumns(columnIndex);
    }
    if (performSelect && node.isSelectable) {
      this.setNodeSelected(node, columnIndex, multiple);
    }
    this.$redraw.next();
  }
  /**
   * Set an option as selected.
   * @param node
   * @param index
   * @param multiple
   */
  setNodeSelected(node, index, multiple = false) {
    const changeOn = this.cascaderComponent.nzChangeOn;
    const shouldPerformSelection = (o, i) => typeof changeOn === "function" ? changeOn(o, i) : false;
    if (multiple || node.isLeaf || this.cascaderComponent.nzChangeOnSelect || shouldPerformSelection(node.origin, index)) {
      node.isSelected = true;
      this.cascaderComponent.treeService.setSelectedNodeList(node, multiple);
      this.cascaderComponent.updateSelectedNodes();
      this.$redraw.next();
      this.$nodeSelected.next(node);
    }
  }
  setNodeDeactivatedSinceColumn(column) {
    this.dropBehindActivatedNodes(column - 1);
    this.dropBehindColumns(column);
    this.$redraw.next();
  }
  /**
   * Set a searching option as selected, finishing up things.
   *
   * @param node
   * @param multiple
   */
  setSearchOptionSelected(node, multiple = false) {
    this.setNodeSelected(node, node.level, multiple);
    setTimeout(() => {
      this.$quitSearching.next();
      this.$redraw.next();
    }, 200);
  }
  /**
   * Reset node's `title` and `disabled` status and clear `searchOptionPathMap`.
   */
  clearSearchOptions() {
    for (let node of this.searchOptionPathMap.keys()) {
      node.isDisabled = node.origin.disabled || false;
      node.title = this.getOptionLabel(node.origin);
    }
    this.searchOptionPathMap.clear();
  }
  /**
   * Filter cascader options to reset `columns`.
   *
   * @param searchValue The string user wants to search.
   */
  prepareSearchOptions(searchValue) {
    const results = [];
    const path = [];
    const defaultFilter = (i, p) => p.some((o) => {
      const label = this.getOptionLabel(o);
      return !!label && label.indexOf(i) !== -1;
    });
    const showSearch = this.cascaderComponent.nzShowSearch;
    const filter = isShowSearchObject(showSearch) && showSearch.filter ? showSearch.filter : defaultFilter;
    const sorter = isShowSearchObject(showSearch) && showSearch.sorter ? showSearch.sorter : null;
    const loopChild = (node, forceDisabled = false) => {
      path.push(node);
      const cPath = this.cascaderComponent.treeService.toOptions(path);
      if (filter(searchValue, cPath)) {
        this.searchOptionPathMap.set(node, cPath);
        node.isDisabled = forceDisabled || node.isDisabled;
        node.title = cPath.map((p) => this.getOptionLabel(p)).join(" / ");
        results.push(node);
      }
      path.pop();
    };
    const loopParent = (node, forceDisabled = false) => {
      const disabled = forceDisabled || node.isDisabled;
      path.push(node);
      node.children.forEach((sNode) => {
        if (!sNode.isLeaf) {
          loopParent(sNode, disabled);
        }
        if (sNode.isLeaf || !sNode.children || !sNode.children.length) {
          loopChild(sNode, disabled);
        }
      });
      path.pop();
    };
    if (!this.columnSnapshot.length) {
      this.columns = [[]];
      return;
    }
    this.columnSnapshot[0].forEach((o) => isChildNode(o) ? loopChild(o) : loopParent(o));
    if (sorter) {
      results.sort((a, b) => sorter(this.searchOptionPathMap.get(a), this.searchOptionPathMap.get(b), searchValue));
    }
    this.columns = [results];
    this.$redraw.next();
  }
  /**
   * Set searching mode by UI. It deals with things not directly related to UI.
   *
   * @param toSearching If this cascader is entering searching mode
   */
  setSearchingMode(toSearching) {
    this.inSearchingMode = toSearching;
    if (toSearching) {
      this.clearSearchOptions();
      this.columnSnapshot = [...this.columns];
      this.activatedNodes = [];
    } else {
      this.clearSearchOptions();
      this.activatedNodes = [];
      setTimeout(() => {
        this.columns = [...this.columnSnapshot];
        if (this.cascaderComponent.selectedNodes.length) {
          const activatedNode = this.cascaderComponent.selectedNodes[0];
          const columnIndex = activatedNode.level;
          this.activatedNodes[columnIndex] = activatedNode;
          this.trackAncestorActivatedNodes(columnIndex);
          this.trackAncestorColumnData(columnIndex);
        }
        this.$redraw.next();
      });
    }
    this.$redraw.next();
  }
  /**
   * Clear selected options.
   */
  clear() {
    this.values = [];
    this.activatedNodes = [];
    this.dropBehindColumns(0);
    this.$redraw.next();
    this.$nodeSelected.next(null);
  }
  getOptionLabel(o) {
    return o[this.cascaderComponent.nzLabelProperty || "label"];
  }
  getOptionValue(o) {
    return o[this.cascaderComponent.nzValueProperty || "value"];
  }
  /**
   * Try to insert options into a column.
   *
   * @param nodes Options to insert
   * @param columnIndex Position
   */
  setColumnData(nodes, columnIndex) {
    this.columns[columnIndex] = nodes;
    this.dropBehindColumns(columnIndex);
  }
  /**
   * Set all columns data according to activate option's path
   */
  trackAncestorColumnData(startIndex) {
    const node = this.activatedNodes[startIndex];
    if (!node) {
      return;
    }
    this.dropBehindColumns(startIndex);
    for (let i = 0; i < startIndex; i++) {
      this.columns[i + 1] = this.activatedNodes[i].children;
    }
  }
  /**
   * Set all ancestor options as activated.
   */
  trackAncestorActivatedNodes(startIndex) {
    for (let i = startIndex - 1; i >= 0; i--) {
      if (!this.activatedNodes[i]) {
        this.activatedNodes[i] = this.activatedNodes[i + 1].parentNode;
      }
    }
  }
  dropBehindActivatedNodes(lastReserveIndex) {
    this.activatedNodes = this.activatedNodes.splice(0, lastReserveIndex + 1);
  }
  dropBehindColumns(lastReserveIndex) {
    if (lastReserveIndex < this.columns.length - 1) {
      this.columns = this.columns.slice(0, lastReserveIndex + 1);
    }
  }
  /**
   * Load children of an option asynchronously.
   */
  loadChildren(node, columnIndex, onLoaded) {
    const isRoot = columnIndex < 0 || !isNotNil(node);
    const option = node?.origin || {};
    const loadFn = this.cascaderComponent.nzLoadData;
    if (loadFn) {
      this.$loading.next(isRoot);
      if (node) {
        node.isLoading = true;
      }
      from(loadFn(option, columnIndex)).pipe(finalize(() => {
        node && (node.isLoading = false);
        this.$loading.next(false);
        this.$redraw.next();
      })).subscribe({
        next: () => {
          if (option.children) {
            if (!isRoot) {
              const nodes = option.children.map((o) => new NzTreeNode(o, node));
              node.children = nodes;
              this.setColumnData(nodes, columnIndex + 1);
            } else {
              const nodes = this.cascaderComponent.coerceTreeNodes(option.children);
              this.cascaderComponent.treeService.initTree(nodes);
              this.setColumnData(nodes, 0);
            }
            onLoaded?.(option.children);
          }
        },
        error: () => {
          node && (node.isLeaf = true);
        }
      });
    }
  }
  isLoaded(index) {
    return !!this.columns[index] && this.columns[index].length > 0;
  }
  static {
    this.ɵfac = function NzCascaderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzCascaderService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NzCascaderService,
      factory: _NzCascaderService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCascaderService, [{
    type: Injectable
  }], null, null);
})();
var NZ_CONFIG_MODULE_NAME = "cascader";
var defaultDisplayRender = (labels) => labels.join(" / ");
var NzCascaderComponent = (() => {
  let _classSuper = NzTreeBase;
  let _nzSize_decorators;
  let _nzSize_initializers = [];
  let _nzSize_extraInitializers = [];
  let _nzBackdrop_decorators;
  let _nzBackdrop_initializers = [];
  let _nzBackdrop_extraInitializers = [];
  return class NzCascaderComponent2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _nzSize_decorators = [WithConfig()];
      _nzBackdrop_decorators = [WithConfig()];
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
      __esDecorate(null, null, _nzBackdrop_decorators, {
        kind: "field",
        name: "nzBackdrop",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzBackdrop" in obj,
          get: (obj) => obj.nzBackdrop,
          set: (obj, value) => {
            obj.nzBackdrop = value;
          }
        },
        metadata: _metadata
      }, _nzBackdrop_initializers, _nzBackdrop_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    set input(inputComponent) {
      this.input$.next(inputComponent?.inputElement);
    }
    get input() {
      return this.input$.getValue();
    }
    get nzOptions() {
      return this.cascaderService.nzOptions;
    }
    get treeService() {
      return this.nzTreeService;
    }
    set nzOptions(options) {
      const nodes = this.coerceTreeNodes(options || []);
      this.treeService.initTree(nodes);
      this.cascaderService.columns = [nodes];
      this.updateSelectedNodes(true);
      if (this.inSearchingMode) {
        this.cascaderService.setSearchingMode(this.inSearchingMode);
        this.cascaderService.prepareSearchOptions(this.inputValue);
      }
    }
    get overlayOrigin() {
      return this.elementRef;
    }
    get inSearchingMode() {
      return this.cascaderService.inSearchingMode;
    }
    set inputValue(inputValue) {
      this.inputString = inputValue;
      this.toggleSearchingMode(!!inputValue);
    }
    get inputValue() {
      return this.inputString;
    }
    get hasInput() {
      return !!this.inputValue;
    }
    get hasValue() {
      return this.cascaderService.values && this.cascaderService.values.length > 0;
    }
    get showLabelRender() {
      return !this.hasInput && !this.nzMultiple && !!this.selectedNodes.length;
    }
    get showPlaceholder() {
      return !(this.hasInput || this.hasValue);
    }
    get clearIconVisible() {
      return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
    }
    get isLabelRenderTemplate() {
      return !!this.nzLabelRender;
    }
    constructor(treeService, ngZone, cdr, i18nService, destroy$, elementRef, renderer, directionality) {
      super(treeService);
      this.ngZone = ngZone;
      this.cdr = cdr;
      this.i18nService = i18nService;
      this.destroy$ = destroy$;
      this.elementRef = elementRef;
      this.renderer = renderer;
      this.directionality = directionality;
      this._nzModuleName = NZ_CONFIG_MODULE_NAME;
      this.input$ = new BehaviorSubject(void 0);
      this.nzOptionRender = null;
      this.nzShowInput = true;
      this.nzShowArrow = true;
      this.nzAllowClear = true;
      this.nzAutoFocus = false;
      this.nzChangeOnSelect = false;
      this.nzDisabled = false;
      this.nzExpandTrigger = "click";
      this.nzValueProperty = "value";
      this.nzLabelProperty = "label";
      this.nzLabelRender = null;
      this.nzSize = __runInitializers(this, _nzSize_initializers, "default");
      this.nzBackdrop = (__runInitializers(this, _nzSize_extraInitializers), __runInitializers(this, _nzBackdrop_initializers, false));
      this.nzShowSearch = (__runInitializers(this, _nzBackdrop_extraInitializers), false);
      this.nzPlaceHolder = "";
      this.nzMenuStyle = null;
      this.nzMouseLeaveDelay = 150;
      this.nzMouseEnterDelay = 150;
      this.nzStatus = "";
      this.nzMultiple = false;
      this.nzMaxTagCount = Infinity;
      this.nzPlacement = "bottomLeft";
      this.nzTriggerAction = ["click"];
      this.nzDisplayWith = (nodes) => {
        return defaultDisplayRender(nodes.map((n) => this.cascaderService.getOptionLabel(n)));
      };
      this.nzSuffixIcon = "down";
      this.nzExpandIcon = "";
      this.nzVisibleChange = new EventEmitter();
      this.nzSelectionChange = new EventEmitter();
      this.nzRemoved = new EventEmitter();
      this.nzClear = new EventEmitter();
      this.prefixCls = "ant-select";
      this.statusCls = {};
      this.status = "";
      this.hasFeedback = false;
      this.shouldShowEmpty = false;
      this.menuVisible = false;
      this.isLoading = false;
      this.labelRenderContext = {};
      this.onChange = Function.prototype;
      this.onTouched = Function.prototype;
      this.positions = [...DEFAULT_CASCADER_POSITIONS];
      this.dropdownHeightStyle = "";
      this.dropdownPosition = "bottomLeft";
      this.isFocused = false;
      this.dir = "ltr";
      this.isComposing = false;
      this.finalSize = computed(() => {
        if (this.compactSize) {
          return this.compactSize();
        }
        return this.size();
      });
      this.size = signal(this.nzSize);
      this.compactSize = inject(NZ_SPACE_COMPACT_SIZE, {
        optional: true
      });
      this.inputString = "";
      this.isOpening = false;
      this.isNzDisableFirstChange = true;
      this.selectedNodes = [];
      this.noAnimation = inject(NzNoAnimationDirective, {
        host: true,
        optional: true
      });
      this.nzFormStatusService = inject(NzFormStatusService, {
        optional: true
      });
      this.nzFormNoStatusService = inject(NzFormNoStatusService, {
        optional: true
      });
      this.nzConfigService = inject(NzConfigService);
      this.cascaderService = inject(NzCascaderService);
      this.el = elementRef.nativeElement;
      this.cascaderService.withComponent(this);
      this.renderer.addClass(this.elementRef.nativeElement, "ant-select");
      this.renderer.addClass(this.elementRef.nativeElement, "ant-cascader");
    }
    ngOnInit() {
      this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => pre.status === cur.status && pre.hasFeedback === cur.hasFeedback), withLatestFrom(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : of(false)), map(([{
        status,
        hasFeedback
      }, noStatus]) => ({
        status: noStatus ? "" : status,
        hasFeedback
      })), takeUntil(this.destroy$)).subscribe(({
        status,
        hasFeedback
      }) => {
        this.setStatusStyles(status, hasFeedback);
      });
      const srv = this.cascaderService;
      srv.$redraw.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.checkChildren();
        this.setDisplayLabel();
        this.cdr.detectChanges();
        this.reposition();
        this.setDropdownStyles();
      });
      srv.$loading.pipe(takeUntil(this.destroy$)).subscribe((loading) => {
        this.isLoading = loading;
      });
      srv.$nodeSelected.pipe(takeUntil(this.destroy$)).subscribe((node) => {
        if (!node) {
          this.emitValue([]);
          this.nzSelectionChange.emit([]);
        } else {
          const shouldClose = (
            // keep menu opened if multiple mode
            !this.nzMultiple && (node.isLeaf || this.nzChangeOnSelect && this.nzExpandTrigger === "hover")
          );
          if (shouldClose) {
            this.delaySetMenuVisible(false);
          }
          this.nzSelectionChange.emit(this.getAncestorOptionList(node));
          this.cdr.markForCheck();
        }
      });
      srv.$quitSearching.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.inputValue = "";
        this.dropdownWidthStyle = "";
      });
      this.i18nService.localeChange.pipe(startWith(), takeUntil(this.destroy$)).subscribe(() => {
        this.setLocale();
      });
      this.size.set(this.nzSize);
      this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.size.set(this.nzSize);
        this.cdr.markForCheck();
      });
      this.dir = this.directionality.value;
      this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.dir = this.directionality.value;
        srv.$redraw.next();
      });
      this.setupSelectionChangeListener();
      this.setupChangeListener();
      this.setupKeydownListener();
      this.setupFocusListener();
    }
    ngOnChanges(changes) {
      const {
        nzStatus,
        nzSize,
        nzPlacement
      } = changes;
      if (nzStatus) {
        this.setStatusStyles(this.nzStatus, this.hasFeedback);
      }
      if (nzSize) {
        this.size.set(nzSize.currentValue);
      }
      if (nzPlacement) {
        const {
          currentValue
        } = nzPlacement;
        this.dropdownPosition = currentValue;
        const listOfPlacement = ["bottomLeft", "topLeft", "bottomRight", "topRight"];
        if (currentValue && listOfPlacement.includes(currentValue)) {
          this.positions = [POSITION_MAP[currentValue]];
        } else {
          this.positions = listOfPlacement.map((e) => POSITION_MAP[e]);
        }
      }
    }
    ngOnDestroy() {
      this.clearDelayMenuTimer();
      this.clearDelaySelectTimer();
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    writeValue(value) {
      if (isNotNil(value)) {
        if (this.nzMultiple) {
          this.cascaderService.values = toArray(value);
        } else {
          this.cascaderService.values = [toArray(value)];
        }
        this.clearSelectedNodes();
        this.updateSelectedNodes(true, false);
      } else {
        this.cascaderService.values = [];
        this.clearSelectedNodes();
        this.selectedNodes = [];
        this.cascaderService.$redraw.next();
      }
    }
    setupSelectionChangeListener() {
      merge(this.nzSelectionChange, this.nzRemoved, this.nzClear).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.updateSelectedNodes();
        this.emitValue(this.cascaderService.values);
        this.cascaderService.$redraw.next();
      });
    }
    delaySetMenuVisible(visible, delay = 100, setOpening = false) {
      this.clearDelayMenuTimer();
      if (delay) {
        if (visible && setOpening) {
          this.isOpening = true;
        }
        this.delayMenuTimer = setTimeout(() => {
          this.setMenuVisible(visible);
          this.cdr.detectChanges();
          this.clearDelayMenuTimer();
          if (visible) {
            setTimeout(() => {
              this.isOpening = false;
            }, 100);
          }
        }, delay);
      } else {
        this.setMenuVisible(visible);
      }
    }
    setMenuVisible(visible) {
      if (this.nzDisabled || this.menuVisible === visible) {
        return;
      }
      if (visible) {
        this.cascaderService.$redraw.next();
        this.updateSelectedNodes(!!this.nzLoadData);
        this.scrollToActivatedOptions();
      } else {
        this.inputValue = "";
      }
      this.menuVisible = visible;
      this.nzVisibleChange.emit(visible);
      this.cdr.detectChanges();
    }
    clearDelayMenuTimer() {
      if (this.delayMenuTimer) {
        clearTimeout(this.delayMenuTimer);
        this.delayMenuTimer = void 0;
      }
    }
    clearSelection(event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      this.clearSelectedNodes();
      this.labelRenderText = "";
      this.labelRenderContext = {};
      this.inputValue = "";
      this.setMenuVisible(false);
      this.cascaderService.clear();
      this.nzClear.emit();
    }
    clearSelectedNodes() {
      this.selectedNodes.forEach((node) => {
        this.removeSelected(node, false);
      });
    }
    emitValue(values) {
      if (this.nzMultiple) {
        this.onChange(values);
      } else {
        this.onChange(values?.length ? values[0] : []);
      }
    }
    /**
     * @internal
     */
    getSubmitValue() {
      if (this.nzMultiple) {
        return this.cascaderService.values;
      } else {
        return this.cascaderService.values?.length ? this.cascaderService.values[0] : [];
      }
    }
    focus() {
      if (!this.isFocused) {
        (this.input?.nativeElement || this.el).focus();
        this.isFocused = true;
      }
    }
    blur() {
      if (this.isFocused) {
        (this.input?.nativeElement || this.el).blur();
        this.isFocused = false;
      }
    }
    handleInputBlur() {
      this.menuVisible ? this.focus() : this.blur();
    }
    handleInputFocus() {
      this.focus();
    }
    isComposingChange(isComposing) {
      this.isComposing = isComposing;
    }
    onTriggerClick() {
      if (this.nzDisabled) {
        return;
      }
      if (this.nzShowSearch) {
        this.focus();
      }
      if (this.isActionTrigger("click")) {
        this.delaySetMenuVisible(!this.menuVisible, 100);
      }
      this.onTouched();
    }
    onTriggerMouseEnter() {
      if (this.nzDisabled || !this.isActionTrigger("hover")) {
        return;
      }
      this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
    }
    onTriggerMouseLeave(event) {
      if (this.nzDisabled || !this.menuVisible || this.isOpening || !this.isActionTrigger("hover")) {
        event.preventDefault();
        return;
      }
      const mouseTarget = event.relatedTarget;
      const hostEl = this.el;
      const menuEl = this.menu && this.menu.nativeElement;
      if (hostEl.contains(mouseTarget) || menuEl && menuEl.contains(mouseTarget)) {
        return;
      }
      this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
    }
    onOptionMouseEnter(node, columnIndex, event) {
      event.preventDefault();
      if (this.nzExpandTrigger === "hover") {
        if (!node.isLeaf) {
          this.delaySetOptionActivated(node, columnIndex, false);
        } else {
          this.cascaderService.setNodeDeactivatedSinceColumn(columnIndex);
        }
      }
    }
    onOptionMouseLeave(node, _columnIndex, event) {
      event.preventDefault();
      if (this.nzExpandTrigger === "hover" && !node.isLeaf) {
        this.clearDelaySelectTimer();
      }
    }
    /**
     * Get ancestor options of a node
     */
    getAncestorOptionList(node) {
      const ancestors = this.treeService.getAncestorNodeList(node);
      return this.treeService.toOptions(ancestors);
    }
    updateSelectedNodes(init = false, updateValue = true) {
      const value = this.cascaderService.values;
      const multiple = this.nzMultiple;
      const updateNodesAndValue = (shouldUpdateValue) => {
        this.selectedNodes = [...this.treeService.missingNodeList, ...this.nzMultiple ? this.getCheckedNodeList() : this.getSelectedNodeList()].sort((a, b) => {
          const indexA = value.indexOf(a.key);
          const indexB = value.indexOf(b.key);
          if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
          }
          if (indexA !== -1) {
            return -1;
          }
          if (indexB !== -1) {
            return 1;
          }
          return 0;
        });
        if (shouldUpdateValue) {
          this.cascaderService.values = this.selectedNodes.map((node) => this.getAncestorOptionList(node).map((o) => this.cascaderService.getOptionValue(o)));
        }
        this.cascaderService.$redraw.next();
      };
      if (init) {
        const defaultValue = value[0];
        const lastColumnIndex = defaultValue?.length ? defaultValue.length - 1 : 0;
        this.treeService.fieldNames = {
          value: this.nzValueProperty,
          label: this.nzLabelProperty
        };
        this.treeService.isMultiple = multiple;
        this.treeService.isCheckStrictly = false;
        const checkNodeStates = () => {
          if (multiple) {
            this.treeService.conductCheckPaths(value, this.treeService.isCheckStrictly);
          } else {
            this.treeService.conductSelectedPaths(value, multiple);
          }
        };
        const initColumnWithIndex = (columnIndex = 0) => {
          const activatedOptionSetter = () => {
            const currentValue = defaultValue?.[columnIndex];
            if (!isNotNil(currentValue)) {
              this.cascaderService.$redraw.next();
              return;
            }
            const node = this.cascaderService.columns[columnIndex].find((n) => this.cascaderService.getOptionValue(n.origin) === currentValue) || null;
            if (isNotNil(node)) {
              this.cascaderService.setNodeActivated(node, columnIndex, false, multiple, false);
              if (columnIndex < lastColumnIndex) {
                initColumnWithIndex(columnIndex + 1);
              }
            }
            checkNodeStates();
            updateNodesAndValue(false);
          };
          if (this.cascaderService.isLoaded(columnIndex) || !this.nzLoadData) {
            activatedOptionSetter();
          } else {
            const node = this.cascaderService.activatedNodes[columnIndex - 1];
            this.cascaderService.loadChildren(node, columnIndex - 1, activatedOptionSetter);
          }
        };
        if (this.nzLoadData) {
          initColumnWithIndex();
        } else {
          const nodes = this.coerceTreeNodes(this.nzOptions || []);
          this.treeService.initTree(nodes);
          this.cascaderService.setColumnData(nodes, 0);
          initColumnWithIndex();
        }
      }
      updateNodesAndValue(updateValue);
    }
    onOptionClick(node, columnIndex, event) {
      if (event) {
        event.preventDefault();
      }
      if (node && node.isDisabled) {
        return;
      }
      this.el.focus();
      if (this.nzMultiple && node.isLeaf) {
        this.onOptionCheck(node, columnIndex, true);
      } else {
        this.inSearchingMode ? this.cascaderService.setSearchOptionSelected(node, this.nzMultiple) : this.cascaderService.setNodeActivated(node, columnIndex, !this.nzMultiple);
      }
    }
    onOptionCheck(node, columnIndex, performActivate = false) {
      if (!this.nzMultiple || node.isDisabled || node.isDisableCheckbox) {
        return;
      }
      node.isChecked = !node.isChecked;
      node.isHalfChecked = false;
      this.treeService.setCheckedNodeList(node);
      this.treeService.conduct(node, this.treeService.isCheckStrictly);
      if (this.inSearchingMode) {
        this.cascaderService.setSearchOptionSelected(node, true);
      } else if (performActivate) {
        this.cascaderService.setNodeActivated(node, columnIndex, true, true);
      } else {
        this.cascaderService.setNodeSelected(node, columnIndex, true);
      }
    }
    removeSelected(node, emitEvent = true) {
      node.isSelected = false;
      node.isChecked = false;
      if (this.nzMultiple) {
        this.treeService.conduct(node, this.treeService.isCheckStrictly);
      }
      this.treeService.setSelectedNodeList(node, this.nzMultiple);
      if (emitEvent) {
        this.nzRemoved.emit(node.origin);
      }
    }
    onClickOutside(event) {
      const target = _getEventTarget(event);
      if (!this.el.contains(target)) {
        this.closeMenu();
      }
    }
    onPositionChange(position) {
      const placement = getPlacementName(position);
      this.dropdownPosition = placement;
    }
    isActionTrigger(action) {
      return typeof this.nzTriggerAction === "string" ? this.nzTriggerAction === action : this.nzTriggerAction.indexOf(action) !== -1;
    }
    onEnter() {
      const columnIndex = Math.max(this.cascaderService.activatedNodes.length - 1, 0);
      const node = this.cascaderService.activatedNodes[columnIndex];
      if (node && !node.isDisabled) {
        this.inSearchingMode ? this.cascaderService.setSearchOptionSelected(node) : this.cascaderService.setNodeActivated(node, columnIndex, true);
      }
    }
    moveUpOrDown(isUp) {
      const columnIndex = Math.max(this.cascaderService.activatedNodes.length - 1, 0);
      const activatedNode = this.cascaderService.activatedNodes[columnIndex];
      const options = this.cascaderService.columns[columnIndex] || [];
      const length = options.length;
      let nextIndex = -1;
      if (!activatedNode) {
        nextIndex = isUp ? length : -1;
      } else {
        nextIndex = options.indexOf(activatedNode);
      }
      while (true) {
        nextIndex = isUp ? nextIndex - 1 : nextIndex + 1;
        if (nextIndex < 0 || nextIndex >= length) {
          break;
        }
        const nextOption = options[nextIndex];
        if (!nextOption || nextOption.isDisabled) {
          continue;
        }
        this.cascaderService.setNodeActivated(nextOption, columnIndex);
        break;
      }
    }
    moveLeft() {
      const options = this.cascaderService.activatedNodes;
      if (options.length) {
        options.pop();
        this.cascaderService.setNodeDeactivatedSinceColumn(options.length);
      }
    }
    moveRight() {
      const length = this.cascaderService.activatedNodes.length;
      const options = this.cascaderService.columns[length];
      if (options && options.length) {
        const nextOpt = options.find((o) => !o.isDisabled);
        if (nextOpt) {
          this.cascaderService.setNodeActivated(nextOpt, length);
        }
      }
    }
    clearDelaySelectTimer() {
      if (this.delaySelectTimer) {
        clearTimeout(this.delaySelectTimer);
        this.delaySelectTimer = void 0;
      }
    }
    delaySetOptionActivated(node, columnIndex, performSelect) {
      this.clearDelaySelectTimer();
      this.delaySelectTimer = setTimeout(() => {
        this.cascaderService.setNodeActivated(node, columnIndex, performSelect, this.nzMultiple);
        this.delaySelectTimer = void 0;
      }, 150);
    }
    toggleSearchingMode(toSearching) {
      if (this.inSearchingMode !== toSearching) {
        this.cascaderService.setSearchingMode(toSearching);
      }
      if (this.inSearchingMode) {
        this.cascaderService.prepareSearchOptions(this.inputValue);
      }
    }
    isOptionActivated(node, index) {
      return this.cascaderService.activatedNodes[index] === node;
    }
    setDisabledState(isDisabled) {
      this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
      this.isNzDisableFirstChange = false;
      if (this.nzDisabled) {
        this.closeMenu();
      }
    }
    closeMenu() {
      this.blur();
      this.clearDelayMenuTimer();
      this.setMenuVisible(false);
      if (!this.hasValue && this.cascaderService.columns.length) {
        this.cascaderService.dropBehindColumns(0);
      }
    }
    /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the boundary of browser's window.
     */
    reposition() {
      if (this.overlay && this.overlay.overlayRef && this.menuVisible) {
        Promise.resolve().then(() => {
          this.overlay.overlayRef.updatePosition();
          this.cdr.markForCheck();
        });
      }
    }
    /**
     * When a cascader options is changed, a child needs to know that it should re-render.
     */
    checkChildren() {
      if (this.cascaderItems) {
        this.cascaderItems.forEach((item) => item.markForCheck());
      }
    }
    setDisplayLabel() {
      if (this.nzMultiple) {
        return;
      }
      const node = this.selectedNodes.length ? this.selectedNodes[0] : null;
      const selectedOptions = this.getAncestorOptionList(node);
      const labels = selectedOptions.map((o) => this.cascaderService.getOptionLabel(o));
      if (this.isLabelRenderTemplate) {
        this.labelRenderContext = {
          labels,
          selectedOptions
        };
      }
      this.labelRenderText = defaultDisplayRender.call(this, labels);
    }
    setDropdownStyles() {
      const firstColumn = this.cascaderService.columns[0];
      this.shouldShowEmpty = this.inSearchingMode && (!firstColumn || !firstColumn.length) || // Should show empty when there's no searching result
      !(this.nzOptions && this.nzOptions.length) && !this.nzLoadData;
      this.dropdownHeightStyle = this.shouldShowEmpty ? "auto" : "";
      if (this.input) {
        this.dropdownWidthStyle = this.inSearchingMode || this.shouldShowEmpty ? `${this.selectContainer.nativeElement.offsetWidth}px` : "";
      }
    }
    setStatusStyles(status, hasFeedback) {
      this.status = status;
      this.hasFeedback = hasFeedback;
      this.cdr.markForCheck();
      this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
      Object.keys(this.statusCls).forEach((status2) => {
        if (this.statusCls[status2]) {
          this.renderer.addClass(this.elementRef.nativeElement, status2);
        } else {
          this.renderer.removeClass(this.elementRef.nativeElement, status2);
        }
      });
    }
    setLocale() {
      this.locale = this.i18nService.getLocaleData("global");
      this.cdr.markForCheck();
    }
    scrollToActivatedOptions() {
      this.ngZone.runOutsideAngular(() => {
        Promise.resolve().then(() => {
          this.cascaderItems.toArray().filter((e) => e.activated).forEach((e) => {
            e.nativeElement.scrollIntoView({
              block: "start",
              inline: "nearest"
            });
          });
        });
      });
    }
    setupChangeListener() {
      this.input$.pipe(switchMap((input) => fromEventOutsideAngular(input?.nativeElement, "change")), takeUntil(this.destroy$)).subscribe((event) => event.stopPropagation());
    }
    setupFocusListener() {
      this.input$.pipe(switchMap((input) => fromEventOutsideAngular(input?.nativeElement, "focus")), takeUntil(this.destroy$)).subscribe(() => this.handleInputFocus());
      this.input$.pipe(switchMap((input) => fromEventOutsideAngular(input?.nativeElement, "blur")), takeUntil(this.destroy$)).subscribe(() => this.handleInputBlur());
    }
    setupKeydownListener() {
      fromEventOutsideAngular(this.el, "keydown").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        const keyCode = event.keyCode;
        if (keyCode !== DOWN_ARROW && keyCode !== UP_ARROW && keyCode !== LEFT_ARROW && keyCode !== RIGHT_ARROW && keyCode !== ENTER && keyCode !== BACKSPACE && keyCode !== ESCAPE) {
          return;
        }
        if (!this.menuVisible && keyCode !== BACKSPACE && keyCode !== ESCAPE) {
          return this.ngZone.run(() => this.setMenuVisible(true));
        }
        if (this.inSearchingMode && (keyCode === BACKSPACE || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW)) {
          return;
        }
        if (!this.menuVisible) {
          return;
        }
        event.preventDefault();
        this.ngZone.run(() => {
          if (keyCode === DOWN_ARROW) {
            this.moveUpOrDown(false);
          } else if (keyCode === UP_ARROW) {
            this.moveUpOrDown(true);
          } else if (keyCode === LEFT_ARROW) {
            this.moveLeft();
          } else if (keyCode === RIGHT_ARROW) {
            this.moveRight();
          } else if (keyCode === ENTER) {
            this.onEnter();
          }
          this.cdr.markForCheck();
        });
      });
    }
    static {
      this.ɵfac = function NzCascaderComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NzCascaderComponent2)(ɵɵdirectiveInject(NzCascaderTreeService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(NzDestroyService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Directionality));
      };
    }
    static {
      this.ɵcmp = ɵɵdefineComponent({
        type: NzCascaderComponent2,
        selectors: [["nz-cascader"], ["", "nz-cascader", ""]],
        viewQuery: function NzCascaderComponent_Query(rf, ctx) {
          if (rf & 1) {
            ɵɵviewQuery(_c2, 5);
            ɵɵviewQuery(NzSelectSearchComponent, 5);
            ɵɵviewQuery(_c3, 5);
            ɵɵviewQuery(CdkConnectedOverlay, 5);
            ɵɵviewQuery(NzCascaderOptionComponent, 5);
          }
          if (rf & 2) {
            let _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.selectContainer = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menu = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlay = _t.first);
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cascaderItems = _t);
          }
        },
        hostVars: 25,
        hostBindings: function NzCascaderComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            ɵɵlistener("click", function NzCascaderComponent_click_HostBindingHandler() {
              return ctx.onTriggerClick();
            })("mouseenter", function NzCascaderComponent_mouseenter_HostBindingHandler() {
              return ctx.onTriggerMouseEnter();
            })("mouseleave", function NzCascaderComponent_mouseleave_HostBindingHandler($event) {
              return ctx.onTriggerMouseLeave($event);
            });
          }
          if (rf & 2) {
            ɵɵattribute("tabIndex", "0");
            ɵɵclassProp("ant-select-in-form-item", !!ctx.nzFormStatusService)("ant-select-lg", ctx.finalSize() === "large")("ant-select-sm", ctx.finalSize() === "small")("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-show-arrow", ctx.nzShowArrow)("ant-select-show-search", !!ctx.nzShowSearch)("ant-select-disabled", ctx.nzDisabled)("ant-select-open", ctx.menuVisible)("ant-select-focused", ctx.isFocused)("ant-select-multiple", ctx.nzMultiple)("ant-select-single", !ctx.nzMultiple)("ant-select-rtl", ctx.dir === "rtl");
          }
        },
        inputs: {
          nzOptionRender: "nzOptionRender",
          nzShowInput: [2, "nzShowInput", "nzShowInput", booleanAttribute],
          nzShowArrow: [2, "nzShowArrow", "nzShowArrow", booleanAttribute],
          nzAllowClear: [2, "nzAllowClear", "nzAllowClear", booleanAttribute],
          nzAutoFocus: [2, "nzAutoFocus", "nzAutoFocus", booleanAttribute],
          nzChangeOnSelect: [2, "nzChangeOnSelect", "nzChangeOnSelect", booleanAttribute],
          nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
          nzColumnClassName: "nzColumnClassName",
          nzExpandTrigger: "nzExpandTrigger",
          nzValueProperty: "nzValueProperty",
          nzLabelProperty: "nzLabelProperty",
          nzLabelRender: "nzLabelRender",
          nzNotFoundContent: "nzNotFoundContent",
          nzSize: "nzSize",
          nzBackdrop: "nzBackdrop",
          nzShowSearch: "nzShowSearch",
          nzPlaceHolder: "nzPlaceHolder",
          nzMenuClassName: "nzMenuClassName",
          nzMenuStyle: "nzMenuStyle",
          nzMouseLeaveDelay: [2, "nzMouseLeaveDelay", "nzMouseLeaveDelay", numberAttribute],
          nzMouseEnterDelay: [2, "nzMouseEnterDelay", "nzMouseEnterDelay", numberAttribute],
          nzStatus: "nzStatus",
          nzMultiple: [2, "nzMultiple", "nzMultiple", booleanAttribute],
          nzMaxTagCount: "nzMaxTagCount",
          nzPlacement: "nzPlacement",
          nzTriggerAction: "nzTriggerAction",
          nzChangeOn: "nzChangeOn",
          nzLoadData: "nzLoadData",
          nzDisplayWith: "nzDisplayWith",
          nzSuffixIcon: "nzSuffixIcon",
          nzExpandIcon: "nzExpandIcon",
          nzOptions: "nzOptions"
        },
        outputs: {
          nzVisibleChange: "nzVisibleChange",
          nzSelectionChange: "nzSelectionChange",
          nzRemoved: "nzRemoved",
          nzClear: "nzClear"
        },
        exportAs: ["nzCascader"],
        features: [ɵɵProvidersFeature([{
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => NzCascaderComponent2),
          multi: true
        }, {
          provide: NZ_SPACE_COMPACT_ITEM_TYPE,
          useValue: "select"
        }, NzCascaderService, NzDestroyService, NzCascaderTreeService]), ɵɵInputTransformsFeature, ɵɵHostDirectivesFeature([NzSpaceCompactItemDirective]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
        ngContentSelectors: _c4,
        decls: 3,
        vars: 6,
        consts: [["selectContainer", ""], ["menu", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayOpen"], [1, "ant-select-selector"], [3, "isComposingChange", "valueChange", "showInput", "value", "mirrorSync", "disabled", "autofocus", "focusTrigger"], [3, "placeholder", "display"], [3, "deletable", "disabled", "label", "contentTemplateOutlet", "contentTemplateOutletContext"], [1, "ant-select-arrow", 3, "ant-select-arrow-loading"], [3, "deletable", "disabled", "label"], [3, "delete", "deletable", "disabled", "label"], [3, "placeholder"], [1, "ant-select-arrow"], [3, "nzType", "ant-cascader-picker-arrow-expand"], ["nzType", "loading"], [3, "status"], [3, "nzType"], [3, "clear"], [1, "ant-select-dropdown", "ant-cascader-dropdown", 3, "mouseenter", "mouseleave", "nzNoAnimation"], [1, "ant-cascader-menus"], [1, "ant-cascader-menu", 3, "width", "height"], [1, "ant-cascader-menu"], [1, "ant-cascader-menu-item", "ant-cascader-menu-item-disabled"], [1, "ant-cascader-menu-item-content", 3, "nzComponentName", "specificContent"], ["role", "menuitemcheckbox", 1, "ant-cascader-menu", 3, "class", "height"], ["role", "menuitemcheckbox", 1, "ant-cascader-menu"], ["nz-cascader-option", "", 3, "expandIcon", "columnIndex", "nzLabelProperty", "optionTemplate", "activated", "highlightText", "node", "dir", "checkable"], ["nz-cascader-option", "", 3, "mouseenter", "mouseleave", "click", "check", "expandIcon", "columnIndex", "nzLabelProperty", "optionTemplate", "activated", "highlightText", "node", "dir", "checkable"]],
        template: function NzCascaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzCascaderComponent_Conditional_0_Template, 8, 11);
            ɵɵprojection(1);
            ɵɵtemplate(2, NzCascaderComponent_ng_template_2_Template, 5, 24, "ng-template", 2);
            ɵɵlistener("overlayOutsideClick", function NzCascaderComponent_Template_ng_template_overlayOutsideClick_2_listener($event) {
              return ctx.onClickOutside($event);
            })("detach", function NzCascaderComponent_Template_ng_template_detach_2_listener() {
              return ctx.closeMenu();
            })("positionChange", function NzCascaderComponent_Template_ng_template_positionChange_2_listener($event) {
              return ctx.onPositionChange($event);
            });
          }
          if (rf & 2) {
            ɵɵconditional(ctx.nzShowInput ? 0 : -1);
            ɵɵadvance(2);
            ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", ctx.overlayOrigin)("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayTransformOriginOn", ".ant-cascader-dropdown")("cdkConnectedOverlayOpen", ctx.menuVisible);
          }
        },
        dependencies: [SlicePipe, OverlayModule, CdkConnectedOverlay, Dir, FormsModule, NzIconModule, NzIconDirective, NzEmptyModule, NzEmbedEmptyComponent, NzFormItemFeedbackIconComponent, NzOverlayModule, NzConnectedOverlayDirective, NzNoAnimationDirective, NzSelectClearComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzSelectSearchComponent, NzCascaderOptionComponent],
        encapsulation: 2,
        data: {
          animation: [slideMotion]
        },
        changeDetection: 0
      });
    }
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCascaderComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      selector: "nz-cascader, [nz-cascader]",
      exportAs: "nzCascader",
      preserveWhitespaces: false,
      template: `
    @if (nzShowInput) {
      <div #selectContainer class="ant-select-selector">
        @if (nzMultiple) {
          @for (node of selectedNodes | slice: 0 : nzMaxTagCount; track node) {
            <nz-select-item
              [deletable]="true"
              [disabled]="nzDisabled"
              [label]="nzDisplayWith(getAncestorOptionList(node))"
              (delete)="removeSelected(node)"
            ></nz-select-item>
          }
          @if (selectedNodes.length > nzMaxTagCount) {
            <nz-select-item
              [deletable]="false"
              [disabled]="false"
              [label]="'+ ' + (selectedNodes.length - nzMaxTagCount) + ' ...'"
            ></nz-select-item>
          }
        }

        <nz-select-search
          [showInput]="!!nzShowSearch"
          (isComposingChange)="isComposingChange($event)"
          [value]="inputValue"
          (valueChange)="inputValue = $event"
          [mirrorSync]="nzMultiple"
          [disabled]="nzDisabled"
          [autofocus]="nzAutoFocus"
          [focusTrigger]="menuVisible"
        ></nz-select-search>

        @if (showPlaceholder) {
          <nz-select-placeholder
            [placeholder]="nzPlaceHolder || locale?.placeholder!"
            [style.display]="inputValue || isComposing ? 'none' : 'block'"
          ></nz-select-placeholder>
        }

        @if (showLabelRender) {
          <nz-select-item
            [deletable]="false"
            [disabled]="nzDisabled"
            [label]="labelRenderText"
            [contentTemplateOutlet]="isLabelRenderTemplate ? nzLabelRender : null"
            [contentTemplateOutletContext]="labelRenderContext"
          ></nz-select-item>
        }
      </div>

      @if (nzShowArrow) {
        <span class="ant-select-arrow" [class.ant-select-arrow-loading]="isLoading">
          @if (!isLoading) {
            <nz-icon [nzType]="$any(nzSuffixIcon)" [class.ant-cascader-picker-arrow-expand]="menuVisible" />
          } @else {
            <nz-icon nzType="loading" />
          }

          @if (hasFeedback && !!status) {
            <nz-form-item-feedback-icon [status]="status" />
          }
        </span>
      }
      @if (clearIconVisible) {
        <nz-select-clear (clear)="clearSelection($event)"></nz-select-clear>
      }
    }
    <ng-content></ng-content>

    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayOrigin]="overlayOrigin"
      [cdkConnectedOverlayPositions]="positions"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-cascader-dropdown'"
      [cdkConnectedOverlayOpen]="menuVisible"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="closeMenu()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-select-dropdown ant-cascader-dropdown"
        [class.ant-select-dropdown-placement-bottomLeft]="dropdownPosition === 'bottomLeft'"
        [class.ant-select-dropdown-placement-bottomRight]="dropdownPosition === 'bottomRight'"
        [class.ant-select-dropdown-placement-topLeft]="dropdownPosition === 'topLeft'"
        [class.ant-select-dropdown-placement-topRight]="dropdownPosition === 'topRight'"
        [class.ant-cascader-dropdown-rtl]="dir === 'rtl'"
        [@slideMotion]="'enter'"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        (mouseenter)="onTriggerMouseEnter()"
        (mouseleave)="onTriggerMouseLeave($event)"
      >
        <div
          #menu
          class="ant-cascader-menus"
          [class.ant-cascader-rtl]="dir === 'rtl'"
          [class.ant-cascader-menus-hidden]="!menuVisible"
          [class.ant-cascader-menu-empty]="shouldShowEmpty"
          [class]="nzMenuClassName"
          [style]="nzMenuStyle"
        >
          @if (shouldShowEmpty) {
            <ul class="ant-cascader-menu" [style.width]="dropdownWidthStyle" [style.height]="dropdownHeightStyle">
              <li class="ant-cascader-menu-item ant-cascader-menu-item-disabled">
                <nz-embed-empty
                  class="ant-cascader-menu-item-content"
                  [nzComponentName]="'cascader'"
                  [specificContent]="nzNotFoundContent"
                />
              </li>
            </ul>
          } @else {
            @for (options of cascaderService.columns; track options; let i = $index) {
              <ul
                class="ant-cascader-menu"
                role="menuitemcheckbox"
                [class]="nzColumnClassName"
                [style.height]="dropdownHeightStyle"
              >
                @for (option of options; track option) {
                  <li
                    nz-cascader-option
                    [expandIcon]="nzExpandIcon"
                    [columnIndex]="i"
                    [nzLabelProperty]="nzLabelProperty"
                    [optionTemplate]="nzOptionRender"
                    [activated]="isOptionActivated(option, i)"
                    [highlightText]="inSearchingMode ? inputValue : ''"
                    [node]="option"
                    [dir]="dir"
                    [checkable]="nzMultiple"
                    (mouseenter)="onOptionMouseEnter(option, i, $event)"
                    (mouseleave)="onOptionMouseLeave(option, i, $event)"
                    (click)="onOptionClick(option, i, $event)"
                    (check)="onOptionCheck(option, i)"
                  ></li>
                }
              </ul>
            }
          }
        </div>
      </div>
    </ng-template>
  `,
      animations: [slideMotion],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzCascaderComponent),
        multi: true
      }, {
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "select"
      }, NzCascaderService, NzDestroyService, NzCascaderTreeService],
      host: {
        "[attr.tabIndex]": '"0"',
        "[class.ant-select-in-form-item]": "!!nzFormStatusService",
        "[class.ant-select-lg]": 'finalSize() === "large"',
        "[class.ant-select-sm]": 'finalSize() === "small"',
        "[class.ant-select-allow-clear]": "nzAllowClear",
        "[class.ant-select-show-arrow]": "nzShowArrow",
        "[class.ant-select-show-search]": "!!nzShowSearch",
        "[class.ant-select-disabled]": "nzDisabled",
        "[class.ant-select-open]": "menuVisible",
        "[class.ant-select-focused]": "isFocused",
        "[class.ant-select-multiple]": "nzMultiple",
        "[class.ant-select-single]": "!nzMultiple",
        "[class.ant-select-rtl]": `dir === 'rtl'`
      },
      hostDirectives: [NzSpaceCompactItemDirective],
      imports: [SlicePipe, OverlayModule, FormsModule, NzIconModule, NzEmptyModule, NzFormItemFeedbackIconComponent, NzOverlayModule, NzNoAnimationDirective, NzSelectClearComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzSelectSearchComponent, NzCascaderOptionComponent]
    }]
  }], () => [{
    type: NzCascaderTreeService
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzI18nService
  }, {
    type: NzDestroyService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Directionality
  }], {
    selectContainer: [{
      type: ViewChild,
      args: ["selectContainer", {
        static: false
      }]
    }],
    input: [{
      type: ViewChild,
      args: [NzSelectSearchComponent]
    }],
    menu: [{
      type: ViewChild,
      args: ["menu", {
        static: false
      }]
    }],
    overlay: [{
      type: ViewChild,
      args: [CdkConnectedOverlay, {
        static: false
      }]
    }],
    cascaderItems: [{
      type: ViewChildren,
      args: [NzCascaderOptionComponent]
    }],
    nzOptionRender: [{
      type: Input
    }],
    nzShowInput: [{
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
    nzAllowClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAutoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzChangeOnSelect: [{
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
    nzColumnClassName: [{
      type: Input
    }],
    nzExpandTrigger: [{
      type: Input
    }],
    nzValueProperty: [{
      type: Input
    }],
    nzLabelProperty: [{
      type: Input
    }],
    nzLabelRender: [{
      type: Input
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzBackdrop: [{
      type: Input
    }],
    nzShowSearch: [{
      type: Input
    }],
    nzPlaceHolder: [{
      type: Input
    }],
    nzMenuClassName: [{
      type: Input
    }],
    nzMenuStyle: [{
      type: Input
    }],
    nzMouseLeaveDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzMouseEnterDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzStatus: [{
      type: Input
    }],
    nzMultiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzMaxTagCount: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzTriggerAction: [{
      type: Input
    }],
    nzChangeOn: [{
      type: Input
    }],
    nzLoadData: [{
      type: Input
    }],
    nzDisplayWith: [{
      type: Input
    }],
    nzSuffixIcon: [{
      type: Input
    }],
    nzExpandIcon: [{
      type: Input
    }],
    nzOptions: [{
      type: Input
    }],
    nzVisibleChange: [{
      type: Output
    }],
    nzSelectionChange: [{
      type: Output
    }],
    nzRemoved: [{
      type: Output
    }],
    nzClear: [{
      type: Output
    }],
    onTriggerClick: [{
      type: HostListener,
      args: ["click"]
    }],
    onTriggerMouseEnter: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    onTriggerMouseLeave: [{
      type: HostListener,
      args: ["mouseleave", ["$event"]]
    }]
  });
})();
var NzCascaderModule = class _NzCascaderModule {
  static {
    this.ɵfac = function NzCascaderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzCascaderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzCascaderModule,
      imports: [NzCascaderComponent],
      exports: [NzCascaderComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzCascaderComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCascaderModule, [{
    type: NgModule,
    args: [{
      imports: [NzCascaderComponent],
      exports: [NzCascaderComponent]
    }]
  }], null, null);
})();
export {
  NzCascaderComponent,
  NzCascaderModule,
  NzCascaderOptionComponent,
  NzCascaderService,
  isChildNode,
  isParentNode,
  isShowSearchObject
};
//# sourceMappingURL=ng-zorro-antd_cascader.js.map
