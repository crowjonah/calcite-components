import{r as e,c as t,h as i,H as c,g as r}from"./p-2dcc2b38.js";import{c as a,n,d as l,g as o}from"./p-13cfbb21.js";import{b as s,H as d,D as h,U as u,R as v,L as f,E as p,S as m}from"./p-eb6a0c18.js";var b;!function(e){e.Single="single",e.Multi="multi",e.Children="children",e.MultiChildren="multi-children"}(b||(b={}));const g=class{constructor(i){e(this,i),this.lines=!1,this.scale="m",this.selectionMode=b.Single,this.root=!0,this.calciteTreeSelect=t(this,"calciteTreeSelect",7)}componentWillUpdate(){}componentWillRender(){const e=this.el.parentElement.closest("calcite-tree");this.theme=a(this.el),this.lines=e?e.lines:this.lines,this.scale=e?e.scale:this.scale,this.selectionMode=e?e.selectionMode:this.selectionMode,this.root=!e}render(){return i(c,{tabindex:this.root?"1":void 0,"aria-role":this.root?"tree":void 0,"aria-multiselectable":this.selectionMode===b.Multi||this.selectionMode===b.MultiChildren},i("slot",null))}onFocus(){if(this.root){const e=this.el.querySelector("calcite-tree-item[selected]"),t=this.el.querySelector("calcite-tree-item");(e||t).focus()}}onClick(e){const t=e.target,i=n(t.querySelectorAll("calcite-tree-item")),c=e.detail.modifyCurrentSelection&&(this.selectionMode===b.Multi||this.selectionMode===b.MultiChildren),r=this.selectionMode===b.MultiChildren||this.selectionMode===b.Children,a=!c&&((this.selectionMode===b.Single||this.selectionMode===b.Multi)&&i.length<=0||this.selectionMode===b.Children||this.selectionMode===b.MultiChildren),l=this.selectionMode===b.Children||this.selectionMode===b.MultiChildren;if(this.root){const o=[];null!==this.selectionMode&&(!t.hasChildren||t.hasChildren&&(this.selectionMode===b.Children||this.selectionMode===b.MultiChildren))&&o.push(t),r&&i.forEach(e=>{o.push(e)}),a&&n(this.el.querySelectorAll("calcite-tree-item[selected]")).forEach(e=>{o.includes(e)||(e.selected=!1)}),l&&!e.detail.forceToggle&&(t.expanded=!0),c&&window.getSelection().removeAllRanges(),o.forEach(c&&t.selected||r&&e.detail.forceToggle?e=>{e.selected=!1}:e=>{e.selected=!0})}this.root&&(e.preventDefault(),e.stopPropagation()),this.calciteTreeSelect.emit({selected:n(this.el.querySelectorAll("calcite-tree-item")).filter(e=>e.selected)})}get el(){return r(this)}};g.style=":host([hidden]){display:none}:host{display:block;outline:none}";const x=class{constructor(i){e(this,i),this.selected=!1,this.expanded=!1,this.iconClickHandler=e=>{e.stopPropagation(),this.expanded=!this.expanded,this.calciteTreeItemSelect.emit({modifyCurrentSelection:e.shiftKey,forceToggle:!0})},this.childrenClickHandler=e=>e.stopPropagation(),this.parentExpanded=!1,this.depth=-1,this.hasChildren=null,this.calciteTreeItemSelect=t(this,"calciteTreeItemSelect",7)}expandedHandler(e){if(this.childrenSlotWrapper){const[t]=l(this.childrenSlotWrapper,"calcite-tree");t&&l(t,"calcite-tree-item").forEach(t=>t.parentExpanded=e)}}componentWillRender(){this.hasChildren=!!this.el.querySelector("calcite-tree");let e,t=this.el.closest("calcite-tree");for(this.selectionMode=t.selectionMode,this.depth=0,this.scale=t&&t.scale||"m",this.lines=t&&t.lines,this.el.dir=o(this.el);t&&(e=t.parentElement.closest("calcite-tree"),e!==t);)t=e,this.depth=this.depth+1}render(){const e=this.hasChildren?i("calcite-icon",{class:"calcite-tree-chevron",icon:"chevron-right",scale:"s",onClick:this.iconClickHandler,"data-test-id":"icon"}):null;return i(c,{tabindex:this.parentExpanded||1===this.depth?"0":"-1","aria-role":"treeitem","aria-hidden":this.parentExpanded||1===this.depth?void 0:"true","aria-selected":this.selected?"true":this.selectionMode===b.Multi||this.selectionMode===b.MultiChildren?"false":void 0,"aria-expanded":this.hasChildren?this.expanded.toString():void 0},i("div",{class:"calcite-tree-node",ref:e=>this.defaultSlotWrapper=e},e,i("slot",null)),i("div",{class:"calcite-tree-children","data-test-id":"calcite-tree-children",role:this.hasChildren?"group":void 0,ref:e=>this.childrenSlotWrapper=e,onClick:this.childrenClickHandler},i("slot",{name:"children"})))}onClick(e){const[t]=l(this.defaultSlotWrapper,"a");t&&"a"!==e.composedPath()[0].tagName.toLowerCase()&&window.open(t.href,""===t.target?"_self":t.target),this.expanded=!this.expanded,this.calciteTreeItemSelect.emit({modifyCurrentSelection:e.shiftKey,forceToggle:!1})}keyDownHandler(e){let t;switch(e.keyCode){case m:this.selected=!this.selected,e.preventDefault(),e.stopPropagation();break;case p:const i=n(this.el.children).find(e=>e.matches("a"));i?(i.click(),this.selected=!0):this.selected=!this.selected,e.preventDefault(),e.stopPropagation();break;case f:if(this.hasChildren&&this.expanded){this.expanded=!1,e.preventDefault(),e.stopPropagation();break}const c=this.el.parentElement.closest("calcite-tree-item");if(c&&(!this.hasChildren||!1===this.expanded)){c.focus(),e.preventDefault(),e.stopPropagation();break}break;case v:if(this.hasChildren&&!1===this.expanded){this.expanded=!0,e.preventDefault(),e.stopPropagation();break}if(this.hasChildren&&this.expanded){this.el.querySelector("calcite-tree-item").focus();break}break;case u:const r=this.el.previousElementSibling;r&&r.matches("calcite-tree-item")&&r.focus();break;case h:const a=this.el.nextElementSibling;a&&a.matches("calcite-tree-item")&&a.focus();break;case d:t=this.el.closest("calcite-tree[root]"),t.querySelector("calcite-tree-item").focus();break;case s:t=this.el.closest("calcite-tree[root]");let l=t.children[t.children.length-1],o=n(l.children).find(e=>e.matches("calcite-tree"));for(;o;)l=o.children[t.children.length-1],o=n(l.children).find(e=>e.matches("calcite-tree"));l.focus()}}get el(){return r(this)}static get watchers(){return{expanded:["expandedHandler"]}}};x.style='@charset "UTF-8";:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{display:block;color:var(--calcite-tree-text);cursor:pointer;outline:none;font-size:0.875rem;line-height:1.5;max-width:100%;--calcite-tree-text:var(--calcite-ui-text-2);--calcite-tree-text:var(--calcite-ui-text-1);--calcite-tree-text:var(--calcite-ui-text-1);--calcite-tree-chevron:var(--calcite-ui-border-1);--calcite-tree-chevron-hover:var(--calcite-ui-text-3);--calcite-tree-vertical-padding:0.375rem;--calcite-tree-indicator:var(--calcite-ui-border-1);--calcite-tree-indicator-active:var(--calcite-ui-blue-1);--calcite-tree-indicator-first-start:0.1rem;--calcite-tree-indicator-first-end:auto;--calcite-tree-indicator-distance-start:0.15rem;--calcite-tree-indicator-distance-end:auto;--calcite-tree-icon-edge-distance-start:-0.2rem;--calcite-tree-icon-edge-distance-end:0;--calcite-tree-icon-content-distance-start:0.375rem;--calcite-tree-icon-content-distance-end:0;--calcite-tree-indent-start:1.4rem;--calcite-tree-indent-end:0;--calcite-tree-children-indent-start:0.25rem;--calcite-tree-children-indent-end:0;--calcite-tree-children-padding-start:1rem;--calcite-tree-children-padding-end:0;--calcite-tree-line-position-start:0.05rem;--calcite-tree-line-position-end:0;--calcite-tree-parent-line-position-start:-0.95rem;--calcite-tree-parent-line-position-end:0;--calcite-tree-line-width:1px;--calcite-tree-hover-line-width:3px}:host([lines]){--calcite-tree-line:var(--calcite-ui-border-3);--calcite-tree-line-hover:var(--calcite-ui-border-1)}:host([scale=s]){--calcite-tree-hover-line-width:2px;--calcite-tree-vertical-padding:0.1875rem;--calcite-tree-children-indent-start:0rem;--calcite-tree-children-padding-start:0.8rem;--calcite-tree-line-position-start:0.3rem;--calcite-tree-parent-line-position-start:-0.5rem}:host([dir=rtl]){--calcite-tree-indicator-first-start:0;--calcite-tree-indicator-first-end:0.1rem;--calcite-tree-indicator-distance-start:auto;--calcite-tree-indicator-distance-end:0.15rem;--calcite-tree-icon-edge-distance-start:auto;--calcite-tree-icon-edge-distance-end:-0.2rem;--calcite-tree-icon-content-distance-start:0;--calcite-tree-icon-content-distance-end:0.375rem;--calcite-tree-indent-start:0;--calcite-tree-indent-end:1.4rem;--calcite-tree-children-indent-start:0;--calcite-tree-children-indent-end:0.25rem;--calcite-tree-children-padding-start:0;--calcite-tree-children-padding-end:1rem;--calcite-tree-line-position-start:0;--calcite-tree-line-position-end:0.05rem;--calcite-tree-parent-line-position-start:0;--calcite-tree-parent-line-position-end:-0.95rem}:host([dir=rtl][scale=s]){--calcite-tree-children-indent-end:0rem;--calcite-tree-children-padding-end:0.8rem;--calcite-tree-line-position-end:0.3rem;--calcite-tree-parent-line-position-end:-0.5rem}::slotted(*){color:inherit;font-size:0.875rem;line-height:1.5;text-decoration:none !important;max-width:100%;word-wrap:break-word}::slotted(*):hover{text-decoration:none !important}::slotted(a){text-decoration:none}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.calcite-tree-children{z-index:1;margin-left:var(--calcite-tree-children-indent-start);margin-right:var(--calcite-tree-children-indent-end);padding-left:var(--calcite-tree-children-padding-start);padding-right:var(--calcite-tree-children-padding-end);position:relative;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0;overflow:hidden;-webkit-transition:0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;transition:0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;height:0;-webkit-transform-origin:top;transform-origin:top}.calcite-tree-children:after{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;content:"";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-line-position-start);right:var(--calcite-tree-line-position-end);top:0;position:absolute}:host([expanded])>.calcite-tree-children{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1;height:auto}:host([has-children]) .calcite-tree-children:hover:after,:host([has-children]) .calcite-tree-children:focus:after{background:var(--calcite-tree-line-hover)}.calcite-tree-node{display:-ms-flexbox;display:flex;padding:var(--calcite-tree-vertical-padding) 0;padding-left:var(--calcite-tree-indent-start);padding-right:var(--calcite-tree-indent-end);position:relative}.calcite-tree-node:before{content:"•";position:absolute;left:var(--calcite-tree-indicator-distance-start);right:var(--calcite-tree-indicator-distance-end);opacity:0;color:var(--calcite-tree-indicator);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}.calcite-tree-node:after{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;content:"";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-parent-line-position-start);right:var(--calcite-tree-parent-line-position-end);top:0;position:absolute}:host([depth="1"])>.calcite-tree-node:after{display:none}:host([has-children])>.calcite-tree-node{padding-left:0;padding-right:0}:host([has-children])>.calcite-tree-node:before{display:none}:host([depth="1"])>.calcite-tree-node:before,:host([depth="1"])>.calcite-tree-children:before{left:var(--calcite-tree-indicator-first-start);right:var(--calcite-tree-indicator-first-end)}.calcite-tree-node:hover:before,:host([selected]) .calcite-tree-node:hover:before,:host(:focus) .calcite-tree-node:before{opacity:1}.calcite-tree-node:hover:after,:host([selected]) .calcite-tree-node:hover:after,:host(:focus) .calcite-tree-node:after{width:var(--calcite-tree-hover-line-width);background:var(--calcite-tree-line-hover);z-index:2}.calcite-tree-node:hover ::slotted(*),:host([selected]) .calcite-tree-node:hover ::slotted(*),:host(:focus) .calcite-tree-node ::slotted(*){color:var(--calcite-tree-text-hover)}.calcite-tree-node:hover .calcite-tree-chevron,:host([selected]) .calcite-tree-node:hover .calcite-tree-chevron,:host(:focus) .calcite-tree-node .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover)}.calcite-tree-node:hover .calcite-tree-indicator,:host([selected]) .calcite-tree-node:hover .calcite-tree-indicator,:host(:focus) .calcite-tree-node .calcite-tree-indicator{fill:var(--calcite-tree-indicator-hover)}:host([selected])>.calcite-tree-node,:host([selected])>.calcite-tree-node:hover{color:var(--calcite-tree-text-active);font-weight:500}:host([selected])>.calcite-tree-node:before,:host([selected])>.calcite-tree-node:hover:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([selected])>.calcite-tree-node:after,:host([selected])>.calcite-tree-node:hover:after{background:var(--calcite-ui-blue-1);width:var(--calcite-tree-hover-line-width);z-index:2}:host([selected])>.calcite-tree-node ::slotted(*),:host([selected])>.calcite-tree-node:hover ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded])>.calcite-tree-node{color:var(--calcite-tree-text-active);font-weight:500}:host([has-children][expanded])>.calcite-tree-node:after{background:var(--calcite-ui-blue-1)}:host([has-children][expanded])>.calcite-tree-node:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([has-children][expanded])>.calcite-tree-node ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded][selected])>.calcite-tree-node:after{background:var(--calcite-ui-blue-1);width:var(--calcite-tree-hover-line-width);z-index:2}.calcite-tree-chevron{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;-ms-flex:0 0 auto;flex:0 0 auto;position:relative;-ms-flex-item-align:center;align-self:center;left:var(--calcite-tree-icon-edge-distance-start);right:var(--calcite-tree-icon-edge-distance-end);margin-right:var(--calcite-tree-icon-content-distance-start);margin-left:var(--calcite-tree-icon-content-distance-end);-webkit-transform:rotate(0deg);transform:rotate(0deg);fill:var(--calcite-tree-chevron)}:host([dir=rtl]) .calcite-tree-chevron{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(:hover) .calcite-tree-chevron,:host(:focus) .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover);stroke:var(--calcite-tree-chevron-hover);stroke-width:0.75}:host([expanded])>.calcite-tree-node>.calcite-tree-chevron{-webkit-transform:rotate(90deg);transform:rotate(90deg);fill:var(--calcite-ui-blue-1);stroke-width:0.75;stroke:var(--calcite-ui-blue-1)}';export{g as calcite_tree,x as calcite_tree_item}