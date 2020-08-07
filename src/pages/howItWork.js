import React, { useState, useEffect } from 'react';
import { Layout } from '../components';
import { Link, useHistory } from 'react-router-dom';

export const HowItWork = () => {
    const [text, setText] = useState('Loading...')
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            setText('Figure it out yourselves')
            setTimeout(() => {
                setText('LOL')
                setTimeout(() => {
                    setText(`But seriously it's so easy`)
                    setTimeout(() => {
                        setText('Just put the url you want to shorten in the text thingy')
                        setTimeout(() => {
                            setText('Then press Shorten')
                            setTimeout(() => {
                                setText('Idiot')
                                setTimeout(() => {
                                    setText('Bye')
                                    setTimeout(() => {
                                        history.push('/')
                                    }, 100)
                                }, 1000)
                            }, 1000)
                        }, 4000)
                    }, 2000)
                }, 1500)
            }, 4000)
        }, 2000)
    }, [])

    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex justify-center items-center mt-2-4'>
                    <Link></Link>
                </div>
                <div className='font-lobster c-primary fs-8-2 center'>
                    Zorten: How Does It Work?
                </div>
                <div className='mt-4-3 flex justify-center items-center fs-7-2 font-ubuntu c-primary'>
                    {text}
                </div>
            </div>
        </Layout>
    )
}