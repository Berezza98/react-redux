import React from 'react';
import './Filter.css';

const Filter = ({ filterStatus, changeFilterStatus }) => {
    const filters = [
        {
            title: 'All',
            value: null,
            id: 0
        },
        {
            title: 'Active',
            value: false,
            id: 1
        },
        {
            title: 'Done',
            value: true,
            id: 2
        }
    ];

    return (
        <div className="todo-filters">
            {
                filters.map(filter => {
                    return (
                        <button
                            onClick={() => changeFilterStatus(filter.value)}
                            key={filter.id}
                            className={filter.value === filterStatus ? 'active' : null}
                        >
                            { filter.title }
                        </button>
                    );
                })
            }
        </div>
    );
};

export default Filter;