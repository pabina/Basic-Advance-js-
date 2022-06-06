//compare between mark and jonh BMI
let markHeigherBMI;
const markWeight = 81,
  johnWeight = 70,
  markHeight = 1.6,
  johnHeight = 1.3;
const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
markHeigherBMI = markBMI > johnBMI;
// console.log(markHeigherBMI);
// console.log("jonh BMI  is" + johnBMI);
// console.log("mark Bmi is " + markBMI);
if (markHeigherBMI) {
  console.log(`markBMI is greater than johnBMI 😁 which is ${markBMI}`);
} else {
  console.log(`jonhBMI is greater than markBMI 🤷‍♂️ which is ${johnBMI}`);
}
