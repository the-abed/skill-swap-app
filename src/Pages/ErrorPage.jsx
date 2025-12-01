import React from "react";
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-accent">
      <h1 className="text-9xl font-bold mb-6 text-primary">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-secondary">
        Oops! Page not found
      </h2>
      <p className="text-lg md:text-xl mb-6 text-accent">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <button className="btn btn-primary btn-lg hover:btn-secondary">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
