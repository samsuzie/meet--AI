import { createLoader, parseAsInteger, parseAsString} from "nuqs/server";

import { DEFAULT_PAGE } from "@/constants";

export const filtersSearchParams = {
    search: parseAsString.withDefault("").withOptions({ clearOnDefault: true}),
    page: parseAsInteger.withDefault(DEFAULT_PAGE).withOptions({ clearOnDefault: true}),
};
// This line creates a helper (loadSearchParams) that can read filters from the URL (like search text and page number) using the rules in filtersSearchParams, and then makes it available for other parts of the app.
export const loadSearchParams  = createLoader(filtersSearchParams);

