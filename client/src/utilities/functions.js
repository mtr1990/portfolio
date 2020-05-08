import { kebabCase } from "lodash";

export function UrlFormat(value) {
  return kebabCase(value);
}
