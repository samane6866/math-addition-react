import "./App.css";
import { useState } from "react";

function randomNumber() {
  return Math.floor(Math.random() * 11);
}

export default function App() {
  const [firstNumber, setFirstNumber] = useState(randomNumber());
  const [secondNumber, setSecondNumber] = useState(randomNumber());
  const [inputNumber, setInputNumber] = useState("");
  const [showMessage, setshowMessage] = useState(false);
  let isCorrect = firstNumber + secondNumber === +inputNumber;
  function handelOpretion() {
    setshowMessage(true);
  }

  function handelIniciar() {
    setInputNumber("");
    setshowMessage(false);
    setFirstNumber(randomNumber());
    setSecondNumber(randomNumber());
  }

  return (
    <div className="App">
      <div id="canvas">
        <div id="primary-number">{firstNumber}</div>
        <div id="add">+</div>
        <div id="secondary-number">{secondNumber}</div>
        <div id="equal">=</div>
        <div>
          <input
            type="number"
            id="guess"
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handelOpretion} id="btn">
            Check
          </button>
          <button onClick={handelIniciar}>Reset</button>
          {/* Que al pulsar el botón de Reset, se debe calcular un número aleatorio nuevo, y se debe limpiar el input , y ocultar el mensaje */}
        </div>
      </div>
      <div
        style={{
          display: showMessage ? "block" : "none",
        }}
      >
        {isCorrect && <p className="correct">el resultado es correcto</p>}
        {!isCorrect && (
          <p className="incorrect">el resultado NOO es corrrecto</p>
        )}

        {/* /* <p style={{ display: isCorrect ? 'block' : 'none' }} className="correct">El resultado es correcto</p>
        <p style={{ display: !isCorrect ? 'block' : 'none' }} className="incorrect">El resultado es incorrecto</p> */}
      </div>
    </div>
  );
}
