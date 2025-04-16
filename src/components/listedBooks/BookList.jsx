import React from 'react';
import { MdMenuBook } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GiCalendarHalfYear } from "react-icons/gi";
import ViewDetails from './ViewDetails';


const BookList = ({ bookList }) => {
    const { name, imageUrl, category, writer, tags, rating, publication_name, pages, publication_year } = bookList
    const [first, second, third, four] = tags
    return (
        <div className='border-2 border-[#1313130D] rounded-xl p-4'>

            <div className='flex items-center flex-col md:flex-row gap-4 md:gap-8'>
                <div className='bg-[#1313130D] rounded-xl p-4 px-10'>
                    <img className='w-18 md:w-24 h-34 md:h-38 mx-auto object-cover' src={imageUrl} alt="" />
                </div>
                <div className='space-y-1.5'>
                    <p className='text-xl md:text-2xl font-semibold'>{name}</p>
                    <div className='flex gap-2 md:gap-4 flex-wrap'><p>Writer: {writer}</p>
                        <p className='flex gap-2 items-center'><MdMenuBook /> Pages: {pages}</p></div>
                    <div className='flex gap-2 items-center flex-wrap'>
                        <h3 className='font-semibold'>Tags</h3>
                        <button className='btn btn-sm border-none rounded-3xl bg-[#23BE0A0D] text-[#23BE0A]'>#{first}</button>
                        <button className='btn btn-sm border-none rounded-3xl bg-[#23BE0A0D] text-[#23BE0A]'>#{second}</button>
                        <button className='btn btn-sm border-none rounded-3xl bg-[#23BE0A0D] text-[#23BE0A]'>#{third}</button>
                        <button className='btn btn-sm border-none rounded-3xl bg-[#23BE0A0D] text-[#23BE0A]'>#{four}</button>
                    </div>
                    <div className='flex gap-4 items-center flex-wrap'>
                        <h3 className='font-semibold'>Publication</h3>
                        <p className='flex gap-2 items-center'><HiOutlineUserGroup />Name: {publication_name}</p>
                        <p className='flex gap-2 items-center'><GiCalendarHalfYear /> Year: {publication_year}</p>
                    </div>
                    <hr className='border-b-2 border-dashed text-[#F3F3F3]' />
                    <div className='flex gap-2 items-center flex-wrap'>
                        <button className='btn btn-sm border-none rounded-3xl bg-[#328EFF26] text-[#328EFF]'>{category}</button>
                        <button className='btn btn-sm border-none rounded-3xl bg-[#FFAC3326] text-[#FFAC33]'>Ratings: {rating}</button>
                        <ViewDetails bookList={bookList}>
                        </ViewDetails>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookList;