import DutyPharmacyController from "./DutyPharmacyController";
import MedicineContentController from "./MedicineContentController";

const API = {
  ...DutyPharmacyController(),
  ...MedicineContentController(),
};

export default API;
