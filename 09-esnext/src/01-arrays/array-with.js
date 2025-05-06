const superHeroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
    },
    {
        id: 3,
        name: 'Wonder Woman',
    },
    {
        id: 4,
        name: 'Aquaman',
    },
];

// Copy
const superHeroesCopy = [...superHeroes];
superHeroesCopy[0].name = 'Bruce Wayne';

const superHeroesCopy2 = JSON.parse(JSON.stringify(superHeroes));
superHeroesCopy2[0].name = 'Bruce W';

const superHeroesCopy3 = structuredClone(superHeroes);
superHeroesCopy3[0].name = 'Batman';

console.table(superHeroes);
console.table(superHeroesCopy);
console.table(superHeroesCopy2);
console.table(superHeroesCopy3);