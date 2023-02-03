import React, { ComponentType } from "react";
// import UserRole from "../../@types/UserRole";

export interface DynamicRoute {
    key: string;
    path: string;
    exact?: boolean;
    // role?: UserRole | UserRole[] | "UNAUTHENTICATED";
    menu?: boolean;
    menuPath?: string;
    label?: string;
    icon?: React.FunctionComponent<unknown>;
    breadcrumb?: string;
    breadcrumbs?: [string, string][];
    component?: React.LazyExoticComponent<ComponentType<Record<string, unknown>>>;
    routes?: Array<DynamicRoute>;
    render?: (props: Record<string, unknown>) => JSX.Element;
}

export type DynamicNestedRoute = DynamicRoute & {
    routes?: (DynamicRoute | DynamicNestedRoute)[];
};