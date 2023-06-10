const dateRangeError = new RangeError(
  "Valid dates range from 1st January of last year up until today"
);

const fetchError = new Error("There was a problem fetching data");

const invalidArgumentTypesError = new TypeError(
  "Please input the right types of arguments\nThe argument types are as follows:\nvalue: number, fromCurrency: string, toCurrency: string, dateInput: Date"
);

const invalidDateTypeError = new TypeError("Invalid Date");

module.exports = {
  dateRangeError,
  fetchError,
  invalidArgumentTypesError,
  invalidDateTypeError,
};
