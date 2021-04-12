const click = document.getElementById("clickme").onclick = golfScore;

function golfScore (par, strokes) {
    par = Math.floor(Math.random()*10);
    document.getElementById("par").innerHTML = par;
    strokes = Math.floor(Math.random()*10);
    document.getElementById("strokes").innerHTML = strokes;

    return (strokes == 1)? document.getElementById("myreturn").innerHTML = "Hole-in-one!":
    (strokes <= par -2)? document.getElementById("myreturn").innerHTML = "Eagle":
    (strokes == par -1)? document.getElementById("myreturn").innerHTML = "Berdie":
    (strokes == 0 || par == 0)? document.getElementById("myreturn").innerHTML = " ":
    (strokes == par)? document.getElementById("myreturn").innerHTML = "Par":
    (strokes == par + 1)? document.getElementById("myreturn").innerHTML = "Bogey":
    (strokes == par + 2)? document.getElementById("myreturn").innerHTML = "Double Bogey":
    document.getElementById("myreturn").innerHTML = "Go Home!";
}