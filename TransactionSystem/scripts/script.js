const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017'; // replace with your MongoDB connection string
const dbName = 'myDatabase'; // replace with your database name
const collectionName = 'transactionsData'; // replace with your collection name

MongoClient.connect(url, function(err, client) {
  if (err) throw err;

  const db = client.db(dbName);

  let totalAmount = 0;
  let transactions =[];

  // get the input elements outside of the addTransaction function
  const dateInput = document.getElementById('date');
  const transactionTypeInput = document.getElementById("transaction-type");
  const descriptionInput = document.getElementById("description");
  const amountInput = document.getElementById("amount");

  const addTransaction = () =>{

    const date = dateInput.value;
    const transactionType = transactionTypeInput.value;
    const description = descriptionInput.value;
    const amount = amountInput.value;
    const now = new Date();
    const timeString = now.toLocaleTimeString(); 
    const time = timeString;

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
    const timeCell = row.insertCell(1);
    const typeCell = row.insertCell(2);
    const descCell = row.insertCell(3);
    const amountCell = row.insertCell(4);

    dateCell.innerHTML = date;
    typeCell.innerHTML = transactionType;
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

    // insert the transaction into the MongoDB collection
    const collection = db.collection(collectionName);
    collection.insertOne(transaction, function(err, result) {
      if (err) throw err;
      console.log('Transaction inserted');
    });
  };

  const addbtn = document.getElementById('add-btn');
  addbtn.addEventListener("click",() => {
    addTransaction();
  });
});
