const { fullNames } = require('./dneprusers');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'fullNames.csv',
    header: [
        { id: 'Призвище', title: 'Призвище' },
        { id: 'Ім`я', title: 'Ім`я' },
        { id: 'По-батькові', title: 'По-батькові' },
    ],
    encoding: 'utf-8',
});

function replaceMultipleSpaces(str) {
    return str.trim().replace(/\s{2,}/g, ' ');
}

const namesSeparotor = (str, oneLine = true) => {
    // oneLine = 0 || false || '' || undefined || null;
    const arrNames = replaceMultipleSpaces(str).split(`\n`);
    const secondName = arrNames.map((name) => name.split(' ')[0]).join('\n');
    const firstName = arrNames.map((name) => name.split(' ')[1]).join('\n');
    const lastName = arrNames.map((name) => name.split(' ')[2]).join('\n');

    return secondName;
};

const base = namesSeparotor(fullNames);
// console.log(base);

csvWriter.writeRecords(base).then(() => console.log('The CSV file was written successfully'));
