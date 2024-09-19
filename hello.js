const add = (a, b ) => a + b;

function calculator(func, a, b){
    return func(a, b);
}

console.log(add(3, 5)); // 8

console.log(calculator(add, 3, 5));

// const onClick = () => (event) => {
//     console.log('hello');
// }

const onClick = (event) => {
    console.log('hello');
}

//document.querySelector('#header').addEventListener('click', onClick);
