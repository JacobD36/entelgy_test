const modal = document.getElementById("modal");
const modalDialog = modal.querySelector(":scope > [role='modal-dialog']");
const btnClose = modalDialog.querySelector(":scope > header > [role='btn-close']");
const modalTitulo = document.querySelector("#titulo");
const modalBody = document.querySelector(".area-body");
modal.addEventListener("click", () => modal.classList.add("modal-hide"));
modalDialog.addEventListener("click", e => e.stopPropagation());
btnClose.addEventListener("click", () => modal.classList.add("modal-hide"));

const openModal = (id) => {
    const usuario = getUser(id);
    let modalData = '';

    usuario.then(data => {
        modalData = `
            <div class="columna">
                <div class="columna3 foto_container"><img src="${data['data']['avatar']}" alt="avatar" width=200></div>
                <div class="columna3">
                    <p><span class="etiqueta">Email:</span> ${data['data']['email']}</p>
                    <p><span class="etiqueta">First Name:</span> ${data['data']['first_name']}</p>
                    <p><span class="etiqueta">Last Name:</span> ${data['data']['last_name']}</p>
                </div>
            </div>
        `;

        modalTitulo.innerHTML = data['data']['first_name'] + ' ' +data['data']['last_name'];
        modalBody.innerHTML = modalData;
        modal.classList.remove("modal-hide");
        modal.classList.add("modal-show");
    });   
}