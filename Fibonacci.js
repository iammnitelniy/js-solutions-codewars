// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1
// }
//
//
// console.log(factorial(3))
//
// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
//
//
// console.log( fib(3) ); // 2
// console.log( fib(7) ); // 13
//
// function sumTo(n) {
//     if (n == 1) return 1
//     return n + sumTo(n - 1)
// }
//
//
// console.log(sumTo(100))
//
// function foo() {
//     console.log(this.name);
// }
//
// let a = { name: 'Dima' };
// let b = { name: 'Viktor' };
//
// const bindedFooA = foo.bind(a);
// const bindedFooB = foo.bind(b);
//
// bindedFooA(); // 'Dima'
// bindedFooB(); // 'Viktor'
//
// function foo(age, city) {
//     console.log(`${this.name}, ${age}, ${city}`);
// }
//
// let a = { name: 'Dima' };
// let b = { name: 'Viktor' };
//
// const bindedFooA = foo.bind(a, 30);
// const bindedFooB = foo.bind(b, 18);
//
// bindedFooA('Tbilisi'); // Dima, 30, Tbilisi
// bindedFooB('Minsk'); // 'Viktor, 18, Minsk
//
// //
// // function foo(age, city) {
// //     console.log(`this.name, ${age}, ${city}`)
// // }
// //
// //
// // let a = { name: 'Dima' }
// // let b = { name: 'Viktor' }
// //
// //
// // foo.apply(a, [31, 'Tbilisi'])
// // foo.call(b, 18, 'Minsk')
// //
// //     ['Minsk', 'Moscow', '', '', 'London', '']
// //     .reduce((acc, el) => {
// //         if (el !== '') acc++
// //         return acc
// //     }, 0) // подсчитываем, сколько у нас в массиве не пустых строк
// //
// //
// //     [
// //     { age: 18, sex: 'f', name: 'Sveta' },
// //         { age: 17, sex: 'f', name: 'Sashka' },
// //         { age: 19, sex: 'm', name: 'Andrew' }
// //     ].reduce((acc, person) => {
// //     if (person.age >= 18 && person.sex === 'f') {
// //         acc.push(person)
// //     }
// //     return acc
// // }, []) // на выходе получаем новый массив, состоящий из людей, кто девочка и кому 18+ (но лучше эту задачу решать с помощью filter, но и так можно)
// //
// //
// //     [1, 4, 6, 66, -12].reduce((acc, number) => {
// //     acc += number
// //     return acc
// // }, 0) // подсчёт суммы всех чисел в массиве
//
// function makeCounter() {
//     var currentCount = 1
//     return function () {
//         // (**)
//         return currentCount++
//     }
// }
//
//
// var counter = makeCounter() // (*)
//
//
// // каждый вызов увеличивает счётчик и возвращает результат
// alert(counter()) // 1
// alert(counter()) // 2
// alert(counter()) // 3
//
//
// // создать другой счётчик, он будет независим от первого
// var counter2 = makeCounter()
// alert(counter2()) // 1

class Animal {
    constructor(name) {
        this.name = name
    }
    walk() {
        console.log('I walk: ' + this.name)
    }
    eat() {
        console.log('I can eat')
    }
}


class Rabbit extends Animal {
    walk() {
        super.walk()
        console.log('...and jump!')
    }
}


var rabbit = new Rabbit('Bunny')
rabbit.walk()
rabbit.eat()

doItAfter(5).then(() => console.log('yes'))


function doItAfter(seconds) {
    let promise = new Promise((resolve, reject) => {
        setInterval(() => {
            console.log('perez')
            resolve()
        }, seconds * 1000)
    })
    return promise
}
