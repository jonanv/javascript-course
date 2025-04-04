const heroes = ['Batman', 'Superman', 'WonderWoman', 'Aquaman', 'Flash'];

console.warn('For Loop');
// for loop es usado para recorrer arreglos y objetos, pero no es recomendable usarlo para objetos
// ya que recorre los indices y no las propiedades del objeto
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.warn('Forach Loop');
// forEach loop es usado para recorrer arreglos, no se puede usar para objetos
// y no se puede usar break o continue, pero si se puede usar return
heroes.forEach((hero, index) => {
    console.log(hero);
});

console.warn('For in Loop');
// for in loop es usado para recorrer objetos, no es recomendable usarlo para arreglos
// ya que recorre las propiedades del objeto y no los indices
// y se puede usar break y continue, pero no se puede usar return
for (const i in heroes) {
    console.log(heroes[i]);
}

console.warn('For of Loop');
// for of loop es usado para recorrer arreglos, strings, maps, sets y otros objetos iterables
// no se puede usar para objetos, pero si se puede usar break y continue
// y se puede usar return, pero no se puede usar el index
for (const hero of heroes) {
    console.log(hero);
}