import { lazy } from "react";
import { DynamicRoute } from "../../providers/ReduxRouteProvider/types";

const routes: Array<DynamicRoute> = [
    {
        key: "/medicine-content",
        path: "/medicine-content",
        exact: true,
        component: lazy(() => import("./MedicineContent")),
    },
];

export default routes;