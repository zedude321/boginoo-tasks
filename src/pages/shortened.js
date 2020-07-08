import React, { useContext } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';

export const Shortened = () => {
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
                    <Input className="w-9-3 fs-2-4 pa-4-2 br-primary-0 shadow mr-2-4 out-0" placeholder='https://www.web-huudas.mn' />
                    <Button className="b-primary c-default br-primary-0 h-5 brr fs-2-4 pa-4-2">Shorten</Button>
                </div>
                <div className='mt-4-3 flex justify-center items-center font-ubuntu column'>
                    <div className='w-9-3 column'>
                        <span className='c-gray'>Given link:</span>
                        <br />
                        <span className='c-black'>we</span>
                    </div>
                    <div className='w-9-3 column mt-2-6'>
                        <span className='c-gray'>Shortened link:</span>
                        <br />
                        <span className='c-black'>https://shortten.io/1991</span>
                        <a className='c-primary ml-2-5' href=''>Copy</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}