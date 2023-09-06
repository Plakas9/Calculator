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
    
    
    if(operator == "+") return  add(a,b).toString(); 
    if(operator == "-") return subtract(a,b).toString();
    if(operator == "*" ||operator == "x") return multiply(a,b).toString();
    if(operator == "/") return divide(a,b).toString();
    
}  

function populate(){ 
    const operatorDisplay = document.querySelector(".operations");
    const resultDisplay = document.querySelector(".result");
    let term,nextnumber,result;
    term = "";
    const buttonList = document.querySelectorAll(".button");
    buttonList.forEach( e =>{
        console.log(e);
        e.addEventListener("click", ()=> {
            
            
            if(+e.value>= 0 ){ // dealing for case where button is a number
                if (operatorDisplay.textContent[0] == "0"){
                    console.log(e.value);
                    operatorDisplay.textContent = e.value;
                    term  += e.value;

                }else{
                    operatorDisplay.textContent += e.value;
                    term  += e.value;
                }
                

            }
            if(isOperator(e.value)){
                resultDisplay.textContent += operatorDisplay.textContent + " " +e.value + " ";
                operatorDisplay.textContent = "0";
                term  += " " + e.value + " ";
               console.log(term);
                
            }
            
        });
        
       
    });


}


/* Dom Maniputlation*/
const num = populate();
