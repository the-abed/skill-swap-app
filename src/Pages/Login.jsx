import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const {signIn,googleLogin,resetPassword} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState('');
   // useRef for accessing email input value directly (used for password reset)
  const emailRef = useRef();
  const handleLogIn = (e)=>{
    e.preventDefault();
    const form = e.target;
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
  };
    const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        console.log("User:", result.user);
        alert(`Welcome ${result.user.displayName}!`);
        navigate("/");
      })
      .catch((err) => console.error(err.message));
  };
  const handForgetPassword = () => {
    const email = emailRef.current.value; // Get current email input value
    console.log("Password reset requested for:", email);

    // Firebase method to send password reset email
    if (!email) {
    alert("Please enter your email first!");
    return;
  }

  resetPassword(email)
    .then(() => alert("Password reset email sent!"))
    .catch((err) => alert(err.message));
  };
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
            ref={emailRef}
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
           {/* Forgot password link */}
                <div onClick={handForgetPassword}>
                  <a className="link link-hover text-sm">Forgot password?</a>
                </div>
            {error && <p className="text-red-600 text-md">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
                          {/* Google */}
 <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline flex items-center gap-2"
      >
        <FaGoogle className="text-2xl" /> Continue with Google
      </button>
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