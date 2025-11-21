(function () {
    const cuadro = document.getElementById('cuadro');
    const mensaje = document.getElementById('mensaje');
    let dentro = false;
    function setMensaje(text) {
        mensaje.textContent = text;
    }
    cuadro.addEventListener('mouseenter', () => {
        dentro = true;
        setMensaje('Dentro del div — mueve el mouse para ver coordenadas.');
    });
    cuadro.addEventListener('mousemove', (e) => {
        const rect = cuadro.getBoundingClientRect();
        const x = Math.round(e.clientX - rect.left);
        const y = Math.round(e.clientY - rect.top);
        const xClamped = Math.max(0, Math.min(200, x));
        const yClamped = Math.max(0, Math.min(200, y));
        setMensaje(`Dentro del div — X: ${xClamped}px, Y: ${yClamped}px`);
    });
    cuadro.addEventListener('mouseleave', () => {
        dentro = false;
        setMensaje('El mouse está fuera del div.');
    });
    window.addEventListener('mousemove', (e) => {
        if (!dentro) {
        const gx = Math.round(e.clientX);
        const gy = Math.round(e.clientY);
        setMensaje(`Fuera del div — Coordenadas globales: X: ${gx}px, Y: ${gy}px`);
        }
    });
    setMensaje('El mouse está fuera del div.');
})();