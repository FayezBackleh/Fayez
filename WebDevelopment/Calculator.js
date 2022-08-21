var output = document.querySelector('#display');



function setOP(op){
    let lastOperator = output.innerHTML.slice(-1);
    if (lastOperator === '+' || lastOperator === '-' || lastOperator === '×' || lastOperator === '÷') {
      output.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
    } else {
      outputLower.innerHTML += e.innerHTML;
    }

}
function calculate(){


}
function press(num){
    
    if (output.innerHTML === '0') {
        output.innerHTML = num;
    } 
    else {
        output.innerHTML += num;
}
}

function clr(){
    output.innerHTML = '0';
}