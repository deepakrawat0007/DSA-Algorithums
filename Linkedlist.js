
const arr = [2, 5, 8, 9, 3, 3]

class LinkedList {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

function CreateLL(arr) {
    if (!arr.length) return null

    let head = new LinkedList(arr[0])
    let current = head

    for (let i = 1; i < arr.length; i++) {
        current.next = new LinkedList(arr[i])
        current = current.next
    }

    return head
}
let head = CreateLL(arr)

function AddnewNodeInLast(head, element) {
    let temp = head

    while (temp !== null) {
        if (temp.next === null) {
            temp.next = new LinkedList(element)
            break;
        }
        temp = temp.next
    }
    return head
}
//console.log(AddnewNodeInLast(head , 5))

// delete a element from list

function deleteNode(head, index) {
    let size = 0;
    let temp = head;

    while (temp !== null) {
        size++
        if (size === index) {
            // temp.next = null
            temp.next = temp.next.next
        }
        temp = temp.next
    }

    return head
}

// console.log(deleteNode(head , 2))


