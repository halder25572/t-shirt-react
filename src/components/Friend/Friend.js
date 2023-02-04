import React, { useContext } from 'react';
import { RingContext } from './../GrandPa/GrandPa';

const Friend = () => {
    const [money, setMoney] = useContext(RingContext);
    return (
        <div>
            <h5>Friend</h5>
            <p><small>Money: {money}</small></p>
            <button onClick={() => setMoney(money - 1)}>Decrease</button>
        </div>
    );
};

export default Friend;