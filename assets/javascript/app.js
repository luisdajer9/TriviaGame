var answers = {
    q1: "1 Year",
    q2: "India",
    q3: "Uranus",
    q4: "Orange",
    q5: "TheMoon",
    q6: "Sword",
}
var correctAnswers = 0;
var incorrectAnswers = 0;
var correctNumberGet = sessionStorage.getItem("numberRight0");
var incorrectNumberGet = sessionStorage.getItem("numberWrong0");
var correctNumberGet1 = sessionStorage.getItem("numberRight1");
var incorrectNumberGet1 = sessionStorage.getItem("numberWrong1");

function gradeQuiz() {
    var a1 = document.getElementsByName("jail");
    for (var i = 0; i < a1.length; i++) {
        if (a1[i].checked) {
            if (a1[i].value == "1 Year") {
                correctAnswers++;
                } else {
                    incorrectAnswers++;
                }
            }
        
        }
    
}

function gradeQuiz2() {
    var a2 = document.getElementsByName("country");
    for (var i = 0; i < a2.length; i++) {
        if (a2[i].checked) {
            if (a2[i].value == answers.q2) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        }
    }
}

function gradeQuiz3() {
    var a3 = document.getElementsByName("planet");
    for (var i = 0; i < a3.length; i++) {
        if (a3[i].checked) {
            if (a3[i].value == answers.q3) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        }
    }
}

function gradeQuiz4() {
    var a4 = document.getElementsByName("drink");
    for (var i = 0; i < a4.length; i++) {
        if (a4[i].checked) {
            if (a4[i].value == answers.q4) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        }
    }
}

function gradeQuiz5() {
    var a5 = document.getElementsByName("sea");
    for (var i = 0; i < a5.length; i++) {
        if (a5[i].checked) {
            if (a5[i].value == answers.q5) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        }
    }
}

function gradeQuiz6() {
    var a6 = document.getElementsByName("weapon");
    for (var i = 0; i < a6.length; i++) {
        if (a6[i].checked) {
            if (a6[i].value == answers.q6) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        }
    }
}

$("#submit-button").on("click", function(){
    gradeQuiz();
    gradeQuiz2();
    gradeQuiz3();
    sessionStorage.setItem("numberRight0", correctAnswers);
    sessionStorage.setItem("numberWrong0", incorrectAnswers);
    alert(parseInt(correctNumberGet));
})

$("#submit-button1").on("click", function(){
    gradeQuiz4();
    gradeQuiz5();
    gradeQuiz6();  
    sessionStorage.setItem("numberRight1", correctAnswers);
    sessionStorage.setItem("numberWrong1", incorrectAnswers);
    alert(parseInt(correctNumberGet1));
})


