
class LinkedList{
    constructor(val , next = null){
        this.val = val
        this.next = next
    }
}

function CreateLL(arr){
    if(!arr.length) return null

    let head = new LinkedList(arr[0])
    let current = head

    for(let i = 1; i < arr.length ; i++){
        current.next = new LinkedList(arr[i])
        current = current.next
    }

    return head
}

const arr = [2,5,8,9,3,3]
console.log(CreateLL(arr))