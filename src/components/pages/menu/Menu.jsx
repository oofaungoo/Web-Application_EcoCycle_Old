import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import portImg from '../../images/product.jpg'
import { HiOutlineLogout, HiPencilAlt, HiOutlineStar, HiOutlineDocumentSearch } from "react-icons/hi";

const Menu = () => {
    const userData = [
        { username: "มู่หลาน ตวัดดาบ", customer: "SCIeco สาขาจีนแผ่นดินใหญ่", point: 200 }
    ]

    return (
        <div className="container">
            <div className="text-center fs-36 fw-6">
                <span className='text-blue-logo'>Eco</span>
                <span className='text-green-logo'>Cycle</span>
            </div>
            <div className="text-center"> {/* แสดงโปรไฟล์ผู้ใช้ */}
                <img className="avatar" src={portImg} style={{ marginBottom: '20px' }} />
                <div>สวัสดี! คุณ {userData[0].username}</div>
                <div>บริษัท: {userData[0].customer}</div>
                <div>คะแนนสะสมปัจจุบัน: {userData[0].point}</div>
            </div>

            <div>
                <Link to="/">
                    <div className="button-blue text-white fs-15 fw-3">
                        <div><HiPencilAlt /> ทำรายการ</div>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/reward">
                    <div className="button-blue text-white fs-15 fw-3">
                        <div><HiOutlineStar /> Redeem rewards</div>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/price">
                    <div className="button-blue text-white fs-15 fw-3">
                        <div><HiOutlineDocumentSearch /> ตรวจสอบราคารับซื้อประจำวัน</div>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/">
                    <div className="button-red text-white fs-15 fw-3">
                        <div><HiOutlineLogout /> ออกจากระบบ</div>
                    </div>
                </Link>
            </div >
        </div >
    );
};

export default Menu;