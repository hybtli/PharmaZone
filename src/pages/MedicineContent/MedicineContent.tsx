import React, {useEffect} from 'react';
import axios from "axios";
import {SearchField} from "../../components";

const MedicineContent = (): JSX.Element => {

    const options = {
        method: 'GET',
        url: 'https://medicine-name-and-details.p.rapidapi.com/',
        params: {medicineName: 'prolyte'},
        headers: {
            'X-RapidAPI-Key': '427502100bmsha28ef5cb7c3c16dp175995jsn9fd665431347',
            'X-RapidAPI-Host': 'medicine-name-and-details.p.rapidapi.com'
        }
    };

    useEffect(() => {
        axios.request(options).then((res) => {
            console.log("Medicine Content Response:\n", res);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <section className="bg-warning">

            <SearchField />

        </section>
    );
};

export default MedicineContent;
