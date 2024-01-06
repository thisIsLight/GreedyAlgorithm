//Question
//We are supposed to host N meetings in a room for which we are given the start and end times.
//We need to find maximum number of meetings that we can host in the meeting room


//Solution

const maxmeetings = (starttimes, endtimes) => {

    let meets = new Array(starttimes.length)

    //Creating meeting schedule array for easy acccess and sorting together
    for(let i=0;i<starttimes.length;i++){
        meets[i] = [starttimes[i], endtimes[i]]
    }

    //sorting meetings because we want to always pick the meeting that ends first
    //Here we are sorting on the basis of end time of the meetings
    meets.sort((a,b) => {
        return a[1]-b[1]
    })

    //we check if the end time of the previously happened meet is smaller than the start time fo the next meeet or not and add it
    //to count if it is
    let count = 0
    let lastmeetend = -1
    for(let i=0;i<meets.length;i++){
        if(lastmeetend < meets[i][0]){
            count++
            lastmeetend = meets[i][1]
        }
    }
    return count
}


//Inputs

let input1 = [1,3,0,5,8,5]
let input2 = [2,4,6,7,9,9]

console.log(maxmeetings(input1, input2))