import React from "react";

const Form_fullname = ({ fullName, setFullName }) => {
    return (
        <div className="form-group">
            <div className='fs-15 fw-5 text-mint'>Full Name | ชื่อ-นามสกุล</div>
            <input
                type="text"
                placeholder='ตัวอย่าง: ลั้นลา เศร้าซึมเว่อ'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
            />
        </div>
    )
}

export default Form_fullname;