let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}

function deleteLastCharacter(){
    let currentText = displayValue;
    if (currentText.length > 0) {
        displayValue = currentText.slice(0, -1);
        document.getElementById("display").value = displayValue;
    }
}
function calculateModulo(){
    try{
        displayValue = eval(displayValue + '% 1');
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}


function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}


