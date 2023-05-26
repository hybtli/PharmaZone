import React from "react";

interface ShowButtonProps {
  to: string;
}

const ShowButton = ({ to }: ShowButtonProps): JSX.Element => {
  return (
    <a
      role="button"
      className="btn btn-outline btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      href={to}
    >
      Show
    </a>
  );
};

export default ShowButton;
