const DAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednsday",
  "thursday",
  "friday",
  "saturday",
];

const getWeekDay = (date) => {
  return DAYS[new Date(date * 1000).getDay()];
};

export default getWeekDay;
