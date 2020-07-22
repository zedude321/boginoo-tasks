import firebase from 'firebase'
import { useState, useEffect } from 'react';
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyBfIdWAyzwBbK3NsyXabLxLLiqF4xz_u-c",
    authDomain: "zorten.firebaseapp.com",
    databaseURL: "https://zorten.firebaseio.com",
    projectId: "zorten",
    storageBucket: "zorten.appspot.com",
    messagingSenderId: "1033388127734",
    appId: "1:1033388127734:web:0877def897d80f2f4443d7",
    measurementId: "G-HLLQJ8YJ3E"
};

export const useFirebase = () => {
    const [state, setState] = useState({ firebase })

    useEffect(() => {
        let app;
        if (!firebase.apps.length){
            app = firebase.initializeApp(config);
        }
        let auth = firebase.auth(app)
        let firestore = firebase.firestore(app);
        setState({firebase, app, auth, firestore});
    }, [config]);

    return state;
}