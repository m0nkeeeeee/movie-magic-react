import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} movie has been rated: ${hasLiked}`);
  }, [title]);

  useEffect(() => {
    console.log(`CARD RENDERED`);
  }, []);

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>
        {" "}
        {title} <br /> {count || null}{" "}
      </h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <h2>Functional Arrow Component</h2>
      <Card title="The Star Wars" rating={5} isCool={true} />
      <Card title="Avatar" rating={4} isCool={false} />
      <Card title="The Lion King" rating={4.5} isCool={true} />
      <Card title="Disclosure Day" rating={3.5} isCool={false} />
    </div>
  );
};

export default App;
