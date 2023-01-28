import "../styles/CardButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const CardButtons = () => {
  const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;

  return (
    <div className="card--buttons_container">
      <a href="mailto:burakadmr@gmail.com" className="card--buttons_email">
        {envelopeIcon}
        Email
      </a>
      <a
        href="https://www.linkedin.com/in/aydemirburak"
        target="_blank"
        className="card--buttons_linkedin"
      >
        {linkedinIcon}
        LinkedIn
      </a>
    </div>
  );
};

export default CardButtons;
