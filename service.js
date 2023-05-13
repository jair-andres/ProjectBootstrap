function botonActive(number) {
    switch (number) {
        case '1':
            result = `<button class="btn btn-light" type="button" onclick="botonNotActive('1');" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                Descripción
            </button>`;
            document.getElementById("header-buton-one").innerHTML = result; 
            break;

        case '2':
            result = `<button class="btn btn-light" type="button" onclick="botonNotActive('2');" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                Utilidad
            </button>`;
            document.getElementById("header-buton-two").innerHTML = result; 
            break;

        case '3':
            result = `<button class="btn btn-light" type="button" onclick="botonNotActive('3');" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Caracteristicas
            </button>`;
            document.getElementById("header-buton-three").innerHTML = result; 
            break;

        case '4':
            result = `<button class="btn btn-light" type="button" onclick="botonNotActive('4');" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                Proceso
            </button>`;
            document.getElementById("header-buton-four").innerHTML = result; 
            break;
    
        default:
            break;
    }
    
}

function botonNotActive(number) {
    switch (number) {
        case '1':
            result = `<button class="btn btn-outline-light" type="button" onclick="botonActive('1');" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                Descripción
            </button>`;
            document.getElementById("header-buton-one").innerHTML = result; 
            break;

        case '2':
            result = `<button class="btn btn-outline-light" type="button" onclick="botonActive('2');" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                Utilidad
            </button>`;
            document.getElementById("header-buton-two").innerHTML = result; 
            break;

        case '3':
            result = `<button class="btn btn-outline-light" type="button" onclick="botonActive('3');" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Caracteristicas
            </button>`;
            document.getElementById("header-buton-three").innerHTML = result; 
            break;
        
        case '4':
            result = `<button class="btn btn-light" type="button" onclick="botonActive('4');" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                Proceso
            </button>`;
            document.getElementById("header-buton-four").innerHTML = result; 
            break;
            
        default:
            break;
    }
}