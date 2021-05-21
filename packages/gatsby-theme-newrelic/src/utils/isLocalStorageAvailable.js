const isLocalStorageAvailable = () => {
  try {
    localStorage.setItem('test', 'value');
    localStorage.getItem('test');
    localStorage.removeItem('test');
  } catch (error) {
    return false;
  }
  return true;
};

export default isLocalStorageAvailable;
