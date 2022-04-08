let inputField = document.getElementById('input_Field');
let addBtn = document.getElementById('add_Btn');
let todoList = document.getElementById('todo_List');
let allTodoList = document.getElementById('see_all');
let hideTodoList = document.getElementById('hide_all');

addBtn.addEventListener('click', () => {
    inputField.classList.replace('bg-green-200', 'bg-transparent');
    if (inputField.value != '') {
        todoList.classList.add('mt-5');
        const createElement = document.createElement('div');
        createElement.classList.add('bg-green-400', 'flex', 'justify-start', 'items-center', 'mt-2', 'bg-opacity-5', 'backdrop-blur-lg', 'rounded-lg', 'px-2', 'py-1');

        createElement.innerText = inputField.value;

        todoList.appendChild(createElement);
        inputField.value = '';

        createElement.addEventListener('click', () => {
            createElement.style.textDecoration = 'line-through';
            console.log('Line Through');

        })
        createElement.addEventListener('dblclick', () => {

            todoList.removeChild(createElement);
            console.log('Removed!');
            if (todoList.childElementCount < 5) {

                todoList.classList.replace('overflow-y-scroll', ' ');
                todoList.classList.replace('h-48', 'h-auto');
                console.log('More than 5');
            }
        })
        if (todoList.childElementCount > 5) {
            allTodoList.addEventListener('click', () => {
                console.log('All Todo List Has been Shown');
                todoList.classList.replace('overflow-y-scroll', 'overflow-visible');
                todoList.classList.replace('h-48', 'h-auto');
                todoList.classList.replace('scrollbar-hide', ' ')
            })
            hideTodoList.addEventListener('click', () => {
                console.log('All Todo List Has been Hiden');
                todoList.classList.add('overflow-y-scroll', 'scrollbar-hide');
                todoList.classList.replace('h-auto', 'h-48');
            })
            todoList.classList.add('overflow-y-scroll', 'h-48', 'scrollbar-hide');
            console.log('More than 5');

        } else {
            console.log('Less than 5');

        }


        console.log('Clicked!');

    } else {
        inputField.classList.add('bg-green-200');
    }
});