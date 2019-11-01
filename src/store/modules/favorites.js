import { filter, find, groupBy } from "lodash";

const state = {
  favorites: [],
  email: null
};

const getters = {
  getEmail: state => {
    return state.email;
  },

  getFavorite: state => item =>
    find(state.favorites, fav => fav.name === item.name && fav.type === item.type), //returns null if not found

  getFavorites: state => {
    return state.favorites;
  },

  getFavoriteById: state => id =>
    find(state.favorites, fav => fav.trackId === id), //returns null if not found

  getFavoritesByKind: state => {
    return groupBy(state.favorites, "kind");
  }
};

const mutations = {
  addFavorite(state, payload) {
    if (!find(state.favorites, fav => fav.name === payload.name && fav.type === payload.type)) {
      //don't add duplicates
      const favCopy = { ...payload }; //create shallow copy of payload so as not to keep a pointer to payload
      state.favorites.push(favCopy);
    }
  },

  removeFavorite(state, {name, type}) {
    state.favorites = filter(
      state.favorites,
      fav => ((fav.name != name) || (fav.type != type))
    );
  },

  setEmail(state, payload) {
    state.email = payload;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
