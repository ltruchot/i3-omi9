var maxPizza = Math.floor(Math.random() * 10);

for(var i = 1; i <= maxPizza; i++) {

    if (i === Math.round(maxPizza / 2) + 1) {
        console.log("On a vendu la moitié");
    }

    if (i > 1) {
        console.log(i + " pizze ont été vendues." );
    } else {
        console.log(i + " pizza a été vendue." )
    }
}

var j = 0;
while (j < 100) {
    console.log( j + ". Je n'oublierais jamais le i++");
    if (j % 10 === 0) {
      console.log("************************");
    }
    j++;
} 

function isEven (n) {
    return (n % 2) === 0;
}
function not (b) {
    return !b;
}

function isOdd (n) {
    return not(isEven(n));
}

for (var k = 0; k < 300; k++) {
    if (isEven(k)) {
        console.log(k + " est pair.");
    } else {
        console.log(k + " est impair.");
    }
}