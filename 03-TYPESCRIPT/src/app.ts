import { findHeroById } from "./services/hero.service";

const id = 5
const hero = findHeroById(id)
console.log(hero?.name ?? `Hero with id: ${id} not found!!`);