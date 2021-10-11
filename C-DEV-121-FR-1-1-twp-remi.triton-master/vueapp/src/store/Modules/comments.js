const url = process.env.VUE_APP_API_URL + "/comments/";

const comments = {
  name: "comments",
  namespaced: true,
  state: {
    commentList: [],
  },
  mutations: {
    setcommentList(state, commentList) {
      state.commentList = commentList.map((p) => ({
        ...p,
      }));
    },
  },
  actions: {
    // On récupère les commentaires de l'API
    async fetchcommentList(context) {
      const res = await fetch(url);
      const data = await res.json();
      console.log(res);
      console.log(data);
      context.commit("setcommentList", data);
    },

    async updateCom(context, commentList) {
      await fetch(url + commentList.id, {
        method: "PUT",
        body: JSON.stringify(commentList),
        headers: {
          "Content-type": "application/json",
          authorization: process.env.VUE_APP_TOKEN,
        },
      });

      // retrieve the good position of the updated postIt in the store
      const pos = context.state.commentList.findIndex(
        (p) => p.id === commentList.id
      );
      if (pos > -1) {
        // remove from the store
        context.state.commentList.splice(pos, 1, commentList);
      }
      context.commit("setCommentList", context.state.commentList);
    },
    // On supprime un com et on met le store à jour
    async deleteComment(context, id) {
      await fetch(url + id, {
        method: "DELETE",
        headers: {
          Authorization: process.env.VUE_APP_TOKEN,
        },
      });

      // On récupère la bonne position du com'
      const pos = context.state.commentList.findIndex((p) => p.id === id);
      if (pos > -1) {
        context.state.commentList.splice(pos, 1);
      }
      context.commit("setcommentList", context.state.commentList);
    },

    //On rajoute un commentaire
    async addComment(context, post) {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json",
          Authorization: process.env.VUE_APP_TOKEN,
        },
      });

      const data = await res.json();

      context.commit("setPoststList", [
        ...context.state.commentList,
        {
          id: data.id,
          content: [post.content],
          post_id: post.id,
        },
      ]);
    },
  },
};

export default comments;
