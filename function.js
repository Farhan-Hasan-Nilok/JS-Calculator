let display = document.getElementById("display").value;


document.getElementById("one").addEventListener("click", function () {
    showValue(1);
})

document.getElementById("two").addEventListener("click", function () {
    showValue(2);
})

document.getElementById("three").addEventListener("click", function () {
    showValue(3);
})

document.getElementById("four").addEventListener("click", function () {
    showValue(4);
})

document.getElementById("five").addEventListener("click", function () {
    showValue(5);
})

document.getElementById("six").addEventListener("click", function () {
    showValue(6);
})
document.getElementById("seven").addEventListener("click", function(){
    showValue(7);
})

document.getElementById("eight").addEventListener("click", function () {
    showValue(8);
})

document.getElementById("nine").addEventListener("click", function () {
    showValue(9);
})


document.getElementById("zero").addEventListener("click", function () {
    showValue(0);
})
document.getElementById("clear").addEventListener("click", function(){
    document.getElementById("display").innerText = "0";
})

function showValue(number){
    if (document.getElementById("display").innerText == "0"){
        document.getElementById("display").textContent = number
    }

    else{
        document.getElementById("display").innerText +=number;
    }
}