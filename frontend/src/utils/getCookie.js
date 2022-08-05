export const getCookie = (cname, isJsonObject) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      if (isJsonObject)
        return JSON.parse(c.substring(name.length, c.length));
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
