class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        this.length++;
        const node = new Node(val);

        if(this.head){
            this.tail.next = node;
            this.tail = node;
        }else{
            this.head = node;
            this.tail = node;
        }
        return this;
    }
}

const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

let pointer = list.head;
console.log(pointer);

while(pointer){
    console.log(pointer);
    pointer = pointer.next;

}
