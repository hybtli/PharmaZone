import React from "react";
import Home from "./pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DutyPharmacy from "./pages/DutyPharmacy/DutyPharmacy";
import useStyles from "./App.styles";


function App(): JSX.Element {
    const classes = useStyles();

    return (

        <>

            <div>
                <div className="navbar bg-base-100 flex justify-center">
                    <a className="btn btn-ghost normal-case text-xl" href="/">PharmaZone</a>
                </div>
            </div>

            <div>
                <BrowserRouter>
                    <Routes>

                        <Route
                            path="/"
                            element={<Home/>}/>

                        <Route
                            path="/duty-pharmacy"
                            element={<DutyPharmacy/>}/>

                    </Routes>
                </BrowserRouter>
            </div>

        </>
    );
}

export default App;
