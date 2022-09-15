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
    traversal(){
        let current = this.head;

        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
    pop(){
        let current = this.head;
        if(current === null) return undefined;

        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(this.head === null) return undefined;

        let current = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

const list = new SinglyLinkedList();



list.push(9);
list.push(19);
list.push(99);
list.shift();
console.log(list);
