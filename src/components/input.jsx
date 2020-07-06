import React from 'react';

export const Input = (props) => {
    let { className, type, ...others } = props;
    return (
        <div>
            {type === 'password' &&
            <input type={'password'} className={`input ${className}`} {...others} />}
            {type !== 'password' &&
            <input className={`input ${className}`} {...others} />}
        </div>
    );
};