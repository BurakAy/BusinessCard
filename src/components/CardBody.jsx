import "../styles/CardBody.css";

const CardBody = () => {
  return (
    <div className="card--body_container">
      <div className="card--body_section">
        <h3>About</h3>
        <p>
          I am a Frontend Engineer who enjoys the journey we're taken on during
          the software development life cycle. My favorite phase is
          'development' since I really enjoy writing and debugging code. I like
          to take on challenges because being challenged is when I grow and
          strengthen my skills as a developer.
        </p>
      </div>
      <div className="card--body_section">
        <h3>Skills</h3>
        <p>
          HTML, CSS/Sass, JS, React, JSON, SQL, APIs, npm/Yarn, Vite, Git,
          Figma, Jira
        </p>
      </div>
    </div>
  );
};

export default CardBody;
