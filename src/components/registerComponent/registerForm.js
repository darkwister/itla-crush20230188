import { useState } from "react";
import { successAlert, failureAlert } from '../../utils/alerts.js';
import { addUser, checkEmailExists } from "../../services/api";
import './Forms.css'

export default function FormRegister(){
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [validPass, setValPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");

    const createUser = async (e) => {
        e.preventDefault();
        if (password !== validPass) {
            failureAlert('Contraseña no coincide');
            return;
        }
        try {
           const emailExists = await checkEmailExists(email);
           if (emailExists) {
               failureAlert('Este correo ya está registrado.');
               return;
           }

           await addUser({
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
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <form
            onSubmit={createUser}
            className="bg-light p-4 rounded shadow"
            style={{ maxWidth: '500px', width: '100%' }}
          >
            <h2 className="text-center mb-4">Registro</h2>
            
            <div className="mb-3">
              <label className="form-label">Nombre:</label>
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
    
            <div className="mb-3">
              <label className="form-label">Apellido:</label>
              <input
                type="text"
                className="form-control"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required
              />
            </div>
    
            <div className="mb-3">
              <label className="form-label">Usuario:</label>
              <input
                type="text"
                className="form-control"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
              />
            </div>
    
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
    
            <div className="mb-3">
              <label className="form-label">Contraseña:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
    
            <div className="mb-3">
              <label className="form-label">Confirmar Contraseña:</label>
              <input
                type="password"
                className="form-control"
                value={validPass}
                onChange={(e) => setValPassword(e.target.value)}
                required
              />
            </div>
    
            <div className="text-center">
              <button type="submit" className="btn btn-primary w-100">
                Registrar
              </button>
            </div>
          </form>
        </div>
      );
}