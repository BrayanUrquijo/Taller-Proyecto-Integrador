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

// Interacción en JavaScript: mostrar u ocultar el PDF de cada avance
document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.boton-visor').forEach(function (boton) {
		boton.addEventListener('click', function () {
			var visor = document.getElementById(boton.getAttribute('aria-controls'));
			var iframe = visor.querySelector('.visor-documento');
			var estabaAbierto = boton.getAttribute('aria-expanded') === 'true';

			// El PDF se carga solo la primera vez que se muestra
			if (!estabaAbierto && !iframe.getAttribute('src')) {
							iframe.setAttribute('src', iframe.dataset.src);

			// Aviso si el archivo no está en la carpeta docs/ (solo funciona con servidor, no con file://)
			if (location.protocol.indexOf('http') === 0) {
							fetch(iframe.dataset.src, { method: 'HEAD' }).then(function (respuesta) {
							if (!respuesta.ok && typeof M !== 'undefined') {
										M.toast({ html: 'No se encontró ' + iframe.dataset.src, displayLength: 4000 });
									}
								}).catch(function () {});
							}
						}

			visor.hidden = estabaAbierto;
			boton.setAttribute('aria-expanded', String(!estabaAbierto));
			boton.querySelector('i').textContent = estabaAbierto ? 'visibility' : 'visibility_off';
			boton.querySelector('.texto-boton').textContent = estabaAbierto ? 'Mostrar documento' : 'Ocultar documento';

			// Mensaje con toast de Materialize
			if (typeof M !== 'undefined') {
					M.toast({
							html: (estabaAbierto ? 'Ocultando ' : 'Mostrando ') + boton.dataset.documento,
							displayLength: 2000
						});
					}
		});
	});
});