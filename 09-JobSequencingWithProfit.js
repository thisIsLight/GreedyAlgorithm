//Question
//You are given an array with starting time, ending time and profit
//You need to find a way to make maximum profit by doing the jobs such that they don't overlap


//Solution


const jobprofiting = (start,end,profit) => {
    let jobs = new Array(start.length)
    for(let i=0;i<jobs.length;i++){
        jobs[i] = [start[i],end[i],profit[i]]
    }

    jobs.sort((a,b) => {
        return a[1]-b[1]
    })

    let dp = new Array(start.length+1).fill(0)

    for(let i=0;i<jobs.length;i++){
        let [s,e,p] = jobs[i]
        let ind = upperBound(jobs,i,s)
        dp[i + 1] = Math.max(dp[i], dp[ind] + p);
    }
    console.log(dp)
}

function upperBound(jobs, endIndex, targetTime) {
    let low = 0;
    let high = endIndex;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (jobs[mid][1] <= targetTime) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
};


//Inputs

let input1 = [1,2,3,3]
let input2 = [3,4,5,6]
let input3 = [50,10,40,70]

jobprofiting(input1, input2, input3)