import { Locale } from "../../locale/types";
import { CHANGE_LOCALE, LocaleAction } from "./locale.types";

// eslint-disable-next-line import/prefer-default-export
export const changeLocale = (locale: Locale): LocaleAction => ({
  type: CHANGE_LOCALE,
  payload: locale,
});
