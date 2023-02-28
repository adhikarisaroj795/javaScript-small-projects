const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
   return parseInt(userInput.value)
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
   const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
   outputResult(currentResult, calcDescription);
}

function add(){
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult 
   currentResult = currentResult + enteredNumber;
   createAndWriteOutput('+', initialResult, enteredNumber );
}

function sub(){
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult 
   currentResult = currentResult - enteredNumber;
   createAndWriteOutput('-', initialResult, enteredNumber);

}

function mul(){
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult 
   currentResult = currentResult * enteredNumber;
   createAndWriteOutput('*', initialResult, enteredNumber)

}

function div(){
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult 
   currentResult = currentResult / enteredNumber;
   createAndWriteOutput('/', initialResult, enteredNumber )

}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', mul);
divideBtn.addEventListener('click', div);



