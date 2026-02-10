'use strict';

var utils = require('../utils/writer.js');
var DefaultService = require('../service/DefaultService');

// Since we don't have the generated utils, we mock the response handling
const sendJson = (res, status, payload) => {
    res.status(status).json(payload);
};

module.exports.getUsuarios = function getUsuarios(req, res, next) {
    DefaultService.getUsuarios()
        .then(function (response) {
            sendJson(res, 200, response);
        })
        .catch(function (response) {
            sendJson(res, 500, response);
        });
};

module.exports.addUsuario = function addUsuario(req, res, next) {
    var body = req.body;
    DefaultService.addUsuario(body)
        .then(function (response) {
            sendJson(res, 200, response);
        })
        .catch(function (response) {
            sendJson(res, 500, response);
        });
};

module.exports.updateUsuario = function updateUsuario(req, res, next) {
    var id = req.params.id;
    var body = req.body;
    DefaultService.updateUsuario(id, body)
        .then(function (response) {
            sendJson(res, 200, response);
        })
        .catch(function (response) {
            sendJson(res, 500, response);
        });
};

module.exports.deleteUsuario = function deleteUsuario(req, res, next) {
    var id = req.params.id;
    DefaultService.deleteUsuario(id)
        .then(function (response) {
            sendJson(res, 200, response);
        })
        .catch(function (response) {
            sendJson(res, 500, response);
        });
};
