'use strict';

// Mock DB
let usuarios = [
    { id: 1, nombre: "Sergio", email: "sergio@ua.es", edad: 23 },
    { id: 2, nombre: "Estela", email: "estela@ua.es", edad: 19 }
];

exports.getUsuarios = function() {
  return new Promise(function(resolve, reject) {
    resolve(usuarios);
  });
}

exports.addUsuario = function(usuario) {
  return new Promise(function(resolve, reject) {
    usuario.id = usuarios.length + 1; // Simple ID generation
    usuarios.push(usuario);
    resolve(usuario);
  });
}

exports.updateUsuario = function(id, usuario) {
    return new Promise(function(resolve, reject) {
        const index = usuarios.findIndex(u => u.id == id);
        if (index !== -1) {
            usuarios[index] = { ...usuarios[index], ...usuario };
            resolve(usuarios[index]);
        } else {
            resolve(null);
        }
    });
}

exports.deleteUsuario = function(id) {
    return new Promise(function(resolve, reject) {
        const index = usuarios.findIndex(u => u.id == id);
        if (index !== -1) {
            usuarios.splice(index, 1);
            resolve();
        } else {
            resolve();
        }
    });
}
