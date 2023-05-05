const changeLightState = (rowIndex, colIndex, lights, boardSize) => {
  const newLights = [...lights];

  newLights[rowIndex][colIndex].state = !newLights[rowIndex][colIndex].state;

  if (colIndex !== 0) {
    newLights[rowIndex][colIndex - 1].state =
      !newLights[rowIndex][colIndex - 1].state;
  }

  if (colIndex !== boardSize - 1) {
    newLights[rowIndex][colIndex + 1].state =
      !newLights[rowIndex][colIndex + 1].state;
  }

  if (rowIndex !== 0) {
    newLights[rowIndex - 1][colIndex].state =
      !newLights[rowIndex - 1][colIndex].state;
  }

  if (rowIndex !== boardSize - 1) {
    newLights[rowIndex + 1][colIndex].state =
      !newLights[rowIndex + 1][colIndex].state;
  }

  return newLights;
};

export default changeLightState;
