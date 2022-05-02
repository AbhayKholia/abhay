// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",myfunction);
var matchArr= JSON.parse(localStorage.getItem("schedule")) || [] ;

function myfunction(){
    event.preventDefault();


    var matchObj = {
     MatchNumber : masaiForm.MatchNumber,
     teamA:masaiForm.teamA.value,
     teamB:masaiForm.teamB.value,
     date:masaiForm.date.value,
     vanue:masaiForm.vanue.value,

    }
    matchArr.push(matchObj)
     localStorage.setItem("schedule", JSON.stringify(matchArr));
    window.location.href="matches.html"
} 
















