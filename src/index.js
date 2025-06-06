import { pageLoader } from './domHandler.js';
import { storageAvailable } from './storageAvailable.js';
import { loadProjects } from './localStorage.js';
// Check if Web Storage is supported
if(storageAvailable("localStorage")) {
  pageLoader.loadPage();
  loadProjects();
} else {
  
}

// Load the page


