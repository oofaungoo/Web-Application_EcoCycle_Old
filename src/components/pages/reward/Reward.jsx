import React, { useState, useEffect } from 'react';
import './Reward.css';
import BTNreturn from '../../assets/btnreturn/Btnreturn.jsx';
import rewardImg from '../../images/reward.png';
import coinIcon from '../../images/point.png';
import RewardItem from '../../assets/rewarditem/RewardItem.jsx';

const Reward = () => {
    const [reward, setReward] = useState([]);
    const [users, setUsers] = useState([]);

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

        fetch('http://127.0.0.1:5000/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleRedeem = (item) => {
        console.log(`Redeeming reward: ${item.title}`);
        // Add your redeem logic here
    };

    return (
        <div className="container">
            <BTNreturn />

            {users.length > 0 && (
                <div className="points-section">
                    <span className="text-blue-logo fs-36">{users[0].point}</span>
                    <span className="points-label">คะแนนสะสม</span>
                </div>
            )}

            <nav className="category-nav">
                <div className="category-item">All</div>
                <div className="category-item">Souvenir</div>
                <div className="category-item">Health</div>
                <div className="category-item">Food & Drinks</div>
            </nav>

            <ul className="reward-list">
                {reward.map((item, index) => (
                    <RewardItem
                        key={index}
                        item={item}
                        handleRedeem={handleRedeem}
                        rewardImg={rewardImg}
                        coinIcon={coinIcon}
                        userPoints={users[0]?.point || 0} // Pass the user's points
                    />
                ))}
            </ul>
        </div>
    );
};

export default Reward;
