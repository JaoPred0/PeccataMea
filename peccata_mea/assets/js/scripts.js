// Botão de edição
const btnEditar = document.createElement('button');
btnEditar.className = 'btn btn-sm btn-outline-warning position-absolute bottom-0 end-0 m-2';
btnEditar.title = 'Editar nota';
btnEditar.innerHTML = '<i class="bi bi-pencil-square"></i>';

btnEditar.addEventListener('click', () => {
  document.getElementById('editarNotaId').value = id;
  document.getElementById('editarTituloNota').value = nota.titulo;
  document.getElementById('editarTextoNota').value = nota.texto;
  new bootstrap.Modal(document.getElementById('editarNotaModal')).show();
});

card.querySelector('.card-body').appendChild(btnEditar);
let todasAsNotas = [];
