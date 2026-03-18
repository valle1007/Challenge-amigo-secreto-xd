let amigos = [];
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function agregarAmigo() {
  let amigoInput = document.getElementById('amigo');
  let nombreAmigo = amigoInput.value.trim();

  // Validar la entrada: Si el campo está vacío, mostrar una alerta.
  if (nombreAmigo === '') {
    alert("Por favor, inserte un nombre.");
    return;
  }
  
  // Evitar nombres duplicados.
  if (amigos.includes(nombreAmigo)) {
    alert("Este nombre ya ha sido agregado.");
    return;
  }

  // Actualizar el array de amigos usando .push().
  amigos.push(nombreAmigo);
  console.log(amigos);

  // Limpiar el campo de entrada.
  amigoInput.value = '';

  // Actualizar la lista en el HTML.
  actualizarLista();
}

function actualizarLista() {
  // Limpiar la lista existente con innerHTML.
  lista.innerHTML = '';
  // Iterar sobre el arreglo y agregar elementos.
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  // Validar que haya amigos disponibles.
  if (amigos.length < 2) {
    alert('Necesitas al menos 2 amigos para sortear.');
    return;
  }

  // Generar un índice aleatorio usando Math.random() y Math.floor().
  let numeroAmigo = Math.floor(Math.random() * amigos.length);
  
  // Obtener el nombre sorteado.
  let amigoSorteado = amigos[numeroAmigo];

  // Mostrar el resultado en el HTML.
  resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
}

function reiniciar() {
    amigos = [];
    lista.innerHTML = '';
    resultado.innerHTML = '';
}