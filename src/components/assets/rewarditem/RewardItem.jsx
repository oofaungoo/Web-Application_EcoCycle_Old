import React, { useState } from 'react';
import './RewardItem.css'; // Ensure you have the styles specific to this component

const RewardItem = ({ item, handleRedeem, rewardImg, coinIcon, userPoints }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedReward, setSelectedReward] = useState(null);

    const isRedeemable = userPoints >= item.point;

    const handleRedeemClick = (item) => {
        setSelectedReward(item);
        setShowPopup(true);
    };

    const confirmRedeem = () => {
        if (selectedReward) {
            handleRedeem(selectedReward);
        }
        setShowPopup(false);
        setSelectedReward(null);
    };

    const closePopup = () => {
        setShowPopup(false);
        setSelectedReward(null);
    };

    return (
        <>
            <li className="reward">
                <div className="reward-info">
                    <span className="reward-image-container">
                        <img src={rewardImg} className="reward-image" alt="reward" />
                    </span>
                    <span className="reward-info-container">
                        <div className="fw-5">{item.title}</div>
                        <div className="text-grey fs-13">{item.desc}</div>
                        <div className="reward-actions">
                            <span className='text-green flex fw-5 fs-18'>
                                {item.point}
                                <img src={coinIcon} className="icon-coin" alt="coin icon" />
                            </span>
                            <button
                                className={`fs-13 button-reward text-white ${!isRedeemable ? 'disabled' : ''}`}
                                onClick={() => isRedeemable && handleRedeemClick(item)}
                                disabled={!isRedeemable}
                            >
                                แลกรางวัล
                            </button>
                        </div>
                    </span>
                </div>
            </li>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <div style={{ marginBottom: '10px' }}>
                            <span>คุณต้องการที่จะแลก </span>
                            <span className='text-red fw-5'>[{selectedReward?.title}]</span>
                            <span> จริง ๆ หรือไม่?</span>
                        </div>
                        <div>
                            <button className='fs-15 btn btn-grey' onClick={closePopup}>ยกเลิก</button>
                            <button className='fs-15 btn btn-blue' onClick={confirmRedeem}>ยืนยัน</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RewardItem;
