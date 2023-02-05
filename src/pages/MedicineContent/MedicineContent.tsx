import React from 'react';

const MedicineContent = (): JSX.Element => {
    return (
        <section className="bg-warning">

            <div className="form-control">
                <div className="input-group flex justify-center my-5">
                    <input type="text" placeholder="Search…" className="input input-bordered w-3/4"/>
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </button>
                </div>
            </div>

        </section>
    );
};

export default MedicineContent;