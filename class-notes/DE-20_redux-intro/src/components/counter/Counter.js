import { useDispatch, useSelector } from "react-redux";
import { arttir, azalt, resetle } from "../../redux/actions/counterActions";
import "./Counter.css";



const Counter = () => {
  const count1=  useSelector((state)=>state.counterReucer.counterSonuc)
  const yazi= useSelector((state)=>state.counterReducer.text1)
  const dispatch1=useDispatch()

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{count1} </h1>
      <h2>{yazi} </h2>
      <div>
        <button
          className="counter-button positive"
          onClick={()=>dispatch1(arttir())}
        >
          ARTTIR
        </button>
        <button className="counter-button zero"  
        onClick={()=>dispatch1(resetle())}
        >reset</button>
        <button
          className="counter-button negative"
          onClick={()=>dispatch1(azalt())}
        >
          AZALT
        </button>
      </div>
    </div>
  );
};

export default Counter;
