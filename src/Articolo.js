import { useState } from "react";
import data from "./data";

const Articolo = (props) => {
  const { toggle, onToggle } = props; // Ricevi la funzione e lo stato come prop

  const [article, setArticle] = useState(data);

  return (
    <>
      <button type="button" className={toggle ? "light-mode btn" : "dark-mode btn"} onClick={onToggle}>
        Change
      </button>
      <div className="row d-flex justify-content-center ">
        {article.map((el) => {
          const { id, title, body } = el;
          return (
            <div key={id} className={toggle ? "light-mode col-5 item shadow m-3 p-3 text-center rounded-3 w-45" : "dark-mode col-5 item shadow m-3 p-3 text-center rounded-3 w-45"}>
              <h5>{title}</h5>
              <hr></hr>
              <p>{body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Articolo;
