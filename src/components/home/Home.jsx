import { NavLink, useLoaderData } from 'react-router';

import Book from './Book';
import { useEffect, useState } from 'react';

const Home = () => {
    const books = useLoaderData()
    // view less and view more by using button click functionality
    const [displayBooks, setDisplayBooks] = useState([])
    const [showAll, setShowAll] = useState(false)
    useEffect(() => {
        if (!showAll) setDisplayBooks(books.slice(0, 6))
        else setDisplayBooks(books)
    }, [showAll, books])

    return (
        <div className='mt-6 container mx-auto px-2'>
            <div className='bg-[#1313130D] py-8 flex gap-8 flex-col justify-center items-center md:flex-row px-4 md:px-56 rounded-2xl'>
                <div className='space-y-4 flex-1'>
                    <h1 className='text-3xl md:text-5xl font-bold md:leading-14'>Books to freshen up your bookshelf</h1>
                    <NavLink to='/listed-books'> <a className="btn bg-[#23BE0A] text-white">View the List</a></NavLink>
                </div>
                <div>
                    <img className='w-38 md:w-56' src="header.svg" alt="" />
                </div>
            </div>
            <h2 className='text-xl md:text-2xl font-bold mt-6 text-center '>Total Books {books.length}</h2>

            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    displayBooks.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
            <button
                onClick={() => {
                    setShowAll(!showAll)
                    showAll && window.scrollTo(0, 450)
                }}

                className='btn bg-[#23BE0A] text-white my-6'>{showAll ? 'View Less' : 'View More'}</button>
        </div>
    );
};

export default Home;