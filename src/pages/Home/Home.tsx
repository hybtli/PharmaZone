import React from 'react';
import { ShowButton } from '../../components';


const Home = (): JSX.Element => {
    return (

        <>

            <section className="bg-secondary">
                <div className="flex justify-center">
                    <div className="card card-side bg-base-300 shadow-xl w-3/4 my-1">
                        <figure className="w-16"><img src="https://github.com/gauravghongde/social-icons/blob/master/PNG/Black/Ethereum_black.png?raw=true" alt="Movie"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Search Medicines</h2>
                            <p>Click the button to check feature.</p>
                            <div className="card-actions justify-end">
                                <ShowButton to="/home" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="card card-side bg-base-300 shadow-xl w-3/4 my-1">
                        <figure className="w-16"><img src="https://github.com/gauravghongde/social-icons/blob/master/PNG/Black/Ethereum_black.png?raw=true" alt="Movie"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">On-Duty Pharmacies.</h2>
                            <p>Click the button to check on-duty pharmacies.</p>
                            <div className="card-actions justify-end">
                                <ShowButton to="/duty-pharmacy" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="card card-side bg-base-300 shadow-xl w-3/4 my-1">
                        <figure className="w-16"><img src="https://github.com/gauravghongde/social-icons/blob/master/PNG/Black/Ethereum_black.png?raw=true" alt="Movie"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Check Medicine Content</h2>
                            <p>Click the button to check feature.</p>
                            <div className="card-actions justify-end">
                                <ShowButton to="/medicine-content" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>

    );
};

export default Home;
