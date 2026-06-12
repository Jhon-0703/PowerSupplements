function calcularProteina() {

    // Obtener el peso ingresado por el usuario
    let peso = document.getElementById("peso").value;

    // Validar que el usuario escriba un peso válido
    if (peso === "" || peso <= 0) {

        document.getElementById("resultado").innerHTML =
            "⚠️ Por favor ingrese un peso válido.";

        return;
    }

    // Conversión a número
    peso = Number(peso);

    // Fórmulas fitness básicas
    let proteina = peso * 2;
    let agua = (peso * 35) / 1000;
    let calorias = peso * 35;

    // Mostrar resultados
    document.getElementById("resultado").innerHTML =

        `
        <h3>Resultados Fitness</h3>

        <p><strong>Peso:</strong> ${peso} kg</p>

        <p><strong>Proteína diaria:</strong> ${proteina} g</p>

        <p><strong>Agua recomendada:</strong> ${agua.toFixed(1)} L</p>

        <p><strong>Calorías aproximadas:</strong> ${calorias} kcal</p>
        `;
}