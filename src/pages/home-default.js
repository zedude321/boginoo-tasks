import React, { useContext, useState } from 'react';
import shortid from 'shortid'
import { Layout, Button, Input, Link, useKeyPress } from '../components/';
import { AupContext } from '../providers/aup'
import { useFirebase } from '../firebase';
import copy from 'copy-to-clipboard'

export const HomeDefault = () => {
    let { user, hostUrl } = useContext(AupContext);
    const [zort, setZort] = useState(false);
    const [url, setUrl] = useState('')
    const { firestore } = useFirebase();
    const [short, setShort] = useState('')
    const [thing, setThing] = useState('')

    const shorten = async () => {
        const id = shortid.generate()
        if (short && user) {
            await firestore.collection("urls").doc(id).set({
                url: short,
                shortUrl: id,
                user: user.email
            })
            await firestore.doc(`users/${user.uid}/links/${id}`).set({
                url: short,
                shortUrl: id
            })
            setThing(short)
            setZort(true)
            setUrl(id)
        }
        if (short && !user) {
            await firestore.collection("urls").doc(id).set({
                url: short,
                shortUrl: id,
            })
            if(short.includes('https://www.')) {
                setThing(short)
            } else {
                setThing(`https://www.${short}`)
            }
            setZort(true)
            setUrl(id)
        }
    }

    if (useKeyPress(13)) {
        shorten()
    }

    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex justify-center items-center mt-2-4'>
                    <Link></Link>
                </div>
                <div className='font-lobster c-primary fs-8-2 center'>
                    Zorten
                </div>
                <div className='mt-4-3 flex justify-center items-center'>
                    <Input className="w-9-3 fs-2-4 pa-4-2 br-primary-0 shadow mr-2-4 out-0" placeholder='https://www.web-page.com' value={short} onChange={(e) => setShort(e.target.value)} />
                    <Button className="b-primary c-default br-primary-0 brr fs-2-4 pa-4-2" onClick={shorten}>Shorten</Button>
                </div>
                {zort &&
                    <div className='mt-4-3 flex justify-center items-center font-ubuntu column'>
                        <div className='w-9-3 column'>
                            <span className='c-gray'>Given link:</span>
                            <br />
                            <span className='c-black'>{thing}</span>
                        </div>
                        <div className='w-9-3 column mt-2-6'>
                            <span className='c-gray'>Shortened link:</span>
                            <br />
                            <div className='row w100'>
                                <span className='c-black'>{hostUrl}/{url}</span>
                                <a className='c-primary ml-2-5 cursor-pointer' onClick={() => { copy(`${hostUrl}/${url}`)}}>Copy</a>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </Layout>
    )
}