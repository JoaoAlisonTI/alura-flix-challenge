import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NovoVideo from "pages/NovoVideo";
import PaginaBase from "pages/PaginaBase";
import NaoEncontrada from "pages/NaoEncontrada";
import Player from "pages/Player";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="addvideo" element={<NovoVideo />} />
          <Route path=":id" element={<Player/>} />
          <Route path="*" element={<NaoEncontrada/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default AppRoutes;
