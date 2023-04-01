let str = 'aaabccdeef';
let arr=[];
for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
}
arr.unshift('a');
let newArr = arr.sort();
newArr.shift('a')
newArr.shift('a')
newArr.shift('a');
newArr.push('c');
newArr.push('f');
newArr.push('d');
newArr.sort();
let newStr = ''

for (let i = 0; i < newArr.length; i++) {
    newStr += newArr[i]
    
}
console.log(newStr);


// let a = 3;
// let b = 7;
// let cnt = 0;
// let toq = 0;
// for (let i = a+2; i <= b; i++) {
//     if(b % 2 == 0){
//          if(i % 2 == 0){
//         cnt++;
//    } 
//     }
//     else if(b % 2 != 0){
//         if(i % 2 != 0){
//             toq++;
//         }
//     }

    
// }

// if(cnt == 0){
//     console.log(toq);
// }
// else if(toq == 0){
//     console.log(cnt);
// }  