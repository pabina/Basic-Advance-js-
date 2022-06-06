//condition
//winer should be score double and more than opposite team
const average = (score1, score2, score3) => {
  let totalAvg = (score1 + score2 + score3) / 3;
  return totalAvg;
};
const avaragekoalas = average(110, 166, 188);
const averagedolphin = average(80, 20, 40);

const checkWinner = (avgkoalas, avgdolphin) => {
  if (avgkoalas >= avgdolphin * 2)
    console.log(`koalas win (${avgkoalas} vs ${avgdolphin})`);
  else if (avgdolphin >= avgkoalas * 2)
    console.log(`dolphin win (${avgdolphin} vs ${avgkoalas})`);
  else console.log("no body win the game");
};
checkWinner(avaragekoalas, averagedolphin);
