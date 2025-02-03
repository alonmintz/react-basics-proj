const { useState } = React;

export function WatcherCard({ watcher, onRemove, onSelect }) {
  const getRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  };

  const [bgColor, setBgColor] = useState(getRandomColor());

  function getImage() {
    return "assets/img/challenge-4/watcher.png";
  }
  return (
    <section className="watcher-card">
      <img
        src={getImage()}
        alt="watcher image"
        style={{ backgroundColor: bgColor }}
      />
      <h3>{watcher.fullname}</h3>
      <button className="remove" onClick={() => onRemove(watcher.id)}>
        🗑️
      </button>
      <button className="select" onClick={() => onSelect(watcher.id)}>
        Select
      </button>
    </section>
  );
}
