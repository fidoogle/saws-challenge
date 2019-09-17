import { filter, find, groupBy } from "lodash";

const state = {
  favorites: []
};

const getters = {
  getFavoriteById: state => id =>
    find(state.favorites, fav => fav.trackId === id), //returns null if not found

  getFavoritesByKind: state => {
    return groupBy(state.favorites, "kind");
  }
};

const mutations = {
  addFavorite(state, payload) {
    if (!find(state.favorites, fav => fav.trackId === payload.trackId)) {
      //don't add duplicates
      const favCopy = { ...payload }; //create shallow copy of payload so as not to keep a pointer to payload
      state.favorites.push(favCopy);
    }
  },

  removeFavorite(state, payload) {
    state.favorites = filter(
      state.favorites,
      fav => fav.trackId !== payload.trackId
    );
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
