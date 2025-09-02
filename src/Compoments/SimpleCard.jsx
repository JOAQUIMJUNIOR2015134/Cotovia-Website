import { Link } from "react-router-dom";

function SimpleCard({ image, title, description }) {
  return (
    <div className="simple-card">
      <img src={image} alt={title} className="simple-card-image" />
      <h2 className="simple-card-title">{title}</h2>
      <p className="simple-card-description">{description}</p>
      <Link to={`/products/${title}`} className="simple-card-link">Ver Produto</Link>
    </div>
  );
}

export default SimpleCard;
