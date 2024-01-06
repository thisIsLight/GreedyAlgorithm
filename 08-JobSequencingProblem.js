//Question
//You are given job deadlines with job profits on two different arrays
//You have to find the maximum profit so that the jobs are done


//Solution


const jobscheduling = (deadline, profits) => {
    let jobs = new Array(deadline.length)
    for(let i=0;i<jobs.length;i++){
        jobs[i] = [i,deadline[i],profits[i]]
    }

    jobs.sort((a,b) => {
        return a[2]-b[2]
    })

    let profit = new Array(Math.max(...deadline)+1).fill(-1)

    for(let i=0;i<jobs.length;i++){
        let ending = jobs[i][1]
        for(let j=ending;j>0;j--){
            if(profit[j] == -1 || profit[j] < jobs[i][2]){
                profit[j] = jobs[i][2]
                break
            }
        }
    }

    console.log(profit)
}


//Inputs

let input1 = [4,1,2,1]
let input2 = [40,10,20,30]

jobscheduling(input1,input2)