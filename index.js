// ================ NavBar ========================
const contactButton = document.getElementById('contact');
const resumeButton = document.getElementById('resume');
const portfolioButton = document.getElementById('portfolio');



// ================= Modals ========================
let modalOverlay = document.getElementById('modalOverlay'); // not a modal but the overlay
let allModals = document.getElementsByClassName('modal') // all modal Html collection (not an array but kind of)
let contactModal = document.getElementById('contactModal');
let resumeModal = document.getElementById('resumeModal');
let portfolioModal = document.getElementById('portfolioModal');


// ================= Opening Modal EventHandler ===================
function openModal(event) {

  const selector = event.target.id

  modalOverlay.style.visibility = 'visible';

  switch (selector) {
    case 'contact':
      contactModal.style.visibility = 'visible';
      contactModal.style.height = '80vh'
      break;
    case 'resume':
      resumeModal.style.visibility = 'visible';
      resumeModal.style.height = '80vh'
      break;
    case 'portfolio':
      portfolioModal.style.visibility = 'visible';
      portfolioModal.style.height = '80vh'
      break;
  }
}

// ===================== NavBar button eventListeners ===================

contactButton.addEventListener('click', openModal)
resumeButton.addEventListener('click', openModal)
portfolioButton.addEventListener('click', openModal)




function overlayCloseModal() {
  for (let modal of allModals) {
    modal.style.height = '0px'
    modal.style.visibility = 'hidden';
  }
  modalOverlay.style.visibility = 'hidden'
}
modalOverlay.addEventListener('click', overlayCloseModal)










