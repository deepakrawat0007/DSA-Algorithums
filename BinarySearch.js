
const arr = [1,2,3,4,6,7,8,9,12,22,23]


function BinarySearch(arr , target){

    let start = 0;
    let end = arr.length-1

    while(start < end){
        let mid = Math.floor((start+end) / 2);

        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
             start = mid + 1
        }else{
            end = mid - 1
        }

    }
    return -1

}

console.log(BinarySearch(arr , 7))