import axios from "axios";
import { GetMedicineContent } from "./MedicineContentController.types";

function MedicineContentController() {
  return {
    getMedicines: async () => {
      const response = axios.get(
        "https://medicine-content-api.up.railway.app/api/medicines/content",
      );
    },
  };
}

export default MedicineContentController;
