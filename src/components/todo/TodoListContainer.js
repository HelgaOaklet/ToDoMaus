import React from 'react';
import Fon from '../../assects/Fon.jpg';

function TodoListContainer(props) {
    const {todoList} = props;  //array of todo's
    return (
        <div style={{
                position: 'relative',
                background: `url(${Fon}`,
                height: '100vh',
                marginTop: '10px',
            }}
        >
            {
                !!todoList.length
                && (
                    todoList.map(todo => (
                        <div key={todo.id}
                             style={{
                                 border: '5px ridge',
                                 background: '#83e5ce',
                                 padding: '5px',
                                 margin: '5px',
                                 shadow: '0 0 10px #15a14d',
                                 display: 'flex',
                                 alignItem: 'center',
                                 justifyContent: 'center',
                                 marginTot: '5px',
                             }}
                        >
                            {todo.title}
                        </div>
                        //ГРАНИЦЫ
                        //ЗАЛИВКА
                        //ТЕНИ
                        //ПАДДИНГИ (внутренние отступы)
                        //ДИСПЛЕЙ ФЛЕКС
                        //МАРДЖИНЫ
                    ))
                )

            }
            //<img src={Fon}
                 //alt="Fon"
                 //style={{
                     //position: 'absolute',
                     //width: '100%',
                 //}}
            />
        </div>
    );
}

export default TodoListContainer;
