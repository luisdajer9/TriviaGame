var answers = {
    jail: "1 Year",
    country: "India",
    planet: "Uranus",
    drink: "Orange",
    sea: "TheMoon",
    weapon: "Sword",
}

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var totalSecondsStored1 = 10;
var timer = setInterval(tick, 1000);

function tick() {
    totalSecondsStored1--;
    updateTimer();
}

function updateTimer() {
    $("#timer").html(totalSecondsStored1);
    if (totalSecondsStored1 <= 0) {
        window.clearInterval(timer);
        gradeQuiz();
        gradeQuiz2();
        gradeQuiz3();
        gradeQuiz4();
        gradeQuiz5();
        gradeQuiz6();
        sessionStorage.setItem("correct2", correctAnswers);
        sessionStorage.setItem("incorrect2", incorrectAnswers);
        sessionStorage.setItem("unanswered", unanswered);
        window.location.href = "index2.html";
    }
}

        
function gradeQuiz() {
    var a1 = document.getElementsByName("jail");
    var validate = 0;
    for (var i = 0; i < a1.length; i++) {
        if (a1[i].checked) {
            if (a1[i].value == answers.jail) {
                correctAnswers++;
                } else {
                    incorrectAnswers++;
                }
            } else {
                validate++;
            } 
        } if (validate == 4) {
            unanswered++;
        }
    }

function gradeQuiz2() {
    var a2 = document.getElementsByName("country");
    var validate = 0;
    for (var i = 0; i < a2.length; i++) {
        if (a2[i].checked) {
            if (a2[i].value == answers.country) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        } else {
            validate++;
        } if (validate == 4) {
            unanswered++;
        }
    }
    
}

function gradeQuiz3() {
    var a3 = document.getElementsByName("planet");
    var validate = 0;
    for (var i = 0; i < a3.length; i++) {
        if (a3[i].checked) {
            if (a3[i].value == answers.planet) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        } else {
            validate++;
        } if (validate == 4) {
            unanswered++;
        }
    }
    
}

function gradeQuiz4() {
    var a4 = document.getElementsByName("drink");
    var validate = 0;
    for (var i = 0; i < a4.length; i++) {
        if (a4[i].checked) {
            if (a4[i].value == answers.drink) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        } else {
            validate++;
        } if (validate == 4) {
            unanswered++;
        } 
            
    }
    
}

function gradeQuiz5() {
    var a5 = document.getElementsByName("sea");
    var validate = 0;
    for (var i = 0; i < a5.length; i++) {
        if (a5[i].checked) {
            if (a5[i].value == answers.sea) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        } else {
            validate++;
        } if (validate == 4) {
            unanswered++;
        }
    }
     
}

function gradeQuiz6() {
    var a6 = document.getElementsByName("weapon");
    var validate = 0;
    for (var i = 0; i < a6.length; i++) {
        
        if (a6[i].checked) {
            if (a6[i].value == answers.weapon) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        } else {
            validate++;
        } if (validate == 4) {
            alert("unanswered");
            unanswered++;
        }
    }
    
}

$("#submit-button1").on("click", function(){
    gradeQuiz();
    gradeQuiz2();
    gradeQuiz3();
    gradeQuiz4();
    gradeQuiz5();
    gradeQuiz6();
    sessionStorage.setItem("correct1", correctAnswers);
    sessionStorage.setItem("incorrect1", incorrectAnswers);
})


