// API from https://github.com/fawazahmed0/currency-api#readme
const fetch = require("cross-fetch");
const dateUtil = require("./dateUtil");
const errors = require("./errors");

const convertOnDate = async (value, fromCurrency, toCurrency, inputDate) => {
  if (
    typeof value !== "number" ||
    typeof fromCurrency !== "string" ||
    typeof toCurrency !== "string" ||
    !(inputDate instanceof Date)
  ) {
    throw errors.invalidArgumentTypesError;
  }

  if (!dateUtil.dateIsValid(inputDate)) {
    throw errors.invalidDateTypeError;
  }

  if (
    dateUtil.dateIsAfterToday(inputDate) ||
    dateUtil.dateIsBeforeLastYear(inputDate)
  ) {
    throw errors.dateRangeError;
  }

  fromCurrency = fromCurrency.trim().toLowerCase();
  toCurrency = toCurrency.trim().toLowerCase();

  // Format date to YYYY-MM-DD
  const formattedDate = inputDate.toISOString().split("T")[0];
  const url = [
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1",
    formattedDate,
    "currencies",
    fromCurrency,
    toCurrency,
  ].join("/");

  return await fetch(url + ".json")
    .then((res) => res.json())
    .then((data) => value * data[toCurrency])
    .catch((_) => {
      throw errors.fetchError;
    });
};

const convert = async (value, fromCurrency, toCurrency) => {
  if (
    typeof value !== "number" ||
    typeof fromCurrency !== "string" ||
    typeof toCurrency !== "string"
  ) {
    throw errors.invalidArgumentTypesError;
  }

  fromCurrency = fromCurrency.trim().toLowerCase();
  toCurrency = toCurrency.trim().toLowerCase();

  const url = [
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies",
    fromCurrency,
    toCurrency,
  ].join("/");

  return await fetch(url + ".json")
    .then((res) => res.json())
    .then((data) => value * data[toCurrency])
    .catch((_) => {
      throw errors.fetchError;
    });
};

module.exports = {
  convertOnDate,
  convert,
};
