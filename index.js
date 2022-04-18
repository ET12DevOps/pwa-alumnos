// buscamos referencia al objeto button con id = agregar_alumno
const button_agregar = document.getElementById('agregar_alumno')

// forma clasica
// se indica que cada vez que se realice un click en el boton 'button_agregar'
// se ejecute la funcion 'acciones_del_click'
// button_agregar.addEventListener('click', acciones_del_click)

// defino una funcion en js
// function acciones_del_click() {
//     console.error('hola mundo!')
//     alert('hola mundo!')
// }

const nombre_alumno = document.getElementById('nombre')
const apellido_alumno = document.getElementById('apellido')

// forma moderna
// funcion definida con 'funcion de flecha'
button_agregar.addEventListener('click', () => {
    //para acceder al contenido del objeto (input) se debe colocar el atributo 'value'
    console.log(`Nombre: ${nombre_alumno.value}`)
    console.log(`Apellido: ${apellido_alumno.value}`)
})

