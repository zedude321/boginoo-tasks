import React from 'react';
import { Button } from './';
import { useHistory, useLocation } from 'react-router-dom'

export const Navigation = (props) => {
    const history = useHistory();
    const location = useLocation();

    const goToHome = () => {
        history.push('/');
    }
    const goToLogin = () => {
        history.push('/login')
    }   

    return (
        <div className='w100 flex justify-end items-center'>
            <div className='font-ubuntu bold c-primary pa-4-2 mr-2-4 mt-7-2 fs-2-4'>How does it work?</div>
            {location.pathname !== '/' &&
            <Button className='font-ubuntu b-primary c-default br-primary-0 h-5 brr fs-2-4 pa-4-2 mr-2-6 mt-7-2' onClick={goToHome}>Home</Button>}
            {location.pathname !== '/login' &&
            <Button className='font-ubuntu b-primary c-default br-primary-0 h-5 brr fs-2-4 pa-4-2 mr-2-6 mt-7-2' onClick={goToLogin}>Login</Button>}
        </div>
    );
};