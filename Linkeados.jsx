import Inicio from "../Escenarioinicial/Inicio";
import Segundapagina from "../Videossegundo/Segundapagina";
import Tercerapagina from "../videostercero/Tercerapagina";
import { Route, Routes,BrowserRoutes } from "react-router-dom";
export default function Linkeados() {
  return (
    <>
    <BrowserRoutes>
      <Routes>
        <Route path="../Escenarioinicial/Inicio.jsx"></Route>
        <Route path="../Videossegundo/segundapagina"></Route>
        <Route path="../Videostercero/Tercerapagina"></Route>
      </Routes>
      </BrowserRoutes>
      <Inicio />
    </>
  );
}
