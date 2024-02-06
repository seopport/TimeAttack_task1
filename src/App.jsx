import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { minusNum, plusNum } from "./redux/modules/calculator";
import { useState } from "react";



function App() {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();

  const resultNum = useSelector((state) => {
    return state.calculator.number;
  })

  const handleAddButtonClick = () => {
    dispatch(plusNum(number))
    setNumber(0);
  }
  const handleMinusButtonClick = () => {
    dispatch(minusNum(number))
    setNumber(0);
  }

  const handleValueChange = (e) => {
    setNumber(e.target.value);
  }

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={number} onChange={handleValueChange} /> 만큼을 <button onClick={handleAddButtonClick}>더할게요</button> <button onClick={handleMinusButtonClick}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{resultNum}</p>
      </div>
    </div>
  );
}

export default App;
