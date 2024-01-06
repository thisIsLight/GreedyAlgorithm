//Question
//You are given an array with number of chocolates in packets. 
//You have N students. YOu need to give each student one chocolate packet and find the difference between the maximum and minimum chocolate packets


//Solution


const minchocolatediff = (arr, studs) => {
    arr.sort((a,b) => {
        return a-b
    })
    let min = Infinity
    for(let i=0;i<arr.length-studs+1;i++){
        min = Math.min(min, arr[i+studs-1]-arr[i])
    }
    return min
}


//Inputs

let input1 = [2,4,5,3,1]
let input2 = 3

console.log(minchocolatediff(input1,input2))