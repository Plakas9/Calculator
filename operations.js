function add(a,b){
    return a + b;
}
function multiply(a,b){
    return a*b;
}
function subtract(a,b){
    return a-b;
}
function divide(a,b){
    return a/b;
}


function CalculatorOperation(string){ // may need to split into two functions later on. lets see if i can work with one.
    arr  = string.split('');
    console.log(arr);
    arr.forEach((element,i,array)=>{
        if (arr[i] == " "){
            arr[i] = ""
            }
    });
    string = arr.join("");
    let operator = string[1];
    let a = +string[0]; // may have to introduce try catch for NaN/undefined when expressions aren't valid
    let b = +string[2]; // may have to introduce try catch for NaN/undefined when expressions aren't valid
    
    
    if(operator == "+") return  add(a,b); 
    if(operator == "-") return subtract(a,b);
    if(operator == "*" ||operator == "x") return multiply(a,b);
    if(operator == "/") return divide(a,b);
    return result;
}  



/* Dom Maniputlation*/


const CalcContainer = document.querySelector("calcContainer");
