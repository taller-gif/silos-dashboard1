function actualizar(topic, valor) {

    // 🔧 Ajuste de rango (ejemplo: 0 a 100 toneladas)
    valor = Math.max(0, Math.min(100, valor));

    let id = "";

    if (topic === "silos/esp32/reading1") id = "c1";
    if (topic === "silos/esp32/reading2") id = "c2";
    if (topic === "silos/esp32/reading3") id = "c3";
    if (topic === "silos/esp32/reading4") id = "c4";

    const el = document.getElementById(id);

    // 🎨 COLOR SEGÚN NIVEL
    let color = "red";

    if (valor >= 20) {
        color = "#22c55e"; // verde
    }

    // 📊 PROGRESO (si 100 tn = lleno)
    let porcentaje = valor; 

    el.style.background =
        `conic-gradient(${color} ${porcentaje}%, #0f172a ${porcentaje}%)`;

    // 🧮 ACTUALIZAR TEXTO
    el.querySelector(".valor").innerText = Math.round(valor);
}