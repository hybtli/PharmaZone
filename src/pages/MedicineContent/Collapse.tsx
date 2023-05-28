import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { GetMedicineContent } from "../../assets";

type ContentType = {
  content: GetMedicineContent;
};

const Collapse = (props: ContentType): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="m-2 mx-auto max-w-5xl">
      <div className="border-b">
        <button
          className="flex justify-between w-full p-4 font-medium text-left text-base-500 bg-base-100
                    rounded-t-lg hover:bg-base-200 focus:ring-offset-base-100 focus:ring-indigo-500"
          style={{
            borderBottomLeftRadius: !isExpanded ? "10px" : "0px",
            borderBottomRightRadius: !isExpanded ? "10px" : "0px",
          }}
          onClick={toggleAccordion}
        >
          <span>{props.content.medicine.name}</span>
          <svg
            className={`w-5 h-5 transform ${isExpanded ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isExpanded && (
          <div className="rounded-b-lg p-4 bg-base-100 mb-5">
            <Typography className="text-base-500">
              Dosage Form: {props.content.medicine.dosage_form} <br />
              Strength: {props.content.medicine.strength} <br />
              Manufacturer: {props.content.medicine.manufacturer} <br />
              Ingredients:
              {props.content.medicine.ingredients.map((item) => (
                <Typography>{`${item}\n`}</Typography>
              ))}
              <br />
              Indications:{props.content.medicine.indications} <br />
              Warnings:
              {props.content.medicine.warnings.map((item) => (
                <Typography>{`${item}\n`}</Typography>
              ))}
              <br />
              Storage: {props.content.medicine.storage} <br />
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
