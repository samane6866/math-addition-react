import "./App.css";

function randomNumber() {
  return Math.floor(Math.random() * 11);
}

export default function App() {

  return (
    <div className="App">
      <div id="canvas">
        <div id="primary-number">10</div>
        <div id="add">+</div>
        <div id="secondary-number">7</div>
        <div id="equal">=</div>
        <div>
          <input
            type="number"
            id="guess"
          />
        </div>
        <div>
          <button id="btn" >
            Check
          </button>
        </div>
      </div>
    </div>
  );
}
