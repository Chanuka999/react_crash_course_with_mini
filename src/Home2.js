import { useState } from "react";

const Home2 = () => {
  const [name, setName] = useState("chanuka");
  const handdleClick = () => {
    setName("Randitha");
  };
  return (
    <div>
      <h4>Home2 Page</h4>
      <button onClick={handdleClick}>Click me</button>
      <p>{name}</p>
    </div>
  );
};

export default Home2;
