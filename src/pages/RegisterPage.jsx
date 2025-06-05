import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
// import PlainHeader from "../../components/PlainHeader";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        name,
        username,
        password,
      });
      setIsLoading(true);
      setVisible(true);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-20 left-20 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="relative w-full max-w-md">
        {/* Glowing border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-sm opacity-75 animate-pulse"></div>

        {/* Main register container */}
        <div className="relative bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
          {/* Header with animated text */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Create Account
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-slate-400 text-sm mt-3">Join the admin portal</p>
          </div>

          <div className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <label
                htmlFor="name"
                className={`absolute left-3 transition-all duration-300 pointer-events-none z-10 ${
                  focusedField === "name" || name
                    ? "-top-2 text-xs text-cyan-400 bg-slate-800 px-2"
                    : "top-3 text-slate-400"
                }`}
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField("")}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 outline-none relative z-10"
              />
              <div
                className={`absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 pointer-events-none transition-opacity duration-300 ${
                  focusedField === "name" ? "opacity-100" : ""
                }`}
              ></div>
            </div>

            {/* Username Field */}
            <div className="relative">
              <label
                htmlFor="username"
                className={`absolute left-3 transition-all duration-300 pointer-events-none z-10 ${
                  focusedField === "username" || username
                    ? "-top-2 text-xs text-cyan-400 bg-slate-800 px-2"
                    : "top-3 text-slate-400"
                }`}
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                required
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
                onFocus={() => setFocusedField("username")}
                onBlur={() => setFocusedField("")}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 outline-none relative z-10"
              />
              <div
                className={`absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 pointer-events-none transition-opacity duration-300 ${
                  focusedField === "username" ? "opacity-100" : ""
                }`}
              ></div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <label
                htmlFor="password"
                className={`absolute left-3 transition-all duration-300 pointer-events-none z-10 ${
                  focusedField === "password" || password
                    ? "-top-2 text-xs text-cyan-400 bg-slate-800 px-2"
                    : "top-3 text-slate-400"
                }`}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField("")}
                className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 outline-none relative z-10"
              />
              <div
                className={`absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 pointer-events-none transition-opacity duration-300 ${
                  focusedField === "password" ? "opacity-100" : ""
                }`}
              ></div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={isLoading}
              onClick={registerUser}
              className={`${
                visible ? "hidden" : ""
              } w-full relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed group`}
            >
              <span
                className={`relative z-10 flex items-center justify-center`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating Account...
                  </>
                ) : (
                  "CREATE ACCOUNT"
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Success Message */}
            <div
              className={`${
                visible ? "" : "hidden"
              } transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <svg
                    className="w-6 h-6 text-green-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-green-400 font-semibold">Success!</span>
                </div>
                <p className="text-green-300 text-sm">
                  Account created successfully. You can now log in.
                </p>
              </div>
            </div>

            {/* Login Link */}
            <div className="text-center pt-4 border-t border-slate-700">
              <p className="text-slate-400 text-sm mb-2">
                Already have an account?
              </p>
              <Link
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 group bg-transparent border-none cursor-pointer"
                to="/"
              >
                Sign In
                <svg
                  className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div
            className="absolute bottom-4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 right-2 w-1 h-1 bg-pink-400 rounded-full animate-ping"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
