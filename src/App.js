import React from 'react';
import './App.scss';
import Authentication from './pages/Authentication';
import HomePage from './pages/HomePage';

function App() {
  const [user, setUser] = React.useState(null)

  const loggedInUser = JSON.parse(localStorage.getItem('user'));
  React.useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [loggedInUser, user])

  return (
    <> 
      { 
        !user ?
        <Authentication /> :
        <HomePage user={user}/>
      }
    </>
  );
}

export default App;
