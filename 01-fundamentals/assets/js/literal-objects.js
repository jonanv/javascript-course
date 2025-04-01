let personaje = {
    nombre: "Tony Stark",
    codeName: "Ironman",
    vivo: true,
    edad: 45,
    coods: {
        lat: 34.0345,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark II', 'Mark III', 'Mark IV'],
    direccion: {
        zip: '10001, 90210',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War',
}

console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);

console.log('Coordenadas:', personaje.coods);
console.log('Latitud:', personaje.coods.lat);

console.log('Cantidad de trajes:', personaje.trajes.length);
console.log('Último traje:', personaje.trajes.at(-1));

const x = 'vivo';
console.log('Vivo:', personaje[x]);

console.log('Última película:', personaje['ultima-pelicula']);