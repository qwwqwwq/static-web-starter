function theFunction() {
    var ele = document.getElementById("countdown");
    ele.innerHTML = "count down is at: " + new Date();
    console.log("count down is at: " + new Date());
}

function timer() {
    window.setInterval(theFunction, 1000);
}

timer();
