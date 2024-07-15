import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineLogout, HiPencilAlt, HiOutlineStar, HiOutlineDocumentSearch } from "react-icons/hi";

const Btnreturn = () => {
    return (
        <div>
            <div>
                <Link to="/form">
                    <div className="btn btn-blue text-white fs-15 fw-3">
                        <div><HiPencilAlt /> ทำรายการ</div>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/reward">
                    <div className="btn btn-blue text-white fs-15 fw-3">
                        <div><HiOutlineStar /> Redeem rewards</div>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/price">
                    <div className="btn btn-blue text-white fs-15 fw-3">
                        <HiOutlineDocumentSearch /> ตรวจสอบราคารับซื้อประจำวัน
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/">
                    <div className="btn btn-red text-white fs-15 fw-3">
                        <HiOutlineLogout />
                        ออกจากระบบ
                    </div>
                </Link>
            </div >
        </div >
    )
}

export default Btnreturn;