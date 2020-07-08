import React, { createContext, useState, useEffect } from 'react'
import { useFirebase } from '../firebase'

export let AupContext = createContext({
    user: null,
    ready: false,
    signUpEP: () => { },
    logInEP: () => { },
    signOut: () => { },
    firestore: null
})

export const AupProvider = ({ children }) => {
    let [state, setState] = useState({
        user: null,
        ready: false
    })
    let { auth, firestore } = useFirebase();

    const signUpEP = auth ? (email, password) => auth.createUserWithEmailAndPassword(email, password) : () => { }
    const signInEP = auth ? (email, password) => auth.signInWithEmailAndPassword(email, password) : () => { }
    const signOut = auth ? () => auth.signOut() : () => { }

    useEffect(() => {
        if (!auth) {
            return;
        }
        const subscribe = auth.onAuthStateChanged = (authUser) => {
            authUser ? setState({ ready: true, user: authUser }) : setState({ ready: false, user: null });
        }
        return () => { subscribe() }
    }, [auth])


    return (
        <AupContext.Provider value={{ ...state, signUpEP, signInEP, signOut, firestore }}>
            {children}
        </AupContext.Provider>
    )
}