function dateIsAfterToday(inputDate) {
  inputDate.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return inputDate > today;
}

function dateIsBeforeLastYear(inputDate) {
  inputDate.setHours(0, 0, 0, 0);
  const lastYearFirstJan = new Date(new Date().getFullYear() - 1, 0, 1);
  lastYearFirstJan.setHours(0, 0, 0, 0);
  return inputDate < lastYearFirstJan;
}

function dateIsValid(date) {
  return date instanceof Date && !isNaN(date);
}

module.exports = { dateIsAfterToday, dateIsBeforeLastYear, dateIsValid };
