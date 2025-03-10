// function changetext(event){
//     console.log(event);
//     let fpara = document.getElementById('fpara');
//     fpara.textContent= "hello muz";
// }
// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click',changetext);


// let ancorelement = document.getElementById('fanchor');
// ancorelement.addEventListener('click',function(event){
//     event.preventDefault();
//     ancorelement.textContent="click done bhai"
// });

// let para = document.querySelectorAll('p');

// function alertpara() {
//     if(event.target.nodeName === 'span'){
//         alert("you have clicked on para:" + event.target.textContent);
//     }
    
// }
// // for(let i=0; i < para.length ; i++){
// //     para.addEventListener('click',alertpara);
// // }
// let mydiv = document.getElementById('wraper');
// document.addEventListener('click',alertpara);


//reflow   repaint
// // code 1 
// const t1 =performance.now()
// for(let i=0; i<=100 ;i++){
//     let para = document.createElement('p');
//     para.textContent ="this is para"+i;
//     document.body.appendChild(para);
// }
// const t2 = performance.now();
// console.log("total time by code 1:",(t2-t1));

// // code 2 
// const t3 =performance.now();
// let mydiv = document.createElement('div');

// for(let i=0; i<=100 ;i++){
//     let para = document.createElement('p');
//     para.textContent ="this is para"+i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(para);
// const t4 = performance.now();
// console.log("total time by code 2:",(t4-t3));

// let fragment =document.createDocumentFragment();
// for(let i=0; i<=100 ;i++){
//     let para = document.createElement('p');
//     para.textContent ="this is para"+i;
//     fragment.appendChild(para);
// }
// document.body.appendChild(fragment);

// // code 1 
// const t1 =performance.now();
// for(let i=0;i<=100;i++){
//     let para = document.createElement('p');
//     para.textContent ='para:'+i;
//     document.body.appendChild(para);
// }
// const t2 =performance.now();
// console.log('total time :'+(t2-t1));

// // code 2 
// const t3 = performance.now();
// let mydiv = document.createElement('div');
// for (let i=1 ;i<=100;i++){
//     let para =document.createElement('p');
//     para.textContent ="para:"+i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);
// const t4 =performance.now();
// console.log('total time :'+(t4-t3));

// let fpromis =new Promise((resolve,reject) => {
//     console.log('muz');
//     resolve(1001);
    
// })
 
//    Promise 
    //    >then 
    //    >catch 

// async-await  = sencronus behaveor

// async function getdat() {
//     setTimeout(function(){
//         console.log('im inside set timeout block');
        
//     },3000)
// }
// let output =getdat();

// async function getdata(){
//     //get request 
//     let responce  = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await responce.json();
//     console.log(data);
    
// }
// getdata();
// scenario 
// prepare url / api end point -> sync
//( mark ->await ) // fetch data -> network call ->async 
// process data -> sync 

// const myheader = new Headers();
// myheader.append("content-Type","application/json");
// const myRequst =new Request("https://example.org/post",{
//     method:"POST",
//     body:JSON,stringify({username:"example"}),
//     headers:myheader,
// });
// const responce =await fetch(myRequst);

// const myheader = new Headers();
// myheader.append("content-Type","application/json");
// const url ="https://jsonplaceholder.typicode.com/posts";

// const option ={
//     method:"POST",
//     body : JSON.stringify({username:"Muzammil"}),
//     headers:myheader,
// };
// async function getdata(){
//     const responce =await fetch(url);
//     let data =await responce.json();
//     console.log("get data response:",data);
// }
// async function postdata(){
//     const responce =await fetch(url,option);
//     let data =await responce.json();
//     console.log("post data response:",data);
    
// };
// async function processdata(){
//     await postdata();
//     await getdata();
// }
// processdata();
