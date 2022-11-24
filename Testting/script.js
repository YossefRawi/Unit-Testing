




function capitalize(string = ""){
    return string.charAt(0).toUpperCase() + string.slice(1);

}

function reverseString(string = ""){
    return string.split("").reverse().join("");
}

const Calculator = {
    
    add: (a, b) => {
      return a + b;
    },
  
    sub: (a, b) => {
      return a - b;
    },
  
    multiply: (a, b) => {
      return a * b;
    },
  
    divide: (a, b) => {
      return a / b;
    }

  }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const cipher = 'bcdefghijklmnopqrstuvwxyza';
  
  const isLowerCase = (char) => {
    if (char == char.toLowerCase() && char != char.toUpperCase()) {
      return true;
    }
    return false;
  };
  
  const isUpperCase = (char) => {
    if (char == char.toUpperCase() && char != char.toLowerCase()) {
      return true;
    }
    return false;
  };
  
  const singleLowerCipher = (char) => {
    const index = alphabet.indexOf(char);
    let cipherCharacter = cipher[index];
    return cipherCharacter;
  };
  
  const caeserCipher = (string) => {
    if (typeof string !== 'string') {
      return 'not a string';
    }
  
    let newString = '';
  
    for (let i = 0; i < string.length; i++) {
      if (isUpperCase(string[i]) || isLowerCase(string[i])) {
        if (isLowerCase(string[i])) {
          newString += singleLowerCipher(string[i]);
        } else if (isUpperCase(string[i])) {
          newString += singleLowerCipher(string[i].toLowerCase()).toUpperCase();
        }
      } else {
        newString += string[i];
      }
    }
    return newString;
  };
  

const numArray = [1,8,3,4,2,6]



function analyzeArray(arr){
  let sumOfArray = arr.reduce((prev,curr) => {
    return prev + curr
  }, 0);
  let arrLen = arr.length
  let averageArr = sumOfArray / arrLen;
  let maximum = Math.max.apply(0, arr);
  let minimum = Math.min.apply(0, arr);
  
  return{
    averageArr,
    maximum,
    minimum,
    arrLen
  }}

console.log(analyzeArray(numArray).maximum)




module.exports = {
    capitalize,
    reverseString,
    Calculator,
    caeserCipher,
    analyzeArray

};