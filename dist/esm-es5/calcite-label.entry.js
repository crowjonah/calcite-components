var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-5295a268.js';
import { f as focusElement, g as getElementDir } from './dom-3276cb9c.js';
var calciteLabelCss = ":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host([scale=s]) label{font-size:var(--calcite-label-font-size, 12px);--calcite-label-spacing-value:8px}:host([scale=m]) label{font-size:var(--calcite-label-font-size, 16px);--calcite-label-spacing-value:12px}:host([scale=l]) label{font-size:var(--calcite-label-font-size, 20px);--calcite-label-spacing-value:16px}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;text-align:left}:host([dir=rtl]){text-align:right}:host label{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;cursor:pointer;margin:0 0 1.5rem 0}:host([layout=inline]) label{-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}:host([layout=inline-space-between]) label{-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}:host([layout=default]) label .calcite-label-text{margin-bottom:8px}:host([layout=inline]) .calcite-label-text:first-child,:host([layout=inline-space-between]) .calcite-label-text:first-child{margin-right:0.75rem}:host([layout=inline]) .calcite-label-text:last-child,:host([layout=inline-space-between]) .calcite-label-text:last-child{margin-left:0.75rem}:host([status=invalid]) label{color:var(--calcite-ui-red-1)}:host([status=valid]) label{color:var(--calcite-ui-text-2)}:host([status=idle]) label{color:var(--calcite-ui-text-2)}";
var CalciteLabel = /** @class */ (function () {
    function CalciteLabel(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /** specify the status of the label and any child input / input messages */
        this.status = "idle";
        /** specify the scale of the input, defaults to m */
        this.scale = "m";
        /** is the wrapped element positioned inline with the label slotted text */
        this.layout = "default";
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        // emit focus event and focus the requested input if available
        this.handleClick = function (event) {
            _this.emitSelectedItem(event.target);
            if (_this.requestedFor) {
                focusElement(document.getElementById(_this.requestedFor));
            }
            else if (_this.el.querySelector("textarea")) {
                _this.el.querySelector("textarea").focus();
            }
            else if (_this.el.querySelector("input")) {
                _this.el.querySelector("input").focus();
            }
        };
        this.calciteLabelFocus = createEvent(this, "calciteLabelFocus", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteLabel.prototype.connectedCallback = function () {
        var status = ["invalid", "valid", "idle"];
        if (!status.includes(this.status))
            this.status = "idle";
        var layout = ["inline", "inline-space-between", "default"];
        if (!layout.includes(this.layout))
            this.layout = "default";
        var scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
    };
    CalciteLabel.prototype.componentDidLoad = function () {
        var _this = this;
        this.requestedFor = this.el.getAttribute("for");
        if (this.layout === "inline" || this.layout === "inline-space-between") {
            this.displayedSlottedContent = this.handleSlottedContent();
            this.slottedContent.innerHTML = "";
            this.displayedSlottedContent.map(function (item) {
                _this.slottedContent.append(item);
            });
        }
    };
    CalciteLabel.prototype.render = function () {
        var _this = this;
        var attributes = this.getAttributes();
        var dir = getElementDir(this.el);
        return (h(Host, { dir: dir, onClick: this.handleClick }, h("label", Object.assign({}, attributes, { ref: function (el) { return (_this.slottedContent = el); } }), h("slot", null))));
    };
    // wrap slotted text nodes in span to handle spacing of inline and inline space between layouts
    CalciteLabel.prototype.handleSlottedContent = function () {
        var nodeList = [];
        var requestedSlottedContent = this.el.childNodes;
        // iterate over slotted nodes and wrap text nodes in span
        if (requestedSlottedContent) {
            requestedSlottedContent.forEach(function (item) {
                if (item.nodeName === "#text" && item.textContent.trim().length > 0) {
                    var node = document.createElement("span");
                    node.classList.add("calcite-label-text");
                    node.innerHTML = item.textContent.trim();
                    nodeList.push(node);
                }
                else if (item.nodeName !== "#text") {
                    nodeList.push(item);
                }
            });
        }
        return __spreadArrays(Array.from(new Set(nodeList)));
    };
    CalciteLabel.prototype.emitSelectedItem = function (target) {
        this.calciteLabelFocus.emit({
            labelEl: this.el,
            interactedEl: target,
            requestedInput: this.requestedFor,
        });
    };
    CalciteLabel.prototype.getAttributes = function () {
        // spread attributes from the component to rendered child, filtering out props
        var props = ["layout", "theme", "scale", "status"];
        return Array.from(this.el.attributes)
            .filter(function (a) { return a && !props.includes(a.name); })
            .reduce(function (acc, _a) {
            var _b;
            var name = _a.name, value = _a.value;
            return (Object.assign(Object.assign({}, acc), (_b = {}, _b[name] = value, _b)));
        }, {});
    };
    Object.defineProperty(CalciteLabel.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteLabel;
}());
CalciteLabel.style = calciteLabelCss;
export { CalciteLabel as calcite_label };