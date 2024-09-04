let expenses = []; 
let totalAmount = 0; 

const categorySelect = document.getElementById('category-select'); 
const amountInput = document.getElementById('amount-input'); 
const dateInput = document.getElementById('date-input'); 
const addBtn = document.getElementById('add-btn'); 
const expensesTableBody = document.getElementById('expense-table-body'); 
const totalAmountCell = document.getElementById('total-amount'); 

addBtn.addEventListener('click', function(){     
    const category = categorySelect.value;     
    const amount = Number(amountInput.value);     
    const date = dateInput.value;     
    if (category === '') {         
        alert('Please select a Category');         
        return;     
    }     
    
    if (isNaN(amount) || amount <= 0) {         
        alert('Please enter a valid amount');         
        return;     
    }     
    if (date === '') {         
        alert('Please select a date');         
        return;     }     
        const expense = {category, amount, date};     
        expenses.push(expense);     
        totalAmount += amount;     
        totalAmountCell.textContent = totalAmount;     
        
        const newRow = expensesTableBody.insertRow();     
        const categoryCell = newRow.insertCell();     
        const amountCell = newRow.insertCell();     
        const dateCell = newRow.insertCell();     
        const deleteCell = newRow.insertCell();     
        
        const deleteBtn = document.createElement('button');     
        categoryCell.textContent = expense.category;     
        amountCell.textContent = expense.amount;     
        dateCell.textContent = expense.date;     
        deleteBtn.textContent = 'Delete';     
        deleteBtn.classList.add('delete-btn');     
        deleteCell.appendChild(deleteBtn);     
        deleteBtn.addEventListener('click', function() {  
            
                   
            expenses = expenses.filter(e => e !== expense);         
               
            totalAmount -= expense.amount;         
            totalAmountCell.textContent = totalAmount;         
                   
            expensesTableBody.removeChild(newRow);     
        }); 
    });