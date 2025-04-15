import React from 'react';

const ViewSingleBookDetails = ({book}) => {
    const { name, imageUrl, } = book
    // category, writer, tags, rating, publication_name, pages, publication_year ,description
    // const [first, second, third, four] = tags
    return (
        <div className='mt-6 flex flex-wrap items-center gap-2'>
            <div className='w-1/2 bg-[#1313130D] rounded-xl p-4 '>
                <img className='w-52 mx-auto object-cover' src={imageUrl} alt="" />
            </div>
            <div className='w-1/2'>

        <p>{name}</p>
            </div>
          
        </div>
    );
};

export default ViewSingleBookDetails;