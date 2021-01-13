import React from 'react';
import './menuFilter.css';

export const MenuFilter = ({atribut, handFilterProduct}) => {
    return (
        <div className={'inputFromFilter'}>
            <input type="radio" name={'inputFilter'} value={atribut} id={atribut}
                   onChange={() => handFilterProduct({atribut})}/>
            <label htmlFor={atribut}><p>{atribut}</p></label>
        </div>
    )
}
