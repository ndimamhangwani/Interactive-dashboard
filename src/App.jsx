// src/App.jsx
import { useState, useEffect } from 'react';
import LoginForm from './LoginForm';


function App() {
 // current value
 // | function to update it
 // | | starting value
 // ↓ ↓ ↓
 const [count, setCount] = useState(0);
 const [isDark, setIsDark] = useState(false);

 const [time, setTime] = useState(() => new Date().toLocaleTimeString());

 const [todos, setTodos] = useState([]);
 const [newTodo, setNewTodo] = useState('');

 //USERS API STATE
 const [users, setUsers] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null); // ⭐ real-world addition
 const [userSearch, setUserSearch] = useState('');

 const theme = {
  padding: '24px',
  minHeight: '100vh',
  background: isDark ? '#1a1a1a' : '#f5f5f5',
  color: isDark ? '#f0f0f0' : '#111111',
  fontFamily: 'Arial, sans-serif',
 };

 //  ADD TODO
 const addTodo = () => {
  if (!newTodo.trim()) return; // do nothing if input is empty
  setTodos(prev => [...prev, { id: Date.now(), text: newTodo }]);
  // ↑ spread keeps existing items, then adds the new one
  setNewTodo(''); // clear the input after adding
 };

 // REMOVE TODO
 const removeTodo = (id) => {
  setTodos(prev => prev.filter(t => t.id !== id));
  // ↑ keep every todo EXCEPT the one with this id
 };

 // FETCH USERS (runs once on load)
 useEffect(() => {
  const fetchUsers = async () => {
   try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!res.ok) {
     throw new Error('Failed to fetch users');
    }

    const data = await res.json();
    setUsers(data); // store the 10 users
   } catch (err) {
    setError(err.message); // ⭐ handle errors properly
   } finally {
    setLoading(false); // hide the Loading message
   }
  };

  fetchUsers();
 }, []);

 // 2. Add this useEffect below your other useEffects:
 useEffect(() => {
  const timer = setInterval(() => {
   setTime(new Date().toLocaleTimeString());
   // ↑ updates time every 1000ms = every 1 second
  }, 1000);

  // Cleanup — stops the interval when the component is removed
  // Without this line the interval runs forever = memory leak
  return () => clearInterval(timer);
 }, []); // empty array = start once on mount

 // FILTERED USERS (computed, not state)
 const filteredUsers = users.filter(u =>
  u.name.toLowerCase().includes(userSearch.toLowerCase())
  // ↑ makes the search case-insensitive
 );

 return (
 <div style={theme}>
 <h1>My Dashboard</h1>

 <h2>Counter: {count}</h2>

 <button onClick={() => setIsDark(prev => !prev)}>
 {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
 </button>

 <button onClick={() => setCount(prev => prev + 1)}>+</button>
 <button onClick={() => setCount(prev => prev - 1)}> - </button>
 <button onClick={() => setCount(0)}>Reset</button>

 <p>🕐 Current time: {time}</p>

 {/* TO-DO LIST UI */}
 <hr />
 <h2>To-Do List</h2>

 <input
  value={newTodo}
  onChange={(e) => setNewTodo(e.target.value)}
  placeholder='Add a task...'
 />

 <button onClick={addTodo}>Add</button>

 <ul>
  {todos.map(t => (
   <li key={t.id}>
    {t.text}
    <button onClick={() => removeTodo(t.id)}>Remove</button>
   </li>
  ))}
 </ul>

 {/* USERS API UI */}
 <hr />
 <h2>Users from API</h2>

 <input
  value={userSearch}
  onChange={(e) => setUserSearch(e.target.value)}
  placeholder='Search users...'
 />

 {loading && <p>Loading...</p>}

 {error && <p style={{ color: 'red' }}>{error}</p>}

 {!loading && !error && (
  <ul>
   {filteredUsers.map(u => (
    <li key={u.id}>{u.name}</li>
   ))}
  </ul>
 )}

 <hr />
 <h2>Login Form</h2>
 <LoginForm />

 </div>
 );
}

export default App;