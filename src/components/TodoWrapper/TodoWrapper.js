import React from 'react';

import './TodoWrapper.css';

const TodoWrapper = ({ children }) => {
    return (
        <div className="todo-wrapper">
            { children }
        </div>
    );
};

export default TodoWrapper;