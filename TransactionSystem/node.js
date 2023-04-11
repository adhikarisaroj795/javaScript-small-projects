
let totalAmount = 0;
let transactions =[];

// get the input elements outside of the addTransaction function
const dateInput = document.getElementById('date');
const transactionTypeInput = document.getElementById("transaction-type");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");

const addTransaction = () =>{

    if(descriptionInput.value !=='' && amountInput.value !=='' && !isNaN(amountInput.value)){
    const date = dateInput.value;
    const transactionType = transactionTypeInput.value;
    const description = descriptionInput.value;
    const amount = amountInput.value;
    const now = new Date();
    const timeString = now.toLocaleTimeString(); 
    const time = timeString;
    console.log(timeString);

    const transaction = {
        date,
        time,
        transactionType,
        description,
        amount
    };
    transactions.push(transaction);

    //show the transaction to table
    const table = document.getElementById('transaction-table').getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    const dateCell = row.insertCell(0);
    const timeCell = row.insertCell(1)
    const typeCell = row.insertCell(2);
    const descCell = row.insertCell(3);
    const amountCell = row.insertCell(4);

    dateCell.innerHTML = date;
    typeCell.innerHTML = transactionType; //fix typo
    descCell.innerHTML = description;
    amountCell.innerHTML = amount;
    timeCell.innerHTML = time;

    //update the total amount
    if (transactionType === "income") {
        totalAmount += parseInt(amount);
    } else {
        totalAmount -= parseInt(amount);
    }

    const totalAmountCell = document.getElementById('total-amount');
    totalAmountCell.innerHTML = totalAmount;
  }
  else{
    alert('enter valid info');
  }
    

    //create a workbook and add the transaction data to a worksheet

   
}

const addbtn = document.getElementById('add-btn');
addbtn.addEventListener("click",() => {
    addTransaction();
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
});

const downloadD = document.getElementById('download-btn');
downloadD.addEventListener("click",() => {

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(transactions);

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions'); // add the worksheet to the workbook

    const excelFileName = 'transaction.xlsx';
    XLSX.writeFile(workbook, excelFileName);
});

// const downloadBtn = document.getElementById('download-btn');
// downloadBtn.addEventListener("click",() => {
//     const excelFile = XLSX.write(workbook, {bookType:'xlsx', type: 'buffer'});
//     saveAs(new Blob([excelFile], {type: "application/octet-stream"}), excelFileName);
// });

