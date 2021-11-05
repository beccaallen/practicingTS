"use strict";
var dieHolder = document.querySelector(".dieHolder");
var newButton = document.querySelector(".newDie");
var rollButton = document.querySelector(".roll");
var sumButton = document.querySelector(".sum");
var dieArray = [];
var counter = 0;
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.div = document.createElement("div");
        this.div.className = "die";
        this.value = document.createTextNode(counter);
        this.div.append(this.value);
        this.roll();
        dieHolder.appendChild(this.div);
        dieArray.push(this);
        counter++;
        //change value on die on click
        this.div.addEventListener("click", function () { return _this.roll(); });
        //remove obj from div and global array on double click
        this.div.addEventListener("dblclick", function (e) {
            e.this.remove();
            dieArray.splice(e.this, 1);
            // check that correct obj was deleted from global array
            // console.log(dieArray)
        });
    }
    Die.prototype.roll = function () {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div.textContent = this.value;
    };
    return Die;
}());
newButton.addEventListener("click", function () {
    new Die();
});
rollButton.addEventListener("click", function () {
    for (var i_1 = 0; i_1 < dieArray.length; i_1++) {
        dieArray[i_1].roll();
    }
});
sumButton.addEventListener("click", function () {
    var val = dieArray.map(function (a) { return a.value; });
    var reducer = function (previousValue, currentValue) { return previousValue + currentValue; };
    alert(val.reduce(reducer));
    // let sum = 0;
    // dieArray.forEach(Pizzaroll => {
    //   sum+=Pizzaroll.value
    // }
});
