let n1;
let myImg;
let ergebnis;
let ausgabe;
let text1 = "Du hast eine Tasse gewonnen!";
let text2 = "Du hast einen Lockenstab gewonnen!";
let text3 = "Du hast Socken gewonnen!";
let text4 = "Du hast eine Multi-Ladestation  gewonnen!";
let text5 = "Du hast Adiletten gewonnen!";
let text6 = "Du hast eine Uhr gewonnen!";
let text7 = "Du hast AirPods gewonnen!";
let text8 = "Du hast eine elektische Zahnbürste gewonnen!";
let text9 = "Du hast einen Ring gewonnen!";
let text10 = "Du hast einen Föhn gewonnen!";
let text11 = "Du hast eine Kerze gewonnen!";
let text12 = "Du hast einen Head-Set gewonnen!";
let text13 = "Du hast einen Mixer gewonnen!";
let text14 = "Du hast eine Mütze gewonnen!";
let text15 = "Du hast einen PS5-Spiel gewonnen!";
let text16 = "Du hast einen Gläteisen gewonnen!";
let text17 = "Du hast eine Handyhülle gewonnen!";
let text18 = "Du hast einen Crepe-Maker gewonnen!";
let text19 = "Du hast eine T-Shirt gewonnen!";
let text20 = "Du hast eine Kette gewonnen!";
let text21 = "Du hast eine Schokolade gewonnen!";
let text22 = "Du hast einen Taschenmesser gewonnen!";
let text23 = "Du hast einen Pullover gewonnen!";
let text24 = "Du hast eine PS5 gewonnen!";


let image1 = ("../img/Geschenk.jpg");


function tagangabe() {


    myImg = document.getElementById('bild1');
    n1 = parseInt(document.getElementById("eingabe").value);
    console.log(n1);
    if (n1 < 0 || n1 > 24) {
        alert("Der Adventskalendar geht nur von Tag 1 bis 24, du Schwingtitte");
        ergebnis = ("error");
        console.log(n1);
    }
     if (n1 == 1) {
        document.getElementById('bild1').src = image1;
        console.log(myImg);
        ausgabe = text1;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text1;
    }
     if (n1 == 2) {
        document.getElementById('bild1').src = image2;
        console.log(myImg);
        ausgabe = text2;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text2;
    }
    else if (n1 == 3) {
        document.getElementById('bild1').src = image3;
        console.log(myImg);
        ausgabe = text3;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text3;
    }
    else if (n1 == 4) {
        document.getElementById('bild1').src = image4;
        console.log(myImg);
        ausgabe = text4;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text4;
    }
    else if (n1 == 5) {
        document.getElementById('bild1').src = image5;
        console.log(myImg);
        ausgabe = text5;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text5;
    }
    else if (n1 == 6) {
        document.getElementById('bild1').src = image6;
        console.log(myImg);
        ausgabe = text6;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text6;
    }
    else if (n1 == 7) {
        document.getElementById('bild1').src = image7;
        console.log(myImg);
        ausgabe = text7;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text7;
    }
    else if (n1 == 8) {
        document.getElementById('bild1').src = image8;
        console.log(myImg);
        ausgabe = text8;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text8;
    }
    else if (n1 == 9) {
        document.getElementById('bild1').src = image9;
        console.log(myImg);
        ausgabe = text9;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text9;
    }
    else if (n1 == 10) {
        document.getElementById('bild1').src = image10;
        console.log(myImg);
        ausgabe = text10;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text10;
    }
}

    var d = new Date();
    var dm = d.getMonth() + 1;
    var dj = d.getYear();
    if(dj < 999) dj+=1900;
    Kalender(dm,dj);

    function Kalender(Monat,Jahr) {
    Monatsname = new Array
    ("Januar","Februar","M&auml;rz","April","Mai","Juni","Juli",
        "August","September","Oktober","November","Dezember");
    Tag = new Array ("Mo","Di","Mi","Do","Fr","Sa","So");

    var KSchrArt = "Verdana,Arial"; /* Schriftart Kalenderkopf */
    var KSchrGroesse = 3;           /* Schriftgroesse 1-7 Kalenderkopf */
    var KSchrFarbe = "#fafaf9";     /* Schriftfarbe Kalenderkopf */
    var Khgrund = "#000000";        /* Hintergrundfarbe Kalenderkopf */
    var TSchrArt = "Verdana,Arial"; /* Schriftart Tagesanzeige */
    var TSchrGroesse = 3;           /* Schriftgroesse 1-7 Tagesanzeige */
    var TSchrFarbe = "#000000";     /* Schriftfarbe Tagesanzeige */
    var Thgrund = "#acbbbb";        /* Hintergrundfarbe Tagesanzeige */
    var SoFarbe = "#E00000";        /* Schriftfarbe f. Sonntage */
    var Ahgrund = "#7a2631";        /* Hintergrundfarbe f. heutigen Tag */

    var jetzt = new Date();
    var DieserMonat = jetzt.getMonth() + 1;
    var DiesesJahr = jetzt.getYear();
    if(DiesesJahr < 999) DiesesJahr+=1900;
    var DieserTag = jetzt.getDate();
    var Zeit = new Date(Jahr,Monat-1,1);
    var Start = Zeit.getDay();
    if(Start > 0) Start--;
    else Start = 6;
    var Stop = 31;
    if(Monat==4 ||Monat==6 || Monat==9 || Monat==11 ) --Stop;
    if(Monat==2) {
    Stop = Stop - 3;
    if(Jahr%4==0) Stop++;
    if(Jahr%100==0) Stop--;
    if(Jahr%400==0) Stop++;
}
    document.write('<table border="3" cellpadding="1" cellspacing="1">');
    var Monatskopf = Monatsname[Monat-1] + " " + Jahr;
    SchreibeKopf(Monatskopf,Khgrund,KSchrFarbe,KSchrGroesse,KSchrArt);
    var Tageszahl = 1;
    for(var i=0;i<=5;i++) {
    document.write("<tr>");
    for(var j=0;j<=5;j++) {
    if((i==0)&&(j < Start))
    SchreibeZelle("&#160;",Thgrund,TSchrFarbe,TSchrGroesse,TSchrArt);
    else {
    if(Tageszahl > Stop)
    SchreibeZelle("&#160;",Thgrund,TSchrFarbe,TSchrGroesse,TSchrArt);
    else {
    if((Jahr==DiesesJahr)&&(Monat==DieserMonat)&&(Tageszahl==DieserTag))
    SchreibeZelle(Tageszahl,Ahgrund,TSchrFarbe,TSchrGroesse,TSchrArt);
    else
    SchreibeZelle(Tageszahl,Thgrund,TSchrFarbe,TSchrGroesse,TSchrArt);
    Tageszahl++;
}
}
}
    if(Tageszahl > Stop)
    SchreibeZelle("&#160;",Thgrund,SoFarbe,TSchrGroesse,TSchrArt);
    else {
    if((Jahr==DiesesJahr)&&(Monat==DieserMonat)&&(Tageszahl==DieserTag))
    SchreibeZelle(Tageszahl,Ahgrund,SoFarbe,TSchrGroesse,TSchrArt);
    else
    SchreibeZelle(Tageszahl,Thgrund,SoFarbe,TSchrGroesse,TSchrArt);
    Tageszahl++;
}
    document.write("<\/tr>");
}
    document.write("<\/table>");
}

    function SchreibeKopf(Monatstitel,HgFarbe,SchrFarbe,SchrGroesse,SchrArt) {
    document.write("<tr>");
    document.write('<td align="center" colspan="7" valign="middle" bgcolor="'+HgFarbe+'">');
    document.write('<font size="'+SchrGroesse+'" color="'+SchrFarbe+'" face="'+SchrArt+'"><b>');
    document.write(Monatstitel);
    document.write("<\/b><\/font><\/td><\/tr>");
    document.write("<tr>");
    for(var i=0;i<=6;i++)
    SchreibeZelle(Tag[i],HgFarbe,SchrFarbe,SchrGroesse,SchrArt);
    document.write("<\/tr>");
}

    function SchreibeZelle(Inhalt,HgFarbe,SchrFarbe,SchrGroesse,SchrArt) {
    document.write('<td align="center" valign="middle" bgcolor="'+HgFarbe+'">');
    document.write('<font size="'+SchrGroesse+'" color="'+SchrFarbe+'" face="'+SchrArt+'"><b>');
    document.write(Inhalt);
    document.write("<\/b><\/font><\/td>");
}

