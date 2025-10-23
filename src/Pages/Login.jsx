import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const {signIn} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  
  const handleLogIn = (e)=>{
    e.preventDefault();
    const form = e.target
    const email = form.email.value;
    const password = form.password.value;
    signIn(email,password)
    .then((result)=> {
      console.log(result.user);
       navigate(`${location.state? location.state : "/"}`)
    })
    .catch(error =>{
      setError(error.code)
    })
  }
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <div className="card-body">
          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset text-bold">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input bg-base-200 border-none"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input bg-base-200 border-none"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-red-600 text-md">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p className="mt-5 text-center font-semibold">
              Dont’t Have An Account ?
              <Link to="/auth/register" className="text-secondary hover:underline">
                Register
              </Link>
            </p>
          </fieldset>
          </form>
        </div>
      </div>
    </div> 
        </div>
    );
};

export default Login;