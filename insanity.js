let fandomHell = false;
function fandomHellActivate() {
  fandomHell = !fandomHell;
  if(fandomHell) {
    document.getElementsByClassName("fandom-hell").style.display = inline;
    document.getElementById("fanon-toggle").innerHTML = "Fandom Hell: On";
  } else {
    document.getElementsByClassName("fandom-hell").style.display = none;
    document.getElementById("fanon-toggle").innerHTML = "Fandom Hell: Off";
  }
}

document.getElementById("does-it-work").innerHTML= "hah it worked";