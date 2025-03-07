import React, { forwardRef, useCallback, useMemo } from "react";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { SnackbarProvider, SnackbarContent, useSnackbar } from "notistack";

import HvSnackbarContentWrapper from "../SnackbarContentWrapper";

const HvNotistackSnackMessage = forwardRef(
  ({ id, message, variant = "success", snackbarContentProps }, ref) => {
    return (
      <SnackbarContent ref={ref}>
        <HvSnackbarContentWrapper
          id={id}
          variant={variant}
          showIcon
          label={message}
          {...snackbarContentProps}
        />
      </SnackbarContent>
    );
  }
);

// We override notistack hook to be able to customize the snackbar that should be called.
const useHvSnackbar = () => {
  const { enqueueSnackbar: enqueueNotistackSnackbar, closeSnackbar } = useSnackbar();
  const enqueueSnackbar = useCallback(
    (message, options) => {
      const { id, variant = "success", snackbarContentProps, ...otherOptions } = options;

      enqueueNotistackSnackbar(
        <HvNotistackSnackMessage
          id={id}
          message={message}
          variant={variant}
          snackbarContentProps={snackbarContentProps}
        />,
        otherOptions
      );
    },
    [enqueueNotistackSnackbar]
  );
  return useMemo(
    () => ({
      enqueueSnackbar,
      closeSnackbar,
    }),
    [enqueueSnackbar, closeSnackbar]
  );
};

const useStyles = (notistackClassesOverride) =>
  makeStyles(() => ({
    containerRoot: {
      pointerEvents: "all",
      "& > div > div": {
        // Overrides notistack extra padding
        padding: "0 !important",
        transition: "all 0s ease 0s !important",
        "& > div > div > div": {
          color: "inherit",
          padding: "0",
          fontSize: "inherit",
          boxShadow: "none",
          alignItems: "center",
          fontFamily: "inherit",
          fontWeight: "inherit",
          lineHeight: "inherit",
          borderRadius: "0",
          letterSpacing: "inherit",
          backgroundColor: "inherit",
        },
      },
    },
    ...notistackClassesOverride,
  }))();

const HvSnackbarProvider = ({
  children,
  notistackClassesOverride = {},
  maxSnack = 5,
  autoHideDuration = 5000,
  anchorOrigin = {
    vertical: "top",
    horizontal: "right",
  },
  ...others
}) => {
  const classes = useStyles(notistackClassesOverride);

  return (
    <SnackbarProvider
      classes={{
        ...classes,
      }}
      maxSnack={maxSnack}
      autoHideDuration={autoHideDuration}
      anchorOrigin={anchorOrigin}
      {...others}
    >
      {children}
    </SnackbarProvider>
  );
};

HvSnackbarProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: PropTypes.node.isRequired,
  /**
   * Max visible snackbars.
   */
  maxSnack: PropTypes.number,
  /**
   * How much time the snackbar remains visible in milliseconds.
   */
  autoHideDuration: PropTypes.number,
  /**
   * Where is the snackbar placed.
   */
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(["top", "bottom"]),
    horizontal: PropTypes.oneOf(["right", "left"]),
  }),
  /**
   * Class object used to override notistack classes.
   */
  notistackClassesOverride: PropTypes.instanceOf(Object),
};

HvNotistackSnackMessage.propTypes = {
  /**
   * Id to be applied to the root node.
   */
  id: PropTypes.string,
  /**
   * Your component tree.
   */
  message: PropTypes.string,
  /**
   * Variant of the snackbar.
   */
  variant: PropTypes.oneOf(["default", "success", "error"]),
  /**
   * Extra values to pass to the snackbar.
   */
  snackbarContentProps: PropTypes.instanceOf(Object),
};

export default HvSnackbarProvider;
export { useHvSnackbar };
