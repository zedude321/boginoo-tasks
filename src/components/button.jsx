import React from 'react';

export const Button = (props) => {
    let { children, disabled, className, ...others } = props;
    return (
        <button className={`input ${className} pointer`} {...others}>{children}</button>
    );
};