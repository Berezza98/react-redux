import React from 'react';

import './Search.css';

const Search = ({ search, searchChange }) => {
    const onInputHandler = (e) => {
        const { target: { value } } = e;
        searchChange(value);
    };

    return (
        <div className="todo-search">
            <input type="text" placeholder="Search" onChange={onInputHandler} value={search} />
        </div>
    );
};

export default Search;