const argv = require('yargs').argv;
const fs = require('fs');

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


nombreInteresado=argv.nombre;
idInteresado=argv.id;
cedulaInteresado=argv.cedula;
inscribirInteresado=argv.inscribir;

const delay = (amount = number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, amount);
    });
}

async function loop() {
    for (let i = 0; i < cursos.length; i++) {
        console.log("Curso " + i + " :", cursos[i]);
        await delay(1);
    }
    console.log('\n');
    z=0;
    let estudianteNota = cursos.find(function(nombreCurso ) {
        //return console.log(nombreCurso.id == idInteresado);
        z=z+1;
        if ((nombreCurso.id == idInteresado)==true) {
            z=z-1
            console.log('El curso que selecciono es: ');
            console.log(cursos[nombreCurso.id]);
            crearArchivo(nombreInteresado, idInteresado, cedulaInteresado,cursos[nombreCurso.id] );

        }else if (z==cursos.length){
            console.log('El ID ingresado no corresponde a ningun curso en el programa, ingrese nuevamente un id valido');
        }
    });

}

let crearArchivo = (nombreInteresado, idInteresado, cedulaInteresado, curso) =>{
    texto= 'Usuario: ' + nombreInteresado + ' ' + ',con CC: ' + cedulaInteresado + ', ha buscado el curso con id: ' + idInteresado + '\n' + 'Los datos del curso que buscó son: ' +
        'id: ' + curso.id + ', nombre: ' + curso.nombre + ', duracion: ' + curso.duracion + ', valor: ' + curso.valor;
    fs.writeFile('Informacion.txt', texto, (err)=>{
        if (err) throw (err);
        console.log('se ha creado el archivo');
    })
};
console.log('Los cursos son los siguientes: ' + '\n' + 'Nota: Duracion del curso en meses');
loop();



