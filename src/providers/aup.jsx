import React, { createContext, useState, useEffect } from 'react'
import { useFirebase } from '../firebase'

export let AupContext = createContext({
    user: null,
    ready: false
})

export const AupProvider = ({ children }) => {
    let [state, setState] = useState({
        user: null,
        ready: false
    })
    let { auth } = useFirebase();

    useEffect(() => {
        if (!auth) {
            return;
        }
        const subscribe = auth.onAuthStateChanged((authUser) => {
            authUser ? setState({ ready: true, user: authUser }) : setState({ ready: false, user: null });
        })
        return () => { subscribe() }
    }, [auth])


    return (
        <AupContext.Provider value={{ ...state }}>
            {children}
        </AupContext.Provider>
    )
}