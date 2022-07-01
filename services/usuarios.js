const url = 'https://reqres.in/api/users';

const existeListado = () => {
    return (localStorage.getItem('listado') && localStorage.getItem('page') && localStorage.getItem('total') && localStorage.getItem('per_page')) ? true : false;
}

const getUserFromLocal = () => {
    const usuarios = localStorage.getItem('listado');
    const page = localStorage.getItem('page');
    const total = localStorage.getItem('total');
    const per_page = localStorage.getItem('per_page');
    return {usuarios, page, total, per_page};
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

const setUser = (data, page, total, per_page) => {
    localStorage.setItem('listado', JSON.stringify(data));
    localStorage.setItem('page', page);
    localStorage.setItem('total', total);
    localStorage.setItem('per_page', per_page);
}

const getUsers = async (new_page) => {
    try {
        const existe = existeListado();
        if(existe)  {
            const {usuarios, page, total, per_page} = getUserFromLocal();
            if(page == new_page) {
                return { data: JSON.parse(usuarios), page: new_page, total: total, per_page: per_page };
            }
        }
        const resp = await fetch(`${url}?page=${new_page}`);
        if(resp.status === 400) throw 'No se pudo realizar la petición';
        const { data, page, total, per_page } = await resp.json();

        setUser(data, page, total, per_page);

        return { data, page, total, per_page };
    } catch (error) {
        throw error;
    }
}