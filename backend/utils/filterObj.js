export const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      if (el === "gender") {
        newObj[el] = obj[el].toLowerCase();
      } else {
        newObj[el] = obj[el];
      }
    }
  });

  return newObj;
};
