import { initNavbar } from './navbar.js';
import { loadSections } from './loadSections.js';
import { initAlbumModal } from './albumModal.js';

async function init(){

    await loadSections();

    initNavbar();

    initAlbumModal();
}

init();