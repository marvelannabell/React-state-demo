import { useState } from "react";
const Counter = (props) => {
    const [counter, setCounter] = useState(0);
    const btnIncrementHandler = () => {
        setCounter(state=>state+1)
    }
    const btnDecrementHandler=()=>{
        setCounter(state=>state-1)
    }
    const btnClearHandler=()=>{
        setCounter(0)
    }
    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={btnIncrementHandler} >+</button>
            <button onClick={btnClearHandler} >Clear</button>
            <button onClick={btnDecrementHandler} >-</button>

        </div>
    )
}
export default Counter