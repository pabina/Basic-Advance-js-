//15% tip if the bill is between 50-300 else 20% tip should be pay
const billAmount = 275;
let finalpayAmount;
const tipamount =
  50 < billAmount > 300 ? billAmount * (15 / 100) : billAmount * (20 / 100);
finalpayAmount = billAmount + tipamount;
console.log(billAmount, tipamount, finalpayAmount);
