var expect = require("chai").expect;
var calculator = require("../app/main");

describe("Calculadora - Test", function () {
  describe("Testeando operaciones", function () {
    it("Testing de operacion suma", function () {
      expect(calculator.sum(1, 1)).to.equal(1 + 1);
    });

    it("Testing de operacion resta", function () {
      expect(calculator.resta(1, 1)).to.equal(1 - 1);
    });
  });
});
