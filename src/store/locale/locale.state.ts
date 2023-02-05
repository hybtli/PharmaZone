import { ensureLocale } from "../../helpers";
import { LocaleState } from "./locale.types";

const localeState = (): LocaleState => {
  return ensureLocale(localStorage.getItem("locale"));
};

export default localeState;
