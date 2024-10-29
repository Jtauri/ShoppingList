import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp, query, onSnapshot, orderBy } from 'firebase/firestore'
import { FIRESTORE_APIKEY, FIRESTORE_AUTHDOMAIN, FIRESTORE_PROJECTID, FIRESTORE_STORAGEBUCKET, FIRESTORE_MESSAGINGSENDERID, FIRESTORE_APPID } from './apikeys'
const firebaseConfig = {
    apiKey: FIRESTORE_APIKEY,
    authDomain: FIRESTORE_AUTHDOMAIN,
    projectId: FIRESTORE_PROJECTID,
    storageBucket: FIRESTORE_STORAGEBUCKET,
    messagingSenderId: FIRESTORE_MESSAGINGSENDERID,
    appId: FIRESTORE_APPID
  }

initializeApp(firebaseConfig)

const firestore = getFirestore()

const SHOPPINGITEMS = 'shoppingitems'

export { 
    firestore,
    collection, 
    addDoc,
    serverTimestamp, 
    MESSAGES,
    query,
    onSnapshot,
    orderBy,
    SHOPPINGITEMS
}