import changeLightState from "./ChangeLightState";

const checkForSolution = (lights, boardSize, startNewGame) => {
  let lightsCopy = JSON.parse(JSON.stringify(lights));

  const possiblePatterns = [
    [true, true, true, false, false],
    [true, true, false, true, true],
    [true, false, true, true, false],
    [true, false, false, false, true],
    [false, true, true, false, true],
    [false, true, false, true, false],
    [false, false, true, true, true],
  ];

  for (let i = 0; i < lightsCopy.length - 1; i++) {
    for (let j = 0; j < lightsCopy[i].length; j++) {
      if (lightsCopy[i][j].state === true) {
        lightsCopy = changeLightState(i + 1, j, lightsCopy, boardSize);
      }
    }
  }

  let lastRow = [];
  for (let i = 0; i < lightsCopy[boardSize - 1].length; i++) {
    lastRow.push(lightsCopy[boardSize - 1][i].state);
  }

  var solutionExists = possiblePatterns.some((a) =>
    lastRow.every((v, i) => v === a[i])
  );

  if (!solutionExists) {
    startNewGame();
  }
};

export default checkForSolution;
