import React, { Component } from 'react';

import './App.css';
import TodoWrapper from '../TodoWrapper';
import Header from '../Header';
import Bar from '../Bar';
import TodoList from '../TodoList';
import AddItemBar from '../AddItemBar';

class App extends Component {
  nextId = 3;
  state = {
    todos: [
      {
        id: 0,
        title: 'Drink coffee',
        done: false,
        important: false
      },
      {
        id: 1,
        title: 'Have a lunch',
        done: false,
        important: false
      },
      {
        id: 2,
        title: 'Learn ReactJS',
        done: false,
        important: false
      },
    ],
    search: '',
    filterStatus: null
  };

  changeSearch = (value) => {
    this.setState((state) => {
      return {
        ...state,
        search: value
      };
    });
  };

  changeFilterStatus = (newStatus) => {
    this.setState(state => {
      return {
        ...state,
        filterStatus: newStatus
      };
    });
  };

  changeTodoStatus = (id) => {
    this.setState((state) => {
      const todos = state.todos.map(todo => {
        if (todo.id === id) {
          return Object.assign({}, todo, { done: !todo.done });
        } else {
          return todo;
        }
      });
  
      return {
        ...state,
        todos
      };
    });
  };

  deleteItem = (id) => {
    this.setState((state) => {
      const indexForDeleting = state.todos.findIndex(item => item.id === id);
      const todos = [...state.todos];
      todos.splice(indexForDeleting, 1);
      return {
        ...state,
        todos
      };
    });
  }

  addNewItem = (name) => {
    this.setState(state => {
      const newItem = {
        id: this.nextId++,
        title: name,
        done: false,
        important: false
      };
  
      return {
        ...state,
        todos: [...state.todos, newItem]
      };
    });
  }

  filteredTodos = () => {
    const { todos, search, filterStatus } = this.state;
    const withSelectedStatus = todos.filter(item => {
      if (filterStatus === true || filterStatus === false) {
        return item.done === filterStatus
      } else {
        return true;
      }
    });
    return withSelectedStatus.filter(item => item.title.toLowerCase().indexOf(search.toLowerCase()) >= 0)
  };

  render() {
    const { search, filterStatus } = this.state;

    return (
      <div className="app">
        <TodoWrapper>
          <Header />
          <Bar
            search={search}
            filterStatus={filterStatus}
            searchChange={this.changeSearch}
            changeFilterStatus={this.changeFilterStatus}
          />
          <TodoList
            todos={this.filteredTodos()}
            deleteItem={this.deleteItem}
            changeItemStatus={this.changeTodoStatus}
          />
          <AddItemBar addItem={this.addNewItem}/>
        </TodoWrapper>
      </div>
    );
  };
}

export default App;
