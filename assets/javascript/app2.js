window.onload = function(){
    
    clearInterval(timer); 
        
       if (sessionStorage.getItem("incorrect1") == null) {
           $("#correctNumber").text(parseInt(sessionStorage.getItem("correct2"), 10));
           
           $("#incorrectNumber").text(parseInt(sessionStorage.getItem("incorrect2"), 10));
           
           $("#unanswered1").text(parseInt(sessionStorage.getItem("unanswered"), 10));
           
       } else {
        $("#incorrectNumber").text(parseInt(sessionStorage.getItem("incorrect1"), 10));
    
        $("#correctNumber").text(parseInt(sessionStorage.getItem("correct1"), 10));
           
    }
    
}


