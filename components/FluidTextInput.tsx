import * as React from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import { styled, StitchesProps, StitchesVariants } from "stitches.config";
import useResizeObserver from "use-resize-observer";
import { createReducer } from "utils/createReducer";
import { useOnClickOutside } from "hooks/useOnClickOutside";

const DEFAULT_TAG = "fieldset";

type State = {
  inputValue: string;
  isEditing: boolean;
};

type Action =
  | { type: "BEGIN_EDIT" }
  | { type: "FINISH_EDIT" }
  | { type: "SET_VALUE"; value: string }
  | { type: "CANCEL"; value: string };

const init = (value?: string): State => ({
  inputValue: value || "",
  isEditing: false,
});

const reducer = createReducer<State, Action>({
  BEGIN_EDIT: (state) => ({ ...state, isEditing: true }),
  FINISH_EDIT: (state) => ({ ...state, isEditing: false }),
  SET_VALUE: (state, action) => ({ ...state, inputValue: action.value }),
  CANCEL: (_, action) => init(action.value),
});

const FluidTextInputRoot = styled(DEFAULT_TAG, {
  position: "relative",
  boxSizing: "border-box",
  display: "inline-block",
  borderRadius: "$2",

  ":hover": {
    backgroundColor: "$gray200",
  },

  ":active": {
    backgroundColor: "$gray300",
  },

  ":disabled:hover": {
    backgroundColor: "transparent",
  },

  variants: {
    state: {
      active: {
        backgroundColor: "transparent",

        ":hover": {
          backgroundColor: "transparent",
        },

        ":active": {
          backgroundColor: "transparent",
        },
      },
      inactive: {},
    },
  },
});

const FluidTextInputControl = styled("div", {
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  appearance: "none",
  fontFamily: "inherit",
  fontSize: "1em",
  padding: "2px 4px",
  margin: "0",
  border: "none",
  color: "currentColor",
  whiteSpace: "pre",
  minWidth: "1em",
  borderRadius: "$1",
  lineHeight: "normal",
  minHeight: "calc(1em + 4px)",
  background: "transparent",
  outline: "none",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  fontVariantNumeric: "tabular-nums",

  "&:focus": {
    boxShadow: "inset 0 0 0 1px $gray700, 0 0 0 1px $gray700",
  },

  variants: {
    visibility: {
      visible: { opacity: 1 },
      hidden: { opacity: 0, pointerEvents: "none" },
    },
  },
});

const FluidTextInputButton = styled(FluidTextInputControl, {
  cursor: "pointer",
  userSelect: "none",
  font: "revert",

  ":disabled": {
    color: "$gray700",
    cursor: "default",
    pointerEvents: "none",
  },

  variants: {
    placeholder: {
      true: { userSelect: "none", color: "gray" },
      false: {},
    },
    visibility: {
      visible: { opacity: 1 },
      hidden: { opacity: 0, pointerEvents: "none" },
    },
  },
});

const FluidTextInputButtonText = styled("span", {
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const FluidTextInputInput = styled(FluidTextInputControl, {
  position: "absolute",
  top: "0",

  variants: {
    visibility: {
      visible: { opacity: 1 },
      hidden: { opacity: 0, pointerEvents: "none" },
    },
  },
});

type FluidTextInputProps = {
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSave?: (newValue: string) => void;
  onCancel?: () => void;
  "aria-labelledby"?: string;
};

type FluidTextInputCSSProp = Pick<
  StitchesProps<typeof FluidTextInputRoot>,
  "css"
>;
type FluidTextInputVariants = StitchesVariants<typeof FluidTextInputRoot>;
type FluidTextInputOwnProps = FluidTextInputProps &
  FluidTextInputCSSProp &
  FluidTextInputVariants;

type FluidTextInputComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  FluidTextInputOwnProps
>;

export const FluidTextInput = React.forwardRef((props, forwardedRef) => {
  const {
    id,
    name,
    value,
    defaultValue,
    placeholder,
    disabled,
    readOnly,
    autoFocus,
    onChange,
    onSave,
    onCancel,
    ...domProps
  } = props;
  const intialValueRef = React.useRef<string | undefined>(value);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [{ inputValue, isEditing }, dispatch] = React.useReducer(
    reducer,
    init(value),
  );

  React.useEffect(() => {
    dispatch({ type: "SET_VALUE", value: value || "" });
  }, [value]);

  const displayValue = inputValue || placeholder;
  const hasPlaceholder = placeholder && !inputValue;

  const buttonVisibility = isEditing ? "hidden" : "visible";
  const inputVisibility = isEditing ? "visible" : "hidden";

  const commitChanges = () => {
    onSave?.(inputValue);
    dispatch({ type: "FINISH_EDIT" });
    intialValueRef.current = inputValue || "";
    inputRef.current?.blur();
    buttonRef.current?.focus();
  };

  const cancelChanges = () => {
    onCancel?.();
    console.log(intialValueRef.current);
    dispatch({ type: "SET_VALUE", value: intialValueRef.current || "" });
    inputRef.current?.blur();
    buttonRef.current?.focus();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_VALUE", value: event.target.value });
    onChange?.(event);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isEditing) return false;

    if (event.key === "Enter") {
      commitChanges();
    } else if (event.key === "Escape") {
      event.preventDefault();
      cancelChanges();
    }
  };

  // TODO: Pressing 'ENTER' in input won't focus on the button and blur the input, due to some
  // mis-coordination between onFocus/onBlur on the input and how isEditing is set based on those
  // events.
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    buttonRef.current?.blur();
    inputRef.current?.focus();

    if (event.metaKey) {
      inputRef.current?.setSelectionRange(0, inputValue.length);
    }
  };

  const handleInputFocus = () => {
    dispatch({ type: "BEGIN_EDIT" });
  };

  const handleInputBlur = () => {
    inputRef.current?.setSelectionRange(inputValue.length, inputValue.length);
  };

  useOnClickOutside(buttonRef, commitChanges);

  // HACK: This is kind of a hack to set the width and height of the input
  // to the same as the button element and update it if the span resizes, e.g.
  // browser or parent element resizes.
  useResizeObserver<HTMLButtonElement>({
    ref: buttonRef,
    onResize: () => {
      const buttonElement = buttonRef.current!;
      const inputElement = inputRef.current!;

      const rect = buttonElement.getBoundingClientRect();

      inputElement.style.width = `${rect.width + 1}px`;
      inputElement.style.height = `${rect.height}px`;
    },
  });

  return (
    <FluidTextInputRoot
      {...domProps}
      ref={forwardedRef}
      data-fluid-text-input-root
      state={isEditing ? "active" : "inactive"}
      disabled={disabled}
      aria-disabled={disabled}
      aria-readonly={readOnly}
    >
      <FluidTextInputButton
        as="button"
        type="button"
        ref={buttonRef}
        data-fluid-text-input-button
        onClick={handleButtonClick}
        visibility={buttonVisibility}
        placeholder={hasPlaceholder ? "true" : "false"}
        aria-hidden={isEditing}
        disabled={disabled}
      >
        <FluidTextInputButtonText data-fluid-text-input-button-text>
          {displayValue}
        </FluidTextInputButtonText>
      </FluidTextInputButton>
      <FluidTextInputInput
        as="input"
        id={id}
        name={id}
        tabIndex={-1}
        ref={inputRef}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyDown={handleInputKeyDown}
        autoFocus={autoFocus}
        disabled={disabled}
        readOnly={readOnly}
        aria-hidden={!isEditing}
        data-fluid-text-input-input
        visibility={inputVisibility}
      />
    </FluidTextInputRoot>
  );
}) as FluidTextInputComponent;
