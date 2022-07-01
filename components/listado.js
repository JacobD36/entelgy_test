const verPerfil = (id) => {
    openModal(id);
}

const listadoUsuarios = () => {
    const usuarios = getUsers();
    let listaHml = '';
    
    usuarios.then(data => {
        data['data'].forEach(usuario => {
            listaHml += `<tr>
                <td class="item_center">${usuario['id']}</td>
                <td>${usuario['email']}</td>
                <td>${usuario['first_name']}</td>
                <td>${usuario['last_name']}</td>
                <td class="item_center"><img src="${usuario['avatar']}" alt="avatar"></td>
                <td class="item_center"><button class="boton" onclick="verPerfil(${usuario['id']})">Ver</button></td>

            </tr>`;
        });
        const usersTable = `
            <table class="tabla">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Avatar</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    ${listaHml}
                </tbody>
            </table>
        `;

        document.querySelector('.columna2').innerHTML = usersTable; 
    });
}