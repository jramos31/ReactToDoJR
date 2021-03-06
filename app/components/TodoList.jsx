var React = require('react');
var TodoQuery = require('TodoQuery');

var TodoList = React.createClass({
    render: function() {
        var {todos} = this.props;
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Schedule is clear</p>
                );
            }
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
