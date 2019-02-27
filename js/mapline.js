function mapLine(p){  //hist-cont, hist-line, hist-prog
    var pSum = 3;
    console.log("IN");
    var divHistCont = document.createElement("div");
    divHistCont.setAttribute('class','hist-cont');

    var divHistLine = document.createElement("div");
    divHistLine.setAttribute('class','hist-line');
    
    var divHistProg = document.createElement("div");
    divHistProg.setAttribute('class','hist-prog');

    divHistLine.appendChild(divHistProg);
    divHistCont.appendChild(divHistLine);
    
    var t=0;
    for(var i = 0; i < pSum; i++){
        var divHistDot = document.createElement("div");
        divHistDot.setAttribute('id','hist-dot-' + i);
        divHistDot.setAttribute('class','hist-dot');

        $(divHistDot).css({"top": t + "%"});
        
        t = t + (100 / (pSum - 1)); //-1 because of middle value

        divHistLine.appendChild(divHistDot);
    }

    $(divHistDot).last().css({"top":"calc(" + (t - (100 / (pSum - 1))) + "% - 20px)"});
    $(".proj").prepend(divHistCont);
}