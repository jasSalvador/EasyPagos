/* Para la lógica de esta aplicación, debes utilizar las nuevas declaraciones de variables, y la nueva forma de interpolar cadenas de ES6. 
Además, declarar al menos 3 funciones de flecha para realizar las siguientes funciones:
1- Calcula el valor de las cuotas a pagar.
2- Calcula el valor del interés.
3- Formatea el monto de las cuotas para incluir puntos en lugar de miles. */

document.getElementById("btnSubmit").addEventListener("click", (event) => {
    event.preventDefault();

    let deuda = parseInt(document.getElementById("deuda").value);
    let interes = parseInt(document.getElementById("interes").value);
    let cuotas = parseInt(document.getElementById("cuotas").value);

    //llamamos funcion validar
    if(validar(deuda, interes, cuotas)){

    //respuesta
    let mensaje = `NO TE PREOCUPES! PUEDES PAGARLO EN ${cuotas} CUOTAS DE $ ${(calcular(deuda, interes, cuotas)).toLocaleString()}`;
    document.getElementById("totalPago").innerText = mensaje;
    }
})

const calcular = (deuda, interes, cuotas) => {
    let calculo = (deuda / cuotas) * ((100 + interes) / 100);
    return calculo;
}

//validaciones
const validar = (deuda, interes, cuotas) => {
    //valida q no hayan datos vacios
    if (isNaN(deuda) || isNaN(interes) || isNaN(cuotas)) {
        alert("Debes ingresar todos los datos");
        return false;
    }

    //validar q los montos sean superiores a 0
    if (deuda <= 0 || interes <= 0 || cuotas <= 0) {
        alert("Debes ingresar valores superiores a 0");
        return false;
    }
    return true;
};


