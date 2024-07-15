import React from 'react';
import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";

const Btnreturn = () => {
    return (
        <div>
            <Link to="/" className='text-grey'>
                <HiChevronLeft />
                <span className='fs-16'>ย้อนกลับ</span>
            </Link>
        </div>
    )
}

export default Btnreturn;