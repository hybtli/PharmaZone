import React from "react";
import PureLoading from "./PureLoading";

interface LoadingProps {
  fullscreen?: boolean;
  loadingPrimary?: string;
  loadingSecondary?: string;
}

const Loading: React.FunctionComponent<LoadingProps> = ({
  fullscreen = false,
  loadingPrimary = "Loading. . .",
}: LoadingProps) => {
  return (
    <PureLoading fullscreen={fullscreen}>
      <h1>{loadingPrimary}</h1>
    </PureLoading>
  );
};

export default Loading;
