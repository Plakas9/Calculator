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
function isOperator(a){//
    const validOperators = ["+","-","/","*"];
    return validOperators.includes(a);
}

function getOperator(string){ // returns last operator found in string
    let operator;
    
    for(let i = 0; i < string.length; i++){
        
        if(isOperator(string[i])){
            
            return string[i];
        }
    }
    

}

function CalculatorOperation(string){ // may need to split into two functions later on. lets see if i can work with one.
   
    let arr  = string.split('');
    
    arr.forEach((element,i,array)=>{
        if (arr[i] == " "){
            arr[i] = ""
            }
    });
    
    string = arr.join("");
    
    let operator = getOperator(string);
    let numArr = string.split(operator);
    let a = parseFloat(numArr[0]); // may have to introduce try catch for NaN/undefined when expressions aren't valid
    let b = parseFloat(numArr[1]); // may have to introduce try catch for NaN/undefined when expressions aren't valid
    
    
    if(operator == "+") return  add(a,b).toString(); 
    if(operator == "-") return subtract(a,b).toString();
    if(operator == "*" ||operator == "x") return multiply(a,b).toString();
    if(operator == "/") return divide(a,b).toString();
    
}  

function populate(){ 
    const operatorDisplay = document.querySelector(".operations");
    const resultDisplay = document.querySelector(".result");
    
    let term;
    
    term = "";
    const buttonList = document.querySelectorAll(".button");
    buttonList.forEach( e =>{
      
        e.addEventListener("click", ()=> {
            
            
            if(+e.value>= 0 || e.value == "."){ // dealing for case where button is a number or decimal.

                if(term.charAt(term.length-1)=="." && e.value =="."){
                    term = term.slice(0,-1);
                    operatorDisplay.textContent = operatorDisplay.textContent.slice(0,-1);
                }

                if (operatorDisplay.textContent[0] == "0"){

                    operatorDisplay.textContent = e.value;
                    term  += e.value;
                }else{

                    operatorDisplay.textContent += e.value;
                    term  += e.value;
                }
                
            } 
            
            if(isOperator(e.value)){ // operator input
                
                if(isOperator(term.charAt(term.length-1))){ // case#1 where the end of a string is already a operator
                    term = term.slice(0,-1); // remove so we can later replace with newly selected operator.
                }
                
                term += e.value;
                
                if(isOperator(term)){ // Case#2: where we add an operator first
                    term = "0" + term;
                }
                
                
                resultDisplay.textContent = term.slice(0,-1);
                operatorDisplay.textContent = "0";
                temTerm = term.slice(0,-1);             // We dont want the last inputed operator when evaluating the term.
                let operator = getOperator(temTerm);
              
                if(isOperator(operator)){ 

                    let arr = temTerm.split(operator);
                    console.log(arr.length);
                    if(arr.length == 2){ 
                        resultDisplay.textContent = CalculatorOperation(temTerm);
                        term = resultDisplay.textContent + e.value;
                        
                    }
                }
            }

            if(e.value == "="){
                console.log(term);
                resultDisplay.textContent = term + "="  + CalculatorOperation(term);
                operatorDisplay.textContent = "0";
            }
            if(e.value == "c" || e.value == "d"){
                if(e.value == "c") resultDisplay.textContent = "0"; 
                operatorDisplay.textContent = "0";
                
            }
            
        });
        
       
    });

   


}


/* Dom Maniputlation*/
const num = populate();
