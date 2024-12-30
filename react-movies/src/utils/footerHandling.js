export const canNavigate = (page, totalPages) => { // FUNCTION TO CHECK IF PAGENUM IS VALID
    return page > 0 && page <= totalPages;
  }; 