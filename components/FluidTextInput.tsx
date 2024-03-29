import * as React from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import { useOnClickOutside } from "hooks/useOnClickOutside";
import type { CSS, StitchesVariants } from "stitches.config";
import { styled } from "stitches.config";
import useResizeObserver from "use-resize-observer";
import { createReducer } from "utils/createReducer";

const DEFAULT_TAG = "fieldset";

interface State {
  inputValue: string;
  isEditing: boolean;
}

type Action =
  | { type: "beginEdit" }
  | { type: "finishEdit" }
  | { type: "setValue"; value: string }
  | { type: "cancel"; value: string };

const init = (value?: string): State => ({
  inputValue: value ?? "",
  isEditing: false,
});

const reducer = createReducer<State, Action>({
  beginEdit: (state) => ({ ...state, isEditing: true }),
  finishEdit: (state) => ({ ...state, isEditing: false }),
  setValue: (state, action) => ({ ...state, inputValue: action.value }),
  cancel: (_state, action) => init(action.value),
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
  fontWeight: "inherit",
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
    boxShadow: "inset 0 0 0 1px $colors$gray700, 0 0 0 1px $colors$gray700",
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
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",

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

interface FluidTextInputProps {
  id?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  "aria-labelledby"?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onSave?(newValue: string): void;
  oncancel?(): void;
}

interface FluidTextInputCSSProperty {
  css?: CSS;
}
type FluidTextInputVariants = StitchesVariants<typeof FluidTextInputRoot>;
type FluidTextInputOwnProps = FluidTextInputProps &
  FluidTextInputCSSProperty &
  FluidTextInputVariants;

type FluidTextInputComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  FluidTextInputOwnProps
>;

export const FluidTextInput = React.forwardRef((props, forwardedRef) => {
  const {
    id,
    value,
    placeholder,
    disabled,
    readOnly,
    autoFocus,
    onChange,
    onSave,
    oncancel,
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
    dispatch({ type: "setValue", value: value ?? "" });
  }, [value]);

  const displayValue = inputValue || placeholder;
  const hasPlaceholder = placeholder != null && !inputValue;

  const buttonVisibility = isEditing ? "hidden" : "visible";
  const inputVisibility = isEditing ? "visible" : "hidden";

  const commitChanges = (): void => {
    onSave?.(inputValue);
    dispatch({ type: "finishEdit" });
    intialValueRef.current = inputValue || "";
    inputRef.current?.blur();
    buttonRef.current?.focus();
  };

  const cancelChanges = (): void => {
    oncancel?.();
    dispatch({ type: "setValue", value: intialValueRef.current ?? "" });
    inputRef.current?.blur();
    buttonRef.current?.focus();
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch({ type: "setValue", value: event.target.value });
    onChange?.(event);
  };

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event,
  ) => {
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
  const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = (
    event,
  ) => {
    event.preventDefault();

    buttonRef.current?.blur();
    inputRef.current?.focus();

    if (event.metaKey) {
      inputRef.current?.setSelectionRange(0, inputValue.length);
    }
  };

  const handleInputFocus: React.FocusEventHandler<HTMLInputElement> = () => {
    dispatch({ type: "beginEdit" });
  };

  const handleInputBlur: React.FocusEventHandler<HTMLInputElement> = () => {
    inputRef.current?.setSelectionRange(inputValue.length, inputValue.length);
  };

  useOnClickOutside(buttonRef, commitChanges);

  // HACK: This is kind of a hack to set the width and height of the input
  // to the same as the button element and update it if the span resizes, e.g.
  // browser or parent element resizes.
  useResizeObserver<HTMLButtonElement>({
    ref: buttonRef,
    onResize: () => {
      const buttonElement = buttonRef.current;
      const inputElement = inputRef.current;

      if (buttonElement == null || inputElement == null) {
        return;
      }

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
        // eslint-disable-next-line jsx-a11y/no-autofocus
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
