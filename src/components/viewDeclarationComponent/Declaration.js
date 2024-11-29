import './Declaration.css'
export default function Declaration({ author, destiny, description }) {
    return (
      <div className="card " style={{ width: "18rem" }}>
        <div className="card-body p-0">
          <h5 className="card-title p-2 text-white">Algo de amor...</h5>
          <div>
            <p className="card-headlines text-info fw-bold">Autor:</p>
            <p className="card-content">{author}</p>
          </div>
          <div>
            <p className="card-headlines text-info fw-bold">Para:</p>
            <p className="card-content">{destiny}</p>
          </div>
          <div>
            <p className="card-headlines text-info fw-bold">Declaracion</p>
            <p className="card-content">{description}</p>
          </div>
        </div>
      </div>
    );
  }
  