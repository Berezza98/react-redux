import React, { Component } from 'react';
import './AddItemBar.css';

class AddItemBar extends Component {
    state = {
        newItemName: ''
    };

    updateNewItem = (e) => {
        const { target: { value } } = e;
        this.setState(state => {
            return {
                ...state,
                newItemName: value
            };
        });
    };

    addNewItem = () => {
        const { newItemName } = this.state;
        if (newItemName && newItemName.trim()) {
            this.props.addItem(newItemName);
        }
    };

    render() {
        const { newItemName } = this.state;
        return (
            <div className="add-item-bar">
                <input
                    type="text"
                    placeholder="Enter the name"
                    onChange={this.updateNewItem}
                    value={newItemName}
                />
                <button onClick={this.addNewItem}>Add Item</button>
            </div>
        );
    }
};

export default AddItemBar;