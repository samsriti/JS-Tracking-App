let count = 0
let countEl= document.getElementById("display-count")
let saveEl= document.getElementById("save-el")


function increment(){
    //console.log(count)
    count+=1
    countEl.textContent = count
}

function save(){
    let expenseEntry = count + " - "
    saveEl.textContent += expenseEntry
    countEl.textContent = 0
    count = 0
}