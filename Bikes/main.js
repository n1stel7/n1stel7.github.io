const carrito = document.querySelector("#carrito");
const elementos1 = document.querySelector("#lista-1");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");


function loadEvents() {
	elementos1.addEventListener("click", comprar);
	carrito.addEventListener("click", borrar);
	vaciarCarrito.addEventListener("click", vaciar);
	carrito.parentElement.querySelector("img").addEventListener("click", e => {
		if (carrito.style.display == "block") {
			carrito.style.display = "none"
		} else {
			carrito.style.display = "block"
		}
	})
}

function comprar(e) {
	console.log(e)
	e.preventDefault();
	if (e.target.classList.contains("agregar-carrito")) {
		const element = e.target.parentElement.parentElement;
		leerdatos(element);
		
	}
}
function leerdatos(element) {
	const info = {
		image: element.querySelector("img").src,
		title: element.querySelector("h3").textContent,
		price: element.querySelector(".precio").textContent,
		id: element.querySelector("a").getAttribute("data-id")
	}
	insertar(info)
}
function insertar(info) {
	const row = document.createElement("tr");
	row.innerHTML = `
		<td>
			<img src="${info.image}">		
		</td>
		<td>
			${info.title}
		</td>
		<td>
			${info.price}
		</td>
		<td>
			<a href="#" class="borrar" data-id="${info.id}">x</a>
		</td>
	`;
	lista.appendChild(row);
	carrito.style.display = "block";
}

function borrar(e) {
	e.preventDefault();
	let element, elementId;
	if (e.target.classList.contains("borrar")) {
		e.target.parentElement.parentElement.remove();
		element = e.target.parentElement.parentElement;
		elementId = element.querySelector("a").getAttribute("data-id");
	}
}

function vaciar() {
	while (lista.firstChild) {
		lista.removeChild(lista.firstChild);
	}
	return false
}

loadEvents()
