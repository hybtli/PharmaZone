import { Locale } from "../locale/types";

const ensure = <A extends unknown[]>(
    value: unknown,
    ...validValues: A
): A[number] => (validValues.includes(value) ? value : validValues[0]);

export const ensureLocale = (text: unknown): Locale =>
    ensure(text, "tr", "en") as Locale;

export default ensure;