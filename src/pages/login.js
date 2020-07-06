import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components';
import { useHistory } from 'react-router-dom';

export const Login = () => {
    const history = useHistory();

    const goToSignUp = () => {
        history.push('/signup')
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
                    Shortten Login
                </div>
                <div className='mt-5-3 flex justify-center items-center column font-ubuntu'>
                    Email
                    <Input className="w-9-3 fs-2-4 pa-4-2 br-primary-0 shadow out-0 mb-2-4" placeholder='name@mail.domain' />
                    Password
                    <Input type={'password'} className="w-9-3 fs-2-4 pa-4-2 br-primary-0 shadow out-0 mb-2-4" placeholder='••••••••••' />
                    <div className="mb-2-5 row around w-9-3 between">
                        <span className="font-ubuntu c-primary">▢ Remember me </span>
                        <a href='' className="font-ubuntu c-black"> Forgot password?</a>
                    </div>
                    <Button className="b-primary c-default br-primary-0 h-5 brr fs-2-4 pa-4-2">Login</Button>
                    <a href='' onClick={goToSignUp} className='font-ubuntu mt-2-4 c-primary'>New user?</a>
                </div>
            </div>
        </Layout>
    )
}