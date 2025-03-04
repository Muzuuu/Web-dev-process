// Array in javascripty 
// referenc type


// let obj ={
//     name:'muz',
//     age :22,
//     waight:55,
//     hight:157 ,
//     greet : function (){
//         console.log("hello jee");   
//     }
// };
// console.log(obj);
// obj.greet();
// console.log(typeof(obj));


// let arr = [1.2,3.4];

// console.log(arr);



// let brr = new Array(2,'muz',7);
// console.log(brr[0]);

// console.log(typeof(arr));
// console.log(typeof(brr));

// methods of array 
// >push
// >pop
// >shift
// >unshift 
// >slice 
// >split 
// >map 
// >filter 
// >reduce 
// >sort 
// >indexof 
// >find 

// let arr1 =[2,'muz',1.44];
// arr1.shift();
// arr1.unshift(3);
// arr1.push('mak');
// arr1.push(485);
// arr1.push(true);
// console.log(arr1);
// // arr1.slice(2,4);
//  arr1.splice(1,0,'maktum');
// console.log(arr1);

// let arr =[10,20,30,11,21,44,51];
// let ans = arr.map((num) =>{
//     return num*num;
// })
// console.log(ans);

// let ans = arr.map((num) =>{
//     console.log(num+1);
    
// })
// console.log(ans);

// let ar1=arr.filter((num) => {
//     return num%2==0;
    // if(num%2==0){
    //     return true;
    // }
    // else{
    //      return false;
    // }
// })
// console.log(ar1);

// let arr = [1,4,'muz','mak',null ];
// let ans= arr.filter((val) => {
//     if(typeof(val)==='number'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans);

// let arr = [10,20,30,40];
// let ans=  arr.reduce((acc,curr) =>{
//     return acc+curr;
//  },0);
// console.log(ans);

// let arr = [7,9,4,0,2,5,2];
// arr.sort();
// console.log(arr.indexOf(9));

// const array = [5, 12, 8, 130, 44];
// const found = array.find((element) => element > 5);
// console.log(found); // Outputs: 12

// let arr = [ 10,20,30];
// console.log('length:' ,arr.length);

// for(let index = 0; index < length; index++){
//     console.log(arr[index]);
    
// }
// arr.forEach((val,ind) =>{
//     console.log('number',val,'index',ind);
    
// })

// let obj ={
//     name:'muz',
//     age :22,
//     waight:55,
//     hight:157 ,
//     greet : function (){
//         console.log("hello jee");   
//     }
// };

// for(let key in obj){
//     console.log(key,'',obj[key]);
    
// }

