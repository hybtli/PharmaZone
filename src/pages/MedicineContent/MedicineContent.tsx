import React, { useEffect, useState } from "react";
import { Loading, SearchField } from "../../components";
import { GetMedicineContent } from "../../assets";
import image from "../../images/image1.png";
import Collapse from "./Collapse";
import axios from "axios";

const MedicineContent = (): JSX.Element => {
  const [medicines, setMedicines] = useState<GetMedicineContent[]>([]);
  const [searchedMedicine, setSearchedMedicine] = useState<
    GetMedicineContent[]
  >([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .post(
        "https://eu-west-2.aws.data.mongodb-api.com/app/data-lvbha/endpoint/data/v1/action/findOne",
        {
          collection: "medicines",
          database: "medicine-content",
          dataSource: "Cluster0",
          projection: { _id: 1 },
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            "api-key":
              "mYuwFtj1WnLQIRg86XQnkEv0dQFOi9zj5D8i5dmKbUQdHfavz6Zj1FctSGE7b0fQ",
          },
        },
      )
      .then((response) => {
        // Handle the response data here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("medicines.json")
      .then((res) => res.json())
      .then((data) => setMedicines(data));
    setLoading(false);
  }, []);

  const handleSearch = (searchTerm: string) => {
    const filteredMedicines = medicines.filter((item) =>
      item.medicine.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setSearchedMedicine(filteredMedicines);
  };

  if (!loading) {
    return (
      <React.Fragment>
        <SearchField onSearch={handleSearch} />

        {searchedMedicine.length !== 0 ? (
          searchedMedicine.map((item) => <Collapse content={item} />)
        ) : (
          <img className="mx-auto" src={image} alt="Search Medicine" />
        )}
      </React.Fragment>
    );
  }

  return <Loading fullscreen />;
};

export default MedicineContent;
