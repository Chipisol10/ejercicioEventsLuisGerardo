document.addEventListener('DOMContentLoaded', function() {

    const container = document.createElement('div');
    // container.className = 'container mt-5';

    container.innerHTML = `
        <h1 class="text-center mb-4">Convertidor de Moneda</h1>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="mb-3">
                    <label for="amount" class="form-label">Monto</label>
                    <input type="number" class="form-control" id="amount" placeholder="Ingrese el monto">
                </div>
                <div class="mb-3">
                    <label for="conversion" class="form-label">Convertir</label>
                    <select class="form-select" id="conversion">
                        <option value="dollar-to-peso">De Dólar a Peso</option>
                        <option value="peso-to-dollar">De Peso a Dólar</option>
                    </select>
                </div>
                <button class="btn btn-primary w-100" id="convertBtn">Convertir</button>
                <h2 class="mt-3 text-center" id="result"></h2>
            </div>
        </div>
    `;

    
    document.body.appendChild(container);


    function convert() {
        const amount = parseFloat(document.getElementById('amount').value);
        const conversion = document.getElementById('conversion').value;
        const exchangeRateDollarToPeso = 1340; 
        const exchangeRatePesoToDollar = 1 / exchangeRateDollarToPeso;
        let result;
        if (isNaN(amount) || amount <= 0) {
            result = 'Por favor, ingrese un monto válido';
        } else {
            if (conversion === 'dollar-to-peso') {
                result = `${amount} dólares son ${(amount * exchangeRateDollarToPeso).toFixed(2)} pesos.`;
            } else if (conversion === 'peso-to-dollar') {
                result = `${amount} pesos son ${(amount * exchangeRatePesoToDollar).toFixed(2)} dólares.`;
            }
        }
        document.getElementById('result').textContent = result;
    }

    document.getElementById('convertBtn').addEventListener('click', convert);
});

