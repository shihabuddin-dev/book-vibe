import React, { useState } from 'react';
import { NavLink } from 'react-router';
const customGreen = '#23BE0A';
const customGreenHover = '#1A8A07';
const customGreenFocusRing = '#6CDA5A';
const customGreenDisabled = '#A0E496';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        if (password !== confirmPassword) {
            setError('Passwords do not match. Please try again.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        setIsLoading(true);
        console.log('Attempting signup with:', { name, email, password }); // Don't 
        try {

            await new Promise((resolve) => {
                setTimeout(() => {
                    console.log('Signup successful! (Mock)');

                    resolve({ success: true });

                }, 1500);
            });
        } catch (err) {
            console.error("Signup failed:", err);
            setError(err.message || 'Signup failed. Please try again.');
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white px-4 py-12">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900">
                    Create Book Vive Account
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="p-3 text-sm text-red-700 bg-red-100 border border-red-400 rounded-md" role="alert">
                            {error}
                        </div>
                    )}
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`w-full px-3 py-2 text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[${customGreenFocusRing}] focus:border-[${customGreen}]`}
                            placeholder="John Doe"
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-3 py-2 text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[${customGreenFocusRing}] focus:border-[${customGreen}]`}
                            placeholder="you@example.com"
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full px-3 py-2 text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[${customGreenFocusRing}] focus:border-[${customGreen}]`}
                            placeholder="Create a password (min. 6 characters)"
                            required
                            minLength="6"
                            disabled={isLoading}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={`w-full px-3 py-2 text-black placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[${customGreenFocusRing}] focus:border-[${customGreen}]`}
                            placeholder="Confirm your password"
                            required
                            minLength="6"
                            disabled={isLoading}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white
              ${isLoading
                                    ? `bg-[${customGreenDisabled}] cursor-not-allowed`
                                    : `bg-[${customGreen}] hover:bg-[${customGreenHover}] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${customGreenFocusRing}]`
                                } transition duration-150 ease-in-out`}
                        >
                            {isLoading ? (
                                <svg className=" ml-20 text-black animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : null}
                            {isLoading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </div>
                </form>
                <p className="text-sm text-center text-gray-600">
                    Already have an account?{' '}

                    <NavLink to='/login'>  <a
                        className={`font-medium text-[${customGreen}] hover:text-[${customGreenHover}]`}
                    >
                        Log in
                    </a></NavLink>

                </p>
            </div>
        </div>
    );
}

export default SignUp;