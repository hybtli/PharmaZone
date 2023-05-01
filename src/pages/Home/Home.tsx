import React from 'react';
import { ShowButton} from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCapsules, faHouseMedical, faReceipt } from '@fortawesome/free-solid-svg-icons'

const Home = (): JSX.Element => {
    return (


            <section className="bg-warning">
                <div className="flex justify-center flex-wrap">
                    <div className="card card-side bg-base-300 shadow-xl w-full sm:w-3/4 my-1 sm:mx-1">
                        <figure className="w-16"><FontAwesomeIcon icon={faCapsules} beatFade size="xl"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Search Medicines</h2>
                            <p>Click the button to check feature.</p>
                            <div className="card-actions justify-end">
                                <ShowButton to="/home" />
                            </div>
                        </div>
                    </div>

                    <div className="card card-side bg-base-300 shadow-xl w-full sm:w-3/4 my-1 sm:mx-1">
                        <figure className="w-16"><FontAwesomeIcon icon={faHouseMedical} beatFade size="xl"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">On-Duty Pharmacies.</h2>
                            <p>Click the button to check on-duty pharmacies.</p>
                            <div className="card-actions justify-end">
                                <ShowButton to="/duty-pharmacy" />
                            </div>
                        </div>
                    </div>

                    <div className="card card-side bg-base-300 shadow-xl w-full sm:w-3/4 my-1 sm:mx-1">
                        <figure className="w-16"><FontAwesomeIcon icon={faReceipt} beatFade size="lg" /></figure>
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

    );
};

export default Home;
