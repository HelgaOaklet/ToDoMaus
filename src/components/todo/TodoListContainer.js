import React from 'react';
import Fon from '../../assects/Fon.jpg';
import TodoComponent from "./TodoComponent";

function TodoListContainer(props) {
    const {todoList,updateTodo, deleteTodoById, onOpenModal} = props;  //array of todo's
    return (
        <div style={{
                position: 'relative',
                background: `url(${Fon}`,
                height: '100vh',
                padding: '10px'
            }}
        >
            {
                !!todoList.length
                && (
                    todoList.map(todo => (
                        <TodoComponent key={todo.id}
                                       todo={todo}
                                       updateTodo={updateTodo}
                                       deleteTodoById={deleteTodoById}
                                       onOpenModal={onOpenModal}
                        />
                    ))
                )
            }
        </div>
    );
}

export default TodoListContainer;
