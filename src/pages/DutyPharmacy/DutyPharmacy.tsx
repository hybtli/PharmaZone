import React, {useState} from 'react';
import { toast } from "react-toastify";

const DutyPharmacy = (): JSX.Element => {
    const [pharmacy, setPharmacy] = useState({});
    const axios = require("axios");


    const handleOnPharmacy = async (event:any) => {
        event.preventDefault();
        await axios.get("https://www.nosyapi.com/apiv2/pharmacy?city=izmir&county=konak").then((response: any) => {
            console.log(response);
            toast.success(response.status);
        })
    }


    return (
        <div className="text-center bg-warning">
            <p style={{color: "black"}}>On-Duty Pharmacies</p>
        </div>
    );
};

export default DutyPharmacy;
