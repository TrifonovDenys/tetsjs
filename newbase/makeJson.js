const csvToJson = require('convert-csv-to-json');
const path = require('path');
const { all, odd } = require('./dneprusers');
// 1 ШАГ
// файл csv
const base = path.join(__dirname, 'users.csv');
// пустой json файл
const json = path.join(__dirname, 'users.json');
// перевод из csv в json
csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(base, json);

console.log('JSON file has been saved.');

// найти отличие в списках почт
// const findDifrence = (all, odd) => {
//   res = all.split('\n').filter((el) => !odd.includes(el));
//   console.log(res);
//   return res;
// };

// findDifrence(all, odd);
