import type { ReactNode, ReactElement, MouseEventHandler } from "react";
import { styled } from "stitches.config";
import { Button, Box, Text, ButtonProps } from "./";

const StyledDocumentTitle = styled(Box, {
  display: "inline-flex",
  fontSize: "$2",
  // gap: "$1",
  alignItems: "center",

  bp2: {
    fontSize: "$3",
  },

  "> * + *": {
    marginLeft: "var(--space-1)",
  },
});

interface FolderNameProps extends ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler;
}

const FolderName = ({
  children,
  disabled,
  onClick,
  ...props
}: FolderNameProps) => {
  return (
    <Button type="button" variant="link" {...props}>
      {children}
    </Button>
  );
};

type DocumentTitleOwnProps = {
  title: ReactNode;
  folder?: string;
  onClickFolder?: MouseEventHandler;
  className?: string;
};

export function DocumentTitle(props: DocumentTitleOwnProps): ReactElement {
  return (
    <StyledDocumentTitle className={props.className}>
      {props.folder ? (
        <>
          {typeof props.onClickFolder === "function" ? (
            <FolderName
              onClick={props.onClickFolder}
              arial-label={`Go to ${props.folder}`}
              variant="link"
            >
              {props.folder}
            </FolderName>
          ) : (
            <Text variant="dim">{props.folder}</Text>
          )}
          <Text role="presentation" variant="muted">
            /
          </Text>
        </>
      ) : null}{" "}
      <Box>{props.title}</Box>
    </StyledDocumentTitle>
  );
}
