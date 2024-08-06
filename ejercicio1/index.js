
document.addEventListener('DOMContentLoaded', function () {
    const container = document.createElement('div');
    // container.className = 'container mt-5';

    container.innerHTML = `
      <div class="container d-flex justify-content-center align-items-center min-vh-100 min-vw-100 bg-info">
    <div id="contenedor" class="card p-4 shadow w-75 w-md-75 w-lg-50 bg-primary">
        <h1 class="card-title text-center">Calculadora de IMC</h1>
        <div class="form-group text-center fs-3">
            <label for="weight">Peso (kg):</label>
            <input type="number" id="weight" class="form-control text-center" step="0.1">
        </div>
        <div class="form-group text-center fs-3">
            <label for="height">Altura (cm):</label>
            <input type="number" id="height" class="form-control text-center" step="0.1">
        </div>
        <button class="btn btn-info btn-block mt-5 fs-2" onclick="calculateBMI()">Calcular IMC</button>
        <div id="result" class="mt-3 text-center">
            <label for="height"></label>
            <input type="number" class="form-control" step="0.1">
        </div>
    </div>
</div>

    `;

    document.body.appendChild(container);
});

function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        document.getElementById('result').innerText = `Tu IMC es: ${bmi}`;
    } else {
        document.getElementById('result').innerText = 'Por favor, ingresa valores válidos.';
    }
};






