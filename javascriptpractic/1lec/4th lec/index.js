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

function alertpara() {
    if(event.target.nodeName === 'span'){
        alert("you have clicked on para:" + event.target.textContent);
    }
    
}
// for(let i=0; i < para.length ; i++){
//     para.addEventListener('click',alertpara);
// }
let mydiv = document.getElementById('wraper');
document.addEventListener('click',alertpara);