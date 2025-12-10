import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const validate = () => {
    let newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email))
      newErrors.email = "Please enter a valid email";

    if (!password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError("");

    if (!validate()) return;

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      setLoginError("No account found. Please sign up first.");
      return;
    }

    // Check email and phone
    if (storedUser.email === email) {
      alert("Login successful!");
      navigate("/OtpVerify");

      setEmail("");
      setPassword("");
      setErrors({});
    } else {
      setLoginError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-blue-300 via-purple-300 to-pink-200">
      <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-center text-4xl font-bold mb-10">Log in</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-lg font-semibold mb-1">Email</label>
            <div className="flex items-center border-2 rounded-md h-10 px-3 ">
              <input
                type="text"
                placeholder="abc@gmail.com"
                className={`flex-1 outline-none text-lg ${
                  errors.email ? "border-red-600" : "border-none"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-lg font-semibold mb-1">Password</label>
            <div className="flex items-center border-2 rounded-md h-10 px-3 ">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className={`flex-1 outline-none text-lg ${
                  errors.password ? "border-red-600" : "border-none"
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 cursor-pointer text-gray-700"
              >
                {showPassword ? <Eye size={22} /> : <EyeOff size={22} />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {loginError && (
            <p className="text-red-600 text-sm text-center">{loginError}</p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-md text-lg font-semibold transition"
          >
            Login
          </button>

          <p className="text-center text-lg font-semibold">
            Don't have an account?{" "}
            <a
              href="/SignUp"
              className="text-red-600 cursor-pointer hover:underline"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
