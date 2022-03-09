const form = document.querySelector('.form')
const formInput = document.querySelector('.form-input')
const list = document.querySelector('.todos-list')
const addBtn = document.querySelector('.add-btn')
const modal = document.querySelector('.modal')
const cancelBtn = document.querySelector('.cancel')


form.addEventListener('submit', (e)=> {
    e.preventDefault()
    
    const inputValue = formInput.value

    if(inputValue) {

    const li = document.createElement('li')
    li.classList.add('todo')
    
    const todoText = document.createElement('p')
    todoText.classList.add('todo-text')
    todoText.textContent = inputValue

    const checkBtn = document.createElement('button')
    checkBtn.classList.add('check-btn')
    checkBtn.innerHTML = '<i class="fas fa-check"></i>'

    const trashBtn = document.createElement('button')
    trashBtn.classList.add('trash-btn')
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'

    list.appendChild(li)
    li.appendChild(todoText)
    li.appendChild(checkBtn)
    li.appendChild(trashBtn)
    }  else  {
        modal.style.display = 'block'
    }

    formInput.value = ''
})

document.addEventListener('click', (e)=> {
    if (e.target.classList[0] == 'check-btn') {
        const item = e.target.parentElement
        item.classList.toggle  ('done')
    }
document.addEventListener('click', (e)=> {
    if (e.target.classList[0] == 'trash-btn') {
        const item = e.target.parentElement
        item.classList.add('hidden')
        item.addEventListener('transitionend', ()=> {
            item.remove()
        })
    }
})
})

cancelBtn.addEventListener('click', ()=> {
    modal.style.display = 'none'
})
