const constantize = (str) => str.replace(/[-\s]/g, '_').toUpperCase();

export default constantize;
