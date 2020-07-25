import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useFirebase } from '../firebase'

export const Gateway = () => {
    const location = useLocation();
    const { firestore } = useFirebase();
    useEffect(() => {
        if(firestore){
            firestore.collection('urls').doc(location.pathname).get().then((d) => {
                if(d.exists) {
                    const url = d.data().url;
                    if (url.includes('https://')) {
                        window.location.href = `${url}`
                    } else {
                        window.location.href = `https://${url}` 
                    }
                }
            })
        }
    }, [firestore])
    return (<>
        </>)
}