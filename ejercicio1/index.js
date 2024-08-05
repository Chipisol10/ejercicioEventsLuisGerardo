
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
}






