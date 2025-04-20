import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import BookList from './BookList';

const ListedBooks = () => {
    const booksData = useLoaderData()
    // search functionality 
    const [books, setBooks] = useState(booksData)
    const [searchText, setSearchText] = useState('')
    const handleSearch = (e, text) => {
        e.preventDefault()
        const searchBooks = booksData.filter(book => book.name.toLowerCase().includes(text.toLowerCase()))
        setBooks(searchBooks)
    }


    return (
        <div className='mt-6'>
           
            <h2 className='text-xl md:text-2xl font-bold text-center'>Total Books {booksData.length}</h2>
            <form
                onSubmit={(e) => handleSearch(e, searchText)}
                className='flex gap-4 flex-col md:flex-row pt-3 justify-center items-center '>

                <input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text" placeholder='Search by book name or category name' className='border shadow px-4 py-1.5 w-2/3 md:w-1/3 rounded-md border-gray-300 focus:outline-[#23BE0A]' />
                <button type='submit' className="btn bg-[#23BE0A] text-white">Search</button>
            </form>
            <div className='grid gap-4 mt-6 px-2'>
                {
                    books.map(bookList => <BookList key={bookList.id} bookList={bookList} ></BookList>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;