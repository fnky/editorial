import * as React from "react";
import { styled } from "stitches.config";
import { Box, Input } from "./";

const StyledField = styled("label", {
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  alignItems: "center",
  fontSize: "$2",
  gridAutoRows: "1fr",
  minHeight: 28,
  "> * + *": {
    marginLeft: "var(--space-4) !important",
  },
});

interface FieldProps {
  id?: string;
  label: string;
  children?: React.ReactNode;
}

export function Field(props: FieldProps): React.ReactElement {
  return (
    <StyledField htmlFor={props.id}>
      <div>{props.label}</div>
      {props.children}
    </StyledField>
  );
}

type InputDOMProps = React.InputHTMLAttributes<HTMLInputElement>;

type InputFieldProps = InputDOMProps & {
  id?: string;
  label: string;
};

export function InputField(props: InputFieldProps): React.ReactElement {
  // eslint-disable-next-line react/destructuring-assignment
  const { id, label, ...inputProps } = props;
  return (
    <Field id={id} label={label}>
      <Input {...inputProps} id={id} />
    </Field>
  );
}

export const FieldGroup = styled(Box, {
  display: "flex",
  flexDirection: "column",

  "> * + *": {
    marginTop: "var(--space-1)",
  },
});
