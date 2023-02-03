import { InitAppAction, INIT_APP } from "./init.types";

// eslint-disable-next-line import/prefer-default-export
export const initApp = (): InitAppAction => ({
    type: INIT_APP,
});
