import Spinner from "react-bootstrap/Spinner";
import "./Loader.css";

const Loader = ({ texto }) => {
  return (
    <div className="loader-container">
      <Spinner animation="border" className="loader-spinner" />
      {texto && <p className="loader-text">{texto}</p>}
    </div>
  );
};

export default Loader;