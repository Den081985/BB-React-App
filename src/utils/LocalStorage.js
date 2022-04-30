export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key) || "{}");
};

export const putLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
export const removeFromStorage = (item) => {
  localStorage.removeItem(item);
};
