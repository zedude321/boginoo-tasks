import React, { useContext, useState } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components';
import { useHistory } from 'react-router-dom';
import { AupContext } from '../providers/aup';

export const SignUp = () => {
    const history = useHistory();
    const { ready, user, signUpEP } = useContext(AupContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [error, setError] = useState('')
    const [name, setName] = useState('')

    const signUp = async () => {
        if (!email || !password || !password2 || !name) {
            setError('Please enter the required fields')
            return;
        }
        if (password2 != password) {
            setError('Passwords do not match')
            return;
        }
        if (password.toLowerCase() == 'password') {
            setError('Password is not a good password')
            return;
        }

        try {
            await signUpEP(email, password);
            history.push('/')
        } catch (e) {
            setError(e.message);
        }
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
                    Zorten Sign Up
                </div>
                <div className='mt-5-3 flex justify-center items-center column font-ubuntu'>
                    Email
                    <Input className="w-9-3 fs-2-4 pa-4-2 br-primary-0 shadow out-0 mb-2-4" placeholder='name@mail.domain' value={email} onChange={(e) => setEmail(e.target.value)} />
                    Password
                    <Input type={'password'} className="w-9-3 fs-2-4 pa-4-2 br-primary-0 shadow out-0 mb-2-4" placeholder='••••••••••' value={password} onChange={(e) => setPassword(e.target.value)} />
                    Repeat Password
                    <Input type={'password'} className="w-9-3 fs-2-4 pa-4-2 br-primary-0 shadow out-0 mb-2-4" placeholder='••••••••••' value={password2} onChange={(e) => setPassword2(e.target.value)} />
                    <Button className="b-primary c-default br-primary-0 h-5 brr fs-2-4 pa-4-2" onClick={signUp}>Sign Up</Button>
                    {error && <div className='font-ubunutu c-red'>{error}</div>}
                </div>
            </div>
        </Layout>
    )
}