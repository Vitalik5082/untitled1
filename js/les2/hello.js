let hello = ['one',2,true,4,'five',6,false,'eight','nine','ten']
// console.log(hello[0])
// console.log(hello[1])
// console.log(hello[2])
// console.log(hello[3])
// console.log(hello[4])
// console.log(hello[5])
// console.log(hello[6])
// console.log(hello[7])
// console.log(hello[8])
// console.log(hello[9])

for (let i = 0; i < hello.length; i++) {
    console.log(hello[i])
};
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

    let book = {
    title: 1,
    pageCount:2,
    genre:3,
}
console.log(book)
//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: 1,
    pageCount:2,
    genre:3,
    authors:[
        {
            name:'viktor',
            age:23
        }
    ]
}
//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let adm = [
    {
        name: 'anton',
        username: 'anton11',
        password: 133,
    },
    {
        name: 'bernard',
        username: 'bernandino1',
        password: 123234,
    },
    {
        name: 'pavlo',
        username: 'pavlentiy46',
        password: 245234,
    },
    {
        name: 'mukola',
        username: 'klaus47',
        password: 2312234432,
    },
    {
        name: 'vitaliy',
        username: 'vitaha11',
        password: 9330033,
    },
    {
        name: 'iruna',
        username: 'irochka18',
        password: 83822,
    },
    {
        name: 'anatoliy',
        username: 'tolik777',
        password: 000111,
    },
    {
        name: 'Muhailo',
        username: 'mishka999',
        password: 999888,
    },
    {
        name: 'karina',
        username: 'vertalotik777',
        password: 0338332,
    },
    {
        name: 'vladuslav',
        username: 'DVladD',
        password: 234242423,
    },
]
console.log(adm[0].password,adm[1].password,adm[2].password,adm[3].password,adm[4].password,adm[5].password,adm[6].password,adm[7].password,adm[8].password,adm[9].password)
// console.log(adm[1].password)
// console.log(adm[2].password)
// console.log(adm[3].password)
// console.log(adm[4].password)
// console.log(adm[5].password)
// console.log(adm[6].password)
// console.log(adm[7].password)
// console.log(adm[8].password)
// console.log(adm[9].password)
//itin
console.log('-------------------------')
for (const admKey in adm) {
    console.log(admKey);
    console.log(adm[admKey])
    
}