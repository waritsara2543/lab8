const calc = require('./calc');

const numbers = [6, 9, 15, -2, 92, 11]

test('min', () => {
    let i, minimum;
    for (i = 0; i < numbers.length; i++) {
        if (i == 0) {
            minimum = numbers[0];
        }
        if (numbers[i] <= minimum) {
            minimum = numbers[i];
        }
    }
    let result = minimum;
    let result2 = calc.min(result)
    expect(calc.min(result2)).toBe(minimum);
})

test('max', () => {
    let i, maximum;
    for (i = 0; i < numbers.length; i++) {
        if (i == 0) {
            maximum = numbers[0];
        }
        if (numbers[i] >= maximum) {
            maximum = numbers[i];
        }
    }
    let result = maximum;
    let result2 = calc.max(result)
    expect(calc.max(result2)).toBe(maximum);
})

test('count', () => {
    let result = numbers.length
    let result2 = calc.count(result)
    expect(calc.count(result2)).toBe(result);
})

test('average', () => {
    let i, average = 0;
    for (i = 0; i < numbers.length; i++) {
        average = average + numbers[i];
    }
    let result = average / numbers.length;

    console.log(average);
    let result2 = calc.avg(result)
    expect(calc.avg(result2)).toBe(result);
})