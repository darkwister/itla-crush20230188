import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../services/firebase"
 
const handleSubmit = async (user, password) => {
    const ref = collection(firestore, "usuarios") // Firebase creates this automatically
 
    let data = {
        user: user,
        password: password
    };
    
    try {
        await addDoc(ref, data);
    } catch(err) {
        console.log(err)
    }
}
 
export default handleSubmit