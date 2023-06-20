const h1 = document.querySelector('h1');
const input1 = document.querySelector('#dato1');
const input2 = document.querySelector('#dato2');
const btn = document.querySelector('calcular');
const output1 = document.querySelector('#concat');
const output2 = document.querySelector('#suma');

function btnOnClick(){
    const concat_Input = input1.value + input2.value;
    const suma_Input = Number(input1.value) + Number(input2.value);
    output1.innerText = "Resultado concatenacion: " +concat_Input;
    output2.innerText = "Resultado suma: " + suma_Input;
    
    

}