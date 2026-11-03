(function iniciarAplicacion() {
  function iniciarCambioDeTema() {
    const botonTema = document.getElementById('boton-tema');
    const iconoTema = document.getElementById('icono-tema');

    if (!botonTema || !iconoTema) {
      return;
    }

    function actualizarTema(esOscuro) {
      iconoTema.textContent = esOscuro ? 'light_mode' : 'dark_mode';
      botonTema.title = esOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
      botonTema.setAttribute(
        'aria-label',
        esOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
      );
    }

    actualizarTema(document.documentElement.classList.contains('dark'));

    botonTema.addEventListener('click', function () {
      const esOscuro = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', esOscuro ? 'dark' : 'light');
      actualizarTema(esOscuro);
    });
  }
  iniciarCambioDeTema();
})();

document.addEventListener('DOMContentLoaded', function() {
  var elementosCollapsible = document.querySelectorAll('.collapsible');
  if (elementosCollapsible.length > 0 && typeof M !== 'undefined') {
    M.Collapsible.init(elementosCollapsible);
  }
});
