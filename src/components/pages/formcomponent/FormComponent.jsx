import React, { useState, useEffect } from 'react';
import './FormComponent.css';
import Btnreturn from '../../assets/btnreturn/Btnreturn';
import Form_location from './form_group/Location';
import Form_phonenumber from './form_group/Phonenumber';
import Form_fullname from './form_group/Fullname';
import Form_condition from './form_group/Condition';
import Form_alert from './form_group/Alert';
import ProductList from './form_group/ProductList';

const FormComponent = () => {
    const userData = {
        username: "มู่หลาน ตวัดดาบ",
        customer: "SCIeco สาขาจีนแผ่นดินใหญ่",
        location: "SCIeco สาขาจีน",
        point: 200,
        bank: "ธนาคารแห่งชาติจีน",
        bank_no: "1234567890",
        phone_no: "0812345678"
    };

    const [location, setLocation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fullName, setFullName] = useState('');
    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [condition, setCondition] = useState('');
    const [bank, setBank] = useState('');
    const [bankNumber, setBankNumber] = useState('');

    useEffect(() => {
        // Auto-fill the form with user data
        setLocation(userData.location);
        setPhoneNumber(formatPhoneNumber(userData.phone_no));
        setFullName(userData.username);
        setBank(userData.bank);
        setBankNumber(userData.bank_no);
    }, []);

    const formatPhoneNumber = (value) => {
        const cleaned = ('' + value).replace(/\D/g, '').slice(0, 10); // Limit to 10 digits
        const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
        if (match) {
            const part1 = match[1];
            const part2 = match[2] ? `-${match[2]}` : '';
            const part3 = match[3] ? `-${match[3]}` : '';
            return `${part1}${part2}${part3}`;
        }
        return value;
    };

    const handlePhoneNumberChange = (e) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setPhoneNumber(formattedPhoneNumber);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
            location,
            phoneNumber,
            fullName,
            image,
            condition,
            bank,
            bankNumber
        });
    };

    return (
        <form onSubmit={handleSubmit} className="container">
            <Btnreturn />
            <div className="text-center text-mint fs-22 fw-5" style={{ marginBottom: "14px" }}>ทำรายการ</div>

            <Form_location location={location} setLocation={setLocation} />
            <Form_phonenumber phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} handlePhoneNumberChange={handlePhoneNumberChange} />
            <Form_fullname fullName={fullName} setFullName={setFullName} />


            <ProductList />

            <div className="form-group">
                <div className='fs-15 fw-5 text-mint'>Image | รูปถ่าย</div>
                <input
                    type="file"
                    onChange={handleImageChange}
                    required
                />
                {imagePreview && (
                    <img src={imagePreview} alt="Preview" style={{ height: "200px", width: "250px", objectFit: "cover", marginTop: "10px" }} />
                )}
            </div>

            <Form_condition
                condition={condition}
                setCondition={setCondition}
                bank={bank}
                setBank={setBank}
                bankNumber={bankNumber}
                setBankNumber={setBankNumber}
                userData={userData}
            />

            <Form_alert />

            <div className="form-actions">
                <button type="button" className="btn btn-grey fw-4" onClick={() => console.log('Cancelled')}>
                    Cancel
                </button>
                <button type="submit" className="btn btn-blue fs-16 fw-5">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default FormComponent;
