(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=[\"attrs\",\"props\",\"domProps\"],toArrayMerge=[\"class\",\"style\",\"directives\"],functionalMerge=[\"on\",\"nativeOn\"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=[].concat(d,e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=[].concat(g,h)}else c[b][f]=a[b][f];}else if(\"hook\"===b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;\n\n\n//# sourceURL=webpack:///./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js?");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/parser/Parser.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/parser/Parser.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault.js */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\").default;\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n__webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n__webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n__webpack_require__(/*! core-js/modules/es.array.splice.js */ \"./node_modules/core-js/modules/es.array.splice.js\");\n__webpack_require__(/*! core-js/modules/es.error.cause.js */ \"./node_modules/core-js/modules/es.error.cause.js\");\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n__webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n__webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty.js */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray.js */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\"));\nvar _babelHelperVueJsxMergeProps = _interopRequireDefault(__webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ \"./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js\"));\nvar _index = __webpack_require__(/*! @/utils/index */ \"./src/utils/index.js\");\nvar _render = _interopRequireDefault(__webpack_require__(/*! @/components/render/render.js */ \"./src/components/render/render.js\"));\nvar _auth = __webpack_require__(/*! @/utils/auth */ \"./src/utils/auth.js\");\nvar ruleTrigger = {\n  'el-input': 'blur',\n  'el-input-number': 'blur',\n  'el-select': 'change',\n  'el-radio-group': 'change',\n  'el-checkbox-group': 'change',\n  'el-cascader': 'change',\n  'el-time-picker': 'change',\n  'el-date-picker': 'change',\n  'el-rate': 'change'\n};\nvar layouts = {\n  colFormItem: function colFormItem(h, scheme) {\n    var config = scheme.__config__;\n    var listeners = buildListeners.call(this, scheme);\n    var labelWidth = config.labelWidth ? \"\".concat(config.labelWidth, \"px\") : null;\n    if (config.showLabel === false) labelWidth = '0';\n    return h(\"el-col\", {\n      \"attrs\": {\n        \"span\": config.span\n      }\n    }, [h(\"el-form-item\", {\n      \"attrs\": {\n        \"label-width\": labelWidth,\n        \"prop\": scheme.__vModel__,\n        \"label\": config.showLabel ? config.label : ''\n      }\n    }, [h(_render.default, (0, _babelHelperVueJsxMergeProps.default)([{\n      \"attrs\": {\n        \"conf\": scheme\n      }\n    }, {\n      \"on\": listeners\n    }]))])]);\n  },\n  rowFormItem: function rowFormItem(h, scheme) {\n    var child = renderChildren.apply(this, arguments);\n    if (scheme.type === 'flex') {\n      child = h(\"el-row\", {\n        \"attrs\": {\n          \"type\": scheme.type,\n          \"justify\": scheme.justify,\n          \"align\": scheme.align\n        }\n      }, [child]);\n    }\n    return h(\"el-col\", {\n      \"attrs\": {\n        \"span\": scheme.span\n      }\n    }, [h(\"el-row\", {\n      \"attrs\": {\n        \"gutter\": scheme.gutter\n      }\n    }, [child])]);\n  }\n};\nfunction renderFrom(h) {\n  var formConfCopy = this.formConfCopy;\n  return h(\"el-row\", {\n    \"attrs\": {\n      \"gutter\": formConfCopy.gutter\n    }\n  }, [h(\"el-form\", (0, _babelHelperVueJsxMergeProps.default)([{\n    \"attrs\": {\n      \"size\": formConfCopy.size,\n      \"label-position\": formConfCopy.labelPosition,\n      \"disabled\": formConfCopy.disabled,\n      \"label-width\": \"\".concat(formConfCopy.labelWidth, \"px\")\n    },\n    \"ref\": formConfCopy.formRef\n  }, {\n    \"props\": {\n      model: this[formConfCopy.formModel]\n    }\n  }, {\n    \"attrs\": {\n      \"rules\": this[formConfCopy.formRules]\n    }\n  }]), [renderFormItem.call(this, h, formConfCopy.fields), formConfCopy.formBtns && formBtns.call(this, h)])]);\n}\nfunction formBtns(h) {\n  return h(\"el-col\", [h(\"el-form-item\", {\n    \"attrs\": {\n      \"size\": \"large\"\n    }\n  }, [h(\"el-button\", {\n    \"attrs\": {\n      \"type\": \"primary\"\n    },\n    \"on\": {\n      \"click\": this.submitForm\n    }\n  }, [\"\\u63D0\\u4EA4\"]), h(\"el-button\", {\n    \"on\": {\n      \"click\": this.resetForm\n    }\n  }, [\"\\u91CD\\u7F6E\"])])]);\n}\nfunction renderFormItem(h, elementList) {\n  var _this = this;\n  var that = this;\n  var data = this[this.formConf.formModel];\n  // const formRef = that.$refs[that.formConf.formRef] // 这里直接添加有问题，此时还找不到表单 $refs\n  return elementList.map(function (scheme) {\n    var config = scheme.__config__;\n    var layout = layouts[config.layout];\n\n    // edit by 岳阳医院，解决 el-upload 上传的问题\n    // 参考 https://github.com/JakHuang/form-generator/blob/master/src/components/parser/example/Index.vue 实现\n    var vModel = scheme.__vModel__;\n    var val = data[vModel];\n    if (scheme.__config__.tag === 'el-upload') {\n      // 回显图片\n      scheme['file-list'] = (val || []).map(function (url) {\n        return {\n          name: url,\n          url: url\n        };\n      });\n      // 上传地址 + 请求头\n      scheme.action = \"http://127.0.0.1:48080\" + \"/admin-api/infra/file/upload\";\n      scheme.headers = {\n        Authorization: \"Bearer \" + (0, _auth.getAccessToken)()\n      };\n      // 注意 on-success 不能绑定箭头函数！！！\n      scheme['on-success'] = function (response, file, fileList) {\n        if (response.code !== 0) {\n          return;\n        }\n        // 添加到 data 中\n        var prev = data[vModel] || [];\n        this.$set(data, vModel, [].concat((0, _toConsumableArray2.default)(prev), [response.data]));\n        // 发起表单校验\n        that.$refs[that.formConf.formRef].validateField(vModel);\n      };\n      // 注意 on-remove 不能绑定箭头函数！！！\n      scheme['on-remove'] = function (file, fileList) {\n        // 移除从 data 中\n        var prev = data[vModel] || [];\n        var index = prev.indexOf(file.response.data);\n        if (index === -1) {\n          return;\n        }\n        prev.splice(index, 1); // 直接移除即可，无需重复 set，因为 array 是引用\n        // 发起表单校验\n        that.$refs[that.formConf.formRef].validateField(vModel);\n      };\n    }\n    if (layout) {\n      return layout.call(_this, h, scheme);\n    }\n    throw new Error(\"\\u6CA1\\u6709\\u4E0E\".concat(config.layout, \"\\u5339\\u914D\\u7684layout\"));\n  });\n}\nfunction renderChildren(h, scheme) {\n  var config = scheme.__config__;\n  if (!Array.isArray(config.children)) return null;\n  return renderFormItem.call(this, h, config.children);\n}\nfunction setValue(event, config, scheme) {\n  this.$set(config, 'defaultValue', event);\n  this.$set(this[this.formConf.formModel], scheme.__vModel__, event);\n}\nfunction buildListeners(scheme) {\n  var _this2 = this;\n  var config = scheme.__config__;\n  var methods = this.formConf.__methods__ || {};\n  var listeners = {};\n\n  // 给__methods__中的方法绑定this和event\n  Object.keys(methods).forEach(function (key) {\n    listeners[key] = function (event) {\n      return methods[key].call(_this2, event);\n    };\n  });\n  // 响应 render.js 中的 vModel $emit('input', val)\n  listeners.input = function (event) {\n    return setValue.call(_this2, event, config, scheme);\n  };\n  return listeners;\n}\nvar _default = {\n  components: {\n    render: _render.default\n  },\n  props: {\n    formConf: {\n      type: Object,\n      required: true\n    }\n  },\n  data: function data() {\n    var _data;\n    var data = (_data = {\n      formConfCopy: (0, _index.deepClone)(this.formConf)\n    }, (0, _defineProperty2.default)(_data, this.formConf.formModel, {}), (0, _defineProperty2.default)(_data, this.formConf.formRules, {}), _data);\n    this.initFormData(data.formConfCopy.fields, data[this.formConf.formModel]);\n    this.buildRules(data.formConfCopy.fields, data[this.formConf.formRules]);\n    return data;\n  },\n  methods: {\n    initFormData: function initFormData(componentList, formData) {\n      var _this3 = this;\n      componentList.forEach(function (cur) {\n        var config = cur.__config__;\n        if (cur.__vModel__) formData[cur.__vModel__] = config.defaultValue;\n        if (config.children) _this3.initFormData(config.children, formData);\n      });\n    },\n    buildRules: function buildRules(componentList, rules) {\n      var _this4 = this;\n      componentList.forEach(function (cur) {\n        var config = cur.__config__;\n        if (Array.isArray(config.regList)) {\n          if (config.required) {\n            var required = {\n              required: config.required,\n              message: cur.placeholder\n            };\n            if (Array.isArray(config.defaultValue)) {\n              required.type = 'array';\n              required.message = \"\\u8BF7\\u81F3\\u5C11\\u9009\\u62E9\\u4E00\\u4E2A\".concat(config.label);\n            }\n            required.message === undefined && (required.message = \"\".concat(config.label, \"\\u4E0D\\u80FD\\u4E3A\\u7A7A\"));\n            config.regList.push(required);\n          }\n          rules[cur.__vModel__] = config.regList.map(function (item) {\n            item.pattern && (item.pattern = eval(item.pattern));\n            item.trigger = ruleTrigger && ruleTrigger[config.tag];\n            return item;\n          });\n        }\n        if (config.children) _this4.buildRules(config.children, rules);\n      });\n    },\n    resetForm: function resetForm() {\n      this.formConfCopy = (0, _index.deepClone)(this.formConf);\n      this.$refs[this.formConf.formRef].resetFields();\n    },\n    submitForm: function submitForm() {\n      var _this5 = this;\n      this.$refs[this.formConf.formRef].validate(function (valid) {\n        if (!valid) return false;\n        // 触发 submit 事件\n        // update by 岳阳医院\n        // this.$emit('submit', this[this.formConf.formModel])\n        _this5.$emit('submit', {\n          conf: _this5.formConfCopy,\n          values: _this5[_this5.formConf.formModel]\n        });\n        return true;\n      });\n    }\n  },\n  render: function render(h) {\n    return renderFrom.call(this, h);\n  }\n};\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/components/parser/Parser.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/api/bpm/definition.js":
/*!***********************************!*\
  !*** ./src/api/bpm/definition.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault.js */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\").default;\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getProcessDefinitionBpmnXML = getProcessDefinitionBpmnXML;\nexports.getProcessDefinitionList = getProcessDefinitionList;\nexports.getProcessDefinitionPage = getProcessDefinitionPage;\nvar _request = _interopRequireDefault(__webpack_require__(/*! @/utils/request */ \"./src/utils/request.js\"));\nfunction getProcessDefinitionPage(query) {\n  return (0, _request.default)({\n    url: '/bpm/process-definition/page',\n    method: 'get',\n    params: query\n  });\n}\nfunction getProcessDefinitionList(query) {\n  return (0, _request.default)({\n    url: '/bpm/process-definition/list',\n    method: 'get',\n    params: query\n  });\n}\nfunction getProcessDefinitionBpmnXML(id) {\n  return (0, _request.default)({\n    url: '/bpm/process-definition/get-bpmn-xml?id=' + id,\n    method: 'get'\n  });\n}\n\n//# sourceURL=webpack:///./src/api/bpm/definition.js?");

/***/ }),

/***/ "./src/components/parser/Parser.vue":
/*!******************************************!*\
  !*** ./src/components/parser/Parser.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Parser.vue?vue&type=script&lang=js& */ \"./src/components/parser/Parser.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\nvar render, staticRenderFns\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _Parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/parser/Parser.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/parser/Parser.vue?");

/***/ }),

/***/ "./src/components/parser/Parser.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/parser/Parser.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Parser.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/parser/Parser.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Parser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/parser/Parser.vue?");

/***/ })

}]);