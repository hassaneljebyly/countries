export const setTheme = () => {
  let defaultTheme = localStorage.getItem('theme')
    ? localStorage.getItem('theme')
    : window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

  document.body.setAttribute('data-theme', defaultTheme);
  return defaultTheme;
};

export const toggleTheme = (theme, setTheme) => {
  // eslint-disable-next-line no-unused-vars
  return (e) => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };
};
