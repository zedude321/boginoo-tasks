import React, { useContext, useState } from 'react'
import shortid from 'shortid'
import { Layout, Part, Link, Button, Input } from '../components'
import { AupContext } from '../providers/aup'
import { useCollection } from '../components/useCollection'

export const History = () => {
    const { user } = useContext(AupContext)
    const [short, setShort] = useState('')
    const { createRecord: createUrlsRecord } = useCollection(`urls`);
    const { data: links , createRecord: createLinksRecord } = useCollection(`users/${user && user.uid}/links`);
    console.log(links);
    const shorten = async () => {
        const id = shortid.generate()
        if (!short) return;

        if (user) {
            await createLinksRecord(id, {
                url: short,
                shortUrl: id,
                user: user.email
            })
        }

        await createUrlsRecord(id, {
            url: short,
            shortUrl: id,
        })
    }

    const NumberList = (props) => {
        const numbers = props.numbers;
        const listItems = numbers.map((number, k) =>
            <Part link={number.url} short={number.shortUrl} key={k} ></Part>
        );
        return (
            <ul>{listItems}</ul>
        );
    }

    return (<Layout>
        <div className='h100 flex flex-col'>
            <div className='flex justify-center items-center mt-2-5'>
                <Link></Link>
            </div>

            <div className='font-lobster c-primary fs-8-2 center'>
                Zorten History
                </div>
            <div className='mt-5-3 flex justify-center items-center'>
                <Input className="w-9-3 fs-2-4 pa-4-2 br-primary-0 shadow mr-2-4 out-0" placeholder='https://www.web-page.com' value={short} onChange={(e) => setShort(e.target.value)} />
                <Button className="b-primary c-default br-primary-0 h-5 brr fs-2-4 pa-4-2" onClick={shorten}>Shorten</Button>
            </div>
            <div className='mt-5-3 flex justify-center items-center column'>
                <NumberList numbers={links} />
            </div>
        </div>
    </Layout>)
}