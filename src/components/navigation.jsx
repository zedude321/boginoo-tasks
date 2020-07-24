import React from 'react';
import { Button } from './';
import { useHistory, useLocation } from 'react-router-dom'
import { useContext } from 'react';
import { AupContext } from '../providers/aup';
import { useFirebase } from '../firebase';

export const Navigation = () => {
    const history = useHistory();
    const location = useLocation();
    const { user } = useContext(AupContext);
    const { auth } = useFirebase();

    const goToHome = () => {
        history.push('/');
    }
    const goToLogin = () => {
        history.push('/login')
    }
    const logOut = () => {
        auth.signOut()
    }

    return (
        <div className='w100 flex justify-end items-center'>
            <div className='font-ubuntu bold c-primary pa-4-2 mr-2-4 mt-7-2 fs-2-4'  >How does it work?</div>
            {user &&
                <>
                    <div className='font-ubuntu bold c-primary pa-4-2 mr-2-4 mt-7-2 fs-2-4' onClick={history.push('/history')}>{user.email}</div>
                    <Button className='font-ubuntu b-primary c-default br-primary-0 h-5 brr fs-2-4 pa-4-2 mr-2-6 mt-7-2' onClick={logOut}>Logout</Button>
                </>
            }
            {(location.pathname !== '/' && location.pathname !== '/') &&
                <Button className='font-ubuntu b-primary c-default br-primary-0 h-5 brr fs-2-4 pa-4-2 mr-2-6 mt-7-2' onClick={goToHome}>Home</Button>}
            {(!user && location.pathname !== '/login') &&
                <Button className='font-ubuntu b-primary c-default br-primary-0 h-5 brr fs-2-4 pa-4-2 mr-2-6 mt-7-2' onClick={goToLogin}>Login</Button>}
        </div>
    );
};