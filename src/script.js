let turn = 1;
let winner = document.getElementById("result");

let id1 = document.getElementById("b1");
let id2 = document.getElementById("b2");
let id3 = document.getElementById("b3");
let id4 = document.getElementById("b4");
let id5 = document.getElementById("b5");
let id6 = document.getElementById("b6");
let id7 = document.getElementById("b7");
let id8 = document.getElementById("b8");
let id9 = document.getElementById("b9");

let tile = document.getElementsByTagName("button");
document.addEventListener("click", print);

function print(tile) {
    // printing on board
    let target = tile.target.id;
    if (turn == 1) {
        document.getElementById(target).innerHTML = "X";
        document.getElementById("turn").innerHTML = "O Turn";
        turn = 1 - turn;
    }
    else if (turn == 0) {
        document.getElementById(target).innerHTML = "O";
        document.getElementById("turn").innerHTML = "X Turn";
        turn = 1 - turn;
    }

    //winning logic
    if ( //rows
        (id1.innerText == id2.innerText) && (id3.innerText == id2.innerText) && (id1.innerText == "X") ||
        (id4.innerText == id5.innerText) && (id5.innerText == id6.innerText) && (id6.innerText == "X") ||
        (id7.innerText == id8.innerText) && (id9.innerText == id8.innerText) && (id9.innerText == "X") ||
        //columns
        (id1.innerText == id4.innerText) && (id4.innerText == id7.innerText) && (id1.innerText == "X") ||
        (id2.innerText == id5.innerText) && (id5.innerText == id8.innerText) && (id8.innerText == "X") ||
        (id3.innerText == id6.innerText) && (id9.innerText == id6.innerText) && (id9.innerText == "X") ||
        //diagonals
        (id1.innerText == id5.innerText) && (id5.innerText == id9.innerText) && (id1.innerText == "X") ||
        (id3.innerText == id5.innerText) && (id5.innerText == id7.innerText) && (id7.innerText == "X")) {
        winner.innerHTML = "X Wins!!";
        document.removeEventListener("click", print);
        return '';
    }

    else if ( //rows
        (id1.innerText == id2.innerText) && (id3.innerText == id2.innerText) && (id1.innerText == "O") ||
        (id4.innerText == id5.innerText) && (id5.innerText == id6.innerText) && (id6.innerText == "O") ||
        (id7.innerText == id8.innerText) && (id9.innerText == id8.innerText) && (id9.innerText == "O") ||
        //columns
        (id1.innerText == id4.innerText) && (id4.innerText == id7.innerText) && (id1.innerText == "O") ||
        (id2.innerText == id5.innerText) && (id5.innerText == id8.innerText) && (id8.innerText == "O") ||
        (id3.innerText == id6.innerText) && (id9.innerText == id6.innerText) && (id9.innerText == "O") ||
        //diagonals
        (id1.innerText == id5.innerText) && (id5.innerText == id9.innerText) && (id1.innerText == "O") ||
        (id3.innerText == id5.innerText) && (id5.innerText == id7.innerText) && (id7.innerText == "O")) {
        winner.innerHTML = "O Wins!!";
        document.removeEventListener("click", print);
        return '';
    }

    else if((id1.innerText != '-') && (id2.innerText != '-') && (id3.innerText != '-') && (id4.innerText != '-') && (id5.innerText != '-') && (id6.innerText != '-') && (id7.innerText != '-') && (id8.innerText != '-') && (id9.innerText != '-')){
        winner.innerHTML = "DRAW";
    }
}

let reload = document.getElementById("refresh");
reload.addEventListener("click", reset);

function reset() {
    window.location.reload();
}