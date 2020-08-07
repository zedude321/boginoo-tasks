import React, { useState } from 'react'
import { Layout, Button, Link, Input } from '../components'
import { useFirebase } from '../firebase'
import { useHistory } from 'react-router-dom';

export const ForgotPass = () => {
    const history = useHistory()
    const { auth } = useFirebase();
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const sendEmail = () => {
        auth.sendPasswordResetEmail(email).then(function () {
            history.push('/login')
        }).catch(function (e) {
            setError(e.message)
        });
    }

    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex justify-center items-center mt-2-4'>
                    <Link></Link>
                </div>
                <div className='font-lobster c-primary fs-8-2 center'>
                    Zorten Email Recovery
                </div>
                <div className='mt-4-3 flex justify-center items-center column font-ubuntu'>
                    <label>Email</label>
                    <Input className='w-8-3 fs-2-4 pa-4-2 br-primary-0 shadow out-0' placeholder='name@mail.domain' value={email} onChange={(e) => setEmail(e.target.value)}  />
                    <Button className='font-ubuntu b-primary c-default br-primary-0 h-5 brr fs-2-4 pa-4-2 w-8-3 mt-2-4' onClick={sendEmail}>Send Email</Button>
                    {error && 
                    <div className='font-ubunutu c-red'>{error}</div>}
                </div>
            </div>
        </Layout>
    )
}