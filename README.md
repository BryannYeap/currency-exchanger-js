# Currency Exchanger JS

A light-weight currency converter module that fetches exchange rates daily from [here](https://github.com/fawazahmed0/exchange-api).

## Getting Started

### Installation

This package can be installed using `npm`

```
npm install currency-exchanger-js
```

or `yarn`

```
yarn add currency-exchanger-js
```

### Usage

Import `currency-exchanger-js`.

```
const converter = require('currency-exchanger-js');
```

Use the function you require. There are 2 available functions: `convertOnDate` and `convert`.

<br/>

#### convertOnDate

##### Parameters:

- `value`: number
- `fromCurrency`: string
- `toCurrency`: string
- `inputDate`: Date

Use this method when you need to convert between currencies using the exchange rates on a specific date.

This example converts 1SGD to MYR using the exchange rates on 12th August 2022. Since it returns a promise, you need to use `await`.

```
const sgdToMyr = await converter.convertOnDate(1, "sgd", "myr", new Date("2022-08-12"));
```

Alternatively, you could use `then`.

```
converter.convertOnDate(1, "sgd", "myr", new Date("2022-08-12")).then((res) => {
  console.log(res)); // or do something else
});
```

Note that the date input accepts any valid JavaScript Date object. To find out the possible ways to instantiate valid Date objects, refer [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date).

<br/>

#### convert

##### Parameters:

- `value`: number
- `fromCurrency`: string
- `toCurrency`: string

Use this method when you need to convert between currencies using the exchange rates of today. Similarly, it returns a promise. The following examples show how you can convert 5SGD to MYR using today's exchange rates.

```
const sgdToMyr = await converter.convert(5, "sgd", "myr");
```

```
converter.convert(5, "sgd", "myr").then((res) => {
  console.log(res)); // or do something else
});
```

<br/>

#### Currency

For the currency strings (specifically `fromCurrency` and `toCurrency`), please refer to the keys of this JSON [here](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json). These are internationally recognized currency acronyms.

### Limitations

Due to having dependencies on another repo, it faces the same limitations as that repo, mainly being:

- Historical exchange rates do not go further than 1st Jan of last year
- There could be a possibility of some dates being missing if the scripts from that repo messes up

## Issues

If you find any issues, please report them ❗[here](https://github.com/BryannYeap/currency-exchanger-js/issues)❗

## License

This project is licensed under the [ISC](https://opensource.org/license/isc-license-txt/) license.

## Final Messages

Please do star this repo by clicking on the ⭐ button at the top right of [this repo](https://github.com/BryannYeap/currency-exchanger-js)!
