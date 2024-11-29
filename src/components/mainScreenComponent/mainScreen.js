import { Link } from "react-router-dom";
import './mainScreen.css'

export default function MainScreen(){
    return (
        <div>
          <div className="main-container">
            <p className="headline">
              Dedicale unas palabras a ese ITLASIAN@ que te gusta!
            </p>
            <div className="link-container">
              <Link to="/declaraciones" className="btn">
                  Ver declaraciones
              </Link> 
            </div>
            <p className="description">Declaratele a esa persona que te gusta, 
            declaralo al mundo de forma publica o 
            ser mas discreto haciendolo de forma anonima. <br></br>
            <span className="highlight">TÚ decides como mostrar tu amor</span></p>
          </div>
        </div>
      )
}