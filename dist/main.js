/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n}\r\nul, ol {\r\n\tlist-style: none;\r\n}\r\na {\r\n\ttext-decoration: none;\r\n}\r\n/* scrollbar styles */\r\n*::-webkit-scrollbar {\r\n\twidth: 6px;\r\n\t/* transition: var(--transition); */\r\n}\r\n*::-webkit-scrollbar-thumb {\r\n\tbackground-color: var(--scrollbar-color);\r\n\tborder-radius: 20px;\r\n\tbackground-clip: content-box;\r\n}\r\n*::-webkit-scrollbar-track {\r\n\tbackground-color: transparent;\r\n}\r\n*::-webkit-scrollbar-thumb:hover {\r\n\tbackground-color: var(--background-clr-2);\r\n}\r\n:root {\r\n\t--background-clr-1: #3b82f6;\r\n\t--background-clr-2: #93c5fd;\r\n\t--background-clr-3: #60a5fa;\r\n\t--background-clr-4: #dbeafe;\r\n\t--todo-background-clr: #7dd3fc; \r\n\t--background-clr-dark: #172554;\r\n\t--scrollbar-color: #312e81;\r\n\t--font-clr-1: black;\r\n\t--font-clr-2: #3b82f6;\r\n\t--font-clr-3: white;\r\n\t--font-1: \"Roboto\", sans-serif;\r\n\t--font-2: \"Open Sans\", sans-serif;\r\n\t--transition: all 0.25s ease-in-out;\r\n\t--border-radius: 6px;\r\n\t--padding-btn-link: 6px 12px;\r\n\t--section-padding: 8px 16px;\r\n\t--letter-spacing: 4px;\r\n}\r\nbody {\r\n\tfont-family: var(--font-1), var(--font-2);\r\n}\r\nbutton {\r\n\tpadding: var(--padding-btn-link);\r\n\tcursor: pointer;\r\n\tfont-weight: 700;\r\n\ttransition: var(--transition);\r\n}\r\n\r\n\r\n.green-btn,\r\n.red-btn,\r\n.gray-btn,\r\n.light-blue-btn {\r\n\tcolor: black;\r\n\tbackground-color: white;\r\n\tfont-weight: 700;\r\n\tpadding: var(--section-padding);\r\n\tfont-family: var(--font-1), var(--font-2);\r\n\tborder: none;\r\n\tborder-radius: var(--border-radius);\r\n\ttransition: var(--transition);\r\n\tcursor: pointer;\r\n}\r\n\r\n/* Light blue button styles */\r\n.light-blue-btn {\r\n\tbackground-color: var(--background-clr-2);\r\n\tcolor: #5518ab;\r\n}\r\n.light-blue-btn:hover {\r\n\tcolor: var(--background-clr-3);\r\n\tbackground-color: var(--font-clr-1);\r\n}\r\n.light-blue-btn[data-active=\"true\"] {\r\n\tcolor: var(--background-clr-3);\r\n\tbackground-color: var(--font-clr-1);\r\n}\r\n\r\n/* Green button styles: Remember to do hover effect for them */\r\n.green-btn {\r\n\tborder: 2px solid #22c55e;\r\n}\r\n/* Red button styles */\r\n.red-btn {\r\n\tborder: 2px solid #b91c1c;\r\n}\r\n.gray-btn {\r\n\tborder: 2px solid #6b7280\r\n}\r\n.green-btn:hover {\r\n\tbackground-color: #22c55e;\r\n\tcolor: white;\r\n}\r\n.red-btn:hover {\r\n\tbackground-color: #b91c1c;\r\n\tcolor: white;\r\n}\r\n.gray-btn:hover {\r\n\tbackground-color: #6b7280;\r\n\tcolor: white;\r\n}\r\n\r\n\r\n.content-hidden {\r\n\tdisplay: none !important;\r\n}\r\n\r\n\r\n/* Styling for content; mainly for having modals */\r\n.content {\r\n\tposition: relative;\r\n}\r\n\r\n/* Styles for modal forms */\r\n/* Blurred overlay */\r\n.overlay {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\t/* Blurs the area behind the element  */\r\n\tbackdrop-filter: blur(5px); \r\n\t/* This will be over all other content in project-container */\r\n\tz-index: 1;\r\n}\r\n\r\n.modal {\r\n\tposition: absolute;\r\n\tz-index: 2;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\twidth: 50%;\r\n\t/* Make height min-content since heights will vary due to the different forms */\r\n\theight: min-content;\r\n\t/* Fancy box shadow */\r\n\tbox-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\r\n\tbackground-color: var(--background-clr-4);\r\n}\r\n.modal button {\r\n\tpadding: 10px 14px;\r\n}\r\n.modal .modal-header {\r\n\tpadding: var(--section-padding);\r\n\tgrid-row: 1;\r\n\tgrid-column: 1 / end;\t\r\n\tcolor: var(--font-clr-1);\r\n\tfont-weight: 700;\r\n\tbackground-color: var(--background-clr-3);\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n}\r\n\r\n.modal-main-content {\r\n\tpadding: var(--section-padding);\r\n\tfont-weight: 700;\r\n}\r\n\r\n/* Styling for the form itself */\r\n.modal-form {\r\n\tpadding: var(--section-padding);\r\n\tfont-weight: 700;\r\n}\r\n.modal-form .input-section {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\trow-gap: 12px;\r\n}\r\n.modal-form .priority-btns-section {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcolumn-gap: 12px;\r\n\twidth: 60%;\r\n}\r\n.modal-form fieldset {\r\n\tborder: none;\r\n}\r\n.modal-form input {\r\n\tbackground-color: white;\r\n\tborder: 2px solid gray;\r\n\tpadding: var(--section-padding);\r\n}\r\n\r\n/* Styling the modal that shows the details of the todo */\r\n.todo-details-section {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\trow-gap: 8px;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* Styles for everything related to the project container */\r\n.project-container {\r\n\tdisplay: grid;\r\n\t/* \r\n\tauto: for the header and footer so it automatically just sizes the row to the size of the content. \r\n\tThen 1fr for the rest of the space in the height for the sidebar and maincontent\r\n\t*/\r\n\tgrid-template-rows: auto 1fr auto; \r\n\r\n\t/* left side is just 15% of screen for the left side (which will be sidebar) and then 1fr for the remaining width */\r\n\tgrid-template-columns: 15% 1fr;\r\n\theight: 100vh;\r\n}\r\n\r\n/* Header styles */\r\n.project-header {\r\n\tbackground-color: var(--background-clr-1);\r\n\tcolor: var(--font-clr-1);\r\n\tfont-size: 16px;\r\n\tfont-weight: 700;\r\n\tpadding: var(--section-padding);\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\t\r\n\t/* Header starts at the first row in grid and stays there */\r\n\tgrid-row: 1;\r\n\r\n\t/* Column starts at 1 and goes to the end since we want the header to span across the page */\r\n\tgrid-column: 1 / span 2;\r\n\t\r\n}\r\n\r\n/* Styles for containers in header */\r\n.app-logo-container,\r\n.user-info-section {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n}\r\n.app-logo-container {\r\n\tflex-basis: 200px;\r\n}\r\n.user-info-section {\r\n\tflex-basis: 500px;\r\n}\r\n\r\n/* Styling for the sidebar */\r\n.project-sidebar {\r\n\tbackground-color: var(--background-clr-3);\r\n\t/* padding: var(--section-padding); */\r\n\tpadding: 16px 0;\r\n\t/* Start and span across row 2, which is our main row. Then position into  */\r\n\tgrid-row: 2;\r\n\tgrid-column: 1;\r\n\tfont-size: 20px;\r\n\ttext-align: center;\r\n}\r\n\r\n/* Styling for the todo count */\r\n.todo-count-el {\r\n\tbackground-color: var(--background-clr-4);\r\n\tcolor: var(--font-clr-1);\r\n\ttext-align: center;\r\n\tfont-weight: 700;\r\n\twidth: 24px;\r\n\theight: 24px;\r\n\tborder-radius: 50%;\r\n\tdisplay: inline-flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n/* Styling for the sections containing hte tabs and the tabs themselves. */\r\n.sidebar-tab-section {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\trow-gap: 10px;\r\n\ttext-align: center;\r\n}\r\n.sidebar-tab-item {\r\n\tfont-size: inherit;\r\n\tborder: 2px solid black;\r\n\tpadding: 6px 6px;\r\n\tmargin: 0 auto;\r\n\tcursor: pointer;\r\n\tborder-radius: 6px;\r\n\ttransition: var(--transition);\r\n}\r\n.main-tab-section .sidebar-tab-item,\r\n.projects-tab-section .sidebar-tab-item {\r\n\twidth: 90%;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\r\n}\r\n.sidebar-tab-item:hover {\r\n\tbackground-color: var(--background-clr-dark);\r\n\t.sidebar-tab-title {\r\n\t\tcolor: var(--font-clr-3);\r\n\t}\r\n}\r\n\r\n.sidebar-tab-item[data-active=\"true\"] {\r\n\tbackground-color: var(--background-clr-dark);\r\n\t.sidebar-tab-title {\r\n\t\tcolor: var(--font-clr-3);\r\n\t}\r\n}\r\n\r\n.sidebar-tab-title {\r\n\ttransition: var(--transition);\r\n\t/* \r\n\tMake the title the full width of the container minus 40px so that todo-count-el has enough space\r\n\tto breathe and not be affected by the length of the title\r\n\t*/\r\n\twidth: calc(100% - 40px);\r\n}\r\n\r\n/* Styling for secondary tab */\r\n.projects-tab-section {\r\n\tmargin-left: 12px; /*Have indent to indicate which tabs are under the project's section*/\r\n\r\n\t/* If height of the project's container goes over 150px, we add a scroll bar for it */\r\n\tmax-height: 150px;\r\n\toverflow-y: auto;\r\n\r\n\tmargin-bottom: 32px;\r\n}\r\n\r\n/* Make it so only the sidebar-tab-item registers clicks */\r\n.sidebar-tab-item > * {\r\n\tpointer-events: None;\r\n}\r\n\r\n/* Style the title \"Projects\" on the sidebar */\r\n#sidebar-section-title {\r\n\tmargin-top: 8px;\r\n\tmargin-bottom: 8px;\r\n\tletter-spacing: var(--letter-spacing);\r\n}\r\n\r\n\r\n/* BOOK MARK: Now create and style the maincontent; don't forget to include the section that tells \r\nthe user if they don't have anything */\r\n\r\n\r\n/* Fancy styling for button: box shadow is just setting the background when you hover */\r\n#create-project-btn {\r\n\tbackground-color: transparent;\r\n\tbox-shadow: inset 0 0 0 0 var(--background-clr-1);\r\n\tcolor: var(--font-clr-1);\r\n\tborder: 2px solid black;\r\n\tpadding: var(--section-padding);\r\n\t\r\n}\r\n#create-project-btn:hover {\r\n\tbox-shadow: inset 0 0 0 120px var(--background-clr-1);\r\n\tcolor: var(--font-clr-3);\t\r\n\tborder-radius: 0;\r\n}\r\n\r\n\r\n/* Styling for main content section: Section where todos are displayed and todo information is displayed */\r\n.project-main-content {\r\n\tbackground-color: var(--background-clr-4);\r\n\tgrid-row: 2;\r\n\tgrid-column: 2 / end;\r\n\r\n\tdisplay: grid;\r\n\tgrid-template-rows: auto 1fr;\r\n}\t\r\n\r\n\r\n\r\n\r\n/* Styling header of project-main-content */\r\n\r\n/* Styling when user is on a main tab */\r\n.main-content-header-main-tab {\r\n\ttext-align: center;\r\n}\r\n\r\n/* Styling when user is on a project tab */\r\n.main-content-header-project-tab {\r\n\tpadding: var(--section-padding);\r\n\twidth: 70%;\r\n\tmargin: 0 auto;\r\n\tgrid-row: 1;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n/* Make it scrollable if it goes past the height content */\r\n#todo-list-container {\r\n\tpadding: var(--section-padding);\r\n\twidth: 70%;\r\n\tmargin: 0 auto;\r\n\tgrid-row: 2;\r\n\trow-gap: 12px;\r\n\r\n\tmax-height: 400px;\r\n\toverflow-y: auto;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n.todo-item {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tpadding: var(--section-padding);\r\n\tbackground-color: var(--todo-background-clr);\r\n\ttransition: var(--transition);\r\n}\r\n.todo-item:hover {\r\n\tbox-shadow: 5px 5px 0 0 rgba(0,0,0,0.5);\r\n}\r\n.todo-item[data-todo-complete=\"true\"] .todo-title-el {\r\n\ttext-decoration: line-through;\t\r\n}\r\n\r\n/* Styling for section that shows when you have no todos or no projects created */\r\n.empty-tab-section {\r\n\tborder: 2px solid black;\r\n\ttext-align: center;\r\n\tfont-weight: 700;\r\n\tletter-spacing: var(--letter-spacing);\r\n}\r\n\r\n#empty-tab-message-primary-el {\r\n\tfont-size: 28px;\r\n\tmargin-bottom: 12px;\r\n}\r\n#empty-tab-message-secondary-el {\r\n\tfont-size: 16px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* Styling for the footer */\r\nfooter {\r\n\tbackground-color: var(--background-clr-2);\r\n\tcolor: var(--font-clr-1);\r\n\ttext-align: center;\r\n\tfont-weight: 700;\r\n\tpadding: var(--section-padding);\r\n\r\n\tgrid-row: 3;\r\n\tgrid-column: 1 / end;\r\n}\r\n\r\n.site-icons {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}());


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectForm": () => (/* binding */ createProjectForm),
/* harmony export */   "createTodoDetailsSection": () => (/* binding */ createTodoDetailsSection),
/* harmony export */   "createTodoForm": () => (/* binding */ createTodoForm)
/* harmony export */ });
// Creates form for making or editing todos
function createTodoForm() {
	const formEl = document.createElement("form");
	formEl.action = "POST";

	// form onsubmit=function for submitting and processing form data
	// Have something in the html to differentiate the form
	formEl.classList.add("modal-form")
	formEl.id = "todo-form";
	formEl.innerHTML = `<fieldset class="input-section">
						<input placeholder="Title: Pay bills" type="text" id="title-field-form" name="title" required>
						<input placeholder="Description: Gas and Electricity" type="text" id="description-field-form" name="description" required>
						<label for="due-date">Due date: <input type="date" class="date-input" id="item-date-el" required></label>
						<div class="priority-btns-section">
							<h2>Priority: </h2>
							<div class="priority-btns-container">
								<button class="light-blue-btn todo-priority-btn" data-active="true" data-priority-value="Low">Low</button>
								<button class="light-blue-btn todo-priority-btn" data-priority-value="Medium">Medium</button>
								<button class="light-blue-btn todo-priority-btn" data-priority-value="High">High</button>
							</div>
						</div>
						<button class="light-blue-btn" type="submit" id="form-submit-btn">Submit</button>
					</fieldset>`;
	return formEl;
}

/*

Could probably use this instead of buttons

<select class="light-blue-select" id="priority-select">
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
  </select>

*/




// Creates form for making or editing projects
function createProjectForm() {
	const formEl = document.createElement("form");
	formEl.action = "POST";
	formEl.classList.add("modal-form")
	formEl.id = "project-form";
	formEl.innerHTML = `<fieldset class="input-section">
							<input placeholder="Title: Pay bills" type="text" id="project-title-field" name="title" required>
							<button class="light-blue-btn" type="submit" id="form-submit-btn">Submit</button>
						</fieldset>`;
	return formEl;
}

// Creates form for seeing the details on a todo
function createTodoDetailsSection() {
	const todoDetailsSection = document.createElement("section");
	todoDetailsSection.id = "todo-details-section";
	todoDetailsSection.innerHTML = `<h3 id="todo-details-title-el">Title: Title of said todo</h3>
					<p id="todo-detail-project-title-el">Project: Some project</p>
					<p id="todo-details-el">Details: of the todo</p>
					<p id="todo-detail-priority-el">Priority: High</p>
					<p id="todo-detail-dueDate-el">Due Date: Sample Date</p>`;
	return todoDetailsSection;
}



/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMainContentSection": () => (/* binding */ createMainContentSection),
/* harmony export */   "createModal": () => (/* binding */ createModal),
/* harmony export */   "createOverlay": () => (/* binding */ createOverlay),
/* harmony export */   "createProjectFooter": () => (/* binding */ createProjectFooter),
/* harmony export */   "createProjectHeader": () => (/* binding */ createProjectHeader),
/* harmony export */   "createProjectSidebar": () => (/* binding */ createProjectSidebar)
/* harmony export */ });
// create the modal
function createOverlay() {
	const overlayEl = document.createElement("div");
	overlayEl.classList.add("overlay");
	return overlayEl;
}

// Create the modal container 
function createModal() {
	const modalEl = document.createElement("div");
	modalEl.classList.add("modal");

	// Create the header for the modal
	const modalHeaderEl = document.createElement("header");
	modalHeaderEl.classList.add("modal-header");
	modalEl.appendChild(modalHeaderEl);

	// Create the title of the header
	const modalHeaderTitleEl = document.createElement("h2");
	modalHeaderTitleEl.id = "modal-header-title-el";
	modalHeaderEl.appendChild(modalHeaderTitleEl);

	// Create the close button for hte modal
	const closeModalBtn = document.createElement("button");
	closeModalBtn.classList.add("light-blue-btn");
	closeModalBtn.id = "close-modal-btn";
	closeModalBtn.textContent = "Close";
	modalHeaderEl.appendChild(closeModalBtn);

	// Create the main-content section where different types of content will be loaded into the modal 
	// depending on what the user does.
	const modalMainContentSection = document.createElement("section");
	modalMainContentSection.classList.add("modal-main-content");

	// Finally add the main-content-section onto the modal itself
	modalEl.appendChild(modalMainContentSection);
	return modalEl;
}



/*
Looks like we should create functions for 
// Make them all hidden at first

- creating the "make project"
- creating "make todo" form
- creating "show todo details"

- loadModalContent(); takes in a string or something from the button, which allows it to decide
what to do content-hidden removal, and then ultimately what display function to run

Then functions:
- displayProjectForm; which could have a boolean for making or editing; we know it's editing 
if a project instance is passed through
- displayTodoForm; which could be making or editing depending if a todo class instance is passed


*/






// Function for creating project header
function createProjectHeader() {
	const headerEl = document.createElement("header");
	headerEl.classList.add("project-header");

	// Create the container that has the app's logo and name
	const appLogoContainer = document.createElement("div");
	appLogoContainer.classList.add("app-logo-container");
	appLogoContainer.innerHTML = `
					<img src="./assets/icons/todo_list_icon.svg" alt="Logo of app">
					<h1 id="app-title-el">Todo list</h1>`;
	headerEl.appendChild(appLogoContainer);
	
	// Create user info section of the header 
	const userInfoSection = document.createElement("div");
	userInfoSection.classList.add("user-info-section");
	userInfoSection.innerHTML = `<h2>Hello, <span id="user-email-el">example@gmail.com</span></h2>
					<a href="#" class="light-blue-btn" id="user-link">Sign out</a>
					<button class="light-blue-btn" id="change-theme-btn">Theme</button>`;
	headerEl.appendChild(userInfoSection);
	return headerEl;
}

// Function for creating the sidebar
function createProjectSidebar() {
	const sidebarEl = document.createElement("section");
	sidebarEl.classList.add("project-sidebar");

	// Create main tab for sidebar
	const mainTabSection = document.createElement("ul");
	mainTabSection.classList.add("sidebar-tab-section", "main-tab-section");	
	mainTabSection.innerHTML = `<li class="sidebar-tab-item" data-active="true" data-tabtype="mainTab" data-tabID="Home"><span class="sidebar-tab-title">Home</span><span class="todo-count-el">0</span></li>
					<li class="sidebar-tab-item" data-tabtype="mainTab" data-tabID="Today"><span class="sidebar-tab-title">Today</span><span class="todo-count-el">0</span></li>
					<li class="sidebar-tab-item" data-tabtype="mainTab" data-tabID="Week"><span class="sidebar-tab-title">Week</span><span class="todo-count-el">0</span></li>`;
	sidebarEl.appendChild(mainTabSection);

	// Create the title "Projects" for a section in the sidebar
	const sidebarSectionTitleEl = document.createElement("h1");
	sidebarSectionTitleEl.id = "sidebar-section-title";
	sidebarSectionTitleEl.textContent = "Projects";
	sidebarEl.appendChild(sidebarSectionTitleEl);

	// Create projects tab section
	const projectsTabSection = document.createElement("ul");
	projectsTabSection.classList.add("sidebar-tab-section", "projects-tab-section");
	sidebarEl.appendChild(projectsTabSection);

	// Create the button for adding/creating a project; add data attribute to help with form logic to see if they're adding or editing a project
	const createProjectBtn = document.createElement("button");
	createProjectBtn.classList.add("sidebar-tab-item");
	createProjectBtn.id = "create-project-btn";
	createProjectBtn.setAttribute("data-form-action", "add-project");
	createProjectBtn.textContent = "Add Project";
	sidebarEl.appendChild(createProjectBtn);

	return sidebarEl;
}

// BOOK MARK: DO THE MAIN CONTENT SECTION; probably going to have the header and title, and stff 

// Function for creating the main display page (section where all of the todos are)
function createMainContentSection() {
	// Create project main content section
	const projectMainContentSection = document.createElement("section");
	projectMainContentSection.classList.add("project-main-content");

	const mainContentHeader = document.createElement("header");
	mainContentHeader.id ="main-content-header";
	mainContentHeader.innerHTML = `<h1 id="tab-title-el">Sample Tab Title</h1>`;
	projectMainContentSection.appendChild(mainContentHeader);

	const todoListContainer = document.createElement("ul");
	todoListContainer.id = "todo-list-container";
	projectMainContentSection.appendChild(todoListContainer);


	return projectMainContentSection;
}

// function for creating project footer
function createProjectFooter() {
	const footerEl = document.createElement("footer");
	footerEl.classList.add("project-footer");

	// Create icon link section/container
	const footerIconContainer = document.createElement("div");
	footerIconContainer.classList.add("footer-icon-container");

	// Create the link and the image for the link
	const iconLink = document.createElement("a");
	const iconImage = document.createElement("img");
	iconImage.src = "./assets/icons/github-mark.svg";
	iconImage.classList.add("site-icons");
	iconLink.appendChild(iconImage);
	footerIconContainer.appendChild(iconLink);
	footerEl.appendChild(footerIconContainer);

	// Create the description of the footer; Create date element
	const footerMessageEl = document.createElement("p");
	footerMessageEl.id = "footer-message-el";
	const currentYear = new Date().getFullYear();
	footerMessageEl.textContent = `All credit and rights reserved to the hot ice cream company - ${currentYear}`;
	footerEl.appendChild(footerMessageEl);	
	return footerEl;
}




/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
// Using composition style of making classes for more flexibility.

class Title {
	constructor(title) {
		this.title = title;
	}
	setTitle(newTitle) {
		this.title = newTitle;
	}
	getTitle() {
		return this.title;
	}
}
class Description {
	constructor(description) {
		this.description = description;
	}
	setDescription(newDescription) {
		this.description = newDescription;
	}
	getDescription() {
		return this.description;
	}
}
class Priority {
	constructor(priority) {
		this.priority = priority;
	}
	setPriority(newPriority) {
		this.priority = newPriority;
	}
	getPriority() {
		return this.priority;
	}
}

// Todo class: dueDate is just the value of the input date element
class Todo {
	constructor(title, description, dueDate, priority) {
		this.title = new Title(title);
		this.description = new Description(description);
		this.dueDate = new Date(dueDate);
		this.priority = new Priority(priority);
	}
}

// The project class: has title, but should have a list of todos 
class Project {
	constructor(title) {
		this.title = new Title(title);
		this.projectTodos = []; 
	}
	getProjectTodos() {
		return this.projectTodos;
	}
}

// Note class; just an extra class, but it's kind of just for demonstration purposes; not actually going to use it
class Note {
	constructor(description) {
		this.description = new Description(description);
	}
}



/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSameDate": () => (/* binding */ isSameDate),
/* harmony export */   "isSevenDaysInFuture": () => (/* binding */ isSevenDaysInFuture)
/* harmony export */ });

// Given dateOne is the starting date, we check if dateTwo is within 7 days in the future
function isSevenDaysInFuture(dateOne, dateTwo) {
  const oneDayMilliseconds = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

  // Convert both dates to UTC to avoid issues with daylight saving time
  const utcDateOne = Date.UTC(dateOne.getUTCFullYear(), dateOne.getUTCMonth(), dateOne.getUTCDate());
  const utcDateTwo = Date.UTC(dateTwo.getUTCFullYear(), dateTwo.getUTCMonth(), dateTwo.getUTCDate());

  const diffDays = Math.floor((utcDateTwo - utcDateOne) / oneDayMilliseconds);

  return diffDays > 0 && diffDays <= 7;
}

// Checks to see if two dates match
function isSameDate(dateOne, dateTwo) {
	const isSameYear = dateOne.getFullYear() === dateTwo.getFullYear();
	const isSameMonth = dateOne.getFullMonth() === dateTwo.getFullMonth();
	const isSameDay = dateOne.getDate() === dateTwo.getDate();
	return isSameYear && isSameMonth && isSameDay;
}



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _createModalContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _initialPageLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);








webfontloader__WEBPACK_IMPORTED_MODULE_1___default().load({
	google: {
		families: ["Roboto", "Open Sans"]
	}
});

// Lists containing project instances; probably are going to act as our 
// databases for the meantime
let projectsList = []; // contains all projects; but can also be used to get all todos

// variables that keep track of whether the user is adding or creating a new instance of project or todo
// values will be "add-project" or "add-todo" or "edit-project" or "edit-todo";
const formInfoModule = {
	"projectFormState":  "",
	"todoFormState":  "",
	"activeProjectIndex": "",
	"activeTodoIndex": "",
}

// IFFE: Contains all dom elements for page
const DOMElementsModule = (() => {
	// Section that contains all all page elements
	const pageContentSection = document.getElementById("content")

	// Create elements that are going to be direct children of pageContentSection
	const overlayEl = (0,_initialPageLoad__WEBPACK_IMPORTED_MODULE_3__.createOverlay)();
	overlayEl.classList.add("content-hidden");
	pageContentSection.appendChild(overlayEl);

	const modalEl = (0,_initialPageLoad__WEBPACK_IMPORTED_MODULE_3__.createModal)();
	modalEl.classList.add("content-hidden");
	pageContentSection.appendChild(modalEl);

	const projectContainer = document.createElement("div");
	projectContainer.classList.add("project-container");
	pageContentSection.appendChild(projectContainer);

	// Get the main content of the modal and add the 3 content types to it
	const modalMainContentSection = modalEl.querySelector(".modal-main-content");

	// Create the content for the modal and hide it all in that modal
	const todoForm = (0,_createModalContent__WEBPACK_IMPORTED_MODULE_2__.createTodoForm)();
	todoForm.classList.add("content-hidden");
	modalMainContentSection.appendChild(todoForm);

	const projectForm = (0,_createModalContent__WEBPACK_IMPORTED_MODULE_2__.createProjectForm)();
	projectForm.classList.add("content-hidden");
	modalMainContentSection.appendChild(projectForm);

	const todoDetailsSection = (0,_createModalContent__WEBPACK_IMPORTED_MODULE_2__.createTodoDetailsSection)();
	todoDetailsSection.classList.add("content-hidden");
	modalMainContentSection.appendChild(todoDetailsSection);

	// Create elements that are going to be placed inside the projectContainer 
	// NOTE: naming "project" here just means another way to think of the main container for the app/project/website,
	//  nothing really to do with the "project" class instance 
	const projectHeader = (0,_initialPageLoad__WEBPACK_IMPORTED_MODULE_3__.createProjectHeader)();
	projectContainer.appendChild(projectHeader);
	const projectSidebar = (0,_initialPageLoad__WEBPACK_IMPORTED_MODULE_3__.createProjectSidebar)();
	projectContainer.appendChild(projectSidebar);
	const projectMainContentSection = (0,_initialPageLoad__WEBPACK_IMPORTED_MODULE_3__.createMainContentSection)();
	projectContainer.appendChild(projectMainContentSection);
	const projectFooter = (0,_initialPageLoad__WEBPACK_IMPORTED_MODULE_3__.createProjectFooter)();
	projectContainer.appendChild(projectFooter);

	// Now even listener for opening project form and closing modal
	const createProjectBtn = document.getElementById("create-project-btn");
	createProjectBtn.addEventListener("click", displayProjectForm);
	const closeModalBtn = document.getElementById("close-modal-btn");
	closeModalBtn.addEventListener("click", closeModal);

	// Add an event listener for the project form
	projectForm.addEventListener("submit", e => {
		// Prevent default form behavior and close modal
		e.preventDefault(); 
		closeModal();

		// Get the input value for the title of the project
		const inputTitle = document.getElementById("project-title-field").value;
		// Then depending on the state of the form either the function to add or edit a project
		if (formInfoModule.projectFormState == "add-project") {
			addProject(inputTitle);
		} else {
			// formInfoModule.projectFormState == "edit-project" in this case
			editProject(inputTitle);
		}

		// Update the sidebar since a project is being added/edited, and then render main content since the header may change
		// NOTE: After we edit and submit, it creates new html, and doesn't know where to put the data-active element
		updateSidebarTabs();

		// If the user was on a project tab, then we should display the main-content for that tab after they submit the form (only happens when the user is editing a project)
		if (formInfoModule.activeProjectIndex !== "") {
			const activeProjectTab = document.querySelector(`li.sidebar-tab-item[data-projectid='${formInfoModule.activeProjectIndex}']`);
			renderMainContent(activeProjectTab);
		}

	})

	return {
		pageContentSection, 
		overlayEl, 
		modalEl,
		projectContainer, 
		todoForm,
		projectForm,
		todoDetailsSection,
		projectHeader, 
		projectSidebar, 
		projectMainContentSection, 
		projectFooter}
})();

/*

+ Rendering and visual side

*/

// Function that displays a project form when user presses create project button
// Will look at the data-form-action of the button that activates it to see if we're adding or editing a project
function displayProjectForm(e) {
	// Show the blur overlay, modal, and the project form 
	DOMElementsModule.overlayEl.classList.remove("content-hidden");
	DOMElementsModule.modalEl.classList.remove("content-hidden");
	DOMElementsModule.projectForm.classList.remove("content-hidden");
	// Put a data-active attribute on the form since it's active
	DOMElementsModule.projectForm.setAttribute("data-active", "true");
	// Get text element for modal's header
	const modalHeaderTitle = document.getElementById("modal-header-title-el");
	// Select the input elements of the project form;
	const inputTitleEl = document.getElementById("project-title-field");
	
	// See if we're editing or adding a project, and update the value in the formInfoModule to keep track of whether 
	// the user is trying to add or edit in the project form.
	formInfoModule.projectFormState = e.currentTarget.dataset.formAction;

	// Depending on whether they're editing a project or adding a new one change the title and input elemenets
	if (formInfoModule.projectFormState == "add-project") {
		modalHeaderTitle.textContent = "Add a new project!";
		inputTitleEl.value = "";
	} else {
		// Editing a project, so find the selected project the user wants by looking at the current tab they're on
		const currentProject = projectsList[formInfoModule.activeProjectIndex];
		modalHeaderTitle.textContent = `Edit Project: '${currentProject.title.getTitle()}'`;
		inputTitleEl.value = `${currentProject.title.getTitle()}`;
	}
}

// Hides modal, overlay, and then all of the other content for the modal
function closeModal() {	
	DOMElementsModule.modalEl.classList.add("content-hidden"); // Now hide the modal and blur overlay
	DOMElementsModule.overlayEl.classList.add("content-hidden");
	DOMElementsModule.projectForm.removeAttribute("data-active"); // Hide all of the modal content and remove data-active from them
	DOMElementsModule.projectForm.classList.add("content-hidden");
	DOMElementsModule.todoForm.removeAttribute("data-active");
	DOMElementsModule.todoForm.classList.add("content-hidden");
	DOMElementsModule.todoDetailsSection.removeAttribute("data-active");
	DOMElementsModule.todoDetailsSection.classList.add("content-hidden");	
}

// Makes tabs on the sidebar interactable; called when the user creates a new project tab in the sidebar too.
function updateSidebarTabs() {
	// Get section in the sidebar that contains user projects tabs
	const projectsTabSection = document.querySelector(".projects-tab-section");
	
	// Update the html in the project section of the sidebar
	projectsTabSection.innerHTML = projectsList.map((project, index) => {
		const projectTitle = project.title.getTitle();
		const projectTodoCount = project.getProjectTodos().length;
		// User could have submitted a todo or project form, which meant they were previously project-tab; If the tab index of a project is the same as the tab of the project the user was previously on, then give it 
		// an active data attribute to show the user they're still on that tab
		

		if (formInfoModule.activeProjectIndex === index) {
			return `<li class="sidebar-tab-item" data-tabtype="projectTab" data-active='true' data-projectid=${index}><span class="sidebar-tab-title">${projectTitle}</span><span class="todo-count-el">${projectTodoCount}</span></li>`;
		} else {
			return `<li class="sidebar-tab-item" data-tabtype="projectTab" data-projectid=${index}><span class="sidebar-tab-title">${projectTitle}</span><span class="todo-count-el">${projectTodoCount}</span></li>`;
		}
	}).join("");

	// Now lets update the html for the main tabs
	const mainTabs = document.querySelectorAll("li[data-tabtype='mainTab']");

	// Update the main tabs to correctly sho the amount of todos available
	mainTabs.forEach(tab => {
		const tabTodos = getMainTabTodos(tab).length;
		const todoCountEl = tab.querySelector(".todo-count-el")
		todoCountEl.textContent = tabTodos;
	})

	// Get all sidebar tab and make sure when they're clicked it gives them data-active attribute, and removes
	// that attribute from all other non-clicked tabs.
	const sidebarTabs = DOMElementsModule.projectSidebar.querySelectorAll("li.sidebar-tab-item");
	sidebarTabs.forEach(tab => {
		tab.addEventListener("click", handleSidebarTabClick);
	});
};

// Renders main content section for a the tab that the user clicked on 
function renderMainContent(tab) {
	const tabType = tab.dataset.tabtype;
	let todos = []; // should be a list of todo class instances

	// Get the header, and then the list element for containing your todo list
	const mainContentHeader = document.getElementById("main-content-header");
	const todoListContainer = document.getElementById("todo-list-container");

	// Get todos and change header, alongside other stuff, depending on the type of tab.
	if (tabType == "mainTab") {
		todos = getMainTabTodos(tab);

		// Create and style header for main tab
		mainContentHeader.innerHTML = `<h1 id="tab-title-el">${tab.dataset.tabid}</h1>`;
		mainContentHeader.classList.add("main-content-header-main-tab");
		mainContentHeader.classList.remove("main-content-header-project-tab");
	} else {
		// Else we are generating content for a project tab
		const currentProject = projectsList[tab.dataset.projectid];
		todos = currentProject.getProjectTodos();

		// Create and style header for project tab
		mainContentHeader.innerHTML = `<h1 id="tab-title-el">${currentProject.title.getTitle()}</h1>
					<div class="project-btns-container">
						<button data-form-action="add-todo" id="add-todo-btn" class="green-btn">Add task</button>
						<button data-form-action="edit-project" id="edit-project-btn" class="gray-btn">Edit Project</button>
						<button id="delete-project-btn" class="red-btn">Delete Project</button>
					</div>`;
		// Add unique header styling for the header when on a project tab
		mainContentHeader.classList.remove("main-content-header-main-tab");		
		mainContentHeader.classList.add("main-content-header-project-tab");		
		
		// Set up event listeners for buttons in the header.
		const addTodoBtn = document.getElementById("add-todo-btn");
		addTodoBtn.addEventListener("click", e => {
			console.log("Add todo button was clicked");
		});

		// Create button for editing projects; the projectid will be put on the button to keep track of the project being edited
		const editProjectBtn = document.getElementById("edit-project-btn");
		editProjectBtn.addEventListener("click", displayProjectForm);

		const deleteProjectBtn = document.getElementById("delete-project-btn");
		deleteProjectBtn.addEventListener("click", e => {
			console.log("User tried to delete project");
		});


		// BOOK MARK: Finish the buttons in this section


	}

	// NOTE: Should probably sort todos by date, but worry about that later

	// Now load the main content, there are todos, then load them, else load a message that tells the user
	// to make some todos or projects
	todoListContainer.innerHTML = todos.map(todo => {
		return `<li class="todo-item" data-todo-complete="false">
						<span class="todo-title-el">${todo.title.getTitle()}</span>
						<div class="todo-btns">
							<button id="toggle-todo-btn" class="green-btn">Mark as Complete</button>
							<button id="todo-details-btn" class="gray-btn">Details</button>
							<button id="edit-todo-btn" class="gray-btn">Edit</button>
							<button id="delete-todo-btn" class="red-btn">Delete</button>
						</div>
					</li>`;
	}).join("");

	// Then set up event listeners for those todo buttons
}



// Application logic side

// Adds event listener to a tab so user and application know which tab the user is currently on
function handleSidebarTabClick(e) {
	const clickedTab = e.currentTarget;
	const sidebarTabs = document.querySelectorAll("li.sidebar-tab-item");
	// Give data active to the clicked tab and remove it from other tabs
	for (let i = 0; i < sidebarTabs.length; i++) {
		if (sidebarTabs[i] == clickedTab) {
			sidebarTabs[i].setAttribute("data-active", "true");
		} else {
			sidebarTabs[i].removeAttribute("data-active");
		}
	}
	// If the clicked tab is a project tab then update the activeProjecIndex, else set the project index to ""
	if (clickedTab.dataset.tabtype == "mainTab") {
		formInfoModule.activeProjectIndex = "";
	} else {
		formInfoModule.activeProjectIndex = parseInt(clickedTab.dataset.projectid); // return as an integer, so that it's easier to work with indices
	}
	// Make it so that clicking on the tab would call the function to render the content
	renderMainContent(clickedTab);
}

// Likely have separate function for rendering main tabs
function getMainTabTodos(tab) {
	const tabID = tab.dataset.tabid;
	let tabTodos = [];
	const currentDate = new Date();

	for (let i = 0; i < projectsList.length; i++) { // Loop through all projects
		const projectTodos = projectsList[i].getProjectTodos(); // Get the list of the todos for current project, loop through them to to see if they match conditions
		for (let i = 0; i < projectTodos.length; i++) { // If they do then add them to tabTodos
			if (tabID == "Home") {
				tabTodos.push(projectTodos[i]);
			} else if (tabID == "Today" && ((0,_utility__WEBPACK_IMPORTED_MODULE_5__.isSameDate)(currentDate, projectTodos[i].dueDate))) {
				tabTodos.push(projectTodos[i]);
			} else {
				// tabID == "Week"
				if ((0,_utility__WEBPACK_IMPORTED_MODULE_5__.isSevenDaysInFuture)(currentDate, projectTodos[i].dueDate)) {
					tabTodos.push(projectTodos[i]);
				}
			}
		}
	}
	return tabTodos;
}

// Creates a new project and adds it to the projectsList array
function addProject(projectTitle) {
	const newProject = new _classes__WEBPACK_IMPORTED_MODULE_4__.Project(projectTitle);
	projectsList.push(newProject);
}

// Finds existing project and edits its details within projectsList;
function editProject(newProjectTitle) {
	// Find the position of the project and modify it	
	projectsList[formInfoModule.activeProjectIndex].title.setTitle(newProjectTitle);
}

window.addEventListener("DOMContentLoaded", () => {
	updateSidebarTabs(); // Since we now have the home, today, and week tabs on the sidebar

})
})();

/******/ })()
;