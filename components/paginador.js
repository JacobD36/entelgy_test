const pageElem = document.querySelector('a');

const getPage = (page) => {
    const pSel = `p${page}`;
    const pageSelector = document.getElementById(pSel);

    document.getElementById('p1').classList.remove('activo');
    document.getElementById('p2').classList.remove('activo');
    pageSelector.classList.add('activo');

    listadoUsuarios(page);
}