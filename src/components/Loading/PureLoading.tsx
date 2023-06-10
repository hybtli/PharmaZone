import React, { ReactNode } from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import { HeartSpinner } from "react-spinners-kit";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    display: "flex",
    alignItems: "center",
    marginTop: "1em",
  },
  icon: {
    width: "9em",
    height: "9em",
    color: "red",
  },
  message: {
    color: "black",
    fontFamily: "Roboto, sans-serif",
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
        <HeartSpinner className={classes.icon} color="red" size={60} />
        {children}
      </div>
    </div>
  );
};

export default PureLoading;
