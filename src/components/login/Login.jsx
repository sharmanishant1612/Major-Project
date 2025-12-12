import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

export default function LoginPage() {

  const {user,setuser} = useContext(AuthContext); 

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message,setmessage] = useState("");

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/user/login",{email,password})
    .then((response)=>{
       const user = response.data.user;
        console.log(response);
        localStorage.setItem("user",JSON.stringify(user));
        setuser(user);
        setmessage("");
        navigate("/");
    })
    .catch((err)=>{
      console.log(err);
      setmessage(err.response?.data?.message);
    })

    // console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-800 to-slate-800 p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-violet-700 mb-6">Welcome Back 👋</h1>
        {message && <p className="text-center text-red-800 mb-3">{message}</p>}


        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-300 transition duration-200"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition duration-200"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="text-right text-sm">
            <button type="button" className="text-blue-600 hover:underline">Forgot Password?</button>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-violet-600 to-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Signup */}
        <p className="text-center text-sm text-gray-600 mt-5">
          Don't have an account? <button onClick={()=>{navigate("/signup")}}  className="text-violet-600 font-medium hover:underline">Sign Up</button>
        </p>
      </div>
    </div>
  );
}
