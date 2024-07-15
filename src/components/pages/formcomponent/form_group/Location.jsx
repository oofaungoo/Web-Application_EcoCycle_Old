import React from "react";

const Form_location = ({ location, setLocation }) => {
    return (
        <div className="form-group">
            <div className='fs-15 fw-5 text-mint'>Location | สถานที่</div>
            <select value={location} onChange={(e) => setLocation(e.target.value)} required>
                <option value="">เลือกสถานที่รับ</option>
                <option value="SCIeco สาขาจีน">SCIeco สาขาจีน</option>
                <option value="ธนาคารแห่งประเทศไทย">ธนาคารแห่งประเทศไทย</option>
            </select>
        </div>
    );
}

export default Form_location;
