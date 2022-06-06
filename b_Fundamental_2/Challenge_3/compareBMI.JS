//compare BMI using object;
const mark = {
  fullName: "mark miller",
  mass: 108,
  height: 1.69,
  calBMI() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};
const john = {
  fullName: "john smith",
  mass: 98,
  height: 1.69,
  calBMI() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};
const markBMI = mark.calBMI();
const johnBMI = john.calBMI();

// console.log(mark);
mark.BMI > john.BMI
  ? console.log(
      `${mark.fullName}'s bmi (${mark.BMI}) is higher than ${john.fullName}'s bmi (${john["BMI"]}) `
    )
  : console.log(` john bmi (${johnBMI}) is higher than mark bmi (${markBMI}) `);

//array with practice_1
// const myarr = [];
// const year = [2000, 2001, 2003, 9000, 3000];
// for (let i = 0; i <= year.length - 1; i = i + 1) {
//   myarr.push(year[i]);
// }
// console.log(myarr);

//loop practice_1
// let dic = 0;
// while (dic < 6) {
//   dic = Math.trunc(Math.random() * 6) + 1;
//   console.log(dic);
// }
