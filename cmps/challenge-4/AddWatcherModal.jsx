const { useState, useEffect } = React;

export function AddWatcherModal({ onAdd, onClose }) {
  const [isOpen, setIsOpen] = useState(true);
  const [newWatcher, setNewWatcher] = useState({ fullname: "", movies: [] });
  const [error, setError] = useState("");

  useEffect(() => {
    console.log(newWatcher);
  }, [newWatcher]);

  const handleMovieChange = (index, value) => {
    const updatedMovies = [...newWatcher.movies];
    updatedMovies[index] = value;
    setNewWatcher({ ...newWatcher, movies: updatedMovies });
  };

  const addMovieInput = () => {
    setNewWatcher((prevWatcher) => ({
      ...prevWatcher,
      movies: [...prevWatcher.movies, ""],
    }));
  };

  const removeMovieInput = (index) => {
    const updatedMovies = newWatcher.movies.filter((_, i) => i !== index);
    setNewWatcher({ ...newWatcher, movies: updatedMovies });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newWatcher.movies.some((movie) => movie.trim() === "")) {
      setError("All movie inputs must be filled in.");
      return;
    }

    setError("");

    onAdd(newWatcher);
    setNewWatcher({ fullname: "", movies: [] });
    onClose();
  };

  return (
    <dialog className="modal add-watcher-modal" open={isOpen}>
      <form onSubmit={handleSubmit} method="dialog">
        <label htmlFor="full-name">Full Name: </label>
        <input
          id="full-name"
          type="text"
          value={newWatcher.fullname}
          onChange={(event) =>
            setNewWatcher((prevWatcher) => ({
              ...prevWatcher,
              fullname: event.target.value,
            }))
          }
          required
        />
        <div>
          <h4>Movies:</h4>
          <button type="button" onClick={addMovieInput}>
            +
          </button>
          {newWatcher.movies.map((movie, index) => (
            <div key={index} className="movie-input">
              <input
                type="text"
                value={movie}
                onChange={(event) =>
                  handleMovieChange(index, event.target.value)
                }
                placeholder="Enter movie name"
              />
              <button type="button" onClick={() => removeMovieInput(index)}>
                -
              </button>
            </div>
          ))}
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <section className="actions">
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>
            X
          </button>
        </section>
      </form>
    </dialog>
  );
}
