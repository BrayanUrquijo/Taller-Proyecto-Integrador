# ElPuntoTech

## Guía para el equipo

Este documento sirve como guía de trabajo para los compañeros que continúen el proyecto. Antes de crear o modificar una página, revisen `DESIGN.md`: allí están definidos los colores, la tipografía, los bordes, el espaciado y las reglas visuales que debe seguir todo el proyecto.

## Organización de archivos

- `Index.html`: página de inicio.
- `Nosotros.html`: página destinada a la información del equipo o del proyecto.
- `Objetivos.html`: página destinada a los objetivos.
- `Avances.html`: página destinada al seguimiento del desarrollo.
- `Contacto.html`: página destinada a la información de contacto.
- `css/styles.css`: estilos propios compartidos por las páginas.
- `js/theme.js`: aplica el tema guardado antes de mostrar la página.
- `js/app.js`: controla el botón de tema.
- `img/logo-elpuntotech.svg`: isotipo del proyecto.
- `DESIGN.md`: sistema visual que debe respetarse.
- `COLORES.md`: referencia rápida de los colores y sus usos.

## Cómo usar Materialize

Las páginas nuevas deben conservar la estructura base de Materialize dentro del `<head>`:

```html
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
```

Y antes de cerrar el `<body>`:

```html
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js">
</script>
```

Materialize se utiliza como apoyo para componentes y utilidades. Antes de crear estilos nuevos, revisen si Materialize ya ofrece el componente necesario. Los estilos específicos de ElPuntoTech deben escribirse en `css/styles.css`.

## Reglas para crear páginas

1. Usen HTML semántico: `header`, `nav`, `main`, `section`, `article` y `footer` cuando correspondan.
2. Mantengan el idioma del documento como `lang="es"`.
3. Incluyan `charset`, `viewport`, título y favicon.
4. Reutilicen `css/styles.css` y `img/logo-elpuntotech.svg`.
5. Usen nombres de clases propios en español y relacionados con la función del elemento.
6. No usen nombres genéricos o heredados para los componentes propios del proyecto.
7. No agreguen estilos directamente en el HTML.
8. No dupliquen reglas de tema, navegación, botones o tipografía.
9. Mantengan el modo oscuro como tema predeterminado.
10. Verifiquen que los enlaces apunten al nombre real de cada archivo HTML.

## Clases y estilos

Las clases propias deben describir su propósito. Por ejemplo:

```html
<section class="seccion-inicio">
	<div class="contenedor-pagina">
		<div class="tarjeta-inicio">
			<h1 class="titulo-inicio">Título</h1>
		</div>
	</div>
</section>
```

No creen nombres sin relación con el contenido ni mezclen varias formas de nombrar el mismo componente. Para colores, tamaños, tipografía y responsive, sigan `DESIGN.md`  (Este es el de google) y consulten `COLORES.md` (mio).

## Temas

El tema oscuro se aplica por defecto desde `js/theme.js`. El botón de tema se controla desde `js/app.js` y la preferencia se guarda en `localStorage`.

Cuando agreguen un componente nuevo:

- Definan primero su apariencia clara.
- Agreguen su equivalente dentro de `html.dark`.
- Mantengan contraste suficiente entre fondo, texto y bordes.
- No cambien los colores globales sin actualizar `COLORES.md`.

## Flujo de trabajo

1. Revisar `COLORES.md` antes de diseñar.
2. Crear la estructura HTML.
3. Reutilizar Materialize cuando sea apropiado.
4. Agregar únicamente los estilos propios necesarios.
5. Probar el modo claro y oscuro.
6. Verificar los enlaces entre páginas.
7. Revisar el formato y eliminar código que no se use.


