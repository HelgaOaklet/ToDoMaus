import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoTitle: props.todo && props.todo.title
        };
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
    }

    onChangeCheckbox(event) {
        const{todo, updateTodo} = this.props;
        const newTodo = {
            ...todo,
            status: (event.target.checked) ? 'DONE' : 'TODO'
        };
        updateTodo(newTodo);
    }

    render() {
        const {todo, deleteTodoById, onOpenModal} = this.props;
        return (
            <div className="todo"
            >
                <Checkbox checked={todo.status === 'DONE'}
                          onChange={this.onChangeCheckbox}                          
                />
                <div className="todoTitle">
                     {todo.title}
                </div>
                <Button onClick={() => onOpenModal(todo.id)}>
                    Show more
                </Button>   
                <IconButton onClick={() => deleteTodoById(todo.id)}>
                    <Delete/>
                </IconButton>
            </div>
        );
    }
}

export default TodoComponent;
























