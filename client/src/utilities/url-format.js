export default function UrlFormat(value) {
  return value.toLowerCase().replace(/\s+/g, "-");
}
