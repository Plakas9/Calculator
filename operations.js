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


function CalculatorOperation(string){
    arr  = string.split('');
    console.log(arr);
    arr.forEach((element,i,array)=>{
        if (arr[i] == " "){
            arr[i] = ""
            }
    });
    string = arr.join("");
    let operator = string[1];
    let a = +string[0]; // have try catch for NaN/undefined
    let b = +string[2]; // have try catch for Nan/undefined
    
    
    if(operator == "+") return  add(a,b); 
    if(operator == "-") return subtract(a,b);
    if(operator == "*" ||operator == "x") return multiply(a,b);
    if(operator == "/") return divide(a,b);
    return result;
}  
