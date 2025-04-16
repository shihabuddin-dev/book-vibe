import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-center min-h-[100vh] sm:min-h-[100vh] text-center px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">

            <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight">
                404
            </h1>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200">
                Page Not Found
            </h2>

            <p className="mt-4 max-w-md text-base sm:text-lg text-gray-600 dark:text-gray-400">
                Oops! It seems like the page you're looking for doesn't exist or might have been moved.
            </p>
            <button
                onClick={() => navigate(-1)}
                className='btn bg-white mt-4'>Back</button>
        </div>
    );
};

export default NotFound;