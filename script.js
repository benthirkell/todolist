const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const list = document.querySelector('.list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoText = input.value;
    if (todoText !== '') {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');

        checkbox.type = 'checkbox';

        const todoSpan = document.createElement('span');

        todoSpan.classList.add('todo');
        todoSpan.textContent = todoText;

        const deleteButton = document.createElement('button');

        deleteButton.classList.add('delete');
        deleteButton.innerHTML = '<i class="fas fa-times"></i>';

        li.appendChild(checkbox);
        li.appendChild(todoSpan);
        li.appendChild(deleteButton);
        list.appendChild(li);
        input.value = '';
    }
});

list.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const li = event.target.closest('li');
        list.removeChild(li);
    } else if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
        const todoSpan = event.target.nextElementSibling;
        if (event.target.checked) {
            todoSpan.classList.add('completed');
        } else {
            todoSpan.classList.remove('completed');
        }
    }
});
