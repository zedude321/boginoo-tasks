import React, { useContext, useEffect, useState } from 'react'
import { Layout, Part, Link } from '../components'
import { AupContext } from '../providers/aup'
import { useFirebase } from '../firebase'

export const History = () => {
    const { user } = useContext(AupContext)
    const { firestore } = useFirebase();
    const [links, setLinks] = useState([]);

    useEffect(() => {
        if (firestore && user) {
            const getLinks = async () => {
                let link_array = []
                await firestore.collection('users').doc(user.uid).collection('links').get().then((d) => {
                    d.forEach(e => {
                        if (e.exists) {
                            link_array.push(e.data());
                            console.log(e.data().url)
                        }
                    });
                })
                setLinks(link_array);
            }
            getLinks();
        }
    }, [user])

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
            <div className='mt-5-3 flex justify-center items-center column'>
                <NumberList numbers={links} />
            </div>
        </div>
    </Layout>)
}