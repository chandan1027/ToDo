
        function searchTodos() {
            const searchInput = document.getElementById('searchInput').value.toLowerCase();
            const todoTableBody = document.getElementById('todoTableBody');
            const todos = todoTableBody.getElementsByTagName('tr');

            Array.from(todos).forEach((todo) => {
                const title = todo.getElementsByClassName('todo-title')[0].innerText.toLowerCase();
                const desc = todo.getElementsByClassName('todo-desc')[0].innerText.toLowerCase();
                
                if (title.includes(searchInput) || desc.includes(searchInput)) {
                    todo.style.display = '';
                } else {
                    todo.style.display = 'none';
                }
            });
        }
    