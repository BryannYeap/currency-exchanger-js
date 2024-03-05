// API from https://github.com/fawazahmed0/exchange-api
const fetch = require("cross-fetch");
const dateUtil = require("./dateUtil");
const errors = require("./errors");

/**
 *
 * @param {number} value
 * @param {string} fromCurrency
 * @param {string} toCurrency
 * @param {Date} inputDate
 * @returns {Promise<number>}
 */
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

  // Format date to YYYY.M.D
  const formattedDate = dateUtil.formatDate(inputDate);

  return await fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${formattedDate}/v1/currencies/${fromCurrency}.json`
  )
    .then((res) => res.json())
    .then((data) => value * data[fromCurrency][toCurrency])
    .catch((_) => {
      throw errors.fetchError;
    });
};

/**
 *
 * @param {number} value
 * @param {string} fromCurrency
 * @param {string} toCurrency
 * @returns {Promise<number>}
 */
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

  return await fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
  )
    .then((res) => res.json())
    .then((data) => value * data[fromCurrency][toCurrency])
    .catch((_) => {
      throw errors.fetchError;
    });
};

module.exports = {
  convertOnDate,
  convert,
};
