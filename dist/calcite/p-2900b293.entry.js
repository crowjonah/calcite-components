import{r as t,c as e,h as i,H as s,g as o}from"./p-2dcc2b38.js";import{g as r,a as n}from"./p-13cfbb21.js";const a={up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",space:" "},c=class{constructor(i){t(this,i),this.scale="m",this.hiddenInput=(()=>{const t=document.createElement("input");return t.type="hidden",this.el.appendChild(t),t})(),this.calciteRadioGroupChange=e(this,"calciteRadioGroupChange",7)}handleNameChange(t){this.hiddenInput.name=t}handleSelectedItemChange(t,e){if(t===e)return;const i=this.getItems(),s=Array.from(i).filter(e=>e===t).pop();s?(this.selectItem(s),this.calciteRadioGroupChange.emit()):i[0]&&(i[0].tabIndex=0)}connectedCallback(){["s","m","l"].includes(this.scale)||(this.scale="m");const t=this.getItems();let e=Array.from(t).filter(t=>t.checked).pop();e?this.selectItem(e):t[0]&&(t[0].tabIndex=0);const{hiddenInput:i,name:s}=this;s&&(i.name=s),e&&(i.value=e.value)}componentDidLoad(){this.hasLoaded=!0}render(){return i(s,{role:"radiogroup"},i("slot",null))}handleClick(t){"calcite-radio-group-item"===t.target.localName&&this.selectItem(t.target)}handleSelected(t){this.hasLoaded&&(t.stopPropagation(),t.preventDefault(),this.selectItem(t.target))}handleKeyDown(t){const{key:e}=t;if(-1===Object.values(a).indexOf(e))return;t.preventDefault();const{el:i,selectedItem:s}=this,o=r(i),n=("rtl"===o?e===a.right:e===a.left)||e===a.up,c=this.getItems();let l=-1;if(c.forEach((t,e)=>{t===s&&(l=e)}),n){const t=c.item(-1===l||0===l?c.length-1:l-1);this.selectItem(t)}else if(("rtl"===o?e===a.left:e===a.right)||e===a.down){const t=-1===l?c.item(1):c.item(l+1)||c.item(0);this.selectItem(t)}else e!==a.space||this.selectItem(t.target)}async setFocus(){var t;null===(t=this.selectedItem||this.getItems()[0])||void 0===t||t.focus()}getItems(){return this.el.querySelectorAll("calcite-radio-group-item")}selectItem(t){if(t===this.selectedItem)return;const e=this.getItems();let i=null;e.forEach(e=>{const s=e.value===t.value;(s&&!e.checked||!s&&e.checked)&&(e.checked=s),e.tabIndex=s?0:-1,s&&(i=e)}),this.selectedItem=i,this.syncWithInputProxy(i),i&&i.focus()}syncWithInputProxy(t){this.hiddenInput.value=t?t.value:""}get el(){return o(this)}static get watchers(){return{name:["handleNameChange"],selectedItem:["handleSelectedItemChange"]}}};c.style=":host([hidden]){display:none}:host{display:-ms-flexbox;display:flex}::slotted(calcite-radio-group-item[checked]),::slotted(calcite-radio-group-item:focus){z-index:0}";const l=class{constructor(i){t(this,i),this.checked=!1,this.mutationObserver=this.getMutationObserver(),this.calciteRadioGroupItemChange=e(this,"calciteRadioGroupItemChange",7)}handleCheckedChange(){this.calciteRadioGroupItemChange.emit(),this.syncToExternalInput()}connectedCallback(){let t=this.el.querySelector('input[slot="input"]');t&&(this.value=t.value,this.checked=t.checked,this.mutationObserver.observe(t,{attributes:!0})),this.inputProxy=t}disconnectedCallback(){this.mutationObserver.disconnect()}componentDidLoad(){const t=this.el.querySelector("label");this.useFallback=!t||""===t.textContent}render(){const{checked:t,useFallback:e,value:o}=this,r=n(this.el,"scale","m");return i(s,{role:"radio","aria-checked":t.toString(),scale:r},i("label",null,i("slot",null,e?o:""),i("slot",{name:"input"})))}getMutationObserver(){return new MutationObserver(()=>this.syncFromExternalInput())}syncFromExternalInput(){this.inputProxy&&(this.value=this.inputProxy.value,this.checked=this.inputProxy.checked)}syncToExternalInput(){this.inputProxy&&(this.inputProxy.value=this.value,this.checked?this.inputProxy.setAttribute("checked","true"):this.inputProxy.removeAttribute("checked"))}get el(){return o(this)}static get watchers(){return{checked:["handleCheckedChange"]}}};l.style=":host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);cursor:pointer;line-height:1.25;margin:0.25rem -1px 0 0px;border:1px solid var(--calcite-ui-border-1);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background 0.1s ease-in-out, border-color 0.1s ease-in-out;transition:background 0.1s ease-in-out, border-color 0.1s ease-in-out;cursor:pointer}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}:host([scale=s]){font-size:0.8125rem;line-height:1.5;padding:0.25rem 0.75rem}:host([scale=m]){font-size:0.9375rem;line-height:1.5;padding:0.4rem 1rem}:host([scale=l]){font-size:1rem;line-height:1.5;padding:0.5rem 1.5rem}:host(:hover){background-color:var(--calcite-ui-foreground-2)}:host(:active){background-color:var(--calcite-ui-foreground-3)}:host([checked]){background-color:var(--calcite-ui-blue-1);border-color:var(--calcite-ui-blue-1);color:var(--calcite-ui-background);cursor:default}label{pointer-events:none}::slotted(input){display:none}";export{c as calcite_radio_group,l as calcite_radio_group_item}