import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useHistory } from 'react-router-dom';

export const HomeDefault = () => {
    const history = useHistory()
    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex justify-center items-center mt-2-5'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-8-2 center'>
                    Shortten
                </div>
                <div className='mt-5-3 flex justify-center items-center'>
                    <Input className="w-9-3 fs-2-4 pa-4-2 br-primary-0 shadow mr-2-4 out-0" placeholder='https://www.web-huudas.mn' />
                    <Button className="b-primary c-default br-primary-0 h-5 brr fs-2-4 pa-4-2" onClick={() => history.push('/shortened')}>Shorten</Button>
                </div>
            </div>
        </Layout>
    )
}