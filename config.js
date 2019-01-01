/**
 * Путь к файлу с пользователями
 * @type {string}
 */
const USERS_FILE = '../Launcher/users.txt';

/**
 * Шифрование пароля:
 * 1) plain - без шифрования
 * 2) MD5 - хэш сумма пароля
 * @type {string}
 */
const ENCRYPTING = 'MD5';


module.exports.users = USERS_FILE;
module.exports.ecnrypting = ENCRYPTING;