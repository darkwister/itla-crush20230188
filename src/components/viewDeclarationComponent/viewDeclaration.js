import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDeclaration } from "../../services/api";
import { getSession } from "../../services/apiSession";
import Declaration from "./Declaration";
import './viewDeclaration.css';

const ViewAllDeclaration = (declaracion) => {
    let counter = 0;

  return (
    <div>
      <div className="row justify-content-center">
      {declaracion && declaracion.length > 0
          ? declaracion.map((element) => {
              counter += 1;
              return (
                <div className="col-xl-4 col-lg-6 col-xxl-4 col-xxxl-3" key={counter}>
                  <Declaration
                    author={element.author}
                    to={element.destinatary}
                    description={element.body}
                  />
                </div>
              );
            })
          : "No hay declaraciones"}
      </div>
    </div>
  );
}

export default function ViewDeclaration() 
{
  const [cardAll, setCardAll] = useState(true);
  const [declaracion, setDeclaracion] = useState([]);

  useEffect(() => {
    async function settingDeclarations() {
      let pub = true;
      if (getSession()) pub = false;

      const result = await getDeclaration(pub);

      const data = result.map((doc) => ({
        id: doc.id,
        ...doc.data(), 
      }));

      setDeclaracion(data);
    }

    settingDeclarations();
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      setCardAll(true);
    }
  }, []);

  return (
    <div className="container-fluid w-75 mx-auto p-0">
      <p className="text-center fs-3">
        ¡El amor está en el aire!
      </p>
      <div className="row letters-btns-bar">
        <Link
          to="/do-declaration"
          className="btn btn-primary col-sm-12 col-md-12 col-lg-3 col-xxl-2 my-lg-0 my-1 mx-1"
        >
          Haz tu declaración
        </Link>
      </div>
      {cardAll && <ViewAllDeclaration declaracion={declaracion} />}
    </div>
  );
}