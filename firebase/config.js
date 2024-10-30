import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp, query, onSnapshot, orderBy } from 'firebase/firestore'
import { firebaseConfig } from '../apikeys'


//console.log('firebaseConfig', firebaseConfig)

initializeApp(firebaseConfig)

const firestore = getFirestore()

const SHOPPINGITEMS = 'shoppingitems'

export { 
    firestore,
    collection, 
    addDoc,
    serverTimestamp, 
    query,
    onSnapshot,
    orderBy,
    SHOPPINGITEMS
}