
// function str(a){
//     return function(b){
//         let c = a.concat(' ',b)
//         return c
//     }

// }
// let giveMeSomething = str('something')
// console.log(giveMeSomething('hello'));
// console.log(giveMeSomething('Lochin Olumov'));
// 2
// function str(name){
//     return function (edab){
//         let result = name.concat(edab)
//         return result
//     }
// }
// let result = str('Abdulloh')
// console.log(result('Olimov'));
// 3
// function vowels(a,cnt =0){
//  for (let i = 0; i < a.length; i++) {
//     if(a[i]=='a'||a[i]=='o'|| a[i]=='i' || a[i]=='u'|| a[i]=='e'||a[i]=='u'){
//         cnt++
//     }
//  }
//  return cnt
// }
// console.log(vowels('Celebration'));

// 4
// function vowels(a,cnt =0){
//     for (let i = 0; i < a.length; i++) {
//        if(a[i]=='a'||a[i]=='o'|| a[i]=='i' || a[i]=='u'|| a[i]=='e'||a[i]=='u'){
//            return i
//        }
//     }
   
//    }
//    console.log(vowels('app'));
// 5
// function bomb(a,c,cnt=0){
//     c = a.split(" ")

//      for (let i = 0; i < c.length; i++) {
//         // console.log(c[c.length-1]=='bomb');
//         if(c[i]=='bomb'){
//             ++cnt
//             return 'DUCK!'
//         } 
//     }
//     if(cnt <= 1){
//         return 'There is no bomb relax'
//     }
// }
// console.log(bomb('hello my name is Abdulloh bomb '));

//  6

// function charCount(a,b,cnt = 0){
//     let c = b.split('')
//     for (let i = 0; i <c.length; i++) {
       
//        if(a==c[i]){
       
//         cnt++;
//        }
        
//     }
//     return cnt;
// }
// console.log(charCount('b','big fat bubble'));

//  7

// function doubleChar(a){
//     let c = a.split('');
//     let d = ''
//     for (let i = 0; i < c.length; i++) {
//        d += c[i].repeat(3);

//     }
//     return d
// }
// console.log(doubleChar('1234!_'));

// 8

// function Say(a,b){
//     let c = a.charAt(0).toUpperCase()
//     let d = a.slice(1)
//     if(b == 1){
//         return `Hello  ${c+d} `
//     }
//     else if(b == 0){
//         return `Bye  ${c+d} `
//     }
// }
// console.log(Say('alon', 0));

// ##################################softklub 2#######################################
// 9
// function vowels(str){
//         let k = str.toLowerCase().replaceAll('o','').replaceAll('a','').replaceAll('e','').replaceAll('i','').replaceAll('u','')
//         return k  
//        }
// console.log(vowels('hello woRd'));
//  10
// function potato(po,cnt = 0){
//   let vowels = po.split('potatoe')
//   return vowels.length-1
// }
// console.log(potato('potatoepotatoepotatoe'));

//  11
// function str(find){
//     let newStr = find.split(' ')
//     return newStr.indexOf('Nemo')
// }
// console.log(str());
//  12

// function multiPlying(str,cnt = 1){
//   let num = str.split(',')
//   console.log(num.length);
// for (let i = 0; i < num.length; i++) {
//     cnt *= Number(num[i])
// }
// return cnt
// }
// console.log(multiPlying('2, 3, 1, 4'));

//  13
// function text(str){
//   let text1= ''
//   let text2 = ''
//   for (let i = 0; i < str.length; i++) {
//     if(str[i]==str[i].toUpperCase()){
//       text1 += str[i];
//     }
//     else{
//       text2 += str[i]
//     }
    
//   }
//   return text1+text2
// }
// console.log(text('jhHaPy'));
//  day 2 
// ***************************
// function degree(str){
// return eval(str)
// }
// console.log(degree('38+15+2-3'));

//  2 day 2

// function  str(num){
//   Number(num);
//  return  Math.floor(num)
 
// }
// console.log(str('12.3'));
// #Task7.
// function str(str1,str2){
//   if(str1.length == str2.length){
//     return true
//   }
//   else {
//     return false
//   }
// }
// console.log(str('AB','ACd'));

// #Task19.
// function txt(str,num){
//   console.log(typeof(typeof(565))); 
//   if(typeof(str)==='string'){
//     return str.repeat(num)
//   }
//   else{
//     return 'Not A String !!'
//   }
// }
// console.log(txt('Mubashir', 2));
// #Task20.
// function capital(str,cnt = 0){
//   for (let i = 0; i < str.length; i++) {
//     if(str[i] == str[i].toUpperCase())
//     cnt++
//   }
//   return cnt;
// }
// console.log(capital("fvLzpxmgXSDrobbgMVrc"))

// function capital(str) {
//   let str1 =str.split(' ')
//   console.log(str1);
// for (let i = 0; i < str1.length; i++) {
//   str1[i] = str1[i].charAt(0).toUpperCase()+str1[i].slice(1)
// }
// return str1.join(' ')
// }   
// console.log(capital("capitalize every word"));

 
// ***********************
// function degree(a,b){
//   for (let i = a; i <= b; i++) {
//     for (let j = 1; j <= b; j++) {
//       if(i / j < 1){
//         console.log(`${i} / ${j}` );
//       }
//     }    
//   }\
// }
// console.log(degree(1,5)); 

//  2
