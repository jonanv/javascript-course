const arr = new Array(10); // creates an empty array with a length of 10
console.log(arr);

const array = [];
console.log(array); // prints an empty array

let videoGames = ["Zelda", "Mario", "Metroid"];
console.log({videoGames}); // prints the array of video games
console.log(videoGames[0]); // prints "Zelda"

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function() {},
    () => {},
    { a: 1 },
    ["X", "Megaman", "Zero", "Dr. Light", [
        "Dr. Willy",
        "Woodman"
    ]]
];
console.log({arregloCosas}); // prints the array with different data types
console.log(arregloCosas[0]); // prints true
console.log(arregloCosas[2]); // prints "Fernando"
console.log(arregloCosas[7][4][1]); // prints "Woodman"