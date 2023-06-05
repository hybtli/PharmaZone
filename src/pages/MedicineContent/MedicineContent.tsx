import React, { useEffect, useState } from "react";
import { Loading, SearchField } from "../../components";
import { GetMedicineContent } from "../../api/MedicineContentController.types";
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
    (async () => {
      setLoading(true);
      await axios
        .get(
          "https://medicine-content-api.up.railway.app/api/medicines/content",
        )
        .then((response) => {
          setMedicines(response.data.data);
        });
      setLoading(false);
    })();
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
