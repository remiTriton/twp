<template>
  <div>
    <navBarC />
    <table class="table table-striped table-dark" style="background-color: #131313;opacity: 0.7;color: white">
      <thead>
        <tr>
          <th scope="col">ID</th>

          <th scope="col">CatID</th>
          <th scope="col">Title</th>
          <th scope="col">Content</th>
          <th scope="col">Delete</th>
          <th scope="col">Update</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="post in poste" :key="post.id">
          <UpdatePost :post="post" />
          <td>{{ post.id }}</td>

          <td>{{ post.categories.join() }}</td>
          <td>{{ post.title.rendered }}</td>

          

          <td>{{ removetags(post.content.rendered) }}</td>
          <td><DeletePost :id="post.id" /></td>
          <td>
            <button
              type="button"
              class="btn btn-outline-info btn-sm"
              data-bs-toggle="modal"
              :data-bs-target="'#updatePost' + post.id"
            >
              Update
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <CreatePost />
  </div>
</template>

<script>
import striptags from "striptags";

import navBarC from "@/components/crudBar.vue";
import CreatePost from "@/components/posts/CreatePost.vue";
import UpdatePost from "@/components/posts/UpdatePost.vue";
import DeletePost from "@/components/posts/DeletePost.vue";

export default {
  name: "PostCrud",
  components: { DeletePost, CreatePost, UpdatePost, navBarC },
props: ["id"],

  created() {
    this.$store.dispatch("post/fetchPosts");
  },
  computed: {
    // create a readonly variable to wrapp store context
    poste() {
      return this.$store.state.post.poste;
    },
  },
  methods: {
    removetags(str) {
      return striptags(str);
    },
  },
};
</script>

<style scoped></style>
