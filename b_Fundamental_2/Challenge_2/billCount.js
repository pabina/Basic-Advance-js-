const tipcal = (mybill) => {
  return mybill > 50 && mybill < 300 ? mybill * 0.15 : mybill * 0.2;
};

const bills = [200, 300, 400];
const tiparr = [
  tipcal(bills[0]),
  tipcal(bills[1]),
  tipcal(bills[bills.length - 1]),
];
const total = [
  bills[0] + tiparr[0],
  bills[1] + tiparr[1],
  bills[bills.length - 1] + tiparr[bills.length - 1],
];
console.log(`provided bills:${bills}
tips: ${tiparr}
 total expences:${total}`);

//object practice_1
// const myobj = {
//   name: "john",
//   friends: ["mike", "sandi", "willson"],
// };
// console.log(
//   `${myobj.name} has ${myobj.friends.length} and his best friend is ${myobj.friends[0]}`
// );

//practise_2 object
// const myobj = {
//   name: "john",
//   age: 47,
//   friends: ["mike", "sandi", "willson"],
//   hasjob: true,
//   mymethod() {
//     if (myobj.hasjob) {
//       console.log(`${myobj.name} is ${myobj.age} and he has a job`);
//     } else console.log(`${myobj.name} is ${myobj.age} and he has a  no job`);
//   },
// };
// myobj.mymethod();
console.log();
