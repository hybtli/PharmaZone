import React, { useState } from "react";

type SearchFieldProps = {
    onSearch: (searchTerm: string) => void;
};

function SearchField({ onSearch }: SearchFieldProps) {
    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSearch(searchTerm);
    }

    return (
        <div className="flex justify-center">
            <div className="form-control">
                <form onSubmit={handleSubmit}>
                    <div className="input-group my-5">
                        <input
                            type="text"
                            placeholder="Search…"
                            className="input input-bordered"
                            value={searchTerm}
                            onChange={handleChange}
                        />
                        <button className="btn btn-square">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchField;

