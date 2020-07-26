//validación con expresiones regulares
//rut
const exp = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/gim;

const rut1 = '12.870.631-3';

const res = exp.test(rut1)

console.log(res)

//nombre y apellido 
const expNombre = /^([a-z ñáéíóú]{2,60})$/i;

const nombre1 = 'Daniela Velásquez';

const resNombre = expNombre.test(nombre1)

console.log(resNombre)

//edad 
const expEdad = /^[0-9]{1,3}$/

const edad1 = '35';

const resEdad = expEdad.test(edad1)

console.log(resEdad)

//mail 
const expMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

const mail1 = 'dani.velasquezv@gmail.com'

const resMail = expMail.test(mail1)

console.log(resMail)

//fecha
const expFecha = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/

const fecha1 = '20-03-2020';

const resFecha = expFecha.test(fecha1)

console.log(resFecha)