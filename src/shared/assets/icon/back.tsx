import React from 'react';
import Icon from '@ant-design/icons';
import { IconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { JSX } from 'react/jsx-runtime';
const backSvg = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='currentColor'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M5.828 7.00078L8.364 9.53678L6.95 10.9508L2 6.00078L6.95 1.05078L8.364 2.46478L5.828 5.00078H13C15.1217 5.00078 17.1566 5.84364 18.6569 7.34393C20.1571 8.84422 21 10.879 21 13.0008C21 15.1225 20.1571 17.1573 18.6569 18.6576C17.1566 20.1579 15.1217 21.0008 13 21.0008H4V19.0008H13C14.5913 19.0008 16.1174 18.3686 17.2426 17.2434C18.3679 16.1182 19 14.5921 19 13.0008C19 11.4095 18.3679 9.88336 17.2426 8.75814C16.1174 7.63292 14.5913 7.00078 13 7.00078H5.828Z' />
  </svg>
);
const BackIcon = (
  props: JSX.IntrinsicAttributes &
    Pick<
      IconComponentProps,
      | 'max'
      | 'required'
      | 'type'
      | 'data'
      | 'default'
      | 'high'
      | 'low'
      | 'key'
      | 'id'
      | 'media'
      | 'height'
      | 'width'
      | 'start'
      | 'open'
      | 'name'
      | 'color'
      | 'content'
      | 'rotate'
      | 'translate'
      | 'value'
      | 'hidden'
      | 'cite'
      | 'form'
      | 'label'
      | 'slot'
      | 'span'
      | 'style'
      | 'summary'
      | 'title'
      | 'dir'
      | 'pattern'
      | 'acceptCharset'
      | 'action'
      | 'method'
      | 'noValidate'
      | 'target'
      | 'accessKey'
      | 'draggable'
      | 'lang'
      | 'className'
      | 'prefix'
      | 'ariaLabel'
      | 'role'
      | 'children'
      | 'contentEditable'
      | 'inputMode'
      | 'nonce'
      | 'tabIndex'
      | 'async'
      | 'disabled'
      | 'multiple'
      | 'size'
      | 'manifest'
      | 'wrap'
      | 'accept'
      | 'allowFullScreen'
      | 'allowTransparency'
      | 'alt'
      | 'as'
      | 'autoComplete'
      | 'autoPlay'
      | 'capture'
      | 'cellPadding'
      | 'cellSpacing'
      | 'charSet'
      | 'challenge'
      | 'checked'
      | 'classID'
      | 'cols'
      | 'colSpan'
      | 'controls'
      | 'coords'
      | 'crossOrigin'
      | 'dateTime'
      | 'defer'
      | 'download'
      | 'encType'
      | 'formAction'
      | 'formEncType'
      | 'formMethod'
      | 'formNoValidate'
      | 'formTarget'
      | 'frameBorder'
      | 'headers'
      | 'href'
      | 'hrefLang'
      | 'htmlFor'
      | 'httpEquiv'
      | 'integrity'
      | 'keyParams'
      | 'keyType'
      | 'kind'
      | 'list'
      | 'loop'
      | 'marginHeight'
      | 'marginWidth'
      | 'maxLength'
      | 'mediaGroup'
      | 'min'
      | 'minLength'
      | 'muted'
      | 'optimum'
      | 'defaultChecked'
      | 'defaultValue'
      | 'suppressContentEditableWarning'
      | 'suppressHydrationWarning'
      | 'autoFocus'
      | 'contextMenu'
      | 'placeholder'
      | 'spellCheck'
      | 'radioGroup'
      | 'about'
      | 'datatype'
      | 'inlist'
      | 'property'
      | 'rel'
      | 'resource'
      | 'rev'
      | 'typeof'
      | 'vocab'
      | 'autoCapitalize'
      | 'autoCorrect'
      | 'autoSave'
      | 'itemProp'
      | 'itemScope'
      | 'itemType'
      | 'itemID'
      | 'itemRef'
      | 'results'
      | 'security'
      | 'unselectable'
      | 'is'
      | 'aria-activedescendant'
      | 'aria-atomic'
      | 'aria-autocomplete'
      | 'aria-busy'
      | 'aria-checked'
      | 'aria-colcount'
      | 'aria-colindex'
      | 'aria-colspan'
      | 'aria-controls'
      | 'aria-current'
      | 'aria-describedby'
      | 'aria-details'
      | 'aria-disabled'
      | 'aria-dropeffect'
      | 'aria-errormessage'
      | 'aria-expanded'
      | 'aria-flowto'
      | 'aria-grabbed'
      | 'aria-haspopup'
      | 'aria-hidden'
      | 'aria-invalid'
      | 'aria-keyshortcuts'
      | 'aria-label'
      | 'aria-labelledby'
      | 'aria-level'
      | 'aria-live'
      | 'aria-modal'
      | 'aria-multiline'
      | 'aria-multiselectable'
      | 'aria-orientation'
      | 'aria-owns'
      | 'aria-placeholder'
      | 'aria-posinset'
      | 'aria-pressed'
      | 'aria-readonly'
      | 'aria-relevant'
      | 'aria-required'
      | 'aria-roledescription'
      | 'aria-rowcount'
      | 'aria-rowindex'
      | 'aria-rowspan'
      | 'aria-selected'
      | 'aria-setsize'
      | 'aria-sort'
      | 'aria-valuemax'
      | 'aria-valuemin'
      | 'aria-valuenow'
      | 'aria-valuetext'
      | 'viewBox'
      | 'playsInline'
      | 'poster'
      | 'preload'
      | 'readOnly'
      | 'reversed'
      | 'rows'
      | 'rowSpan'
      | 'sandbox'
      | 'scope'
      | 'scoped'
      | 'scrolling'
      | 'seamless'
      | 'selected'
      | 'shape'
      | 'sizes'
      | 'src'
      | 'srcDoc'
      | 'srcLang'
      | 'srcSet'
      | 'step'
      | 'useMap'
      | 'wmode'
      | 'dangerouslySetInnerHTML'
      | 'onCopy'
      | 'onCopyCapture'
      | 'onCut'
      | 'onCutCapture'
      | 'onPaste'
      | 'onPasteCapture'
      | 'onCompositionEnd'
      | 'onCompositionEndCapture'
      | 'onCompositionStart'
      | 'onCompositionStartCapture'
      | 'onCompositionUpdate'
      | 'onCompositionUpdateCapture'
      | 'onFocus'
      | 'onFocusCapture'
      | 'onBlur'
      | 'onBlurCapture'
      | 'onChange'
      | 'onChangeCapture'
      | 'onBeforeInput'
      | 'onBeforeInputCapture'
      | 'onInput'
      | 'onInputCapture'
      | 'onReset'
      | 'onResetCapture'
      | 'onSubmit'
      | 'onSubmitCapture'
      | 'onInvalid'
      | 'onInvalidCapture'
      | 'onLoad'
      | 'onLoadCapture'
      | 'onError'
      | 'onErrorCapture'
      | 'onKeyDown'
      | 'onKeyDownCapture'
      | 'onKeyPress'
      | 'onKeyPressCapture'
      | 'onKeyUp'
      | 'onKeyUpCapture'
      | 'onAbort'
      | 'onAbortCapture'
      | 'onCanPlay'
      | 'onCanPlayCapture'
      | 'onCanPlayThrough'
      | 'onCanPlayThroughCapture'
      | 'onDurationChange'
      | 'onDurationChangeCapture'
      | 'onEmptied'
      | 'onEmptiedCapture'
      | 'onEncrypted'
      | 'onEncryptedCapture'
      | 'onEnded'
      | 'onEndedCapture'
      | 'onLoadedData'
      | 'onLoadedDataCapture'
      | 'onLoadedMetadata'
      | 'onLoadedMetadataCapture'
      | 'onLoadStart'
      | 'onLoadStartCapture'
      | 'onPause'
      | 'onPauseCapture'
      | 'onPlay'
      | 'onPlayCapture'
      | 'onPlaying'
      | 'onPlayingCapture'
      | 'onProgress'
      | 'onProgressCapture'
      | 'onRateChange'
      | 'onRateChangeCapture'
      | 'onSeeked'
      | 'onSeekedCapture'
      | 'onSeeking'
      | 'onSeekingCapture'
      | 'onStalled'
      | 'onStalledCapture'
      | 'onSuspend'
      | 'onSuspendCapture'
      | 'onTimeUpdate'
      | 'onTimeUpdateCapture'
      | 'onVolumeChange'
      | 'onVolumeChangeCapture'
      | 'onWaiting'
      | 'onWaitingCapture'
      | 'onAuxClick'
      | 'onAuxClickCapture'
      | 'onClick'
      | 'onClickCapture'
      | 'onContextMenu'
      | 'onContextMenuCapture'
      | 'onDoubleClick'
      | 'onDoubleClickCapture'
      | 'onDrag'
      | 'onDragCapture'
      | 'onDragEnd'
      | 'onDragEndCapture'
      | 'onDragEnter'
      | 'onDragEnterCapture'
      | 'onDragExit'
      | 'onDragExitCapture'
      | 'onDragLeave'
      | 'onDragLeaveCapture'
      | 'onDragOver'
      | 'onDragOverCapture'
      | 'onDragStart'
      | 'onDragStartCapture'
      | 'onDrop'
      | 'onDropCapture'
      | 'onMouseDown'
      | 'onMouseDownCapture'
      | 'onMouseEnter'
      | 'onMouseLeave'
      | 'onMouseMove'
      | 'onMouseMoveCapture'
      | 'onMouseOut'
      | 'onMouseOutCapture'
      | 'onMouseOver'
      | 'onMouseOverCapture'
      | 'onMouseUp'
      | 'onMouseUpCapture'
      | 'onSelect'
      | 'onSelectCapture'
      | 'onTouchCancel'
      | 'onTouchCancelCapture'
      | 'onTouchEnd'
      | 'onTouchEndCapture'
      | 'onTouchMove'
      | 'onTouchMoveCapture'
      | 'onTouchStart'
      | 'onTouchStartCapture'
      | 'onPointerDown'
      | 'onPointerDownCapture'
      | 'onPointerMove'
      | 'onPointerMoveCapture'
      | 'onPointerUp'
      | 'onPointerUpCapture'
      | 'onPointerCancel'
      | 'onPointerCancelCapture'
      | 'onPointerEnter'
      | 'onPointerEnterCapture'
      | 'onPointerLeave'
      | 'onPointerLeaveCapture'
      | 'onPointerOver'
      | 'onPointerOverCapture'
      | 'onPointerOut'
      | 'onPointerOutCapture'
      | 'onGotPointerCapture'
      | 'onGotPointerCaptureCapture'
      | 'onLostPointerCapture'
      | 'onLostPointerCaptureCapture'
      | 'onScroll'
      | 'onScrollCapture'
      | 'onWheel'
      | 'onWheelCapture'
      | 'onAnimationStart'
      | 'onAnimationStartCapture'
      | 'onAnimationEnd'
      | 'onAnimationEndCapture'
      | 'onAnimationIteration'
      | 'onAnimationIterationCapture'
      | 'onTransitionEnd'
      | 'onTransitionEndCapture'
      | 'spin'
      | 'component'
    > &
    React.RefAttributes<HTMLSpanElement>
) => <Icon component={backSvg} {...props} />;
export default BackIcon;
