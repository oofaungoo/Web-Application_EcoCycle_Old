import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Btnmenu from '../../assets/btnmenu/Btnmenu';
import portImg from '../../images/product.jpg';
import Logo_ecocycle from '../../assets/logo_ecocycle/Logo_ecocycle';

const Menu = () => {

    {/* ตรงนี้รอ deploy จริง ๆ ต้องเชื่อม API database ตอนนี้ทำแค่ demo ไปก่อน */ }

    const userData = [
        { username: "มู่หลาน ตวัดดาบ", customer: "SCIeco สาขาจีนแผ่นดินใหญ่", point: 200 }
    ]

    return (
        <div className="container">

            <Logo_ecocycle />

            <div className="text-center">
                <img className="avatar " src={portImg} />
                <div>สวัสดี! คุณ {userData[0].username}</div>
                <div>บริษัท: {userData[0].customer}</div>
                <div>คะแนนสะสมปัจจุบัน: {userData[0].point}</div>
            </div>

            <Btnmenu />

        </div >
    );
};

export default Menu;