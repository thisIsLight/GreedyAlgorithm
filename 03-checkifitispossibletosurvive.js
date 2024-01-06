//Question
//You are on an island
//You are given three inputs : Meals you can buy in one day, meal you need to survive for a day and number of days
//You need to return if you can survive on that island


//SOlution

const cansurvive = (buy, need, days) => {
    let totalneed = days*need
    let totalbought = buy*days

    return totalneed <= totalbought
}


//Inputs

let input1 = 5
let input2 = 4
let input3 = 10

console.log(cansurvive(input1,input2,input3))