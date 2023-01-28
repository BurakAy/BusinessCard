import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardButtons from "./CardButtons";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import "../styles/App.css";

const App = () => {
  return (
    <div className="App">
      <CardImage />
      <CardTitle />
      <CardButtons />
      <CardBody />
      <CardFooter />
    </div>
  );
};

export default App;
