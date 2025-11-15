let defaultResult = 0;

currentResult = defaultResult;

function addNumbers(){
        
        currentResult = currentResult + parseInt(userInput.value);
        outputResult(currentResult, '');
}

// currentResult = addNumbers(8, 7);

addBtn.addEventListener('click', addNumbers)

