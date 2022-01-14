import React from 'react';
import '../App.scss';
import welcome from '../assets/images/welcome.svg';
import email from '../assets/images/email.svg';
import eye from '../assets/images/eye.svg';
import user from '../assets/images/user.svg';
import { useAuthForm } from '../hooks/useAuthForm';
import Register from '../components/Authentication/Register';
import Login from '../components/Authentication/Login';

function Authentication() {
  const { inputs, isSubmitting, handleInputChange, handleSubmit } = useAuthForm();
  
  const [activeAuthView, setActiveAuthView] = React.useState('login');
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="App">
      <div className='background'>
        <div>
          <img src={welcome} alt="welcome" />
          <h3>Welcome Back</h3>
          <p>Just a couple clicks and we start</p>
        </div>
      </div>
      <div className='auth-form'>
        <div>
          {
            activeAuthView === 'login' ?
            <Login 
              isSubmitting={isSubmitting}
              inputs={inputs}
              handleInputChange={handleInputChange}
              handleSignIn={handleSubmit}
              email={email}
              eye={eye}
              user={user}
              setActiveAuthView={setActiveAuthView}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            /> : 
            <Register
              isSubmitting={isSubmitting}
              inputs={inputs}
              handleInputChange={handleInputChange}
              handleSignUp={handleSubmit}
              email={email}
              eye={eye}
              user={user}
              setActiveAuthView={setActiveAuthView}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default Authentication;
