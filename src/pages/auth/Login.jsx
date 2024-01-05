import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [isLoading,setIsLoading]=useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
      });
    
      const [errors, setErrors] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });

        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
      };

      
    
      const handleSubmit = (e) => {
        e.preventDefault();
       
    
        // Validate email
        if (!validateEmail(formData.email)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: 'Please enter a valid email address.',
          }));
          return;
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
        }
    
        // Validate password
        if (formData.password.length < 6) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            password: 'Password must be at least 6 characters long.',
          }));
          return;
        } else {
          setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
        }
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
        },3000)
       
        //API call here
        const loginData= (JSON.stringify(formData));
        console.log(loginData)
      };
    
      // Email validation function
      const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
       
  return (
    <>
    <main className="flex flex-col lg:flex-row lg:w-full">
      {/* Left Column (Image)*/}
      <div
        className="flex-1 bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: 'url("https://tinyurl.com/29p8xwx3")' }}
      ></div>

      {/* Right Column (login form) */}
      <div className="sm:px-20 lg:w-[50%] h-screen flex flex-col px-8">

      <button className='mt-1.5 border-4 rounded-3xl w-fit p-1.5 '><Link to='/'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="w-6 h-6">
  <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
</svg>
      </Link>
          </button>
        
        {/* Header Section */}
        <div className="mb-4">
          <h1 className="font-bold text-center mt-4 mb-2 text-2xl lg:text-4xl">
            Welcome <span className="text-[#6C4C35]"> Back </span> 
          </h1>
        </div>

       
        <div class=" py-2 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
              errors.email ? 'border-red-500' : 'border-gray-900'
            } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6C4C35] focus:border-[#6C4C35] focus:z-10 sm:text-sm`}
            placeholder="Enter your email address"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
              errors.password ? 'border-red-500' : 'border-gray-900'
            } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6C4C35] focus:border-[#6C4C35] focus:z-10 sm:text-sm`}
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          
          <input
            id="remember_me"
            name="rememberMe"
            type="checkbox"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 focus:ring-[#6C4C35] border-gray-300 rounded"
          />
          <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <Link to="/forgetPassword" className="font-medium text-[#d49a57] hover:text-[#e07c00]">
            Forgot your password?
          </Link>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brown1 hover:bg-brown2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown1"
        >
          {isLoading?'Loading...':'Login'}
        </button>
      </div>
    </form>

            <div class="mt-6">

                <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                        <span class="px-2 bg-[#f6f6f2] text-gray-900">
                            Or continue with
                        </span>
                    </div>
                </div>

                <div class="mt-6 grid grid-cols-1 gap-3">
                    
                   
                    <div>
                        <a href="#"
                            className="w-full flex items-center justify-center px-2 py-3 border-2 rounded-md shadow-sm text-sm font-medium text-gray-700  hover:border-[#6C4C35] focus:ring-[#6C4C35]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                        </a>
                    </div> 
                    <div className="text-xs mt-4 text-center"> Do not have account?
          <Link to="/register" className="ml-4 font-regular text-[#d49a57] hover:text-[#e07c00]">
             Register
          </Link>
        </div>
                </div>
            </div>
        </div>
    </div>
      
    
    </main>
    </>
  )
}

export default Login
