// API from https://github.com/fawazahmed0/currency-api#readme
const fetch = require("cross-fetch");

const convert = async (value, fromCurrency, toCurrency) => {
  fromCurrency = fromCurrency.trim().toLowerCase();
  toCurrency = toCurrency.trim().toLowerCase();

  const url = [
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies",
    fromCurrency,
    toCurrency,
  ].join("/");

  return await fetch(url + ".json")
    .then((res) => res.json())
    .then((data) => value * data[toCurrency]);
};

const convertOnDate = async (value, fromCurrency, toCurrency, dateInput) => {
  fromCurrency = fromCurrency.trim().toLowerCase();
  toCurrency = toCurrency.trim().toLowerCase();

  // Format date to YYYY-MM-DD
  const formattedDate = new Date(dateInput).toISOString().split("T")[0];
  const url = [
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1",
    formattedDate,
    "currencies",
    fromCurrency,
    toCurrency,
  ].join("/");

  return await fetch(url + ".json")
    .then((res) => res.json())
    .then((data) => value * data[toCurrency]);
};

module.exports = {
  convert,
  convertOnDate,
};
