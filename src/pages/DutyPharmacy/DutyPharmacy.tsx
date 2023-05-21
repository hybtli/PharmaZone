import React, { useEffect, useState } from "react";
import { GetDutyPharmacyDetail } from "../../api/DutyPharmacyController.types";
import API from "../../api";
import { BasicTable } from "./component/Table";
import { Loading } from "../../components";
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

  useEffect(() => {
    (async () => {
      setLoading(true);
      await API.getPharmacies(city, county).then((response) => {
        setPharmacy(response);
      });
      setLoading(false);
    })();
  }, [county]);

  console.log(pharmacy);

  // Getting the provinces of Turkey
  useEffect(() => {
    (async () => {
      await API.getProvinces().then((response) => {
        setProvinces(response);
      });
    })();
  }, []);

  // Getting the districts according to selected province
  const handleDistricts = async (province: string) => {
    await API.getDistricts(province).then((response) => {
      setDistricts(response);
    });
  };

  return (
    <section>
      <div className="flex items-center justify-evenly">
        <select
          className="select select-secondary w-full max-w-xs mt-3"
          disabled={false}
          onChange={(event) => {
            setCity(event.target.value);
            setSelected(true);
          }}
          onClick={() => {
            return handleDistricts(city);
          }}
        >
          <option disabled selected>
            Pick your province
          </option>
          {provinces.map((item, index) => (
            <option key={index} value={item.SehirSlug}>
              {item.SehirAd}
            </option>
          ))}
        </select>

        <select
          className="select select-primary w-full max-w-xs mt-3"
          disabled={!selected}
          onChange={(event) => {
            setCounty(event.target.value);
            setState(true);
          }}
        >
          <option disabled selected>
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
          <Loading fullscreen />
        ) : (
          <BasicTable
            headers={["Name", "Address", "Telephone", "Map"]}
            data={pharmacy}
          />
        )
      ) : (
        <img className="mx-auto my-auto" src={image} alt="Search Pharmacy" />
      )}
    </section>
  );
};

export default DutyPharmacy;
