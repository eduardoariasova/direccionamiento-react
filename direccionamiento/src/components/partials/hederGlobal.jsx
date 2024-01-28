import React from "react";

function HeaderGlobal(){
    return(
        <div className="bg-dark">
            <div class="container">
                <header class="d-flex justify-content-center py-3">
                <ul class="nav nav-pills">
                    <li className="nav-item"><a href="/" className="nav-link active" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="/faq" className="nav-link">FAQs</a></li>
                </ul>
                </header>
            </div>
        </div>
    );
}


export default HeaderGlobal;