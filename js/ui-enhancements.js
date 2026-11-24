document.addEventListener("DOMContentLoaded", () => {
	// 1. Menú desplegable "Información" (soporte click, móvil y teclado)
	const desplegables = document.querySelectorAll(".item-desplegable");

	desplegables.forEach((item) => {
		const boton = item.querySelector(".boton-desplegable-nav");
		if (!boton) return;

		boton.addEventListener("click", (event) => {
			event.stopPropagation();
			const estaAbierto = item.classList.toggle("abierto");
			boton.setAttribute("aria-expanded", String(estaAbierto));
		});
	});

	document.addEventListener("click", (event) => {
		desplegables.forEach((item) => {
			if (!item.contains(event.target)) {
				item.classList.remove("abierto");
				const boton = item.querySelector(".boton-desplegable-nav");
				if (boton) boton.setAttribute("aria-expanded", "false");
			}
		});
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			desplegables.forEach((item) => {
				item.classList.remove("abierto");
				const boton = item.querySelector(".boton-desplegable-nav");
				if (boton) boton.setAttribute("aria-expanded", "false");
			});
		}
	});

	// 2. Animaciones de aparición suave al hacer scroll
	const elementosRevelar = document.querySelectorAll(".revelar-scroll");
	if ("IntersectionObserver" in window && elementosRevelar.length > 0) {
		const observador = new IntersectionObserver(
			(entradas, obs) => {
				entradas.forEach((entrada) => {
					if (entrada.isIntersecting) {
						entrada.target.classList.add("visible");
						obs.unobserve(entrada.target);
					}
				});
			},
			{ threshold: 0.12 }
		);
		elementosRevelar.forEach((el) => observador.observe(el));
	} else {
		elementosRevelar.forEach((el) => el.classList.add("visible"));
	}

	// 3. Simulación interactiva de carrito / factura en Inicio (Vista previa del software)
	const botonesSimular = document.querySelectorAll(".boton-simular-producto");
	const contadorEl = document.getElementById("contador-items-sim");
	const totalEl = document.getElementById("total-simulado");
	const botonReiniciar = document.getElementById("boton-reiniciar-sim");

	if (botonesSimular.length > 0 && contadorEl && totalEl) {
		let cantidad = 0;
		let total = 0;

		const formatearCOP = (valor) =>
			"$ " + valor.toLocaleString("es-CO");

		botonesSimular.forEach((boton) => {
			boton.addEventListener("click", () => {
				const precio = Number(boton.dataset.precio || 0);
				const nombre = boton.dataset.nombre || "Producto";
				cantidad += 1;
				total += precio;

				contadorEl.textContent = `${cantidad} ${cantidad === 1 ? "ítem" : "ítems"}`;
				totalEl.textContent = formatearCOP(total);

				const textoOriginal = boton.innerHTML;
				boton.innerHTML = '<i class="material-icons" style="font-size:1rem;">check</i><span>Añadido</span>';
				setTimeout(() => {
					boton.innerHTML = textoOriginal;
				}, 900);

				if (window.M && typeof window.M.toast === "function") {
					window.M.toast({
						html: `Vista previa POS: <strong>${nombre}</strong> añadido al pedido`,
						classes: "toast-exito"
					});
				}
			});
		});

		if (botonReiniciar) {
			botonReiniciar.addEventListener("click", () => {
				cantidad = 0;
				total = 0;
				contadorEl.textContent = "0 ítems";
				totalEl.textContent = "$ 0";
			});
		}
	}

	// 4. Selector interactivo de Roles POS en Inicio
	const tabsRoles = document.querySelectorAll(".tab-rol-pos");
	const panelesRoles = document.querySelectorAll(".vista-detalle-rol");

	tabsRoles.forEach((tab) => {
		tab.addEventListener("click", () => {
			const rolObjetivo = tab.dataset.rol;
			tabsRoles.forEach((t) => {
				t.classList.remove("activo");
				t.setAttribute("aria-selected", "false");
			});
			panelesRoles.forEach((panel) => {
				panel.classList.toggle("activa", panel.id === `panel-rol-${rolObjetivo}`);
			});
			tab.classList.add("activo");
			tab.setAttribute("aria-selected", "true");
		});
	});
});