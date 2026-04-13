// src/LoginForm.jsx — CREATE this as a new file
import { useState } from 'react';
function LoginForm() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');
 const handleSubmit = (e) => {
 e.preventDefault(); // IMPORTANT: stops the page reloading
 if (!email || !password) {
 setError('Both fields are required.');
 return; // stop here — do not go further
 }
 setError(''); // clear any old error
 console.log('Submitting:', { email, password });
 // In a real app you would send this to an API
 };
 return (
 <form
 onSubmit={handleSubmit}
 style={{ display:'flex', flexDirection:'column', gap:'8px', maxWidth:'320px'
}}
 >
 <h2>Login</h2>
 {/* Show the error only when it is not empty */}
 {error && <p style={{ color: 'red' }}>{error}</p>}
 <input
 type='email'
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 placeholder='Email address'
 />
 <input
 type='password' 
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 placeholder='Password'
 />
 <button type='submit'>Log In</button>
 </form>
 );
}
export default LoginForm;