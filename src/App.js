import { useState } from "react";
import Articolo from "./Articolo";

function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle); // Cambia lo stato del toggle
  };

  return (
    <section className={toggle ? "light-mode section-center" : "dark-mode section-center"}>
      <div  className="container">
        <h2>DARK MODE APP</h2>
        <Articolo toggle={toggle} onToggle={handleToggle} />
      </div>
    </section>
  );
}

export default App;
