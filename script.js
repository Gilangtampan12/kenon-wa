function kenon() {
  const nomor = document.getElementById('nomor').value.trim();
  if (nomor === "") {
    alert("Masukkan nomor dulu!");
    return;
  }
  
  document.getElementById('notif').classList.remove('hidden');
  const audio = document.getElementById("sound");
audio.currentTime = 0;
audio.play();
}

function zoomQRIS(img) {
  const modal = document.getElementById('qrisModal');
  const modalImg = document.getElementById('qrisZoom');
  modal.style.display = "flex";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById('qrisModal').style.display = "none";
}
