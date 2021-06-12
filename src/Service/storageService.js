function setState(key, value) {
  //Add key also
  window.localStorage.setItem(key, JSON.stringify(value));
}

function getState(key) {
  let state = JSON.parse(window.localStorage.getItem(key));
  //console.log(state.data);
  return state === null ? [] : state;
}

module.exports = {
  setLocalStorage: setState,
  getLocalStorage: getState,
};
