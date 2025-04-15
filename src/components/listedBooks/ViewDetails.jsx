import React from 'react';
import { useLoaderData } from 'react-router';
import ViewSingleBookDetails from './ViewSingleBookDetails';

const ViewDetails = () => {
    const books=useLoaderData()
    return (
        <div>
            {
                books.map(book=> <ViewSingleBookDetails key={book.id} book={book}></ViewSingleBookDetails>)
            }
        </div>
    );
};

export default ViewDetails;