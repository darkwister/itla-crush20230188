
export default function Declaration({ author, destiny, description }) {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body p-0">
          <h5 className="card-title p-2">Algo de amor...</h5>
          <div>
            <p className="card-text text-info fw-bold">Author</p>
            <p>{author}</p>
          </div>
          <div>
            <p className="card-text text-info fw-bold">To</p>
            <p>{destiny}</p>
          </div>
          <div>
            <p className="card-text text-info fw-bold">Description</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
  