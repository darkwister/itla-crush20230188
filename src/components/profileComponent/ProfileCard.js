import { Link } from 'react-router-dom';
import { getSession } from '../../services/apiSession';
import './ProfileCard.css';

export default function ProfileCard() {
    const data = getSession();

  return (
      <>
    <form className="mx-auto my-0 border border-info shadow-lg text-info p-4">
        <div className="mb-3 text-center">
            <label className="form-label fs-5">{data.name ? data.name :'Nombre'}</label>
        </div>

        <div className="mb-3 text-center">
            <label className="form-label fs-5">{data.lastname ? data.lastname :'Apellido'}</label>
        </div>

        <div className="mb-3 text-center">
            <label className="form-label fs-5">{data.email ? data.email :'Email'}</label>
        </div>

        <div className="text-center">
            <label className="form-label fs-5">{data.username ? data.username:'Username'}</label>
        </div>
    </form>
    <div className="button-register w-100 d-flex justify-content-center">
        <Link to="/do-declaracion" type="submit" className="btn btn-primary form-btn-submit mt-3">Hacer una declaracion</Link>
    </div>
    
    </>
  )
}