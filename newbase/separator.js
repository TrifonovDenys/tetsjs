const { fullNames } = require('./dneprusers');

const namesSeparotor = (str) => {
    const arrNames = str.split(`\n`);
    const secondName = arrNames.map((name) => name.split(' ')[0]).join('\n');
    const firstName = arrNames.map((name) => name.split(' ')[1]).join('\n');
    const lastName = arrNames.map((name) => name.split(' ')[2]).join('\n');
    console.log(lastName);
};

namesSeparotor(fullNames);
