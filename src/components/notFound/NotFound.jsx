import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-center min-h-[100vh] sm:min-h-[100vh] text-center px-4 sm:px-6 lg:px-8">

            <h2 className="text-6xl sm:text-8xl md:text-9xl font-extrabold text-[#23BE0A] tracking-tight">
                404
            </h2>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold">
                Page Not Found
            </h2>

            <p className="mt-4 max-w-md text-base sm:text-lg text-gray-800">
                Oops! It seems like the page you're looking for doesn't exist or might have been moved.
            </p>
            <button
                onClick={() => navigate(-1)}
                className='btn bg-[#23BE0A] text-white mt-4'>Back</button>
        </div>
    );
};

export default NotFound;