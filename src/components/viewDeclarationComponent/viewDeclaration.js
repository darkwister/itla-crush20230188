import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDeclaration } from "../../services/api";
import { getSession } from "../../services/apiSession";
import Declaration from "./Declaration";

export default function ViewDeclaration() {
    const [declaraciones, setDeclaraciones] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchDeclarations() {
        setLoading(true);
        try {
          const isPublic = !getSession();
          const result = await getDeclaration(isPublic);
  
          const data = result.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
  
          setDeclaraciones(data);
        } catch (error) {
          console.error("Error fetching declarations:", error);
        } finally {
          setLoading(false);
        }
      }
  
      fetchDeclarations();
    }, []);
  
    return (
      <div className="container-fluid w-75 mx-auto p-0">
        <p className="text-center fs-3">¡El amor está en el aire!</p>
        <div className="row letters-btns-bar mb-5">
          <Link
            to="/do-declaration"
            className="btn btn-primary text-center col-sm-12 col-md-12 col-lg-3 col-xxl-2 my-lg-0 my-1 mx-1"
          >
            Haz tu declaración
          </Link>
        </div>
        {loading ? (
          <p className="text-center">Cargando declaraciones...</p>
        ) : declaraciones.length > 0 ? (
          <div className="row justify-content-center">
            {declaraciones.map((declaration) => (
              <div
                className="col-xl-4 col-lg-6 col-xxl-4 col-xxxl-3 mb-3"
                key={declaration.id}
              >
                <Declaration
                  author={declaration.author}
                  destiny={declaration.destinatary}
                  description={declaration.body}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No hay declaraciones disponibles</p>
        )}
      </div>
    );
  }