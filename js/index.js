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

let image1 = ("../img/tasse.jpg");
let image2 = ("../img/lockenstab.jpg");
let image3 = ("../img/Weihnachtssocken.jpg");
let image4 = ("../img/multi ladekabel.jpg");
let image5 = ("../img/Adiletten.jpg");
let image6 = ("../img/Uhr.png");
let image7 = ("../img/Airpods.jpg");
let image8 = ("../img/Zahnbürste.jpg");
let image9 = ("../img/Ring.png");
let image10 = ("../img/Föhn.jpg");
let image11 = ("../img/Kerze.jpg");
let image12 = ("../img/Head Set.jpg");
let image13 = ("../img/Mixer.jpg");
let image14 = ("../img/Mütze.jpg");
let image15 = ("../img/Spiel.jpg");
let image16 = ("../img/Gläteisen.jpg");
let image17 = ("../img/Handyhülle.jpg");
let image18 = ("../img/Grepe Maker.jpg");
let image19 = ("../img/T-Shirt.jpg");
let image20 = ("../img/Kette.jpg");
let image21 = ("../img/Schokolade.jpg");
let image22 = ("../img/Taschenmesser.jpg");
let image23 = ("../img/Polover.jpg");
let image24 = ("../img/PS 5.jpg");


const openNewBackgroundTab = (url) => {
    const anchor = document.createElement("a");
    anchor.href = url;
    document.body.appendChild(anchor);
    const evt = document.createEvent("MouseEvents");

    evt.initMouseEvent(
        "click", true, true, window, 0, 0, 0, 0, 0,
        true, false, false, false, 0, null
    );
    anchor.dispatchEvent(evt);
}
// Hallo Herr Fricke, diese funktion kann bei ihnen funktionieren muss jedoch aber nicht. sie ist dafür da, das der Link in einen eunen Tab//
//im hintergrund geöffnet wird. Dies funktionert nur bei älteren Chrome. Sie können dies bei der Zahl 1 Versuchen...//
// wenn nicht, einach auf den tab zurück gehen.//
//LG Leander//


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
        openNewBackgroundTab("https://www.kaufland.de/product/360430574/");

    }
     if (n1 == 2) {
        document.getElementById('bild1').src = image2;
        console.log(myImg);
        ausgabe = text2;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text2;
        window.open(" https://www.dealbunny.de/atmoko-lockenstab.html");
    }

    else if (n1 == 3) {
        document.getElementById('bild1').src = image3;
        console.log(myImg);
        ausgabe = text3;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text3;
        window.open("https://www.senzaconfini.at/produkt/weihnachtssocken/");
    } else if (n1 == 4) {
        document.getElementById('bild1').src = image4;
        console.log(myImg);
        ausgabe = text4;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text4;
        window.open("https://www.vkf-renzel.de/metmaxx-multi-ladekabel-lademeister-businessclass-40-1871-1.html");
    } else if (n1 == 5) {
        document.getElementById('bild1').src = image5;
        console.log(myImg);
        ausgabe = text5;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text5;
        window.open("https://www.sportokay.com/hu_de/adidas-adilette-aqua-freizeitsandalen.html");
    } else if (n1 == 6) {
        document.getElementById('bild1').src = image6;
        console.log(myImg);
        ausgabe = text6;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text6;
        window.open("https://www.luna.at/kollektion/produkt/0026ws01/");
    } else if (n1 == 7) {
        document.getElementById('bild1').src = image7;
        console.log(myImg);
        ausgabe = text7;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text7;
        window.open("https://www.meintrendyhandy.de/shop/apple-airpods-pro-anc-249724p.html");
    } else if (n1 == 8) {
        document.getElementById('bild1').src = image8;
        console.log(myImg);
        ausgabe = text8;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text8;
        window.open("https://www.flaconi.de/pflege/oral-b/geniusx-20000/oral-b-geniusx-20000-luxe-edition-elektrische-zahnbuerste.html#sku=80044979-1");
    } else if (n1 == 9) {
        document.getElementById('bild1').src = image9;
        console.log(myImg);
        ausgabe = text9;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text9;
        window.open("https://www.bulgari.com/en-hk/341729.html");
    } else if (n1 == 10) {
        document.getElementById('bild1').src = image10;
        console.log(myImg);
        ausgabe = text10;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text10;
        window.open("https://www.kaufland.de/product/333063346/");
    } else if (n1 == 11) {
        document.getElementById('bild1').src = image11;
        console.log(myImg);
        ausgabe = text11;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text11;
        window.open("https://shop.herrnhuter-sterne.de/Geschenksets/Weihnachtskerze::410.html");
    } else if (n1 == 12) {
        document.getElementById('bild1').src = image12;
        console.log(myImg);
        ausgabe = text12;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text12;
        window.open("https://www.amazon.de/Razer-Kraken-Ultimate-Kopfh%C3%B6rer-Surround/dp/B07YT1KZPN");
    } else if (n1 == 13) {
        document.getElementById('bild1').src = image13;
        console.log(myImg);
        ausgabe = text13;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text13;
        window.open("https://www.amazon.de/Philips-HR3573-Glasbeh%C3%A4lter-Trinkflasche-sp%C3%BClmaschinenfest/dp/B08447L6Y2");
    } else if (n1 == 14) {
        document.getElementById('bild1').src = image14;
        console.log(myImg);
        ausgabe = text14;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text14;
        window.open("https://www.amazon.de/infactory-Weihnachtsm%C3%BCtze-LED-Nikolausm%C3%BCtze-leuchtendem-farbwechselnd/dp/B00GHISZNI");
    } else if (n1 == 15) {
        document.getElementById('bild1').src = image15;
        console.log(myImg);
        ausgabe = text15;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text15;
        window.open(" https://www.amazon.de/Ratchet-Clank-Rift-Apart-PlayStation/dp/B08B44H982");
    } else if (n1 == 16) {
        document.getElementById('bild1').src = image16;
        console.log(myImg);
        ausgabe = text16;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text16;
        window.open("https://www.amazon.de/Comair-Profi-Gl%C3%A4tteisen-Hollywood-Haargl%C3%A4tter/dp/B008OG42UG");
    } else if (n1 == 17) {
        document.getElementById('bild1').src = image17;
        console.log(myImg);
        ausgabe = text17;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text17;
        window.open("https://www.amazon.de/elago-iPhone-Silikon-Kompatibel-Handyh%C3%BClle-Lovely-Rosa/dp/B07X8MX3ND");
    } else if (n1 == 18) {
        document.getElementById('bild1').src = image18;
        console.log(myImg);
        ausgabe = text18;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text18;
        window.open("https://www.amazon.de/Severin-CM-2198-Cr%C3%AApes-schwarz/dp/B002ALSHZC");
    } else if (n1 == 19) {
        document.getElementById('bild1').src = image19;
        console.log(myImg);
        ausgabe = text19;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text19;
        window.open("https://www.amazon.de/Fruit-Loom-T-Shirt-Valueweight-T/dp/B07CMZMV4J");
    } else if (n1 == 20) {
        document.getElementById('bild1').src = image20;
        console.log(myImg);
        ausgabe = text20;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text20;
        window.open("https://www.amazon.de/STERLL-Herren-Kette-massivem-Geschenk-Schmuckbox/dp/B01CDFEBZ4");
    } else if (n1 == 21) {
        document.getElementById('bild1').src = image21;
        console.log(myImg);
        ausgabe = text21;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text21;
        window.open("https://www.sweets-online.com/schokolade/schokoladentafel/milka-scholadentafeln/milka-luflee-schokolade-100g-tafel_1199912020_7717");
    } else if (n1 == 22) {
        document.getElementById('bild1').src = image22;
        console.log(myImg);
        ausgabe = text22;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text22;
        window.open("https://www.amazon.de/ORSIFOW-Multifunktion-Taschenmesser-Taschenwerkzeug-Schraubendrehe/dp/B07XQCDP6P");
    } else if (n1 == 23) {
        document.getElementById('bild1').src = image23;
        console.log(myImg);
        ausgabe = text23;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text23;
        window.open("https://www.amazon.de/Lazzboy-Kapuzenpullover-Verdickung-Pullover-Kapuzenpullis/dp/B07ZLM393P");
    } else if (n1 == 24) {
        document.getElementById('bild1').src = image24;
        console.log(myImg);
        ausgabe = text24;
        console.log(document.getElementById("ausgabetext"));
        document.getElementById("ausgabeText").innerHTML = text24;
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
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

    var KSchrArt = "Verdana,Arial";
    var KSchrGroesse = 3;
    var KSchrFarbe = "#fafaf9";
    var Khgrund = "#000000";
    var TSchrArt = "Verdana,Arial";
    var TSchrGroesse = 3;
    var TSchrFarbe = "#000000";
    var Thgrund = "#acbbbb";
    var SoFarbe = "#E00000";
    var Ahgrund = "#7a2631";

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

