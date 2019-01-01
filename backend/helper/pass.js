const md5 = require('md5');
/**
 * Возвращает пароль в зависимости от типа шифрования
 * @param pass - пароль
 * @param encryption - тип шифрования
 */
function getPassword(pass, encryption) {
    switch (encryption) {
        case 'MD5':
            return md5(pass);

        default:
            return pass.replace('"', '\"');
    }
}

module.exports = getPassword;