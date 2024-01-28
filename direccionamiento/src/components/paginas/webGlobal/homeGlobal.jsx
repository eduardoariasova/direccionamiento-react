import React from "react";
import HeaderGlobal from "../../partials/hederGlobal";


function HomeGlobal(){


    return(
        <div>
            {/* Contenedor de Home */}
            <div class="bg-dark text-secondary px-4 py-5 text-center">
                <div class="py-5">
                    <h1 class="display-5 fw-bold text-white">Home</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="fs-5 mb-4">Descripción de página Home Global.</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Botón 1</button>
                        <button type="button" class="btn btn-outline-light btn-lg px-4">Botón 2</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeGlobal;