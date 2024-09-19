let num1;
let num2;

function adds() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    isNeg(Number(num1) + Number(num2));
    document.getElementById("result").innerHTML = String(Number(num1) + Number(num2));
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

function subs() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    isNeg(Number(num1) - Number(num2));
    document.getElementById("result").innerHTML = String(Number(num1) - Number(num2));
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

function mults() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    isNeg(Number(num1) * Number(num2));
    document.getElementById("result").innerHTML = String(Number(num1) * Number(num2));
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

function divs() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    isNeg(Number(num1) / Number(num2));
    document.getElementById("result").innerHTML = String(Number(num1) / Number(num2));
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

function pows() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    let result = 1;

    for (let i = num2; i > 0; i--) {
        result *= num1
    }
    isNeg(result);
    document.getElementById("result").innerHTML = String(Number(result));
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
function clears() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    document.getElementById("result").style.color = "#FFFAFF"
    document.getElementById("result").innerHTML = "";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

function isNeg(num) {

    if (num < 0) {
        document.getElementById("result").style.color = "#C52233";
    } else {
        document.getElementById("result").style.color = "#FFFAFF"
    }


}
