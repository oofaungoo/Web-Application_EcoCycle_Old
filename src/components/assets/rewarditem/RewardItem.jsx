import React from 'react';
import './RewardItem.css'; // Ensure you have the styles specific to this component

const RewardItem = ({ item, handleRedeem, rewardImg, coinIcon, userPoints }) => {
    const isRedeemable = userPoints >= item.point;

    return (
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
                            onClick={() => isRedeemable && handleRedeem(item)}
                            disabled={!isRedeemable}
                        >
                            แลกรางวัล
                        </button>
                    </div>
                </span>
            </div>
        </li>
    );
};

export default RewardItem;
