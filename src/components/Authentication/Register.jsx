import React from 'react'
import Ellipse from '../Icons/Ellipse'

const Register = (props) => {
    const passwordChecks = [
        {
          text: "Contains at least one uppercase letter",
          activeIf: /[A-Z]/.test(props.inputs.password), 
        },
        {
          text: "Contains at least one special character",
          activeIf: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(props.inputs.password),
        },
        {
          text: "Contains at least one number",
          activeIf: /[0-9]/.test(props.inputs.password),
        },
        {
          text: "Passwords are matching",
          activeIf: props.inputs.password && props.inputs.confirmPassword && props.inputs.password === props.inputs.confirmPassword,
        },
    ];

    const handleSignUp = (event) => {
        event.preventDefault();
        props.handleSignUp('register');
    }

    return (
        <>
            <h1>Create Account</h1>
            <form onSubmit={handleSignUp}>
                <div style={{display: 'flex'}}>
                    <div className='input' style={{marginRight: '23px'}}>
                        <label htmlFor="">First Name</label>
                        <input 
                            type="text" 
                            name='firstName'
                            className='form-control' 
                            value={props.inputs.firstName} 
                            onChange={props.handleInputChange}
                        />
                        <img src={props.user} alt="user" />
                    </div>
                    <div className='input'>
                        <label htmlFor="">Last Name</label>
                        <input type="text" name='lastName' className='form-control' value={props.inputs.lastName} onChange={props.handleInputChange} />
                        <img src={props.user} alt="user" />
                    </div>
                </div>
                <div className='input'>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' className='form-control' value={props.inputs.email} onChange={props.handleInputChange} />
                    <img src={props.email} alt="email" />
                </div>
                <div style={{display: 'flex'}}>
                    <div className='input' style={{marginRight: '23px'}}>
                    <label htmlFor="">Password</label>
                    <input type={props.showPassword ? 'text' : 'password'} name='password' className='form-control' value={props.inputs.password} onChange={props.handleInputChange} />
                    <img src={props.eye} alt="eye" onClick={() => props.setShowPassword(!props.showPassword)}/>
                    </div>
                    <div className='input'>
                    <label htmlFor="">Confirm Password</label>
                    <input type={props.showPassword ? 'text' : 'password'} name='confirmPassword' className='form-control' value={props.inputs.confirmPassword} onChange={props.handleInputChange} />
                    <img src={props.eye} alt="eye" onClick={() => props.setShowPassword(!props.showPassword)}/>
                    </div>
                </div>
                <div className="password-checks">
                    {
                    passwordChecks.map((check, index) => (
                        <div key={index} className='password-check'>
                        <Ellipse active={check.activeIf} />
                        <p>{check.text}</p>
                        </div>
                    ))
                    }
                </div>
                <button className='full-100 primary' disabled={props.isSubmitting}>
                    {props.isSubmitting ? 'Signing Up...' : 'Sign Up'}
                </button>
                <div className='foot-info'>
                    <p>Already a member? <span className='text-secondary pointer-cursor' onClick={() => props.setActiveAuthView('login')}>Sign In</span></p>
                </div>
            </form>
        </>
    )
}

export default Register
