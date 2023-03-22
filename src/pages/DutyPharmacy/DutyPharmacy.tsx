import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import {Button} from "@material-ui/core";
import {GetDutyPharmacyDetail} from "../../assets";
import {BasicTable} from "../../components";

type Location = {
    lat: number;
    lng: number;
}

const DutyPharmacy = (): JSX.Element => {
    const [pharmacy, setPharmacy] = useState<GetDutyPharmacyDetail[]>([]);
    const [city, setCity] = useState("izmir");
    const [district, setDistrict] = useState("konak");
    const [selected, setSelected] = useState(false);

    const provinces: string[] = []

    const options = {
        method: 'GET',
        url: 'https://www.nosyapi.com/apiv2/pharmacy',
        params: { city: city, county: district },
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer R1gfU0BygA7H4cMKTCOs5EfNS0HmKOIt1ORfkAHZIkmeGDVUUSME7f0tMh66'
        }
    };
    /*
    useEffect(() => {
        (async () => {
            await axios.request(options).then((response: any) => {
                setPharmacy(response.data.data);
            }).catch((error: any) => {
                console.log(error);
            });
        })();
    }, []);
    */

    // console.log("Pharmacies:\n", pharmacy);

    axios.get("https://turkiyeapi.cyclic.app/api/v1/provinces").then((response) => {
        response.data.data.map((province: { name: string; }) => provinces.push(province.name))
    });

    console.log(provinces);


    return (
        <section className="bg-warning">

            <div className="flex items-center justify-evenly">
                <select
                    className="select select-secondary w-full max-w-xs mt-3"
                    disabled={false}
                    onChange={(event) => {
                        setCity(event.target.value);
                        setSelected(true);
                    }}
                >
                    <option disabled selected>Pick your province</option>
                    {provinces.map((item) => (
                        <option
                            key={provinces.indexOf(item)}
                            value={item}
                            >
                            {item}
                        </option>
                    ))}
                </select>

                <select
                    className="select select-primary w-full max-w-xs mt-3"
                    disabled={!selected}
                    onChange={(event) => {
                        setCity(event.target.value);
                    }}
                >
                    <option disabled selected>Pick your district</option>
                    {provinces.map((item, index) => (
                        <option
                            key={index}
                            value={item}
                        >
                            {item}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <BasicTable headers={["Name","Address","Telephone","Map"]} data={pharmacy}/>
            </div>

        </section>
    );
};

export default DutyPharmacy;
