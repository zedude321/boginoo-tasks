import React, { createContext, useState, useEffect } from 'react'
import { useFirebase } from '../firebase'

export let AupContext = createContext({
    user: null,
    ready: false,
    hostUrl: ''
})

export const AupProvider = ({ children }) => {
    let [state, setState] = useState({
        user: null,
        ready: false,
        hostUrl: 'localhost:3000'
    })
    let { auth } = useFirebase();

    useEffect(() => {
        if (!auth) {
            return;
        }
        const subscribe = auth.onAuthStateChanged((authUser) => {
            authUser ? setState({ ready: true, user: authUser, hostUrl: state.hostUrl}) : setState({ ready: false, user: null, hostUrl: state.hostUrl });
        })
        return () => { subscribe() }
    }, [auth])

    return (
        <AupContext.Provider value={{ ...state }}>
            {children}
        </AupContext.Provider>
    )
}