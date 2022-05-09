import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  const [todo, setTodo] = useState({description: '', date: '', status: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({description: '', date: '', status: ''});
  }

  return (
    
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Todo List
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField 
        style={{marginRight: 10}} 
        label="Description" 
        name="description" 
        value={todo.description} 
        onChange={inputChanged} 
        variant= "standard"
      />
      <TextField 
        style={{marginRight: 10}} 
        label="Date" 
        name="date" 
        value={todo.date} 
        onChange={inputChanged}
        variant= "standard"
      />

      <TextField 
        style={{marginRight: 10}} 
        label="Status" 
        name="status" 
        value={todo.status} 
        onChange={inputChanged}
        variant= "standard"
      />

      <Button
      onClick={addTodo}
      color='secondary'
      idleText={'Add'}
      type='button'
      style={{ borderRadius: '5px' }}
      size={'normal'}
      variant= "outlined">
    Add</Button>
      <div className="ag-theme-material" style={{ height: 600, width: 600, margin: 'auto' }}>
        <AgGridReact 
          rowData={todos} animateRows={true}>
          <AgGridColumn field="description" sortable={true} filter={true} ></AgGridColumn>
          <AgGridColumn field="date" sortable={true} filter={true}></AgGridColumn>
          <AgGridColumn field="status" sortable={true} filter={true}></AgGridColumn>
        
        </AgGridReact>
      </div>
      </div>
  );
}


export default App;
