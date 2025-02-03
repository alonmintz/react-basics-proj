const { useState, useEffect } = React;

export function MouseMonitor() {
  const [isOn, setIsOn] = useState(true);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOn) {
      addMouseListener();
    } else {
      removeMouseListener();
    }

    return () => {
      removeMouseListener();
    };
  }, [isOn]);

  function addMouseListener() {
    document.addEventListener("mousemove", updatePos);
  }

  function removeMouseListener() {
    document.removeEventListener("mousemove", updatePos);
  }

  function updatePos(event) {
    setPos({ x: event.clientX, y: event.clientY });
  }

  return (
    <section className="mouse-monitor">
      <h3>Mouse Position</h3>
      <span>
        x: {pos.x}, y:{pos.y}
      </span>
      <button onClick={() => setIsOn(false)}>Pause</button>
      <button onClick={() => setIsOn(true)}>Resume</button>
    </section>
  );
}
