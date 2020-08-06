import { useFirebase } from '../firebase'
import { useState, useEffect } from 'react';

export const useCollection = (path) => {
    const { firestore } = useFirebase();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (firestore) {
            const unsubscribe = firestore.collection(path).onSnapshot((q) => setData(q.docs.map((doc) => doc.data())));
            return () => unsubscribe();
        }
    }, [firestore, path])

    const createRecord = (id, data) => {
        firestore.collection(path).doc(id).set({...data});
    }

    return {data, createRecord}
}