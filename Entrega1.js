let cursos = [{
    id: 0,
    nombre: 'calculo',
    duracion: 6,
    valor: 300000
    },
    {
        id: 1,
        nombre: 'ingles',
        duracion: 5,
        valor: 250000
    },
    {
        id: 2,
        nombre: 'Historia',
        duracion: 6,
        valor: 450000
    },
];


const delay = (amount = number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, amount);
    });
}


async function loop() {
    for (let i = 0; i < cursos.length; i++) {
        console.log("Curso " + i + " :", cursos[i]);
        await delay(2000);
    }

    nombref='calculo';
    let estudianteNota = cursos.find(function(nombreCurso ) {
        return console.log(nombreCurso.nombre == nombref);
    });
}


console.log('Los cursos son los siguientes: ' + '\n' + 'Nota: Duracion del curso en meses');
loop();


const argv = require('yargs')
    .command('promedio', 'Calcular el promedio', opciones)
    .argv


console.log(argv.matematicas + " 1");
console.log( argv + " 2 ");
console.log('El promedio es ' + (argv.m+argv.i+argv.p)/3);