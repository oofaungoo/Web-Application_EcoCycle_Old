import React from "react";

const Form_phonenumber = ({ phoneNumber, setPhoneNumber, handlePhoneNumberChange }) => {
    return (
        <div className="form-group">
            <div className='fs-15 fw-5 text-mint'>Phone Number | เบอร์โทรศัพท์</div>
            <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
            />
        </div>
    );
}

export default Form_phonenumber;
