import { Link } from "react-router-dom";


export default function mainScreen(){
    return (
        <div className="container-fluid mainScreen-component p-0 m-0 me-0 ms-0 d-flex flex-column">
          <div className="home-btn-txt">
            <p className="text-info fs-3">
              Dedicale unas palabras a ese ITLASIAN@ que te gusta!
            </p>
              <Link to="/letters">
                <div>
                  Ver declaraciones
                </div>
              </Link>
            <p>Declaratele a esa persona que te gusta, 
            declaralo al mundo de forma publica o 
            ser mas discreto haciendolo de forma anonima.
            TÚ decides como mostrar tu amor</p>
          </div>
        </div>
      )
}