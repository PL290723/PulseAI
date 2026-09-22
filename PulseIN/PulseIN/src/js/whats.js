document.addEventListener('DOMContentLoaded', () => {
  const waToggle = document.getElementById('wa-toggle');
  const waFormContainer = document.getElementById('wa-form-container');
  const waSend = document.getElementById('wa-send');
  const waMessage = document.getElementById('wa-message');

  //numero de al empresa
  const PHONE_NUMBER = '524611391273'; 

  if (waToggle && waFormContainer) {
    // alternar visibilidad del cuadro de texto
    waToggle.addEventListener('click', () => {
      waFormContainer.classList.toggle('hidden');
    });

    // enviar el mensaje de whatsapp
    waSend.addEventListener('click', () => {
      const msg = waMessage.value.trim();

      if (msg !== '') {
        const waUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(waUrl, '_blank');
        
        // limpiar campo y ocultar
        waMessage.value = '';
        waFormContainer.classList.add('hidden');
      }
    });
  }
});