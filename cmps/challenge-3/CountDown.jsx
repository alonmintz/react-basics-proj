const { useState, useEffect, useRef } = React;

export function CountDown({ startFrom, onDone, toTime }) {
  const [count, setCount] = useState(toTime ? toTime - Date.now() : startFrom);
  const [isLast, setIsLast] = useState(false);
  const countInterval = useRef(null);

  useEffect(() => {
    if (count <= 6) {
      setIsLast(true);
    }

    countInterval.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(countInterval.current);
      setIsLast(false);
    };
  }, []);

  useEffect(() => {
    if (count <= 0) {
      if (onDone) onDone();
      clearInterval(countInterval.current);
    }
    if (count === 6) {
      setIsLast(true);
    }
  }, [count]);

  const lastClass = isLast ? "last" : "";
  const numberCounter = String(count).padStart(2, "0");
  const formatTimeLeft = (counter) => {
    const hours = String(Math.floor(counter / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((counter % 3600) / 60)).padStart(2, "0");
    const seconds = String(counter % 60).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <section className="count-down">
      <span className={`counter ${lastClass}`}>
        {toTime ? formatTimeLeft(count) : numberCounter}
      </span>
    </section>
  );
}
