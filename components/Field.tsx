import type { ReactNode, AllHTMLAttributes } from "react";
import { styled } from "../stitches.config";
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

type FieldProps = {
  id?: string;
  label: string;
  children?: ReactNode;
};

export const Field = ({ id, label, children }: FieldProps) => {
  return (
    <StyledField htmlFor={id}>
      <div>{label}</div>
      {children}
    </StyledField>
  );
};

type InputDOMProps = AllHTMLAttributes<HTMLInputElement>;

type InputFieldProps = InputDOMProps & {
  id?: string;
  label: string;
  children?: ReactNode;
};

export const InputField = ({ id, label, ...props }: InputFieldProps) => {
  return (
    <Field id={id} label={label}>
      <Input {...props} id={id} />
    </Field>
  );
};

export const FieldGroup = styled(Box, {
  display: "flex",
  flexDirection: "column",

  "> * + *": {
    marginTop: "var(--space-1)",
  },
});
