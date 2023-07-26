function openModal(img) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}
