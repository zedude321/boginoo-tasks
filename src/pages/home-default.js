import React, { useContext, useState } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useHistory } from 'react-router-dom';
import { AupContext } from '../providers/aup'

export const HomeDefault = () => {
    const history = useHistory()
    let { user, firestore } = useContext(AupContext);
    const [short, setShort] = useState('')

    const shorten = async () => {
        console.log(user)
        if (short && user) {
            await firestore.collection("urls").add({
                url: short,
                user: user.email
            })
            history.push('/shortened')
        }
        if (short && !user) {
            await firestore.collection("urls").add({
                url: short
            })
            history.push('/shortened')
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
                    Zorten
                </div>
                <div className='mt-5-3 flex justify-center items-center'>
                    <Input className="w-9-3 fs-2-4 pa-4-2 br-primary-0 shadow mr-2-4 out-0" placeholder='https://www.web-page.com' value={short} onChange={(e) => setShort(e.target.value)} />
                    <Button className="b-primary c-default br-primary-0 h-5 brr fs-2-4 pa-4-2" onClick={shorten}>Shorten</Button>
                </div>
            </div>
        </Layout>
    )
}