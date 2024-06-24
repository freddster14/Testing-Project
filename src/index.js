
function capitalize(string) {
    if (typeof string !== "string") return 'invalid input'
    let newStr = null
    for(let n in string){
        console.log(string.at(n).match(/[a-zA-Z]/g))
        if(string.at(n).match(/[a-zA-Z]/g)){
            newStr = string.replace(`${string.at(n)}`, string.at(n).toUpperCase());
            break;
        }
    }
    if(newStr === null) return 'invalid input'
    return newStr
}

function reverseString(string) {
    if (typeof string !== "string") return 'invalid input'
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
        if(!this.validate(a, b)) return 'invalid input'
        a = Number(a);
        b = Number(b);
        return a + b
    }
    subtract(a, b){
        if(!this.validate(a, b)) return 'invalid input'
        a = Number(a);
        b = Number(b);
        return a - b
    }
    divide(a, b){
        if(!this.validate(a, b)) return 'invalid input'
        a = Number(a);
        b = Number(b);
        return Math.round(a / b)
    }
    multiply(a, b){
        if(!this.validate(a, b)) return 'invalid input'
        a = Number(a);
        b = Number(b);
        return Math.round(a * b)
    }
    validate(a, b){
        if (isNaN(a) || isNaN(b)) return false
        return true
    }
}
function caesarCipher(string, shift) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                    'n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let encrypted = '';
    if(!isNaN(string)) return 'input is a number'
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