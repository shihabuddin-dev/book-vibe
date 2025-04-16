import React from 'react';
import { GiCalendarHalfYear } from 'react-icons/gi';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { MdMenuBook } from 'react-icons/md';

const ViewDetails = ({ bookList }) => {
    const { name, imageUrl, description, category, writer, tags, rating, publication_name, pages, publication_year } = bookList
    const [first, second, third, four, five] = tags

    return (
        <div>
            <button className="btn btn-sm border-none rounded-3xl bg-[#23BE0A] text-white" onClick={() => document.getElementById('book_details').showModal()}>View Details</button>

            <dialog id="book_details" className="modal">
                <div className="modal-box w-11/12 max-w-5xl space-y-2 md:space-y-4">
                    <h3 className="font-bold text-xl md:text-2xl text-center py-2">{name}</h3>
                    <img className='mx-auto md:w-38' src={imageUrl} alt="" />
                    <p className="py-4"><span className='font-semibold'>Description:</span> {description}</p>
                    <div className='flex gap-2 md:gap-4 flex-wrap'><p>Writer: {writer}</p>
                        <p className='flex gap-2 items-center'><MdMenuBook /> Pages: {pages}</p></div>
                    <div className='flex gap-2 items-center flex-wrap'>
                        <h3 className='font-semibold'>Tags</h3>
                        <button className='btn btn-sm border-none rounded-3xl bg-[#23BE0A0D] text-[#23BE0A]'>#{first}</button>
                        <button className='btn btn-sm border-none rounded-3xl bg-[#23BE0A0D] text-[#23BE0A]'>#{second}</button>
                        <button className='btn btn-sm border-none rounded-3xl bg-[#23BE0A0D] text-[#23BE0A]'>#{third}</button>
                        <button className='btn btn-sm border-none rounded-3xl bg-[#23BE0A0D] text-[#23BE0A]'>#{four}</button>
                        <button className='btn btn-sm border-none rounded-3xl bg-[#23BE0A0D] text-[#23BE0A]'>#{five}</button>
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
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn bg-[#23BE0A] text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default ViewDetails;