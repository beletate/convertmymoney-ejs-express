const convert = require('./convert');

test('plus 4 to 4 to be 16',() => {
    expect(convert.convert(4, 4)).toBe(16);
})

test('plus 0 to 4 to be 1',() => {
    expect(convert.convert(0, 4)).toBe(0);
})

test('toMoney converts float', () => {
    expect(convert.toMoney(21)).toBe("21.00")
})

test('toMoney converts string', () => {
    expect(convert.toMoney("21")).toBe("21.00")
})