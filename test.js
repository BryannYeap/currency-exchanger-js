const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const converter = require("./index");
const errors = require("./errors");

chai.use(chaiAsPromised);

const expect = chai.expect;

describe("convertOnDate", function () {
  describe("#Valid Parameters", function () {
    it("Should return with no error when all parameters are valid", function () {
      return expect(converter.convertOnDate(1, "sgd", "myr", new Date())).to.not
        .be.rejected;
    });
  });

  describe("#Invalid Parameters: value not a number", function () {
    it("Should throw invalid argument types error when value is not a number", function () {
      return expect(
        converter.convertOnDate("1", "sgd", "myr", new Date())
      ).to.be.rejectedWith(errors.invalidArgumentTypesError);
    });
  });

  describe("#Invalid Parameters: fromCurrency not a string", function () {
    it("Should throw invalid argument types error when fromCurrency is not a string", function () {
      return expect(
        converter.convertOnDate(1, 1, "myr", new Date())
      ).to.be.rejectedWith(errors.invalidArgumentTypesError);
    });
  });

  describe("#Invalid Parameters: toCurrency not a string", function () {
    it("Should throw invalid argument types error when toCurrency is not a string", function () {
      return expect(
        converter.convertOnDate(1, "sgd", 1, new Date())
      ).to.be.rejectedWith(errors.invalidArgumentTypesError);
    });
  });

  describe("#Invalid Parameters: inputDate not a date", function () {
    it("Should throw invalid argument types error when inputDate is not a date", function () {
      return expect(
        converter.convertOnDate(1, "sgd", "myr", "new Date()")
      ).to.be.rejectedWith(errors.invalidArgumentTypesError);
    });
  });

  describe("#Invalid Date", function () {
    it("Should throw invalid date error when inputDate is an invalid date", function () {
      return expect(
        converter.convertOnDate(1, "sgd", "myr", new Date("lolol"))
      ).to.be.rejectedWith(errors.invalidDateTypeError);
    });
  });

  describe("#Date too far in the past", function () {
    it("Should throw date range error when inputDate is older than 1st Jan of the previous year", function () {
      return expect(
        converter.convertOnDate(
          1,
          "sgd",
          "myr",
          new Date(new Date().getFullYear() - 2, 0, 1)
        )
      ).to.be.rejectedWith(errors.dateRangeError);
    });
  });

  describe("#Date too far in the future", function () {
    it("Should throw date range error when inputDate is ahead of today", function () {
      return expect(
        converter.convertOnDate(
          1,
          "sgd",
          "myr",
          new Date(new Date().getFullYear() + 2, 0, 1)
        )
      ).to.be.rejectedWith(errors.dateRangeError);
    });
  });
});

describe("convert", function () {
  describe("#Valid Parameters", function () {
    it("Should return with no error when all parameters are valid", function () {
      return expect(converter.convert(1, "sgd", "myr")).to.not.be.rejected;
    });
  });

  describe("#Invalid Parameters: value not a number", function () {
    it("Should throw invalid argument types error when value is not a number", function () {
      return expect(converter.convert("1", "sgd", "myr")).to.be.rejectedWith(
        errors.invalidArgumentTypesError
      );
    });
  });

  describe("#Invalid Parameters: fromCurrency not a string", function () {
    it("Should throw invalid argument types error when fromCurrency is not a string", function () {
      return expect(converter.convert(1, 1, "myr")).to.be.rejectedWith(
        errors.invalidArgumentTypesError
      );
    });
  });

  describe("#Invalid Parameters: toCurrency not a string", function () {
    it("Should throw invalid argument types error when toCurrency is not a string", function () {
      return expect(converter.convert(1, "sgd", 1)).to.be.rejectedWith(
        errors.invalidArgumentTypesError
      );
    });
  });
});
