//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('=================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('=================='.green);

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El Valor dado (${base}), no es un numero.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El Valor dado (${limite}), no es un numero.`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index}\n`;
        }

        resolve(data)
    })

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El Valor de base (${base}), no es un numero.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El Valor limite (${limite}), no es un numero.`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}