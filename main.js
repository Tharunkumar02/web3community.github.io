var checkbox = document.querySelector(
    'input[name=theme-switcher]'
  );
  
  checkbox.addEventListener('change', function() {
    if(this.checked) {
      document.documentElement.setAttribute(
        'data-theme', 
        'light'
      )
    } else {
      document.documentElement.setAttribute(
        'data-theme',
        'dark'
      )
    }
  });
  
  