import * as React from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { useOffline } from "hooks/useOffline";
import { styled } from "stitches.config";
import { Box, Tooltip, Text } from "./";

const StyledOfflineIndicator = styled(Box, {
  padding: "$2",
});

const StyledTooltipButton = styled("button", {
  color: "$orange800",
  padding: "$2",
});

export function OfflineIndicator(): React.ReactElement {
  const isOffline = useOffline();

  if (!isOffline) {
    return <></>;
  }

  return (
    <StyledOfflineIndicator>
      <Tooltip
        multiline
        content={
          <div>
            <p>
              <strong>
                Connection Lost. Please check your Internet connection.
              </strong>
            </p>
            <Text as="p" variant="dim">
              Local changes will be saved automatically when you&apos;re online
              again.
            </Text>
          </div>
        }
      >
        <StyledTooltipButton>
          <ExclamationTriangleIcon />
        </StyledTooltipButton>
      </Tooltip>
    </StyledOfflineIndicator>
  );
}
