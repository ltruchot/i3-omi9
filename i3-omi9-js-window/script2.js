/* function byId (id) {
    return document.getElementById(id);
}

function handleClick () {
    // je vais chercher le header qui a l'id "h"
    var header = byId("h");
    // je vais chercher l'input qui a l'id "ipt"
    var input = byId("ipt");

    // je change la valeur du texte du header (avec celle de l'input)
    header.innerText = "Bonjour" + input.value;
    // je reinitialise l'input
    input.value = "";
}
function handleChange() {
    // je vais chercher le header qui a l'id "h"
    var header = byId("h");
    // je vais chercher l'input qui a l'id "ipt"
    var input = byId("ipt");

    // je change la valeur du texte du header (avec celle de l'input)
    header.innerHTML= "<strong>Bonjour</strong> " + input.value;
}

byId("tout").style.background = "linear-gradient(green, red)";



var list = ["la carotte", "le navet", "le choux"];
var list2 = ["le poireau", "le comcombre"];
var legumes = list.concat(list2);


var phrases = legumes.map(function (legume) {
    return "<div>Mon légume préféré est <strong>" + legume + "</strong></div>";
});
console.log(phrases.join(""))
document.body.innerHTML = phrases.join("");

 */

var nomCommuns = ["L'océan", "Le hiboux", "Le ciel", "le serpent", "Toto", "Le portrait", "Le crayon", "Le scooter"];
var verbes = ["est", "paraît", "semble", "devient", "demeure", "reste", "à l'air", "passe pour"];
var adjectifs = ["puissant", "merveilleux", "omniprésent", "ignoble", "menaçant", "dangereux", "inimitable", "délicieux"];

function rand (items) {
    return items[Math.floor(Math.random() * items.length)]
}


for (var i = 0; i < 3; i++) {
    var elements = [
        rand(nomCommuns), 
        rand(verbes), 
        rand(adjectifs)
    ];
    console.log(elements.join(" ") + ".");
}

