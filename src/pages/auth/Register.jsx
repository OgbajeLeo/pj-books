import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    status: 'Author',
    dob: '',
    password: '',
    cPassword: '',
    isTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear validation error for the field when user starts typing
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!formData.fName.trim()) {
      validationErrors.fName = 'First Name is required';
    }

    if (!formData.lName.trim()) {
      validationErrors.lName = 'Last Name is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!formData.dob.trim()) {
      validationErrors.dob = 'Date of Birth is required';
    }

    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.cPassword) {
      validationErrors.cPassword = 'Passwords do not match';
    }

    if (Object.keys(validationErrors).length === 0) {
      // API call can come in
      
      console.log('Registration successful!', JSON.stringify(formData));
      // Reset form data
      setFormData({
        fName: '',
        lName: '',
        email: '',
        status: 'Author',
        dob: '',
        password: '',
        cPassword: '',
        isTerms: false,
      });
    } else {
      // Update state with validation errors
      setErrors(validationErrors);
    }
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <main className="flex flex-col lg:flex-row lg:w-full h-auto">
      {/* Left Column (Image)*/}
      <div className="sm:px-20 lg:w-[50%] h-full mb-10 flex flex-col px-8 lg:flex-1">
        {/* Header Section */}
        <div className="mb-4">
          <h1 className="font-bold text-center mt-6 mb-2 text-2xl lg:text-4xl">
            Register <span className="text-[#6C4C35]"> with</span> Us
          </h1>
        </div>

        <div>
          <form className="space-y-4 py-2 px-4 shadow sm:rounded-lg sm:px-10" onSubmit={handleSubmit}>
            {/* First Name */}
            <div>
              <label htmlFor="fName" className="block text-sm font-bold text-gray-700">
                First Name
              </label>
              <div className="mt-1">
                <input
                  id="fName"
                  name="fName"
                  type="text"
                  value={formData.fName}
                  onChange={handleChange}
                  className={`appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-900
                    placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6C4C35] focus:border-[#6C4C35] focus:z-10 sm:text-sm ${
                      errors.fName ? 'border-red-500' : ''
                    }`}
                />
                {errors.fName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fName}</p>
                )}
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lName" className="block text-sm font-bold text-gray-700">
                Last Name
              </label>
              <div className="mt-1">
                <input
                  id="lName"
                  name="lName"
                  type="text"
                  value={formData.lName}
                  onChange={handleChange}
                  className={`appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-900
                    placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6C4C35] focus:border-[#6C4C35] focus:z-10 sm:text-sm ${
                      errors.lName ? 'border-red-500' : ''
                    }`}
                />
                {errors.lName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-900
                    placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6C4C35] focus:border-[#6C4C35] focus:z-10 sm:text-sm ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Status */}
            <div className='flex items-center justify-between '>
            <div>
              <label htmlFor="status" className="block text-sm font-bold text-gray-700">
                Status
              </label>
              <div className="mt-1">
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className={`border rounded-md border-gray-900 py-2 px-4 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6C4C35] focus:border-[#6C4C35] focus:z-10 sm:text-sm ${
                    errors.status ? 'border-red-500' : ''
                  }`}
                >
                  <option value="Author">Author</option>
                  <option value="Reader">Reader</option>
                </select>
                {errors.status && (
                  <p className="text-red-500 text-sm mt-1">{errors.status}</p>
                )}
              </div>
            </div>

             {/* Date of Birth */}
            <div>
              <label htmlFor="dob" className="block text-sm font-bold text-gray-700">
                Date of Birth
              </label>
              <div className="mt-1">
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  className={`appearance-none rounded-md relative block w-full px-4 py-2 border border-gray-900
                    placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6C4C35] focus:border-[#6C4C35] focus:z-10 sm:text-sm ${
                      errors.dob ? 'border-red-500' : ''
                    }`}
                />
                {errors.dob && (
                  <p className="text-red-500 text-sm mt-1">{errors.dob}</p>
                )}
              </div>
            </div>
            </div>

            {/* Password */}
<div>
  <label htmlFor="password" className="block text-sm font-bold text-gray-700">
    Password
  </label>
  <div className="mt-1">
    <input
      id="password"
      name="password"
      type="password"
      value={formData.password}
      onChange={handleChange}
      className={`appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-900
        placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6C4C35] focus:border-[#6C4C35] focus:z-10 sm:text-sm ${
          errors.password ? 'border-red-500' : ''
        }`}
    />
    {errors.password && (
      <p className="text-red-500 text-sm mt-1">{errors.password}</p>
    )}
  </div>
</div>

{/* Confirm Password */}
<div>
  <label htmlFor="cPassword" className="block text-sm font-bold text-gray-700">
    Confirm Password
  </label>
  <div className="mt-1">
    <input
      id="cPassword"
      name="cPassword"
      type="password"
      value={formData.cPassword}
      onChange={handleChange}
      className={`appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-900
        placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#6C4C35] focus:border-[#6C4C35] focus:z-10 sm:text-sm ${
          errors.cPassword ? 'border-red-500' : ''
        }`}
    />
    {errors.cPassword && (
      <p className="text-red-500 text-sm mt-1">{errors.cPassword}</p>
    )}
  </div>
</div>

{/* Checkbox for terms and conditions */}
<div className="flex items-center">
  <input
    id="terms"
    name="terms"
    type="checkbox"
    checked={formData.isTerms}
    onChange={handleCheckboxChange}
    className="h-4 w-4 text-indigo-600 focus:ring-[#6C4C35] border-gray-300 rounded"
  />
  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
    I have read the terms and conditions.
  </label>
</div>


            {/* Register button */}
            <div className="mt-8">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#6C4C35] hover:bg-[#23170f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6C4C35]"
              >
                Register
              </button>
            </div>
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
                    <div className="text-xs mt-4 text-center">Have an account?
          <Link to="/login" className="ml-4 font-regular">
             Login
          </Link>
        </div>
                </div>
            </div>


          </form>
        </div>

       
       
                </div>


      {/* Right Column (login form) */}
      <div
        className="flex-1 relative bg-cover w-full max-h-full lg:max-h-[100%] bg-center hidden lg:block"
        style={{ backgroundImage: 'url("https://res.cloudinary.com/duw4jtxls/image/upload/v1704411158/bg-login_wz1nc3.jpg")' }}
      >
        <h1 className='font-bold text-6xl absolute text-white mx-12  my-10'>PJ BOOKS</h1>
      </div>

    
    </main>
  );
};

export default Register;
