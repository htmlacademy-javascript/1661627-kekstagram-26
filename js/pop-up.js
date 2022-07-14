import {escapeButton} from './util.js';
import {fullSizePic} from './fullsize-picture.js';

const body = document.body;

const openModal = () => {
  body.classList.add('modal-open');
  fullSizePic.classList.remove('hidden');
  document.addEventListener('keydown', closeModalEsc);
};

const closeModal = () => {
  body.classList.remove('modal-open');
  fullSizePic.classList.add('hidden');
  document.removeEventListener('keydown', closeModalEsc);
};

function closeModalEsc(evt) {
  if (escapeButton(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

export {openModal, closeModal};
