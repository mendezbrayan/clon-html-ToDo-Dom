

// Boton De Crear
const btnTarea = document.querySelector('#btnTarea');
// Input Donde Se Escribe la tarea
const creaTarea = document.querySelector('#creaTarea')

// Evento Para Capturar El Valor Del Input

let value = ''
creaTarea.addEventListener('change', (e) => {

    value = e.target.value

})
let contador = 0;

// Crear Tarea
const crearTareita = () => {
    if (value.trim() != '') {


        contador += 1;
        const div = `
        <div id="padre-${contador}" class="">
            
            <div class="ps-5 pt-3 pe-5  d-flex justify-content-between ">

                <div class="targeta-borroso " >
                    <div class="card-body  ">
                        <p id="parrafo-${contador}" class="card-text letras fs-5">
                         <input class="mt-2 me-2 form-check-input fs-5 " type="checkbox"role="switch" 
                         id="tarea-${contador}" id="defaultCheck1" > 
                         ${value}
                         </p>
                
                    </div>
               </div>
                              
                  

                
                <div class="col-3 pt-2  d-flex justify-content-end pt-3">
                    <div class="btnRedondo ">
                         <i id="btnDelete-${contador}" class="bi bi-trash-fill fs-4 "></i>
                    </div>
                </div>   
            </div>

        </div>`
        const tareas = document.querySelector('#tareas')

        tareas.insertAdjacentHTML('afterbegin', div)






        const btnEliminarCreado = document.querySelector(`#btnDelete-${contador}`)
        const contenedorPadre = document.querySelector(`#padre-${contador}`)

        btnEliminarCreado.addEventListener('click', () => {
            contenedorPadre.remove()
        })
        const checkBoxCreado = document.querySelector(`#tarea-${contador}`);
        const parrafoCreado = document.querySelector(`#parrafo-${contador}`);
        checkBoxCreado.addEventListener('click', () => {
            parrafoCreado.classList.toggle('Negro')
            parrafoCreado.classList.toggle('text-decoration-line-through')
        })

        creaTarea.value = ''
        value = ''
    }
    else {
        alert('Escribe una Tarea')
    }





}


btnTarea.addEventListener('click', crearTareita);















// const crearTarea = () => {
//     const div = document.createElement('div')
//     div.classList.add('form-check')
//     const input = document.createElement('input')
//     input.type = 'checkbox'
//     input.id = 'dos'
//     input.classList.add('form-check-input')
//     const label = document.createElement('label')
//     label.classList.add('form-check-label')
//     const parrafo = document.createElement('p')
//     parrafo.id = 'textoDos'
//     parrafo.textContent = value
//     div.insertAdjacentElement('afterbegin', label)
//     div.insertAdjacentElement('afterbegin', input)
//     label.insertAdjacentElement('afterbegin', parrafo)
//     const tareas = document.querySelector('#tareas')
//     tareas.insertAdjacentElement('afterbegin', div)



// }
// btnTarea.addEventListener('click', crearTarea)

