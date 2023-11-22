/*import { useState } from "react";
 */
import "./Index.css";
import Inicio from "../src/components/Escenarioinicial/Inicio";
import Linkeados from "../src/components/Enlaces/Linkeados";
import SolidGameCard from "./components/Escenarioinicial/SolidGameCard";

function App() {
  /*const [count, setCount] = useState(0);*/

  return (
    <>
      <Inicio />
      <SolidGameCard />
      <Linkeados />
    </>
  );
}

export default App;
