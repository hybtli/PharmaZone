import React, { useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

type CollapseProps = {
    header:string,
    content:string
    style: {},
}

const Collapse = (props: CollapseProps): JSX.Element => {

    const [isOpen, setIsOpen] = useState(false);
    
    const handleToggle = () => {
      setIsOpen(!isOpen);
    }

    return (
        <div className="bg-base-300 rounded-lg overflow-hidden" style={props.style}>
            <div
                className="flex justify-between items-center py-4 px-6 border-b border-gray-200 cursor-pointer"
                onClick={handleToggle}
            >
                <h2 className="text-lg font-medium">{props.header}</h2>
                <ChevronUpIcon
                    className={`h-5 w-5 transition-transform duration-200 transform ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </div>
            {isOpen && (
                <div className="py-4 px-6 text-base leading-7">{props.content}</div>
            )}
        </div>
    );
};

export default Collapse;
