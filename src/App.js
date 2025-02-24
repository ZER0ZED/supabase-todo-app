import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Auth from './components/Auth';
import TodoList from './components/TodoList';

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Retrieve the initial session
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error getting session:', error);
      } else {
        setSession(data.session); // 'data.session' is the current session object
      }
    };

    getSession();

    // Listen for changes in auth state
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup the subscription when the component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      {!session ? <Auth /> : <TodoList />}
    </div>
  );
}

export default App;
