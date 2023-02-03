import { lazy } from "react";
import { DynamicRoute } from "../../providers/ReduxRouteProvider/types";

const routes: Array<DynamicRoute> = [
    {
        key: "/home",
        path: "/home",
        exact: true,
        component: lazy(() => import("./Home")),
    },
];

export default routes;
