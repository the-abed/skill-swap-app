import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser, updateUser,googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const name = form.name.value.trim();
    const photo = form.photo.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    // Password validation
if (password.length < 6) {
  setError("Password must be at least 6 characters long.");
  return;
}
if (!/[A-Z]/.test(password)) {
  setError("Password must contain at least one uppercase letter.");
  return;
}
if (!/[a-z]/.test(password)) {
  setError("Password must contain at least one lowercase letter.");
  return;
}


    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createUser);
        // update profile, return the promise so we can handle errors
        return updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            // update local state with merged info
            setUser({ ...createdUser, displayName: name, photoURL: photo });
            navigate("/");
            alert("Account created successfully");
          })
          .catch((updateErr) => {
            // profile update failed but account created; still set user and show error
            console.error("Profile update error:", updateErr);
            setUser(createdUser);
            setError("Account created but failed to update profile.");
          });
      })
      .catch((err) => {
        console.error("Create user error:", err);
        setError(err.message || "Failed to create account.");
      });
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

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
          <h2 className="font-semibold text-2xl text-center">
            Register your account
          </h2>
          <div className="card-body">
            {/* {error && <p className="text-red-500 text-center mb-3">{error}</p>} */}
            <form onSubmit={handleRegister}>
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
                {error && <p>{error}</p>}
                <button type="submit" className="btn btn-neutral mt-4">
                  Sign Up
                </button>
                {/* Google */}
                                <button
                                  onClick={handleGoogleSignIn}
                                  className="btn btn-outline flex items-center gap-2"
                                >
                                  <FaGoogle className="text-2xl" /> Continue with Google
                                </button>
                <h2 className="font-semibold text-xl text-center my-3">Or</h2>
  

                <p className="mt-5 text-center font-semibold">
                  Have an account?{" "}
                  <Link
                    to="/auth/login"
                    className="text-secondary hover:underline"
                  >
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
