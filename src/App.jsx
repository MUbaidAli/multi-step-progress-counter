import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  function next() {
    if (count < 3) setCount((s) => s + 1);
  }

  function prev() {
    if (count > 1) setCount((s) => s - 1);
  }

  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={count >= 1 ? "active" : ""}>1</div>
            <div className={count >= 2 ? "active" : ""}>2</div>
            <div className={count >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">{messages[count - 1]}</p>

          <div className="buttons">
            <button
              onClick={prev}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={next}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
