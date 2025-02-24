import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Sign up
  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      alert('Check your email for confirmation!');
    }
  };

  // Sign in with email and password
  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sign In or Sign Up</h2>
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', width: '250px' }}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', width: '250px' }}
      />
      <br />
      <button onClick={handleSignIn} style={{ marginRight: '10px' }}>
        Sign In
      </button>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default Auth;
