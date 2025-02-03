const { useState } = React;

export function WatcherModal({ watcher, onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <dialog className="modal watcher-modal" open={isOpen}>
      <h2>{watcher.fullname}</h2>
      <h3>Movies:</h3>
      <ul>
        {watcher.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
      <button onClick={onClose}>close</button>
    </dialog>
  );
}
