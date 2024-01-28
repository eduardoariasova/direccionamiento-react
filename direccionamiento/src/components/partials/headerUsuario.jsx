import React from "react";

function HeaderUsuario(){
    return(
        <div className="bg-light">
            <div class="container">
                <header class="d-flex justify-content-center py-3">
                <ul class="nav nav-pills">
                    <li className="nav-item"><a href="/cliente/home" className="nav-link active" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Mis productos</a></li>
                </ul>
                </header>
            </div>
        </div>
    );
}


export default HeaderUsuario;