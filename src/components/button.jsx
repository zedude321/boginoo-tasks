import React from 'react';

export const Button = (props) => {
    let { children, disabled, className, ...others } = props;
    /* 
        https://boginoo.firebaseapp.com/button

        Button component-ийн жишээ

            <Button>Богиносгох</Button>
            <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary'>Нэвтрэх</Button>
            <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' disabled>Нэвтрэх</Button>
            <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' onClick={() => {console.log('LOGIN!')}}>Нэвтрэх</Button>

        - children props -ийг button element-ийн тодор render хийнэ

        - className props -оор дамжуулан button-ний style өөрчилж болдог байх

        - disabled class -ийг components.scss file-д тодорхойлж бичих pointer-events, opacity тохируулах

        - бусад дамжуулсан others props ийг button элемэнт дээр нэмж өгөх ингэснээр onClick event өөр ямар хамаагүй props-ийг нэмж ашиглах боломжтой болно

        HINT: className={`btn ${className} ${disabled && 'disabled'}`}
       className="b-primary c-default br-primary-0 h-5 brr fs-3-3 pa-4-2"
    */
    return (
        <button className={`input ${className} pointer`} {...others}>{children}</button>
    );
};