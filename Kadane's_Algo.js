//Kadane's algo used for finding the max sum of sub array

const arr = [-2,1,-3,4,-1,2,1,-5,4]

function MaxSumSubArray(arr){

    let max_Int = Math.pow(2,53) // declare a BigInt high value Integer
    // console.log(max_Int)
    let max_Sum = -max_Int - 1    // declare max sum in -ve infinity
    // console.log(max_Sum)
    let max_End = 0;              // Max End to keep track of all ele in array

    for(let i = 0; i < arr.length ; i++){
        max_End = max_End + arr[i]

        if(max_Sum < max_End){
            max_Sum = max_End
        }
        if(max_End <  0){
            max_End = 0
        }
    }
    return max_Sum
}

console.log(MaxSumSubArray(arr))