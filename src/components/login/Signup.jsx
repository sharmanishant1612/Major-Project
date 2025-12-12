import { use, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignupPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.password!=formData.confirmPassword){
        alert("Password do not match");
        return;
    }

    await axios.post("http://localhost:3000/api/user/signup",formData)
    .then((response)=>{
      console.log(response.data.message);
      navigate("/");
    })
    .catch((err)=>{
      console.log(err);
    })

    // console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-800 to-slate-800 p-4">
      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Create Your Account ✨</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Single Line Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Second Block - Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="p-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Other</option>
              </select>
            </div>
          </div>

          {/* Password Block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
                required
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-700 mt-5">
          Already have an account? <button className="text-blue-600 hover:underline font-medium">Login</button>
        </p>
      </div>
    </div>
  );
}
