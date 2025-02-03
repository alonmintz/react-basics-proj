export const seasonService = { getDateDetails };

const dayMap = new Map([
  [1, "Sunday"],
  [2, "Monday"],
  [3, "Tuesday"],
  [4, "Wednesday"],
  [5, "Thursday"],
  [6, "Friday"],
  [7, "Saturday"],
]);

const monthMap = new Map([
  [1, "January"],
  [2, "February"],
  [3, "March"],
  [4, "April "],
  [5, "May"],
  [6, "June"],
  [7, "July "],
  [8, "August"],
  [9, "September"],
  [10, "October "],
  [11, "November"],
  [12, "December"],
]);

const seasonMap = new Map([
  ["Winter", [12, 1, 2]],
  ["Spring", [3, 4, 5]],
  ["Summer", [6, 7, 8]],
  ["Autumn", [9, 10, 11]],
]);

getDateDetails();
function getDateDetails() {
  const current = new Date();
  const month = current.getMonth() + 1;
  const day = current.getDay() + 1;
  return {
    day: dayMap.get(day),
    month: monthMap.get(month),
    season: _populateSeason(month),
  };
}

function _populateSeason(monthNumber) {
  for (const [season, months] of seasonMap.entries()) {
    if (months.includes(monthNumber)) {
      return season;
    }
  }
  return null;
}
