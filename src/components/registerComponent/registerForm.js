import { Form, useState } from "react";
import { successAlert, failureAlert } from '../../utils/alerts.js';
import { addUser } from "../../services/api";
import './registerForm.css'

export default function FormRegister(){
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [validPass, setValPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        if (password !== validPass) {
            failureAlert('Contraseña no coincide');
            return;
        }
        try {
            addUser({
                name: nombre,
                lastname: apellido,
                username: user,
                email: email,
                password: password
            });
            successAlert('Usuario registrado!');

            setUser("");
            setPassword("");
            setValPassword("");
            setNombre("");
            setApellido("");
            setEmail("");
        } catch (error) {
            failureAlert('Usuario no registrado!');
        }
    }

    return (
        <form onSubmit={createUser}>
            <div>
                <label>Nombre:</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </div>
            <div>
                <label>Apellido:</label>
                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
            </div>
            <div>
                <label>Usuario:</label>
                <input type="text" value={user} onChange={(e) => setUser(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Contraseña:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
                <label>Confirmar Contraseña:</label>
                <input type="password" value={validPass} onChange={(e) => setValPassword(e.target.value)} required />
            </div>
            <button type="submit">Registrar</button>
        </form>
    );
}



