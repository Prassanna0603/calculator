

let result = document.getElementById("outputscreen");

function display(num){
    result.value = result.value + num;
}


function calculate(){
    try{
        result.value =eval(result.value)
    }
    catch(err){
        alert("Invalid Input")
    }
}
function Clear(){
    result.value =" "; 

}
function del(){
    result.value =  result.value.slice(0,-1); 

}