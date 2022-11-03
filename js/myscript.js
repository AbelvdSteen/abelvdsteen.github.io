var txtTitle = '  <Abel_van_der_Steen>';
var txtDescriptionEN = "Hello and welcome to my Portfolio Website! I am a 17 year-old Software Development student and am very passionate about what I do. I hope you'll be able to find what you're looking for here as I delve deeper into all things me and my skills!";
var txtDescriptionNL = "Hallo en welkom bij mijn Portfolio Website! Ik ben een 17 jarige Sofware Development student en ben vol passie voor mijn vak. Ik hoop dat u wat u zoekt hier zal kunnen vinden terwijl we dieper in alles over mij en mijn skills duiken!";
var speed1 = 90;
var speed2 = 10;
i = 0; 
o = 0;
u = 0;

function typeWriter() {
    if (i < txtTitle.length) {
        document.getElementById("title").innerHTML += txtTitle.charAt(i);
        setTimeout(typeWriter, speed1);
        i++;
    }
}

function typeWriter2_en() {
    if (o < txtDescriptionEN.length) {
        document.getElementById("description").innerHTML += txtDescriptionEN.charAt(o);
        setTimeout(typeWriter2_en, speed2);
        o++;
    }
}
function typeWriter2_nl() {
    if (o < txtDescriptionNL.length) {
        document.getElementById("description").innerHTML += txtDescriptionNL.charAt(o);
        setTimeout(typeWriter2_nl, speed2);
        o++;
    }
}

window.onload = function() {
    ChangeText();
    typeWriter();

    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page == "index_nl.html") {
        typeWriter2_nl();
    } else {
        typeWriter2_en();
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

const OriginalText = 
["A","b","e","l","_","v","a","n","_","d","e","r","_","S","t","e","e","n"];
const SpecialSymbols = 
["@","&","E","|","_","^","A","И","_","đ","E","®","_","$","T","é","E","N"];


const CurrentText = 
["A","b","e","l","_","v","a","n","_","d","e","r","_","S","t","e","e","n"];

async function ChangeText(){
    var AmmountToChange = Math.floor(Math.random() * 2);
    for (let i = 0; i < AmmountToChange; i++) {
        var Index = Math.floor(Math.random() * OriginalText.length);
        CurrentText[Index] = SpecialSymbols[Index];
    }

    var AmmountToChangeBack = Math.floor(Math.random() * 4);
    for(let i = 0; i < AmmountToChangeBack; i++) {
        var Index = Math.floor(Math.random() * OriginalText.length);
        CurrentText[Index] = OriginalText[Index];
    }

    const FinalText = CurrentText.join(' ');
    document.getElementById("abelText").innerHTML = "&lt;"+ FinalText +"&gt;"

    await delay(100);
    ChangeText();
}