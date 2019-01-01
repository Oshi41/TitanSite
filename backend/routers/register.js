const express = require('express');
const path = require('path');

const config = require('../../config');
const file = require('../helper/file');
const getPass = require('../helper/pass');

function onRegister (request, response, next) {
    let {login, pass} = request.body;

    if (!login || !pass) {
        response.status(400).send('Wrong format');
        return;
    }

    const configPath = path.resolve(__dirname + '../../../', config.users);

    if (file.containsUser(configPath, login)) {
        response.status(401).send('Login was already registered');
        return
    }

    const toAppend = "\n" + login + ": {\n\tusername: \"" + login + "\";\n\tpassword: \""
        + getPass(pass, config.ecnrypting) + "\";\n};";

    file.appendToFile(configPath, toAppend);

    response.send("Success");
}

module.exports = onRegister;