//DFS
function solution(numbers, target) {
    let count = 0;
    recursive(0, 0);
    function recursive(l, sum){
        if(l === numbers.length){
            if(sum === target)
                count++;
            return;
        }
        recursive(l+1, sum-numbers[l]);
        recursive(l+1, sum+numbers[l]);
    }
    return count;
}

//BFS

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    enqueue(newValue){
        const newNode = new Node(newValue);
        if(this.head === null){
            this.head = this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    dequeue(){
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }
    isEmpty(){
        return this.head === this.tail;
    }
}


function solution(numbers, target) {
    let count = 0;
    const q = new Queue();
    
    q.enqueue([-numbers[0], 1]);
    q.enqueue([numbers[0], 1]);
    
    while(q.isEmpty() === false){
        let [num, l] = q.dequeue();
        
        if(l === numbers.length){
            if(num === target)
                count++;
            continue;
        }else{
            q.enqueue([num-numbers[l], l+1]);
            q.enqueue([num+numbers[l], l+1]);
        }
    }
    return count;
}