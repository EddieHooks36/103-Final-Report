let task = []
function returnText(){
    let input = document.getElementById("userInput").value;
    displayTASK(input)

}

function displayTASK(){
    const DIV = document.getElementById("userInput");
    let text = "";
    
    for(let i; task.length;){
        if(type[i]){
            text= `
            `;
        }else if(type[i]){
            text= `
            `;
        }else{
            text= `
        `;
        }
        document.getElementById("userInput").innerHTML = text;
    }
}

displayTASK();
