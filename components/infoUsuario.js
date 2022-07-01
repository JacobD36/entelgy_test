const modal = document.getElementById("modal");
const modalDialog = modal.querySelector(":scope > [role='modal-dialog']");
const btnClose = modalDialog.querySelector(":scope > header > [role='btn-close']");
modal.addEventListener("click", () => modal.classList.add("modal-hide"));
modalDialog.addEventListener("click", e => e.stopPropagation());
btnClose.addEventListener("click", () => modal.classList.add("modal-hide"));

const openModal = (id) => {
    const usuario = getUser(id);
    usuario.then(data => {
        console.log(data);
        modal.classList.remove("modal-hide");
        modal.classList.add("modal-show");
    });   
}