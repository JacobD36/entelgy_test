const url = 'https://reqres.in/api/users';

const existeListado = () => {
    return localStorage.getItem('listado') ? true : false;
}

const getUserFromLocal = () => {
    const usuarios = localStorage.getItem('listado');
    return usuarios;
}

const getUser = async (id) => {
    try {
        const resp = await fetch(`${url}/${id}`);
        if(resp.status === 400) throw 'No se pudo realizar la petición';
        const { data } = await resp.json();
        return { data };
    } catch (error) {
        throw error;
    }
}

const getUsers = async (page) => {
    try {
        const resp = await fetch(`${url}?page=${page}`);
        if(resp.status === 400) throw 'No se pudo realizar la petición';
        const { data } = await resp.json();
        return { data };
    } catch (error) {
        throw error;
    }
}