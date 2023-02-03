import React from "react";

interface ShowButtonProps {
    to: string;
}

const ShowButton = ({to}:ShowButtonProps): JSX.Element => {
    return (
        <a role="button" className="btn btn-outline btn-secondary" href={to}>Show</a>
    );
}

export default ShowButton;