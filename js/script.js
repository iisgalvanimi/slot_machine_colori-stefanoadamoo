var arraySimboli = [
    ' 🟥 ',
    ' 🟧 ',
    ' 🟨 ',
    ' 🟩 ',
    ' 🟦 ',
    ' 🟪 '
];

document.getElementById("button-slot").addEventListener("click", gioca);
document.getElementById('slot1').innerHTML = arraySimboli[0];
document.getElementById('slot2').innerHTML = arraySimboli[2];



function gioca() {
    document.getElementById("button-slot").disabled = true;

    var tentativi = numeriTentativi(3, 12);

    var t1 = 0;
    slot1 = setInterval(function() {
        numeroRandom = generaRandom(arraySimboli.length);
        document.getElementById("slot1").innerHTML = arraySimboli[numeroRandom];
        console.log(arraySimboli[numeroRandom]);
        t1++;
        if (t1 == tentativi) {
            clearInterval(slot1);
            return null;
        }
    }, 100);

    var t2 = 0;

    slot2 = setInterval(function() {
        t2++;
        if (t2 == tentativi) {
            clearInterval(slot2);
            vittoria();
            document.getElementById("button-slot").disabled = false;
            return null;
        }
        numeroRandom = generaRandom(arraySimboli.length);
        document.getElementById("slot2").innerHTML = arraySimboli[numeroRandom];
        console.log(arraySimboli[numeroRandom]);
    }, 100);



    function vittoria() {
        var slot1 = document.getElementById("slot1").innerHTML;
        var slot2 = document.getElementById("slot2").innerHTML;

        console.log(document.getElementById("slot1").innerHTML);
        if (slot1 == slot2) {
            document.getElementById("risultato").innerHTML = 'HAI VINTO';
        } else {
            document.getElementById("risultato").innerHTML = 'HAI PERSO';
        }
    }
}


function generaRandom(max) {
    return Math.floor((Math.random() * max));
}

function numeriTentativi(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}