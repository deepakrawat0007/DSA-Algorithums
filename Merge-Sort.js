function MergeSort(arr){         // Merge Sort uses divide and Conqurer Rule In Which we divide the array in 2 parts
                                 // and compare both and merge until they get sorted 
    if(arr.length <= 1){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    let left_sorted = MergeSort(left)
    let right_sorted = MergeSort(right)

    return Merge(left_sorted , right_sorted)
}

function Merge(arr1 , arr2){
    let result = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
        }
    }
 while(i < arr1.length){
    result.push(arr1[i])
    i++
 }
 while(j < arr2.length){
    result.push(arr2[j])
    j++
 }

 return result

}

const arr = [2,5,1,9,7,3,7,6,120,10,15]
console.log(MergeSort(arr))  /*[
    1, 2, 3,  5,  6,
    7, 7, 9, 10, 15,
  120
]*/