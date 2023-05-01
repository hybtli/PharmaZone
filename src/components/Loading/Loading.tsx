import React from "react";
import PureLoading from "./PureLoading";

interface LoadingProps {
    fullscreen?: boolean;
    loadingPrimary?: string;
    loadingSecondary?: string;
}

const Loading: React.FunctionComponent<LoadingProps> = ({
    fullscreen = false,
    loadingPrimary = "pages.loading.title",
    loadingSecondary = "pages.loading.subtitle",
    }: LoadingProps) => {

    return (
        <PureLoading fullscreen={fullscreen}>
            <h1>Loading</h1>
            <div>Please wait...</div>
        </PureLoading>
    );
};

export default Loading;