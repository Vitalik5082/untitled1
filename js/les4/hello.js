console.log("hello");
// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент

function createArrayWeaweInLog(array) {
    //itof
    for (const arrayKey of array) {
        console.log(arrayKey)
    }
}
createArrayWeaweInLog([1,3,4,6,7,1,8,'dfdf',false])
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createP(noname){
    for (const nonameKey of noname) {
        document.write(`<p>${nonameKey}</p>`)
    }
}
createP([`Хіба ревуть воли, як ясла повні?`])


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUlWidthLi(createLi) {
    for (const liKey of createLi) {
        document.write(`<ul>`)
        document.write(`<li>${createLi}</li>`)
        document.write(`<li>${createLi}</li>`)
        document.write(`<li>${createLi}</li>`)
        document.write(`</ul>`)
    }
}
createUlWidthLi([`«Лихі люди»`])
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим 
// (тут використовувати цикл)
//
function createCicle(morozenko,count)
{
        document.write(`<ul>`)
        for (let i = 0; i < count; i++) {
            document.write(`<li>${morozenko}</li>`)
        }

        document.write(`</ul>`)
        }



createCicle(`Нехай тобі, сину, добро сниться, як ти злякав мене! - промовила вона, піднімаючи його вгору, і пригорнула до себе.`,3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrCreate(array) {
    for (const arr of array){
        console.log(arr)
    }

}
arrCreate([1,2,3,4,5,6,6,0,true])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function mainArr(array) {
    for (const arr of array){
        document.write(
            <div>${array[1]}</div>
        )
    }
}
mainArr([{id:1},{name:Igor},{age:18}])
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250