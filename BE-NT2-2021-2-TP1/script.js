const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  let totalTareas = 0
  let totalTareasPendientes = 0

  function eliminarElemento(){
    // console.log('eliminar este elemento', this.parentElement)
    const parent = this.parentElement
    console.log('Eliminando este elemento: ', parent)
    parent.remove()

    totalTareas--
    //TODO: buscar la forma de ver si el checkbox esta tildado o no. 
    // Si NO esta tildado hay que decrementar
    // totalTareasPendientes



    renderizarContadores()
  }


  function createTODO(nombre) {
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.className = classNames.TODO_CHECKBOX

    const span = document.createElement('span')
    span.className = classNames.TODO_TEXT
    span.innerHTML = nombre

    const button = document.createElement('button')
    button.className = classNames.TODO_DELETE
    button.innerHTML = ' X '
    button.onclick = eliminarElemento

    const li = document.createElement('li')
    li.className = classNames.TODO_ITEM
    
    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(button)

    console.log(li)

    return li

  }

  function renderizarContadores(){
    itemCountSpan.innerHTML = totalTareas
    uncheckedCountSpan.innerHTML = totalTareasPendientes
  }

  function addTodo() {
    const nombre = prompt()
    if (nombre){
      const tarea = createTODO(nombre)
      // debugger
      list.appendChild(tarea)
      totalTareas ++
      totalTareasPendientes ++
      renderizarContadores()

    }
     
  }