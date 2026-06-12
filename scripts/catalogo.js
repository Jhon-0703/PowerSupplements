function mostrarInfo(producto) {

    if (producto === "whey") {

        alert(
            "Whey Protein:\n\n" +
            "• Favorece el crecimiento muscular.\n" +
            "• Ayuda a la recuperación.\n" +
            "• Ideal después del entrenamiento."
        );
    }

    else if (producto === "creatina") {

        alert(
            "Creatina:\n\n" +
            "• Incrementa fuerza y potencia.\n" +
            "• Mejora el rendimiento físico.\n" +
            "• Uno de los suplementos más estudiados."
        );
    }

    else if (producto === "preentreno") {

        alert(
            "Pre Entreno:\n\n" +
            "• Mayor energía.\n" +
            "• Más concentración.\n" +
            "• Reduce la sensación de fatiga."
        );
    }

}

function recomendarSuplemento(objetivo) {

    let mensaje = "";

    if (objetivo === "masa") {

        mensaje =
            "💪 Recomendación: Whey Protein + Creatina para ganar masa muscular.";

    }

    else if (objetivo === "fuerza") {

        mensaje =
            "🏋️ Recomendación: Creatina Monohidratada para mejorar fuerza y potencia.";

    }

    else if (objetivo === "energia") {

        mensaje =
            "⚡ Recomendación: Pre Entreno para mejorar energía y concentración.";

    }

    document.getElementById("recomendacion").innerHTML =

        `
        <h3>${mensaje}</h3>
        `;
}