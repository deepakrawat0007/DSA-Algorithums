function Sort012s(arr){
let mid = 0;
let left = 0;
let right = arr.length -1 
let temp = 0;

while(mid <= right){

    if(arr[mid] == 0){
        temp = arr[left]
        arr[left] = arr[mid]
        arr[mid] = temp
        left++
        mid++
    }
    else if(arr[mid] == 1){
        mid++
    }else{
        temp = arr[mid]
        arr[mid] = arr[right]
        arr[right] = temp;
        right--
    }
}
return arr
}

let arr = [1,2,0,0,1,2,0,1]
console.log(Sort012s(arr))