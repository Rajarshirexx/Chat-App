import { useState } from "react";
import assets from "../../assets/assets.js";

export default function Login() {

    const [currState, setCurrState] = useState("Sign Up")

    return (
        <div className="login min-h-screen bg-[url('/background.png')] bg-cover bg-center flex items-center justify-evenly">
            {/* Logo */}
            <img 
                className="logo max-w-56" 
                src={assets.logo_big} 
                alt="Logo" 
            />

            {/* Login Form */}
            <form className="loginForm bg-white px-5 py-7 flex flex-col gap-5 rounded-lg">
                <h2 className="font-bold text-xl">{currState}</h2>
                {currState === "Sign Up" ? <input 
                    className="px-2 py-2.5 rounded-sm border outline-blue-400"
                    placeholder="username" 
                    type="text" 
                    required 
                /> : null }
                <input 
                    className="px-2 py-2.5 rounded-sm border outline-blue-400"
                    placeholder="email address" 
                    type="email" 
                    required 
                />
                <input 
                    className="px-2 py-2.5 rounded-sm border outline-blue-400"
                    placeholder="password" 
                    type="password" 
                    required 
                />
                <button 
                    type="submit" 
                    className=" border bg-black text-white p-2 rounded-md hover:bg-gray-800">
                    {currState === "Sign Up" ? "Create Account" : "Login Now"}
                </button>
                <div className="loginTerm flex gap-1 text-sm text-neutral-500">
                    <input type="checkbox" />
                    <p>Agree to the terms of user & privacy policy.</p>
                </div>
                <div className="loginForgot flex flex-col gap-1">
                    {
                        currState === "Sign Up"
                        ?  <p className="loginToggle text-sm text-neutral-800">Already have an account? 
                        <span
                        onClick={()=> setCurrState("Login")}
                        className="text-blue-600 cursor-pointer underline px-1">Login here.</span></p>
                        : <p className="loginToggle text-sm text-neutral-800">Don't have an account? 
                        <span
                        onClick={()=> setCurrState("Sign Up")}
                        className="text-blue-600 cursor-pointer underline px-1">click here.</span></p>
                    }  
                </div>
            </form>
        </div>
    );
}
