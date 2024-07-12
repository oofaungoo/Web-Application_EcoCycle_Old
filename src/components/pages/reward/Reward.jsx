import React, { useState, useEffect } from 'react';
import './Reward.css';
import BTNreturn from '../../assets/btnreturn/Btnreturn.jsx';
import rewardImg from '../../images/reward.png';
import coinIcon from '../../images/point.png';

const Reward = () => {
    const [reward, setReward] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/rewards')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setReward(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleRedeem = (item) => {
        console.log(`Redeeming reward: ${item.title}`);
        // Add your redeem logic here
    };

    return (
        <div className="container">
            <BTNreturn />

            <div className="points-section">
                <span className="text-blue-logo fs-36">0</span>
                <span className="points-label">คะแนนสะสม</span>
            </div>
            <nav className="category-nav">
                <div className="category-item">All</div>
                <div className="category-item">Electronic & IT</div>
                <div className="category-item">Lifestyle</div>
                <div className="category-item">Health</div>
            </nav>

            <ul className="reward-list">
                {reward.map((item, index) => (
                    <li key={index} className="reward">
                        <div className="reward-info">
                            <img src={rewardImg} className='reward-image' />
                            <span>{item.title}</span>
                            <span className="text-green">
                                {item.point}
                                <img src={coinIcon} className='icon-coin' />
                            </span>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reward;
