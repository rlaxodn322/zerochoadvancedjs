// const console = {
//     log(){
//         //콘솔에 글자 적는 기능
//     }
// }
//스택 , 큐 
//스코프 체인 c - > anony a -> anony 
// b -> c -> anony 
// c 함수에서 b 호출 불가능 

const x = 'x';


function c(){
    const y= 'y';
    console.log('c');
    debugger;
}

function a(){
    const x = 'x';
    console.log('a');
    function b(){
        const z = 'z';
        console.log('b');
        c();
    }
    b()
}

a();
c();
