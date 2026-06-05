import { initNavbar } from './navbar.js';
import { loadSections } from './loadSections.js';
import { initAlbumModal } from './albumModal.js';
import { initInterviewModal } from './interviewsModal.js';

import './cultureCarousel.js';

async function init(){

    await loadSections();

    initNavbar();

    initAlbumModal();

    initInterviewModal();
}

init();