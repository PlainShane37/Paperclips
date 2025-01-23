var paperclipSentence = "Number of paperclips in this jar: "

var jarTotal = document.getElementById("total").value;
var jarOneNumber = document.getElementById("total").value;
var jarTwoNumber = 0;

var jarOnePercent = 0.0;
var jarTwoPercent = 100.0;

var jarOneClips = document.getElementById("whiteOne");
var jarTwoClips = document.getElementById("whiteTwo");

var jarOneTotal = document.getElementById("paperclipsOne").height;
var jarTwoTotal = document.getElementById("paperclipsOne").height;

document.getElementById("numberOfClipsOne").innerHTML=paperclipSentence+jarOneNumber;
document.getElementById("numberOfClipsTwo").innerHTML=paperclipSentence+jarTwoNumber;


// When the button is pressed, this changes the amount of paperclips in each jar.
function changeTotals()
{
    if(jarOneNumber>0)
    {
        jarOneNumber-=1;
        jarTwoNumber+=1;
    }
    // console.log(jarOneNumber);
    // console.log(jarTwoNumber);
    
    document.getElementById("numberOfClipsOne").innerHTML=paperclipSentence+jarOneNumber;
    document.getElementById("numberOfClipsTwo").innerHTML=paperclipSentence+jarTwoNumber;
    paperclipsPercent();
}

// Need to fix this function, now that I have a white page instead.
function paperclipsPercent()
{
    jarOnePercent = jarTwoNumber/jarTotal;
    jarTwoPercent = jarOneNumber/jarTotal;
    console.log(jarOnePercent);
    console.log(jarTwoPercent);

    jarOneClips.height=(jarOnePercent*jarOneTotal);
    jarTwoClips.height=jarOneTotal-(jarOnePercent*jarOneTotal);

    if(jarOneNumber==0)
    {
       congrats();
    }
}

function congrats()
{
    alert("Yay you did it! Refresh the page to start over.");
}
