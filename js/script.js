// seleçaõ de elementos
const multplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicador")
const span = document.querySelector("span")
const multiplicationTable = document.querySelector("#multiplication-operations")
// funções
const createTable =(number, multiplicatorNumber)=>{
    multiplicationTable.innerHTML = "";
    for(i = 1; i <= multiplicatorNumber; i++){
        const result = number * i
        
        const tempalte = `<div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser()
        const htmlTempalte = parser.parseFromString(tempalte, "text/html")

        const row = htmlTempalte.querySelector(".row")
        multiplicationTable.appendChild(row)       
    }
    span.innerHTML = number

}
// Eventos
multplicationForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;
    createTable(multiplicationNumber, multiplicatorNumber);
})