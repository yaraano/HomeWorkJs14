const list = document.querySelector('#list')
const btnAdd = document.querySelector('#add')
const input = document.querySelector('#input')

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        completed: false,
    },
    {
        id: 2,
        text: "Meeting with boss",
        completed: false,
    }
]

list.innerHTML = todos.map(todo => {
    return `
    <li>
      <input type="checkbox" ${todo.completed ? 'checked' : ''}/>  
      <span>${todo.text}</span>
    </li>
  `;
}).join('');

function todoFunc(){
    list.innerHTML=
        `
        ${todos.map(todo=>{
            return `
            <li>
            <input type="checkbox" ${todo.completes?'checked':''}/>
            <span>${todo.text}</span>
            </li>
            `
        }).join('')}
        `
}


function closeButton(){
    btnAdd.style.display=todos.length===10?'none':''
}




btnAdd.addEventListener("click",()=>{
    const value = input.value
    if(value !== '' && todos.length<10){
        todos.push({
            id:todos.length+1,
            text: value,
            completes: false
        })
        input.value=''
        closeButton()
        todoFunc()
        }else if (value === '') {
        alert('Error')
    }
})

