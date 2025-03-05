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