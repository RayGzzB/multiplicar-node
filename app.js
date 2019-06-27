const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//const { argv } = require('./config/yargs');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(serie => console.log(serie))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
        break;
}
//colors.green('hello')
// console.log(process.argv);




// let parametro = argv[2];
// let