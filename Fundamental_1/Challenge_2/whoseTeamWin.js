//conditions
//each team should have minumum score of 100 to win the game
//game might be darw whether socre is greater or less than 100
//team having more score than opposite team and greater than 100 points will win the game

let dolphinteamscore1 = 100,
  dolphinteamscore2 = 100,
  dolphinteamscore13 = 100;
let koalasscore1 = 100,
  koalasscore2 = 100,
  koalasscore3 = 100;
let averagedolphin, averagekoalas, winner;
averagedolphin =
  (dolphinteamscore1 + dolphinteamscore2 + dolphinteamscore13) / 3;
averagekoalas = (koalasscore1 + koalasscore2 + koalasscore3) / 3;

if (averagedolphin > averagekoalas && averagedolphin > 100) {
  console.log("dolphin win the game");
} else if (averagekoalas > averagedolphin && averagekoalas > 100) {
  console.log("koalas win the game");
} else if (averagekoalas == averagedolphin && averagekoalas > 100) {
  console.log(" Draw and both win the game");
} else {
  console.log(" Draw and both lose the game");
}
// if (averagedolphin == averagekoalas ) {
//   console.log("game is draw 🤷‍♀️");
// } else if (averagedolphin > averagekoalas) {
//   if (averagedolphin > 100) {
//     console.log("averagedolphin win the game 👏");
//   } else {
//     console.log("both team lose the game 🤦‍♀️");
//   }
// } else if (averagedolphin < averagekoalas) {
//   if (averagekoalas > 100) {
//     console.log("avaragekoalas win the game 👏");
//   } else {
//     console.log("both team lose the game 🤦‍♀️");
//   }
// }
