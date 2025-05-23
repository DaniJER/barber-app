import "../style-components/card.css";

const Card = ({ title, description, imgUrl }) => {
  return (
    <>
      <div className="card-style">
        <h3>{title}</h3>
        <img src={imgUrl} alt="cut photo" className="img-style" />
        <p>{description}</p>
      </div>
    </>
  );
};

export default Card;
