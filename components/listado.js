const listadoUsuarios = () => {
    const usuarios = getUsuarios();
    console.log(usuarios);    
    let listaHml = '';
    
    usuarios.forEach(usuario => {
        listaHml += `<tr>
            <td>Jaime Perez Frias</td>
        </tr>`;
    });
     const usersTable = `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                ${listaHml}
            </tbody>
        </table>
    `;
    return usersTable;
}

document.querySelector('.columna2').innerHTML = listadoUsuarios();