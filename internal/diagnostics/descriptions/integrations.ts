import {markup} from "@internal/markup";
import {createDiagnosticsCategory} from "./index";

export const integrations = createDiagnosticsCategory({
	LOAD: (name: string) => ({
		category: "integration/load",
		categoryValue: name,
		message: markup`An error occured during ${name} integration initialization`,
	}),

	MISSING_VERSION: (name: string) => ({
		category: "integration/missingVersion",
		categoryValue: name,
		message: markup`Integration manifest for ${name} is missing a version field that is required for integration loading`,
	}),

	UNSUPPORTED_VERSION: (name: string, range: string) => ({
		category: "integration/unsupportedVersion",
		categoryValue: name,
		message: markup`Unsupported <emphasis>${name}</emphasis> version`,
		advice: [
			{
				type: "log",
				category: "info",
				text: markup`Only versions in the range <emphasis>${range}</emphasis> are supported`,
			},
		],
	}),

	NOT_FOUND: (name: string) => ({
		category: "integration/notFound",
		categoryValue: name,
		message: markup`Could not find <emphasis>${name}</emphasis> relative to this location`,
	}),
});
