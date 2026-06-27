import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Servics from "./pages/Servicos";
import Pacotes from "./pages/Pacotes";
import Cronograma from "./pages/Cronograma";
import Espaco from "./pages/Espaco"

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/Servicos",
        element: <Servics />
    },
    {
        path: "/Pacotes",
        element: <Pacotes />
    },
    {
        path: "/Cronograma",
        element: <Cronograma />
    },
    {
        path: "/Espaco",
        element: <Espaco />
    }

])

export default router