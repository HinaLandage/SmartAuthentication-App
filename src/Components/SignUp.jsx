import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const navigate = useNavigate();
  

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone: only digits, max 10 characters
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Validate form
  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (formData.phone.length !== 10)
      newErrors.phone = "Phone number must be 10 digits";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email";

    if (!formData.password.trim()) newErrors.password = "Password is required";

    if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const userData = {
  fullName: formData.fullName,
  email: formData.email,
  phone: formData.phone,
  password: formData.password
};

localStorage.setItem("userData", JSON.stringify(userData));

      alert("Account Created Successfully!");
        navigate("/OtpVerify");

      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4"
      style={{
        background: "linear-gradient(135deg, #90CAF9, #CE93D8, #F8BBD0)",
      }}
    >
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-5 ">
        <h2 className="text-3xl font-bold text-center mb-3">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-2">
          {/* Full Name */}
          <div>
            <label className="text-gray-700 font-bold text-md">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs">{errors.fullName}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="text-gray-700 font-bold text-md">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter 10-digit phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-700 font-bold text-md">
              Email Address
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-700 font-bold text-md">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
              <span
                className="absolute right-3 top-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-gray-700 font-bold text-md">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showCPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
              <span
                className="absolute right-3 top-4 cursor-pointer"
                onClick={() => setShowCPassword(!showCPassword)}
              >
                {showCPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <button className="w-full bg-purple-600 hover:bg-purple-700 font-semibold text-white py-2 rounded-lg mt-2">
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-lg font-semibold mt-3">
          Already have an account?{" "}
          <a
            href="/"
            className="text-purple-700 cursor-pointer hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
