/*NOTE

    For now, this table component is designed for On-Duty Pharmacy Page
    It is not flexible at the moment
    TAKE CONSIDER THIS !!!

 */

import React from "react";
import { GetDutyPharmacyDetail } from "../../../../api/DutyPharmacyController.types";

type TableProps = {
  headers: string[];
  data: GetDutyPharmacyDetail[];
};

const BasicTable = ({ headers, data }: TableProps) => {
  const showMapClick = (lat: number, lng: number) => {
    window.open(`https://maps.google.com?q=${lat},${lng}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table mx-auto my-10">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.EczaneAdi}</td>
              <td>{item.Adresi}</td>
              <td>{item.Telefon}</td>
              <td>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => showMapClick(item.latitude!, item.longitude!)}
                >
                  Show
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
