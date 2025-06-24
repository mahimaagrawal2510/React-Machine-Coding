import { useRef } from "react";

export default function CountdownTimer() {
    const hourRef = useRef();
    const minutesRef = useRef();
    const secondsRef = useRef();
    const timerIdRef = useRef(null);

    const createTimer = () => {
        let hours = parseInt(hourRef?.current?.value) || 0;
        let minutes = parseInt(minutesRef?.current?.value) || 0;
        let seconds = parseInt(secondsRef?.current?.value) || 0;

        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(timerIdRef.current);
            return;
        }

        if (seconds > 0) {
            seconds--;
        } else {
            if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            }
        }

        hourRef.current.value = String(hours).padStart(2, '0');
        minutesRef.current.value = String(minutes).padStart(2, '0');
        secondsRef.current.value = String(seconds).padStart(2, '0');
    };

    const startTimer = () => {
        if (timerIdRef.current) return; // Prevent multiple intervals
        timerIdRef.current = setInterval(createTimer, 1000);
    };

    const pauseTimer = () => {
        clearInterval(timerIdRef.current);
        timerIdRef.current = null;
    };

    const resetTimer = () => {
        clearInterval(timerIdRef.current);
        timerIdRef.current = null;
        hourRef.current.value = "";
        minutesRef.current.value = "";
        secondsRef.current.value = "";
    };

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
                <button className="bg-black text-white px-4 py-2 rounded" onClick={startTimer}>Continue</button>
                <button className="bg-black text-white px-4 py-2 rounded" onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
}
