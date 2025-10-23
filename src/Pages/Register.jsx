import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
             <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
        <h2 className="font-semibold text-2xl text-center">Register your account</h2>
        <div className="card-body">
          {/* {error && <p className="text-red-500 text-center mb-3">{error}</p>} */}
          <form >
            <fieldset className="fieldset text-bold">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input bg-base-200 border-none"
                placeholder="Your Name"
              />

              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
                className="input bg-base-200 border-none"
                placeholder="Photo URL"
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input bg-base-200 border-none"
                placeholder="Your Email"
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input bg-base-200 border-none"
                placeholder="Password"
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>

              <p className="mt-5 text-center font-semibold">
                Have an account?{" "}
                <Link to="/auth/login" className="text-secondary hover:underline">
                  Log In
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

export default Register;