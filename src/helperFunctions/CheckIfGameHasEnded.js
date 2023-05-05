const checkIfGameHasEnded = (lights, startNewGame) => {
  let trueCount = 0;
  for (let i = 0; i < lights.length; i++) {
    for (let j = 0; j < lights[i].length; j++) {
      if (lights[i][j].state === true) {
        trueCount++;
      }
    }
  }

  setTimeout(() => {
    if (trueCount === 0) {
      if (window.confirm("Congrats! Do you want to play again?")) {
        startNewGame();
      }
    }
  }, 0);
};

export default checkIfGameHasEnded;
