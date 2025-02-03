import { CountDown } from "./CountDown.jsx";

const { useState, useEffect, useRef } = React;

export function CountApp() {
  const sound = new Audio("../assets/audio/timer.mp3");
  const [number, setNumber] = useState(0);
  const [countKey, setCountKey] = useState(0);
  const [isDisplayCounter, setIsDisplayCounter] = useState(false);
  const [isTimerCount, setIsTimerCount] = useState(false);

  function handleNumberChange(event) {
    const value = Math.max(1, Number(event.target.value));
    setNumber(value);
  }

  function handleTimerCheck() {
    setIsTimerCount((prev) => !prev);
  }

  function handleStartCount() {
    setCountKey((prevKey) => prevKey + 1);
    setIsDisplayCounter(true);
  }

  function onCountDone() {
    console.log("DONE!!!");
    sound.play();
    setTimeout(() => setIsDisplayCounter(false), 3000);
  }
  return (
    <section className="count-app">
      <fieldset className="counter-settings">
        <label htmlFor="counter-select">Seconds: </label>
        <input
          id="counter-select"
          type="number"
          value={number}
          onChange={handleNumberChange}
        />
        <label htmlFor="timer-check">Timer Count? </label>
        <input
          id="timer-check"
          type="checkbox"
          onChange={handleTimerCheck}
          checked={isTimerCount}
        />
        <button onClick={handleStartCount}>Start</button>
      </fieldset>
      <article className="counter-display">
        {isDisplayCounter ? (
          <CountDown
            key={countKey}
            startFrom={number}
            onDone={onCountDone}
            toTime={isTimerCount ? Date.now() + number : null}
          />
        ) : (
          <span className="timer-emoji">⏲️</span>
        )}
      </article>
    </section>
  );
}
