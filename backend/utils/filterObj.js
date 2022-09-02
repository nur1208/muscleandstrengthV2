export const filterObj = (obj, ...allowedFields) => {
  const newObj = {};

  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      if (typeof obj[el] === "object") {
        if (obj[el].operation && obj[el].value) {
          if (newObj[`$${obj[el].operation}`]) {
            console.log("multiple array update");
          } else {
            const arrayObject = {};
            arrayObject[el] = obj[el].value;
            newObj[`$${obj[el].operation}`] = arrayObject;
          }
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

  console.log({ newObj });

  return newObj;
};
