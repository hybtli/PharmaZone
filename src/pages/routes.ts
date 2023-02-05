import { DynamicNestedRoute } from "../providers/ReduxRouteProvider/types";

import homeRoutes from "./Home";
import dutyPharmacyRoutes from "./DutyPharmacy";
import medicineContentRoutes from "./MedicineContent";

const routes: DynamicNestedRoute[] = [
    ...homeRoutes,
    ...dutyPharmacyRoutes,
    ...medicineContentRoutes,
];

export default routes;