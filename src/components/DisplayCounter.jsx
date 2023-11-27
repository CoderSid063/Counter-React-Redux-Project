import { useSelector } from "react-redux";

const DisplayCounter = () => {
  // const counterObj = useSelector((store) =>  store.counter);
  // const counter = counterObj.counterVal ;

  // destructering & store."slice name"
  const { counterVal } = useSelector((store) => store.counter);

  return <p className="lead mb-4">counter Value : {counterVal}</p>;
};
export default DisplayCounter;
