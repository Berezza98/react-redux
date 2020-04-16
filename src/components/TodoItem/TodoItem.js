import React from 'react';
import './TodoItem.css';

const TodoItem = ({ title, id, done, onDelete, changeStatus }) => {
    const deleteItem = () => {
        onDelete(id);
    };

    const changeItemStatus = () => {
        changeStatus(id);
    }

    return (
        <div className="todo-item">
            <div onClick={changeItemStatus} className={done ? 'todo-item-name done' : 'todo-item-name'}>
                { title }
            </div>
            <div className="todo-item-actions">
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
    );
};

export default TodoItem;