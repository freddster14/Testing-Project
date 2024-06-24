
function capitalize(string) {
    const firstChar = string.at(0).toUpperCase()
    const notFirstChar = string.slice(1, string.length)
    return firstChar + notFirstChar
}

function reverseString(string) {
    let length = string.length;
    let reversed = '';
    for(let n in string){
        length = length -= 1
        reversed += string[length]
    }
    return reversed
} 
class Calculator{
    add(a, b){
        return a + b
    }
    subtract(a, b){
        return a - b
    }
    divide(a, b){
        return a / b
    }
    multiply(a, b){
        return a * b
    }
}
function caesarCipher(string, shift) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                    'n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let encrypted = '';
    for(let n in string){
        //Pushes none characters
        if(!string[n].match(/[a-zA-Z]/g)) {
            encrypted += string[n]
            continue;
        }
        let index = alphabet.indexOf(string[n].toLowerCase())
        index += shift;
        if(index > 25) index -= 26;
        //Checks UpperCase
        if(string[n] === string[n].toUpperCase() && string[n] !== string[n].toLowerCase()){
            encrypted += alphabet[index].toUpperCase()
        }else{ encrypted += alphabet[index]}
    }
    return encrypted
}
function analyzeArray(array) {
        let object = {};

        let total = 0;
        for(let n in array){
            total += array[n]
        }
        object.average = total / array.length;
    
        let min = array[0];
        for(let n in array){
            if(min > array[n]) min = array[n]
        }
        object.min = min;

        let max = array[0]
        for(let n in array){
            if(max < array[n]) max = array[n]
        }
        object.max = max;
        object.length = array.length;
        return object
}

export {capitalize, reverseString, Calculator, caesarCipher, analyzeArray};