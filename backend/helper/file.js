const fs = require('fs');

/**
 * Дописывает текст в конец файла
 * @param file - путь к файлу
 * @param text - текст
 */
function appendToFile(file, text){
    fs.appendFile(file, text, function (error) {
        if (error)
            console.log("Error while reading");
        else
            console.log('Success');
    });
}

/**
 * Есть ли такой пользователь в файле
 * @param file - список пользователей
 * @param user - логин
 */
function containsUser(file, user) {
    let buffer = fs.readFileSync(file, 'utf8');
    const splitted = buffer.split('\n');
    user = user.toLowerCase();

    for (let i = 0; i < splitted.length; i++) {
        const line = splitted[i].toLowerCase();
        if (line.indexOf('username') > -1) {
            const first = line.indexOf('"') + 1;
            const last = line.indexOf('"', first);

            if (last < 0 || first < 0)
                continue;

            const name = line.substr(first, last - first);

            if (name === user){
                return true;
            }
        }
    }
    return false;
}


module.exports.containsUser = containsUser;
module.exports.appendToFile = appendToFile;