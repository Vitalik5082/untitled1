//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
//++
// - Перевести до великого регістру наступні стрінгові значення
let arr = 'hello world';
console.log(arr.length)
let arr2 = 'lorem ipsum';
console.log(arr2.length)
let arr3 = 'javascript is cool';
console.log(arr3.length)
let arrB=arr.toUpperCase()
let arrB2=arr2.toUpperCase()
let arrB3= arr3.toUpperCase()
console.log(arrB,arrB2,arrB3)
console.log(arrB.toLowerCase(),arrB2.toLowerCase(),arrB3.toLowerCase())


// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//+++++++++++++++++++++++++++++++

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
let replace = str.replaceAll(' ', '')
let replace1=replace.replace('y', 'y ')
console.log(replace1)
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
     let str1 = 'Ревуть воли як ясла повні';
const PanasMurnui = str1.split(' ');
console.log(PanasMurnui)
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let Numb =  [10,8,-7,55,987,-1011,0,1050,0]
let numMap = Numb.map(function (value) {
    
})
console.log(numMap)
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
console.log(nums.sort(
    function compareNumbers(a, b) {
        return a - b;
    }))
console.log(nums.sort(
    function compareNumbers(a, b) {
        return b - a;
    }))
// [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//  -- відсортувати його за спаданням за monthDuration
let surt = coursesAndDurationArray.sort((a, b) => {
     return b.monthDuration - a.monthDuration
});
console.log(surt)
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filtr = coursesAndDurationArray.filter(value => value.monthDuration > 5)
console.log(filtr)
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let newId = coursesAndDurationArray.map(function (value, index) {
    let newMap={
         title: value.title,
         monthDuration: value.monthDuration,
         id: index +1
    }
    return newMap
})
console.log(newId)
//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {


let cards = [
    {
    cardSuit: 'spade', value: 6, color:'black',
},
    {cardSuit: 'diamond', value: 6, color:'red',
    },{
    cardSuit: 'heart', value: 6, color:'red',
    },
    {cardSuit: 'clubs', value: 6, color:'black',
    },{
    cardSuit: 'spade', value: 7, color:'black',
    },
    {cardSuit: 'diamond', value:7, color:'red',
    },{
    cardSuit: 'heart', value: 7, color:'red',
    },
    {cardSuit: 'clubs', value: 7, color:'black',
    },
    {cardSuit: 'spade', value: 8, color:'black',
    },
    {cardSuit: 'diamond', value: 8, color:'red',
    },{
    cardSuit: 'heart', value: 8, color:'red',
    },
    {cardSuit: 'clubs', value: 8, color:'black',
    },{
    cardSuit: 'spade', value: 9, color:'black',
    },
    {cardSuit: 'diamond', value: 9, color:'red',
    },{
    cardSuit: 'heart', value: 9, color:'red',
    },
    {cardSuit: 'clubs', value: 9, color:'black',
    },
    {cardSuit: 'spade', value: 10, color:'black',
    },
    {cardSuit: 'diamond', value: 10, color:'red',
    },{
    cardSuit: 'heart', value: 10, color:'red',
    },
    {cardSuit: 'clubs', value: 10, color:'black',
    },
    {cardSuit: 'spade', value: 'ace', color:'black',
    },
    {cardSuit: 'diamond', value: 'ace', color:'red',
    },{
    cardSuit: 'heart', value: 'ace', color:'red',
    },
    {cardSuit: 'clubs', value: 'ace', color:'black',
    },{
    cardSuit: 'spade', value: 'jack', color:'black',
    },
    {cardSuit: 'diamond', value: 'jack', color:'red',
    },{
    cardSuit: 'heart', value: 'jack', color:'red',
    },
    {cardSuit: 'clubs', value: 'jack', color:'black',
    },{
    cardSuit: 'spade', value: 'qeen', color:'black',
    },
    {cardSuit: 'diamond', value: 'qeen', color:'red',
    },{
       cardSuit: 'heart', value: 'qeen', color:'red',
    },
    {cardSuit: 'clubs', value: 'qeen', color:'black',
    },
    {cardSuit: 'spade', value: 'king', color:'black',
    },
    {cardSuit: 'diamond', value: 'king', color:'red',
    },{
    cardSuit: 'heart', value: 'king', color:'red',
    },
    {cardSuit: 'clubs', value: 'king', color:'black',
    },
    {value: 'joker', color:'red',
    },
    {value: 'joker', color:'black',
    }
    ]
console.log(cards)

//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let bdsm = cards.reduce((previousValue, currentValue) => {
    if (currentValue.cardSuit){
        previousValue.spades.push(currentValue);
    } else {previousValue.push(currentValue)};
    return previousValue
}, {spades:[], diamonds:[], hearts:[], clubs:[]};
console.log(bdsm)
// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker