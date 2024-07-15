import React from 'react';

const Form_condition = ({ condition, setCondition, bank, setBank, bankNumber, setBankNumber, userData }) => {
    return (
        <>
            <div className="form-group">
                <div className='fs-15 fw-5 text-mint'>Condition | เงื่อนไข</div>
                <select value={condition} onChange={(e) => setCondition(e.target.value)} required>
                    <option value="สะสมแต้ม">♻️ สะสมแต้ม</option>
                    <option value="ขาย">🪙 ขายให้เรา</option>
                    <option value="บริจาค">🙏 บริจาค</option>
                </select>
            </div>

            {/* ถ้าผู้ใช้เลือก [ขาย] จะทำการโชว์ field ให้ผู้ใช้กรอกช่องทางการจ่ายเงิน */}
            {condition === "ขาย" && (
                <>
                    <div className="form-group">
                        <div className='fs-15 fw-5 text-mint'>Select Bank | ธนาคาร</div>
                        <select value={bank} onChange={(e) => setBank(e.target.value)} required>
                            <option value="">Choose something</option>
                            <option value="ธนาคารแห่งประเทศไทย">ธนาคารแห่งประเทศไทย</option>
                            <option value="ธนาคารแห่งชาติจีน">ธนาคารแห่งชาติจีน</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div className='fs-15 fw-5 text-mint'>Bank No. / PromptPay No. | เลขบัญชี</div>
                        <input
                            type="text"
                            value={bankNumber}
                            onChange={(e) => setBankNumber(e.target.value)}
                            required
                        />
                    </div>
                </>
            )}
        </>
    );
};

export default Form_condition;
