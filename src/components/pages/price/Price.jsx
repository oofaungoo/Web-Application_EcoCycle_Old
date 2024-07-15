import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronLeft } from 'react-icons/hi';
import './Price.css';
import Btnreturn from '../../assets/btnreturn/Btnreturn';
import Noti from './Noti';

const Price = () => {
    const [items, setItems] = useState([]);
    const dateData = [{ date: '9 กรกฎาคม 2567' }];

    useEffect(() => {
        fetch('http://127.0.0.1:5000/items')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="container">
            <Btnreturn />

            <div className="text-center text-mint fs-22 fw-5">ราคารับซื้อ (Purchase Price)</div>

            <Noti />

            <div className="text-center fs-15 fw-5 text-green">อัปเดตราคาล่าสุด: {dateData[0].date}</div>

            <ul className="item-list">
                {items.map((item, index) => (
                    <li key={index} className="item">
                        <img src={`http://127.0.0.1:5000/static/images/${item.img}`} alt={item.name} className="item-image" />
                        <div className="item-info">
                            <span>{item.name}</span>
                            <span className="text-green">{item.price} บาท</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Price;
