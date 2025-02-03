import { watcherService } from "../../services/challenge-4/watcher.service.js";
import { AddWatcherModal } from "./AddWatcherModal.jsx";
import { WatcherCard } from "./WatcherCard.jsx";
import { WatcherModal } from "./WatcherModal.jsx";
const { useState, useEffect } = React;

export function WatcherApp() {
  const [watchers, setWatchers] = useState([]);
  const [selectedWatcher, setSelectedWatcher] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const watcherList = await watcherService.query();
      setWatchers(watcherList);
    };
    fetchData();
  }, []);

  const fetchData = async function () {
    const watcherList = await watcherService.query();
    setWatchers(watcherList);
  };

  useEffect(() => {
    console.log(selectedWatcher);
  }, [selectedWatcher]);

  async function onAddWatcher(newWatcher) {
    const watcher = await watcherService.add(newWatcher);
    console.log("watcher was added: ", watcher);
    const updatedWatchers = [...watchers, watcher];
    setWatchers(updatedWatchers);
    setIsAddOpen(false);
  }

  function onSelectWatcher(watcherId) {
    console.log("selected watcherID: ", watcherId);
    const watcher = watchers.find((watcher) => watcher.id === watcherId);
    if (watcher) setSelectedWatcher(watcher);
  }

  async function onRemoveWatcher(watcherId) {
    try {
      await watcherService.remove(watcherId);
      const updatedWatchers = watchers.filter(
        (watcher) => watcher.id !== watcherId
      );
      setWatchers(updatedWatchers);
    } catch (err) {
      alert("failed to delete watcher");
    }
  }

  function onCloseWatcherModal() {
    setSelectedWatcher(null);
  }

  return (
    <section className="watcher-app">
      <section className="watcher-header">
        <h1>Watcher App</h1>
        <button onClick={() => setIsAddOpen(true)}>Add Watcher</button>
      </section>
      {isAddOpen && (
        <AddWatcherModal
          onAdd={onAddWatcher}
          onClose={() => setIsAddOpen(false)}
        />
      )}
      <section className="watcher-container">
        {watchers.map((watcher) => (
          <WatcherCard
            key={watcher.id}
            watcher={watcher}
            onRemove={onRemoveWatcher}
            onSelect={onSelectWatcher}
          />
        ))}
      </section>
      {selectedWatcher && (
        <WatcherModal watcher={selectedWatcher} onClose={onCloseWatcherModal} />
      )}
    </section>
  );
}
