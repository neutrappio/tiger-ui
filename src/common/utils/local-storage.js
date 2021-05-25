export const getSavedState = (key) => {
    let savedState = localStorage.getItem(key);
    return savedState && JSON.stringify(savedState) || {};
}

export const saveState = (key, data) => {
    localStorage.setItem(JSON.stringify(data));
}