import originalSlugify from "slugify";

type SlugifyOptions = {
  replacement?: string;
  remove?: RegExp;
  lower?: boolean;
  strict?: boolean;
  locale?: string;
};

function slugify(string: string): string;
function slugify(string: string, options: SlugifyOptions): string;
function slugify(string: string, replacement: string): string;
function slugify(
  string: string,
  optionsOrReplacement?: SlugifyOptions | string,
): string {
  const options =
    typeof optionsOrReplacement === "string"
      ? optionsOrReplacement
      : { lower: true, strict: true, ...optionsOrReplacement };

  return originalSlugify(string, options);
}

export default slugify;
