import axios from "axios";
import { GetMedicineContent } from "./MedicineContentController.types";

function MedicineContentController() {
  return {
    getMedicines: async (): Promise<GetMedicineContent[]> => {
      const medicineRequest = {
        method: "GET",
        url: "https://medicine-content-api.up.railway.app/api/medicines/content",
      };
      const response = await axios.request(medicineRequest);
      return response.data.data;
    },
  };
}

export default MedicineContentController;
