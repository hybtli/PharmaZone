import {GetDistricts, GetDutyPharmacyDetail, GetProvinces} from "./DutyPharmacyController.types";
import axios from "axios";


function DutyPharmacyController() {
    return {
        getPharmacies: async (city: string, county: string): Promise<GetDutyPharmacyDetail[]> => {
            const options = {
                method: 'GET',
                url: 'https://www.nosyapi.com/apiv2/pharmacy',
                params: {city: city, county: county},
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer R1gfU0BygA7H4cMKTCOs5EfNS0HmKOIt1ORfkAHZIkmeGDVUUSME7f0tMh66'
                }
            };

            const response = await axios.request(options);
            return response.data.data;
        },
        getProvinces: async (): Promise<GetProvinces[]> => {
            const cityRequest = {
                method: 'GET',
                url: 'https://www.nosyapi.com/apiv2/pharmacy/city',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer R1gfU0BygA7H4cMKTCOs5EfNS0HmKOIt1ORfkAHZIkmeGDVUUSME7f0tMh66'
                }
            };

            const response = await axios.request(cityRequest);
            return response.data.data;
        },
        getDistricts: async (city: string): Promise<GetDistricts[]> => {
            const districtRequest = {
                method: 'GET',
                url: 'https://www.nosyapi.com/apiv2/pharmacy/city',
                params: {city: city},
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer R1gfU0BygA7H4cMKTCOs5EfNS0HmKOIt1ORfkAHZIkmeGDVUUSME7f0tMh66'
                }
            };

            const response = await axios.request(districtRequest);
            return response.data.data;
        },
    }
}

export default DutyPharmacyController;