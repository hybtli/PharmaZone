import React, {useEffect, useState} from 'react';
import {Collapse, SearchField} from "../../components";
import {GetMedicineContent} from "../../assets";

const MedicineContent = (): JSX.Element => {
    const [medicines, setMedicines] = useState<GetMedicineContent[]>([]);
    const [searchedMedicine, setSearchedMedicine] = useState<GetMedicineContent[]>([]);


    useEffect(() => {
        fetch("medicines.json").then((res) =>res.json())
            .then((data) => setMedicines(data));
    }, []);

    const handleSearch = (searchTerm: string) => {
        const filteredMedicines = medicines.filter((item) =>
            item.medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchedMedicine(filteredMedicines);
    };

    console.log("Response\n", medicines);


    return (
        <React.Fragment>

            <SearchField onSearch={handleSearch} />

            {searchedMedicine.length !== 0 && (
                searchedMedicine.map((item) => (
                    <Collapse content={item}/>
                ))
            )}

        </React.Fragment>
    );
};

export default MedicineContent;
