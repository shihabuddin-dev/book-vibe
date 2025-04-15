import React from 'react';
import { IoIosStarHalf } from "react-icons/io";

const Book = ({ book }) => {
    const { name, writer, imageUrl, category, rating, tags } = book
    const [first, second, third] = tags

    return (
        <div className='border-2 border-[#F3F3F3] p-4 rounded-xl space-y-4'>
            <div className='bg-[#F3F3F3] rounded-xl'>
                <img className='mx-auto py-4 cover object-cover' src={imageUrl} alt="book images" />
            </div>

            <div className='space-y-2'>
                <div className='flex gap-2 flex-wrap'>
                    <button className='btn btn-sm border-none rounded-3xl bg-[#23BE0A0D] text-[#23BE0A]'>{first}</button>
                    <button className='btn btn-sm border-none rounded-3xl bg-[#23BE0A0D] text-[#23BE0A]'>{second}</button>
                    <button className='btn btn-sm border-none rounded-3xl bg-[#23BE0A0D] text-[#23BE0A]'>{third}</button>
                    
                </div>
                <p className='text-xl font-semibold'>{name}</p>
                <p className='text-lg'>Writer: {writer}</p>
                <hr className='border-b-2 border-dashed text-[#F3F3F3]' />
                <div className='flex justify-between'>
                    <p>{category}</p>
                    <p className='flex gap-2 items-center'>{rating} <IoIosStarHalf className='text-amber-500' /></p>
                </div>
            </div>

        </div>
    );
};

export default Book;