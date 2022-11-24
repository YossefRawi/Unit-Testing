const Tests = require('./script');


test('Capitalize the first letter of a word', () => {
    expect(Tests.capitalize("ahmed")).toBe("Ahmed")
})

test('Reverse a String', () => {
    expect(Tests.reverseString("ahmed")).toBe("demha")
})

test('Calculator: addition', () => {
    expect(Tests.Calculator.add(1, 2)).toBe(3)
})
test('Calculator: sub', () => {
    expect(Tests.Calculator.sub(2, 1)).toBe(1)
})
test('Calculator: multiply', () => {
    expect(Tests.Calculator.multiply(1, 2)).toBe(2)
})
test('Calculator: divide', () => {
    expect(Tests.Calculator.divide(2, 1)).toBe(2)
})


test('"aaabbbccc" becomes "bbbcccddd"', () => {
    expect(Tests.caeserCipher('aaabbbccc')).toBe('bbbcccddd');
  });
  
  test('"aAabBbzZz" becomes "bBbcCcaAa"', () => {
    expect(Tests.caeserCipher('aAabBbzZz')).toBe('bBbcCcaAa');
  });
  
  test('"a1ab#bc c" becomes "b1bc#cd d"', () => {
    expect(Tests.caeserCipher('a1ab#bc c')).toBe('b1bc#cd d');
  });
  
  test('1 becomes "not a string"', () => {
    expect(Tests.caeserCipher(1)).toBe('not a string');
  });
  

test('Return the average of an array', () => {
    expect(Tests.analyzeArray([1,2,3,4,5]).averageArr).toBe(3);
});
test('Return the max of an array', () => {
    expect(Tests.analyzeArray([1,2,3,4,5]).maximum).toBe(5);
});
test('Return the min of an array', () => {
    expect(Tests.analyzeArray([1,2,3,4,5]).minimum).toBe(1);
});
test('Return the length of an array', () => {
    expect(Tests.analyzeArray([1,2,3,4,5]).arrLen).toBe(5);
});