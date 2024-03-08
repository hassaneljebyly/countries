export const setTheme = () => {
  let defaultTheme =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : localStorage.getItem('theme') || 'light';

  document.body.setAttribute('data-theme', defaultTheme);
  return defaultTheme;
};

export const toggleTheme = (theme, setTheme) => {
  return (e) => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };
};
