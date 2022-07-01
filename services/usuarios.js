const existeListado = () => {
    return localStorage.getItem('listado') ? true : false;
}

const getUserFromLocal = () => {
    const usuarios = localStorage.getItem('listado');
    return usuarios;
}

const getUser = (id) => {

}

const setUsers = () => {
    const usuarios = getUsuarios();
    localStorage.setItem('listado', usuarios);
}

const getUsuarios = () => {
    if(!existeListado) {
        const usuarios = getUserFromLocal();
        return usuarios;
    }
    return ['Jaime', 'Pepe', 'Maria'];
}

setUsers();