const heroes = ['Batman', 'Superman', 'WonderWoman', 'Aquaman', 'Flash'];

console.warn('For Loop');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.warn('Forach Loop');
heroes.forEach((hero, index) => {
    console.log(hero);
});

console.warn('For in Loop');
for (const i in heroes) {
    console.log(heroes[i]);
}

console.warn('For of Loop');
for (const hero of heroes) {
    console.log(hero);
}