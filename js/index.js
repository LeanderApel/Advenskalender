let n1;
let bild;
let tag;
let myImg;
let ergebnis;
let ausgabetext;
let ausgabe;
let text1 = "du hast ein Geschnek gewonnen";



function tagangabe() {
    let image1 = ("../img/Geschenk.jpg");

    myImg = document.getElementById('bild1');
    n1 = parseInt(document.getElementById("eingabe").value);
    console.log(n1);
    if (n1 < 0 || n1 > 24) {
        alert("Die zahl ist nicht zwischen 0 und 24, du Schwingtitte");
        ergebnis = ("error");
        console.log(n1);
    }
    else if (n1 = 1 ) {
        document.getElementById('bild1').src = image1;
        console.log(myImg);
        ausgabe = text1;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text1;
    }
}