var React = require('react');
var TodoQuery = require('TodoQuery');

var TodoList = React.createClass({
    render: function() {
        var {todos} = this.props;
        var renderTodos = () => {
            return todos.map((todo) => {
                return (
                    <TodoQuery key={todo.id} {...todo} onToggle={this.props.onToggle} />
                );
            });
        };
        return (
             <div>
                {renderTodos()}
            </div>
        )
    }
});

module.exports = TodoList;
