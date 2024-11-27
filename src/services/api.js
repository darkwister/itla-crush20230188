import {collection, getDocs, getDoc, query, doc,  addDoc, deleteDoc, updateDoc, where} from "firebase/firestore";
import { db } from './firebaseConfig';

export const getUsers = async () => {
    const result = await getDocs(query(collection(db, 'usuarios')));
    return result;
}

export const addUser = async (data) => {
    await addDoc(collection(db, 'usuarios'), data);
}

export const authUser = async (email, pass) => {
    const qry = query(collection(db, 'usuarios'), where('email', '==', email), where('password', '==', pass));
    const result = await getDocs(qry);
    
    if (result.docs.length > 0)
        return result.docs[0].data();
    
    return false;
}

export const addLetter = async (data) => {
    await addDoc(collection(db, 'declaracion'), data);
}

export const getLetters = async (pub) => {
    let result;
    if (pub)
        result = await getDocs(query(collection(db, 'declaracion'), where('allowPublic', '==', pub)));
    else
        result = await getDocs(query(collection(db, 'declaracion')));
  
    return result.docs;
}