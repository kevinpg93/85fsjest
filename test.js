const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require("./app.js");
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});
let oneEurols = {
    "JPY": 156.65,
    "USD": 1.07,
    "GBP": 0.87,


}


test("One euro should be 1.07 dollars", function () {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * oneEurols["USD"];
    expect(dollars).toBe(expected);
})

test("One dollar should be 146,40", function () {
    const dollars = fromDollarToYen(1);
    const expected = 1/1.07 * oneEurols["JPY"];
    expect(dollars).toBe(expected);
})
test("One pound should be 0.0055", function () {
    const pounds = fromYenToPound(1);
    const expected = 1/156.65 * oneEurols["GBP"];
    expect(pounds).toBe(expected);
})


module.exports = { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound}