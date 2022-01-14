import React from 'react'

const Login = (props) => {
    const handleSignIn = (event) => {
        event.preventDefault();
        props.handleSignIn('login');
    }

    return (
        <>
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn}>
                <div className='input'>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' className='form-control' value={props.inputs.email} onChange={props.handleInputChange} />
                    <img src={props.email} alt="email" />
                </div>
                <div className='input'>
                    <label htmlFor="">Password</label>
                    <input type={props.showPassword ? 'text' : 'password'} name='password' className='form-control' value={props.inputs.password} onChange={props.handleInputChange} />
                    <img src={props.eye} alt="eye" onClick={() => props.setShowPassword(!props.showPassword)}/>
                </div>
                <button className='full-100 primary' type='submit' disabled={props.isSubmitting}>
                    {props.isSubmitting ? 'Signing In...' : 'Sign In'}
                </button>
                <div className='foot-info'>
                    <p>Don’t have an account? <span className='text-secondary pointer-cursor' onClick={() => props.setActiveAuthView('register')}>Sign Up</span></p>
                </div>
            </form>
        </>
    )
}

export default Login
