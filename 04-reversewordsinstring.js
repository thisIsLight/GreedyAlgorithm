//Question
//You are given a string of words and you are supposed to reverse the string with the words intact
//Example : I am here
//Result : here am I


//Solution


const reversestring = (str) => {
    let split = str.split(' ')
    for(let i=0;i<Math.floor(split.length/2);i++){
        let temp = split[i]
        split[i] = split[split.length-1-i]
        split[split.length-1-i] = temp
    }
    return split.join(' ')
}


//Inputs

let input = 'I am here'

console.log(reversestring(input))