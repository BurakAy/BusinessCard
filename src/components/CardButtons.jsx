import "../styles/CardButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const CardButtons = () => {
  const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;

  return (
    <div className="card--buttons_container">
      <button className="card--buttons_email">
        {envelopeIcon}
        Email
      </button>
      <button className="card--buttons_linkedin">
        {linkedinIcon}
        LinkedIn
      </button>
    </div>
  );
};

export default CardButtons;
