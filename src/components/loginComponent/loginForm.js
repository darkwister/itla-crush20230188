import './loginForm.css';
import { useState } from "react";
import { authUser, getUsers } from '../../services/api';
import { successAlert, failureAlert } from '../../utils/alerts';
import { Navigate } from 'react-router-dom';
import { getSession, insertSession } from '../../services/apiSession';

export default function LoginForm(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const authorization = async (e) =>{
        e.preventDefault();

        const res = await authUser(email, password)

        if(res)
            insertSession(res) ? successAlert("Inicio de sesion exitoso!"): failureAlert("Usuario no encontrado");
        else
            failureAlert("Usuario no encontrado")
    }

    return (
        <>
          {getSession() && <Navigate replace to="/" />}
          <form>
            <div>
              <label htmlFor="exampleInputEmail4">Email</label>
              <input 
                type="email" 
                onChange={e => setEmail(e.target.value)} 
                id="exampleInputEmail3" 
                aria-describedby="emailHelp" 
                required 
              />
            </div>
    
            <div>
              <label htmlFor="exampleInputPassword1">Contraseña</label>
              <input 
                type="password" 
                onChange={e => setPassword(e.target.value)} 
                id="exampleInputPassword1" 
                required 
              />
            </div>
    
            <div>
              <button 
                type="submit" 
                onClick={authorization}
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </>
      );
}