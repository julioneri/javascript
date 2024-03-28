function adicionar() {
    var itemList = window.document.querySelector('input#todo')
    var listArea = window.document.querySelector('ul#todolist')
    var cleanBtn = window.document.querySelector('input#cleanBtn')

    var listElement = window.document.createElement('li')

    var labelElement = window.document.createElement('label')

    var checkbox = window.document.createElement('input')
    checkbox.type = 'checkbox' // Poderia alernativamente utilizar 'checkbox.setAttribute('type', 'checkbox')'
    checkbox.name = 'check'
    checkbox.id = 'check' + (listArea.children.length+1)

    var deleteBtn = window.document.createElement('button')
    deleteBtn.textContent = 'Deletar'

    if (itemList.value != "") {
        listElement.appendChild(checkbox)

        labelElement.textContent = todo.value
        labelElement.htmlFor = checkbox.id
        listElement.appendChild(labelElement)

        listElement.appendChild(deleteBtn)

        listArea.appendChild(listElement)
        itemList.value = ""
        cleanBtn.style.display = 'inline-block'
    }

    deleteBtn.addEventListener('click', deletarItem)

    function deletarItem() {
        listElement.remove()
        if (listArea.children.length == 0) {
            cleanBtn.style.display = 'none'
        }
    }

    checkbox.addEventListener('click', marcado)
    function marcado() {
        if (labelElement.style.textDecoration != 'line-through') {
            labelElement.style.textDecoration = 'line-through'
        } else {
            labelElement.style.textDecoration = 'none'
        }
        
    }
}

function remover() {
    var listArea = window.document.querySelector('ul#todolist')
    listArea.innerHTML = ""

    var cleanBtn = window.document.querySelector('input#cleanBtn')
    cleanBtn.style.display = 'none'
}

    //function remoBtn() {
//     var cleanBtn = window.document.querySelector('input#cleanBtn')
//     cleanBtn.style.display = 'none'
// }