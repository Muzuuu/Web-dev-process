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

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// // Test
// console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5])); 
// // Output: [1, 2, 3, 4, 5]

// function findSecondLargest(arr) {
//     let arr1 = arr.sort().reverse();
//     return console.log(arr1[1]);
    
// }
// console.log(findSecondLargest([10, 20, 4, 45, 99])); 

// function moveZerosToEnd(arr) {
//     let arr1 = arr.sort();
   
    
//     return arr1;
// }
// console.log(moveZerosToEnd([0, 1, 0, 3, 12]));

// saymyname("muza");

        // function hosting 
// function saymyname(finalname){
//     console.log(finalname);
//     saymyname("muza");
// }

        // variable hosting
// var age =20;
// console.log(age);

// const age =20;
// console.log(age);

// sayhello()
// let sayhello =function (){
//     console.log("muz");
    
// }

// class human{

// }
// const obj =new human()

// function greetme (greet,fname){
//     console.log("muz say",fname);
//     greet();
    
// }
// function greet(){
//     console.log("hello");
    
// }
// greetme(greet,'muzammil');

// function sol(num){
//     return function(num){
//         return num*num;
//     }
// }
// let ans = sol(5);
// let final=ans(10);
// console.log(final);


// const arr =[ 
//     function (a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }
// ];
// let first = arr[0];
// let ans = first(5,10);
// console.log(ans); 
// let second = arr[1];
// let ans1 = second(5,10);
// console.log(ans1); 
// let th = arr[2];
// let anss = th(5,10);
// console.log(anss); 

// let obj ={
//     age :50,
//     ht:157,
//     wt:59,
//     greet: () =>{
//         console.log("hello");
        
//     }
// }
// console.log(obj.age);
// obj.greet();

// console.log(greet);

// var greet = function (){
//     console.log("muz");
    
// }

    //    variable scopping 
// > globle scpop 
// >function 
// >block 

// > globle scpop 
//  const age = 20;
//  console.log(age);
//  {
//     console.log('use bracat' ,age);
    
//  }
//  if (true){
//     console.log('if block' ,age);
    
//  }
//  for (let i=0;i<=5;i++){
//     console.log('for block',age);
    
//  }
//  function sayhello(){
//     console.log('function block',age);
    
//  }
//  sayhello();


// function sayhello(){
//     var fname ='earth';
//     console.log("hello",name);
    
// }
// console.log(fname);

// sayhello();


// {
//     var ht=180;
// }
// console.log(ht);
// {
//     let ht=190;
// }
// console.log(ht);

