const verPerfil = (id) => {
    openModal(id);
}

const listadoUsuarios = (page) => {
    const usuarios = getUsers(page);
    let listaHml = '';
    let paginadorHml = '';
    
    usuarios.then(data => {
        if(data['data'].length === 0) {listaHml = `<tr><td colspan="6" style="text-align: center;">No se encontró información</td></tr>`;}
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

        for(i = 1; i <= Math.trunc(data['total']/data['per_page']); i++) {
            paginadorHml += `<li><a href="javascript:void(0)" onclick="getPage('${i}')" id="p${i}">${i}</a></li>`;
        }
        
        document.querySelector('#paginador').innerHTML = `<ul class="paginacion">${paginadorHml}</ul>`;
        document.querySelector('.columna2').innerHTML = usersTable; 
    });
}