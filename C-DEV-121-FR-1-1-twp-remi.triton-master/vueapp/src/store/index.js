// import { createStore } from "vuex";
// import Vue from 'vue'
import Vuex from "vuex";
import comments from "./modules/comments";
import post from "./modules/Post";
import category from "./modules/categories";

export default new Vuex.Store({
  name: "store",
  namespaced: true,
  state: {},
  mutations: {},

  actions: {},
  modules: {
    comments,
    post,
    category,
  },
});
