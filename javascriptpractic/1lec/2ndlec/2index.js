// class human {
//     // property 
//     age =20; //public
//     #wt=55;   //privat
//     ht=180;
//     // behavior 
//     walking(){
//         console.log('im walikng',this.#wt);
        
//     }
//     runing(){
//         console.log('im running');
        
//     }
//     get fetchweight(){
//         return this.#wt;
//     }
//     set modifyweight( val){
//         this.#wt=val;
//     }
// }
// let obj = new human();
// console.log(obj.wt);

// obj.walking();

// class human {
//     // property 
//     age ; //public
//     #wt=55;   //privat
//     ht=180;
//     constructor(newage,newhight,newweight){
//         this.age=newage;
//         this.ht=newhight;
//         this.#wt =newweight;
//     }
//     // behavior 
//     walking(){
//         console.log('im walikng',this.#wt);
        
//     }
//     runing(){
//         console.log('im running');
        
//     }
//     get fetchweight(){
//         return this.#wt;
//     }
//     set modifyweight( val){
//         this.#wt=val;
//     }
// }
// let obj = new human( 50,190,101);
// console.log(obj.fetchweight);

// obj.walking();

// function saymyname(fname ,lnmae){
//     console.log('my name is ',fname,'',lnmae);
    
// }
// saymyname();

// function sol(val = 'muz'){
//     console.log('hello',val);
    
// }
// sol(null);

// function getage(){
//     return 40;
// }
// function utility(nam = 'muz',age =getage()){
//     console.log(nam,' ',age);
    
// }
// utility();

// console.log(Math.PI);
// console.log(Math.max(60,70,50,30,20,10));
// console.log(Math.min(60,70,50,30,20,10));
// console.log(Math.round(1.4));
// console.log(Math.floor(2.4));
// console.log(Math.ceil(1.9));
// console.log(Math.abs(-5));
// console.log(Math.random());
// console.log(Math.sqrt(4));
// console.log(Math.pow(2,2));


// let curr = new Date()
// console.log(curr);


// let scr ={
//     age:19,
//     wt:89,
//     ht:190 
// };
// console.log(obj);
// obj.colour='red';
// console.log(obj);

// clone objaect 
// let dest={...scr};
// console.log('scr',scr);
// dest.age=55;
// console.log('dest ',dest);

// let dest =Object.assign({},scr);
// console.log('scr',scr);
// dest.age=55;
// console.log('dest ',dest);

// let dest= {};
// for(let key in scr){
//     let newkey =key;
//     let val =scr[key];
//     dest[key]=val;
    
// }
// console.log('scr',scr);
// dest.age=55;
// console.log('dest ',dest);

      // error handeling
// console.log(1; compile type error
//  console.log(x);  run time error 
 
// try{
//     console.log('ur try block start here');
//     console.log(x);
//     console.log('2nd try block'); //this line wil not print
// }
// catch(e){
//     console.log('ur catch block start here');
//     console.log(e); //this will give what type of error
    
// }
// finally{
//     console.log('i will run anyway');
    
// }
// try{
//     console.log(x);
    
// }
// catch(e){
//     throw new Error('bhai pehle declar karo , fer print karo');
// }
