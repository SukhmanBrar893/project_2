"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard/athlete");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg space-y-6 transform transition duration-500 hover:scale-[1.01]"
      >
        <h2 className="text-4xl font-extrabold text-center text-purple-700 drop-shadow-sm">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-600 text-lg">Please login to continue</p>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <p className="text-red-600 text-center font-medium">{error}</p>
        )}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-xl font-semibold py-3 rounded-xl shadow-md hover:shadow-xl hover:from-indigo-600 hover:to-pink-600 transition duration-300"
        >
          Log In
        </button>
        <p className="text-sm text-center text-gray-500 mt-2">
          Don’t have an account? <span className="text-indigo-600 cursor-pointer underline">Sign Up</span>
        </p>
      </form>
    </div>
  );
}
