import "./index.css";
import "./App.css";
import RandomQuoteGenerator from "./Components/RandomQuoteGenerator";
import "./Components/RandomQuoteGenerator.css";

const App = () => {
  return (
    <div className="wrapper">
      <div className="navbar">
        <h1>Random Quote Generator</h1>
      </div>
      <div className="quote-window">
        <RandomQuoteGenerator />
      </div>
    </div>
  );
};

export default App;
