function UrlFormat(value) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

export default UrlFormat;
