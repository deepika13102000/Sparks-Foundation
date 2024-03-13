function addData() {
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let amount = document.getElementById("amountInput").value;
    let table = document.getElementById("outputTable");
    let newRow = table.insertRow(table.rows.length);
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = email;
    newRow.insertCell(2).innerHTML = amount;
    newRow.insertCell(3).innerHTML = '<button onclick="editData(this)">ADD MONEY</button>';
    clearInputs()
}

function editData(button) {
    let row = button.parentNode.parentNode
    let nameCell = row.cells[0]
    let emailCell = row.cells[1]
    let amountCell = row.cells[2]
    
    let amountInput =
        prompt("Enter the updated amount:",
            amountCell.innerHTML);
   
    amountCell.innerHTML = parseInt(amountCell.innerHTML) + parseInt(amountInput);
}

function clearInputs() {
    document.getElementById('nameInput').value = "";
    document.getElementById('emailInput').value = "";
    document.getElementById('amountInput').value = "";
}


