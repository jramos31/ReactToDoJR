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
            todos = JSON.partse(fetchTodos);
        } catch(e) {

        }

        return $.isArray(todos) ? todos : [];
    }
};
