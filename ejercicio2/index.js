document.addEventListener('DOMContentLoaded', function() {

    const container = document.createElement('div');
    // container.className = 'container mt-5';

    container.innerHTML = `
    <div class="container d-flex justify-content-center align-items-center min-vh-100 min-vw-100 bg-warning">
    <div id="contenedor" class="card p-4 text-warning shadow w-75 w-md-75 w-lg-50 bg-dark">
        <h1 class="text-center mb-4">Convertidor de Moneda</h1>
        <div class="row justify-content-center">
            <div class="col-md-6 fs-3">
                <div class="mb-3 text-warning text-center">
                    <label for="cantidad" class="form-label">Monto</label>
                    <input type="number" class="form-control" id="cantidad" placeholder="Ingrese el monto">
                </div>
                <div class="mb-3 text-warning text-center">
                    <label for="conversion" class="form-label">Convertir</label>
                    <select class="form-select" id="conversion">
                        <option value="dollar-to-peso">De Dólar a Peso</option>
                        <option value="peso-to-dollar">De Peso a Dólar</option>
                    </select>
                </div>
                <button class="btn btn-warning text-dark w-100 fs-5" id="convertBtn">Convertir</button>
                <h2 class="mt-3 text-center text-warning" id="result"></h2>
            </div>
        </div>
    `;

    
    document.body.appendChild(container);


    function convert() {
        const cantidad = parseFloat(document.getElementById('cantidad').value);
        const conversion = document.getElementById('conversion').value;
        const exchangeRateDollarToPeso = 1340; 
        const exchangeRatePesoToDollar = 1 / exchangeRateDollarToPeso;
        let result;
        if (isNaN(cantidad) || cantidad <= 0) {
            result = 'Por favor, ingrese un monto válido';
        } else {
            if (conversion === 'dollar-to-peso') {
                result = `${cantidad} dólares son ${(cantidad * exchangeRateDollarToPeso).toFixed(2)} pesos.`;
            } else if (conversion === 'peso-to-dollar') {
                result = `${cantidad} pesos son ${(cantidad * exchangeRatePesoToDollar).toFixed(2)} dólares.`;
            }
        }
        document.getElementById('result').textContent = result;
    }

    document.getElementById('convertBtn').addEventListener('click', convert);
});

