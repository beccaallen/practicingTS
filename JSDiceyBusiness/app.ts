let dieHolder: any = document.querySelector(".dieHolder");
let newButton: any = document.querySelector(".newDie");
let rollButton: any = document.querySelector(".roll");
let sumButton: any = document.querySelector(".sum");
let dieArray:any = [];
let counter: any = 0;

class Die {
  div: any;
  value: any;

  constructor() {
    this.div = document.createElement("div");
    this.div.className = "die";
    this.value = document.createTextNode(counter);
    this.div.append(this.value);
    this.roll();
    dieHolder.appendChild(this.div);
    dieArray.push(this);
    counter++

    //change value on die on click

    this.div.addEventListener("click", () => this.roll());

    //remove obj from div and global array on double click

    this.div.addEventListener("dblclick", function (e: any) {
      e.this.remove();
      dieArray.splice(e.this, 1);
      // check that correct obj was deleted from global array
      // console.log(dieArray)
    });
  }

  roll() {
    this.value = Math.floor(Math.random() * 6) + 1;
    this.div.textContent = this.value;
  }
}

newButton.addEventListener("click", function () {
  new Die();
});

rollButton.addEventListener("click", function () {
  for (let i = 0; i < dieArray.length; i++) {
    dieArray[i].roll();
  }
});

sumButton.addEventListener("click", function () {
  let val = dieArray.map((a: any) => a.value);
  const reducer = (previousValue: number, currentValue: number) => previousValue + currentValue;
  alert(val.reduce(reducer));

  // let sum = 0;
  // dieArray.forEach(Pizzaroll => {
  //   sum+=Pizzaroll.value
  // }
});
