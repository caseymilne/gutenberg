"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[175],{"./packages/element/build-module/platform.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={OS:"web",select:spec=>"web"in spec?spec.web:spec.default,isWeb:!0}},"./packages/components/src/unit-control/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{dO:()=>UnitControl,ZP:()=>unit_control});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),react=__webpack_require__("./node_modules/react/index.js"),i18n_build_module=__webpack_require__("./packages/i18n/build-module/index.js"),unit_control_styles=__webpack_require__("./packages/components/src/unit-control/styles/unit-control-styles.ts"),utils=__webpack_require__("./packages/components/src/unit-control/utils.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnitSelectControl({className,isUnitSelectTabbable:isTabbable=!0,onChange,size="default",unit="px",units=utils.Ui,...props},ref){if(!(0,utils.wW)(units)||1===units?.length)return(0,jsx_runtime.jsx)(unit_control_styles.Vh,{className:"components-unit-control__unit-label",selectSize:size,children:unit});const classes=(0,clsx.Z)("components-unit-control__select",className);return(0,jsx_runtime.jsx)(unit_control_styles.mY,{ref,className:classes,onChange:event=>{const{value:unitValue}=event.target,data=units.find((option=>option.value===unitValue));onChange?.(unitValue,{event,data})},selectSize:size,tabIndex:isTabbable?void 0:-1,value:unit,...props,children:units.map((option=>(0,jsx_runtime.jsx)("option",{value:option.value,children:option.label},option.value)))})}UnitSelectControl.displayName="UnitSelectControl";const unit_select_control=(0,react.forwardRef)(UnitSelectControl);var use_controlled_state=__webpack_require__("./packages/components/src/utils/hooks/use-controlled-state.js"),strings=__webpack_require__("./packages/components/src/utils/strings.ts"),use_deprecated_props=__webpack_require__("./packages/components/src/utils/use-deprecated-props.ts");function UnforwardedUnitControl(unitControlProps,forwardedRef){const{__unstableStateReducer,autoComplete="off",children,className,disabled=!1,disableUnits=!1,isPressEnterToChange=!1,isResetValueOnUnitChange=!1,isUnitSelectTabbable=!0,label,onChange:onChangeProp,onUnitChange,size="default",unit:unitProp,units:unitsProp=utils.Ui,value:valueProp,onFocus:onFocusProp,...props}=(0,use_deprecated_props.s)(unitControlProps);"unit"in unitControlProps&&(0,build_module.Z)("UnitControl unit prop",{since:"5.6",hint:"The unit should be provided within the `value` prop.",version:"6.2"});const nonNullValueProp=null!=valueProp?valueProp:void 0,[units,reFirstCharacterOfUnits]=(0,react.useMemo)((()=>{const list=(0,utils.e_)(nonNullValueProp,unitProp,unitsProp),[{value:firstUnitValue=""}={},...rest]=list,firstCharacters=rest.reduce(((carry,{value})=>{const first=(0,strings.hr)(value?.substring(0,1)||"");return carry.includes(first)?carry:`${carry}|${first}`}),(0,strings.hr)(firstUnitValue.substring(0,1)));return[list,new RegExp(`^(?:${firstCharacters})$`,"i")]}),[nonNullValueProp,unitProp,unitsProp]),[parsedQuantity,parsedUnit]=(0,utils.hy)(nonNullValueProp,unitProp,units),[unit,setUnit]=(0,use_controlled_state.Z)(1===units.length?units[0].value:unitProp,{initial:parsedUnit,fallback:""});(0,react.useEffect)((()=>{void 0!==parsedUnit&&setUnit(parsedUnit)}),[parsedUnit,setUnit]);const classes=(0,clsx.Z)("components-unit-control","components-unit-control-wrapper",className);let handleOnKeyDown;!disableUnits&&isUnitSelectTabbable&&units.length&&(handleOnKeyDown=event=>{props.onKeyDown?.(event),!event.metaKey&&reFirstCharacterOfUnits.test(event.key)&&refInputSuffix.current?.focus()});const refInputSuffix=(0,react.useRef)(null),inputSuffix=disableUnits?null:(0,jsx_runtime.jsx)(unit_select_control,{ref:refInputSuffix,"aria-label":(0,i18n_build_module.__)("Select unit"),disabled,isUnitSelectTabbable,onChange:(nextUnitValue,changeProps)=>{const{data}=changeProps;let nextValue=`${null!=parsedQuantity?parsedQuantity:""}${nextUnitValue}`;isResetValueOnUnitChange&&void 0!==data?.default&&(nextValue=`${data.default}${nextUnitValue}`),onChangeProp?.(nextValue,changeProps),onUnitChange?.(nextUnitValue,changeProps),setUnit(nextUnitValue)},size:["small","compact"].includes(size)||"default"===size&&!props.__next40pxDefaultSize?"small":"default",unit,units,onFocus:onFocusProp,onBlur:unitControlProps.onBlur});let step=props.step;if(!step&&units){var _activeUnit$step;const activeUnit=units.find((option=>option.value===unit));step=null!==(_activeUnit$step=activeUnit?.step)&&void 0!==_activeUnit$step?_activeUnit$step:1}return(0,jsx_runtime.jsx)(unit_control_styles.Ke,{...props,autoComplete,className:classes,disabled,spinControls:"none",isPressEnterToChange,label,onKeyDown:handleOnKeyDown,onChange:(nextQuantityValue,changeProps)=>{if(""===nextQuantityValue||null==nextQuantityValue)return void onChangeProp?.("",changeProps);const onChangeValue=(0,utils.Gl)(nextQuantityValue,units,parsedQuantity,unit).join("");onChangeProp?.(onChangeValue,changeProps)},ref:forwardedRef,size,suffix:inputSuffix,type:isPressEnterToChange?"text":"number",value:null!=parsedQuantity?parsedQuantity:"",step,onFocus:onFocusProp,__unstableStateReducer})}UnforwardedUnitControl.displayName="UnforwardedUnitControl";const UnitControl=(0,react.forwardRef)(UnforwardedUnitControl),unit_control=UnitControl;try{UnitControl.displayName="UnitControl",UnitControl.__docgenInfo={description:"`UnitControl` allows the user to set a numeric quantity as well as a unit (e.g. `px`).\n\n\n```jsx\nimport { __experimentalUnitControl as UnitControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst Example = () => {\n  const [ value, setValue ] = useState( '10px' );\n\n  return <UnitControl onChange={ setValue } value={ value } />;\n};\n```",displayName:"UnitControl",props:{size:{defaultValue:{value:"'default'"},description:"Adjusts the size of the input.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"compact"'},{value:'"__unstable-large"'}]}},onChange:{defaultValue:null,description:"A callback function invoked when the value is changed.\nA function that receives the value of the input.",name:"onChange",required:!1,type:{name:"UnitControlOnChangeCallback & InputChangeCallback<{}>"}},isUnitSelectTabbable:{defaultValue:{value:"true"},description:"Whether the control can be focused via keyboard navigation.",name:"isUnitSelectTabbable",required:!1,type:{name:"boolean"}},units:{defaultValue:{value:"CSS_UNITS"},description:"Available units to select from.",name:"units",required:!1,type:{name:"WPUnitControlUnit[]"}},label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:"Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n@example import {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>",name:"prefix",required:!1,type:{name:"ReactNode"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:'(dragProps: Omit<FullGestureState<"drag">, "event"> & { event: unknown; }) => void'}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:'(dragProps: Omit<FullGestureState<"drag">, "event"> & { event: unknown; }) => void'}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:'(dragProps: Omit<FullGestureState<"drag">, "event"> & { event: unknown; }) => void'}},step:{defaultValue:{value:"1"},description:"Amount by which the `value` is changed when incrementing/decrementing.\nIt is also a factor in validation as `value` must be a multiple of `step`\n(offset by `min`, if specified) to be valid. Accepts the special string value `any`\nthat voids the validation constraint and causes stepping actions to increment/decrement by `1`.",name:"step",required:!1,type:{name:"string | number"}},max:{defaultValue:{value:"Infinity"},description:"The maximum `value` allowed.",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"-Infinity"},description:"The minimum `value` allowed.",name:"min",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"If true, the `input` will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:'The value of the input.\nCurrent value. If passed as a string, the current unit will be inferred from this value.\nFor example, a `value` of "50%" will set the current unit to `%`.',name:"value",required:!1,type:{name:"string | number"}},required:{defaultValue:{value:"false"},description:"If `true` enforces a valid number within the control's min/max range.\nIf `false` allows an empty string as a valid value.",name:"required",required:!1,type:{name:"boolean"}},isDragEnabled:{defaultValue:{value:"true"},description:"If true, enables mouse drag gestures.",name:"isDragEnabled",required:!1,type:{name:"boolean"}},__next36pxDefaultSize:{defaultValue:{value:"false"},description:"Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated",name:"__next36pxDefaultSize",required:!1,type:{name:"boolean"}},__next40pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next40pxDefaultSize",required:!1,type:{name:"boolean"}},__unstableInputWidth:{defaultValue:null,description:"",name:"__unstableInputWidth",required:!1,type:{name:"Width<string | number>"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"'top'"},description:"The position of the label.",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"edge"'},{value:'"side"'}]}},help:{defaultValue:null,description:"Additional description for the control.\n\nThe element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",name:"help",required:!1,type:{name:"ReactNode"}},dragDirection:{defaultValue:{value:"'n'"},description:"Determines the drag axis.",name:"dragDirection",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"n"'},{value:'"e"'},{value:'"w"'}]}},dragThreshold:{defaultValue:{value:"10"},description:"If `isDragEnabled` is true, this controls the amount of `px` to have been dragged before\nthe drag gesture is actually triggered.",name:"dragThreshold",required:!1,type:{name:"number"}},isPressEnterToChange:{defaultValue:{value:"false"},description:"If true, the `ENTER` key press is required in order to trigger an `onChange`.\nIf enabled, a change is also triggered when tabbing away (`onBlur`).",name:"isPressEnterToChange",required:!1,type:{name:"boolean"}},onValidate:{defaultValue:null,description:"",name:"onValidate",required:!1,type:{name:"(nextValue: string, event?: SyntheticEvent<HTMLInputElement, Event>) => void"}},__unstableStateReducer:{defaultValue:null,description:"",name:"__unstableStateReducer",required:!1,type:{name:"StateReducer"}},hideHTMLArrows:{defaultValue:{value:"false"},description:"If true, the default `input` HTML arrows will be hidden.\n@deprecated",name:"hideHTMLArrows",required:!1,type:{name:"boolean"}},isShiftStepEnabled:{defaultValue:{value:"true"},description:"If true, pressing `UP` or `DOWN` along with the `SHIFT` key will increment the\nvalue by the `shiftStep` value.",name:"isShiftStepEnabled",required:!1,type:{name:"boolean"}},shiftStep:{defaultValue:{value:"10"},description:"Amount to increment by when the `SHIFT` key is held down. This shift value is\na multiplier to the `step` value. For example, if the `step` value is `5`,\nand `shiftStep` is `10`, each jump would increment/decrement by `50`.",name:"shiftStep",required:!1,type:{name:"number"}},spinFactor:{defaultValue:{value:"1"},description:'Optional multiplication factor in spin changes. i.e. A spin changes\nby `spinFactor * step` (if `step` is "any", 1 is used instead).',name:"spinFactor",required:!1,type:{name:"number"}},disableUnits:{defaultValue:{value:"false"},description:"If `true`, the unit `<select>` is hidden.",name:"disableUnits",required:!1,type:{name:"boolean"}},isResetValueOnUnitChange:{defaultValue:{value:"false"},description:"If `true`, and the selected unit provides a `default` value, this value is set\nwhen changing units.",name:"isResetValueOnUnitChange",required:!1,type:{name:"boolean"}},onUnitChange:{defaultValue:null,description:"Callback when the `unit` changes.",name:"onUnitChange",required:!1,type:{name:"UnitControlOnChangeCallback"}},unit:{defaultValue:null,description:"Current unit. _Note: this prop is deprecated. Instead, provide a unit with a value through the `value` prop._\n@deprecated",name:"unit",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/unit-control/index.tsx#UnitControl"]={docgenInfo:UnitControl.__docgenInfo,name:"UnitControl",path:"packages/components/src/unit-control/index.tsx#UnitControl"})}catch(__react_docgen_typescript_loader_error){}try{parseQuantityAndUnitFromRawValue.displayName="parseQuantityAndUnitFromRawValue",parseQuantityAndUnitFromRawValue.__docgenInfo={description:"Parses a quantity and unit from a raw string value, given a list of allowed\nunits and otherwise falling back to the default unit.",displayName:"parseQuantityAndUnitFromRawValue",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/unit-control/index.tsx#parseQuantityAndUnitFromRawValue"]={docgenInfo:parseQuantityAndUnitFromRawValue.__docgenInfo,name:"parseQuantityAndUnitFromRawValue",path:"packages/components/src/unit-control/index.tsx#parseQuantityAndUnitFromRawValue"})}catch(__react_docgen_typescript_loader_error){}try{useCustomUnits.displayName="useCustomUnits",useCustomUnits.__docgenInfo={description:"Custom hook to retrieve and consolidate units setting from add_theme_support().\nTODO: ideally this hook shouldn't be needed\nhttps://github.com/WordPress/gutenberg/pull/31822#discussion_r633280823",displayName:"useCustomUnits",props:{units:{defaultValue:{value:"Object.values( allUnits )"},description:"",name:"units",required:!1,type:{name:"WPUnitControlUnit[]"}},availableUnits:{defaultValue:{value:"[]"},description:"",name:"availableUnits",required:!1,type:{name:"string[]"}},defaultValues:{defaultValue:null,description:"",name:"defaultValues",required:!1,type:{name:"Record<string, number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/unit-control/index.tsx#useCustomUnits"]={docgenInfo:useCustomUnits.__docgenInfo,name:"useCustomUnits",path:"packages/components/src/unit-control/index.tsx#useCustomUnits"})}catch(__react_docgen_typescript_loader_error){}try{unitcontrol.displayName="unitcontrol",unitcontrol.__docgenInfo={description:"`UnitControl` allows the user to set a numeric quantity as well as a unit (e.g. `px`).\n\n\n```jsx\nimport { __experimentalUnitControl as UnitControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst Example = () => {\n  const [ value, setValue ] = useState( '10px' );\n\n  return <UnitControl onChange={ setValue } value={ value } />;\n};\n```",displayName:"unitcontrol",props:{size:{defaultValue:{value:"'default'"},description:"Adjusts the size of the input.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"compact"'},{value:'"__unstable-large"'}]}},onChange:{defaultValue:null,description:"A callback function invoked when the value is changed.\nA function that receives the value of the input.",name:"onChange",required:!1,type:{name:"UnitControlOnChangeCallback & InputChangeCallback<{}>"}},isUnitSelectTabbable:{defaultValue:{value:"true"},description:"Whether the control can be focused via keyboard navigation.",name:"isUnitSelectTabbable",required:!1,type:{name:"boolean"}},units:{defaultValue:{value:"CSS_UNITS"},description:"Available units to select from.",name:"units",required:!1,type:{name:"WPUnitControlUnit[]"}},label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:"Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n@example import {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>",name:"prefix",required:!1,type:{name:"ReactNode"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:'(dragProps: Omit<FullGestureState<"drag">, "event"> & { event: unknown; }) => void'}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:'(dragProps: Omit<FullGestureState<"drag">, "event"> & { event: unknown; }) => void'}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:'(dragProps: Omit<FullGestureState<"drag">, "event"> & { event: unknown; }) => void'}},step:{defaultValue:{value:"1"},description:"Amount by which the `value` is changed when incrementing/decrementing.\nIt is also a factor in validation as `value` must be a multiple of `step`\n(offset by `min`, if specified) to be valid. Accepts the special string value `any`\nthat voids the validation constraint and causes stepping actions to increment/decrement by `1`.",name:"step",required:!1,type:{name:"string | number"}},max:{defaultValue:{value:"Infinity"},description:"The maximum `value` allowed.",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"-Infinity"},description:"The minimum `value` allowed.",name:"min",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"If true, the `input` will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:'The value of the input.\nCurrent value. If passed as a string, the current unit will be inferred from this value.\nFor example, a `value` of "50%" will set the current unit to `%`.',name:"value",required:!1,type:{name:"string | number"}},required:{defaultValue:{value:"false"},description:"If `true` enforces a valid number within the control's min/max range.\nIf `false` allows an empty string as a valid value.",name:"required",required:!1,type:{name:"boolean"}},isDragEnabled:{defaultValue:{value:"true"},description:"If true, enables mouse drag gestures.",name:"isDragEnabled",required:!1,type:{name:"boolean"}},__next36pxDefaultSize:{defaultValue:{value:"false"},description:"Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated",name:"__next36pxDefaultSize",required:!1,type:{name:"boolean"}},__next40pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next40pxDefaultSize",required:!1,type:{name:"boolean"}},__unstableInputWidth:{defaultValue:null,description:"",name:"__unstableInputWidth",required:!1,type:{name:"Width<string | number>"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"'top'"},description:"The position of the label.",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"edge"'},{value:'"side"'}]}},help:{defaultValue:null,description:"Additional description for the control.\n\nThe element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",name:"help",required:!1,type:{name:"ReactNode"}},dragDirection:{defaultValue:{value:"'n'"},description:"Determines the drag axis.",name:"dragDirection",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"n"'},{value:'"e"'},{value:'"w"'}]}},dragThreshold:{defaultValue:{value:"10"},description:"If `isDragEnabled` is true, this controls the amount of `px` to have been dragged before\nthe drag gesture is actually triggered.",name:"dragThreshold",required:!1,type:{name:"number"}},isPressEnterToChange:{defaultValue:{value:"false"},description:"If true, the `ENTER` key press is required in order to trigger an `onChange`.\nIf enabled, a change is also triggered when tabbing away (`onBlur`).",name:"isPressEnterToChange",required:!1,type:{name:"boolean"}},onValidate:{defaultValue:null,description:"",name:"onValidate",required:!1,type:{name:"(nextValue: string, event?: SyntheticEvent<HTMLInputElement, Event>) => void"}},__unstableStateReducer:{defaultValue:null,description:"",name:"__unstableStateReducer",required:!1,type:{name:"StateReducer"}},hideHTMLArrows:{defaultValue:{value:"false"},description:"If true, the default `input` HTML arrows will be hidden.\n@deprecated",name:"hideHTMLArrows",required:!1,type:{name:"boolean"}},isShiftStepEnabled:{defaultValue:{value:"true"},description:"If true, pressing `UP` or `DOWN` along with the `SHIFT` key will increment the\nvalue by the `shiftStep` value.",name:"isShiftStepEnabled",required:!1,type:{name:"boolean"}},shiftStep:{defaultValue:{value:"10"},description:"Amount to increment by when the `SHIFT` key is held down. This shift value is\na multiplier to the `step` value. For example, if the `step` value is `5`,\nand `shiftStep` is `10`, each jump would increment/decrement by `50`.",name:"shiftStep",required:!1,type:{name:"number"}},spinFactor:{defaultValue:{value:"1"},description:'Optional multiplication factor in spin changes. i.e. A spin changes\nby `spinFactor * step` (if `step` is "any", 1 is used instead).',name:"spinFactor",required:!1,type:{name:"number"}},disableUnits:{defaultValue:{value:"false"},description:"If `true`, the unit `<select>` is hidden.",name:"disableUnits",required:!1,type:{name:"boolean"}},isResetValueOnUnitChange:{defaultValue:{value:"false"},description:"If `true`, and the selected unit provides a `default` value, this value is set\nwhen changing units.",name:"isResetValueOnUnitChange",required:!1,type:{name:"boolean"}},onUnitChange:{defaultValue:null,description:"Callback when the `unit` changes.",name:"onUnitChange",required:!1,type:{name:"UnitControlOnChangeCallback"}},unit:{defaultValue:null,description:"Current unit. _Note: this prop is deprecated. Instead, provide a unit with a value through the `value` prop._\n@deprecated",name:"unit",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/unit-control/index.tsx#unitcontrol"]={docgenInfo:unitcontrol.__docgenInfo,name:"unitcontrol",path:"packages/components/src/unit-control/index.tsx#unitcontrol"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/unit-control/styles/unit-control-styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ke:()=>ValueInput,Vh:()=>UnitLabel,mY:()=>UnitSelect});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/colors-values.js"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/src/utils/rtl.js"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/src/utils/config-values.js"),_number_control__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/number-control/index.tsx"),_input_control_styles_input_control_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/input-control/styles/input-control-styles.tsx"),_utils_space__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/src/utils/space.ts");const ValueInput=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)(_number_control__WEBPACK_IMPORTED_MODULE_1__.Z,{target:"e1bagdl32"})("&&&{input{display:block;width:100%;}",_input_control_styles_input_control_styles__WEBPACK_IMPORTED_MODULE_2__.Kg,"{transition:box-shadow 0.1s linear;}}"),baseUnitLabelStyles=({selectSize})=>({small:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv)("box-sizing:border-box;padding:2px 1px;width:20px;color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.gray[800],";font-size:8px;line-height:1;letter-spacing:-0.5px;text-transform:uppercase;text-align-last:center;",""),default:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv)("box-sizing:border-box;min-width:24px;max-width:48px;height:24px;margin-inline-end:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(2),";padding:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(1),";color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.theme.accent,";font-size:13px;line-height:1;text-align-last:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;","")}[selectSize]),UnitLabel=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"e1bagdl31"})("&&&{pointer-events:none;",baseUnitLabelStyles,";color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.gray[900],";}"),unitSelectSizes=({selectSize="default"})=>({small:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv)("height:100%;border:1px solid transparent;transition:box-shadow 0.1s linear,border 0.1s linear;",(0,_utils__WEBPACK_IMPORTED_MODULE_6__.b)({borderTopLeftRadius:0,borderBottomLeftRadius:0})()," &:not(:disabled):hover{background-color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.gray[100],";}&:focus{border:1px solid ",_utils__WEBPACK_IMPORTED_MODULE_4__.D.ui.borderFocus,";box-shadow:inset 0 0 0 ",_utils__WEBPACK_IMPORTED_MODULE_7__.Z.borderWidth+" "+_utils__WEBPACK_IMPORTED_MODULE_4__.D.ui.borderFocus,";outline-offset:0;outline:2px solid transparent;z-index:1;}",""),default:(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv)("display:flex;justify-content:center;align-items:center;&:hover{color:",_utils__WEBPACK_IMPORTED_MODULE_4__.D.ui.borderFocus,";box-shadow:inset 0 0 0 ",_utils__WEBPACK_IMPORTED_MODULE_7__.Z.borderWidth+" "+_utils__WEBPACK_IMPORTED_MODULE_4__.D.ui.borderFocus,";outline:",_utils__WEBPACK_IMPORTED_MODULE_7__.Z.borderWidth," solid transparent;}&:focus{box-shadow:0 0 0 ",_utils__WEBPACK_IMPORTED_MODULE_7__.Z.borderWidthFocus+" "+_utils__WEBPACK_IMPORTED_MODULE_4__.D.ui.borderFocus,";outline:",_utils__WEBPACK_IMPORTED_MODULE_7__.Z.borderWidthFocus," solid transparent;}","")}[selectSize]),UnitSelect=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("select",{target:"e1bagdl30"})("&&&{appearance:none;background:transparent;border-radius:2px;border:none;display:block;outline:none;margin:0;min-height:auto;font-family:inherit;",baseUnitLabelStyles,";",unitSelectSizes,";&:not( :disabled ){cursor:pointer;}}")},"./packages/components/src/unit-control/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gl:()=>getValidParsedQuantityAndUnit,Ui:()=>CSS_UNITS,YX:()=>parseQuantityAndUnitFromRawValue,e_:()=>getUnitsWithCurrentUnit,hy:()=>getParsedQuantityAndUnit,nj:()=>useCustomUnits,wW:()=>hasUnits});var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js");const isWeb="web"===__webpack_require__("./packages/element/build-module/platform.js").Z.OS,allUnits={px:{value:"px",label:isWeb?"px":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pixels (px)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pixels (px)"),step:1},"%":{value:"%",label:isWeb?"%":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Percentage (%)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Percent (%)"),step:.1},em:{value:"em",label:isWeb?"em":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Relative to parent font size (em)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("ems","Relative to parent font size (em)"),step:.01},rem:{value:"rem",label:isWeb?"rem":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Relative to root font size (rem)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("rems","Relative to root font size (rem)"),step:.01},vw:{value:"vw",label:isWeb?"vw":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport width (vw)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport width (vw)"),step:.1},vh:{value:"vh",label:isWeb?"vh":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport height (vh)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport height (vh)"),step:.1},vmin:{value:"vmin",label:isWeb?"vmin":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport smallest dimension (vmin)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport smallest dimension (vmin)"),step:.1},vmax:{value:"vmax",label:isWeb?"vmax":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport largest dimension (vmax)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport largest dimension (vmax)"),step:.1},ch:{value:"ch",label:isWeb?"ch":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width of the zero (0) character (ch)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width of the zero (0) character (ch)"),step:.01},ex:{value:"ex",label:isWeb?"ex":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("x-height of the font (ex)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("x-height of the font (ex)"),step:.01},cm:{value:"cm",label:isWeb?"cm":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Centimeters (cm)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Centimeters (cm)"),step:.001},mm:{value:"mm",label:isWeb?"mm":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Millimeters (mm)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Millimeters (mm)"),step:.1},in:{value:"in",label:isWeb?"in":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inches (in)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inches (in)"),step:.001},pc:{value:"pc",label:isWeb?"pc":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Picas (pc)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Picas (pc)"),step:1},pt:{value:"pt",label:isWeb?"pt":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Points (pt)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Points (pt)"),step:1},svw:{value:"svw",label:isWeb?"svw":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Small viewport width (svw)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Small viewport width (svw)"),step:.1},svh:{value:"svh",label:isWeb?"svh":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Small viewport height (svh)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Small viewport height (svh)"),step:.1},svi:{value:"svi",label:isWeb?"svi":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport smallest size in the inline direction (svi)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Small viewport width or height (svi)"),step:.1},svb:{value:"svb",label:isWeb?"svb":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport smallest size in the block direction (svb)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Small viewport width or height (svb)"),step:.1},svmin:{value:"svmin",label:isWeb?"svmin":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Small viewport smallest dimension (svmin)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Small viewport smallest dimension (svmin)"),step:.1},lvw:{value:"lvw",label:isWeb?"lvw":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Large viewport width (lvw)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Large viewport width (lvw)"),step:.1},lvh:{value:"lvh",label:isWeb?"lvh":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Large viewport height (lvh)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Large viewport height (lvh)"),step:.1},lvi:{value:"lvi",label:isWeb?"lvi":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Large viewport width or height (lvi)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Large viewport width or height (lvi)"),step:.1},lvb:{value:"lvb",label:isWeb?"lvb":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Large viewport width or height (lvb)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Large viewport width or height (lvb)"),step:.1},lvmin:{value:"lvmin",label:isWeb?"lvmin":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Large viewport smallest dimension (lvmin)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Large viewport smallest dimension (lvmin)"),step:.1},dvw:{value:"dvw",label:isWeb?"dvw":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dynamic viewport width (dvw)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dynamic viewport width (dvw)"),step:.1},dvh:{value:"dvh",label:isWeb?"dvh":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dynamic viewport height (dvh)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dynamic viewport height (dvh)"),step:.1},dvi:{value:"dvi",label:isWeb?"dvi":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dynamic viewport width or height (dvi)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dynamic viewport width or height (dvi)"),step:.1},dvb:{value:"dvb",label:isWeb?"dvb":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dynamic viewport width or height (dvb)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dynamic viewport width or height (dvb)"),step:.1},dvmin:{value:"dvmin",label:isWeb?"dvmin":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dynamic viewport smallest dimension (dvmin)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dynamic viewport smallest dimension (dvmin)"),step:.1},dvmax:{value:"dvmax",label:isWeb?"dvmax":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dynamic viewport largest dimension (dvmax)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dynamic viewport largest dimension (dvmax)"),step:.1},svmax:{value:"svmax",label:isWeb?"svmax":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Small viewport largest dimension (svmax)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Small viewport largest dimension (svmax)"),step:.1},lvmax:{value:"lvmax",label:isWeb?"lvmax":(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Large viewport largest dimension (lvmax)"),a11yLabel:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Large viewport largest dimension (lvmax)"),step:.1}},ALL_CSS_UNITS=Object.values(allUnits),CSS_UNITS=[allUnits.px,allUnits["%"],allUnits.em,allUnits.rem,allUnits.vw,allUnits.vh],DEFAULT_UNIT=allUnits.px;function getParsedQuantityAndUnit(rawValue,fallbackUnit,allowedUnits){return parseQuantityAndUnitFromRawValue(fallbackUnit?`${null!=rawValue?rawValue:""}${fallbackUnit}`:rawValue,allowedUnits)}function hasUnits(units){return Array.isArray(units)&&!!units.length}function parseQuantityAndUnitFromRawValue(rawValue,allowedUnits=ALL_CSS_UNITS){let trimmedValue,quantityToReturn;if(void 0!==rawValue||null===rawValue){trimmedValue=`${rawValue}`.trim();const parsedQuantity=parseFloat(trimmedValue);quantityToReturn=isFinite(parsedQuantity)?parsedQuantity:void 0}const unitMatch=trimmedValue?.match(/[\d.\-\+]*\s*(.*)/),matchedUnit=unitMatch?.[1]?.toLowerCase();let unitToReturn;if(hasUnits(allowedUnits)){const match=allowedUnits.find((item=>item.value===matchedUnit));unitToReturn=match?.value}else unitToReturn=DEFAULT_UNIT.value;return[quantityToReturn,unitToReturn]}function getValidParsedQuantityAndUnit(rawValue,allowedUnits,fallbackQuantity,fallbackUnit){const[parsedQuantity,parsedUnit]=parseQuantityAndUnitFromRawValue(rawValue,allowedUnits),quantityToReturn=null!=parsedQuantity?parsedQuantity:fallbackQuantity;let unitToReturn=parsedUnit||fallbackUnit;return!unitToReturn&&hasUnits(allowedUnits)&&(unitToReturn=allowedUnits[0].value),[quantityToReturn,unitToReturn]}const useCustomUnits=({units=ALL_CSS_UNITS,availableUnits=[],defaultValues})=>{const customUnitsToReturn=function filterUnitsWithSettings(allowedUnitValues=[],availableUnits){return Array.isArray(availableUnits)?availableUnits.filter((unit=>allowedUnitValues.includes(unit.value))):[]}(availableUnits,units);return defaultValues&&customUnitsToReturn.forEach(((unit,i)=>{if(defaultValues[unit.value]){const[parsedDefaultValue]=parseQuantityAndUnitFromRawValue(defaultValues[unit.value]);customUnitsToReturn[i].default=parsedDefaultValue}})),customUnitsToReturn};function getUnitsWithCurrentUnit(rawValue,legacyUnit,units=ALL_CSS_UNITS){const unitsToReturn=Array.isArray(units)?[...units]:[],[,currentUnit]=getParsedQuantityAndUnit(rawValue,legacyUnit,ALL_CSS_UNITS);return currentUnit&&!unitsToReturn.some((unit=>unit.value===currentUnit))&&allUnits[currentUnit]&&unitsToReturn.unshift(allUnits[currentUnit]),unitsToReturn}},"./packages/components/src/utils/strings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GL:()=>kebabCase,eK:()=>normalizeTextString,hr:()=>escapeRegExp});var remove_accents__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/remove-accents/index.js"),remove_accents__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(remove_accents__WEBPACK_IMPORTED_MODULE_0__),change_case__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/param-case/dist.es2015/index.js");const ALL_UNICODE_DASH_CHARACTERS=new RegExp(/[\u007e\u00ad\u2053\u207b\u208b\u2212\p{Pd}]/gu),normalizeTextString=value=>remove_accents__WEBPACK_IMPORTED_MODULE_0___default()(value).toLocaleLowerCase().replace(ALL_UNICODE_DASH_CHARACTERS,"-");function kebabCase(str){var _str$toString;let input=null!==(_str$toString=str?.toString?.())&&void 0!==_str$toString?_str$toString:"";return input=input.replace(/['\u2019]/,""),(0,change_case__WEBPACK_IMPORTED_MODULE_1__.o)(input,{splitRegexp:[/(?!(?:1ST|2ND|3RD|[4-9]TH)(?![a-z]))([a-z0-9])([A-Z])/g,/(?!(?:1st|2nd|3rd|[4-9]th)(?![a-z]))([0-9])([a-z])/g,/([A-Za-z])([0-9])/g,/([A-Z])([A-Z][a-z])/g]})}function escapeRegExp(string){return string.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&")}}}]);