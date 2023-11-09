"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero_service_1 = require("./services/hero.service");
const id = 5;
const hero = (0, hero_service_1.findHeroById)(id);
console.log(hero?.name ?? `Hero with id: ${id} not found!!`);
