function validarCampos() {

    // validar Rut con expresiones regulares
    const exp = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/gim;
    const rut1 = document.getElementById("rut").value;
    const res = exp.test(rut1);
    console.log(res);
    if (res === false) {
        alert("Rut incorrecto");
        return false;
    }

    // Valida Nombre con expresiones regulares
    const expNombre = /^([a-z A-Z ñáéíóú]{2,60})$/i;
    const nombre1 = document.getElementById("nombres").value;
    const resNombre = expNombre.test(nombre1);
    console.log(resNombre);
    if (resNombre === false) {
        alert("Nombre incorrecto");
        return false;
    }

    // Valida Apellido con expresiones regulares
    const expApellidos = /^([a-z ñáéíóú]{2,60})$/i;
    const apellidos = document.getElementById("apellidos").value;
    const resApellidos = expApellidos.test(apellidos);
    console.log(resApellidos);
    if (resApellidos === false) {
        alert("Apellido incorrecto");
        return false;
    }

    // Valida Edad con expresiones regulares
    const expEdad = /^[0-9]{1,3}$/;
    const edad1 = document.getElementById("edad").value;
    const resEdad = expEdad.test(edad1);
    console.log(resEdad);
    if (resEdad === false) {
        alert("Edad incorrecta");
        return false;
    }

    // Valida Email con expresiones regulares
    const expMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
    const mail1 = document.getElementById("email").value;
    const resMail = expMail.test(mail1);
    console.log(resMail);
    if (resMail === false) {
        alert("Email incorrecto");
        return false;
    }

    // Valida fecha con expresiones regulares
    const expFecha = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/s
    const fecha1 =  document.getElementById("fecha").value;
    const resFecha = expFecha.test(fecha1);
    console.log(resFecha);
    if (resFecha === false) {
        alert("Fecha incorrecta");
        return false;
    }

    //obteniendo elemento selecionado de especialidad
    let espec = document.getElementById("especialidad");
    //esp seleccionada
    let especSelecionada = espec.options[espec.selectedIndex].value;


    //creando constante hora
    const hora = document.getElementById("hora");
    //hora seleccionada
    let horaSeleccionada = hora.options[hora.selectedIndex].value;

    mostrarMensaje(nombre1, apellidos,especSelecionada,fecha1,horaSeleccionada,mail1);
}
//mensaje al usuario con datos correctos
function mostrarMensaje(nombres,apellidos,especialidad,fecha,hora,mail){
    let texto =  `Estimado(a) ${nombres} ${apellidos}, su hora para ${especialidad} ha sido reservada para el día ${fecha} a las ${hora}. Además, se le envió un mensaje a su correo ${mail} con el detalle de su cita.
    Gracias por preferirnos `;

    alert(texto);
    document.getElementById("mensajeExito").textContent=texto;
}
