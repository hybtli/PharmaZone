import React, { ReactNode } from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  icon: {
    width: "9em",
    height: "9em",
  },
  message: {
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
    opacity: 0.5,
    margin: "0 1em",
  },
  fullscreen: {
    height: "100vh",
  },
});

interface LoadingProps {
  fullscreen?: boolean;
  children?: ReactNode;
}

const PureLoading: React.FC<LoadingProps> = ({
  fullscreen = false,
  children,
}: LoadingProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.container, fullscreen && classes.fullscreen)}>
      <div className={classes.message}>
        <CircularProgress className={classes.icon} color="primary" />
        {children}
      </div>
    </div>
  );
};

export default PureLoading;
