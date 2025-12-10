import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function OtpScreen() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  // Handle input
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; 

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

   
    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  // Handle backspace navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // Verify OTP
  const handleVerify = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length === 4) {
      alert("OTP Verified!"); 
      navigate("/dashboard");
    } else {
      alert("Please enter all 4 digits");
    }
  };

  // Resend OTP
  const handleResend = () => {
    alert("OTP resent!");
    setOtp(["", "", "", ""]);
    inputsRef.current[0].focus();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: "linear-gradient(135deg, #90CAF9, #CE93D8, #F8BBD0)",
      }}
    >
      <div className="w-full max-w-sm p-6 bg-white  rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">OTP Verification</h2>
        <p className="text-sm text-gray-600 mb-4">
          Enter the 4-digit OTP sent to your email
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mb-4">
          {otp.map((val, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength={1}
              inputMode="numeric"
              value={val}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-14 h-14 text-center text-2xl border-2 rounded-lg focus:border-purple-600 outline-none"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold mb-3 hover:bg-purple-800"
        >
          Verify OTP
        </button>

        {/* Resend Button */}
        <button
          onClick={handleResend}
          className="text-purple-700 underline text-sm"
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
}
