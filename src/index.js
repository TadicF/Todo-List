import { pageLoader } from './domHandler.js';
import { storageAvailable } from './storageAvailable.js';
import { loadProjects } from './localStorage.js';
// Check if Web Storage is supported
if(storageAvailable("localStorage")) {
  pageLoader.loadPage();
  loadProjects();
} else {
  alert('Local Storage is not available on this browser!')  
}

// Checklist:
// Add: - Options(change theme, username etc...)
// Add: - Ability to delete, rename and edit projects and tasks 
// (It should contain a small pen SVG with attached event listener)
// + (Small trash SVG that has event listener attached with ability to
// completely remove project or task)
// Add: Information about the page on the home screen.
