const submitButon = document.querySelector("#submit");
const form = document.querySelector("#form_control");
const name = document.querySelector("#nombre");
const Email = document.querySelector("#Email");
const Asunto = document.querySelector("#Asunto");
const message = document.querySelector("#mensaje");


submitButon.addEventListener("click", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    console.log("Formulario de contacto IMPERCOL S.A ");
    console.log("name:", nombre.value);
    console.log("Email:", Email.value);
    console.log("Asunto:", Asunto.value);
    console.log("message:", mensaje.value);

    const URL = "https://zen-joliot-2182a3.netlify.app/form";

    const body = {
        nombre: nombre.value,
        email: Email.value,
        asunto: Asunto.value,
        mensaje: mensaje.value
    }

    const parametros = {
        headers: { "Content-Type": "text/plain; charset=UTF-8" },
        body: JSON.stringify(body),
        method: "POST"
    }

    fetch(URL, parametros)
        .then(data => {
            return data.json()
        })
        .then(res => console.log(res))
        .then(error => console.error(error))

}
