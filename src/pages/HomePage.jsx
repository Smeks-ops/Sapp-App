import React from 'react'
import '../App.scss';
import welcome from '../assets/images/welcome.svg';

const HomePage = ({user}) => {
  
  return (
    <div className='home-bg'>
        <div>
            <img src={welcome} alt="welcome" />
            <h3>Welcome Back, {user.loggedInUser ? user.loggedInUser?.firstName : user?.firstName} {user.loggedInUser? user?.loggedInUser?.lastName : user?.lastName} ❤</h3>
        </div>
    </div>
    )
}

export default HomePage
