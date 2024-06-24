import {capitalize, reverseString, Calculator, caesarCipher, analyzeArray} from './index'

test('strings first character capitalized', () => {
    expect(capitalize('hello world')).toBe('Hello world');
    expect(capitalize('jest')).toBe('Jest');
});

test('reverses the string' , () => {
    expect(reverseString('snoops')).toBe('spoons');
    expect(reverseString('like')).toBe('ekil');
});

test('calculates return result', () => {
    let calculator = new Calculator;
    expect(calculator.add(4, 10)).toBe(14);
    expect(calculator.subtract(67, 27)).toBe(40);
    expect(calculator.divide(115, 5)).toBe(23);
    expect(calculator.multiply(33, 4)).toBe(132);
});

test('shifts string by num amount return encrypted string', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test('array of numbers returns average, min, max, and length' , () => {
    const object = analyzeArray([1,8,3,4,2,6])
    expect(object.average).toBe(4);
    expect(object.min).toBe(1);
    expect(object.max).toBe(8);
    expect(object.length).toBe(6);
})