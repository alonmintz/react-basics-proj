import { AnimalTable } from "../cmps/challenge-1/AnimalTable.jsx";
import { SeasonCard } from "../cmps/challenge-2/SeasonCard.jsx";
import { CountApp } from "../cmps/challenge-3/CountApp.jsx";
import { WatcherApp } from "../cmps/challenge-4/WatcherApp.jsx";
import { MouseMonitor } from "../cmps/challenge-5/MouseMonitor.jsx";

const { useState, useEffect } = React;

export function Home() {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const defaultHome = <h2>Home Sweet Home</h2>;

  function renderChallenge() {
    switch (currentChallenge) {
      case 1:
        return <AnimalTable />;
      case 2:
        return <SeasonCard />;
      case 3:
        return <CountApp />;
      case 4:
        return <WatcherApp />;
      case 5:
        return <MouseMonitor />;
      default:
        return defaultHome;
    }
  }
  return (
    <section className="home">
      <nav className="app-nav">
        <button onClick={() => setCurrentChallenge(1)}>Challenge #1</button>
        <button onClick={() => setCurrentChallenge(2)}>Challenge #2</button>
        <button onClick={() => setCurrentChallenge(3)}>Challenge #3</button>
        <button onClick={() => setCurrentChallenge(4)}>Challenge #4</button>
        <button onClick={() => setCurrentChallenge(5)}>Challenge #5</button>
      </nav>
      <section className="content">{renderChallenge()}</section>
    </section>
  );
}
