import { useRef, useState } from "react";

export default function CountdownTimer() {
    
    const hourRef = useRef();
    const minutesRef = useRef();
    const secondsRef = useRef();
    const [totalSeconds, setTotalSeconds] = useState(null)
    let timerId = useRef(null);

    const calculateTime = (totalNum) => {
        setTotalSeconds(totalNum)
        let hours = Math.floor(totalNum/3600);
        let remaininsSeconds = totalNum%3600;
        let minutes = Math.floor(remaininsSeconds/60);
        let seconds = remaininsSeconds%=60;
        console.log(hours, minutes, seconds, "time");
        hourRef.current.value = hours;
        minutesRef.current.value = minutes
        secondsRef.current.value = seconds
    }

    const startTimer = () => {
        if(hourRef?.current?.value=="0" && minutesRef?.current?.value == "0" && secondsRef?.current?.value == "0") return;
        setTotalSeconds(parseInt(hourRef?.current?.value) * 3600 + parseInt(minutesRef?.current?.value) *60 + parseInt(secondsRef?.current?.value))
        timerId.current = setInterval(()=>{
            let time = parseInt(hourRef?.current?.value) * 3600 + parseInt(minutesRef?.current?.value) *60 + parseInt(secondsRef?.current?.value) - 1
            calculateTime(time)
        }, 1000)

    }



    const pauseTimer = () => {
        clearInterval(timerId.current)
    }
    const continueTimer = () => {startTimer()}
    const resetTimer = () => {
        hourRef.current.value="0";
        minutesRef.current.value = "0";
        secondsRef.current.value = "0";
        pauseTimer()
        }

    return (
        <div className="flex flex-col gap-8 justify-center items-center">
            <div>Countdown Timer</div>
            <div className="flex gap-4 items-center">
                <div className="flex flex-col items-center gap-2">
                    <span>Hours</span>
                    <input ref={hourRef} className="w-12 h-12 text-center border rounded" />
                </div>
                <span>:</span>
                <div className="flex flex-col items-center gap-2">
                    <span>Minutes</span>
                    <input ref={minutesRef} className="w-12 h-12 text-center border rounded" />
                </div>
                <span>:</span>
                <div className="flex flex-col items-center gap-2">
                    <span>Seconds</span>
                    <input ref={secondsRef} className="w-12 h-12 text-center border rounded" />
                </div>
            </div>

            <div className="flex gap-4">
                <button className="bg-black text-white px-4 py-2 rounded" onClick={startTimer}>Start</button>
                <button className="bg-black text-white px-4 py-2 rounded" onClick={pauseTimer}>Pause</button>
                <button className="bg-black text-white px-4 py-2 rounded" onClick={continueTimer}>Continue</button>
                <button className="bg-black text-white px-4 py-2 rounded" onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
}
