import React, { useEffect, useState } from "react";
import { GetDutyPharmacyDetail } from "../../api/DutyPharmacyController.types";
import API from "../../api";
import BasicTable from "./BasicTable";
import { Loading } from "../../components";
//import Loading from "./loading";
import image from "../../images/image2.png";

const DutyPharmacy = (): JSX.Element => {
  const [pharmacy, setPharmacy] = useState<GetDutyPharmacyDetail[]>([]);
  // storing selected province
  const [city, setCity] = useState("");
  // store selected district
  const [county, setCounty] = useState("");
  // String array for storing all provinces
  const [provinces, setProvinces] = useState<
    {
      SehirAd: string;
      SehirSlug: string;
    }[]
  >([]);
  // String array for storing all districts according to selected province
  const [districts, setDistricts] = useState<
    {
      ilceAd: string;
      ilceSlug: string;
    }[]
  >([]);

  const [selected, setSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  // When province&district is not selected then do not show the table
  const [state, setState] = useState(false);

  // Getting the provinces of Turkey
  useEffect(() => {
    (async () => {
      setLoading(true);
      await API.getProvinces().then((response) => {
        setProvinces(response);
      });
      setLoading(false);
    })();
  }, []);

  // Getting the districts according to selected province
  const handleDistricts = async (province: string) => {
    await API.getDistricts(province).then((response) => {
      setDistricts(response);
    });
  };

  const handlePharmacies = async (district: string) => {
    setLoading(true);
    await API.getPharmacies(city, district).then((response) => {
      setPharmacy(response);
    });
    setLoading(false);
  };

  console.log("city:\n", city);
  console.log("district:\n", county);

  if (!loading) {
    return (
      <section className="flex flex-col items-center justify-center">
        <div className="w-full max-w-xs md:max-w-sm">
          <select
            className="select select-secondary w-full mt-3"
            disabled={false}
            onChange={(event) => {
              setCity(event.target.value);
              setSelected(true);
            }}
            onClick={() => {
              return handleDistricts(city);
            }}
            value={city}
          >
            <option value="" disabled selected>
              Pick your province
            </option>
            {provinces.map((item, index) => (
              <option key={index} value={item.SehirSlug}>
                {item.SehirAd}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full max-w-xs md:max-w-sm mt-3">
          <select
            className="select select-primary w-full"
            disabled={!selected}
            onChange={(event) => {
              setCounty(event.target.value);
              setState(true);
              return handlePharmacies(event.target.value);
            }}
            value={county}
          >
            <option value="" disabled selected>
              Pick your district
            </option>
            {districts.map((item, index) => (
              <option key={index} value={item.ilceSlug}>
                {item.ilceAd}
              </option>
            ))}
          </select>
        </div>

        {state ? (
          loading ? (
            <Loading />
          ) : pharmacy.length > 0 ? (
            <BasicTable
              headers={["Name", "Address", "Telephone", "Map"]}
              data={pharmacy}
            />
          ) : (
            <p>No Content</p>
          )
        ) : (
          <img className="mx-auto my-auto" src={image} alt="Search Pharmacy" />
        )}
      </section>
    );
  }

  return <Loading fullscreen />;
};

export default DutyPharmacy;
