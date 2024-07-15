import React from "react";

const Form_alert = () => {
    return (
        <div>
            <div className="alert alert-danger">
                กรุณาตรวจสอบรายการก่อน Submit | ส่ง **พนักงานจะตรวจสอบรายการสินค้าดังกล่าว ณ จุด Drop
            </div>
            <div className="alert alert-warning">
                สามารถตรวจสอบการทำรายการย้อนหลังได้ในเมนู "ประวัติการทำรายการ"
            </div>
        </div>
    )
}

export default Form_alert;