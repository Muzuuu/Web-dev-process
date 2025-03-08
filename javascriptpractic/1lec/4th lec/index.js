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