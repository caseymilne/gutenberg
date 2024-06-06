"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[8133],{"./packages/components/src/context/constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_3:()=>CONNECTED_NAMESPACE,cT:()=>COMPONENT_NAMESPACE,rE:()=>CONNECT_STATIC_NAMESPACE});const COMPONENT_NAMESPACE="data-wp-component",CONNECTED_NAMESPACE="data-wp-c16t",CONNECT_STATIC_NAMESPACE="__contextSystemKey__"},"./packages/components/src/context/context-system-provider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G8:()=>ContextSystemProvider,eb:()=>useComponentsContext});var deepmerge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/deepmerge/dist/cjs.js"),deepmerge__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__),is_plain_object__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/warning/build-module/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/hooks/use-update-effect.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ComponentsContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createContext)({}),useComponentsContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(ComponentsContext);const BaseContextSystemProvider=({children,value})=>{const contextValue=function useContextSystemBridge({value}){const parentContext=useComponentsContext(),valueRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(value);return(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>{fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default()(valueRef.current,value)&&valueRef.current!==value&&!0===globalThis.SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__.Z)(`Please memoize your context: ${JSON.stringify(value)}`)}),[value]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)((()=>deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(null!=parentContext?parentContext:{},null!=value?value:{},{isMergeableObject:is_plain_object__WEBPACK_IMPORTED_MODULE_6__.P})),[parentContext,value])}({value});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ComponentsContext.Provider,{value:contextValue,children})};BaseContextSystemProvider.displayName="BaseContextSystemProvider";const ContextSystemProvider=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.memo)(BaseContextSystemProvider);BaseContextSystemProvider.__docgenInfo={description:"A Provider component that can modify props for connected components within\nthe Context system.\n\n@example\n```jsx\n<ContextSystemProvider value={{ Button: { size: 'small' }}}>\n  <Button>...</Button>\n</ContextSystemProvider>\n```\n\n@template {Record<string, any>} T\n@param {Object}                    options\n@param {import('react').ReactNode} options.children Children to render.\n@param {T}                         options.value    Props to render into connected components.\n@return {JSX.Element} A Provider wrapped component.",methods:[],displayName:"BaseContextSystemProvider"}},"./packages/components/src/context/use-context-system.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useContextSystem});var build_module=__webpack_require__("./packages/warning/build-module/index.js"),context_system_provider=__webpack_require__("./packages/components/src/context/context-system-provider.js"),constants=__webpack_require__("./packages/components/src/context/constants.js");var get_styled_class_name_from_key=__webpack_require__("./packages/components/src/context/get-styled-class-name-from-key.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useContextSystem(props,namespace){const contextSystemProps=(0,context_system_provider.eb)();void 0===namespace&&!0===globalThis.SCRIPT_DEBUG&&(0,build_module.Z)("useContextSystem: Please provide a namespace");const contextProps=contextSystemProps?.[namespace]||{},finalComponentProps={[constants._3]:!0,...(componentName=namespace,{[constants.cT]:componentName})};var componentName;const{_overrides:overrideProps,...otherContextProps}=contextProps,initialMergedProps=Object.entries(otherContextProps).length?Object.assign({},otherContextProps,props):props,classes=(0,use_cx.I)()((0,get_styled_class_name_from_key.l)(namespace),props.className),rendered="function"==typeof initialMergedProps.renderChildren?initialMergedProps.renderChildren(initialMergedProps):initialMergedProps.children;for(const key in initialMergedProps)finalComponentProps[key]=initialMergedProps[key];for(const key in overrideProps)finalComponentProps[key]=overrideProps[key];return void 0!==rendered&&(finalComponentProps.children=rendered),finalComponentProps.className=classes,finalComponentProps}},"./packages/components/src/utils/hooks/use-update-effect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useUpdateEffect(effect,deps){const mounted=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mounted.current)return effect();mounted.current=!0}),deps)}},"./packages/compose/build-module/hooks/use-instance-id/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const instanceMap=new WeakMap;const __WEBPACK_DEFAULT_EXPORT__=function useInstanceId(object,prefix,preferredId){return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(preferredId)return preferredId;const id=function createId(object){const instances=instanceMap.get(object)||0;return instanceMap.set(object,instances+1),instances}(object);return prefix?`${prefix}-${id}`:id}),[object,preferredId,prefix])}},"./packages/deprecated/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>deprecated});var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/hooks/build-module/index.js");const logged=Object.create(null);function deprecated(feature,options={}){const{since,version,alternative,plugin,link,hint}=options,message=`${feature} is deprecated${since?` since version ${since}`:""}${version?` and will be removed${plugin?` from ${plugin}`:""} in version ${version}`:""}.${alternative?` Please use ${alternative} instead.`:""}${link?` See: ${link}`:""}${hint?` Note: ${hint}`:""}`;message in logged||((0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.Kw)("deprecated",feature,options,message),console.warn(message),logged[message]=!0)}},"./packages/icons/build-module/library/check.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})})},"./packages/components/src/context/context-connect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>hasConnectNamespace,Iq:()=>contextConnect,Kc:()=>contextConnectWithoutRef});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/warning/build-module/index.js"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/context/constants.js"),_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/context/get-styled-class-name-from-key.ts");function contextConnect(Component,namespace){return _contextConnect(Component,namespace,{forwardsRef:!0})}function contextConnectWithoutRef(Component,namespace){return _contextConnect(Component,namespace)}function _contextConnect(Component,namespace,options){const WrappedComponent=options?.forwardsRef?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component):Component;void 0===namespace&&!0===globalThis.SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__.Z)("contextConnect: Please provide a namespace");let mergedNamespace=WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]||[namespace];return Array.isArray(namespace)&&(mergedNamespace=[...mergedNamespace,...namespace]),"string"==typeof namespace&&(mergedNamespace=[...mergedNamespace,namespace]),Object.assign(WrappedComponent,{[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]:[...new Set(mergedNamespace)],displayName:namespace,selector:`.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__.l)(namespace)}`})}function getConnectNamespace(Component){if(!Component)return[];let namespaces=[];return Component[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]&&(namespaces=Component[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]),Component.type&&Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]&&(namespaces=Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]),namespaces}function hasConnectNamespace(Component,match){return!!Component&&("string"==typeof match?getConnectNamespace(Component).includes(match):!!Array.isArray(match)&&match.some((result=>getConnectNamespace(Component).includes(result))))}},"./packages/components/src/context/get-styled-class-name-from-key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>getStyledClassNameFromKey});var change_case__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/param-case/dist.es2015/index.js");const getStyledClassNameFromKey=(0,__webpack_require__("./node_modules/memize/dist/index.js").Z)((function getStyledClassName(namespace){return`components-${(0,change_case__WEBPACK_IMPORTED_MODULE_0__.o)(namespace)}`}))},"./packages/components/src/custom-select-control-v2/custom-select.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>CustomSelectContext,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/visually-hidden/component.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/custom-select-control-v2/styles.ts"),_input_control_input_base__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/src/input-control/input-base.tsx"),_select_control_chevron_down__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/src/select-control/chevron-down.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CustomSelectContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createContext)(void 0);function defaultRenderSelectedValue(value){return(Array.isArray(value)?0===value.length:null==value)?(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select an item"):Array.isArray(value)?1===value.length?value[0]:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.gB)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("%s items selected"),value.length):value}const CustomSelectButton=({renderSelectedValue,size="default",store,...restProps})=>{const{value:currentValue}=store.useState(),computedRenderSelectedValue=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>null!=renderSelectedValue?renderSelectedValue:defaultRenderSelectedValue),[renderSelectedValue]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.Ph,{...restProps,size,hasCustomRenderProp:!!renderSelectedValue,store,showOnKeyDown:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:computedRenderSelectedValue(currentValue)})})};function _CustomSelect(props){const{children,hideLabelFromVision=!1,label,size,store,...restProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[hideLabelFromVision?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Z,{as:"label",children:label}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.n5,{store,children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_input_control_input_base__WEBPACK_IMPORTED_MODULE_5__.Z,{__next40pxDefaultSize:!0,size,suffix:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_select_control_chevron_down__WEBPACK_IMPORTED_MODULE_6__.Z,{}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CustomSelectButton,{...restProps,size,store}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.vA,{gutter:12,store,sameWidth:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CustomSelectContext.Provider,{value:{store},children})})]})]})}CustomSelectButton.displayName="CustomSelectButton";const __WEBPACK_DEFAULT_EXPORT__=_CustomSelect;try{_CustomSelect.displayName="_CustomSelect",_CustomSelect.__docgenInfo={description:"",displayName:"_CustomSelect",props:{defaultValue:{defaultValue:null,description:"An optional default value for the control when used in uncontrolled mode.\nIf left `undefined`, the first non-disabled item will be used.",name:"defaultValue",required:!1,type:{name:"string | string[]"}},onChange:{defaultValue:null,description:"A function that receives the new value of the input.",name:"onChange",required:!1,type:{name:"(newValue: string | string[]) => void"}},renderSelectedValue:{defaultValue:null,description:"Can be used to render select UI with custom styled values.",name:"renderSelectedValue",required:!1,type:{name:"(selectedValue: string | string[]) => ReactNode"}},value:{defaultValue:null,description:"The value of the control when used in uncontrolled mode.",name:"value",required:!1,type:{name:"string | string[]"}},children:{defaultValue:null,description:"The child elements. This should be composed of `CustomSelectItem` components.",name:"children",required:!0,type:{name:"ReactNode"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"Used to visually hide the label. It will always be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Accessible label for the control.",name:"label",required:!0,type:{name:"string"}},store:{defaultValue:null,description:"The store object returned by Ariakit's `useSelectStore` hook.",name:"store",required:!0,type:{name:"SelectStore<SelectStoreValue>"}},size:{defaultValue:{value:"default"},description:"The size of the control.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"compact"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/custom-select-control-v2/custom-select.tsx#_CustomSelect"]={docgenInfo:_CustomSelect.__docgenInfo,name:"_CustomSelect",path:"packages/components/src/custom-select-control-v2/custom-select.tsx#_CustomSelect"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/custom-select-control-v2/item.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/icons/build-module/icon/index.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/icons/build-module/library/check.js"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/custom-select-control-v2/styles.ts"),_custom_select__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/custom-select-control-v2/custom-select.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function CustomSelectItem({children,...props}){const customSelectContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_custom_select__WEBPACK_IMPORTED_MODULE_2__.T);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__.Ql,{store:customSelectContext?.store,...props,children:[null!=children?children:props.value,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.U6,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__.Z,{icon:_wordpress_icons__WEBPACK_IMPORTED_MODULE_5__.Z})})]})}CustomSelectItem.displayName="CustomSelectItem",CustomSelectItem.displayName="CustomSelectControlV2.Item";const __WEBPACK_DEFAULT_EXPORT__=CustomSelectItem;try{CustomSelectItem.displayName="CustomSelectControlV2.Item",CustomSelectItem.__docgenInfo={description:"",displayName:"CustomSelectControlV2.Item",props:{value:{defaultValue:null,description:"The value of the select item. This will be used as the children if\nchildren are left `undefined`.",name:"value",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"The children to display for each select item. The `value` will be\nused if left `undefined`.",name:"children",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"If true, the item will be disabled.\n\nYou will need to add your own styles (e.g. reduced opacity) to visually show that they are disabled.",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/custom-select-control-v2/item.tsx#CustomSelectControlV2.Item"]={docgenInfo:CustomSelectControlV2.Item.__docgenInfo,name:"CustomSelectControlV2.Item",path:"packages/components/src/custom-select-control-v2/item.tsx#CustomSelectControlV2.Item"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/custom-select-control-v2/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F9:()=>WithHintWrapper,FY:()=>SelectedExperimentalHintItem,Ph:()=>Select,Ql:()=>SelectItem,U6:()=>SelectedItemCheck,cz:()=>ExperimentalHintItem,n5:()=>SelectLabel,vA:()=>SelectPopover});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/select/select-label.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/react-core/esm/select/select.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@ariakit/react-core/esm/select/select-popover.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@ariakit/react-core/esm/select/select-item.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@ariakit/react-core/esm/select/select-item-check.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/utils/colors-values.js"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/src/utils/config-values.js"),_utils_space__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/utils/space.ts");const ITEM_PADDING=(0,_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(2),WithHintWrapper=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1p3eej77"})({name:"iii8mv",styles:"display:flex;justify-content:space-between;flex:1"}),SelectedExperimentalHintItem=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("span",{target:"e1p3eej76"})("color:",_utils__WEBPACK_IMPORTED_MODULE_2__.D.theme.gray[600],";margin-inline-start:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(2),";"),ExperimentalHintItem=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("span",{target:"e1p3eej75"})("color:",_utils__WEBPACK_IMPORTED_MODULE_2__.D.theme.gray[600],";text-align:right;margin-inline-end:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(1),";"),SelectLabel=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)(_ariakit_react__WEBPACK_IMPORTED_MODULE_3__.n,{target:"e1p3eej74"})("font-size:11px;font-weight:500;line-height:1.4;text-transform:uppercase;margin-bottom:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(2),";"),Select=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)(_ariakit_react__WEBPACK_IMPORTED_MODULE_4__.P,{shouldForwardProp:prop=>"hasCustomRenderProp"!==prop,target:"e1p3eej73"})((({size,hasCustomRenderProp})=>{const heightProperty=hasCustomRenderProp?"minHeight":"height";return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.iv)("display:flex;align-items:center;justify-content:space-between;background-color:",_utils__WEBPACK_IMPORTED_MODULE_2__.D.theme.background,";border:none;cursor:pointer;font-size:",_utils__WEBPACK_IMPORTED_MODULE_6__.Z.fontSize,";width:100%;&[data-focus-visible]{outline:none;}",(()=>{const sizes={compact:{[heightProperty]:32,paddingInlineStart:(0,_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(2),paddingInlineEnd:(0,_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(1)},default:{[heightProperty]:40,paddingInlineStart:(0,_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(4),paddingInlineEnd:(0,_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(3)},small:{[heightProperty]:24,paddingInlineStart:(0,_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(2),paddingInlineEnd:(0,_utils_space__WEBPACK_IMPORTED_MODULE_1__.D)(1),fontSize:11}};return sizes[size]||sizes.default})(),";","")}),""),SelectPopover=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)(_ariakit_react__WEBPACK_IMPORTED_MODULE_7__.v,{target:"e1p3eej72"})("border-radius:2px;background:",_utils__WEBPACK_IMPORTED_MODULE_2__.D.theme.background,";border:1px solid ",_utils__WEBPACK_IMPORTED_MODULE_2__.D.theme.foreground,";&[data-focus-visible]{outline:none;}"),SelectItem=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)(_ariakit_react__WEBPACK_IMPORTED_MODULE_8__.Q,{target:"e1p3eej71"})("display:flex;align-items:center;justify-content:space-between;padding:",ITEM_PADDING,";font-size:",_utils__WEBPACK_IMPORTED_MODULE_6__.Z.fontSize,";line-height:2.15rem;&[data-active-item]{background-color:",_utils__WEBPACK_IMPORTED_MODULE_2__.D.theme.gray[300],";}"),SelectedItemCheck=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)(_ariakit_react__WEBPACK_IMPORTED_MODULE_9__.v,{target:"e1p3eej70"})("display:flex;align-items:center;margin-inline-start:",ITEM_PADDING,";font-size:24px;")},"./packages/components/src/view/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PolymorphicDiv=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e19lxcc00"})("");function UnforwardedView({as,...restProps},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PolymorphicDiv,{as,ref,...restProps})}UnforwardedView.displayName="UnforwardedView";const View=Object.assign((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(UnforwardedView),{selector:".components-view"}),__WEBPACK_DEFAULT_EXPORT__=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.\n\n```jsx\nimport { View } from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<View>\n\t\t\t Code is Poetry\n\t\t</View>\n\t);\n}\n```",displayName:"View",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}try{component.displayName="component",component.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.\n\n```jsx\nimport { View } from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<View>\n\t\t\t Code is Poetry\n\t\t</View>\n\t);\n}\n```",displayName:"component",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#component"]={docgenInfo:component.__docgenInfo,name:"component",path:"packages/components/src/view/component.tsx#component"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/visually-hidden/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>visually_hidden_component});var use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts");const visuallyHidden={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var component=__webpack_require__("./packages/components/src/view/component.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedVisuallyHidden(props,forwardedRef){const{style:styleProp,...contextProps}=(0,use_context_system.y)(props,"VisuallyHidden");return(0,jsx_runtime.jsx)(component.Z,{ref:forwardedRef,...contextProps,style:{...visuallyHidden,...styleProp||{}}})}UnconnectedVisuallyHidden.displayName="UnconnectedVisuallyHidden";const VisuallyHidden=(0,context_connect.Iq)(UnconnectedVisuallyHidden,"VisuallyHidden"),visually_hidden_component=VisuallyHidden;try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"`VisuallyHidden` is a component used to render text intended to be visually\nhidden, but will show for alternate devices, for example a screen reader.\n\n```jsx\nimport { VisuallyHidden } from `@wordpress/components`;\n\nfunction Example() {\n  return (\n    <VisuallyHidden>\n      <label>Code is Poetry</label>\n    </VisuallyHidden>\n  );\n}\n```",displayName:"VisuallyHidden",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/visually-hidden/component.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"packages/components/src/visually-hidden/component.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}}}]);