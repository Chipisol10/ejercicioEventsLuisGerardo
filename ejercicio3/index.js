let notas = [
    { id: 1, titulo: "tarea 1", texto: "Esta es la primera tarea", realizada: false },
    { id: 2, titulo: "tarea 2", texto: "Esta es la segunda tarea", realizada: true }
];

let idGlobal = 2;

function crearInterfaz() {
    const container = document.getElementById('container');
    container.innerHTML = `
        <div class="container mt-5 bg-warning">
            <h1 class="mb-4 text-center">Aplicación de Notas</h1>
            <div class="row mb-3">
                <div class="col-md-12">
                    <input type="text" id="titulo" class="form-control mb-2 text-center fs-4 text-bg-light" placeholder="Título">
                    <textarea id="texto" class="form-control mb-2 text-center  fs-4 text-bg-ligth" placeholder="Texto de la nota"></textarea>
                    <button onclick="guardarNota()" class="btn btn-dark me-2">Guardar</button>
                    <button onclick="limpiarCampos()" class="btn btn-secondary">Limpiar</button>
                </div>
                <div class="col-md-12 mt-3">
                    <input type="text" id="filtro-texto" class="form-control mb-2 text-center text-bg-light" placeholder="Buscar notas" oninput="aplicarFiltros()">
                    <div class="form-check form-switch">
                        <input type="checkbox" id="filtro-realizadas" class="form-check-input bg-secondary" onchange="aplicarFiltros()">
                        <label class="form-check-label" for="filtro-realizadas">Mostrar solo las tareas realizadas</label>
                    </div>
                </div>
            </div>
            <div id="contenedor-notas" class="row"></div>
        </div>
    `;
}

function pintarNotas(notasFiltradas = notas) {
    const contenedor = document.getElementById("contenedor-notas");
    contenedor.innerHTML = "";

    if (notasFiltradas.length === 0) {
        contenedor.innerHTML = '<div class="col-12 text-center"><p class="alert alert-info">NO HAY NOTAS PARA MOSTRAR</p></div>';
        return;
    }

    notasFiltradas.forEach(nota => {
        const notaElement = document.createElement('div');
        notaElement.className = 'col-md-4 mb-3';
        notaElement.innerHTML = `
            <div class="card bg-dark">
                <div class="card-body">
                    <h5 class="card-title text-white">${nota.titulo}</h5>
                    <p class="card-text text-white">${nota.texto}</p>
                    <div class="form-check mb-2 text-white">
                        <input type="checkbox" class="form-check-input bg-secondary" ${nota.realizada ? 'checked' : ''} onchange="marcarRealizada(${nota.id})">
                        <label class="form-check-label">Realizada</label>
                    </div>
                    <button onclick="borrarNota(${nota.id})" class="btn btn-warning btn-sm">Borrar nota</button>
                </div>
            </div>
        `;
        contenedor.appendChild(notaElement);
    });
}

function agregarNota(titulo, texto) {
    idGlobal++;
    const nuevaNota = { id: idGlobal, titulo, texto, realizada: false };
    notas.push(nuevaNota);
}

function guardarNota() {
    const titulo = document.getElementById("titulo").value;
    const texto = document.getElementById("texto").value;
    
    if (titulo.trim() !== "" && texto.trim() !== "") {
        agregarNota(titulo, texto);
        aplicarFiltros();
        limpiarCampos();
    } else {
        alert("Por favor, completa todos los campos");
    }
}

function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    aplicarFiltros();
}

function limpiarCampos() {
    document.getElementById("titulo").value = "";
    document.getElementById("texto").value = "";
}

function marcarRealizada(id) {
    const nota = notas.find(nota => nota.id === id);
    if (nota) {
        nota.realizada = !nota.realizada;
        aplicarFiltros();
    }
}

function filtrarPorRealizada(array) {
    return array.filter(nota => nota.realizada);
}

function filtrarPorTexto(array, texto) {
    if (!texto) return array;
    return array.filter(nota => 
        nota.titulo.toLowerCase().includes(texto.toLowerCase()) || 
        nota.texto.toLowerCase().includes(texto.toLowerCase())
    );
}

function aplicarFiltros() {
    const textoFiltro = document.getElementById("filtro-texto").value;
    const soloRealizadas = document.getElementById("filtro-realizadas").checked;

    let notasFiltradas = [...notas];

    if (soloRealizadas) {
        notasFiltradas = filtrarPorRealizada(notasFiltradas);
    }

    notasFiltradas = filtrarPorTexto(notasFiltradas, textoFiltro);

    pintarNotas(notasFiltradas);
}

document.addEventListener("DOMContentLoaded", () => {
    crearInterfaz();
    aplicarFiltros();
});


