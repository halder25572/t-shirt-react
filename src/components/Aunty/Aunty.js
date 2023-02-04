import React from 'react';
import Cousin from './../Cousin/Cousin';

const Aunty = ({house}) => {
    return (
        <div>
            <h4>Aunty</h4>
            <p>House: <small>{house}</small></p>
            <section style={{display:"flex"}}>
                <Cousin></Cousin>
                <Cousin></Cousin>
            </section>
        </div>
    );
};

export default Aunty;