import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components';
import { useHistory } from 'react-router-dom';

export const SignUp = () => {
    const history = useHistory();

    const goToHome = () => {
        history.push('/')
    }

    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex justify-center items-center mt-2-5'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-8-2 center'>
                    Shortten Sign Up
                </div>
                <div className='mt-5-3 flex justify-center items-center column font-ubuntu'>
                    Email
                    <Input className="w-9-3 fs-2-4 pa-4-2 br-primary-0 shadow out-0 mb-2-4" placeholder='name@mail.domain' />
                    Password
                    <Input type={'password'} className="w-9-3 fs-2-4 pa-4-2 br-primary-0 shadow out-0 mb-2-4" placeholder='••••••••••' />
                    Repeat Password
                    <Input type={'password'} className="w-9-3 fs-2-4 pa-4-2 br-primary-0 shadow out-0 mb-2-4" placeholder='••••••••••' />
                    <Button className="b-primary c-default br-primary-0 h-5 brr fs-2-4 pa-4-2" onClick={goToHome}>Sign Up</Button>
                </div>
            </div>
        </Layout>
    )
}