import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../services/firebaseConfig"
 
const handleSubmit = async (user, password, nombre, apellido, email) => {
    const ref = collection(firestore, "usuarios") // Firebase creates this automatically
 
    let data = {
        user: user,
        password: password,
        nombre: nombre,
        apellido: apellido,
        email: email
    };
    
    try {
        await addDoc(ref, data);
    } catch(err) {
        console.log(err)
    }
}
 
export default handleSubmit