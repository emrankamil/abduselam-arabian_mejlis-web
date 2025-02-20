"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../global/Button";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { login } from "@/lib";

const Auth: React.FC = () => {
  // const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [registerError, setRegsiterError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setLoading(true);

    const result = await login({ email, password });
    if (!result) {
      setLoginError(
        "The email/password you entered is incorrect. Verify your credentials or try registering before loging in."
      );
    } else {
      router.push("/account");
    }

    setLoading(false);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegsiterError(null);
    setLoading(true);

    const body = {
      name,
      email: registerEmail,
      password: process.env.NEXT_PUBLIC_TEMP_PASSWORD,
      username: registerEmail.split("@")[0].toLowerCase(),
    };
    // Perform the registration request
    const res = await fetch(`${process.env.NEXT_PUBLIC_ORIGIN}/signup`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 409) {
      setRegsiterError("User already exists");
      setLoading(false);
      return;
    }

    // Proceed with sign-in after registration
    const result = await login({
      email,
      password: process.env.NEXT_PUBLIC_TEMP_PASSWORD || "",
    });
    if (!result) {
      setLoginError("Error during registration. ");
    } else {
      router.push("/account");
    }

    setLoading(false);
  };

  return (
    <div className="w-full space-y-6 h-full font-latoRegular">
      {/* banner */}
      <div className="relative bg-[url('/contactus_hero.jpg')] bg-cover bg-bottom h-[300px]">
        <div className="absolute inset-0 bg-gray-800 bg-opacity-70" />
        <div className="relative w-full h-full z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white text-center leading-normal">
            My Account
          </h1>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-star">
        {/* Login */}
        <div className="w-full sm:w-1/2 flex flex-col justify-start items-center p-8">
          <h2 className="text-2xl sm:text-4xl my-8 font-playfair font-bold">
            Login
          </h2>
          <form onSubmit={handleSignIn} className="w-full max-w-lg">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Username or email address{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 top-1/2 transform -translate-y-1/2 right-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ? (
                    <BiSolidHide size={20} />
                  ) : (
                    <BiSolidShow size={20} />
                  )}
                </button>
              </div>
            </div>

            <div className="mb-6 flex items-center">
              <input id="rememberMe" type="checkbox" className="mr-2" />
              <label htmlFor="rememberMe" className="text-gray-700">
                Remember me
              </label>
            </div>
            <div className="flex flex-col items-start">
              <Button
                variant="primary"
                size="large"
                type="submit"
                isLoading={loading}
              >
                LOG IN
              </Button>
              <a href="#" className="mt-4 text-primary hover:underline">
                Lost your password?
              </a>
            </div>
            {loginError && (
              <p className="text-red-500 text-sm my-2">{loginError}</p>
            )}
          </form>
        </div>

        {/* Register */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-center p-8">
          <h2 className="text-2xl sm:text-4xl my-8 font-playfair font-bold">
            Register
          </h2>
          <form className="w-full max-w-lg" onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="registerEmail"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="registerEmail"
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                className="appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary"
                required
              />
              <p className="mt-2 text-gray-600">
                A link to set a new password will be sent to your email address.
                Please verify it before signing in next time.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <Button
                variant="primary"
                size="large"
                type="submit"
                isLoading={loading}
              >
                REGISTER
              </Button>
            </div>
            {registerError && (
              <p className="text-red-500 text-sm my-2">{registerError}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
