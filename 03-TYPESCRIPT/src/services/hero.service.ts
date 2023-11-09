//Investigar como colocar alias para importar modulos
import { heroes } from "../data/heroes"


export const findHeroById = (id: number) => {
    return heroes.find((hero) => hero.id === id)
}