import React, { useState } from 'react';
import '../styles/calc.css';
import calculate from '../logic/calculate';

function MyComponent() {
  const [preScreen, setPreScreen] = useState('');
  const [curScreen, setCurScreen] = useState('0');
  const [operation, setOperation] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleButtonClick = (buttonName) => {
    let result = calculate({ total: preScreen, next: curScreen, operation }, buttonName);

    if (buttonName === '=') {
      result = calculate({ total: preScreen, next: curScreen, operation }, buttonName);
      setPreScreen('');
      setCurScreen(result.total || '0');
      setOperation(null);
      setShowResult(true);
    } else {
      setPreScreen(result.total || '');
      setCurScreen(result.next || '0');
      setOperation(result.operation || null);
      setShowResult(false);
    }
  };

  const displayScreen = showResult ? (curScreen || '0') : `${preScreen} ${operation || ''}`;

  return (
    <div className="calc-container">
      <div className="calc-screen">
        <div className="pre-screen">{displayScreen}</div>
        {!showResult && <div className="cur-screen">{curScreen}</div>}
      </div>
      <button className="calc-btn" type="button" onClick={() => handleButtonClick('AC')}>
        AC
      </button>
      <button className="calc-btn sign-btn" type="button" onClick={() => handleButtonClick('+/-')}>
        +/-
      </button>
      <button className="calc-btn sign-btn" type="button" onClick={() => handleButtonClick('%')}>
        %
      </button>
      <button className="calc-btn sign-btn" type="button" onClick={() => handleButtonClick('÷')}>
        ÷
      </button>
      <button className="calc-btn" type="button" onClick={() => handleButtonClick('7')}>
        7
      </button>
      <button className="calc-btn" type="button" onClick={() => handleButtonClick('8')}>
        8
      </button>
      <button className="calc-btn" type="button" onClick={() => handleButtonClick('9')}>
        9
      </button>
      <button className="calc-btn sign-btn" type="button" onClick={() => handleButtonClick('x')}>
        *
      </button>
      <button className="calc-btn" type="button" onClick={() => handleButtonClick('4')}>
        4
      </button>
      <button className="calc-btn" type="button" onClick={() => handleButtonClick('5')}>
        5
      </button>
      <button className="calc-btn" type="button" onClick={() => handleButtonClick('6')}>
        6
      </button>
      <button className="calc-btn sign-btn" type="button" onClick={() => handleButtonClick('-')}>
        -
      </button>
      <button className="calc-btn" type="button" onClick={() => handleButtonClick('1')}>
        1
      </button>
      <button className="calc-btn" type="button" onClick={() => handleButtonClick('2')}>
        2
      </button>
      <button className="calc-btn" type="button" onClick={() => handleButtonClick('3')}>
        3
      </button>
      <button className="calc-btn sign-btn" type="button" onClick={() => handleButtonClick('+')}>
        +
      </button>
      <button className="calc-btn calc-btn-zero" type="button" onClick={() => handleButtonClick('0')}>
        0
      </button>
      <button className="calc-btn sign-btn" type="button" onClick={() => handleButtonClick('.')}>
        .
      </button>
      <button className="calc-btn sign-btn btn-equal" type="button" onClick={() => handleButtonClick('=')}>
        =
      </button>
    </div>
  );
}

export default MyComponent;
