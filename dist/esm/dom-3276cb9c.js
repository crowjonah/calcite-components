// turn a domNodeList into an array
function nodeListToArray(domNodeList) {
    if (Array.isArray(domNodeList)) {
        return domNodeList;
    }
    else {
        return Array.prototype.slice.call(domNodeList);
    }
}
function getElementDir(el) {
    return getElementProp(el, "dir", "ltr");
}
function getElementProp(el, prop, value) {
    const closestWithProp = el.closest(`[${prop}]`);
    return closestWithProp ? closestWithProp.getAttribute(prop) : value;
}
function focusElement(el) {
    if (!el) {
        return;
    }
    typeof el.setFocus === "function" ? el.setFocus() : el.focus();
}
function getSlottedElements(wrapperEl, selector) {
    const slot = wrapperEl.querySelector("slot");
    const elements = slot ? slot.assignedElements() : wrapperEl.children;
    return nodeListToArray(elements).filter((el) => el.matches(selector));
}
function getDescribedByElement(element) {
    const id = element && element.getAttribute("aria-describedby");
    return (id && document.getElementById(id)) || null;
}
function hasLabel(labelEl, el) {
    return labelEl.shadowRoot.contains(el) || labelEl.contains(el);
}

export { getElementProp as a, getDescribedByElement as b, getSlottedElements as c, focusElement as f, getElementDir as g, hasLabel as h, nodeListToArray as n };