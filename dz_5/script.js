// ЗАДАНИЕ №1 ======================================================================

/*

Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
keyin1: 1,
keyin2: 2,
keyin3: 3,
keyin4: 4,
keyin5: 5,
keyin6: 6,
keyin7: 7,
}

*/

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};

for (elem in numbers) {
    if (numbers[elem] >= 3) {
        console.log(numbers[elem]);
    }
}

//==================================================================================

// ЗАДАНИЕ №2 ======================================================================

/*

Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
author: "John", // вывести этот текст
postId: 23,
comments: [
{
userId: 10,
userName: "Alex",
text: "lorem ipsum",
rating: {
likes: 10,
dislikes: 2, // вывести это число
},
},
{
userId: 5, // вывести это число
userName: "Jane",
text: "lorem ipsum 2", // вывести этот текст
rating: {
likes: 3,
dislikes: 1,
},
},
],
};

*/

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(post['author']);  // John
console.log(post['comments'][0]['rating']['dislikes']);  // 2
console.log(post['comments'][1]['userId']);  // 5
console.log(post['comments'][1]['text']);  // lorem ipsum 2

//==================================================================================

// ЗАДАНИЕ №3 ======================================================================

/*

Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const products = [
{
id: 3,
price: 200,
},
{
id: 4,
price: 900,
},
{
id: 1,
price: 1000,
},
];

*/

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach((itemObj) => {
    itemObj['price'] *= 0.85;
});

console.log(products);

//==================================================================================

// ЗАДАНИЕ №4 ======================================================================

/*

1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

const products = [
{
id: 3,
price: 127,
photos: [
"1.jpg",
"2.jpg",
],
},
{
id: 5,
price: 499,
photos: [],
},
{
id: 10,
price: 26,
photos: [
"3.jpg",
],
},
{
id: 8,
price: 78,
},
];

*/

const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];


// 4.1. Сделал через новый объект. Не разобрался, можно ли фильтровать объект на месте?
let filterResult = products2.filter((elem) => {
    if ('photos' in elem && elem['photos'].length) {
        return elem;
    };
}
)
console.log(filterResult);

// 4.2.1
let sortResult = products2.sort((sortElem1, sortElem2) => {
    return sortElem1.price - sortElem2.price
} )

console.log(sortResult);

// 4.2.2 
let sortResultVar2 = products2.sort((sortElem1, sortElem2) => {
    if (sortElem1.price > sortElem2.price) {
        return 1
    }
    if (sortElem1.price < sortElem2.price) {
        return -1
    }
        return 0
} )

console.log(sortResult);

//==================================================================================

// ЗАДАНИЕ №5 ======================================================================

/*

Дано 2 массива:

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

*/







