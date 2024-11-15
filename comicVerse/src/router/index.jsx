import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Artista from "../pages/Artista";
import Comic from "../pages/Comic";
import ConfigUsuario from "../pages/ConfigUsuario";
import LayoutPublic from "../layouts/LayoutPublic";
import Evento from "../pages/Evento";
import Personaje from "../pages/Personaje";
import Usuario from "../pages/Usuario";
import Contacto from "../pages/contacto/Contacto";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter ([
    {
        path:"/",
        element: <LayoutPublic /> ,
        errorElement: <NotFound />,
        children: [
            {
                // path:"/",
                index:true,
                element: <Inicio /> ,
            },
            {
                path:"/artista",
                element: <Artista />,
            },
            {
                path:"/comic",
                element: <Comic />,
            },
            {
                path:"/configusuario",
                element: <ConfigUsuario />,
            },
            {
                path:"/usuario",
                element: <Usuario />,
            },
            {
                path:"/personaje",
                element: <Personaje />,
            },
            {
                path:"/evento",
                element: <Evento />,
            },
            {
                path:"/contacto",
                element: <Contacto />,
            },

        ]
    },
]);