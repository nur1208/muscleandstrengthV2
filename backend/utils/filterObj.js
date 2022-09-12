export const filterObj = (obj, ...allowedFields) => {
  const newObj = {};

  Object.keys(obj).forEach((el) => {
    if (el.includes(".<index>")) {
      if (
        allowedFields.includes(
          el.replaceAll(/<.*?\./g, "array.")
        )
      ) {
        newObj[el.replaceAll(/<.*?>/g, "")] = obj[el];
      }
    }

    if (allowedFields.includes(el)) {
      if (typeof obj[el] === "object") {
        if (obj[el].operation && obj[el].value) {
          if (newObj[`$${obj[el].operation}`]) {
            newObj[`$${obj[el].operation}`][el] = obj[el].value;
          } else {
            const arrayObject = {};
            arrayObject[el] = obj[el].value;
            newObj[`$${obj[el].operation}`] = arrayObject;
          }
        } else {
          newObj[el] = obj[el];
        }
      } else {
        if (el === "gender") {
          newObj[el] = obj[el].toLowerCase();
        } else {
          newObj[el] = obj[el];
        }
      }
    }
  });

  return newObj;
};
