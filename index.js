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
// const createID = async () => {
//     const arr = []
//     for (let i = 0; i < 100000000; i++) {
//         arr.push(Math.floor(Math.random() * 100))
//     }
//     await fs.writeFile(logfile, JSON.stringify(arr))
// }
// createID()

// const getArr = async () => {
//     try {
//         const file = await fs.readFile(logfile)
//         return JSON.parse(file)
//     } catch (err) {
//         console.log(err);
//     }
// }

// const studentsSort = async (stud) => {
//     const start = new Date();
//     let isSorted = false
//     let temp
//     while (!isSorted) {
//         isSorted = true
//         for (let i = 0; i < stud.length - 1; i++) {
//             if (stud[i].age > stud[i + 1].age) {
//                 temp = stud[i]
//                 stud[i] = stud[i + 1]
//                 stud[i + 1] = temp
//                 isSorted = false
//             }
//         }
//     }

//     try {
//         await fs.writeFile(sortedJson, JSON.stringify(stud, null, 2)); // Записываем отсортированный JSON в файл
//         const end = new Date();
//         console.log('Время выполнения:', end - start, 'мс');
//         return stud; // Возвращаем отсортированный массив студентов
//     } catch (err) {
//         console.error('Ошибка при записи в файл:', err);
//         throw err; // Пробрасываем ошибку выше для обработки в вызывающем коде
//     }
// }


// const studentsSort = async (stud) => {
//     const start = new Date();
//     stud = stud.sort((a, b) => a.age - b.age)

//     try {
//         await fs.writeFile(sortedJson, JSON.stringify(stud, null, 2)); // Записываем отсортированный JSON в файл
//         const end = new Date();
//         console.log('Время выполнения:', end - start, 'мс');
//         return stud; // Возвращаем отсортированный массив студентов
//     } catch (err) {
//         console.error('Ошибка при записи в файл:', err);
//         throw err; // Пробрасываем ошибку выше для обработки в вызывающем коде
//     }
// }

// getArr() // Получаем массив студентов из файла
//     .then(students => {
//         // console.log('Исходный массив студентов:', students);
//         return studentsSort(students); // Сортируем массив студентов и записываем в файл
//     })
//     .then(sortedStudents => {
//         // console.log('Отсортированный массив студентов:', sortedStudents);
//     })
//     .catch(error => {
//         console.error('Произошла ошибка:', error);
//     });

const randomNumbers = [22, 443, 543, 3452, 234, 6, 43, 324, 235, 2, 5, 4, 3, 2, 1, 4, 5, 6, 7, 8, 21]


// const bubbleSort = (arr) => {
//     let isSorted = false
//     let temp
//     while (!isSorted) {
//         isSorted = true
//         for (let i = 0; i <= arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 console.log(i);
//                 temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 isSorted = false
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort(randomNumbers));

const sortA = (arr) => {
    let s = false
    let temp
    while (!s) {
        s = true
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                s = false
            }
        }
    }
    return arr
}

console.log(sortA(randomNumbers));