const url = process.env.VUE_APP_API_URL + "/posts/";

const post = {
  namespaced: true,
  name: "post",

  state: {
    poste: [],
  },
  mutations: {
    setPoste(state, poste) {
      state.poste = poste.map((p) => ({
        ...p,
      }));
    },
  },
  actions: {
    // retrieve list of post list from the api
    async fetchPosts(context) {
      const res = await fetch(url);
      console.log(res);
      const data = await res.json();
      console.log(data);
      context.commit("setPoste", data);
    },

    async UpdatePost(context, poste) {
      await fetch(url + poste.id, {
        method: "PUT",
        body: JSON.stringify(poste),
        headers: {
          "Content-type": "application/json",
          authorization: process.env.VUE_APP_TOKEN,
        },
      });

      // retrieve the good position of the updated postIt in the store
      const pos = context.state.poste.findIndex((p) => p._id === poste.id);
      if (pos > -1) {
        // remove from the store
        context.state.poste.splice(pos, 1, poste);
      }
      context.commit("setPoste", context.state.poste);
    },

    // delete a post it with the api
    // and update the store
    async deletePost(context, id) {
      // delete in db
      await fetch(url + id, {
        method: "DELETE",
        headers: {
          authorization: process.env.VUE_APP_TOKEN,
        },
      });

      // retrieve ths good position of the deleted postIt in the store
      const pos = context.state.poste.findIndex((p) => p.id === id);
      if (pos > -1) {
        // remove from the store
        context.state.poste.splice(pos, 1);
      }
      context.commit("setPoste", context.state.poste);
    },

    async CreatePost(context, posta) {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(posta),
        headers: {
          "Content-type": "application/json",
          authorization: process.env.VUE_APP_TOKEN,
        },
      });

      const data = await res.json();

      context.commit("setPoste", [
        ...context.state.poste,
        {
          id: data.post,
          title: posta.title,
          content: [posta.content],
        },
      ]);
    },
  },
  modules: {},
};

export default post;
