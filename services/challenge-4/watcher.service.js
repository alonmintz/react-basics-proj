import { storageService } from "../async-storage.service.js";
import { utilService } from "../util.service.js";

export const watcherService = {
  query,
  get,
  add,
  remove,
};

const STORAGE_KEY = "watchers";
const demoWatchers = [
  {
    id: "demo101",
    fullname: "Action Watcher",
    movies: ["Mad Max", "Die Hard", "Blade"],
  },
  {
    id: "demo102",
    fullname: "Comedy Watcher",
    movies: ["Dumb & Dumber", "SuperBad"],
  },
  {
    id: "demo103",
    fullname: "Kids Watcher",
    movies: ["Super Mario", "Moana", "Frozen", "Toy Story"],
  },
];

_createsWatchers();

function query() {
  return storageService.query(STORAGE_KEY);
}

function get(watcherId) {
  return storageService.get(STORAGE_KEY, watcherId);
}

function add(watcher) {
  return storageService.post(STORAGE_KEY, watcher);
}

function remove(watcherId) {
  return storageService.remove(STORAGE_KEY, watcherId);
}

function _createsWatchers() {
  const watchers = utilService.loadFromStorage(STORAGE_KEY);
  if (!watchers || !watchers.length) {
    utilService.saveToStorage(STORAGE_KEY, demoWatchers);
  }
}
