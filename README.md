# Currency Exchange
<img src="https://github.com/BryannYeap/currency-exchange/assets/77266823/090da79e-3fe8-440e-a459-d1c3fd36f51a" width="150">

A light-weight currency converter module that fetches exchange rates daily from [here](https://github.com/fawazahmed0/currency-api#readme).

## Getting Started
### Installation
This package can be installed using `npm`.
```
npm install currency-exchange
```

### Usage
Import `currency-exchange`.
```
const converter = require('currency-exchange');
```
Use the function you require. There are 2 available functions: `convertOnDate` and `convert`. 

<br/>

#### convertOnDate(value: number, fromCurrency: string, toCurrency: string, inputDate: Date)
Use this method when you need to convert between currencies using the exchange rates on a specific date.
```
const sgdToMyr = converter.convertOnDate(1, "sgd", "myr", new Date("2022-08-12"));
```
Note that the date input accepts any valid JavaScript Date object. To find out the possible ways to instantiate valid Date objects, refer [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date).

<br/>

#### convert(value: number, fromCurrency: string, toCurrency: string)
Use this method when you need to convert between currencies using the exchange rates of today.
```
const sgdToMyr = converter.convertOnDate(1, "sgd", "myr");
```

### Limitations
Due to having dependencies on another repo, it faces the same limitations as that repo, mainly being:
* Historical exchange rates do not go further than 1st Jan of last year
* There could be a possibility of some dates being missing if the scripts from that repo messes up
