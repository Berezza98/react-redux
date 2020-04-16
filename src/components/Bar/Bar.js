import React from 'react';
import './Bar.css';

import Search from '../Search';
import Filter from '../Filter';

const Bar = ({ search, searchChange, filterStatus, changeFilterStatus }) => {
    return (
        <div className="todo-bar">
            <Search search={search} searchChange={searchChange} />
            <Filter filterStatus={filterStatus} changeFilterStatus={changeFilterStatus} />
        </div>
    );
};

export default Bar;