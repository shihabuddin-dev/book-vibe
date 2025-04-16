import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const PageToRead = ({ BookPromise }) => {
    const booksData = use(BookPromise)
    const books = booksData.data
    const singleBook = books.map(book => {
        const bookData = {
            id: book.id,
            name: book.name,
            pages: book.pages,
            rating: book.rating,
            publish: book.publication_year
        }
        return bookData
    })
    return (
        <div className='mt-6'>
            <h3 className='text-center text-xl'>Page to read Chart</h3>

            <div className='mx-auto w-8/12'>
                <BarChart width={800} height={450} data={singleBook}>
                    <XAxis dataKey='name' tick={'name'}></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis  ></YAxis>
                    <Bar dataKey='pages' fill='#23BE0A' ></Bar>

                </BarChart>
            </div>

        </div>
    );
};

export default PageToRead;