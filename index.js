const addDays = require("date-fns/addDays");

const getNewDate = (days) => {
  const date = addDays(new Date(2020, 08, 22), days);
  let dateFormat = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  return dateFormat;
};
getNewDate(12);
module.exports = getNewDate;
