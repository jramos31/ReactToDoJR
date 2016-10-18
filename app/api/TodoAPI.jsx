var $ = require('jquery');

module.exports = {
    setTodos: function(todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function() {
    var fetchTodos = localStorage.getItem('todos');
    var todos = [];

        try {
            todos = JSON.parse(fetchTodos);
        } catch(e) {

        }

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function(todos, showCompleted, searchText){
        var filteredTodos = todos;

        //Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        //Filter by from Search Text
        filteredTodos = filteredTodos.filter((todo) =>{
            var text = todo.text.toLowerCase();
            return searchText.length === 0 || todo.text.indexOf(searchText) > -1;
        });

        //Sort todos placing non-completed on top of the list
        filteredTodos.sort((a, b) => {
            if(!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });
        return filteredTodos;
    }
};
