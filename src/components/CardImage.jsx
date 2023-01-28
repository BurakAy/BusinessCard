import "../styles/CardImage.css";
import BurakImage from "../assets/Burak_Ephesus.jpg";

function CardImage() {
  return (
    <div className="card--image_container">
      <img
        src={BurakImage}
        alt="Burak at Ephesus, Turkey"
        className="card--image"
      />
    </div>
  );
}

export default CardImage;
