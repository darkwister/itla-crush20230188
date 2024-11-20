import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../services/firebase"
 
const handleSubmit = (user, password) => {
    const ref = collection(firestore, "usuarios") // Firebase creates this automatically
 
    let data = {
        user: user,
        password: password
    }
    
    try {
        addDoc(ref, data)
    } catch(err) {
        console.log(err)
    }
}
 
export default handleSubmit