var txtTitle = '  <Abel_van_der_Steen>';
var txtDescription = "Hello and welcome to my Portfolio Website! I am a 17 year-old Software Development student and am very passionate about what I do. I hope you'll be able to find what you're looking for here as I delve deeper into all things me and my skills!";
var speed1 = 90;
var speed2 = 10;
i = 0; 
o = 0;

function typeWriter() {
    if (i < txtTitle.length) {
        document.getElementById("title").innerHTML += txtTitle.charAt(i);
        setTimeout(typeWriter, speed1);
        i++;
    }
}

function typeWriter2() {
    if (o < txtDescription.length) {
        document.getElementById("description").innerHTML += txtDescription.charAt(o);
        setTimeout(typeWriter2, speed2);
        o++;
    }
}

window.onload = function() {
    ChangeText();
    typeWriter()
    typeWriter2();
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