
var blue = "blue";
function logColor (color) {
    return function (str) {
        console.log("%c"+str, "color:"+color);
    }
}

var logInfo = logColor("blue");
logInfo("bonjour");
logInfo("aurevoir");

var logWarning = logColor("warning");
logWarning("bonjour");
logWarning("aurevoir");