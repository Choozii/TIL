class Queue{
  constructor(){
      this.queue=[];
      this.front = 0;
      this.rear = 0;
  }
  dequeue(){
      let val = this.queue[this.front];
      delete this.queue[this.front];
      this.front++;
      return val;
  }
  enqueue(v){
      this.queue[this.rear++] = v;
  }
  size(){
      return this.rear - this.front;
  }
  peek(){
      return this.queue[this.front];
  }
}

function solution(priorities, location) {
  const q = new Queue();
  
  for(let i=0;i<priorities.length;i++){
      q.enqueue([priorities[i],i]);
  }
  priorities.sort((a,b) => b-a);
  
  let count = 0;
  while(q.size() > 0){
      let [val, idx] = q.peek();
      if(val < priorities[count]){
          q.enqueue(q.dequeue());
      }else{
          q.dequeue();
          count++;
          if(location === idx) 
              return count;
      }
  }
}