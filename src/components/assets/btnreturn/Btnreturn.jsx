import React from 'react';
import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";

const Btnreturn = () => {
    return (
        <div>
            <Link to="/">
                <div className='text-gray'>
                    <HiChevronLeft />
                    <span className='fs-16 text-gray'>ย้อนกลับ</span>
                </div>
            </Link>
        </div>
    )
}

export default Btnreturn;