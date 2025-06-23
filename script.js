const errorMessagediv = document.getElementById("errorMessages");
const form = document.getElementById("formulario");


const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const texto = document.getElementById("duda")

let errorMsg = [];

function verificar() {
    errorMsg = [];
    errorMessagediv.innerText = "";

    zona1Errors(nombre, email, texto);
}


function zona1Errors(field1, field2, field3 = undefined) {
    const getErrorMsg = (field) => `Introduce un ${document.querySelector(`label[for="${field.id}"]`).textContent} valido`;

    if (!field1.checkValidity()) errorMsg.push(getErrorMsg(field1));
    if (!field2.checkValidity()) errorMsg.push(getErrorMsg(field2));
    if (!field3.checkValidity()) errorMsg.push(getErrorMsg(field3));


    if (errorMsg.length > 0) {
        errorMessagediv.innerText = errorMsg.join('\n');
    }

    console.log(errorMsg);
}