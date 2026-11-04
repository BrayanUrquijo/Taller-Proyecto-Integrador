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
	  // Validación interactiva del formulario de contacto (Punto 5 - Contacto.html)
  var formularioContacto = document.getElementById('formulario-contacto');
  if (formularioContacto) {
    var campoNombre = document.getElementById('nombre');
    var campoCorreo = document.getElementById('correo');
    var campoMensaje = document.getElementById('mensaje');
    var botonLimpiar = document.getElementById('boton-limpiar');
    var mensajeExito = document.getElementById('mensaje-exito');

    var errorNombre = document.getElementById('error-nombre');
    var errorCorreo = document.getElementById('error-correo');
    var errorMensaje = document.getElementById('error-mensaje');

    function limpiarError(campo, errorElemento) {
      if (campo) campo.classList.remove('campo-error');
      if (errorElemento) errorElemento.textContent = '';
    }

    function mostrarError(campo, errorElemento, mensaje) {
      if (campo) {
        campo.classList.add('campo-error');
        campo.focus();
      }
      if (errorElemento) {
        errorElemento.textContent = mensaje;
      }
    }

    // Limpieza de errores 
    if (campoNombre) {
      campoNombre.addEventListener('input', function() {
        limpiarError(campoNombre, errorNombre);
      });
    }

    if (campoCorreo) {
      campoCorreo.addEventListener('input', function() {
        limpiarError(campoCorreo, errorCorreo);
      });
    }

    if (campoMensaje) {
      campoMensaje.addEventListener('input', function() {
        limpiarError(campoMensaje, errorMensaje);
      });
    }

    // Botón de limpiar / resetear formulario
    if (botonLimpiar) {
      botonLimpiar.addEventListener('click', function() {
        formularioContacto.reset();
        limpiarError(campoNombre, errorNombre);
        limpiarError(campoCorreo, errorCorreo);
        limpiarError(campoMensaje, errorMensaje);
        if (mensajeExito) {
          mensajeExito.classList.add('oculto');
          mensajeExito.textContent = '';
        }
      });
    }

    // Evento de envío del formulario
    formularioContacto.addEventListener('submit', function(evento) {
      evento.preventDefault();

      var nombreValor = campoNombre ? campoNombre.value.trim() : '';
      var correoValor = campoCorreo ? campoCorreo.value.trim() : '';
      var mensajeValor = campoMensaje ? campoMensaje.value.trim() : '';

      var esValido = true;
      limpiarError(campoNombre, errorNombre);
      limpiarError(campoCorreo, errorCorreo);
      limpiarError(campoMensaje, errorMensaje);
      if (mensajeExito) mensajeExito.classList.add('oculto');

      // Validar mensaje (mínimo 10 caracteres)
      if (!mensajeValor) {
        mostrarError(campoMensaje, errorMensaje, 'Por favor, ingresa tu mensaje.');
        esValido = false;
      } else if (mensajeValor.length < 10) {
        mostrarError(campoMensaje, errorMensaje, 'El mensaje debe contener al menos 10 caracteres.');
        esValido = false;
      }

      // Validar correo, se asegura de que el corrego tenga los caracteres necesarios
      var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!correoValor) {
        mostrarError(campoCorreo, errorCorreo, 'Por favor, ingresa tu correo electrónico.');
        esValido = false;
      } else if (!regexCorreo.test(correoValor)) {
        mostrarError(campoCorreo, errorCorreo, 'Ingresa un correo válido (ejemplo: usuario@correounivalle.edu.co).');
        esValido = false;
      }

      // Validar nombre con un mínimo de 3 caracteres
      if (!nombreValor) {
        mostrarError(campoNombre, errorNombre, 'Por favor, ingresa tu nombre completo.');
        esValido = false;
      } else if (nombreValor.length < 3) {
        mostrarError(campoNombre, errorNombre, 'El nombre debe contener al menos 3 caracteres.');
        esValido = false;
      }

      // Si no es válido, detener el flujo
      if (!esValido) {
        return;
      }

      // 1. Notificación mediante Toast de Materialize
      if (typeof M !== 'undefined' && M.toast) {
        M.toast({
          html: '<span style="display:inline-flex;align-items:center;gap:0.5rem;"><i class="material-icons" style="color:#38bdf8;">check_circle</i> ¡Mensaje enviado con éxito! Nos comunicaremos pronto.</span>',
          classes: 'toast-exito rounded',
          displayLength: 4500
        });
      } else {
        // Fallback a alert tradicional si Materialize JS no está cargado
        alert('¡Gracias, ' + nombreValor + '! Tu mensaje ha sido enviado exitosamente.');
      }

      // 2. Notificación visual integrada dentro de la tarjeta
      if (mensajeExito) {
        mensajeExito.textContent = '¡Gracias, ' + nombreValor + '! Hemos recibido tu mensaje y te responderemos a la brevedad a ' + correoValor + '.';
        mensajeExito.classList.remove('oculto');
      }

      // 3. Resetear los campos del formulario
      formularioContacto.reset();
    });
  }
});

