import React, {useEffect} from 'react';
import axios from "axios";
import {Collapse, SearchField} from "../../components";

const MedicineContent = (): JSX.Element => {


    return (
        <section>

            <SearchField />
            <Collapse header="Medicine Content" content="There will be medicine content here"
                      style={{width: "40%", margin: "auto"}}/>

        </section>
    );
};

export default MedicineContent;
