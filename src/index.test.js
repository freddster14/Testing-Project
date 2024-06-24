import {capitalize, reverseString, Calculator, caesarCipher, analyzeArray} from './index'

test('strings first character capitalized', () => {
    expect(capitalize('hello world')).toBe('Hello world');
    expect(capitalize('jest')).toBe('Jest');
    expect(capitalize('12')).toBe('invalid input');
    expect(capitalize(21)).toBe('invalid input');
    expect(capitalize('#*rCv#')).toBe('#*RCv#');
});

test('reverses the string' , () => {
    expect(reverseString('snoops')).toBe('spoons');
    expect(reverseString('like')).toBe('ekil');
    expect(reverseString(23)).toBe('invalid input');
    expect(reverseString('*%GeerT')).toBe('TreeG%*');
    expect(reverseString('321')).toBe('123');
});

test('calculates return result', () => {
    let calculator = new Calculator;
    expect(calculator.add(4, 10)).toBe(14);
    expect(calculator.subtract(67, 27)).toBe(40);
    expect(calculator.divide(115, 5)).toBe(23);
    expect(calculator.multiply(33, 4)).toBe(132);
    expect(calculator.add('3', 2)).toBe(5);
    expect(calculator.subtract('three', 2)).toBe('invalid input');
    expect(calculator.divide(100, 3)).toBe(33);
    expect(calculator.multiply('*%^#', 5)).toBe('invalid input')
});

test('shifts string by num amount return encrypted string', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    expect(caesarCipher('Asta', 14)).toBe('Ogho');
    expect(caesarCipher('Yoshi', 10)).toBe('Iycrs');
    expect(caesarCipher('Y^o%&*', 5)).toBe('D^t%&*');
    expect(caesarCipher(209, 2)).toBe('input is a number')
})

test('array of numbers returns average, min, max, and length' , () => {
    const object = analyzeArray([1,8,3,4,2,6])
    expect(object.average).toBe(4);
    expect(object.min).toBe(1);
    expect(object.max).toBe(8);
    expect(object.length).toBe(6);
})
test('array of numbers with decimal returns average, min, max, and length' , () => {
    const object = analyzeArray([5,8,10,21,33,894,0.5])
    expect(object.average).toBeCloseTo(138.85);
    expect(object.min).toBe(0.5);
    expect(object.max).toBe(894);
    expect(object.length).toBe(7);
})
test('array of numbers returns errors' , () => {
    const object = analyzeArray([-1,'four',10,2,2,60])
    expect(object.average).toBe(10);
    expect(object.min).toBe(-21);
    expect(object.max).toBe(60);
    expect(object.length).toBe(6);
})
test('array of negative numbers returns average, min, max, and length' , () => {
    const object = analyzeArray(['21',22,-542,-10,'1','0'])
    expect(object.average).toBeCloseTo(-84.66);
    expect(object.min).toBe(-542);
    expect(object.max).toBe(22);
    expect(object.length).toBe(6);
})