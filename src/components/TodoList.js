// src/components/TodoList.js
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Fetch all todos
  const fetchTodos = async () => {
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .order('created_at', { ascending: true });
    if (error) console.error('Error fetching todos:', error);
    else setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add a new todo
  const addTodo = async () => {
    if (!newTask.trim()) return;
    const { error } = await supabase.from('todos').insert([{ task: newTask }]);
    if (error) console.error('Error adding todo:', error);
    else {
      setNewTask('');
      fetchTodos();
    }
  };

  // Toggle completion
  const toggleTodo = async (id, is_complete) => {
    const { error } = await supabase
      .from('todos')
      .update({ is_complete: !is_complete })
      .match({ id });
    if (error) console.error('Error updating todo:', error);
    else fetchTodos();
  };

  // Delete todo
  const deleteTodo = async (id) => {
    const { error } = await supabase.from('todos').delete().match({ id });
    if (error) console.error('Error deleting todo:', error);
    else fetchTodos();
  };

  // Sign out
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Todos</h2>
      <button onClick={handleSignOut} style={{ marginBottom: '20px' }}>
        Sign Out
      </button>
      <div>
        <input
          type="text"
          placeholder="New task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ padding: '8px', width: '250px' }}
        />
        <button onClick={addTodo} style={{ marginLeft: '10px' }}>
          Add Task
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginTop: '10px' }}>
            <span
              style={{
                textDecoration: todo.is_complete ? 'line-through' : 'none',
                marginRight: '10px',
              }}
            >
              {todo.task}
            </span>
            <button onClick={() => toggleTodo(todo.id, todo.is_complete)}>
              {todo.is_complete ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
