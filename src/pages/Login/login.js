import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"

export default function Login() {
  return (
    <div className='login-parent'>
        <div className='login-child1'>
            <img className='logpic' src='../../../images/login-image.png'/>
            <h2 className='panH'>PanWine</h2>

       </div>
       
        <div className='login-child2'>
            <p>Sign in to Panwines</p>
            <form>
                <input type='email' placeholder='Email Address' name='email'/>
                <input type='password' placeholder='Password' name='password'/>
                <button>Sign in</button>
            </form>
            <div>
              <p>Dont have an account? <Link to={"./signup"} className='link1'>Sign up</Link></p>

            </div>
        </div>
    </div>
  )
}
