import { useRef } from "react";
import { counterActions } from "../store";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecremet = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(counterActions.add({ num: inputElement.current.value }));
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(counterActions.subtract({ num: inputElement.current.value }));
    inputElement.current.value = "";
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecremet}
        >
          -1
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input
          type="text"
          className="number-input"
          placeholder="Enter number"
          ref={inputElement}
        />
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          ADD
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};
export default Controls;
