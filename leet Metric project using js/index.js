document.addEventListener("DOMContentLoaded",function(){
    const searchButton =document.getElementById("search_bar");
    const userInput =document.getElementById("user_input");
    const statsContainer =document.querySelector(".stats_container");
    const easyProgressCircle =document.querySelector(".easy_progress");
    const mediumProgressCircle =document.querySelector(".mediam_progress");
    const hardProgressCircle =document.querySelector(".hard_progress");
    const easyLabel =document.getElementById("easy_lable");
    const mediamLabel =document.getElementById("mediam_lable");
    const hardLabel =document.getElementById("hard_lable");
    const cardStatsContainer =document.querySelector(".stats_card");

    function validateUsename(username){
        if(username.trim()===""){
            alert("username Should not be empty");
            return false;
        }
        const regex=/^[a-zA-Z0-9_-]{1,15}$/;
    }

    searchButton.addEventListener('click',function(){
        const username=userInput.value;

    })
})