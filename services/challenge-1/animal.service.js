import { storageService } from "../async-storage.service.js";
import { utilService } from "../util.service.js";

export const animalService = {
  getAnimals,
};

const STORAGE_KEY = "animals";

const animalInfos = [
  { id: "test01", type: "Malayan Tiger", count: 787 },
  { id: "test02", type: "Mountain Gorilla", count: 212 },
  { id: "test03", type: "Fin Whale", count: 28 },
];

_createAnimals();

function getAnimals() {
  return storageService.query(STORAGE_KEY);
}

function _createAnimals() {
  let animals = utilService.loadFromStorage(STORAGE_KEY) || null;
  if (!animals || !animals.length) {
    utilService.saveToStorage(STORAGE_KEY, animalInfos);
  }
}
