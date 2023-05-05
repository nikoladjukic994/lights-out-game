import { useEffect, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import checkForSolution from "./helperFunctions/CheckForSolution";
import checkIfGameHasEnded from "./helperFunctions/CheckIfGameHasEnded";
import shuffleLights from "./helperFunctions/ShuffleLights";
import changeLightState from "./helperFunctions/ChangeLightState";

function App() {
  const [lights, setLights] = useState([]);
  const [gameNumber, setGameNumber] = useState(0);
  const boardSize = 5;

  useEffect(() => {
    startNewGame();
  }, []);

  useEffect(() => {
    lights.length && checkIfGameHasEnded(lights, startNewGame);
  }, [lights]);

  useEffect(() => {
    lights.length && checkForSolution(lights, boardSize, startNewGame);
  }, [gameNumber]);

  const startNewGame = () => {
    setLights(shuffleLights(boardSize));
    setGameNumber(gameNumber + 1);
  };

  return (
    <div className="App">
      <table>
        <tbody>
          {lights.map((row, rowIndex) => (
            <tr key={"row" + rowIndex}>
              {row.map((light, colIndex) => (
                <td
                  onClick={() =>
                    setLights(
                      changeLightState(rowIndex, colIndex, lights, boardSize)
                    )
                  }
                  key={light.id}
                >
                  {light.state ? (
                    <FontAwesomeIcon icon={faLightbulb} className="active" />
                  ) : (
                    <FontAwesomeIcon icon={faLightbulb} />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={startNewGame}>Reset the board</button>
    </div>
  );
}

export default App;
