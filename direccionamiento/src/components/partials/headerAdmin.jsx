import React from "react";

function HeaderAdmin(){
    return(
        <div className="bg-warning">
            <div class="container">
                <header class="d-flex justify-content-center py-3">
                <ul class="nav nav-pills">
                    <li className="nav-item"><a href="/administrador/home" className="nav-link active" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Mis clientes</a></li>
                </ul>
                </header>
            </div>
        </div>
    );
}


export default HeaderAdmin;