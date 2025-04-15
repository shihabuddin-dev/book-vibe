import React from 'react';
import { useLoaderData } from 'react-router';
import BookList from './BookList';

const ListedBooks = () => {
    const books = useLoaderData()
    return (
        <div className='mt-6'>
          <h2 className='text-xl md:text-2xl font-bold text-center'>Total Books {books.length}</h2>
            <div className='grid gap-4 mt-6 px-2'>
                {
                    books.map(bookList => <BookList key={bookList.id} bookList={bookList} ></BookList>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;