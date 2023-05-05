const shuffleLights = (boardSize) => {
  let array = [];
  for (let i = 0; i < boardSize; i++) {
    let subArray = [];
    for (let j = 0; j < boardSize; j++) {
      let randomBoolean = Math.random() < 0.5;
      subArray.push({ id: j + i * boardSize, state: randomBoolean });
    }
    array.push(subArray);
  }

  return array;
};

export default shuffleLights;
