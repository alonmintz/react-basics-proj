import { seasonService } from "../../services/challenge-2/season.service.js";
const { useState, useEffect } = React;

export function SeasonCard() {
  const [dateDetails, setDateDetails] = useState({
    day: "",
    month: "",
    season: "",
  });
  const [isDark, setIsDark] = useState(false);
  const [time, setTime] = useState(getCurrentTimeStr());

  useEffect(() => {
    const newDetails = seasonService.getDateDetails();
    console.log(newDetails);
    setDateDetails(newDetails);
    const timeInterval = setInterval(() => setTime(getCurrentTimeStr()), 1000);
    console.log("clock started");

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  function getCurrentTimeStr() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const currentTime = `${hours}:${minutes}:${seconds}`;
    return currentTime;
  }

  function getImgUrl() {
    if (!dateDetails.season) return;
    return `assets/img/challenge-2/${dateDetails.season}.png`;
  }

  const darkClass = isDark ? "dark" : "";

  return (
    <section className="season-card">
      <article
        className={`season-item ${dateDetails.season.toLowerCase()} ${darkClass}`}
        onClick={() => setIsDark((prevIsDark) => !prevIsDark)}
      >
        <h1>{dateDetails.month}</h1>
        <h1>{dateDetails.season}</h1>
        <img src={getImgUrl()} alt="season image" />
        <h1>{dateDetails.day}</h1>
        <h1>{time}</h1>
      </article>
    </section>
  );
}
