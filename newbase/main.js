const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs').promises;
const path = require('path');
const { email } = require('./dneprusers');
// 2 ШАГ
// база в json формате
const base = path.join(__dirname, 'users.json');

// Массив объектов пользователей с базы в json формате
const getList = async () => {
    const res = JSON.parse(await fs.readFile(base));
    return res;
};

// форма с подготовленными полями
const csvWriter = createCsvWriter({
    path: 'eventUsers.csv',
    header: [
        { id: 'Посилання', title: 'Посилання' },
        { id: 'Ім`я', title: 'Ім`я' },
        { id: 'Призвище', title: 'Призвище' },
        { id: 'По-батькові', title: 'По-батькові' },
        { id: 'Пошта', title: 'Пошта' },
        { id: 'Номертелефону', title: 'Номертелефону' },
        { id: 'Регіон', title: 'Регіон' },
        { id: 'Місто', title: 'Місто' },
        { id: 'Спеціальність', title: 'Спеціальність' },
        { id: 'Років', title: 'Років' },
        { id: 'Стать', title: 'Стать' },
        { id: 'Типроботи', title: 'Тип роботи' },
        { id: 'Місцероботи', title: 'Місце роботи' },
        { id: 'Датанародження', title: 'Дата народження' },
        { id: 'Освіта', title: 'Освіта' },
        { id: 'Посада', title: 'Посада' },
    ],
    encoding: 'utf-8',
});

// FUNCTION GET A STRING AND FORM AN ARRAY WITH OBJECTS
const creatJson = async (email) => {
    const users = await getList();

    const obj = email.toLowerCase().split('\n');

    const filteredBase = users.filter((el) => obj.includes(el.Пошта.toLowerCase()));

    csvWriter.writeRecords(filteredBase).then(() => console.log('The CSV file was written successfully'));
};

creatJson(email);
