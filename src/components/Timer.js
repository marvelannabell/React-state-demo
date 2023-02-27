import { useState } from "react";

const Timer = (props) => {

    const [seconds, setSeconds] = useState(props.start);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    console.log('seconds - ' + seconds);

    setTimeout(() => {
        setSeconds(state => state + 1)
        if (minutes === 59) {
            setHours(oldHours => oldHours + 1)
            setMinutes(oldMin => oldMin + 1)
            setMinutes(0)
            setSeconds(0)
        } else if (seconds === 59) {
            setMinutes(oldMin => oldMin + 1)
            setSeconds(0)
        }

    }, 1000)


    return (
        <div>
            <h1>Timer</h1>
            <h2>hours: {hours}</h2>
            <h2> minutes: {minutes}</h2>
            <h2>seconds: {seconds}</h2>
            <button>START</button>
            <button>STOP</button>
            <button>PAUSE</button>


        </div>
    )
}
export default Timer