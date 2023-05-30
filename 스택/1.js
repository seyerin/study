class stack {
  constructor(){
    this.array = [];
    this.top = 0;
  }

  push(item){
    this.array[this.top] = item; // 처음에 top은 0이니까 배열 0번째에 아이템을 넣겠다 그리고 top을 +1
    this.top = this.top + 1;
    // console.log();
  }
  pop(){
    // if(this.isEmpty == false){
      this.top = this.top - 1;
      return this.array[this.top];
    // }
  }
  peek(){
      return this.array[this.top - 1]; //return 안쓰면 콘솔 안찍힘
    }
    length(){
      return this.top;
    }
  }

let a = new stack();

a.push(10);
a.push(20);
a.push(30);
a.push(40);
a.push(50);

a.pop();
a.pop();
a.pop();

console.log(a);

// a.pop();
console.log(a.length());
// console.log(a.peek());
// console.log(a.pop());
