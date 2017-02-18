var totalSecondsStored1 = 10
var totalSecondsStored = sessionStorage.getItem("time");
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
        sessionStorage.setItem("numberRight0", correctAnswers);
        sessionStorage.setItem("numberWrong0", incorrectAnswers);
        window.location.href = "index2.html";
    }
}

//function startTimer(duration, display) {
//    var timer = duration, minutes, seconds;
//    setInterval(function () {
//        minutes = parseInt(timer / 60, 10);
//        seconds = parseInt(timer % 60, 10);
//
//        minutes = minutes < 10 ? "0" + minutes : minutes;
//        seconds = seconds < 10 ? "0" + seconds : seconds;
//
//        display.text(minutes + ":" + seconds);
//
//        if (--timer <= 0) {
//            $("#timer").html("<h1>Your time is up!</h1>");
//            gradeQuiz();
//            gradeQuiz2();
//            gradeQuiz3();
//            localStorage.setItem("numberRight", correctAnswers);
//            localStorage.setItem("numberWrong", incorrectAnswers);
//            window.location.href = "index2.html";
//
//        }
//    }, 1000);
//}
//
//jQuery(function ($) {
//    var fiveMinutes = 60 * 1,
//        display = $('#timer');
//    startTimer(fiveMinutes, display);
//});