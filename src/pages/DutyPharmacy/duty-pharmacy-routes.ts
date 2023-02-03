import { lazy } from "react";
import { DynamicRoute } from "../../providers/ReduxRouteProvider/types";

const routes: Array<DynamicRoute> = [
    {
        key: "/duty-pharmacy",
        path: "/duty-pharmacy",
        exact: true,
        component: lazy(() => import("./DutyPharmacy")),
    },
];

export default routes;