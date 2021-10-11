
const url = process.env.VUE_APP_API_URL + "/categories/";

const category = {
  name: "category",
  namespaced: true,
  state: {
    categoriesList: [],
  },
  mutations: {
    setCategoriesList(state, data) {
      state.categoriesList = data;
    },
  },
  actions: {
    // retrieve list of post list from the api
    async fetchCategoriesList(context) {
      const res = await fetch(url);

      const data = await res.json();
      console.log(res);
      console.log(data);

      context.commit("setCategoriesList", data);
    },

    async updateModifyCat(context, categoriesList) {
      await fetch(url + categoriesList.id, {
        method: "PUT",
        body: JSON.stringify(categoriesList),
        headers: {
          "Content-type": "application/json",
          authorization: process.env.VUE_APP_TOKEN,

        },
        
      });
      // retrieve the good position of the updated postIt in the store
      const pos = context.state.categoriesList.findIndex(
        (p) => p.id === categoriesList.id
      );
      if (pos > -1) {
        // remove from the store
        context.state.categoriesList.splice(pos, 1, categoriesList);
      }
      context.commit("setCategoriesList", context.state.categoriesList);
    },

    // delete a post it with the api
    // and update the store
    async deleteCat(context, id) {
      // delete in db
      await fetch(url + id + "?force=true", {
        method: "DELETE",
        headers :{
        authorization: process.env.VUE_APP_TOKEN,
      }
      });

      // retrieve ths good position of the deleted postIt in the store
      const pos = context.state.categoriesList.findIndex((p) => p.id === id);
      if (pos > -1) {
        // remove from the store
        context.state.categoriesList.splice(pos, 1);
      }
      context.commit("setCategoriesList", context.state.categoriesList);
    },

    async addCat(context, categories) {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(categories),
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.VUE_APP_TOKEN,
        },
      });

      const data = await res.json();

      context.commit("setCategoriesList", [
        ...context.state.categoriesList,
        {
          id: data.id,
          name: categories.name,
        },
      ]);
    },
  },
  modules: {},
};
export default category;

