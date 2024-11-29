import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { addDeclaration, getUsers } from '../../services/api';
import { getSession } from '../../services/apiSession';
import { failureAlert, successAlert } from '../../utils/alerts';

export default function DeclarationForm() {
    const [dest, setDest] = useState('cant');
    const [customDest, setCustomDest] = useState('');
    const [words, setWords] = useState('');
    const [pub, setPublic] = useState(true);
    const [anon, setAnon] = useState(false);
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      async function listUsers() {
        const us = await getUsers();
        setUsers(us.docs.map((doc) => doc.data()));
      }
      listUsers();
    }, []);
  
    const insertLetter = async (e) => {
      e.preventDefault();
  
      const destinatary = dest === 'other' ? customDest : dest;
  
      if (!destinatary || destinatary === 'cant') {
        failureAlert('Destinatario no seleccionado');
        return;
      }
  
      try {
        const session = getSession();
        await addDeclaration({
          destinatary,
          body: words,
          allowPublic: pub,
          anonymous: anon,
          author: anon ? 'Anonymous' : `${session.name} ${session.lastname}`,
        });
        successAlert('Declaracion registrada!');
      } catch (error) {
        failureAlert('Error al registrar');
      }
    };
  
    return (
      <>
        {!getSession() && <Navigate replace to="/view-declaration" />}
        <form className="mx-auto my-5 border border-info shadow-lg p-4">
          <div className="mb-3 mu-5">
            <label htmlFor="destinatarySelect" className="form-label">
              Destinatario
            </label>
            <select
              id="destinatarySelect"
              className="form-select"
              value={dest}
              onChange={(e) => setDest(e.target.value)}
              aria-label="Default select example"
            >
              <option value="cant">Selecciona un usuario</option>
              {users.map((element, index) => (
                <option key={index} value={`${element.name} ${element.lastname}`}>
                  {`${element.name} ${element.lastname}`}
                </option>
              ))}
              <option value="other">Personalizado...</option>
            </select>
            {dest === 'other' && (
              <div className="mb-3">
                <br />
                <label htmlFor="customDestinatary" className="form-label">
                  Destinatario personalizado
                </label>
                <input
                  id="customDestinatary"
                  type="text"
                  value={customDest}
                  onChange={(e) => setCustomDest(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="wordsTextarea" className="form-label">
              Tus bellas palabras
            </label>
            <textarea
              id="wordsTextarea"
              value={words}
              onChange={(e) => setWords(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-check">
            <div className="check-public">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckChecked"
                checked={pub}
                onChange={() => setPublic(!pub)}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Quieres hacer publica esta declaracion?
              </label>
            </div>
            <div className="check-anonymous">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckChecked2"
                checked={anon}
                onChange={() => setAnon(!anon)}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked2">
                Quieres hacerla anonima?
              </label>
            </div>
          </div>
          <div className="button-register w-100 d-flex justify-content-center">
            <button
              type="submit"
              onClick={insertLetter}
              className="btn btn-primary form-btn-submit mt-3"
            >
              Send
            </button>
          </div>
        </form>
      </>
    );
  }