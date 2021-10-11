<template>
  <div>
    <navBarC />
    <div>
      <table class="table table-striped table-dark" style="background-color: #131313;opacity: 0.7;color: white">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Content</th>
            <th scope="col">Author</th>
            <th scope="col">Related to Post Id</th>
            <th scope="col">Delete</th>
            <th scope="col">Modify</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="com in commentList" :key="com.id">
            <updateCom :com="com" />

            <td>{{ com.id }}</td>
            <td>{{ removetags(com.content.rendered) }}</td>
            <td>{{ com.author_name }}</td>
            <td>{{ com.post }}</td>
            <td><deleteCom :id="com.id" /></td>
            <td>
              <button
                type="button"
                class="btn btn-outline-info btn-sm"
                data-bs-toggle="modal"
                :data-bs-target="'#updateCom' + com.id"
              >
                Modify
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <addComment />
    </div>
  </div>
</template>

<script>
var striptags = require("striptags");

import navBarC from "../components/crudBar.vue";
import updateCom from "../components/comments/updateCom.vue";
import addComment from "./addComment.vue";
import deleteCom from "../components/comments/deleteComment.vue";
export default {
  name: "crudCom",
  components: {
    addComment,
    deleteCom,
    navBarC,
    updateCom,
  },
  methods: {
    removetags(str) {
      return striptags(str);
    },
  },
  created() {
    this.$store.dispatch("post/fetchPosts");
    this.$store.dispatch("comments/fetchcommentList");
  },

  computed: {
    commentList() {
      return this.$store.state.comments.commentList;
    },

    poste() {
      return this.$store.state.post.poste;
    },
  },
};
</script>
