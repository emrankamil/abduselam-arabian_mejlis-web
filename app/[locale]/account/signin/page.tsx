"use client";
import { useState, useRef, useEffect } from "react";
import { getCsrfToken, signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="mt-48 px-24">
      <a href="/">
        <h1>Return to Home</h1>
      </a>
      <div className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
        <p className="font-bold">Coming Soon</p>
        <p>This page will be available soon. Stay tuned!</p>
      </div>
    </div>
  );
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // Fetch the CSRF token on component mount
  useEffect(() => {
    const fetchCsrfToken = async () => {
      const token = await getCsrfToken();
      setCsrfToken(token || null);
    };
    fetchCsrfToken();
  }, []);

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    // console.log("submitted");
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    // Sign in with next-auth credentials provider
    const result = await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
      csrfToken,
    });

    if (result?.error) {
      setError(
        "The email/password you entered is incorrect. Verify your credentials or try using a different method to log in."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Sign in to your account
        </h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="csrfToken"
            type="hidden"
            defaultValue={csrfToken || ""}
          />

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              required
              name="email"
              type="email"
              ref={emailRef}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              required
              name="password"
              type="password"
              ref={passwordRef}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between items-center mt-4">
            <a
              href="/auth/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Sign in
          </button>
        </form>

        <div className="flex items-center justify-center my-6">
          <span className="border-t w-full border-gray-300"></span>
          <span className="mx-3 text-gray-500">OR</span>
          <span className="border-t w-full border-gray-300"></span>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M23.16 12.184c0-.815-.073-1.597-.209-2.348H12v4.445h6.313c-.273 1.474-1.074 2.723-2.29 3.557v2.966h3.703c2.167-2.001 3.434-4.948 3.434-8.62z"
              fill="#4285F4"
            />
            <path
              d="M12 24c3.114 0 5.72-1.032 7.627-2.785l-3.703-2.966c-1.026.689-2.322 1.1-3.924 1.1-3.017 0-5.575-2.04-6.485-4.787H1.717v3.017C3.612 21.38 7.52 24 12 24z"
              fill="#34A853"
            />
            <path
              d="M5.515 14.563A7.417 7.417 0 0 1 5.115 12c0-.89.156-1.751.4-2.563V6.42H1.717A11.994 11.994 0 0 0 0 12c0 1.822.432 3.542 1.717 5.58l3.798-3.017z"
              fill="#FBBC05"
            />
            <path
              d="M12 4.78c1.693 0 3.216.583 4.413 1.715l3.305-3.305C16.31 1.059 14.059 0 12 0 7.52 0 3.612 2.62 1.717 6.42l3.798 3.017C6.425 7.82 8.983 5.78 12 5.78z"
              fill="#EA4335"
            />
          </svg>
          Sign in with Google
        </button>

        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Don&apos;t have an account?{" "}
            <a href="/account/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
