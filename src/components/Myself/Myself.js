import React from 'react';
import Special from '../Special/Special';

const Myself = ({house, ring}) => {
    return (
        <div>
            <h4>Myself</h4>
            <p>House: <small>{house}</small></p>
            <section>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default Myself;