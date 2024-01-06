//Question
//You are given an array of candies prices.
//Whenever you pick a candy, you are allowed to pick any other two candies diretly
//You need to find the minimum money needed o that you can pick all the candies


//Solution

const mincostcandies = (arr) => {
    let cost = 0
    arr.sort((a,b) => {
        return a-b
    })

    let i = 0
    let j = arr.length-1

    while(i<=j){
        cost+=arr[i]
        i++
        j--
        j--
    }
    return cost
}


//Inputs

let input = [2,5,4,1,3]

console.log(mincostcandies(input))