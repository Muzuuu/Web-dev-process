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
        const ismatching =regex.test(username);
        if(! ismatching){
            alert("invalid username");
        }
        return ismatching;
    }

    async function fetchUserDetaile(username) {
       
        try{
            searchButton.textContent ="searching....";
            searchButton.disabled =true;

            const proxyUrl = 'https://cors-anywhere.herokuapp.com/' 
            const targetUrl = 'https://leetcode.com/graphql/';
            
            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                variables: { "username": `${username}` }
            })
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
            };

            const response = await fetch(proxyUrl+targetUrl, requestOptions);
            // const response =await fetch(url);
            if(!response.ok){
                throw new console.error("Unable to fetch the user details");
            }
            const parseddata = await response.json();
            console.log("loggin data:",parseddata);

            displayuserdata(parseddata);
            
        }
        catch(error){
            statsContainer.innerHTML='<p>No Data Found</p>'
        }
        finally{
            searchButton.textContent ="search";
            searchButton.disabled =false;
        }
    }

    function updateProgress(solved,total,lable,circle){
        const progrssDegree ={solved/total}*100;
        circle.style.setProperty("----progress-degree",);
    }

    function displayuserdata(parseddata){
        const totalquestion =parseddata.data.allQuestioncount[0].count;
        const totaleasyquestion =parseddata.data.allQuestioncount[1].count;
        const totalMideamquestion =parseddata.data.allQuestioncount[2].count;
        const totalhardquestion =parseddata.data.allQuestioncount[3].count;

        const SolvedTotleQuestion =parseddata.data.matcheduser.submitstats.acsubmissionNum[0].count;
        const SolvedTotleEasyQuestion =parseddata.data.matcheduser.submitstats.acsubmissionNum[1].count;
        const SolvedTotleMidemQuestion =parseddata.data.matcheduser.submitstats.acsubmissionNum[2].count;
        const SolvedTotleHardQuestion =parseddata.data.matcheduser.submitstats.acsubmissionNum[3].count;

        updateProgress(SolvedTotleEasyQuestion,totaleasyquestion,easyLabel,easyProgressCircle);
        updateProgress(SolvedTotleMidemQuestion,totalMideamquestion,mediamLabel,mediumProgressCircle);
        updateProgress(SolvedTotleHardQuestion,totalhardquestion,hardLabel,hardProgressCircle);


    }
    searchButton.addEventListener('click',function(){
        const username=userInput.value;
        console.log("loggin username :",username);
        if(validateUsename(username)){
            fetchUserDetaile(username);
        }
    })
})