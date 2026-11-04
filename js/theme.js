// Immediate script execution before body renders to avoid flashing and guarantee instant state
  (function() {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme !== 'light') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch(e) {}
  })();
