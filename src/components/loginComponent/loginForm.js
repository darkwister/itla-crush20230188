import { useState } from "react";
import { authUser } from '../../services/api';
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
        {getSession() && <Navigate replace to="/profile" />}
        <div className="container d-flex justify-content-center align-items-center min-vh-100 margin-auto mt-5">
          <form className="bg-light p-4 rounded shadow" style={{ maxWidth: '400px', width: '100%' }}>
            <div className="mb-6">
              <label htmlFor="exampleInputEmail4" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                onChange={e => setEmail(e.target.value)}
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
                required
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                onChange={e => setPassword(e.target.value)}
                id="exampleInputPassword1"
                required
              />
            </div>
  
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={authorization}
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
