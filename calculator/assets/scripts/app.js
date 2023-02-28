const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput(){
   return parseInt(userInput.value)
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
   const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
   outputResult(currentResult, calcDescription);
}
function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){

   const logEntry = {
      operation: operationIdentifier,
      prevResult: prevResult,
      number: operationNumber,
      result: newResult
   };
   logEntries.push(logEntry);
   console.log(logEntries);
}

function add(){
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult 
   currentResult += enteredNumber;
   createAndWriteOutput('+', initialResult, enteredNumber );
   writeToLog('ADD',initialResult, enteredNumber, currentResult);
   
}

function sub(){
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult 
   currentResult = currentResult - enteredNumber;
   createAndWriteOutput('-', initialResult, enteredNumber);
   writeToLog('SUB',initialResult, enteredNumber, currentResult);

}

function mul(){
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult 
   currentResult = currentResult * enteredNumber;
   createAndWriteOutput('*', initialResult, enteredNumber);
   writeToLog('MUL',initialResult, enteredNumber, currentResult);

}

function div(){
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult 
   currentResult = currentResult / enteredNumber;
   createAndWriteOutput('/', initialResult, enteredNumber )
   writeToLog('div' ,initialResult, enteredNumber, currentResult);

}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', mul);
divideBtn.addEventListener('click', div);



