import React, { useState } from 'react';
import '../styles/calc.css';
import calculate from '../logic/calculate';

function MyComponent() {
  const [result, setResult] = useState('');
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const buttonName = e.target.name;
    const newObj = calculate(obj, buttonName);
    if (buttonName === 'AC') {
      setObj({
        total: null,
        next: null,
        operation: null,
      });
      setResult('');
      return;
    }

    if (buttonName === '=') {
      setObj({
        total: newObj.total,
        next: newObj.next,
        operation: newObj.operation,
      });
      setResult(newObj.total);
    } else {
      setObj({
        total: newObj.total,
        next: newObj.next,
        operation: newObj.operation,
      });
      setResult(newObj.next);
    }
  };

  return (
    <div>
      <header>
        <h2 className="math-heading">Let&apos;s do some math!</h2>
      </header>
      <div className="calc-container">
        <form className="calc-screen">
          <input
            className="pre-screen"
            type="text"
            value={result}
            placeholder="0"
          />
        </form>

        <button
          name="AC"
          className="calc-btn"
          type="button"
          onClick={handleClick}
        >
          AC
        </button>
        <button
          name="+/-"
          className="calc-btn sign-btn"
          type="button"
          onClick={handleClick}
        >
          +/-
        </button>
        <button
          name="%"
          className="calc-btn sign-btn"
          type="button"
          onClick={handleClick}
        >
          %
        </button>
        <button
          name="÷"
          className="calc-btn sign-btn"
          type="button"
          onClick={handleClick}
        >
          ÷
        </button>
        <button
          name="7"
          className="calc-btn"
          type="button"
          onClick={handleClick}
        >
          7
        </button>
        <button
          name="8"
          className="calc-btn"
          type="button"
          onClick={handleClick}
        >
          8
        </button>
        <button
          name="9"
          className="calc-btn"
          type="button"
          onClick={handleClick}
        >
          9
        </button>
        <button
          name="x"
          className="calc-btn sign-btn"
          type="button"
          onClick={handleClick}
        >
          *
        </button>
        <button
          name="4"
          className="calc-btn"
          type="button"
          onClick={handleClick}
        >
          4
        </button>
        <button
          name="5"
          className="calc-btn"
          type="button"
          onClick={handleClick}
        >
          5
        </button>
        <button
          name="6"
          className="calc-btn"
          type="button"
          onClick={handleClick}
        >
          6
        </button>
        <button
          name="-"
          className="calc-btn sign-btn"
          type="button"
          onClick={handleClick}
        >
          -
        </button>
        <button
          name="1"
          className="calc-btn"
          type="button"
          onClick={handleClick}
        >
          1
        </button>
        <button
          name="2"
          className="calc-btn"
          type="button"
          onClick={handleClick}
        >
          2
        </button>
        <button
          name="3"
          className="calc-btn"
          type="button"
          onClick={handleClick}
        >
          3
        </button>
        <button
          name="+"
          className="calc-btn sign-btn"
          type="button"
          onClick={handleClick}
        >
          +
        </button>
        <button
          name="0"
          className="calc-btn calc-btn-zero"
          type="button"
          onClick={handleClick}
        >
          0
        </button>
        <button
          name="."
          className="calc-btn sign-btn"
          type="button"
          onClick={handleClick}
        >
          .
        </button>
        <button
          name="="
          className="calc-btn sign-btn btn-equal"
          type="button"
          onClick={handleClick}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default MyComponent;
