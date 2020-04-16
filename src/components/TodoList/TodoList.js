import React from 'react';
import './TodoList.css';

import TodoItem from '../TodoItem';

const TodoList = ({ todos, deleteItem, changeItemStatus }) => {
    return (
        <div className="todo-list">
            {
                todos.map(item => {
                    return (<TodoItem
                        key={item.id}
                        onDelete={deleteItem}
                        changeStatus={changeItemStatus}
                        {...item}
                    />);
                })
            }
        </div>
    );
};

export default TodoList;