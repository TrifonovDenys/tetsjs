"use strict";
// function htmlspecialchars(formData: string): string {
//   const replace = formData.split('').map(char => {
//     if (char === '<') return '&lt;'
//     if (char === '>') return '&gt;'
//     if (char === '&') return '&amp;'
//     if (char === '"') return '&quot;'
//     if (char === "'") return '&#039;'
//     return char;
//   }).join()
//   return replace;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptThis = void 0;
const students = [
    {
        name: 'asdasdas',
        age: 22,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 24,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 23,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 2,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 4,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 3,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 221,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 241,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 231,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 222,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 242,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 232,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 223,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 243,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 233,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 224,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 244,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 234,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 225,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 245,
        city: 'kmfksdf'
    },
    {
        name: 'asdasdas',
        age: 235,
        city: 'kmfksdf'
    },
];
// const students = [22, 443, 543, 3452, 234, 6, 43, 324, 235, 2]
// // const studentsSort = (students) => {
// //     const start = new Date();
// //     let isSorted = false
// //     let temp
// //     while (!isSorted) {
// //         isSorted = true
// //         for (let i = 0; i < students.length - 1; i++) {
// //             if (students[i] > students[i + 1]) {
// //                 temp = students[i]
// //                 students[i] = students[i + 1]
// //                 students[i + 1] = temp
// //                 isSorted = false
// //             }
// //         }
// //     }
// //     const end = new Date();
// //     console.log('Время выполнения:', end - start, 'мс');
// //     return students
// // }
// const fs = require('fs').promises
// const { v4: uuidv4 } = require('uuid');
// const path = require('path')
// const logfile = path.join(__dirname, 'MYLOGS.json')
// const sortedJson = path.join(__dirname, "sorted.json")
// // const createID = async () => {
// //     const arr = []
// //     for (let i = 0; i < 1000000; i++) {
// //         arr.push({ id: uuidv4(), age: Math.floor(Math.random() * 100) })
// //     }
// //     await fs.appendFile(logfile, JSON.stringify(arr, null, 2))
// // }
// // createID()
// const getArr = async () => {
//   try {
//     const file = await fs.readFile(logfile)
//     return JSON.parse(file)
//   } catch (err) {
//     console.log(err);
//   }
// }
// const studentsSort = async (stud) => {
//   let isSorted = false
//   let temp
//   while (!isSorted) {
//     isSorted = true
//     for (let i = 0; i < stud.length - 1; i++) {
//       if (stud[i].age > stud[i + 1].age) {
//         temp = stud[i]
//         stud[i] = stud[i + 1]
//         stud[i + 1] = temp
//         isSorted = false
//       }
//     }
//   }
//   try {
//     await fs.appendFile(sortedJson, JSON.stringify(stud)); // Записываем отсортированный JSON в файл
//     console.log('Отсортированный JSON записан в файл:', sortedJson);
//     return stud; // Возвращаем отсортированный массив студентов
//   } catch (err) {
//     console.error('Ошибка при записи в файл:', err);
//     throw err; // Пробрасываем ошибку выше для обработки в вызывающем коде
//   }
// }
// getArr() // Получаем массив студентов из файла
//   .then(students => {
//     console.log('Исходный массив студентов:', students);
//     return studentsSort(students); // Сортируем массив студентов и записываем в файл
//   })
//   .then(sortedStudents => {
//     console.log('Отсортированный массив студентов:', sortedStudents);
//   })
//   .catch(error => {
//     console.error('Произошла ошибка:', error);
//   });
// const lightSort = (students: Student[]) => {
//   const arr: Student[] = []
//   while (students.length > 0) {
//     let index = students.reduce((acc: number, el: Student, index: number, arr: Student[]) => {
//       return el.age > arr[acc].age ? acc : index
//     }, 0)
//     arr.push(students[index])
//     students.splice(index, 1)
//   }
//   return arr
// }
// console.log(lightSort(students));
const encryptThis = (str) => {
    console.log(str);
    return str.split(' ').map(word => {
        if (word.length > 1) {
            return `${word.charCodeAt(0)}${word[word.length - 1]}${word.slice(2, word.length - 1)}${word[1]}`;
        }
        if (word.length == 1) {
            return word[0].charCodeAt(0);
        }
        return word;
    }).join(' ');
};
exports.encryptThis = encryptThis;
console.log((0, exports.encryptThis)("A"));
console.log((0, exports.encryptThis)("A wise old owl lived in an oak"));
