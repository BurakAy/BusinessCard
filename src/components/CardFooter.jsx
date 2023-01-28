import "../styles/CardFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

const CardFooter = () => {
  const githubIcon = <FontAwesomeIcon icon={faSquareGithub} />;
  return (
    <div className="card--footer_container">
      <a href="https://github.com/BurakAy" target="_blank">
        {githubIcon}
      </a>
    </div>
  );
};

export default CardFooter;
