import '../styles/calc.css';

function MyComponent() {
  return (
    <div className="calc-container">
      <div className="calc-screen">0</div>
      <button className="calc-btn  sign-btn" type="button">
        AC
      </button>
      <button className="calc-btn sign-btn" type="button">
        +/-
      </button>
      <button className="calc-btn sign-btn" type="button">
        %
      </button>
      <button className="calc-btn  sign-btn" type="button">
        /
      </button>
      <button className="calc-btn" type="button">
        7
      </button>
      <button className="calc-btn" type="button">
        8
      </button>
      <button className="calc-btn" type="button">
        9
      </button>
      <button className="calc-btn  sign-btn" type="button">
        *
      </button>
      <button className="calc-btn" type="button">
        4
      </button>
      <button className="calc-btn" type="button">
        5
      </button>
      <button className="calc-btn" type="button">
        6
      </button>
      <button className="calc-btn sign-btn" type="button">
        -
      </button>
      <button className="calc-btn" type="button">
        1
      </button>
      <button className="calc-btn" type="button">
        2
      </button>
      <button className="calc-btn" type="button">
        3
      </button>
      <button className="calc-btn sign-btn" type="button">
        +
      </button>
      <button className="calc-btn calc-btn-zero" type="button">
        0
      </button>
      <button className="calc-btn" type="button">
        .
      </button>
      <button className="calc-btn sign-btn" type="button">
        =
      </button>
    </div>
  );
}

export default MyComponent;
