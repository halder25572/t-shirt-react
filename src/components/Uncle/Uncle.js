import React, { useContext } from 'react';
import { MoneyContext } from '../GrandPa/GrandPa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h4>Uncle</h4>
            <p><small>Money: {money}</small></p>
        </div>
    );
};

export default Uncle;