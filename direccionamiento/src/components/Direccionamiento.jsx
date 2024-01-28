import React from "react";
import {Routes, Route, Outlet} from 'react-router-dom';
// Global
import HomeGlobal from "./paginas/webGlobal/homeGlobal";
import Faq from "./paginas/webGlobal/faq";
// Partials
import HeaderGlobal from "./partials/hederGlobal";
import FooterGlobal from "./partials/footerGlobal";
import HeaderAdmin from "./partials/headerAdmin";
import FooterAdmin from "./partials/footerAdmin";
import HeaderUsuario from "./partials/headerUsuario";
import FooterUsuario from "./partials/footerUsuario";
// Administrador
import HomeAdministrador from "./paginas/administrador/adminHome";
// Usuario
import UsuarioHome from "./paginas/usuario/usuarioHome";


function Direccionamiento(){
    
    
    
    
    function PlantillaGlobal(){
        return(
            <div>
                <HeaderGlobal />
                    <Outlet />
                <FooterGlobal />
            </div>
        )
    }

    function PlantillaUsuario(){
        return(
            <div>
                <HeaderUsuario />
                    <Outlet />
                <FooterUsuario />
            </div>
        )
    }

    function PlantillaAdministrador(){
        return(
            <div>
                <HeaderAdmin />
                    <Outlet />
                <FooterAdmin />
            </div>
        )
    }

    
    
    
    
    
    
    
    
    
    
    return (
            <Routes>

                {/* Global */}
                <Route path="/" element={<PlantillaGlobal/>} >
                    <Route index element={<HomeGlobal/>} />
                    <Route path="faq" element={<Faq />} />
                    {/* Todas las páginas que agrege aquí, comaprtirán HeaderGlobal y FooterGlobal */}
                </Route>

                {/* Usuario */}
                <Route path="/cliente" element={<PlantillaUsuario/>}>
                    <Route path="home" element={<UsuarioHome/>} />
                </Route>

                {/* Administrador */}
                <Route path="/administrador" element={<PlantillaAdministrador/>}>
                    <Route path="home" element={<HomeAdministrador/>} />
                </Route>

            </Routes>
    );

}

export default Direccionamiento;