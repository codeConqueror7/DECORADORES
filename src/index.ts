import { Pokemon } from "./decorators/pokemon-class";

function printToConsole(constructor: Function) {

    console.log(constructor)
}

const charmander = new Pokemon('CHarmander');

charmander.publicApi = 'hola mndo'

console.log(charmander)
// console.log(charmander.savePokemonToDB(3));
// charmander.savePokemonToDB(11111)